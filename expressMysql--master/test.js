// import {sequelize} from './config/db';
// import orderMoraService from "./service/orderMoraService";
// let createRoom2 = {uid:3,shape:1,grade:2,diamond_number:50};
// sequelize.transaction( async  (t) => {
//     let createRoom = {uid:8,shape:1,grade:2,diamond_number:50};
//     orderMoraService.createData(createRoom);
//     orderMoraService.createData(createRoom);
//     throw Error('滚');
// }).then((a)=>{
// }).catch(function (err) {
//     console.log(createRoom2);
//     console.log(err);
//     // 事务已被回滚
//     // err 是拒绝 promise 链返回到事务回调的错误
// });

// import  crypto from 'crypto';
//
// var content = 'password';//加密的明文；
// var token1 ='miyue';//加密的密钥；
// var buf = crypto.randomBytes(16);
// token1 = buf.toString('hex');//密钥加密；
// console.log("生成的token(用于加密的密钥):"+token1);
// var SecrectKey = token1;//秘钥；
// var Signture = crypto.createHmac('sha256', SecrectKey);//定义加密方式
// Signture.update(content);
// var miwen = Signture.digest().toString('base64');//生成的密文后将再次作为明文再通过pbkdf2算法迭代加密；
// console.log("加密的结果f：" + miwen);


// var crypto = require('crypto');
//
// var baseString = 'BLBwY52t2OFaIgtLCFVWAvTM6LOGvilUGFcvLgKREV6JqWd6DOeY21AAwFq9sC3aprkBfULe9L+t73ZBpxtfOBIfTq0uhnrUbaLnoZV2eUUijgSPzVCnDWO2JLbx6l8kIeOBPLDEVy2dNzHICvzeM30bP0fLM2I2jzylqM9xul2/t6q1XhhWSO8RIFkPFHwXqWinFcWsEBeeqOIyWm+GrVkpQi1XmBBZ8Nfdx9WPPzcjk7XUQwGwWzehL3z3HbXA';
//
//
// //解密
// function decode(cryptkey, iv, secretdata) {
//     var
//         decipher = crypto.createDecipheriv('aes-256-cbc', cryptkey, iv),
//         decoded  = decipher.update(secretdata, 'base64', 'utf8');
//
//     decoded += decipher.final( 'utf8' );
//     return decoded;
// }
//
// //解密
// function encode(cryptkey, iv, cleardata) {
//     var
//         encipher = crypto.createCipheriv('aes-256-cbc', cryptkey, iv),
//         encoded  = encipher.update(cleardata, 'utf8', 'base64');
//
//     encoded += encipher.final( 'base64' );
//     return encoded;
// }
// function chr(codePt) {
//     if (codePt > 0xFFFF) {
//         codePt -= 0x10000
//         return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF))
//     }
//     return String.fromCharCode(codePt)
// }
// var
//     cryptkey   = crypto.createHash('sha256').update('maiguoerueepcncecjz6833dbkdshy2cxbhsajzz0954gdjkwgarsgxjkdd3svghf').digest(),
//     iv         = chr(0)+chr(0)+chr(0)+chr(0)+chr(0)+chr(0)+chr(0)+chr(0)+chr(0)+chr(0)+chr(0)+chr(0)+chr(0)+chr(0)+chr(0)+chr(0),
//     buf        = "Hello World";
//     // enc        = encode( cryptkey, iv, buf );
//
// // var dec        = decode(cryptkey, iv, enc);
//
// var res = decode(cryptkey, iv, baseString).split('&');
// let memberInfo = [];
// res.forEach(item=>{
//     let itemArr = item.split('=');
//     memberInfo[itemArr[0]] = itemArr[1];
// });
// console.log(memberInfo);
// function b64enc(data) {
//     var b   = new Buffer(data, 'binary');
//     return b.toString('base64');
// }

// console.warn("Encoded length: ", enc);
// console.warn("Decoded all: " + dec);


// import memberService from "./service/memberService";
//
//
//  async  function getInfo (){
//      let res = await memberService.getMemberInfoService({id:1696538},{id:1696538, user_name:'lsd', user_avatar:'我的头像', diamond:0, token:'123123123wadasdasdasdadasdasdsd', freeze_diamond:0});
//      console.log(JSON.stringify());
//  }
// getInfo ();
import request from "request";
import ExternalService from './service/externalService';
import MemberService from './service/memberService';
//
// MemberService.getMemberInfoByIdService(16965038).then(res=>{
//     console.log(res);
// });

let postData = {
    clientType:1,
    lang:0,
    network:0,
    uid:1696538,
    version:'9.9.9'
};
ExternalService.initParams(postData,'member/exchangeVsc',{},'http://192.168.1.238:666/').then(res=>{
    console.log(res);
});
{ data:
{ clientType: 1,
    lang: 0,
    network: 1,
    timestamp: 1548718727083,
    uid: 1696538,
    version: '9.9.9',
    sign: '69415e3dd1d9111c9505628affdf7d56',
    uuid: '154871872708361835',
    action: 'member/exchangeVsc' },
    postUrl: 'http://192.168.1.238:666/member/exchangeVsc',
        getUrl: 'http://192.168.1.238:666/member/exchangeVsc?clientType=1&lang=0&network=1&timestamp=1548718727083&uid=1696538&version=9.9.9&sign=69415e3dd1d9111c9505628affdf7d56&uuid=154871872708361835&action =member%2FexchangeVsc' }

