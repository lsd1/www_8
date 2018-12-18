/*
 * @Author: Administrator
 * @Date:   2018-08-04 10:49:26
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-10 09:32:49
 */

import request from '@/utils/request';
import { globalData } from '@/utils/config';

/**
 * [getNoticeList 获取帮助列表]
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export async function getHelpList(params) {
    return request.get(`${globalData.url}/uc/ancillary/system/help`,params);
}


