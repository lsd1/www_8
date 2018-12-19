import { message } from 'antd';
import { routerRedux } from 'dva/router';
import cookie from 'js-cookie';
import store from '@/main';
import axios from 'axios';
import qs from 'qs';

// 创建axios实例
axios.create({
    baseURL: process.env.BASE_API, // node环境的不同，对应不同的baseURL
    timeout: 5000, // 请求的超时时间
    //设置默认请求头，使post请求发送的是formdata格式数据// axios的header默认的Content-Type好像是'application/json;charset=UTF-8',我的项目都是用json格式传输，如果需要更改的话，可以用这种方式修改
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    },
    withCredentials: true // 允许携带cookie
});
axios.interceptors.request.use(config => { // 这里的config包含每次请求的内容
    // 判断localStorage中是否存在api_token

    //  存在将api_token写入 request header
    config.headers['x-auth-token'] = `${localStorage.getItem('TOKEN')}`;
    config.headers['Accept-Language'] = cookie.get('lang') || 'en-US';

    return config;
}, err => {
    return Promise.reject(err);
});

axios.interceptors.response.use(response => {
    var token = response.headers['x-auth-token'];

    if (token != null && token != '') {

        localStorage.setItem('TOKEN', token);
    }
   
    if (response.data.code == '4000' || response.data.code == '3000') {
        message.destroy();
        const { dispatch } = store;
        //暂时隐藏
        dispatch({
            type: 'user/loginOut'
        });
        message.error('登录过期，请重新登录',2).then(()=>{
            window.location.href=`${location.protocol}//${location.host}/${cookie.get('lang')}/login`;
        });
        return false;
    }
    return Object.assign({ body: response.data }, response);
}, error => {
    return Promise.resolve(error.response);
});

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。'
};
function checkStatus(response) {
    if (response&&response.status >= 200 && response.status < 300) {
        if(response.data && response.data.code == 500) {
           message.error(response.data.message);
         }
        return response.data;
    }
    const errortext = codeMessage[response.status] || response.statusText;
    const error = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
}

// 请求方式的配置
export default {
     post(url, data) { //  post
      return axios({
                method: 'post',
                url,
                data: qs.stringify(data,{ arrayFormat: 'brackets' })
            }).then(
                (response) => {

                    return checkStatus(response);
                }
            ).catch(err=>{
                console.log(err);
            });
        },
        get(url, params) { // get

            return axios({
                method: 'get',
                url,
                params // get 请求时带的参数
            }).then(
                (response) => {
                    return checkStatus(response);
                }
            ).catch(err=>{
                console.log(err);
            });
        }
};
