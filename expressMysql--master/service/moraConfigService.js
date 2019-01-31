import BaseService from './baseService';

import {AutoWritedMoraConfigModel} from '../common/AutoWrite';

@AutoWritedMoraConfigModel

class MoraConfigService extends BaseService{
    constructor(){
        super(MoraConfigService.model);
    }

    //获取所有配置
    getAllConfig(){
        return MoraConfigService.model.findAll();
    }

    //获取所有竞猜等级配置
    getAllGradeConfig(){
        return MoraConfigService.model.findByFilter(['name','index','value','content'],{name:'grade'});
    }

    //获取所有掌形
    getAllShapeConfig(){
        return MoraConfigService.model.findByFilter(['name','index','value','content'],{name:'shape'});
    }

    //获取竞猜费率
    getRateConfig(){
        return MoraConfigService.model.findByFilter(['value'],{name:'rate'});
    }

    //获取兑换比例
    getExchangeRateConfig(){
        return MoraConfigService.model.findByFilter(['value'],{name:'exchangeRate'});
    }

    //获取提现次数
    getMaxWithdrawTimesConfig(){
        return MoraConfigService.model.findByFilter(['value'],{name:'maxWithdrawTimes'});
    }

    //获取竞猜费率结算账号
    getExchangeUidConfig(){
        return MoraConfigService.model.findByFilter(['value'],{name:'exchangeUid'});
    }
}

module.exports = new MoraConfigService();