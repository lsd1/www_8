/*
 * @Author: Administrator
 * @Date:   2018-08-04 10:49:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-06 21:32:31
 */

import request from '@/utils/request';
import { globalData } from '@/utils/config';

/**
 * [getBusinessList 获取广告货币列表]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getBusinessList(params) {
    return request.get(`${globalData.url}/uc/approve/business-auth-deposit/list`,params);
}

/**
 * [saveBusinessApply 申请成为商家]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function saveBusinessApply(params) {
    return request.post(`${globalData.url}/uc/approve/certified/business/apply`,params);
}

/**
 * [saveBusinessApply 商家审核状态]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getBusinessStatus(params) {
    return request.get(`${globalData.url}/uc/approve/certified/business/status`,params);
}
/**
 * [getCoinAll 可交易币种]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getCoinAll(params) {
    return request.get(`${globalData.url}/otc/coin/all`,params);
}
/**
 * [postSaveAdvertise 发布广告信息]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function postSaveAdvertise(params) {
         
    return request.post(`${globalData.url}/otc/advertise/create`,params);
}
/**
 * [postUpdateAdvertise 修改广告信息]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function postUpdateAdvertise(params) {

    return request.post(`${globalData.url}/otc/advertise/update`,params);
}
/**
 * [getCoinAll 查询广告列表]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getAdvertiseList(params) {
    return request.get(`${globalData.url}/otc/advertise/all`,params);
}
/**
 * [getCoinAll 查询广告详情]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getAdvertiseInfo(params) {
    return request.get(`${globalData.url}/otc/advertise/detail`,params);
}
/**
 * [postOnshelves 上架广告]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function postOnshelves(params) {
    return request.post(`${globalData.url}/otc/advertise/on/shelves`,params);
}
/**
 * [postOffshelves 下架广告]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function postOffshelves(params) {
    return request.post(`${globalData.url}/otc/advertise/off/shelves`,params);
}
/**
 * [delAdvertise 删除广告]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function delAdvertise(params) {
    return request.post(`${globalData.url}/otc/advertise/delete`,params);
}


