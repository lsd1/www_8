<?php
ignore_user_abort(true);
do {
    $res = file_get_contents('http://localhost:8090/socket.io/socket.io.js');
    if(!$res){
        system('node chat');
    }
    sleep(2);
} while (true);