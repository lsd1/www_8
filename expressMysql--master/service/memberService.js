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

    async getMemberInfoService(secretdata, user_avatar, user_name){
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
            code:0,
            data:{
                uid:uid,
                lang:lang,
                token:token,
                network:network,
                clientType:clientType,
                version:version,
                diamond:res[0]['diamond'],
            }
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

    //参与竞猜
    freezeDiamond(uid, num){
        return MemberService.model.freezeDiamond(uid, num);
    }

    getMemberInfoByIdService(id, attribute){
        return MemberService.model.getMemberInfoById(id, attribute);
    }

    //svc兑换成钻石
    async exchangeDiamondService(uid, pwd, num, clientType){
        clientType = ExternalService.getClientType(clientType);
        if(uid === '' ){
            return {status:110, msg:'uid_empty'}
        }
        if(pwd === '' ){
            return {status:110, msg:'pwd_empty'}
        }
        if(num === '' ){
            return {status:110, msg:'num_empty'}
        }
        let checkRes = await ExternalService.checkSecondPwdService(uid, pwd);
        if(checkRes){
            let exchangeRate = await MoraConfigService.getExchangeRateConfig();
            let diamond = exchangeRate[0]['value'] * num;
            let orderNO = DiamondExchangeOrderService.model.genOrderNO(clientType);
            let orderCreateData = {
                uid:uid,
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

            //创建兑换订单
            let orderCreateRes = await DiamondExchangeOrderService.baseCreate(orderCreateData);
            if(orderCreateRes){
                //1.开启事物
                sequelize.transaction( async (t) => {

                    //5.请求外部兑换接口
                }).then(()=>{
                    return {code:0, data:{}, msg:'exchange_diamond_succ'};
                }).catch((err)=>{
                    return {code:110, msg:err.message}
                });

            }else{
                return {code:110, msg:'exchange_diamond_faild'}
            }
        }else{
            return {code:110, msg:'second_pwd_err'}
        }
    }

    //TODO:svc兑换钻石第二部分
    step2 () {
        //2.增加用户钻石数量
        // let incrementRes = await this.diamondIncrementService(uid, diamond);
        // await this.diamondIncrementService(uid, diamond).then(async (incrementRes) => {
        //     //3.创建资产变更日志
        //     incrementRes.source = 1;
        //     incrementRes.content = '钻石兑换vsc';
        //     incrementRes.vsc_status = 1;
        //     incrementRes.join_id = orderNO;
        //     await DiamondLogService.baseCreate(incrementRes);
        //
        // }).then(async () => {
        //     //4.修改兑换状态为成功
        //     DiamondExchangeOrderService.baseUpdate({status: 9}, {id:orderCreateRes.id})
        //
        // }).then(async () => {
        //
        // });
    }

    //diamond兑换成Vsc
    async exchangeVscService(uid, pwd, num){
        if(uid === '' ){
            return {status:110, msg:'uid_empty'}
        }
        if(pwd === '' ){
            return {status:110, msg:'pwd_empty'}
        }
        if(num === '' ){
            return {status:110, msg:'num_empty'}
        }
        let checkRes = await ExternalService.checkSecondPwdService(uid, pwd);
        if(checkRes){
         let exchangeRes = await ExternalService.exchangeDiamondService(uid, num);
            if(exchangeRes){


                // return {status:0, msg:'exchange_diamond_succ'};
            }else{
                return {status:110, msg:'exchange_diamond_faild'}
            }
        }else{
            return {status:110, msg:'second_pwd_err'}
        }
    }

    //兑换vsc
    // async exchangeVscService(uid, pwd, num){
    //     let checkRes = await ExternalService.checkSecondPwdService(uid, pwd);
    //     if(checkRes){
    //         let exchangeRes = await ExternalService.exchangeVscService(uid, num);
    //         if(exchangeRes){
    //             return {status:0, msg:'exchange_diamond_succ'};
    //         }else{
    //             return {status:110, msg:'exchange_diamond_faild'}
    //         }
    //     }else{
    //         return {status:110, msg:'second_pwd_err'}
    //     }
    // }
}

module.exports = new MemberService();