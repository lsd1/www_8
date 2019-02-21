import express from 'express';

import taskService from '../service/taskService.js';

const router = express.Router();

class taskCtroller{
	static initRouter(){
		/***************查询业务***************/
		router.get('/all', async (req, res, next) => {
			try{res.json(await taskService.baseFindAll());}catch(err){next(err);}
		});

		router.put('/update', async (req, res, next) => {
			try{res.json(await taskService.baseUpdate(req.body['update'], req.body['where']));}catch(err){next(err);}
		});

		router.delete('/delete', async (req, res, next) => {
			try{res.json(await taskService.baseDelete(req.body));}catch(err){next(err);}
		});

		router.post('/createBatch', async (req, res, next) => {
			try{res.json(await taskService.baseCreateBatch(req.body['entitys']));}catch(err){next(err);}
		});

		return router;
	}
}

module.exports = taskCtroller.initRouter();