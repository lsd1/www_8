import express from 'express';
import  BaseCtroller from './baseCtroller'
import memberService from '../service/memberService.js';

const router = express.Router();

class memberCtroller{
	static initRouter(){
        router.get('/delDiamond', async (req, res, next) => {
            try{
                res.json(BaseCtroller.successRes(
                    await memberService.freezeDiamond(req.query.uid, req.query.num),
                    req.query.lang || req.body.lang
                ));
            }catch(err){
                next(BaseCtroller.errorRes(
                    err,
                    req.query.lang || req.body.lang
                ));
            }
        });

        router.get('/addDiamond', async (req, res, next) => {
            try{
                res.json(BaseCtroller.successRes(
                    await memberService.unfreezeDiamond(req.query.uid, req.query.num),
                    req.query.lang || req.body.lang
                ));
            }catch(err){
                next(BaseCtroller.errorRes(
                    err,
                    req.query.lang || req.body.lang
                ));
            }
        });

        router.post('/exchangeDiamond', async (req, res, next) => {
            try{
                res.json(BaseCtroller.successRes(
                    await memberService.exchangeDiamondService(req.body),
                    req.query.lang || req.body.lang
                ));
            }catch(err){
                next(BaseCtroller.errorRes(
                    err,
                    req.query.lang || req.body.lang
                ));
            }
        });

        router.post('/exchangeVsc', async (req, res, next) => {
            try{
                res.json(BaseCtroller.successRes(
                    await memberService.exchangeVscService(req.body),
                    req.query.lang || req.body.lang
                ));
            }catch(err){
                next(BaseCtroller.errorRes(
                    err,
                    req.query.lang || req.body.lang
                ));
            }
        });

		router.post('/getMemberInfo', async (req, res, next) => {
			try{
			    res.json(BaseCtroller.successRes(
                    await memberService.getMemberInfoService(req.body['union_ck'], req.body['name'], req.body['avatar']),
                    req.query.lang || req.body.lang
                ));
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

module.exports = memberCtroller.initRouter();