<?php
namespace COM\SMS;
// +----------------------------------------------------------------------
// 示远科技短信网关发送类
// 开发人:呼噜猫
// 2017-03-18
// +----------------------------------------------------------------------
class SykjSms {
	
	//返回支付接口中文名称
	public static function getName()
	{
		return '示远科技';
	}

	//返回接口中文介绍
	public static function getMemo()
	{
		return '示远科技短信http://www.18sms.com/';
	}	
	//返回需要配置的项
	public static function getConfigInfo()
	{
		return array(
			array(
				'config_name'=>'name',
				'config_value'=> '示远科技',
				'name'=>'接口名称',
				'type'=>'text',
				'style'=>'width:300px',
			),
			array(
				'config_name'=>'account',
				'config_value'=> '',
				'name'=>'用户账号',
				'type'=>'text',
				'style'=>'width:300px',
			),
			array(
				'config_name'=>'passwd',
				'config_value'=> '',
				'name'=>'用户密码',
				'type'=>'text',
				'style'=>'width:300px',
			),
		);
	}
	/*
	* 短信发送
	*/
	public function send($mobiles,$content)
	{		
		if($this->account && $this->passwd){
			$account	= $this->account;			
			$pass		= $this->passwd;
			$content	= urlencode(trim($content));
			$url		= "http://send.18sms.com/msg/HttpBatchSendSM?account={$account}&pswd={$pass}&mobile={$mobiles}&msg={$content}&needstatus=true";
			//请求
			$res		= $this->getResult($url);	
			//对返回结果做处理
			$result = explode(',',str_replace(array("\r\n", "\r", "\n"), ",", $res));
			if(isset($result[1]) && $result[1]==0)
			{
				$result	= array('status'=>true,'info'=>'发送成功');
			}
			elseif(isset($result[1]) && $result[1]!=0){
				//获取发送结果
				$error	= $this->resolve_error($result[1]);
				//返回发送失败信息
				$result	= array('status'=>false,'info'=>$error);
			}else{
				$result = array('status'=>false,'info'=>'发送失败!');
			}
		}else{
			$result = array('status'=>false,'info'=>'账号不存在!');
		}
		return $result;	
	}
	
	
	/*
	* 短信余额查看
	*/
	
	public function lookSurplus()
	{
		if($this->account && $this->passwd)
		{
			$account	= $this->account;
			$pass		= $this->passwd;		
			$url		= "http://send.18sms.com//msg/QueryBalance?account={$account}&pswd={$pass}";						
			$result		= $this->getResult($url);
			//对返回结果做处理
			$result = explode(',',str_replace(array("\r\n", "\r", "\n"), ",", $result));
			if(isset($result[1]) && $result[1]==0)
			{
				$result	= $result[3];//余额
			}elseif(isset($result[1]) && $result[1]!=0)
			{
				$error	= $this->resolve_error($result[1]);
				$result	= $error;//错误信息
			}else{
				$result = array('status'=>false,'info'=>'网络错误!');
			}
		}else{
			$result = array('status'=>false,'info'=>'账号不存在!');
		}
		return $result;
	}
	/*
	* 获取处理结果
	*/
	private static function getResult($url)
	{
		$file_contents	= "";
		if(function_exists('file_get_contents'))
		{
			$file_contents = file_get_contents($url);
		}else if(function_exists('curl_init')){
			$ch = curl_init();
			$timeout = 5;
			curl_setopt ($ch, CURLOPT_URL, $url);
			curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
			$file_contents = curl_exec($ch);
			curl_close($ch);
		}else{
			self::showError("系统不支持 curl 和 file_get_contents 无法发送短信!");
		}
		return $file_contents;
	}

	//错误信息
	public function resolve_error($error_code)
	{
		$msg = '未知';
		if(!is_numeric($error_code)){
			return '提交失败';
		}else{
			switch($error_code)
			{
				case '101':
					$msg = '无此用户';
					break;
				case '102':
					$msg = '密码错误';
					break;
				case '103':
					$msg = '查询过快（建议每10秒查询一次）';
					break;
				case '104':
					$msg = '系统忙（因平台侧原因，暂时无法处理提交的短信）';
					break;
				case '105':
					$msg = '敏感短信（短信内容包含敏感词）';
					break;
				case '106':
					$msg = '消息长度错误（>536或<=0）';
					break;
				case '107':
					$msg = '包含错误的手机号码';
					break;
				case '108':
					$msg = '手机号码个数错误（群发>50000或<=0）';
					break;
				case '109':
					$msg = '无发送额度（该用户可用短信数已使用完）';
					break;
		        case '110':
					$msg = '不在发送时间内(验证码通知7*24小时发送)';
					break;
				case '111':
					$msg = '超出该账户当月发送额度限制';
					break;
				case '112':
					$msg = '无此产品，用户没有订购该产品';
					break;
				case '113':
					$msg = 'extno格式错误（非数字或者长度不对）';
					break;
				case '115':
					$msg = '自动审核驳回';
					break;
				case '116':
					$msg = '签名不合法，未带签名（用户必须带签名的前提下）';
					break;
		        case '117':
					$msg = 'IP地址认证错误,请求调用的IP地址不是系统登记的IP地址';
					break;
				case '118':
					$msg = '用户没有相应的发送权限';
					break;
				case '119':
					$msg = '用户已过期';
					break;
				case '120':
					$msg = '内容不在白名单中';
					break;
			}
		}				
		return $msg;
	}
}
?>