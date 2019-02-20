import BaseService from './baseService';

import {AutoWritedDiamondExchangeOrderModel} from '../common/AutoWrite';

@AutoWritedDiamondExchangeOrderModel

class DiamondExchangeOrderService extends BaseService{
    constructor(){
        super(DiamondExchangeOrderService.model);
    }
}

module.exports = new DiamondExchangeOrderService();