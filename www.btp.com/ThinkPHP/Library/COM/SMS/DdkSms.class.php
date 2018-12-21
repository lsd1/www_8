<?php
namespace COM\SMS;

// +----------------------------------------------------------------------
// | 动动客短信网关发送类
//import('COM.SMS.DdkSms');
//DdkSms::send('手机号','内容');
// +----------------------------------------------------------------------

class DdkSms {
	
	//返回支付接口中文名称
	public static function getName()
	{
		return '动动客';
	}

	//返回接口中文介绍
	public static function getMemo()
	{
		return '动动客短信http://www.10690221.com/ </a>';
	}
	
	//返回需要配置的项
	public static function getConfigInfo()
	{
		return array(
			array(
				'config_name'=>'name',
				'config_value'=> '动动客',
				'name'=>'接口名称',
				'type'=>'text',
				'style'=>'width:200px',
			),
			array(
				'config_name'=>'account',
				'config_value'=> '',
				'name'=>'用户账号',
				'type'=>'text',
				'style'=>'width:200px',
			),
			array(
				'config_name'=>'passwd',
				'config_value'=> '',
				'name'=>'用户密码',
				'type'=>'text',
				'style'=>'width:200px',
			),
			array(
				'config_name'=>'comcode',
				'config_value'=> '',
				'name'=>'公司代码',
				'type'=>'text',
				'style'=>'width:200px',
			)
		);
	}	
	
	
	
	/*
	* 短信发送处理,根据网关类型
	*/
	public function send($mobiles,$content)
	{
		if($this->account && $this->passwd){
			
			$uid		= $this->account;
			$pwd		= strtolower(md5( $this->comcode.$this->passwd));
			$url		= "http://210.5.158.31:9011/hy/?uid={$uid}&auth={$pwd}&mobile={$mobiles}&msg={$content}&expid=0&encode=utf-8";
			
			$result 	= self::getResult($url);
			if( $result<0)
			{	
				$error	= $this->print_sms($result);
				$result = array('status'=>false,'info'=>$error);
			}else{
				$result = array('status'=>true,'info'=>'发送成功');
			}
			return 	$result;
		}
	}
	/*
	* 短信余额查看
	*/
	public function lookSurplus()
	{
		$user		= $this->account;
		$pwd		= md5($this->passwd);
				
		if($user == ''){return '-1';}
		
		$url		=  "http://210.5.158.31:9011/hy/?uid={$user}&auth={$pwd}";					
		$result		= $this->getResult($url);
		if( $result<0)
		{	
			$error	= $this->print_sms($result);
			$result	= $error;
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

    function print_sms($state)
    {
        //$sms_state=array("-1","-2","-3","-4","-5","-6","-7","-8","-9","-10","-11","-12","-13","-14");
        $sms_name=array(
         "-1"=>"签权失败",
         "-2"=>"未检索到被叫号码",
         "-3"=>"被叫号码过多",
         "-4"=>"内容未签名",
         "-5"=>"内容过长",
         "-6"=>"余额不足",
         "-7"=>"暂停发送",
         "-8"=>"保留",
         "-9"=>"定时发送时间格式错误",
         "-10"=>"下发内容为空",
         "-11"=>"账户无效",
         "-12"=>"Ip地址非法",
         "-13"=>"操作频率快",
         "-14"=>"操作失败拓展码无效(1-999)"
        );
        if (isset($sms_name[$state])) {
               return ($sms_name[$state]);
        } else {
             return "";
        }
    }

	private static function showError($content)
	{
		$msg = '<!DOCTYPE html><html><head><meta charset="utf-8" /></head>';
		$msg .= "<div style='padding:10px;border:1px solid red;color:red'>{$content}</div>";
		echo $msg;
		exit;
	}

 	function __destruct() 
	{

 	}

}
?>