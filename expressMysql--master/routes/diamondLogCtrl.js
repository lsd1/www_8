import express from 'express';
import  BaseCtroller from './baseCtroller'
import diamondLogService from '../service/diamondLogService.js';

const router = express.Router();

class diamondLogCtroller{
	static initRouter(){
        router.get('/getLogList', async (req, res, next) => {
            try{
            	res.json(
            		BaseCtroller.successRes(
            			await diamondLogService.getLogListByUidService(
							req.query.uid,
							req.query.limit,
							req.query.lastId,
							req.query.type
						)));
			}catch(err){
				next(BaseCtroller.errorRes(err));
			}
        });



		return router;
	}
}

module.exports = diamondLogCtroller.initRouter();