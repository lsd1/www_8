import BaseModel from './baseModel';
import JSMTRand from 'js_mt_rand';
import Moment from 'moment';
import Microtime  from 'microtime';

import DiamondExchangeOrder from '../models/game_diamond_exchange_order';

class DiamondExchangeOrderModel extends BaseModel{
    constructor(){
        super(DiamondExchangeOrder);
        this.model = super.getModel();
        this.model.sync();
    }

    genOrderNO (clientType)
    {
        let mt = new JSMTRand();
        clientType = (clientType == 1) ? '11' : '10';
        return 'EX' + clientType + Moment().format('YYYYMMDDHHmmss') + Microtime.nowStruct()[1] + mt.rand(10, 99);
    }

}

module.exports = new DiamondExchangeOrderModel();