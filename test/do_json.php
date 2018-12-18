<?php
/**
 * Created by PhpStorm.
 * User: dell
 * Date: 2018/11/26
 * Time: 21:49
 */

$path =  __DIR__;
global $miss_arr;
function redDir($path){
    $dirHaddle = opendir($path);
    while ($res = readdir($dirHaddle)){
        if($res == '.' || $res == '..' || $res == 'all' || $res == '.idea' ||  $res == 'miss') continue;
        $target = $path.'\\'.$res;
        if(is_dir($target)){
            redDir($target);
        }else{
            $fileExt = pathinfo($res, PATHINFO_EXTENSION);
            if($fileExt == 'json'){
                $json = json_decode(file_get_contents($target),false);
                foreach ($json->frames as $k => $v){
                    $imgExt = substr($k,-3, 3);
                    if($imgExt == '_cn'){
                        $tcnExt = './all/' . str_replace( $imgExt, '_tcn', $k) . '.png';
                        $tcnExt = './all/' . str_replace( $imgExt, '_cn', $k) . '.png';

                        if(is_file($target)){

                        }else{

                        }

                        if(is_file($tcnExt)){
                            //var_dump($tcnExt);
                        }else{
                            var_dump($target.'/'.$k);
                            $missImg = './miss/' . str_replace( $imgExt, '_cn', $k) . '.png';
                            copy($target, $missImg);
                            $GLOBALS['miss_arr'][] = $tcnExt;
                        }
                    }
                }
            }
        }
    }
}
redDir($path);
//var_dump($GLOBALS['miss_arr']);die;
file_put_contents('miss.txt', var_export($miss_arr, true));

