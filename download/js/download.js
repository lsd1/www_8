;(function () {
    var clientWidth = document.documentElement.clientWidth > 750 ? 750 : document.documentElement.clientWidth,// px与rem单位的换算
        langArr = {"0":"cn", "1":"en", "2":"tcn"},
        lang = langArr[getRequest()['lang']],//语言设置
        type = 'union',//联盟或者钱包页面
        getDataUrl = 'http://192.168.8.115/v1.0/h5/app/download?callback=getData';//接口地址

    document.documentElement.style.fontSize = clientWidth / 7.5 + 'px';
    lang = lang ? lang : 'en';

    var cssData = [
        {lang:null, type:null, selectType:"class", selectName:"bg",cssName:"backgroundImage",cssVal:"url('images/download_" + type + "_bg.png')"},
        {lang:null, type:null, selectType:"class", selectName:"logo-img", cssName:"src", cssVal:"images/download_" + type + "_logo.png"},
        {lang:null, type:"union", selectType:"class", selectName:"btn", cssName:"background", cssVal:"linear-gradient(-85deg,rgba(255,154,4,1) 0%,rgba(253,171,15,1) 100%)"},
        {lang:null, type:"wallet", selectType:"class", selectName:"btn", cssName:"background", cssVal:"linear-gradient(-85deg,rgba(88,87,255,1) 0%,rgba(96,112,252,1) 100%)"},
        {lang:null, type:"union", selectType:"class", selectName:"content-text", cssName:"color", cssVal:"#FF9A04"},
        {lang:null, type:"wallet", selectType:"class", selectName:"content-text", cssName:"color", cssVal:"#5F6DFC"},
        {lang:null, type:"union", selectType:"class", selectName:"content-version", cssName:"color", cssVal:"#FF9A04"},
        {lang:null, type:"wallet", selectType:"class", selectName:"content-version", cssName:"color", cssVal:"#5F6DFC"},
        {lang:null, type:"wallet", selectType:"class", selectName:"logo-text", cssName:"innerText", cssVal:"Me Wallet"},

        {lang:"en", type:null, selectType:"class", selectName:"btn", cssName:"innerText", cssVal:"Download"},
        {lang:"cn", type:null, selectType:"class", selectName:"btn", cssName:"innerText", cssVal:"下载"},
        {lang:"tcn", type:null, selectType:"class", selectName:"btn", cssName:"innerText", cssVal:"下載"},

        {lang:"en", type:null, selectType:"class", selectName:"version-text", cssName:"innerText", cssVal:"version"},
        {lang:"cn", type:null, selectType:"class", selectName:"version-text", cssName:"innerText", cssVal:"版本"},
        {lang:"tcn", type:null, selectType:"class", selectName:"version-text", cssName:"innerText", cssVal:"版本"},

        {lang:"en", type:"union", selectType:"class", selectName:"logo-text", cssName:"innerText", cssVal:"Union Chain Club"},
        {lang:"cn", type:"union", selectType:"class", selectName:"logo-text", cssName:"innerText", cssVal:"联盟俱乐部"},
        {lang:"tcn", type:"union", selectType:"class", selectName:"logo-text", cssName:"innerText", cssVal:"聯盟俱樂部"},

        {lang:"en", type:"union", selectType:"class", selectName:"content-text", cssName:"innerText", cssVal:"Welcome to the Alliance Club"},
        {lang:"cn", type:"union", selectType:"class", selectName:"content-text", cssName:"innerText", cssVal:"欢迎来到联盟俱乐部"},
        {lang:"tcn", type:"union", selectType:"class", selectName:"content-text", cssName:"innerText", cssVal:"歡迎來到聯盟俱樂部"},

        {lang:"en", type:"wallet", selectType:"class", selectName:"content-text", cssName:"innerText", cssVal:"Digital Asset Security Management"},
        {lang:"cn", type:"wallet", selectType:"class", selectName:"content-text", cssName:"innerText", cssVal:"数字资产安全管理"},
        {lang:"tcn", type:"wallet", selectType:"class", selectName:"content-text", cssName:"innerText", cssVal:"數字資產安全管理"}
    ];

    for(var j = 0, len = cssData.length; j < len; j++) {
        var val = cssData[j];
        if((val.type === type || val.type === null) && (val.lang === lang || val.lang === null)) {
            var eleSelect = {tag:'', class:'.', id:"#"};
            setCss(document.querySelector(eval('eleSelect.' + val.selectType) + val.selectName), val.cssName, val.cssVal);
        }
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = getDataUrl;
    document.getElementsByTagName('head')[0].appendChild(script);

    //设置下载地址
    window.getData = function (res){
        var client = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) ? 'ios' : 'android',
            data = eval('res.data.downloads.'+ client);
        document.querySelector(".version-num").innerText = data.version;
        document.querySelector(".download").href = data.url;
    };

    function setCss(ele, cssName, cssVal){
        switch(cssName){
            case "src":
                ele.src=cssVal;
            break;
            case "innerText":
                ele.innerText=cssVal;
            break;
            default:
                eval('ele.style.' + cssName + '="' + cssVal + '"');
            break;
        }
    }

    //获取当前页面url中"?"符后的参数
    function getRequest() {
        var url = location.search;
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=decodeURIComponent(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
}());