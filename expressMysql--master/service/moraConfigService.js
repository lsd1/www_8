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
}

module.exports = new MoraConfigService();