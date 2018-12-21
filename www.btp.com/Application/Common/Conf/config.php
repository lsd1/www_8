<?php
return array(		
		'LOAD_EXT_CONFIG'           =>  'db,debug,lang,uarbac',	// 扩展配置
		'DEFAULT_MODULE'            =>  'DmsUser',  // 默认模块
		'URL_CASE_INSENSITIVE'      =>  false,  // 严格区分大小写
	
		'URL_MODEL'                 =>  1,					// 如果你的环境不支持PATHINFO 请设置为3

		'SESSION_AUTO_START'        =>  true,
		'TOKEN_ON'					=>  false,				// 是否开启令牌验证

		'RBAC_ADMIN_AUTH_ON'        =>  true,				// RBAC启用管理员后台管理验证
		'RBAC_ADMIN_AUTH_GATEWAY'	=>  '/DmsSync/Public/login',	// RBAC后台管理员认证网关
		'RBAC_ADMIN_AUTH_TYPE'		=>  1,					// RBAC后台管理,验证方式   1:SESSION认证(性能好)   2:实时认证(性能差)

		'RBAC_USER_AUTH_ON'			=>  true,				// RBAC启用会员后台管理验证
		'RBAC_USER_AUTH_GATEWAY'	=>  '/DmsSync/Public/login',	// RBAC会员后台认证网关
		'RBAC_USER_AUTH_TYPE'		=>  1,					// RBAC会员后台管理,验证方式   1:SESSION认证(性能好)   2:实时认证(性能差)

		'RBAC_NOT_AUTH_MODULE'      =>  'Public',			// RBAC默认无需认证模块
		'RBAC_NOT_AUTH_ACTION'      =>  'getfilecheck',		// RBAC默认无需认证操作
		'RBAC_REQUIRE_AUTH_MODULE'  =>  '',					// RBAC默认需要认证模块
		'RBAC_REQUIRE_AUTH_ACTION'  =>  '',					// RBAC默认需要认证操作
);
?>