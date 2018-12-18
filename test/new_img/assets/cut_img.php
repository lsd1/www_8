<?php
/**
 * Created by PhpStorm.
 * User: apple
 * Date: 2018/11/28
 * Time: 2:04
 */

function cutImg($path, $json){
    $source = imagecreatefrompng($path . '/' . $json->file);
    imagesavealpha($source,true);//这里很重要 意思是不要丢了$sourePic图像的透明色;
    $newDir = 'D:\new_img_2\\' . $json->file;
    mkdir($newDir, 0777, true);
    foreach ($json->frames as $k => $v){
        $targetName = $newDir . '/' . $k . '.png';
        $w = $v->w;
        $h = $v->h;
        $sourceW = $v->sourceW;
        $sourceH = $v->sourceH;
        $offX = $v->offX;
        $offY = $v->offY;
        $x = $v->x;
        $y = $v->y;
        $target = imagecreatetruecolor($sourceW, $sourceH);

        //填充透明底色
        $bg = imagecolorallocatealpha($target,0,0,0,127);
        imagefill($target,0,0, $bg);
        imagecolortransparent($target, $bg);

        imagealphablending($target,false);//这里很重要,意思是不合并颜色,直接用$img图像颜色替换,包括透明色;
        imagesavealpha($target,true);//这里很重要,意思是不要丢了$thumb图像的透明色;
        imagecopy($target, $source, $offX, $offY, $x, $y, $w, $h);
        // 保存
        imagepng($target, $targetName);
        imagedestroy($target);
    }
    imagedestroy($source);
}

function redDir($path){
    $dirHaddle = opendir($path);
    while ($res = readdir($dirHaddle)){
        $balckList = ['.','..','all','.idea','miss','error','other','wutong.png.tcn','auction.png.tcn','minerV1.png.tcn','transaction.png.tcn'];
        if(in_array($res, $balckList)) continue;
        $target = $path.'\\'.$res;
        if(is_dir($target)){
            redDir($target);
        }else{
            $fileExt = pathinfo($res, PATHINFO_EXTENSION);
            if($fileExt == 'json'){
                $json = json_decode(file_get_contents($target),false);
                cutImg($path, $json);
            }
        }
    }
}

redDir(__DIR__);
