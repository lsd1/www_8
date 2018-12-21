<?php
namespace COM\SMS;

// +----------------------------------------------------------------------
// | 动动客短信网关发送类
//import('COM.SMS.DdkSms');
//DdkSms::send('手机号','内容');
// +----------------------------------------------------------------------

class M5cSms {
	
	//返回支付接口中文名称
	public static function getName()
	{
		return '美联软通';
	}

	//返回接口中文介绍
	public static function getMemo()
	{
		return '美联软通短信https://m.5c.com.cn/';
	}	
	//返回需要配置的项
	public static function getConfigInfo()
	{
		return array(
			array(
				'config_name'=>'name',
				'config_value'=> '美联软通',
				'name'=>'接口名称',
				'type'=>'text',
				'style'=>'width:300px',
			),
			array(
				'config_name'=>'account',
				'config_value'=> '',
				'name'=>'用户名',
				'type'=>'text',
				'style'=>'width:300px',
			),
			array(
				'config_name'=>'passwd',
				'config_value'=> '',
				'name'=>'密码',
				'type'=>'text',
				'style'=>'width:300px',
			),
			array(
				'config_name'=>'apikey',
				'config_value'=> '',
				'name'=>'密钥',
				'type'=>'text',
				'style'=>'width:300px',
			),
			array(
				'config_name'=>'sign',
				'config_value'=> '',
				'name'=>'签名',
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
								
			$pass		= md5($this->passwd);
			$apikey		= $this->apikey;
			$content	= urlencode(iconv("UTF-8","GBK",$this->sign.$content));
			$url		= "http://m.5c.com.cn/api/send/index.php?username={$this->account}&password_md5={$pass}&apikey={$apikey}&mobile={$mobiles}&content={$content}";
			//请求
			$res		= self::getResult($url);	
			//结果
			if( strpos($res,':') !== false ){
				$res 	= explode(':',$res);
				$rst	= $res[0];
				if(strtolower($rst)=='error'){
					$error	= $this->resolve_error($res[1]);
					$result = array('status'=>false,'info'=>$error);
				}else{
					$result = array('status'=>true,'info'=>'发送成功');
				}	
				return $result;						
			}
		}
	}
	
	
	/*
	* 短信余额查看
	*/
	
	public function lookSurplus()
	{
		$user		= $this->account;
		$pwd		= md5($this->passwd);
		$apikey  	= $this->apikey;
				
		if($user==''){return '-1';}
						
		$url		= "http://m.5c.com.cn/api/query/index.php?username={$user}&password_md5={$pwd}&apikey={$apikey}";						
		$result		= $this->getResult($url);
		if( strpos( $result , '/' ) !== false )
		{
			$result  = explode('/',$result);
			$result	= $result[0];//余额
		}elseif( strpos( $result , ':' ) !== false )
		{
			$result	= explode(':',$result);
			$error	= $this->resolve_error($result[1]);
			$result	= $error;//错误信息
		}
		return $result;
	}
	/*
	* 52ao获取处理结果
	*/
	private static function getResult($url)
	{
		$file_contents		= "";
		if(function_exists('file_get_contents'))
		{
			$file_contents = file_get_contents($url);
		}
		else if(function_exists('curl_init'))
		{
			$ch = curl_init();
			$timeout = 5;
			curl_setopt ($ch, CURLOPT_URL, $url);
			curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
			$file_contents = curl_exec($ch);
			curl_close($ch);
		}
		else
		{
			self::showError("系统不支持 curl 和 file_get_contents 无法发送短信!");
		}
		return $file_contents;
	}

	//错误信息
	public function resolve_error($error_code)
	{
		$msg = '未知';

		if(is_numeric($error_code)){
			return '提交失败';
		}else{

			switch($error_code)
			{
				case 'Missing username':
					$msg = '用户名为空';
					break;
				case 'Missing password':
					$msg = '密码为空';
					break;
				case 'Missing apikey':
					$msg = 'APIKEY为空';
					break;
				case 'Missing recipient':
					$msg = '收件人手机号码为空';
					break;
				case 'Missing message content':
					$msg = '短信内容为空或编码不正确';
					break;
				case 'Account is blocked':
					$msg = '帐号被禁用';
					break;
				case 'Unrecognized encoding':
					$msg = '编码未能识别';
					break;
				case 'APIKEY or password error':
					$msg = 'APIKEY或密码错误';
					break;
				case 'Unauthorized IP address':
					$msg = '未授权 IP 地址';
					break;
				case 'Account balance is insufficient':
					$msg = '余额不足';
					break;
				case 'Throughput Rate Exceeded':
					$msg = '发送频率受限';
					break;
				case 'Invalid md5 password length':
					$msg = 'MD5密码长度非32位';
					break;
			}
		}				
		return $msg;
	}
}
?>