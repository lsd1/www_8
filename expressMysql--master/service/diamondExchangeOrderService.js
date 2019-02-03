import BaseService from './baseService';

import {AutoWritedDiamondExchangeOrderModel} from '../common/AutoWrite';
import JSMTRand from "js_mt_rand";
import Microtime from "microtime";
import  Moment from 'moment';
import request from "request";

@AutoWritedDiamondExchangeOrderModel

class DiamondExchangeOrderService extends BaseService{
    constructor(){
        super(DiamondExchangeOrderService.model);
    }
}

module.exports = new DiamondExchangeOrderService();