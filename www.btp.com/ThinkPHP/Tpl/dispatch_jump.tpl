<?php
    if(C('LAYOUT_ON')) {
        echo '{__NOLAYOUT__}';
    }
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>跳转提示</title>
<style type="text/css">
*{ padding: 0; margin: 0; }
html, body{margin:0; padding:0; border:0 none;font:14px Tahoma,Verdana;line-height:150%;background:white;font-family: '微软雅黑'; color: #333; font-size: 16px;}
a{text-decoration:none; color:#174B73; border-bottom:1px dashed gray}
a:hover{color:#F60; border-bottom:1px dashed gray}
.system-message{ margin:10% auto 0px auto;clear:both;padding:5px;border:1px solid silver; text-align:center; width:45% }
.system-message h1{ font-size: 100px; font-weight: normal; line-height: 120px; margin-bottom: 12px; }
.system-message .jump{ padding-top: 10px}
.system-message .jump a{ color: #333;}
.system-message .success,.system-message .error{ line-height: 1.8em; font-size: 36px }
.system-message .detail{ font-size: 12px; line-height: 20px; margin-top: 12px; display:none}
.system-message .msg{margin:20px 0px}

span.wait{color:blue;font-weight:bold}
span.error{color:red;font-weight:bold}
span.success{color:blue;font-weight:bold}

div.msg{margin:20px 0px}
</style>
</head>
<body>
<div class="system-message">
	<div class="msg">
	<present name="message" >
	<span class="success">{$message}</span>
	<else/>
	<span class="error">{$error}</span>
	</present>
	</div>
	<div class="tip">
	<present name="closeWin" >
		页面将在 <span class="wait" id="wait">{$waitSecond}</span> 秒后自动关闭，如果不想等待请点击 <a id="href" href="{$jumpUrl}">这里</a> 关闭
	<else/>
		页面将在 <span class="wait" id="wait">{$waitSecond}</span> 秒后自动跳转，如果不想等待请点击 <a id="href" href="{$jumpUrl}">这里</a> 跳转
	</present>
	</div>
</div>
<script type="text/javascript">
(function(){
var wait = document.getElementById('wait'),href = document.getElementById('href').href;
var interval = setInterval(function(){
	var time = --wait.innerHTML;
	if(time <= 0) {
		location.href = href;
		clearInterval(interval);
	};
}, 1000);
})();
</script>
</body>
</html>
