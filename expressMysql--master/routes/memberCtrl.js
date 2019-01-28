import express from 'express';
import  BaseCtroller from './baseCtroller'
import memberService from '../service/memberService.js';

const router = express.Router();

class memberCtroller{
	static initRouter(){
        router.get('/delDiamond', async (req, res, next) => {
            try{
                res.json(BaseCtroller.successRes(
                    await memberService.freezeDiamond(req.query.uid, req.query.num)
                ));
            }catch(err){
                next(BaseCtroller.errorRes(err));
            }
        });

        router.get('/addDiamond', async (req, res, next) => {
            try{
                res.json(BaseCtroller.successRes(
                    await memberService.unfreezeDiamond(req.query.uid, req.query.num)
                ));
            }catch(err){
                next(BaseCtroller.errorRes(err));
            }
        });

        router.post('/exchangeDiamond', async (req, res, next) => {
            try{
                res.json(BaseCtroller.successRes(
                    await memberService.exchangeDiamondService(req.body)
                ));
            }catch(err){
                next(BaseCtroller.errorRes(err));
            }
        });

        router.post('/exchangeVsc', async (req, res, next) => {
            try{
                res.json(BaseCtroller.successRes(
                    await memberService.exchangeVscService(req.body)
                ));
            }catch(err){
                next(BaseCtroller.errorRes(err));
            }
        });

		router.post('/getMemberInfo', async (req, res, next) => {
			try{
			    res.json(BaseCtroller.successRes(
                    await memberService.getMemberInfoService(req.body['union_ck'], req.body['name'], req.body['avatar'])
                ));
			}catch(err){
			    next(BaseCtroller.errorRes(err));
			}
		});

		return router;
	}
}

module.exports = memberCtroller.initRouter();