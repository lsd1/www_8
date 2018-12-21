<?php
namespace COM\RunTime;

class RunTimeClear
{
	static function clear()
	{
		self::deldir(CACHE_PATH);
		self::deldir(DATA_PATH);
		self::delFile(RUNTIME_PATH.'common~runtime.php');
	}

	static function delFile($filename){
		if(!is_file($filename)) return;
		unlink ($filename );
	}

	static function deldir($dir) {
        if(!is_dir($dir))
        {
            return;
        }
        //先删除目录下的文件：
        $dh=opendir($dir);
        while ($file=readdir($dh)) {
		if($file!="." && $file!="..") {
		  $fullpath=$dir."/".$file;
		  if(!is_dir($fullpath)) {
			  unlink($fullpath);
		  } else {
			  self::deldir($fullpath);
		  }
		}
	  }
	  closedir($dh);
	  //删除当前文件夹：
	  if(rmdir($dir)) {
		return true;
	  } else {
		return false;
	  }
	}
}
?>