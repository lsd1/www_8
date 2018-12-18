
/*
 * @Author: Administrator
 * @Date:   2018-08-03 18:13:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-08-23 13:47:20
 */
import {getNewsList,getNewsInfo} from '@/services/news';
export default {
    namespace: 'news',

    state: {
        newsList: {
            content:[],
            totalElements:0
        },
        newsInfo:{

        }
    },

    effects: { 
      *fetchGetNewsList({ payload={pageNo:1,pageSize:10} }, {  put,call}) {
             const response = yield call(getNewsList,payload);
            yield put({ type: 'save', payload: {newsList:response.data}});
        },
        *fetchGetNewsInfo({ payload }, {  put,call}) {
            const response = yield call(getNewsInfo,payload);
            yield put({ type: 'save', payload: {newsInfo:response.data}});
        }
    },

    

    reducers: {
        save(state, action) {
            return {...state,...action.payload };
        }
    }
};
