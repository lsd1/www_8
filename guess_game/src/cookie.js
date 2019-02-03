import md5 from 'js-md5';

class Params {
    initParams(action, data){
        var
            env = localStorage.getItem('api');
        if(!env && env !== ''){
            env = 'test';
        }
        var
            lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 0,
            uid = localStorage.getItem('uid') ? localStorage.getItem('uid') : 1000010,
            clientType = localStorage.getItem('clientType') ? localStorage.getItem('clientType') : 0,
            network = localStorage.getItem('network') ? localStorage.getItem('network') : 1,
            version = localStorage.getItem('version') ? localStorage.getItem('version') : '9.9.9',
            token = localStorage.getItem('token') ? localStorage.getItem('token') : '99d87d67e0fffa7ce595fd1c16436708',
            timestamp = new Date().getTime(),
            uuid = timestamp.toString() + this.getRndNum(5).toString(),
            param = "clientType=" + clientType + "&lang=" + lang + "&network=" + network + "&timestamp=" + timestamp + "&uid=" + uid + "&version=" + version,
            sign = md5(param + "token=" + token + "uuid=" + uuid + "action=" + action),
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
            data = this.mergeObj(getParamsAsJson, data),
            url = "http://192.168.1.238:666/",
            getUrl = url + action + '?'+ Object.keys(data).map(function(key){
                return encodeURIComponent(key) + "=" + encodeURIComponent(data[key]);
            }).join("&"),
            params = new Object();
        params.data = data;
        params.postUrl = url + action;
        params.getUrl = getUrl;
console.log(param + "token=" + token + "uuid=" + uuid + "action=" + action);
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
     mergeObj(objA,objB){
        for(var key in objB){
            objA[key] = objB[key];
        }
        return objA;
    }
}





class Cookie  {

    /**
     * 设置cookie
     */
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + encodeURI(cvalue) + "; " + expires;
    }

    /**
     * 读取cookie
     */
    getCookie(name) {
        var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return decodeURI(arr[2]);
        else
            return null;
    }

    /**
     * 清空cookie
     */
    delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var val = this.getCookie(name);
        if(val != null ) {
            document.cookie = name + "="+ val + ";expires=" + exp.toISOString();
        }
    }
}

export {Params,Cookie};

