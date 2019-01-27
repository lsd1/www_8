import express from 'express';

import diamondLogService from '../service/diamondLogService.js';

const router = express.Router();

class diamondLogCtroller{
	static initRouter(){
        router.get('/getLogList', async (req, res, next) => {
            try{
            	res.json(await diamondLogService.getLogListByUidService(
					req.query.uid,
					req.query.limit,
					req.query.lastId,
					req.query.type
				));
            }catch(err){
            	next(err);
            }
        });

		return router;
	}
}

module.exports = diamondLogCtroller.initRouter();


