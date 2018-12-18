(function () {
    //ajax设置
    ajaxSetting();

    //主题
    useTheme();

    //点击返回
    $('a.goBack').click(function () {
        if (document.referrer === '') {
            window.maiguoer.goBack();
        } else {
            window.history.go(-1);
        }
    });

})();

function getRequest() {    //获取当前页面url中"?"符后的参数
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

/**
 * 弹框提示
 *
 * @param message
 * @param second
 */
function showTip(message, second) {

    var timeout = second ? second * 1000 : 1000;

    if ($('#hint').length == 0) {
        $("body").append('<div class="shelt"></div><div id="hint" class="hintreason"></div>').show();
    }
    var shelt = $('.shelt');
    var hint =  $('#hint');
    hint.html(message);
    var hintHeight = hint.height();
    // console.log(hintHeight);
    var fontsize = document.documentElement.style.fontSize.match(/\d*/)[0];
    var messageLength = message.toString().length;
    //计算文字长度是提示框长度的几倍
    var multiple = message.toString().length/((shelt.width() * 0.9 - fontsize * 0.6) / (fontsize * 0.3) - 1);

    if(Math.ceil(multiple) > 1){
        //如果提示文字长度超过提示框长度，则提示框长度最大为屏幕宽90%+padding;
        var hintWidth = shelt.width() * 0.9 - fontsize * 0.6;
        hint.css('margin-left', - ((hintWidth + (fontsize * 0.6)) / 2));
    }else{
        hint.css('margin-left', - ((hint.width() + (fontsize * 0.6)) / 2));
    }

    //提示框高度自适应文字高度。
    hint.css('height', (Math.ceil(multiple) - 1) * fontsize * 0.4 + hint.height() + fontsize * 0.6).show();

    $('.shelt').show();
    setTimeout( function () {
        $('#hint').html('');
        hint.height(hintHeight);
        $('#hint').hide();
        $('.shelt').hide();
    }, timeout);
}

// 懒加载 用到的函数
//文档高度 文档高度 = 可视窗口高度 + 滚动条高度  时,滚动条正好到底.
function getDocumentTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;    return scrollTop;
}
//可视窗口高度
function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}
//滚动条滚动高度
function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
        bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;    return scrollHeight;
}
// 使用给页面绑定监听事件
// $(window).on('scroll',function(){
//     //监听事件内容
//     if(getScrollHeight() == getWindowHeight() + getDocumentTop()){
//         console.log('滚到底部了')


//     }
// })

//创建一个成功的提示
function successTip(tipTxt){
    var tip= tipTxt?tipTxt:'已完成';
    if ($('.successTip').length == 0) {
        var tipDiv="<div class='create_status tip successTip'>"+tip+"</div>";
        $('body').append(tipDiv);
    } else {
        $('.successTip').html(tipTxt);
    }
    $('.successTip').show();
}

function closeSuccessTip(){
    $('.successTip').hide();
}

//创建一个正在加载的提示
function loading(){
    if ($('.now_loading').length == 0) {
        var tipDiv="<div class='create_status now_loading'></div> <div class='shelt'></div>";
        $('body').append(tipDiv);
    }
    $('.now_loading').show();
    $(".shelt").show();
}

function closeLoading() {
    $('.now_loading,.btn_loading').hide();
    $(".shelt").hide();
}
// 点击提交时候的等待加载效果
function btn_loading() {
    if ($('.btn_loading').length == 0) {
        var tipDiv = "<div class='create_status btn_loading loding_height'></div>";
        $('body').append(tipDiv);
    }
    $('.btn_loading').show();
}
//ajax设置
function ajaxSetting() {
    $.ajaxSetup({
        beforeSend:function(){  //  ajax数据加载前 加载数据
            $('.loading').fadeIn();
        },
        complete: function() { //  ajax数据完成后 加载数据
            $('.loading').remove();
        },
        error: function (res) {
            var msg = res.msg ? res.msg : '网络出错，请重试！';
            showTip(msg);
        }
    });
}
function useTheme() {

    var skin = 1;
    var theme = 'red';

    var Request = getRequest();

    if (Request['skin']) {
        skin = Request['skin'];
    } else {
        skin = getCookie('skin');
    }

    switch(parseInt(skin))  {
        case 2:
            theme = 'blue';
            break;
        default:
            theme = 'red';
    }

    changeCssTheme(theme);
}
//修改css主题颜色
function changeCssTheme(theme) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.id = 'css-theme';
    link.rel = 'stylesheet';
    link.href = 'css/' + theme + '_theme.css';
    document.getElementsByTagName("head")[0].appendChild(link);
}
//读取cookie
function getCookie(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return decodeURI(arr[2]);
    else
         return null;
}
$('.shelt_img').on('click',function(){
    $(this).fadeOut();
})


function wakeUpApp(url, time) {
    // var timeout = time ? time : 1500;
    // setTimeout(function () {
        console.log(url);
        window.location.href = url;
    // }, timeout);
}

function wakeUpAppOrDownload(wakeUrl, wakeTime) {
    var timeout = wakeTime ? wakeTime : 500;
    wakeUpApp(wakeUrl, timeout);
    setTimeout(function () {
        window.location.href = "http://www.maiguoer.com/data/download/";
    }, timeout);
}
function wakeUpAppOrRegister(wakeUrl, wakeTime, tutorId) {
    var timeout = wakeTime ? wakeTime : 1000;
    wakeUpApp(wakeUrl, timeout);
    setTimeout(function () {
        if(tutorId) {
         window.location.href = '/share/register.html?uid=' + tutorId;
        }else {
            window.location.href = '/share/register.html';
        }
    }, timeout);
}


//保留N位小数。
function toFixed(number, len){
    if(len === undefined){
        len = 2;
    }

    if (number == 0) {
        return parseFloat(number).toFixed(len);
    }

    var a = 4.9 / Math.pow(10,len+1);
    return (number - a).toFixed(len);

}

