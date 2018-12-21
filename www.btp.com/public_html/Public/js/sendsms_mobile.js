var wait=300;
var sta = true;
function time(o) {
    if(sta == true){
    	if(typeof(type) == 'undefined')  type='';
    	if(typeof(mobile) == 'undefined') mobile='';
 		if(typeof(zzid) == 'undefined') zzid='';
 		//修改手机号时，获取最新修改的手机号
 		if(mobile == '*****')
 		{
 			mobile=document.getElementById("mobile").value;
 		}
        $.post('/index.php/DmsUser/Common/sendSmsVerify',{type:type,mobile:mobile,zzid:zzid},function(data){		            
            eval("var data= " + data);
            layer.open({
			  content: data.info
			  ,style: 'width:13rem;  border:none; font-size:0.9rem;' //自定风格
			  ,time: 1.5
			});
            if(data.status != 1){
                wait=0;
            }
        });
        sta = false;
    }
    if (wait == 0) {
      o.removeAttribute("disabled");
      o.value=characters.clickget;
      wait = 300;
      sta = true;
    } else {
      o.setAttribute("disabled", true);
      o.value=characters.resend+"(" + wait + ")";
      wait--;
      setTimeout(function() {
        time(o)
      },
      1000)
    }
}
