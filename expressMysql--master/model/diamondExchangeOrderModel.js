import BaseModel from './baseModel';
import DiamondExchangeOrder from '../models/game_diamond_exchange_order';

class DiamondExchangeOrderModel extends BaseModel{
    constructor(){
        super(DiamondExchangeOrder);
        this.model = super.getModel();
        this.model.sync();
    }

}

module.exports = new DiamondExchangeOrderModel();