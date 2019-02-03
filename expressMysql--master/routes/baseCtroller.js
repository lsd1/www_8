import crypto from 'crypto';
import MemberModel from '../model/memberModel';
class BaseCtroller {
    successRes(data){
        data = data || {};
        console.log('successRes:',data);
        let res = {
            code:0,
            msg:"scuccess"
        };
        if(JSON.stringify(data) !== '{}'){
            if(data.msg){
                res.msg = data.msg;
                delete data.msg;
            }
            if(data.code){
                res.code = data.code;
                delete data.code;
            }
            if(JSON.stringify(data) !== '{}'){
                res.data = data;
            }
        }
        return res;
    }

    errorRes(err){
        return {
            code:110,
            msg:err
        };
    }

    async verify(req, res, next){
        if(req.method == 'GET' || req.method == 'POST'){
            let params = req.query;
            if(JSON.stringify(req.body) !== '{}'){
                params = req.body;
            }
            console.log('params:', JSON.stringify(params));
            if(['/member/getMemberInfo'].indexOf(req.url.split('?')[0]) == -1){
                if(!params.uid){
                    return res.json({code:110, msg:'uid_is_empty'});
                }
                let memberInfo = await MemberModel.getMemberInfoById(params.uid);
                if(!memberInfo){
                    return res.json({code:110,msg:'user_not_exist'});
                }
                let param = "clientType=" + params.clientType + "&lang=" + params.lang + "&network=" + params.network + "&timestamp=" + params.timestamp + "&uid=" + params.uid + "&version=" + params.version;
                let sign = crypto.createHash('md5').update(param + "token=" + memberInfo.token + "uuid=" + params.uuid + "action=" + params.action).digest('hex');
                if(sign !== params.sign){
                    return res.json({code:110, msg:'signature_verification_failed'});
                }
            }
        }
        next();
    }
}

module.exports = new BaseCtroller();