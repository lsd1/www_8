import express from 'express';

import path from 'path';

import logger from 'morgan';

import cookieParser from 'cookie-parser';

import bodyParser from 'body-parser';

import multipart from 'connect-multiparty';

import compression from 'compression';

import BaseCtroller from './routes/baseCtroller';

//配置express中间件
const app = express();

app.set('json spaces', 2);

app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(multipart());

app.use(compression());

app.use(cookieParser());

// app.use('/public', express.static('public'));

// app.use('/', express.static(__dirname+'/'));


// 全局拦截配置CROS
app.all('*',function(req,res,next){
	res.header('Access-Control-Allow-origin','*');

	res.header('Access-Control-Allow-Headers','accept, origin, X-Requested-With, content-type, token, userId');

	res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');

	res.header('Content-Type','application/json;charset=utf-8');

	res.header('Access-Control-Allow-Credentials','true');

	next();

});

// 路由列表
app.use('/', BaseCtroller.verify);
app.use('/diamondLog', require('./routes/diamondLogCtrl'));
app.use('/orderMora', require('./routes/orderMoraCtrl'));
app.use('/member', require('./routes/memberCtrl'));
app.use('/recordLog', require('./routes/recordLogCtrl'));

// 错误处理中间件
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  res.json({code:err});
});

app.use(errorHandler);

function errorHandler(err, req, res, next) {
	console.error(err);
	res.json({code: 111, msg: err});
}

module.exports = app;
