import BaseService from './baseService';

import {AutoWritedDiamondLogModel} from '../common/AutoWrite';

@AutoWritedDiamondLogModel

class DiamondLogService extends BaseService{
    constructor(){
        super(DiamondLogService.model);
    }
}

module.exports = new DiamondLogService();