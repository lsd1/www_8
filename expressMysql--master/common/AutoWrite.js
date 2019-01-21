module.exports = {
    AutoWritedDiamondLogModel(target, key, descriptor){
        target.model = require('../model/diamondLogModel');
    },
    AutoWritedMemberModel(target, key, descriptor){
        target.model = require('../model/memberModel');
    },
    AutoWritedMoraConfigModel(target, key, descriptor){
        target.model = require('../model/moraConfigModel');
    },
    AutoWritedOrderMoraModel(target, key, descriptor){
        target.model = require('../model/orderMoraModel');
    },
};