
/*
 * @Author: Administrator
 * @Date:   2018-08-04 10:49:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-12 17:03:21
 */

import request from '@/utils/request';
import { globalData } from '@/utils/config';

/**
 * [getCaptcha 获取验证码]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getCaptcha(params) {
    return request.get(`${globalData.url}/uc/start/captcha`,params);
}
/**
 * [getCaptcha 获取重置密码手机验证码]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getResetMobileCode(params) {
    return request.post(`${globalData.url}/uc/mobile/reset/code`,params);
}
/**
 * [getCaptcha 获取重置密码邮箱验证码]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getResetEmailCode(params) {
    return request.post(`${globalData.url}/uc/reset/email/code`,params);
}
/**
 * [getCaptcha 重置密码]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function postResetPassword(params) {
    return request.post(`${globalData.url}/uc/reset/login/password`,params);
}


/**
 * [getcaptcha 登录]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function postLogin(params) {
    return request.post(`${globalData.url}/uc/login`,params);
}

/**
 * [postPhoneReg 手机注册]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function postPhoneReg(params) {
    return request.post(`${globalData.url}/uc/register/phone`,params);
}

/**
 * [postEmailReg 邮箱注册]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function postEmailReg(params) {
    return request.post(`${globalData.url}/uc/register/email`,params);
}
/**
 * [getUserInvite 获取邀请人数]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getUserInvite(params) {
    return request.get(`${globalData.url}/uc/promotion/summary`,params);
}

/**
 * [getUserRecord 获取邀请记录]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getUserRecord(params) {
    return request.get(`${globalData.url}/uc/promotion/record`,params);
}
/**
 * [getUserReward 获取返佣记录]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getUserReward(params) {
    return request.get(`${globalData.url}/uc/promotion/reward/record`,params);
}

/**
 * [getUserSetting 获取用户设置详情]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getUserSetting(params) {
    return request.get(`${globalData.url}/uc/approve/security/setting`,params);
}

/**
 * [saveBindEmail 绑定用户邮箱]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveBindEmail(params) {
    return request.post(`${globalData.url}/uc/approve/bind/email`,params);
}
/**
 * [saveBindPhone 绑定用户手机]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveBindPhone(params) {
    return request.post(`${globalData.url}/uc/approve/bind/phone`,params);
}

/**
 * [saveApproveName 实名认证]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveApproveName(params) {
    return request.post(`${globalData.url}/uc/approve/real/name`,params);
}
/**
 * [updatefundsPasswords 资金密码修改]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function updatefundsPasswords(params) {
   
    return request.post(`${globalData.url}/uc/approve/update/transaction/passwords`,params);
}
/**
 * [updatefundsPasswords 获取资金密码验证码]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getMobileCode(params) {
   
    return request.post(`${globalData.url}/uc/mobile/transaction/code`,params);
}
/**
 * [updatefundsPasswords 重置资金密码]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function updateResetPrice(params) {
   
    return request.post(`${globalData.url}/uc/approve/reset/transaction/password`,params);
}



/**
 * [updateNickName 修改用户昵称]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function updateNickName(params) {
    return request.post(`${globalData.url}/uc/member/up-nickname`,params);
}
/**
 * [updateNickName 获取用户支付方式]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getPayment(params) {
    return request.get(`${globalData.url}/uc/approve/account/setting`,params);
}

/**
 * [updateBank 修改银行卡号]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function updateBank(params) {
    return request.post(`${globalData.url}/uc/approve/update/bank`,params);
}
/**
 * [updateNickName 绑定银行卡号]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveBank(params) {
    return request.post(`${globalData.url}/uc/approve/bind/bank`,params);
}

/**
 * [updateBank 修改支付宝卡号]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function updateAlipay(params) {
    return request.post(`${globalData.url}/uc/approve/update/ali`,params);
}
/**
 * [updateNickName 绑定支付宝卡号]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveAlipay(params) {
    return request.post(`${globalData.url}/uc/approve/bind/ali`,params);
}

/**
 * [updateWechat 修改微信卡号]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function updateWechat(params) {
    return request.post(`${globalData.url}/uc/approve/update/wechat`,params);
}
/**
 * [saveWechat 绑定微信卡号]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveWechat(params) {
    return request.post(`${globalData.url}/uc/approve/bind/wechat`,params);
}

/**
 * [saveFm 绑定飞马账号]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveFm(params) {
    return request.post(`${globalData.url}/uc/approve/bind/fm`,params);
}

/**
 * [updateFm 修改飞马账号]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function updateFm(params) {
    return request.post(`${globalData.url}/uc/approve/update/fm`,params);
}

/**
 * [updatePassword 修改密码]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function updatePassword(params) {

    return request.post(`${globalData.url}/uc/approve/update/passwords`,params);
}






