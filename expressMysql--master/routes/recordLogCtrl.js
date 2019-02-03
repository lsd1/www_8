import express from 'express';

import recordLogService from '../service/recordLogService.js';
import orderMoraService from "../service/orderMoraService";
import  BaseCtroller from './baseCtroller'
const router = express.Router();

class recordLogCtroller{
	static initRouter(){
        //根据uid获取用户战绩列表
        router.get('/getRecordListByUid', async (req, res, next) => {
            try{
                res.json(BaseCtroller.successRes(
                    await recordLogService.getRecordListByUidService(req.query.uid, req.query.lastId, req.query.limit)
                ));
            } catch(err){
                next(BaseCtroller.errorRes(err));
            }
        });
		return router;
	}
}

module.exports = recordLogCtroller.initRouter();