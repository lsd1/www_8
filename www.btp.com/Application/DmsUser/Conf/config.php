<?php
defined('THINK_PATH') || die('不要非法操作!');

B('\Behavior\CheckAccess');
if (isset($_SESSION['isMobile']) && $_SESSION['isMobile']) {
    $DEFAULT_THEME='wap_alpha';
} else {
    $DEFAULT_THEME = "2018ja";//CONFIG('DEFAULT_THEME') ? CONFIG('DEFAULT_THEME') : "blanc_default";
}

return  array(
    
    'TMPL_ACTION_ERROR'         =>  'Public:success',   // 默认错误跳转对应的模板文件
    'TMPL_ACTION_SUCCESS'       =>  'Public:success',   // 默认成功跳转对应的模板文件

    'SAFE_PWD2'                 =>'repass2', //二级密码SESSION
    'SAFE_PWD3'                 =>'repass3', //三级密码SESSION

    // 前台模块设定
    'DEFAULT_THEME'             => $DEFAULT_THEME,

    // 发邮件
    'MAIL_Port'                 =>'25', // 发邮件端口

    //多语言
    'LANG_SWITCH_ON'            =>    true,
    'My_LANG_SWITCH_ON'         =>    true,
    
    //表单令牌验证
    'TOKEN_ON'                  =>true,  // 是否开启令牌验证
    'TOKEN_NAME'                =>'__hash__',    // 令牌验证的表单隐藏字段名称
    'TOKEN_TYPE'                =>'md5',  //令牌哈希验证规则 默认为MD5
    'TOKEN_RESET'               =>false,  //令牌验证出错后是否重置令牌 默认为true
);
