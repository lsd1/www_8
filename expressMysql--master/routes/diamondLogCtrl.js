import express from 'express';
import  BaseCtroller from './baseCtroller'
import diamondLogService from '../service/diamondLogService.js';
import {trans} from '../translate/index';
const router = express.Router();

class diamondLogCtroller{
	static initRouter(){
        router.get('/getLogList', async (req, res, next) => {
            try{
            	let langData = trans('db', req.query.lang || req.body.lang);
            	let resData = await diamondLogService.getLogListByUidService(
                    req.query.uid,
                    req.query.limit,
                    req.query.lastId,
                    req.query.type
                );
                resData.forEach(item => {
                    item.content = langData[item.content];
                });

            	res.json(
            		BaseCtroller.successRes(
                        resData,
                        req.query.lang || req.body.lang
					)
				);

			}catch(err){
				next(BaseCtroller.errorRes(
					err,
                    req.query.lang || req.body.lang
				));
			}
        });



		return router;
	}
}

module.exports = diamondLogCtroller.initRouter();