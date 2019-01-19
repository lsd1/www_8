<?php
$data = [];
    $union_ck = isset($_COOKIE['union_ck']) ? $_COOKIE['union_ck'] : '';
	if (! empty($union_ck))
    {
        $key = pack('H*', hash('sha256', "maiguoerueepcncecjz6833dbkdshy2cxbhsajzz0954gdjkwgarsgxjkdd3svghf"));
        $iv = chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0);
		@$str = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, base64_decode($union_ck), MCRYPT_MODE_CBC, $iv);
        //Depadding
        $slast = ord(substr($str, -1)); //pad value and pad count
        $str = substr($str, 0, strlen($str) - $slast);

        if (! empty($str))
            parse_str($str, $data);
    }
	echo json_encode($data);
?>