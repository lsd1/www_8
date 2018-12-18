/*
 * @Author: Administrator
 * @Date:   2018-08-04 10:49:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-08-30 14:36:36
 */

import request from '@/utils/request';
import { globalData } from '@/utils/config';

/**
 * [getNoticeList 获取新闻列表]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getNewsList(params) {
    return request.get(`${globalData.url}/uc/announcement/page`,params);
}
/**
 * [getNoticeInfo 获取新闻详情]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getNewsInfo(params) {
    return request.get(`${globalData.url}/uc/announcement/${params.id}`);
}



