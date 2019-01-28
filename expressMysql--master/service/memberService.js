import BaseService from './baseService';
import ExternalService from './externalService';
import DiamondLogService from './diamondLogService';
import DiamondExchangeOrderService from './diamondExchangeOrderService';
import MoraConfigService from './moraConfigService';
import Moment from 'moment';
import {AutoWritedMemberModel} from '../common/AutoWrite';
import {sequelize} from "../config/db";

@AutoWritedMemberModel

class MemberService extends BaseService{
    constructor(){
        super(MemberService.model);
    }

    async getMemberInfoService(secretdata, user_name, user_avatar){
        let memberInfo = ExternalService.memberInfoDecode(secretdata);
        let uid = Number(memberInfo.uid);
        let token = memberInfo.token;
        let lang = Number(memberInfo.lang);
        let network = Number(memberInfo.network);
        let clientType = Number(memberInfo.clientType);
        let version = memberInfo.version;
        let updateData = {};
        let res = await MemberService.model.findOrBuildMember({id:uid},{id:uid, user_name:user_name, user_avatar:user_avatar, diamond:0, token:token, freeze_diamond:0});
        if(res[0]['token'] !== token){
            updateData.token = token;
        }else if(res[0]['user_avatar'] !== user_avatar){
            updateData.user_avatar = user_avatar;
        }else if(res[0]['user_name'] !== user_name){
            updateData.user_name = user_name;
        }

        if(updateData !== {}){
            await this.baseUpdate(updateData, {id: uid});
        }

        return {
            uid:uid,
            lang:lang,
            token:token,
            network:network,
            clientType:clientType,
            version:version,
            diamond:res[0]['diamond'],
        }
    }

    //钻石递增
    diamondIncrementService(uid, num){
        return MemberService.model.diamondIncrement(uid, num);
    }

    //钻石递减
    diamondDecrementService(uid, num){
        return MemberService.model.diamondDecrement(uid, num);
    }

    //钻石递减

    diamondDecrementService2(uid, num){
        return MemberService.model.diamondDecrement2(uid, num);
    }

    //冻结钻石递增
    freezeDiamondIncrementService(uid, num){
        return MemberService.model.freezeDiamondIncrement(uid, num);
    }

    //冻结钻石递减
    freezeDiamondDecrementService(uid, num){
        return MemberService.model.freezeDiamondDecrement(uid, num);
    }

    //解冻钻石
    unfreezeDiamondService(uid, num){
        return MemberService.model.unfreezeDiamond(uid, num);
    }

    //冻结钻石
    freezeDiamond(uid, num){
        return MemberService.model.freezeDiamond(uid, num);
    }

    async getMemberInfoByIdService(id, attribute){
        return MemberService.model.getMemberInfoById(id, attribute);
    }

    //svc兑换成钻石
    async exchangeDiamondService(postData){
        console.log(postData);
        if(!postData.uid){
            return {code:110, msg:'uid_empty'}
        }
        if(!postData.pwd){
            return {code:110, msg:'pwd_empty'}
        }
        if(!postData.num){
            return {code:110, msg:'num_empty'}
        }
        let checkRes = await ExternalService.checkSecondPwdService(postData.uid, postData.pwd);
        if(!checkRes){
            return {code:110, msg:'pwd_error'}
        }
        let num = Number(postData.num);
        let exchangeRate = await MoraConfigService.getExchangeRateConfig();
        let diamond = postData.num / exchangeRate[0]['value'];
        let orderNO = ExternalService.getOrderNO(postData.clientType);
        let orderCreateData = {
            uid:postData.uid,
            orderNO: orderNO,
            diamond: diamond,
            amount: num,
            orderType: 1,
            payType:3,
            status:0,
            content:'vsc兑换成钻石',
            datetime: Moment().format('YYYY-MM-DD HH:mm:ss'),
            payTime: Moment().format('YYYY-MM-DD HH:mm:ss'),
            finishTime: Moment().format('YYYY-MM-DD HH:mm:ss')
        };
        //创建订单
        let orderCreateRes = await DiamondExchangeOrderService.baseCreate(orderCreateData);
        if(!orderCreateRes){
            return {code:110, msg:'create_order_faild'}
        }
        postData.orderId = orderCreateRes.id;
        //2.请求外部兑换接口
        try {
           var res = await ExternalService.postExchangeDiamondService(postData);
        }catch (e) {
            console.log(e);
            throw e;
        }
        console.log(res);
        if(res == 0){
         return await sequelize.transaction(async ()=>{
                let incrementRes = await this.diamondIncrementService(postData.uid, diamond);
                //3.创建资产变更日志
                incrementRes.source = 0;
                incrementRes.content = 'vsc兑换成钻石';
                incrementRes.status = 1;
                incrementRes.join_id = orderNO;
                await DiamondLogService.baseCreate(incrementRes);
                //4.修改兑换状态为成功
                await DiamondExchangeOrderService.baseUpdate({status: 9}, {id:orderCreateRes.id});
                return incrementRes.after_change;
            }).then((number) => {
                return {diamond:number};
            }).catch((err) => {
                return {code:5, msg:'diamond_will_arrive_later'};
            });
        }else{
            return {msg:'diamond_will_arrive_later'};
        }
    }

    //diamond兑换成Vsc
    async exchangeVscService(postData) {
        if (!postData.uid) {
            return {code:110, msg:'uid_empty'}
        }
        if (!postData.pwd) {
            return {code:110, msg:'pwd_empty'}
        }
        if (!postData.num) {
            return {code:110, msg:'num_empty'}
        }
        //TODO：校验二级密码
        // let checkRes = await ExternalService.checkSecondPwdService(postData.uid, postData.pwd);
        // if (!checkRes) {
        //     return {code:110, msg:'pwd_error'}
        // }

       return sequelize.transaction(async (t) => {
            //创建订单
            let exchangeRate = await MoraConfigService.getExchangeRateConfig();
            let vsc = Number(postData.num) * exchangeRate[0]['value'];
            let orderNO = ExternalService.getOrderNO(postData.clientType);
            let orderCreateData = {
                uid: Number(postData.uid),
                orderNO: orderNO,
                diamond: Number(postData.num),
                amount: vsc,
                orderType: 2,
                payType: 3,
                status: 0,
                content: '钻石兑换成vsc',
                datetime: Moment().format('YYYY-MM-DD HH:mm:ss'),
                payTime: Moment().format('YYYY-MM-DD HH:mm:ss'),
                finishTime: Moment().format('YYYY-MM-DD HH:mm:ss')
            };

            //创建兑换订单
            let orderCreateRes = await DiamondExchangeOrderService.baseCreate(orderCreateData);

            //冻结钻石
            let freeRes = await MemberService.model.freezeDiamond(postData.uid, Number(postData.num));
            //添加资产变更日志
            freeRes.source = 1;
            freeRes.content = '钻石兑换svc';
            freeRes.vsc = vsc;
            freeRes.join_id = orderCreateRes.id;
            await DiamondLogService.baseCreate(freeRes);
            return {orderId:orderCreateRes.id, diamond:freeRes.after_change};
        }).then(async (res)=>{
            postData.orderId = res.orderId;
            //请求外部兑换接口
            await ExternalService.postExchangeVscService(postData);
            return {diamond:res.diamond, msg:'vsc_will_arrive_later'};
        }).catch((err)=>{
            return {code:110, msg:err.message};
        });
    }
}

module.exports = new MemberService();