import express from 'express';

import diamondLogService from '../service/diamondLogService.js';

const router = express.Router();

class diamondLogCtroller{
	static initRouter(){
		/***************查询业务***************/
		router.get('/all', async (req, res, next) => {
			try{res.json(await diamondLogService.baseFindAll());}catch(err){next(err);}
		});

		router.put('/update', async (req, res, next) => {
			try{res.json(await diamondLogService.baseUpdate(req.body['update'], req.body['where']));}catch(err){next(err);}
		});

		router.delete('/delete', async (req, res, next) => {
			try{res.json(await diamondLogService.baseDelete(req.body));}catch(err){next(err);}
		});

		router.post('/createBatch', async (req, res, next) => {
			try{res.json(await diamondLogService.baseCreateBatch(req.body['entitys']));}catch(err){next(err);}
		});

		return router;
	}
}

module.exports = diamondLogCtroller.initRouter();