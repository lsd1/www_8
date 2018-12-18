/*
 * @Author: Administrator
 * @Date:   2018-08-04 10:49:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-06 21:32:40
 */

import request from '@/utils/request';
import { globalData } from '@/utils/config';


/**
 * [delAnswers 获取交易广告列表]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getAdvertisePageByUnit(params) {
	return request.get(`${globalData.url}/otc/advertise/page-by-unit`, params);
}
/**
 * [delAnswers 获取交易广告交易详情]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getPreInfo(params) {
	return request.post(`${globalData.url}/otc/order/pre`, params);
}
/**
 * [saveOrderBuy 购买]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */

export async function saveOrderBuy(params) {
	return request.post(`${globalData.url}/otc/order/buy`, params);
}

/**
 * [saveOrderSell 卖出]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveOrderSell(params) {
	return request.post(`${globalData.url}/otc/order/sell`, params);
}


/**
 * [getAdvertiseMember 获取用户广告详情]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getAdvertiseMember(params) {
    return request.post(`${globalData.url}/otc/advertise/member`,params);
}