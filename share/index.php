<?php
//抑制所有错误信息
error_reporting(0);

$api_domain = 'http://testapi.maiguoer.com/';
//$api_domain = 'http://mge.localhost/';

$param = getParam();

/*if (empty($param))
    exit;*/

$apiPath = '';

if (! isset($_COOKIE['skin']) || $_COOKIE['skin'] != $param['skin'])
    setSkin($param['skin']);

if (isset($_POST['apiPath']))
{
    $apiPath = $_POST['apiPath'];
    unset($_POST['apiPath']);
}

if (isset($_GET['apiPath']))
{
    $apiPath = $_GET['apiPath'];
    unset($_GET['apiPath']);
}

if (isset($_POST['uid']))
{
      $param['uid']  = $_POST['uid'];
}
if (isset($_GET['uid']))
{
      $param['uid']  = $_GET['uid'];
}


if (strcmp('v2.0/orchard/show_uid', $apiPath) == 0)
{
    echo json_encode(['code' => 0, 'lang' => $param['lang'], 'msg' => '请求成功！', 'data' => ['uid' => $param['uid']]]);
    exit;
}

if (! empty($apiPath))
{
    $param['action'] = $apiPath;

	$param = makeSignParam($param);

    if (! empty($_POST))
    {
        $param = array_merge($_POST, $param);

        echo curlPost($api_domain . $apiPath, $param);
    } else {
        $param = array_merge($_GET, $param);

        echo curlGet($api_domain . $apiPath, $param);
    }
}

function curlPost($url, $param, $timeOut = 10) {
    $curl = curl_init($url);

    curl_setopt($curl, CURLOPT_HEADER, 0); // 过滤HTTP头
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);// 显示输出结果
    curl_setopt($curl, CURLOPT_POST, true); // post传输数据
    curl_setopt($curl, CURLOPT_POSTFIELDS, $param);// post传输数据
    curl_setopt($curl, CURLOPT_TIMEOUT, $timeOut);
    $text = curl_exec($curl);
    //var_dump( curl_error($curl) );//如果执行curl过程中出现异常，可打开此开关，以便查看异常内容

    curl_close($curl);

    return $text;
}


function curlGet($url, $param, $timeOut = 10) {
    $curl = curl_init();
    $url = $url . '?' . http_build_query($param);
    //echo $url;die;
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_HEADER, 0);
    curl_setopt($curl, CURLOPT_TIMEOUT, $timeOut);
	$text = curl_exec($curl);
    //var_dump( curl_error($curl) );//如果执行curl过程中出现异常，可打开此开关，以便查看异常内容
    curl_close($curl);

    return $text;
}

function getParam() {
    $data = [];

    $mge_ck = isset($_COOKIE['mge_ck']) ? $_COOKIE['mge_ck'] : '';

    if (! empty($mge_ck))
    {
        $key = pack('H*', hash('sha256', "maiguoerueepcncecjz6833dbkdshy2cxbhsajzz0954gdjkwgarsgxjkdd3svghf"));
        $iv = chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0).chr(0);

        $str = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, base64_decode($mge_ck), MCRYPT_MODE_CBC, $iv);

        //Depadding
        $slast = ord(substr($str, -1)); //pad value and pad count
        $str = substr($str, 0, strlen($str) - $slast);

        if (! empty($str))
            parse_str($str, $data);
    }

    return $data;
}

function setSkin($skin) {
    setcookie('skin', $skin);
}

function makeSignParam($param) {
	$data['uid'] = $param['uid'] ? $param['uid'] : 9090260;
    $data['version'] = $param['version'] ? $param['version'] : '9.9.9';
    $data['clientType'] = $param['clientType'] ? $param['clientType'] : 1;
    $data['network'] = $param['network'] ? $param['network'] : 4;
    $data['lang'] = $param['lang'] ? $param['lang'] : 0;
    $data['timestamp'] = 1532330604;
    ksort($data);
	$token = $param['token'] ? $param['token'] : "55bd0e7523bf13480cabcf01e0b580ba";
	$action = $param['action'];
    $uuid = $data['uid'] . $data['timestamp'];

    $str = '';
    foreach ($data as $key => $val)
    {
        $str .= $key . '=' . $val . '&';
    }
    $str = substr($str, 0, -1);
    $str = $str . 'token=' . $token . 'uuid=' . $uuid . 'action=' . $action;
	$data['token'] = $token;
	$data['action'] = $action;
    $data['uuid'] = $uuid;
    $data['sign'] = md5($str);
    return $data;

}