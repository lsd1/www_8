/*
 * @Author: Administrator
 * @Date:   2018-08-04 10:49:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-12 11:43:13
 */
import request from '@/utils/request';
import { globalData } from '@/utils/config';

/**
 * [delAnswers 获取广告]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getBanner(params) {
    return request.get(`${globalData.url}/uc/ancillary/system/advertise`,params);
}
/**
 * [getLang 获取语言包]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getLang(params) {
    return request.get(`locales/${params.currentLocale}.json`);
}
/**
 * [delAnswers 获取token]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getLogin(params={}) {
    return request.get(`${globalData.url}/uc/check/login`, params);
}

/**
 * [getCode 获取动态验证码]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getCode(params) {
	return request.post(`${globalData.url}/uc/mobile/code`, params);
}
/**
 * [getPhoneCode 获取手机验证码]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getPhoneCode(params) {
	return request.post(`${globalData.url}/uc/mobile/bind/code`, params);
}
/**
 * [getPhoneCode 获取修改密码手机验证码]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getPwdCode(params) {
	return request.post(`${globalData.url}/uc/mobile/update/password/code`, params);
}
/**
 * [getEmailCode 获取邮箱验证码]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getEmailCode(params={}) {
    return request.post(`${globalData.url}/uc/bind/email/code`, params);
}

/**
 * [getEmailPhoneCode 获取手机，邮箱验证码]
 * @param  {[type]} params [{type:1短信，2邮箱}]
 * @return {[type]}        [description]
 */
export async function getEmailPhoneCode(params={}) {
    return request.post(`${globalData.url}/uc/validate/send/code`, params);
}
/**
 * [getThumb 获取币值]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getThumb(params) {
	return request.get(`${globalData.url}/market/symbol-thumb`, params);
}
/**
 * [getCurrentOrder 新增收藏]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function postFavorAdd(params) {
	return request.post(`${globalData.url}/exchange/favor/add`, params);
}

/**
 * [getCurrentOrder 取消收藏]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function postFavorDelete(params) {
	return request.post(`${globalData.url}/exchange/favor/delete`, params);
}
/**
 * [getCurrentOrder 获取收藏]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getFavorList(params) {
	return request.get(`${globalData.url}/exchange/favor/find`, params);
}
/**
 * [getThumbTrend 获取币值2]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getThumbTrend(params) {
	return request.get(`${globalData.url}/market/symbol-thumb-trend`, params);
}

/**
 * [getUSD 获取汇率]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getUSD(params) {
	return request.get(`${globalData.url}/market/exchange-rate/usd-cny`, params);
}

/**
 * [getCountry 获取国家]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getCountry(params) {
	return request.post(`${globalData.url}/uc/support/country`, params);
}








