import BaseService from './baseService';

import {AutoWritedRecordLogModel} from '../common/AutoWrite';

@AutoWritedRecordLogModel

class RecordLogService extends BaseService{
    constructor(){
        super(RecordLogService.model);
    }
    getRecordListByUidService(uid, lastId, limit){
        return RecordLogService.model.getRecordListByUid(uid, lastId, limit);
    }
}

module.exports = new RecordLogService();