<?php
namespace COM\BakRec;

/*
* 数据库备份与恢复
*/
class BakRec
{
    private $model;
    private $path;              // 备份文件目录
    private $dir_sep = '/';     // 路径符
    private $isCompress = 0;    // 是否开启gzip压缩

    //构造函数
    public function __construct()
    {
        $this->model = M();
        $this->path = C('BACKUP_PATH');
        $this->dir_sep = C('BACKUP_PATH_SEP');
        $this->isCompress = C('IS_COMPRESS');
    }

    /* -
     * +------------------------------------------------------------------------
     * * @ 备份数据 { 备份每张表、视图及数据 }
     * +------------------------------------------------------------------------
     * * @ $tables 需要备份的表数组
     * +------------------------------------------------------------------------
     */
    public function backup($backname,$tables=array()) {

        if(!file_exists($this->path)){
            if(!mkdir($this->path,0777,true)){
                return "无法创建备份目录 {$this->path}";
            }
        }
        if(empty($tables)){
            $tables = $this->getTables();
        }
        if(empty($tables)){
            return '没有需要备份的数据表!';
        }

        srand((double)microtime() * 1000000); 
        $encrypt_key = rand(0, 32000);

        $fileName = $this->trimPath($this->path . md5(date('YmdHis').$encrypt_key) . 'B' . $backname. '.xsdb');

		$zipstream = new \COM\ZipStream\ZipStream($fileName);
		
        $filesize=10;
        $message ="";
        
        $sqlfile='';
        $indexfile='';
        $fileId=0;
        $sqlfile.=('/* This file is created by MySQLReback ' . date('Y-m-d H:i:s') . ' */');
        $indexfile.=('/* This file is created by MySQLReback ' . date('Y-m-d H:i:s') . ' */');
        
		foreach ($tables as $i => $table) {
			/******写入进程文件********/
			if(IS_CLI){
				file_put_contents(LOG_PATH.'cli.log', "备份||".$table.PHP_EOL, FILE_APPEND);
			}
			/**************************/
			if($table == 'session') continue;
            $table = $this->backquote($table);                                  //为表名增加 ``
            $tableRs = $this->model->query("SHOW CREATE TABLE {$table}");       //获取当前表的创建语句
            if (!empty($tableRs[0]["create view"])) {
                $sqlfile.=("\r\n DROP VIEW IF EXISTS {$table};\r\n/* MySQLReback Separation */\r\n " . $tableRs[0]["create view"] . ";\r\n/* MySQLReback Separation */");
            }
            if (!empty($tableRs[0]["create table"])) {
                $sqlfile.=("\r\n DROP TABLE IF EXISTS {$table};\r\n/* MySQLReback Separation */\r\n " . $tableRs[0]["create table"] . ";\r\n/* MySQLReback Separation */");
                
                $columns=$this->model->query("SHOW index FROM {$table}");
                if(count($columns)>=2){
                	$sqlfile.="\r\n alter table {$table}";
                	$indexfile.="\r\n alter table {$table}";
                	$keyname = '';
                	$idxfield  = '';
	                foreach($columns as $kk => $column)
	                {
	                	if($column['key_name']!='PRIMARY'){
		                	$idxfield .= "`".$column['column_name'].'`,';
		                	if(isset($columns[$kk+1]) and $column['key_name'] == $columns[$kk+1]['key_name']){
		                		continue;
		                	}
		                	if($idxfield != ''){
		                		//删除索引
			                	$sqlfile.=(" DROP index `".$column['key_name']."`,");
			                	//添加索引
		                		$indexfile.=(" add ".($column['non_unique']==0?"UNIQUE":"")." index `".$column['key_name']."`(".substr($idxfield,0,-1)."".(isset($column['sub_part'])?"(".$column['sub_part'].")":"").") USING ".$column['index_type'].",");
		                		$idxfield= '';
		                	}
	                	}
	                	$keyname = $column['key_name'];
	                }
	                $sqlfile=substr($sqlfile,0,-1);
	                $sqlfile.=";\r\n/* MySQLReback Separation */";
	                $indexfile=substr($indexfile,0,-1);
	                $indexfile.=";\r\n/* MySQLReback Separation */";
                }
			}
			//触发器
			//$trigger = M()->query("show triggers like '".trim($table,'`')."'");
			//if(!empty($trigger)){
			//	foreach($trigger as $tr){
			//		$indexfile.= "\r\n CREATE TRIGGER `".$tr['Trigger']."` ".$tr['Timing']." ".$tr['Event']." ON ".$table." FOR EACH ROW ".$tr['Statement'];
			//		$indexfile.=";\r\n/* MySQLReback Separation */";
			//	}
			//}
			// select into outfile
			if(IS_WIN){
			    $outfile = $this->path.'table.txt';
            }else{
                $outfile = tempnam(sys_get_temp_dir(), 'table');
            }
			if(file_exists($outfile))unlink($outfile);
			M()->execute("SELECT * INTO OUTFILE '".$outfile."' FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"' LINES TERMINATED BY '\n'  FROM ".$table." ;");
			$fd       = fopen($outfile, "rb");
			$zipstream->addFile($fd, urlencode($table).'.txt');
			fclose($fd);
            if(file_exists($outfile))unlink($outfile);
        }
        if($sqlfile!='')
        {
        	$zipstream -> addFile($sqlfile, "data".$fileId.'.sql',$fileName);
        }
        if($indexfile!='')
        {
        	$zipstream -> addFile($indexfile, "data".($fileId+1).'.sql',$fileName);
        }
        //备份奖金构成文件
        $dataname = APP_PATH.'DmsAdmin/PrizeData/';
        $zipstream->addDirectoryContent($dataname,'PrizeData');
        $zipstream->finalize();
		//关闭数据库
		//$db->commit();
		//$db->close();
		return "";
    }
    /* -
     * +------------------------------------------------------------------------
     * * @ 还原数据
     * +------------------------------------------------------------------------
     * * @ $fileName 文件名
     * +------------------------------------------------------------------------
     */
 
    public function recoverFile($fileName) {
        $message='';
        $fileName = $this->trimPath($this->path . $fileName);
        if (is_file($fileName)) {
            $ext = strrchr($fileName, '.');
            $filecontent = "";
            if ($ext == '.sql') {
            	M()->execute("SET FOREIGN_KEY_CHECKS = 0; ");//去掉外键约束
            	M()->startTrans();
                $file = fopen($fileName,"r");
                //$filecontent = file_get_contents($fileName);
                while(! feof($file)){
                    $fget = fgets($file);
                    if(trim($fget) !='/* MySQLReback Separation */' && trim($fget) !=';/* MySQLReback Separation */'){
                        $filecontent .= $fget;
                    }else{
                        $sql = trim($filecontent);
                        if (!empty($sql)) {
                            $mes = M()->execute($sql);
                            if (false === $mes) {           //如果 null 写入失败，换成 ''
                                $table_change = array('null' => '\'\'');
                                $sql = strtr($sql, $table_change);
                                $mes = M()->execute($sql);
                            }
                            if (false === $mes) {                                     
                                $message .='备份文件代码遇到错误!';
                            }
                        }
                        $filecontent ="";
                    }
                    
                }
                fclose($file);
                M()->execute("SET FOREIGN_KEY_CHECKS = 1; ");//恢复外键约束
                M()->commit();
            } elseif($ext == '.zip' || $ext == '.xsdb') {
				M()->execute("SET FOREIGN_KEY_CHECKS = 0;");//去掉外键约束
				$zip=new \ZipArchive();
				if($zip->open($fileName)===TRUE){
					$this->remove_directory(APP_PATH."DmsAdmin/PrizeData/",false);//删除prizedata文件夹下内容
   					//解压缩到文件夹
                    $tmpname = $_SERVER['HTTP_HOST'];
   					if(IS_WIN){
                        $tmpdir = dirname($fileName)."/".$tmpname."/";
                    }else{
                        $tmpdir = sys_get_temp_dir()."/".$tmpname."/";
                    }
   				   	$this->remove_directory($tmpdir);
					$zip->extractTo($tmpdir);
					//执行data0.sql 删除创建表 不带索引
					$this->runsql(file_get_contents($tmpdir.'data0.sql'));
					//load data 
					$dirlist = scandir($tmpdir);
					foreach($dirlist as $file){
						/******写入进程文件********/
						if(IS_CLI){
							file_put_contents(LOG_PATH.'cli.log', "还原||".$file.PHP_EOL, FILE_APPEND);
						}
						/**************************/
						if ($file != ".." && $file != "." && $file != "data0.sql" && $file != "data1.sql" && $file != "PrizeData"){
							M()->execute("LOAD DATA  INFILE '".$tmpdir.$file."' INTO TABLE ".urldecode(substr($file,0,strlen($file)-4))." FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '\"'  LINES TERMINATED BY '\n' ;");
						}
						if($file == "PrizeData"){//恢复奖金构成文件
							$this->xCopy($tmpdir."PrizeData",APP_PATH."DmsAdmin/PrizeData/",1);
						}
					}
					//执行data1.sql 添加索引
					$this->runsql(file_get_contents($tmpdir.'data1.sql'));
					$zip->close();
					$this->remove_directory($tmpdir);
				}
				M()->execute("SET FOREIGN_KEY_CHECKS = 1; ");//恢复外键约束
            } else {
                $message .='无法识别的文件格式!';
            }
        } else {
            $message .='文件不存在!';
        }
        //更新tokenid的数据
        $tokenid=create_unique();
		file_put_contents(THINK_PATH.'config/tokenid.php', strip_whitespace("<?php\nreturn " . var_export($tokenid, true) . ";\n?>"));
        if(isset($_SESSION[C('RBAC_ADMIN_AUTH_KEY')])){
	        //当前操作的管理员的tokenid
			$_SESSION[C('RBAC_ADMIN_TOKEN_KEY')]=$tokenid;
        }
        //更新管理员权限
        $admins=M("admin")->field("id")->select();
        foreach($admins as $admin){
        	\ORG\Util\RBAC::writeAccessList($admin['id']);
        }
        return $message;
    }
    private function setPath($fileName) {
        $dirs = explode($this->dir_sep, dirname($fileName));
        $tmp = '';
        foreach ($dirs as $dir) {
            $tmp .= $dir . $this->dir_sep;
            if (!file_exists($tmp) && !@mkdir($tmp, 0777))
                return $tmp;
        }
        return true;
    }
    /* -
     * +------------------------------------------------------------------------
     * * @ 给字符串添加 ` `
     * +------------------------------------------------------------------------
     * * @ $str 字符串
     * +------------------------------------------------------------------------
     * * @ 返回 `$str`
     * +------------------------------------------------------------------------
     */
 
    private function backquote($str) {
        return "`{$str}`";
    }
    public function trimPath($path) {
        return str_replace(array('/', '\\', '//', '\\\\'), $this->dir_sep, $path);
    }
     
    /* -
     * +------------------------------------------------------------------------
     * * @ 获取数据库的所有表
     * +------------------------------------------------------------------------
     * * @ $dbName  数据库名称
     * +------------------------------------------------------------------------
     */
 
    public function getTables($dbName = '') {
        if (!empty($dbName)) {
            $sql = 'SHOW TABLES FROM ' . $dbName;
        } else {
            $sql = 'SHOW TABLES ';
        }
        $result = M()->query($sql);
        $info = array();
        foreach ($result as $key => $val) {
            $info[$key] = current($val);
        }
        return $info;
    }
    public function remove_directory($dir,$me=true){
		if(is_dir($dir) && $handle=opendir("$dir")){
			while(false!==($item=readdir($handle))) {
				if($item!="." && $item!=".."){
					if(is_dir("$dir/$item")){
						$this->remove_directory("$dir/$item",true);
					}else{
						unlink("$dir/$item");
					}
				}
			} 
			closedir($handle);
			if($me)rmdir($dir);
		}
		return '';
	}
	public function runsql($data){
		$sqldatas=explode("\r\n",$data);
		$filecontent = "";
		foreach($sqldatas as &$sqldata)
		{
            if(trim($sqldata) !='/* MySQLReback Separation */' && trim($sqldata) !=';/* MySQLReback Separation */'){
                $filecontent .= $sqldata;
            }else{
                $sql = trim($filecontent);
                if (!empty($sql)) {
                    $mes = M()->execute($sql);
                    if (false === $mes) {           //如果 null 写入失败，换成 ''
                        $table_change = array('null' => '\'\'');
                        $sql = strtr($sql, $table_change);
                        $mes = M()->execute($sql);
                    }
                    if (false === $mes) {                                     
                        $message ='备份文件代码遇到错误!';
                    }
                }
                $filecontent ="";
            }
		}
	}
	
	public function xCopy($source, $destination, $child){
	    if (!file_exists($destination))
	    {
			if (!mkdir(rtrim($destination, '/'), 0777))
	        {
		        return false;
	        }
	        @chmod($destination, 0777);
	     }
		if(!is_dir($source)){ 
			return false;
		}
		if(!is_dir($destination)){
			mkdir($destination,0777);  
		}
		$handle=dir($source);
		while($entry=$handle->read()){
			if(($entry!=".")&&($entry!="..")){
				if(is_dir($source."/".$entry)){
					if($child)
					$this->xCopy($source."/".$entry,$destination."/".$entry,$child);
				}
				else{
					copy($source."/".$entry,$destination."/".$entry);
				}
			}
		}
		return true;
	}



}
?>