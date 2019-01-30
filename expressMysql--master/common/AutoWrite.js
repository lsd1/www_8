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
    AutoWritedDiamondExchangeOrderModel(target, key, descriptor){
        target.model = require('../model/diamondExchangeOrderModel');
    },
    AutoWritedRecordLogModel(target, key, descriptor){
        target.model = require('../model/recordLogModel');
    },
	AutoWritedNoticModel(target, key, descriptor){
        target.model = require('../model/noticModel');
    },
    AutoWritedTaskModel(target, key, descriptor){
        target.model = require('../model/taskModel');
    }
};