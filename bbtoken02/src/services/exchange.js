/*
 * @Author: Administrator
 * @Date:   2018-08-04 10:49:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-31 17:18:35
 */

import request from '@/utils/request';
import { globalData } from '@/utils/config';


/**
 * [getLatestTrade 获取实时成交]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getLatestTrade(params) {
	return request.get(`${globalData.url}/market/latest-trade/`, params);
}
/**
 * [getPlateMini 获取最新成交]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getPlateMini(params) {
	return request.get(`${globalData.url}/market/exchange-plate-mini`, params);
}
/**
 * [getPlateMini 获取用户当前币下面的数据]
 * @name  {[string]} params [币名称]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getWallet({name,...params}) {
	return request.get(`${globalData.url}/uc/asset/wallet/${name}`, params);
}
/**
 * [getCurrentOrder 查询当前委托]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getCurrentOrder(params) {
	return request.get(`${globalData.url}/exchange/order/current`, params);
}




/**
 * [getCurrentOrder 查询历史委托]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getHistoryOrder(params) {
	return request.get(`${globalData.url}/exchange/order/history`, params);
}

/**
 * [getCurrentOrder 限价交易]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveTransaction(params) {
	return request.post(`${globalData.url}/exchange/order/add`, params);
}
/**
 * [getCurrentOrder 撤单]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function cancelUndo(params) {
	return request.post(`${globalData.url}/exchange/order/cancel/${params.id}`, params);
}

/**
 * [getCurrentOrder 撤单]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function cancelAll(params) {
	return request.post(`${globalData.url}/exchange/order/batchCancel` , params);
}





