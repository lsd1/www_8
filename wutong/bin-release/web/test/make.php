<?php
global $file_contents;
//读取一个目录
function readDirs($path, $func = null, $extend = null) {
	$dir_handle = openDir($path);
	while(false !== $file=readDir($dir_handle)) {
		if ($file=='.' || $file=='..') continue;
		//判断当前是否为目录
		if(is_dir($path . '/' . $file)) {
			//是目录
			readDirs($path . '/' . $file, $func, $extend);
		}else{
		    if($func){
                $func($file, $path);
            }
		}
	}
	closeDir($dir_handle);
}

//将文件名添加到manifest文件。
function addFileName($file, $path){
    //输出该文件
    $blackList = ['index.php','index.html','make.php', date('Y-m-d') . '.manifest'];
    if(!in_array($file, $blackList)){
        $filePath = $path . '/' . $file . PHP_EOL;
        $GLOBALS['file_contents'] .= str_replace('//', '/', $filePath);
    }
}

//生成缓存文件
function makeManiFest($path){
    echo '<div style="text-align:center;color:red; font-size:2rem;margin-top:2rem;">正在生成缓存文件，请稍后...</div>';
    $GLOBALS['file_contents'] .= 'CACHE MANIFEST' . PHP_EOL . '#' . date('Y-m-d') . '-' . time() . PHP_EOL . 'CACHE:' . PHP_EOL;
    readDirs($path, 'addFileName');
    $GLOBALS['file_contents'] .= 'NETWORK:' . PHP_EOL . '*' . PHP_EOL . 'FALLBACK:';
    file_put_contents(date('Y-m-d') . '.manifest', $GLOBALS['file_contents']);
    echo '<div  style="text-align:center;color:green; font-size:2rem;margin-top:2rem;">缓存文件生成完毕！</div>';
}

//生成index，html
function makeIndex(){
    $manifest = 'manifest = "' . date('Y-m-d') . '.manifest"';
    $html = '<!DOCTYPE HTML><html '. $manifest .'><head><meta charset="utf-8"><title>Egret</title><meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" /><meta name="apple-mobile-web-app-capable" content="yes" /><meta name="full-screen" content="true" /><meta name="screen-orientation" content="portrait" /><meta name="x5-fullscreen" content="true" /><meta name="360-fullscreen" content="true" /><style> html, body { -ms-touch-action: none; background: #888888; padding: 0; border: 0; margin: 0; height: 100%; } input{ opacity: 0; width: 0; height: 0; caret-color: rgba(0, 0, 0, 0); position: absolute; top:50%; }</style></head><body><div style="margin: auto;width: 100%;height: 100%;" class="egret-player" data-entry-class="Main" data-orientation="portrait" data-scale-mode="fixedNarrow" data-frame-rate="30" data-content-width="750" data-content-height="1334" data-multi-fingered="2" data-show-paint-rect="false" data-show-fps="false" data-show-log="false" data-show-fps-style="x:0,y:0,size:10,textColor:0xffffff,bgAlpha:0.9"></div><script> var loadScript = function (list, callback) { var loaded = 0; var loadNext = function () { loadSingleScript(list[loaded], function () { loaded++; if (loaded >= list.length) { callback(); } else { loadNext(); } }) }; loadNext(); }; var loadSingleScript = function (src, callback) { var s = document.createElement(\'script\'); s.async = false; s.src = src; s.addEventListener(\'load\', function () { s.parentNode.removeChild(s); s.removeEventListener(\'load\', arguments.callee, false); callback(); }, false); document.body.appendChild(s); }; var xhr = new XMLHttpRequest(); xhr.open(\'GET\', \'./manifest.json?v=\' + Math.random(), true); xhr.addEventListener("load", function () { var manifest = JSON.parse(xhr.response); var list = manifest.initial.concat(manifest.game); loadScript(list, function () { /** * { * "renderMode":, //Engine rendering mode, "canvas" or "webgl" * "audioType": 0 //Use the audio type, 0: default, 2: web audio, 3: audio * "antialias": //Whether the anti-aliasing is enabled in WebGL mode, true: on, false: off, defaults to false * "calculateCanvasScaleFactor": //a function return canvas scale factor * } **/ egret.runEgret({ renderMode: "webgl", audioType: 0, calculateCanvasScaleFactor:function(context) { var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1; return (window.devicePixelRatio || 1) / backingStore; }}); }); }); xhr.send(null);</script><input id="inp" type="text" /></body></html>';
    file_put_contents('index.html', $html);
    $php = '<?php $data=[];$union_ck=isset($_COOKIE["union_ck"])?$_COOKIE["union_ck"]:"";if(!empty($union_ck)){$key=pack("H*",hash("sha256","maiguoerueepcncecjz6833dbkdshy2cxbhsajzz0954gdjkwgarsgxjkdd3svghf"));$iv=chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0);@$str = openssl_decrypt(base64_decode($union_ck), "AES-256-CBC", $key, OPENSSL_RAW_DATA|OPENSSL_ZERO_PADDING, $iv);$slast=ord(substr($str,-1));$str=substr($str,0,strlen($str)-$slast);if(!empty($str))parse_str($str,$data);}echo json_encode($data);?>';
    file_put_contents('index.php', $php);
}

//压缩egret核心js文件
function makeZip($path, $zipName){
    echo '<div  style="text-align:center;color:red; font-size:2rem;margin-top:20rem;">开始压缩egret核心js......</div>';
    $zipObj = new ZipArchive();
    $res = $zipObj->open($zipName, ZipArchive::CREATE); //创建一个zip
    if ($res === true)
    {  //创建成功
        readDirs($path, 'addToZip', $zipObj);
        $zipObj->close();
        echo '<div  style="text-align:center;color:green; font-size:2rem;margin-top:2rem;">压缩egret核心js成功~</div>';
    }
    else
    {
        echo '<div  style="text-align:center;color:red; font-size:2rem;margin-top:2rem;">压缩egret核心js失败~</div>';
    }
}

//往zip包添加文件
function addToZip($file, $path, $zipObj){
    $zipObj->addFile($path . '/' . $file);
}

//makeZip('js', 'egret.zip');
makeManiFest('./');
makeIndex();
?>
</html>
