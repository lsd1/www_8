import express from 'express';

import noticService from '../service/noticService.js';

const router = express.Router();

class noticCtroller{
	static initRouter(){
		/***************查询业务***************/
		router.get('/all', async (req, res, next) => {
			try{res.json(await noticService.baseFindAll());}catch(err){next(err);}
		});

		router.put('/update', async (req, res, next) => {
			try{res.json(await noticService.baseUpdate(req.body['update'], req.body['where']));}catch(err){next(err);}
		});

		router.delete('/delete', async (req, res, next) => {
			try{res.json(await noticService.baseDelete(req.body));}catch(err){next(err);}
		});

		router.post('/createBatch', async (req, res, next) => {
			try{res.json(await noticService.baseCreateBatch(req.body['entitys']));}catch(err){next(err);}
		});

		return router;
	}
}

module.exports = noticCtroller.initRouter();