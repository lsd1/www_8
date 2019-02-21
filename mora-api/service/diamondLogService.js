import BaseService from './baseService';

import {AutoWritedDiamondLogModel} from '../common/AutoWrite';

@AutoWritedDiamondLogModel

class DiamondLogService extends BaseService{
    constructor(){
        super(DiamondLogService.model);
    }

    getLogListByUidService(uid, limit, lastId, type){
        return DiamondLogService.model.getLogListByUid(uid, limit, lastId, type);
    }
}

module.exports = new DiamondLogService();