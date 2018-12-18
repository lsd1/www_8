/*
 * @Author: Administrator
 * @Date:   2018-08-04 10:49:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-03 18:39:44
 */

import request from '@/utils/request';
import { globalData } from '@/utils/config';

/**
 * [getAssetWallet 获取我的资产]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getAssetWallet(params) {
    return request.get(`${globalData.url}/uc/asset/wallet`,params);
}
/**
 * [getAssetProperty 获取我的资产充值明细]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getAssetProperty(params) {
    return request.get(`${globalData.url}/uc/asset/transaction/all`,params);
}

/**
 * [getAssetRecord 获取我的提现记录]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getAssetWithdraw(params) {
    return request.get(`${globalData.url}/uc/withdraw/record`,params);
}
/**
 * [getAssetRecord 获取我的充值记录]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getAssetRecharge(params) {
    return request.get(`${globalData.url}/uc/asset/transaction`,params);
}


/**
 * [getSupportInfo 获取我的提币信息]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getSupportInfo(params) {
    return request.post(`${globalData.url}/uc/withdraw/support/coin/info`,params);
}


/**
 * [getAssetRecord 获取我的提币地址]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getMyCoinAdderess(params) {
    return request.post(`${globalData.url}/uc/withdraw/address/page`,params);
}
// /**
//  * [getAssetRecord 保存我的提币地址]
//  * @param  {[type]} params [description]
//  * @return {[type]}        [description]
//  */
// export async function saveMyCoinAdderess(params) {
//     return request.post(`${globalData.url}/uc/withdraw/address/add`,params);
// }
/**
 * [getAssetRecord 保存我的提币地址]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveMyCoinAdderess(params) {
    return request.post(`${globalData.url}/uc/withdraw/address/adds`,params);
}
/**
 * [getAssetRecord 删除我的提币地址]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function delMyCoinAdderess(params) {
    return request.post(`${globalData.url}/uc/withdraw/address/delete`,params);
}
/**
 * [getCoinAdderessCode 获取我的验证码]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getCoinAdderessCode(params) {
    return request.post(`${globalData.url}/uc/mobile/add/address/code`,params);
}
/**
 * [saveWithdrawApply 提币]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveWithdrawApply(params) {
    return request.post(`${globalData.url}/uc/withdraw/apply`,params);
}







