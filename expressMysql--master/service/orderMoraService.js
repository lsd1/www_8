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
    getRoomListByUnoService(uno){
        return OrderMoraService.model.getRoomListByUno(uno);
    }

    getRecordListByUnoService(uno, lastId, limit){
        return OrderMoraService.model.getRecordListByUno(uno, lastId, limit);
    }

}

module.exports = new OrderMoraService();