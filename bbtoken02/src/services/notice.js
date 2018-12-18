/*
 * @Author: Administrator
 * @Date:   2018-08-04 10:49:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-08-30 14:36:40
 */

import request from '@/utils/request';
import { globalData } from '@/utils/config';

/**
 * [getNoticeList 获取公告列表]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getNoticeList(params) {
    return request.post(`${globalData.url}/uc/announcement/page`,params);
}
/**
 * [getNoticeInfo 获取公告详情]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getNoticeInfo(params) {
    return request.get(`${globalData.url}/uc/announcement/${params.id}`);
}



