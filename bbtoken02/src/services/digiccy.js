/*
 * @Author: Administrator
 * @Date:   2018-08-04 10:49:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-08-30 14:36:28
 */

import request from '@/utils/request';
import { globalData } from '@/utils/config';

/**
 * [getNoticeList 获取数字货币列表]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getDigiccyList(params) {
    return request.get(`${globalData.url}/uc/announcement/page`,params);
}
/**
 * [getNoticeInfo 获取数字获取详情]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getDigiccyInfo(params) {
    return request.get(`${globalData.url}/uc/announcement/${params.id}`);
}



