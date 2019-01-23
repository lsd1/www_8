import BaseService from './baseService';

import {AutoWritedDiamondLogModel} from '../common/AutoWrite';

@AutoWritedDiamondLogModel

class DiamondLogService extends BaseService{
    constructor(){
        super(DiamondLogService.model);
    }

    getLogListByUnoService(uno, limit, lastId, type){
        return DiamondLogService.model.getLogListByUno(uno, limit, lastId, type);
    }
}

module.exports = new DiamondLogService();