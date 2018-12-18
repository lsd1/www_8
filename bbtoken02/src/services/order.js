/*
 * @Author: Administrator
 * @Date:   2018-08-04 10:49:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-06 15:41:30
 */

import request from '@/utils/request';
import { globalData } from '@/utils/config';


/**
 * [getOrderSelf 获取订单列表]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getOrderSelf(params) {
	return request.post(`${globalData.url}/otc/order/self`, params);
}

/**
 * [getOrderSelf 获取订单详情]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getOrderInfo(params) {
	return request.post(`${globalData.url}/otc/order/detail`, params);
}
/**
 * [getOrderSelf 确认订单支付]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function savaOrderPay(params) {
	return request.post(`${globalData.url}/otc/order/pay`, params);
}
/**
 * [cancelOrderPay 取消订单]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function cancelOrderPay(params) {
	return request.post(`${globalData.url}/otc/order/cancel`, params);
}
/**
 * [postRelease 确认放行]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function postRelease(params) {
	return request.post(`${globalData.url}/otc/order/release`, params);
}
/**
 * [saveOrderAppeal 订单投诉]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveOrderAppeal(params) {
	return request.post(`${globalData.url}/otc/order/appeal`, params);
}
/**
 * [getCountry 获取订单聊天信息]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getMessage(params) {
	return request.post(`${globalData.url}/chat/getHistoryMessage`, params);
}


