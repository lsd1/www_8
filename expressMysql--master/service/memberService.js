import BaseService from './baseService';
import ExternalService from './externalService';
import DiamondLogService from './diamondLogService';
import DiamondLogModel from '../model/diamondLogModel';
import DiamondExchangeOrderService from './diamondExchangeOrderService';
import DiamondExchangeOrderModel from '../model/diamondExchangeOrderModel';
import MoraConfigService from './moraConfigService';
import TaskService from './taskService';
import Moment from 'moment';
import {AutoWritedMemberModel} from '../common/AutoWrite';
import {sequelize} from "../config/db";

@AutoWritedMemberModel

class MemberService extends BaseService{
    constructor(){
        super(MemberService.model);
    }
    async getMemberInfoService(secretdata){
        let memberInfo = ExternalService.memberInfoDecode(secretdata);
        //调用外部接口获取用户信息
        let memberDetail = {},user_name = '', user_avatar = '', vscAmount = 0;
        try {
            memberDetail = await ExternalService.postGetMemberInfoService(memberInfo);
            if(memberDetail == -1){
                memberDetail = await ExternalService.postGetMemberInfoService(memberInfo);
            }
        }catch (e) {
            console.log(e);
        }
        if(memberDetail.code == 0){
             user_name = memberDetail.data.memberInfo.username;
             user_avatar = memberDetail.data.memberInfo.avatar;
             vscAmount = memberDetail.data.memberInfo.vscAmount;
        }

        let uid = Number(memberInfo.uid);
        let token = memberInfo.token;
        let lang = Number(memberInfo.lang);
        let network = Number(memberInfo.network);
        let clientType = Number(memberInfo.clientType);
        let version = memberInfo.version;
        let updateData = {};
        let res = await MemberService.model.findOrBuildMember({id:uid},{id:uid, user_name:user_name, user_avatar:user_avatar, diamond:0, token:token, freeze_diamond:0});
        let exchangeRate = await MoraConfigService.getExchangeRateConfig();
        if(token && res[0]['token'] !== token){
            updateData.token = token;
        }else if(user_avatar && res[0]['user_avatar'] !== user_avatar){
            updateData.user_avatar = user_avatar;
        }else if(user_name && res[0]['user_name'] !== user_name){
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
            avatar:user_avatar || res[0]['user_avatar'],
            name:user_name || res[0]['user_name'],
            version:version,
            diamond:res[0]['diamond'],
            vscAmount:vscAmount,
            exchangeRate:exchangeRate[0]['value']
        }
    }

    //钻石递增
    diamondIncrementService(uid, num, transaction){
        return MemberService.model.diamondIncrement(uid, num, transaction);
    }

    //钻石递减
    diamondDecrementService(uid, num, transaction){
        return MemberService.model.diamondDecrement(uid, num, transaction);
    }

    //钻石递减

    diamondDecrementService2(uid, num, transaction){
        return MemberService.model.diamondDecrement2(uid, num, transaction);
    }

    //冻结钻石递增
    freezeDiamondIncrementService(uid, num, transaction){
        return MemberService.model.freezeDiamondIncrement(uid, num, transaction);
    }

    //冻结钻石递减
    freezeDiamondDecrementService(uid, num, transaction){
        return MemberService.model.freezeDiamondDecrement(uid, num, transaction);
    }

    //解冻钻石
    unfreezeDiamondService(uid, num, transaction){
        return MemberService.model.unfreezeDiamond(uid, num, transaction);
    }

    //冻结钻石
    freezeDiamond(uid, num, transaction){
        return MemberService.model.freezeDiamond(uid, num, transaction);
    }

    async getMemberInfoByIdService(id, attribute, transaction){
        return MemberService.model.getMemberInfoById(id, attribute, transaction);
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
        let checkRes = await ExternalService.postCheckSecondPwdService(postData);
        if(checkRes.code != 0){
            return {code:checkRes.code, msg:checkRes.msg}
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
            status:1,
            content:'vsc兑换成钻石',
            datetime: Moment().format('YYYY-MM-DD HH:mm:ss'),
            payTime: Moment().format('YYYY-MM-DD HH:mm:ss'),
            finishTime: Moment().format('YYYY-MM-DD HH:mm:ss')
        };
        //1.创建订单
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
        if(res.code == 0){
            return await this.exchangeDiamondStep2(orderCreateRes.id, postData.uid);
        } else {
            //创建订单状态监听事务
            let taskData = {
                uid:postData.uid,
                join_id:orderCreateRes.id,
                type:1
            };
            await TaskService.baseCreate(taskData);
            if(res.code > 0){
                return res;
            }else{
                return {code:5, msg:'diamond_will_arrive_later'};
            }
        }
    }

