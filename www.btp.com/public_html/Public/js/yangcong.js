window.yangcong = function(type){
    yc_type = type;
	var login_event_id = '';
    var login_time = 0;
    var login_total =0;
    bind_close = 0;
    
	$('.close').click(function(){
        bind_close = 1;
    });

    login_getqr();
    function login_getqr(){
        var h;
        $.get('/pc_denglu.php/DmsSync/Public/yangcong_ac',{'ac':'qrcode_for_auth','auth_type':1,'yc_type':type}, function(resp){
            var r = eval(resp);
            if(r.status == 200){
                    h = '';
                    if(type =='login1'){
                    	h += '<img src="'+r.qrcode_url+'" />';
                    }else{
                    	h += '<img src="'+r.qrcode_url+'" with="260px" height="260px"/>';
                    }
                    h += '<p id="tip">请使用洋葱APP扫一扫!</p>';
                    // 延迟半秒用于解决服务器繁忙导致图片未生成
                    setTimeout(function(){
                        $('#qrcode').html(h).show();
                        }, 200);
                    login_event_id = r.event_id;
                    //开始调取获取事件结果接口
                    login_time = 0;
                    if(bind_close == 0){
                        login_get_event_result();
                    }
                    
            }else{
                alert(r.description);
            }
        },'json');
    }

    window.login_get_event_result = function(){
        $.ajax({
            url:'/pc_denglu.php/DmsSync/Public/yangcong_ac',
            data:{'ac':'event_result', 'event_id':login_event_id,'yc_type':type},
            dataType:'json',
            async: true,
            global:false,
            success:function(resp){
                    var r = eval(resp);
                    if(r.status == 1){
                        $('#tip').html(r.info);
                        if(r.type == 'login'){
                        	window.top.location = '/pc_denglu.php/DmsSync/Index/index';
                        }else if(r.type == 'bind'){
	                        $.pdialog.closeCurrent(); //关闭添加话框
                            if(yc_type == 'bind1'){
	                           navTab.reload(); 
                            }
	                        alertMsg.correct(r.info);
                        }
                        return;
                    }else if(r.status == 0){
                        $('#tip').html(r.info);
                        if(r.type == 'bind'){
	                        $.pdialog.closeCurrent(); //关闭添加话框
	                        alertMsg.error(r.info);
                        }
                        return;
                    }
                    
                    login_time += 3;
                    if(login_time >=50){
                        if(login_total>=20){
                            $('#tip').html('二维码已失效,请刷新页面重新获取！');
                            return;
                        }
                        login_total+=1;
                        login_getqr();
                        return;
                    }
                    if(bind_close == 0){
                        setTimeout('login_get_event_result()', 3000);
                    }
                }
        });
    }

}
