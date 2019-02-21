import crypto from 'crypto';
import MemberModel from '../model/memberModel';
import {trans} from '../translate/index';
import empty from 'is-empty';
class BaseCtroller {
    successRes(data, lang){
        data = data || {};
        let res = {
            code:0,
            msg:trans('succ', lang)
        };

        try {
            if(!empty(data)){
                if(data.msg){
                    let transData = trans(data.msg, lang);
                    if(transData){
                        res.msg = transData;
                    }else{
                        res.msg = data.msg;
                    }
                    delete data.msg;
                }
                if(data.code){
                    res.code = data.code;
                    delete data.code;
                }
                if(!empty(data)){
                    res.data = data;
                }
            }
        }catch (e) {
            // console.log('successResErr:', e);
        }
        return res;
    }

    errorRes(err, lang){
        try {
            let errRes = JSON.parse(err.message);
            let errmsg = err;
            let code = 110;
            if(errRes.hasOwnProperty('msg')){
                let transData = trans(errRes.msg, lang);
                if(transData){
                    errmsg = transData;
                }
            }
            if(errRes.hasOwnProperty('code')){
                code = errRes.code;
            }
            return {
                code:code,
                msg:errmsg
            };
        }catch (e) {
            return {
                code:110,
                msg:err
            };
        }
    }

    async verify(req, res, next){
        if(req.method == 'GET' || req.method == 'POST'){
            let params = req.query;
            if(!empty(req.body)){
                params = req.body;
            }
            if(['/member/getMemberInfo'].indexOf(req.url.split('?')[0]) == -1 && req.url.split('/')[1] != 'socket.io'){
                if(!params.uid){
                    return res.json({code:110, msg:trans('uid_is_empty', params.lang)});
                }
                let memberInfo = await MemberModel.getMemberInfoById(params.uid);
                if(!memberInfo){
                    return res.json({code:110, msg:trans('user_not_exist', params.lang)});
                }
                let param = "clientType=" + params.clientType + "&lang=" + params.lang + "&network=" + params.network + "&timestamp=" + params.timestamp + "&uid=" + params.uid + "&version=" + params.version;
                let sign = crypto.createHash('md5').update(param + "token=" + memberInfo.token + "uuid=" + params.uuid + "action=" + params.action).digest('hex');
                if(sign !== params.sign){
                    return res.json({code:110, msg:trans('signature_verification_failed', params.lang)});
                }
            }
        }
        next();
    }

}

module.exports = new BaseCtroller();