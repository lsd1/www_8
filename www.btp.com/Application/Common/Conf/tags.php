<?php
/**
 * Parses and verifies the file doc comment.
 *
 * PHP version 5
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    kaifazhe <gsherwood@squiz.net>
 * @copyright 2015 8 06
 * @license   https://github.com/squizlabs/PHP_CodeSniffer/blob/master/licence.txt 
 BSD Licence
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK IT ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2012 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
// $Id: tags.php 2726 2012-02-11 13:34:24Z liu21st $

// 系统默认的核心行为扩展列表文件
return array(
    'app_init'=>array(
        // '\Behavior\XSSBehavior' 注释原因:APP初始化时找不到MODULE_NAME
    ),
    'app_begin'=>array(
        //'\Behavior\ReadHtmlCacheBehavior', // 读取静态缓存
    ),
    'route_check'=>array(
        'CheckRoute', // 路由检测
    ),
    'app_end'=>array('\Behavior\SaveConfigBehavior'),
    'path_info'=>array(),
    'action_begin'=>array(),//'XSS'
    'action_end'=>array(),
    'view_begin'=>array(),
    'view_template'=>array(
        'LocationTemplate', // 自动定位模板文件
    ),
    'view_parse'=>array(
        //'\Behavior\ParseTemplateBehavior', // 模板解析 支持PHP、内置模板引擎和第三方模板引擎
    ),
    'view_filter'=>array(
        '\Behavior\ContentReplaceBehavior', // 模板输出替换
        '\Behavior\TokenBuildBehavior',   // 表单令牌
        //'\Behavior\WriteHtmlCacheBehavior', // 写入静态缓存
        '\Behavior\ShowRuntimeBehavior', // 运行时间显示
    ),
    'view_end'=>array(
        //'\Behavior\ShowPageTraceBehavior', // 页面Trace显示
    ),
);
