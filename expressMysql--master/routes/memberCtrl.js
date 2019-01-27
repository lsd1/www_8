import express from 'express';

import memberService from '../service/memberService.js';

const router = express.Router();

class memberCtroller{
	static initRouter(){
        router.get('/delDiamond', async (req, res, next) => {
            try{res.json(await memberService.freezeDiamond(req.query.uid, req.query.num));}catch(err){next(err);}
        });

        router.get('/addDiamond', async (req, res, next) => {
            try{res.json(await memberService.unfreezeDiamond(req.query.uid, req.query.num));}catch(err){next(err);}
        });

        router.post('/exchangeDiamond', async (req, res, next) => {
            try{res.json(await memberService.exchangeDiamondService(req.body.uid,req.body.pwd,req.body.num,req.headers['user-agent']));}catch(err){next(err);}
        });

        router.post('/exchangeVsc', async (req, res, next) => {
            try{res.json(await memberService.exchangeVscService(req.body.uid,req.body.pwd,req.body.num,req.headers['user-agent']));}catch(err){next(err);}
        });

		router.post('/getMemberInfo', async (req, res, next) => {
			try{res.json(await memberService.getMemberInfoService(req.body['union_ck'], req.body['name'], req.body['avatar']));}catch(err){next(err);}
		});

		return router;
	}
}

module.exports = memberCtroller.initRouter();