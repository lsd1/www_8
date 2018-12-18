/*
* @Author: Administrator
* @Date:   2018-10-31 19:16:21
* @Last Modified by:   Administrator
* @Last Modified time: 2018-11-01 19:29:43
*/
// import { routerRedux } from 'dva/router';
import {hasLogin} from './oAuth';
import cookie from 'js-cookie';

/**
 * [statistics 跳转]
 * @param {[type]} parms [statistics]
 */
export function backPrev(parms){
    const url=parms || '/exchange/BTC/USDT';
    let ret,method;
        return function(target, key, descriptor) {
            method = descriptor.value;
            descriptor.value =function(...args){
                if(hasLogin()){
                     window.location.href=`${location.protocol}//${location.host}/${cookie.get('lang')}${url}`;
                     ret = method.apply(this, args);
                }else{
                    ret = method.apply(this, args);
                }
                
                return ret;
            };
            return descriptor;
      };
}