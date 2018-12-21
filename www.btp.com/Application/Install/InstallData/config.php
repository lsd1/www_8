<?PHP
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
$condata=array();
//管理员可以访问的菜单项
$condata['ADMIN_SHOW']     = 'baodan_wuliu_pro,kuaidi_pro,oldtixian,sms_send';
//是否自动备份数据库(如发现没有本日数据库则自动备份)
$condata['AUTOBACKUP']     = 0;
//时间偏移小时时间
$condata['TIMEMOVE_HOUR']  = 0;
//时间偏移天数
$condata['TIMEMOVE_DAY']   = 0;
//结算奖金开始时间
$condata['CAL_START_TIME'] = strtotime(Date('Y-m-d', time()));
//当前XML文件的MD5值，如果出现不一样，则会尝试重新修正数据库，并更新本配置
$condata['XMLMD5']         = '';
//跨日时间，如果当前时间与DIFFTIME在日期上相差一天，则会触发difftime事件
$condata['DIFFTIME']       =strtotime(Date('Y-m-d', time()));
//是否显示移动电话国家区号
$condata['SHOW_WORLD_MOBILE']=0;
//是否可以在系统设置中显示时间设置
$condata['SHOW_TIMESET']     =0;
//是否可以在系统设置菜单中显示服务中心报单设定
$condata['SHOW_SHOPSET']   =0;
//是否可以在系统设置菜单显示批量注册
$condata['SHOW_BULKREG']   =0;
//注册用户默认一级密码
$condata['DEFAULT_USER_PASS1']='';
//注册用户默认二级密码
$condata['DEFAULT_USER_PASS2']='';
//注册用户默认三级密码
$condata['DEFAULT_USER_PASS3']='';
//客服QQ信息
$condata['SERVICE_QQ']     ='';
//浏览器标题
$condata['SYSTEM_TITLE']   ='';
//公司名称
$condata['SYSTEM_COMPANY'] ='';
//公司副标题
$condata['SYSTEM_MEMO']    ='';
//设置汇款登记审核能够自动到那个钱包0为不到任何钱包
$condata['USER_REMIT_INBANK']='';
//换算比例
$condata['USER_REMIT_RATIO']='';
//汇款登记最小额
$condata['USER_REMIT_MIN']  ='';
//汇款登记最大额
$condata['USER_REMIT_MAX']  ='';
//前台是否可以显示奖金构成
$condata['USER_PRIZE_SWITCH']=0;
//前台默认模板
$condata['DEFAULT_THEME']    =false;
//前台登入口模板
$condata['DEFAULT_LOGIN_THEME']='';

//是否使用三级密码
$condata['USER_USE_PASS3']   =0;
//前台密码超时
$condata['USER_PASS_TIMEOUT']=0;
//前台登入口网址，使用第三方登入口页面地址
$condata['USER_LOGIN_URL']   ='';
//前台登入验证码
$condata['USER_LOGIN_VERIFY']=0;
//前台只能由服务中心报单
$condata['USER_SHOP_SALEONLY']=0;
//前台注册必选项目
$condata['USER_REG_REQUIRED']  ='';
$condata['USER_REG_SHOW']  = 'name,sex,alias,qq,email,mobile,address,bank_card,bank_name,bank_apply_addr,bank_apply_name,area,id_card,pass1,pass1c,pass2,pass2c,shop';
$condata['USER_EDIT_SHOW'] = 'name,sex,alias,qq,email,address,bank_card,bank_name,bank_apply_addr,bank_apply_name,area,id_card';
$condata['USER_VIEW_SHOW'] = 'name,sex,alias,qq,email,address,bank_card,bank_name,bank_apply_addr,bank_apply_name,area,id_card';
$condata['USER_TRUTH']     = '';
//发送邮箱地址
$condata['MAIL_ADDRESS']     ='';
//邮箱服务器地址
$condata['MAIL_SMTP']        ='';
//登入名
$condata['MAIL_LOGINNAME']   ='';
//密码
$condata['MAIL_PASSWORD']    ='';
//发件人姓名
$condata['MAIL_FROMNAME']    ='';
//发件人姓名
$condata['SYSTEM_SERVICE']   =0;
foreach (\DmsAdmin\Controller\SyncController::getcons() as $con) {
    $condata[$con['name']]=($con['type']=='date')? strtotime($con['value']) : $con['value'];
}
$user = X('user');
//汇款信息
$condata['USER_REMIT_MIN']=0;
$condata['USER_REMIT_MAX']=0;
//是否开启比例转换
$condata['USER_REMIT_RATIO_USE']=0;
$condata['USER_REMIT_RATIO']=1;
//系统维护密码信息
$condata['SYSTEM_PASS_KEY']=md100($_SERVER['HTTP_HOST']);
//判断是否存在用户
$condata['HAVEUSER']=false;
//自动编号日期前缀值
$condata['USER_ID_DATE'] = false;
//自动编号ID序号
$condata['USER_ID_SERIAL'] = 1;

$condata['SYSTEM_CLOSE_TITLE'] = '';
$condata['USER_LOGIN_VERIFY_TYPE'] = 1;
$condata['TYPE_QQ'] = 0;
$condata['SERVICE_QQ_0'] = '';
$condata['SERVICE_QQ_1'] = '';
$condata[$user->name.':onlyMobile'] = $user->onlyMobile;
$condata[$user->name.':onlyIdCard'] = $user->onlyIdCard;
$condata[$user->name.':onlyBankCard'] = $user->onlyBankCard;
$condata[$user->name.':onlyAliPay'] = $user->onlyAliPay;
$condata[$user->name.':idEdit'] = $user->idEdit;
$condata[$user->name.':idRand'] = $user->idRand;
$condata[$user->name.':idInDate'] = $user->idInDate;
$condata[$user->name.':idAutoEdit'] = $user->idAutoEdit;
$condata[$user->name.':idPrefix'] = $user->idPrefix;
$condata[$user->name.':idLength'] = $user->idLength;
$condata[$user->name.':userShortcutMenu'] = '';
$condata['startOpenTime'] = [0,0,0,0,0,0,0];
$condata['endOpenTime'] = [24,24,24,24,24,24,24];

$condata['giveMoney'] = 0;
$condata['sureGiveMoney'] = 0;
$condata['giveMoneyPass2'] = 0;
$condata['giveMoneyPass3'] = '';
$condata['giveMoneySmsSwitch'] = '';
$condata['giveMoneySmsContent'] = '';

$condata['USER_YJ_SWITCH'] = 0; // 前台业绩显示


return $condata;
