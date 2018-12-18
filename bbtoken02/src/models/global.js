/*
 * @Author: Administrator
 * @Date:   2018-08-03 18:13:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-11-02 13:47:36
 */
import { getUSD, getCountry, getCode, getEmailCode, getPhoneCode, getEmailPhoneCode, getPwdCode, getLang } from '@/services/api';
import { globalData } from '@/utils/config';
import { message } from 'antd';



import { Stomp } from 'stompjs/lib/stomp.min';
import SockJS from 'sockjs-client/dist/sockjs.min';
import pathToRegexp from 'path-to-regexp';
import { isMobile } from '@/utils/utils';
import Cookies from 'js-cookie';

export default {
    namespace: 'global',
    state: {
        url: '',
        USD: 6.5,
        countryData: [],
        lang: 'zh-CN',
        config: {},
        pathName:''
    },
    subscriptions: {
        setup({ dispatch, history }) {
            // eslint-disable-line
            return history.listen(async(location) => {
                const routerList = ['/:lang', '/:lang/exchange/:name/:small'];
                const mobileList = ['/:lang/login', '/:lang/register', '/:lang/register/:agent', '/:lang/noticeInfo/:id'];
                const findIndex = routerList.findIndex((item) => pathToRegexp(item).exec(location.pathname));
                const mobileIndex = mobileList.findIndex((item) => pathToRegexp(item).exec(location.pathname));
                if (findIndex > -1) {
                    await dispatch({
                        type: 'fetchGetUSD'
                    });
                }
                if (isMobile) {
                    const html = document.getElementsByTagName('html')[0],
                        body = document.getElementsByTagName('body')[0];
                    if (mobileIndex > -1) {
                        html.classList.add('width-auto');
                        body.classList.add('width-auto');
                    } else {
                        html.classList.remove('width-auto');
                        body.classList.remove('width-auto');
                    }
                }


            });

        }
    },
    effects: {
        
        //获取语言包并写入
        * fetchGetLang({ payload, callback }, { put, call }) {
            const response = yield call(getLang, payload);
            callback && callback(response);

            yield put({ type: 'save', payload: { lang: payload.currentLocale } });
        },
        //写入路径地址
        * savePathName({ payload }, { put }) {
            sessionStorage.setItem('pathName',payload.pathName);
            yield put({ type: 'save', payload: { pathName: payload.pathName } });
        },


        //实时汇率
        * fetchGetUSD({ payload }, { put, call }) {
            const response = yield call(getUSD);
            if (response) {
                yield put({ type: 'save', payload: { USD: response.data || 6.5 } });
            }
        },

        //创建sokek连接
        * socketLink({ payload = { url: '/market/market-ws' }, callback }, { put }) {
            const socket = new SockJS(globalData.url + payload.url);
            let stompClient = Stomp.over(socket);
            stompClient.heartbeat.outgoing = 20000;  // client will send heartbeats every 20000ms
            stompClient.heartbeat.incoming = 0; 
            stompClient.debug = false;
            callback && callback(stompClient);
            yield put({ type: 'save', payload: {} });
        },
        //关闭sokek连接
        * socketClose({ payload }, { put }) {
            payload.stompClient && payload.stompClient.connected && payload.stompClient.disconnect(function() {
                console.log('断开连接');
            });
            yield put({ type: 'save', payload: {} });
        },
        //所有国家信息
        * fetchGetCountry({ payload, callback }, { put, call, select }) {
            try {
                const data = yield select(state => state.global.countryData);
                const response = data.username ? data : (yield call(getCountry)).data;
                callback && callback(response);
                yield put({ type: 'save', payload: { countryData: response } });
            } catch (err) {
                console.log(err);
            }
        },
        //动态验证码
        * fetchGetCode({ payload, callbackOk, callbackErr }, { call }) {
            const data = yield call(getCode, payload);
            (data.code === 0 ? callbackOk : callbackErr)();
        },
        //写入redux
        * add({ payload }, { put }) {
            yield put({ type: 'save', payload: {...payload } });
        },
        //邮箱验证码
        * fetchGetEmailCode({ payload }, { call }) {
            const response = yield call(getEmailCode, payload);
            if (response.code === 0) {
                message.success(response.message);
            }
        },
        //手机验证码
        * fetchGetPhoneCode({ payload }, { put, call }) {
            const response = yield call(getPhoneCode, payload);
            if (response.code === 0) {
                message.success(response.message);
            }
        },
        //手机邮箱验证码
        * fetchGetEmailPhoneCode({ payload }, { put, call }) {

            const response = yield call(getEmailPhoneCode, payload);
            if (response.code === 0) {
                message.success(response.message);
            }
        },
        //修改密码 手机验证码
        * fetchGetPwdCode({ payload }, { put, call }) {
            const response = yield call(getPwdCode, payload);
            if (response.code === 0) {
                message.success(response.message);
            }
        }

    },

    reducers: {
        save(state, action) {
            return {...state, ...action.payload };
        }
    }
};
