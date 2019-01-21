import BaseService from './baseService';

import {AutoWritedOrderMoraModel} from '../common/AutoWrite';

@AutoWritedOrderMoraModel

class OrderMoraService extends BaseService{
    constructor(){
        super(OrderMoraService.model);
    }
}

module.exports = new OrderMoraService();