    //vsc兑换钻石第二步
    async exchangeDiamondStep2(orderId, uid) {
        //3.确认订单状态为2
        let res = await DiamondExchangeOrderModel.model.findAll({attributes: ['id', 'uid', 'diamond', 'orderNO'], where: {id:orderId, status: 2}});
        console.log('res:', res);
        if (!res) {
            //创建订单状态监听事务
            let taskData = {
                uid:uid,
                join_id:orderId,
                type:1
            };
            await TaskService.baseCreate(taskData);
            return {code: 5, msg: 'diamond_will_arrive_later'};
        }
        return await sequelize.transaction(async (t) => {
            console.log('res.diamond:', res[0]['diamond']);
            let incrementRes = await this.diamondIncrementService(uid, res[0]['diamond'], {transaction: t});
            //4.创建资产变更日志.
            incrementRes.source = 0;
            incrementRes.content = 'vsc兑换成钻石';
            incrementRes.status = 2;
            incrementRes.join_id = res[0]['orderNO'];
            await DiamondLogService.baseCreate(incrementRes, {transaction: t});
            //5.修改兑换状态为成功.
            await DiamondExchangeOrderModel.model.update({status: 9}, {where: {id: orderId}, transaction: t});
            return incrementRes.after_change;
        }).then((number) => {
            return {code:0, diamond: number};
        }).catch(async (err) => {
            //创建订单状态监听事务
            let taskData = {
                uid:uid,
                join_id:orderId,
                type:1
            };
            await TaskService.baseCreate(taskData);
            console.log(err);
            return {code: 5, msg: 'diamond_will_arrive_later'};
        });
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
        //校验二级密码
        let checkRes = await ExternalService.postCheckSecondPwdService(postData);
        if (checkRes.code != 0) {
            return {code:checkRes.code, msg:checkRes.msg}
        }

        let exchangeRate = await MoraConfigService.getExchangeRateConfig();
        return sequelize.transaction(async (t) => {
            //1.创建订单
            let vsc = Number(postData.num) * exchangeRate[0]['value'];
            let orderNO = ExternalService.getOrderNO(postData.clientType);
            let orderCreateData = {
                uid: Number(postData.uid),
                orderNO: orderNO,
                diamond: Number(postData.num),
                amount: vsc,
                orderType: 2,
                payType: 3,
                status: 1,
                content: '钻石兑换成vsc',
                datetime: Moment().format('YYYY-MM-DD HH:mm:ss'),
                payTime: Moment().format('YYYY-MM-DD HH:mm:ss'),
                finishTime: Moment().format('YYYY-MM-DD HH:mm:ss')
            };
            let orderCreateRes = await DiamondExchangeOrderService.baseCreate(orderCreateData, {transaction:t});

            //2.冻结钻石
            let freeRes = await MemberService.model.freezeDiamond(postData.uid, Number(postData.num), {transaction:t});
            //3.添加资产变更日志
            freeRes.source = 1;
            freeRes.content = '钻石兑换svc';
            freeRes.vsc = vsc;
            freeRes.status = 1;
            freeRes.join_id = orderCreateRes.id;
            let logRes = await DiamondLogService.baseCreate(freeRes, {transaction:t});

            return {orderId:orderCreateRes.id, diamond:freeRes.after_change, change:freeRes.change, logId:logRes.id};
        }).then(async (res) => {
            postData.orderId = res.orderId;
            //4.请求外部兑换接口
            let res2 = await ExternalService.postExchangeVscService(postData);
            if(res2.code == 0){
                return await this.exchangeVscStep2(res.orderId, postData.uid);
            }else{
                //创建订单状态监听事务
                let taskData = {
                    uid:postData.uid,
                    join_id:res.orderId,
                    type:2
                };
                await TaskService.baseCreate(taskData);
                if(res2.code > 0){
                    return res2;
                }else{
                    return {code:5, diamond:res.diamond, msg:'vsc_will_arrive_later'};
                }
            }
        }).catch((err)=>{
            return {code:110, msg:err.message};
        });
    }

    //钻石兑换vsc第二步
    async exchangeVscStep2(orderId, uid){
        //5.查找订单状态为3的订单，
        let res = await DiamondExchangeOrderModel.model.findAll({attributes: ['id','diamond','uid', 'orderNO'], where: {id:orderId, status: 3}});
        if(!res){
            //创建订单状态监听事务
            let taskData = {
                uid:uid,
                join_id:orderId,
                type:2
            };
            await TaskService.baseCreate(taskData);
            return {code:5, diamond:res[0]['diamond'], msg:'vsc_will_arrive_later'};
        }
        return await sequelize.transaction(async (t1)=>{
            //6.将他状态改为9
            await DiamondExchangeOrderModel.model.update({status: 9}, {where: {id: res.orderId}, transaction: t1});
            //7.冻结的钻石删除掉
            await MemberService.model.freezeDiamondDecrement(uid, res.change, {transaction: t1});
            //8.自己变更日志状态改为2
            await DiamondLogModel.mode.update({status: 2}, {where: {id: res.logId, transaction: t1}});
        }).then(()=>{
            return {code:0, diamond:res.diamond};
        }).catch(async (e)=>{
            //创建订单状态监听事务
            let taskData = {
                uid:uid,
                join_id:orderId,
                type:2
            };
            await TaskService.baseCreate(taskData);
            console.log(e);
            return {code:5, diamond:res.diamond, msg:'vsc_will_arrive_later'};
        });
    }
}

module.exports = new MemberService();