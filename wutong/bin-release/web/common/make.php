<?php
function readDirs($path) {

	$dir_handle = openDir($path);
	while(false !== $file=readDir($dir_handle)) {
		if ($file=='.' || $file=='..') continue;
		//判断当前是否为目录
		if(is_dir($path . '/' . $file)) {
			//是目录
			readDirs($path . '/' . $file);
		}else{
			//输出该文件
			$blackList = ['index.php','index.html','make.php', date('Y-m-d') . '.manifest'];
			if(!in_array($file, $blackList)){
				$filePath = $path . '/' . $file . PHP_EOL;		
				$filePath = str_replace('//', '/', $filePath);
				file_put_contents(date('Y-m-d') . '.manifest', $filePath, FILE_APPEND);
			}
		}

	}

	closeDir($dir_handle);
}

$title = 'CACHE MANIFEST' . PHP_EOL . '#' . date('Y-m-d') . PHP_EOL . 'CACHE:' . PHP_EOL;
file_put_contents(date('Y-m-d').'.manifest', $title, FILE_APPEND);

$path = './';
readDirs($path);

$tail = 'NETWORK:' . PHP_EOL . '*' . PHP_EOL . 'FALLBACK:';
file_put_contents(date('Y-m-d') . '.manifest', $tail, FILE_APPEND);
?>