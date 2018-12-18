
/*
 * @Author: Administrator
 * @Date:   2018-08-03 18:13:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-08-23 10:49:21
 */
import {getNoticeList,getNoticeInfo} from '@/services/notice';
export default {
    namespace: 'notice',

    state: {
        noticeList: {
            content:[],
            totalElements:0
        },
        noticeInfo:{

        }
    },

    effects: { 
      *fetchGetNoticeList({ payload={pageNo:1,pageSize:10} }, {  put,call}) {
             const response = yield call(getNoticeList,payload);
            yield put({ type: 'save', payload: {noticeList:response.data}});
        },
        *fetchGetNoticeInfo({ payload }, {  put,call}) {
            const response = yield call(getNoticeInfo,payload);
            yield put({ type: 'save', payload: {noticeInfo:response.data}});
        }
    },

    

    reducers: {
        save(state, action) {
            return {...state,...action.payload };
        }
    }
};
