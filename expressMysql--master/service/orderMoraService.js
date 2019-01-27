import BaseService from './baseService';

import {AutoWritedOrderMoraModel} from '../common/AutoWrite';

@AutoWritedOrderMoraModel

class OrderMoraService extends BaseService{
    constructor(){
        super(OrderMoraService.model);
    }

    getRoomInfoByIdService(id){
       return OrderMoraService.model.getRoomInfoById(id);
    }

    getRoomListByUidService(uid){
        return OrderMoraService.model.getRoomListByUid(uid);
    }

    getRecordListByUidService(uid, lastId, limit){
        return OrderMoraService.model.getRecordListByUid(uid, lastId, limit);
    }

    createData(obj){
        return OrderMoraService.model.create(obj);
    }

}

module.exports = new OrderMoraService();