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
        let params = req.query;
        if(JSON.stringify(req.body) !== '{}'){
            params = req.body;
        }
        console.log('query:', req.query);
        console.log('body:', req.body);
        console.log(['member/getMemberInfo'].indexOf(params.action));
        if(['member/getMemberInfo'].indexOf(params.action) == -1){
            let memberInfo;
            if(!params.uid){
                res.send({code:110,msg:'uid_is_empty'});
            }
            memberInfo = await MemberModel.getMemberInfoById(params.uid);
            if(!memberInfo){
                res.send({code:110,msg:'user_not_exist'});
            }
            let param = "clientType=" + params.clientType + "&lang=" + params.lang + "&network=" + params.network + "&timestamp=" + params.timestamp + "&uid=" + params.uid + "&version=" + params.version;
            let sign = crypto.createHash('md5').update(param + "token=" + memberInfo.token + "uuid=" + params.uuid + "action=" + params.action).digest('hex');
            console.log(sign);
            if(sign !== params.sign){
                res.send({code:110,msg:'signature_verification_failed'});
            }
        }
        next();
    }

}

module.exports = new BaseCtroller();