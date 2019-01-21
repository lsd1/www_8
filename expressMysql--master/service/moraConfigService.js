import BaseService from './baseService';

import {AutoWritedMoraConfigModel} from '../common/AutoWrite';

@AutoWritedMoraConfigModel

class MoraConfigService extends BaseService{
    constructor(){
        super(MoraConfigService.model);
    }
}

module.exports = new MoraConfigService();