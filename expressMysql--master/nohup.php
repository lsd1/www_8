<?php
/**
 * Created by PhpStorm.
 * User: mge
 * Date: 2019/1/21
 * Time: 18:44
 */
do{
    $res = file_get_contents('http://192.168.1.238:666/socket.io/socket.io.js');
    if(!$res){
        system('npm start');
    }
   sleep(5);
}while(true);
