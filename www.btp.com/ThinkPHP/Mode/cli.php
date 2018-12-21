<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2012 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
// $Id: cli.php 2702 2012-02-02 12:35:01Z liu21st $

// 命令行模式定义文件
return array(
    // 配置文件
    'config'    =>  array(
        THINK_PATH.'Conf/convention.php',   // 系统惯例配置
        CONF_PATH.'config'.CONF_EXT,      // 应用公共配置
        CONF_PATH.'db'.CONF_EXT, 
    ),

    // 别名定义
    'alias'     =>  array(),

    // 函数和类文件
    'core'      =>  array(
        MODE_PATH.'Cli//functions.php',
        MODE_PATH.'Cli//function.php',
        MODE_PATH.'Cli/App'.EXT,
        MODE_PATH.'Cli/Dispatcher'.EXT,
        MODE_PATH.'Cli/Controller'.EXT,
    ),
    // 行为扩展定义
    'tags'  =>  array(),
);


// return array(
//     // 配置文件
//     'config'    =>  array(
//         THINK_PATH.'Conf/convention.php',   // 系统惯例配置
//         CONF_PATH.'config'.CONF_EXT,      // 应用公共配置
//     ),

//     'core'         =>   array(
//         MODE_PATH.'Cli/functions.php',   // 命令行系统函数库
//         MODE_PATH.'Cli/Log.class.php',
//         MODE_PATH.'Cli/App.class.php',
//         MODE_PATH.'Cli/Controller.class.php',
//     ),

//     // 项目别名定义文件 [支持数组直接定义或者文件名定义]
//     'alias'         =>    array(
//         'Model'    =>   MODE_PATH.'Cli/Model.class.php',
//         'Db'        =>    MODE_PATH.'Cli/Db.class.php',
//         'Cache'         => CORE_PATH.'Core/Cache.class.php',
//         'Debug'         => CORE_PATH.'Util/Debug.class.php',
//     ), 

//     // 系统行为定义文件 [必须 支持数组直接定义或者文件名定义 ]
//     'extends'    =>    array(), 

//     // 项目应用行为定义文件 [支持数组直接定义或者文件名定义]
//     'tags'         =>   array(), 

// );
?>