/*
 * @Author: Administrator
 * @Date:   2018-08-03 18:13:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-11-02 16:22:58
 */
import { getCaptcha, postLogin,postPhoneReg,postEmailReg,getUserInvite,getUserRecord,
    getUserReward,getUserSetting,saveBindEmail,saveBindPhone,saveApproveName,updatefundsPasswords
    ,updateNickName,getPayment,updateBank,saveBank,updateAlipay,saveAlipay,updateWechat,saveWechat,updateFm,saveFm,updatePassword
    ,getResetMobileCode,getResetEmailCode,postResetPassword,getMobileCode,updateResetPrice
} from "@/services/user";
import {getLogin} from "@/services/api";
import {message} from 'antd';
import { routerRedux } from 'dva/router';
import { delay } from '@/utils/utils';
import Cookies from 'js-cookie';
import '@/assets/js/lib/gt';

export default {
    namespace: 'user',
    state: {
        userInfo: {},
        userSetting:{},
        userPayment:{},
        isLogin:false,
        peopleData:{},
        RecordData:{content:[]},
        RewardData:{content:[]}
    },
    effects: { 
        //登录token
        * fetchGetLogin({ payload }, { put, call }) {
            const response=yield call(getLogin);
            let obj={};
            if(!response.data){
                Cookies.remove('userInfo');
                obj={
                    userInfo:{}
                };
            }
            yield put({ type: 'save', payload: {...obj,isLogin:response.data } });

        },
        //极验验证码获取绑定
        * fetchGetCaptcha({ callback }, { put, call }) {
            const data = yield call(getCaptcha);
            const lang={
                 'zh-CN':'zh-cn',
                 'zh-TW':'zh-tw',
                 'zh-EN':'en'
            };
            window.initGeetest({
                // 以下配置参数来自服务端 SDK
                gt: data.gt,
                challenge: data.challenge,
                offline: !data.success, //表示用户后台检测极验服务器是否宕机
                new_captcha: data.new_captcha, //用于宕机时表示是新验证码的宕机
                lang:lang[Cookies.get('lang')],
                product: "popup",
                width: "100%"
            }, (captchaObj) => {
                callback && callback(captchaObj);
            });

            yield put({ type: 'save', payload: {} });
        },
        //写入登录用户信息
        * saveUserInfo({ payload }, { put }) {
            let userInfo = Cookies.get('userInfo');
            yield put({ type: 'save', payload: { userInfo: userInfo ? JSON.parse(userInfo) : {},isLogin:!!userInfo } });
        },
        //写入登录用户信息
        * login({ payload, callback }, { put, call,select }) {
            yield delay(500);
            const data = yield call(postLogin, payload);
            if (data.code === 0) {
                //过滤注册，注册页面
                const pathName = (yield select(state => state.global.pathName)) || sessionStorage.getItem('pathName');
                
                Cookies.set('userInfo', JSON.stringify(data.data), {expires: 0.5});
                localStorage.setItem('TOKEN', data.data.token);
                 message.success('登录成功！');
                 Cookies.remove('pathName');
                yield put({ type: 'save', payload: { userInfo: data.data,isLogin:true } });
                yield put(routerRedux.push(pathName || `/${Cookies.get('lang') || 'en-US'}/exchange/${Cookies.get('exist_symbol')}`));
            } else {
                callback();
            }
        },
        //退出登录
        * loginOut({ payload, callback }, { put, call }) {
            Cookies.remove('userInfo');
            localStorage.removeItem('TOKEN');
            sessionStorage.removeItem('pathName');
            callback && callback();
            yield put({ type: 'save', payload: { userInfo: {},isLogin:false  } });
        },
        //手机号注册
        * phoneReg({ payload, callback }, { put, call }) {
            const data = yield call(postPhoneReg,payload);
            if(data.code===0){
                message.success(data.message);
                callback&&callback(data);
            }
            

        },
        //邮箱注册
        * emailReg({ payload, callback }, { put, call }) {
            const data = yield call(postEmailReg,payload);
            if(data.code===0){
                callback&&callback(data);
            }
        },
        //获取重置密码验证码 //0手机 1邮箱
        *editRestPassWord({ payload, callbackOk,callbackErr }, {  call }){
            const data = yield call(payload.mode===0?getResetMobileCode:getResetEmailCode,payload);
            if(data.code===0){
                callbackOk();
            }else{
                 callbackErr();
            }

        },
        //重置密码
        * resetPassword({ payload, callback }, { put, call }) {
            const data = yield call(postResetPassword,payload);
            if(data.code===0){
                message.success('重置成功');
                callback&&callback(data);
            }
        },

        
        //邀请人数
        * fetchGetInvite({ payload }, { put, call }) {
            const data = yield call(getUserInvite);
            yield put({ type: 'save', payload: { peopleData: data } });
        },
        //邀请记录
        * fetchGetUserRecord({ payload }, { put, call }) {
            const data = yield call(getUserRecord,payload);
            yield put({ type: 'save', payload: { RecordData: data.data} });
        },
        //返佣记录
        * fetchGetUserReward({ payload }, { put, call }) {
            const data = yield call(getUserReward,payload);
            yield put({ type: 'save', payload: { RewardData: data.data } });
        },
        //获取个人中心用户信息
        * fetchGetUserSetting({ payload }, { put, call,select }) {
            try{
                const data = yield select(state => state.user.userSetting);
                const response = data.username ? data : (yield call(getUserSetting, payload)).data;
              yield put({ type: 'save', payload: { userSetting: response } });
            }catch(err){
                console.log(err);
            }
            
        },
         //绑定用户邮箱
        *saveUserBindEmail({ payload,callback}, { call,put,select}){
           
            const data = yield call(saveBindEmail,payload);
            if(data.code===0){
             const userSetting = yield select(state => state.user.userSetting);
                message.success(data.message);
                yield put({ type: 'save', payload: { userSetting: {
                    ...userSetting,
                    email:payload.email
                } } });
                callback&&callback();
              }
        },
         //绑定用户手机
        *saveUserBindPhone({ payload,callback}, { call,put,select}){
           
            const data = yield call(saveBindPhone,payload);
            if(data.code===0){
             const userSetting = yield select(state => state.user.userSetting);
                message.success(data.message);
                yield put({ type: 'save', payload: { userSetting: {
                    ...userSetting,
                    mobilePhone:payload.phone
                } } });
                callback&&callback();
              }
        },
         //实名认证
        *saveUserApproveName({ payload,callback}, { call,put,select}){
           
            const data = yield call(saveApproveName,payload);
            if(data.code===0){
             const userSetting = yield select(state => state.user.userSetting);
                message.success(data.message);
                 yield put({ type: 'save', payload: { userSetting: {
                    ...userSetting,
                    realAuditing:1, //审核中
                    realVerified:0, //审核中
                    realNameRejectReason:null
                } } });
                callback&&callback();
              }
        },
        //资金密码 
        *userfundsPasswords({ payload,callback}, { call,put,select}){
            const data = yield call(updatefundsPasswords,payload);
            if(data.code===0){
                const userSetting = yield select(state => state.user.userSetting);
                let redirect =yield select(state=>state.global.pathName) || Cookies.get('pathname');
                message.success(data.message);
                yield put({ type: 'save', payload: { userSetting: {
                    ...userSetting,
                    fundsVerified:1
                } } });
                if(redirect){
                    Cookies.remove('pathname');
                    yield put(routerRedux.replace(redirect));
                }
                
                callback&&callback();
              }
        },
        //获取资金密码短信 
        *fetchGetMobileCode({ payload,callback}, { call,put,select}){
            const data = yield call(getMobileCode,payload);
            if(data.code===0){
                message.success(data.message);

              }
        },
        //重置资金密码 
        *userUpdateResetPrice({ payload,callback}, { call,put,select}){
            const data = yield call(updateResetPrice,payload);
            if(data.code===0){
                message.success(data.message);
                callback&&callback();

              }
        },


        
        //修改昵称
        *saveUserNickName({ payload,callback}, { call,put}){
            const data = yield call(updateNickName,payload);
            if(data.code===0){
                const userInfo=JSON.parse(Cookies.get('userInfo'));
                const newUserInfo={...userInfo,username:payload.nickname};
                message.success('修改成功');
                callback &&callback(data);
                Cookies.set('userInfo',JSON.stringify(newUserInfo));
                yield put({ type: 'save', payload: {userInfo: newUserInfo } });
            }
        },
        //获取用户支付方式信息
        *fetchUserPayment({ payload}, { call,put,select}){
         const response =yield call(getPayment, payload);
          if(response.code===0){
              yield put({ type: 'save', payload: { userPayment: response.data } });
          }
        },
        //绑定或者修改银行卡信息 type:1 绑定，2修改
        *saveBindBank({ payload,callback}, { select,put,call}){
            const data = yield call(payload.type===1?saveBank:updateBank,payload);
            if(data.code===0){
                const userSetting = yield select(state => state.user.userSetting);
                message.success(data.message);
                yield put({ type: 'save', payload: { userSetting: {
                    ...userSetting,
                    accountVerified:1
                } } });
              callback&&callback(data);
            }
        },
        //绑定或者修改支付宝信息 type:1 绑定，2修改
        *saveBindAlipay({ payload,callback},{ select,put,call}){
            const data = yield call(payload.type===1?saveAlipay:updateAlipay,payload);
            if(data.code===0){
                const userSetting = yield select(state => state.user.userSetting);
                message.success(data.message);
                yield put({ type: 'save', payload: { userSetting: {
                    ...userSetting,
                    accountVerified:1
                } } });
              callback&&callback(data);
            }
            
        },
        //绑定或者修改微信信息 type:1 绑定，2修改
        *saveBindWechat({ payload,callback}, { select,put,call}){
            const data = yield call(payload.type===1?saveWechat:updateWechat,payload);
            if(data.code===0){
                const userSetting = yield select(state => state.user.userSetting);
                message.success(data.message);
                yield put({ type: 'save', payload: { userSetting: {
                    ...userSetting,
                    accountVerified:1
                } } });
              callback&&callback(data);
            }
        },
        //绑定或者修改飞马信息 type:1 绑定，2修改
        *saveBindFm({ payload,callback}, { select,put,call}){
            const data = yield call(payload.type===1?saveFm:updateFm,payload);
            if(data.code===0){
                const userSetting = yield select(state => state.user.userSetting);
                message.success(data.message);
                yield put({ type: 'save', payload: { userSetting: {
                    ...userSetting,
                    accountVerified:1
                } } });
              callback&&callback(data);
            }
        },
        //修改密码 type:1 绑定，2修改
        *saveUpdatePwd({ payload,callback}, { call}){
            const data = yield call(updatePassword,payload);
            if(data.code===0){
                message.success(data.message+',请重新登录');
                callback&&callback(data);
            }
        }
    },

    reducers: {
        save(state, action) {
            return {...state, ...action.payload };
        }
    }
};
