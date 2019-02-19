import crypto from 'crypto';
import request from "request";
import JSMTRand from 'js_mt_rand';
import Moment from 'moment';
import Microtime  from 'microtime';
import MemberModel from '../model/memberModel';
import {config} from "../config/db";

class ExternalService {
    //解密
    decode(cryptkey, iv, secretdata) {
        let
            decipher = crypto.createDecipheriv('aes-256-cbc', cryptkey, iv),
            decoded  = decipher.update(secretdata, 'base64', 'utf8');
        decoded += decipher.final( 'utf8' );
        return decoded;
    };

    //解密
    encode (cryptkey, iv, cleardata) {
        let
            encipher = crypto.createCipheriv('aes-256-cbc', cryptkey, iv),
            encoded  = encipher.update(cleardata, 'utf8', 'base64');

        encoded += encipher.final( 'base64' );
        return encoded;
    };

    chr(codePt) {
        if (codePt > 0xFFFF) {
            codePt -= 0x10000;
            return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
        }
        return String.fromCharCode(codePt);
    };

    memberInfoDecode (secretdata){
        let iv = this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0);
        let cryptkey = crypto.createHash('sha256').update('maiguoerueepcncecjz6833dbkdshy2cxbhsajzz0954gdjkwgarsgxjkdd3svghf').digest();
        let infoArr = this.decode(cryptkey, iv, secretdata).split('&');
        let memberInfo = [];
        infoArr.forEach(item => {
            let itemArr = item.split('=');
            memberInfo[itemArr[0]] = itemArr[1];
        });
        return memberInfo;
    };

    async postGetMemberInfoService (postData){
        let action = 'v1.0/game/mora/member_info',
            data = {},
            url = config.unionApi;
        let params = await this.initParams(postData, action, data, url);
        console.log('getUrl:', params.getUrl);
        let res = await this.sendRequest(params.getUrl, {}, 'GET');
        if(res != -1 && res.code == 0){
            return res;
        }else{
            return false;
        }
    };


    async postCheckSecondPwdService (postData){
        let action = 'v1.0/pin/check_pin_code',
            data = {pinCode:postData.pwd},
            url = config.unionApi;
        let params = await this.initParams(postData, action, data, url);
        return await this.sendRequest(params.postUrl, params.data, 'POST');
    };

    async postExchangeDiamondService (postData){
        let action = 'v1.0/pay/confirm_pay',
            data = {
                payOrder:'exchangeDiamond',
                orderId:postData.orderId,
                pinCode:postData.pwd,
                payType:3
            },
        url = config.unionApi;
        let params = await this.initParams(postData, action, data, url);
        return await this.sendRequest(params.postUrl, params.data, 'POST');
    };

    async postExchangeVscService (postData) {
        let action = 'v1.0/game/mora/diamond_to_asset',
            data = {orderId:postData.orderId},
            url = config.unionApi;

        let params = await this.initParams(postData, action, data, url);
        console.log('getUrl:', params.getUrl);
        return await this.sendRequest(params.postUrl, params.data, 'POST');

    }

    //生成随机订单号
    getOrderNO (clientType) {
        let mt = new JSMTRand();
        clientType = (clientType == 1) ? '11' : '10';
        return 'EX' + clientType + Moment().format('YYYYMMDDHHmmss') + Microtime.nowStruct()[1] + mt.rand(10, 99);
    }

    md5 (str) {
        return crypto.createHash('md5').update(str).digest('hex');
    }

    async initParams(postData, action, otherData, url){
        let  uid = postData.uid || 0, token = '';
        if(postData.token){
             token = postData.token;
        }else{
            let memberInfo = await MemberModel.getMemberInfoById(uid);
            token = memberInfo.token;
        }
        let
            lang = postData.lang || 0,
            clientType = postData.clientType || 0,
            network = postData.network || 1,
            version = postData.version || '9.9.9',
            timestamp = new Date().getTime(),
            uuid = timestamp.toString() + this.getRndNum(5).toString(),
            param = "clientType=" + clientType + "&lang=" + lang + "&network=" + network + "&timestamp=" + timestamp + "&uid=" + uid + "&version=" + version,
            sign = this.md5((param + "token=" + token + "uuid=" + uuid + "action=" + action)),
            getParamsAsJson = {
                "clientType":clientType,
                "lang":lang,
                "network":network,
                "timestamp":timestamp,
                "uid":uid,
                "version":version,
                "sign":sign,
                "uuid":uuid,
                "action":action
            },
            data = this.mergeObj(getParamsAsJson, otherData),
            getUrl = url + action + '?'+ Object.keys(data).map(function(key){
                return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
            }).join("&"),
            params = new Object();
        params.data = data;
        params.postUrl = url + action;
        params.getUrl = getUrl;
        return params;
    }

    /**
     * 获取N位随机数
     */
    getRndNum(n){
        var rnd = "";
        n = n ? n : 1;
        for(var i = 0; i < n; i++ ){
            rnd += Math.floor(Math.random() * 10);
        }
        return rnd;
    }

    /**
     * 把objB对象属性合并到objA，相同属性以objB为准。
     */
    mergeObj(objA,objB){
        for(var key in objB){
            objA[key] = objB[key];
        }
        return objA;
    }

    sendRequest(url, data, method){
        data = data || [];
        return new Promise(function (resolve,reject) {
            try {
                request({
                    url: url,//请求路径
                    method: method,//请求方式，默认为get
                    headers: {//设置请求头
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(data)//post参数字符串
                }, function(error, response, body) {
                    if(!error && response.statusCode == 200){
                        resolve(JSON.parse(body));
                    }else{
                        if(error){
                            resolve({code:110, msg:error.message});
                        }else{
                            resolve({code:110, msg:'error'});
                        }
                    }
                });
            }catch (e) {
                console.log(e);
                resolve({code:110,msg:e.message});
            }
        })
    }
}

module.exports = new ExternalService();