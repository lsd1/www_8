import express from 'express';

import recordLogService from '../service/recordLogService.js';
import orderMoraService from "../service/orderMoraService";

const router = express.Router();

class recordLogCtroller{
	static initRouter(){
		/***************查询业务***************/
		router.get('/all', async (req, res, next) => {
			try{res.json(await recordLogService.baseFindAll());}catch(err){next(err);}
		});

        //根据uid获取用户战绩列表
        router.get('/getRecordListByUid', async (req, res, next) => {
            try{res.json(await recordLogService.getRecordListByUidService(req.query.uid, req.query.lastId, req.query.limit));}catch(err){next(err);}
        });

		router.put('/update', async (req, res, next) => {
			try{res.json(await recordLogService.baseUpdate(req.body['update'], req.body['where']));}catch(err){next(err);}
		});

		router.delete('/delete', async (req, res, next) => {
			try{res.json(await recordLogService.baseDelete(req.body));}catch(err){next(err);}
		});

		router.post('/createBatch', async (req, res, next) => {
			try{res.json(await recordLogService.baseCreateBatch(req.body['entitys']));}catch(err){next(err);}
		});

		return router;
	}
}

module.exports = recordLogCtroller.initRouter();