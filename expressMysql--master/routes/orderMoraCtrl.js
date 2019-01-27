import express from 'express';

import orderMoraService from '../service/orderMoraService.js';

const router = express.Router();

class orderMoraCtroller{
	static initRouter(){

        //根据竞猜等级分组，获取待竞猜的房间数量
        router.get('/getRoomNum', async (req, res, next) => {
            try{res.json(await orderMoraService.getRoomNumService());}catch(err){next(err);}
        });

        //根据房间id获取房间详情
        router.get('/getRoomInfoById', async (req, res, next) => {
            try{res.json(await orderMoraService.getRoomInfoByIdService(req.query.id));}catch(err){next(err);}
        });

        //根据uid获取用户未完成房间列表
        router.get('/getRoomListByUid', async (req, res, next) => {
            try{res.json(await orderMoraService.getRoomListByUidService(req.query.uid));}catch(err){next(err);}
        });

        //根据uid获取用户战绩列表
        router.get('/getRecordListByUid', async (req, res, next) => {
            try{res.json(await orderMoraService.getRecordListByUidService(req.query.uid, req.query.lastId, req.query.limit));}catch(err){next(err);}
        });

		return router;
	}
}

module.exports = orderMoraCtroller.initRouter();