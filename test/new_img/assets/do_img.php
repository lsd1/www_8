<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2018/11/26
 * Time: 21:49
 */
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
            if($fileExt == 'png'){
                $langExt = substr($res,-7, 3);
                if($langExt == '_cn'){
                    $tcn_img = str_replace('_cn', '_tcn', $res);
                    $ecn_img = str_replace('_cn', '_en', $res);
                    if(is_file('all\\' . $tcn_img)){
                        if(isNearly('all\\' . $tcn_img, $target)){
                            copy('all\\' . $tcn_img, $path . '.tcn\\' . $tcn_img);
                            copy( $target, $path . '.tcn\\' . $res);
                            copy($path . '\\' . $ecn_img, $path . '.tcn\\' . $ecn_img);
                        }else{
                            copy('all\\' . $tcn_img ,'error\\' . $tcn_img);
                            copy($target ,'error\\' . $res);
                        }
                    }else{
                        copy($target,'miss\\' . $res);
                    }
                }
            }
        }
    }
}

//判断图片是否相同
function isNearly($img1, $img2){
    $imgInfo1 = getimagesize($img1);
    $imgInfo2 = getimagesize($img2);
    if(abs($imgInfo1[0] - $imgInfo2[0]) <= 10 &&  abs($imgInfo1[1] - $imgInfo2[1]) <= 10){
        return true;
    }else{
        return false;
    }
}
redDir(__DIR__);

