<?php

$arr = array(
    '系统日志'    => array(
        'module'    => 'Log',
        'sort'        => 1,
        'childs'    => array(
            '日志列表'    => array('action'=>'index',"level"=>1,'parent'=>'系统日志','setParent'=>"系统日志"),
            '查看详情'    => array('action'=>'view',"level"=>2,'parent'=>'系统日志','setParent'=>"系统日志"),
        ),
    ),
    '区域管理' => array(
        'module'    => 'Area',
        'sort'        => 2,
        'childs'    => array(
            '区域管理'    => array('action'=>'index','parent'=>'区域管理',"level"=>1,'setParent'=>"区域管理"),
            '区域管理设置'=> array('action'=>'update,country_add_save,area_add_save,area_delete',"level"=>2,'parent'=>'区域管理','setParent'=>"区域管理"),
        ),
    ),
    '数据库维护' =>array(
        'module'    => 'Backup',
        'sort'        => 3,
        'childs'    => array(
            '数据库备份列表'=>  array('action'=>'index,backAjax,getstateajax',"level"=>1,'parent'=>'数据库维护','setParent'=>"数据库备份列表"),
            '恢复'            =>  array('action'=>'progress,recover,prerecover',"level"=>2,'parent'=>'数据库维护','setParent'=>"数据库备份列表"),
            '删除'            =>  array('action'=>'deletebak',"level"=>2,'parent'=>'数据库维护','setParent'=>"数据库备份列表"),
            '备份数据库'    =>  array('action'=>'progress,back,prebackall,backall,backup',"level"=>2,'parent'=>'数据库维护','setParent'    =>"数据库备份列表"),
            '清空数据库'    =>  array('action'=>'clear,cleandb,cleanfun',"level"=>2,'parent'=>'数据库维护','setParent'=>"数据库备份列表"),
        ),
    ),
    '首页信息'=>array(
        'module'    => 'Index',
        'sort'        => 12,
        'childs'    => array(
            '首页信息显示'=> array('action'=>'checkxml',"level"=>2,'parent'=>'首页信息','setParent'=>"首页信息显示")
        ),
    ),
    '权限组管理'=>array(
        'module'    => 'Role',
        'sort'        => 10,
        'childs'    => array(
            '权限组列表'        => array('action'=>'index',"level"=>1,'parent'=>'权限管理','setParent'=>"权限组管理"),
            // '添加'		=> array('action'=>'add,insert',"level"=>2,'parent'=>'权限管理','setParent'=>"权限组管理"),
            // '修改'		=> array('action'=>'edit,update',"level"=>2,'parent'=>'权限管理','setParent'=>"权限组管理"),
            // '删除'		=> array('action'=>'delete',"level"=>2,'parent'=>'权限管理','setParent'=>"权限组管理"),
        ),
    ),
    '管理员管理'=>array(
        'module'    => 'Admin',
        'sort'        => 11,
        'childs'    => array(
            '管理员列表'        => array('action'=>'index',"level"=>1,'parent'=>'权限管理','setParent'=>"管理员管理"),
            '添加'        => array('action'=>'add,insert',"level"=>2,'parent'=>'权限管理','setParent'=>"管理员管理"),
            '修改'        => array('action'=>'edit,update',"level"=>2,'parent'=>'权限管理','setParent'=>"管理员管理"),
            '删除'        => array('action'=>'delete',"level"=>2,'parent'=>'权限管理','setParent'=>"管理员管理"),
            '重置权限列表'        => array('action'=>'updateNode',"level"=>2,'parent'=>'权限管理','setParent'=>"管理员管理"),
            '后台登陆域名绑定'        => array('action'=>'bind',"level"=>2,'parent'=>'权限管理','setParent'=>"管理员管理"),
            '后台登录绑定'        => array('action'=>'addbind,bind_check,delbind,cancel_bind',"level"=>2,'parent'=>'权限管理','setParent'=>"管理员管理"),
        ),
    )
);

if (adminshow('emailSwitch')) {
    $arr['邮件设置']=array(
    'module'    => 'Mail',
    'sort'        => 3,
    'childs'    => array(
    '邮件设置'=>array('action'=>'index,mailupdate,testsendmail',"level"=>1,'parent'=>'邮件设置','setParent'=>"邮件设置"),
    ),
    );
}
if (adminshow('payOnlineSwitch')) {
    $arr['支付接口安装'] = array(
    'module'    => 'Pay',
    'sort'        => 7,
    'childs'    => array(
    '列表'    => array('action'=>'index',"level"=>1,'parent'=>'支付接口安装','setParent'=>"支付管理"),
    '安装'    => array('action'=>'install',"level"=>2,'parent'=>'支付接口安装','setParent'=>"支付管理"),
    '卸载'    => array('action'=>'uninstall',"level"=>2,'parent'=>'支付接口安装','setParent'=>"支付管理"),
    '修改'    => array('action'=>'edit',"level"=>2,'parent'=>'支付接口安装','setParent'=>"支付管理"),
    ),
    );
    $arr['支付订单管理'] = array(
    'module'    => 'PayOrder',
    'sort'        => 8,
    'childs'    => array(
    '订单列表'    => array('action'=>'index',"level"=>1,'parent'=>'支付订单管理','setParent'=>"支付管理"),
    '审核'    => array('action'=>'pass',"level"=>2,'parent'=>'支付订单管理','setParent'=>"支付管理"),
    '撤销'    => array('action'=>'cancel',"level"=>2,'parent'=>'支付订单管理','setParent'=>"支付管理"),
    '删除'    => array('action'=>'delete',"level"=>2,'parent'=>'支付订单管理','setParent'=>"支付管理"),
    ),
    );
    $arr['支付测试'] = array(
    'module'    => 'PayTest',
    'sort'        => 9,
    'childs'    => array(
    '支付页面'    => array('action'=>'index',"level"=>2,'parent'=>'支付订单管理','setParent'=>"支付管理"),
    '支付提交'    => array('action'=>'pay_confirm',"level"=>2,'parent'=>'支付订单管理','setParent'=>"支付管理"),
    ),
    );
}
if (CONFIG('SHOW_TIMESET')) {
    $arr['系统时间设置'] = array(
    'module'    => 'System',
    'sort'        => 10,
    'childs'    => array(
    '系统时间设置'    => array('action'=>'settime,timeupdate',"level"=>1,'parent'=>'系统时间设置','setParent'=>"系统时间设置"),
    ),
    );
}
return $arr;
