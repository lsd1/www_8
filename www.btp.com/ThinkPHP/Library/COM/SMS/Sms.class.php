<?php
namespace COM\SMS;
//use COM\SMS\DdkSms;
//use COM\SMS\M5cSms;
	
/*
* 短信处理核心类
*/
class Sms
{

	//短信接口对象
	private $smsapi;

	//构造函数,根据参数构造特定的支付类
	public function __construct($smsname = NULL,$isaudio='0',$_content = '',$_addressee = array(), $send_username='')
    {

    	//存在短信网关
    	if( $smsname && Sms::checkSmsName($smsname) )
		{
        	//实例化支付类
        	$sms  = '\COM\SMS\\'.$smsname;
        	$this->smsapi=new $sms;
			//获取接口
			$sms_attr = M('sms_interface')->where(array('sms_type'=>$smsname,'isaudio'=>$isaudio,'state'=>1))->getField('sms_attr');
			if($sms_attr){
				$attr = unserialize($sms_attr);
				foreach($attr as $key => $val){
					$this->smsapi->$key = $val;
				}
			}else{
				$this->printMessage("没有在使用的".$sms::getName()."短信接口!");die;
			}
        }
        else
        {
				$this->printMessage("请指定要使用的短信网关名称!");die;
		}
    }    	     

    /*
	* 短信余额查看
	*/
	public function surplus()
	{
		return $this->smsapi->lookSurplus();
	}	
	
    /*
	* 短信余额查看
	*/
	public static function remainder($sms)
	{
		$sms_attr = M('sms_interface')->where(array('sms_type'=>$sms))->order('id desc')->getField('sms_attr');
		if($sms_attr){
			$attr = unserialize($sms_attr);
			$sms = '\COM\SMS\\'.$sms;
			$smsobj = new $sms;
			foreach($attr as $key => $val){
				$smsobj->$key = $val;
			}
			return $smsobj->lookSurplus();
		}
		return '';
	}

	/*
	* 短信发送
	*/
	public function send($mobiles,$content,$type=null,$userid='',$autoset=true)
	{
		//插入短信发送记录
		$smsresult = M('短信')->where(array('类型'=>$type))->find();
		if($smsresult){
			$smsid = $smsresult['id'];
			M('短信')->where("id={$smsid}")->setField('发送时间',systemTime());
		}else{
			$data = array(
				'类型'=>$type,
				'发送时间'=>systemTime(),
			);
			$smsid = M('短信')->add($data);
		}
		$mobiles			= trim($mobiles);
		$content			= rawurlencode(trim($content));
		$data=array(
				'd_id'=>$smsid,	
				'接收号码'=>$mobiles,
				'接收人'=>$userid,
				'内容'=>rawurldecode($content),
				'发送时间'=>0,
				'状态'=>0
			);
		$dtail_id=M('短信详细')->add($data);
		//发送短信
		if($autoset && $smsid && $dtail_id){
			//发送即发
			$result=$this->autoSend($smsid,$dtail_id);
			return $result;
		}
	}
	//自动发送
	public function autoSend($smsid,$dtail_id){	
		
		$successnum		= 0;
		$errornum		= 0;		
		$data			= array();		
		$result			= array('status'=>false,'info'=>'发送失败');
				
		$smslist=M('短信详细')->where(array('id'=>$dtail_id,'d_id'=>$smsid,'状态'=>0))->find();
		if($smslist){
			//判断当前号码五分钟内是否发送过
			$lasttime=systemTime()-2*60;
			$lastsms=M("短信详细")->where(array('接收号码'=>$smslist['接收号码'],"发送时间"=>array("egt",$lasttime)))->find();
			if($lastsms){
				$errornum++;
				$data['失败原因']	= '发送间隔过近';
			}else{
				
				$mobiles	= $smslist['接收号码'];
				$content	= $smslist['内容'];	
				//号码检查	
				if(strpos($mobiles,',')!==false){
					$mobiles = explode(',',mobiles);
					foreach($mobiles as $val){
						if(!preg_match("/^(86){0,1}1\d{10}$/",$val)){
							$errornum++;
							$data['失败原因']	= '手机号码错误';
							break;
						}
					}
					$mobiles = implode(',',mobiles);	
				}elseif(!preg_match("/^(86){0,1}1\d{10}$/",$mobiles)){
					$errornum++;
					$data['失败原因']	= '手机号码错误';
				}
				if($errornum==0){																								
					$result	= $this->smsapi->send($mobiles,$content);																
					if(isset($result['status']) && $result['status']=='true'){
						$data['发送时间']	= systemTime();
						$data['状态']		= 1;
						$successnum++;
					}else{
						$data['失败原因']	= $result['info'];
						$data['发送时间']	= systemTime();
						$data['状态']		= 2;
						$errornum++;
					}																			
				}

			}
		}
		M('短信详细')->where(array('id'=>$smslist['id']))->save($data);			
		M('短信')->where(array('id'=>$smsid))->save(array('已发数量'=>array('exp',"已发数量+{$successnum}"),'失败数量'=>array('exp',"失败数量+{$errornum}")));
		return $result;
	}


	//获取短信接口的中文名称
	public function getSmsName()
	{
		return $this->smsapi->getName();
	}

	//支付接口的信息
	public static function getSmsInfo($smsname)
	{
		//取出支付类中的名称和键名
		$result				= array();
		$smsname			= '\COM\SMS\\'.$smsname;
		$result["name"]		= $smsname::getName();
		$result["memo"]		= $smsname::getMemo();
		$result["config"]	= $smsname::getConfigInfo();		
		return $result;
	}

	

	//检查短信接口是否已经安装
	public static function checkSmsInstall($smsname)
	{
		$where['sms_type']	= $smsname;
		if( M('sms_interface')->where($where)->find() )	
		{
			return 1;
		}
		return 0;
	}
	

	//获取已安装的短信接口
	public static function getSmsList()
	{
		$payList		= Sms::getSmsClassList();
		$payListInfo	= array();

		$Model			= M();
		foreach( $payList as $key=>$pay)
		{
			if( Sms::checkSmsInstall($Model,$pay) == 1 )
			{
				$payListInfo[$pay]	= Sms::getSmsInfo($pay);
			}
		}
		return $payListInfo;
	}
	
	//获取可用的支付接口类
	public static function getSmsClassList()
	{
		$file_path	= ROOT_PATH.'ThinkPHP/Library/COM/SMS';

		$handle		= opendir($file_path);
		$file_list	= array();

		//取出有效的支付类
		while (($_file = readdir($handle)) !== false)
		{
			$_ignore = array('.' , '..' , '.svn' , 'Sms.class.php' ,'Sms.class---.php');
			if( in_array($_file,$_ignore) )
			{
				continue;
			}
			//获取类名
			$_class_name	= explode('.',$_file);
			$class_name		= $_class_name[0];
			$file_list[]	= $class_name;
		}
		return $file_list;
	}

	//判断是否为合法的短信类型
	public static function checkSmsName($payname)
	{
		if( in_array($payname,Sms::getSmsClassList()) )
		{
			return true;
		}
		else
		{
			return false;
		}
	}
    
	
	private function printMessage($msg)
	{
		if( $msg == '9999' )
		{
			echo 'RespCode=9999|JumpURL=';exit;
		}
		elseif( $msg == '0000' )
		{
			echo 'RespCode=0000|JumpURL=';exit;
		}
		else
		{
			echo '<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head><body>'.$msg.'</body></html>';
		}
	}
}
?>
