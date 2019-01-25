import express from 'express';

import memberService from '../service/memberService.js';

const router = express.Router();

class memberCtroller{
	static initRouter(){
		/***************查询业务***************/
		router.get('/all', async (req, res, next) => {
			try{res.json(await memberService.baseFindAll());}catch(err){next(err);}
		});

        router.get('/delDiamond', async (req, res, next) => {
            try{res.json(await memberService.participateMoraService(req.query.uid, req.query.num));}catch(err){next(err);}
        });

        router.get('/addDiamond', async (req, res, next) => {
            try{res.json(await memberService.cancelMoraService(req.query.uid, req.query.num));}catch(err){next(err);}
        });

        router.post('/exchangeDiamond', async (req, res, next) => {
            try{res.json(await memberService.exchangeDiamondService(req.body.uid,req.body.pwd,req.body.num));}catch(err){next(err);}
        });

        router.post('/exchangeVsc', async (req, res, next) => {
            try{res.json(await memberService.exchangeVscService(req.body.uid,req.body.pwd,req.body.num));}catch(err){next(err);}
        });

		router.put('/update', async (req, res, next) => {
			try{res.json(await memberService.baseUpdate(req.body['update'], req.body['where']));}catch(err){next(err);}
		});

		router.delete('/delete', async (req, res, next) => {
			try{res.json(await memberService.baseDelete(req.body));}catch(err){next(err);}
		});

		router.post('/createBatch', async (req, res, next) => {
			try{res.json(await memberService.baseCreateBatch(req.body['entitys']));}catch(err){next(err);}
		});

		return router;
	}
}

module.exports = memberCtroller.initRouter();