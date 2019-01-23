import express from 'express';

import orderMoraService from '../service/orderMoraService.js';

const router = express.Router();

class orderMoraCtroller{
	static initRouter(){
		/***************查询业务***************/
		router.get('/all', async (req, res, next) => {
			try{res.json(await orderMoraService.baseFindAll());}catch(err){next(err);}
		});

        //根据竞猜等级分组，获取待竞猜的房间数量
        router.get('/getRoomNum', async (req, res, next) => {
            try{res.json(await orderMoraService.getRoomNumService());}catch(err){next(err);}
        });

        //根据房间id获取房间详情
        router.get('/getRoomInfoById', async (req, res, next) => {
            try{res.json(await orderMoraService.getRoomInfoByIdService(req.query.id));}catch(err){next(err);}
        });

        //根据uno获取用户未完成房间列表
        router.get('/getRoomListByUno', async (req, res, next) => {
            try{res.json(await orderMoraService.getRoomListByUnoService(req.query.uno));}catch(err){next(err);}
        });

        //根据uno获取用户战绩列表
        router.get('/getRecordListByUno', async (req, res, next) => {
            try{res.json(await orderMoraService.getRecordListByUnoService(req.query.uno, req.query.lastId, req.query.limit));}catch(err){next(err);}
        });

		router.put('/update', async (req, res, next) => {
			try{res.json(await orderMoraService.baseUpdate(req.body['update'], req.body['where']));}catch(err){next(err);}
		});

		router.delete('/delete', async (req, res, next) => {
			try{res.json(await orderMoraService.baseDelete(req.body));}catch(err){next(err);}
		});

		router.post('/createBatch', async (req, res, next) => {
			try{res.json(await orderMoraService.baseCreateBatch(req.body['entitys']));}catch(err){next(err);}
		});

		return router;
	}
}

module.exports = orderMoraCtroller.initRouter();