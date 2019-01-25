import express from 'express';

import diamondExchangeOrderService from '../service/diamondExchangeOrderService.js';

const router = express.Router();

class diamondExchangeOrderCtroller{
	static initRouter(){
		/***************查询业务***************/
		router.get('/all', async (req, res, next) => {
			try{res.json(await diamondExchangeOrderService.baseFindAll());}catch(err){next(err);}
		});

		router.put('/update', async (req, res, next) => {
			try{res.json(await diamondExchangeOrderService.baseUpdate(req.body['update'], req.body['where']));}catch(err){next(err);}
		});

		router.delete('/delete', async (req, res, next) => {
			try{res.json(await diamondExchangeOrderService.baseDelete(req.body));}catch(err){next(err);}
		});

		router.post('/createBatch', async (req, res, next) => {
			try{res.json(await diamondExchangeOrderService.baseCreateBatch(req.body['entitys']));}catch(err){next(err);}
		});

		return router;
	}
}

module.exports = diamondExchangeOrderCtroller.initRouter();