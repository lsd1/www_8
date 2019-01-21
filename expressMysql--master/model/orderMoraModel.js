import BaseModel from './baseModel';

import OrderMora from '../models/mge_order_mora';

class OrderMoraModel extends BaseModel{
    constructor(){
        super(OrderMora);
        this.model = super.getModel();
        this.model.sync();
    }
}

module.exports = new OrderMoraModel();