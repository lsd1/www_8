var wait=300;
var sta = true;
function time(o) {
    if(sta == true){
	    if(typeof(type) == 'undefined')  type='';
	    if(typeof(mobile) == 'undefined') mobile='';
        if(typeof(zzid) == 'undefined') zzid='';
        if(o.attr("id") == 'sendAudio') { 
        	isaudio = 1;
    	}else{
    		isaudio = 0;
    	}
    	//修改手机号时，获取最新修改的手机号
 		if(mobile == '*****')
 		{
 			mobile=document.getElementById("mobile").value;
 		}
        o.addClass("send-msg-disabled");
        $.post('/index.php/DmsUser/Common/sendSmsVerify',{type:type,mobile:mobile,zzid:zzid,isaudio:isaudio},function(data){
            eval("var data= " + data);
            layer.alert(data.info, { title: characters.title, btn: characters.determ});
            if(data.status != 1){
                wait=0;
            }
        });
        sta = false;
    }
    if (wait == 0) {
      o.removeClass("send-msg-disabled");
      o.removeAttr("disabled");
      o.val(characters.resend);
      wait = 300;
      sta = true;
    } else {
      o.attr("disabled", 'disabled');
      o.val(characters.resend+"(" + wait + ")");
      wait--;
      setTimeout(function() {
        time(o)
      },
      1000)
    }
}
