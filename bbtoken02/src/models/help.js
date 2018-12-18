
/*
 * @Author: Administrator
 * @Date:   2018-08-03 18:13:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-10 09:51:51
 */
import {getHelpList} from '@/services/help';
export default {
    namespace: 'help',

    state: {
        helpList: [],
        helpInfo:{

        }
    },

    effects: { 
        //获取帮助列表
        *fetchGetHelpList({ payload={pageNo:1,pageSize:10} }, {  put,call,select}) {
            const data = yield select(state => state.business.coinList);
            const response = data.length > 0 ? data : (yield call(getHelpList, payload)).data;
            yield put({ type: 'save', payload: {helpList:response}});
        },
        //获取帮助详情
        *fetchGetHelpInfo({ payload }, {  put,call,select}) {
           const list = yield select(state=>state.help.helpList);
           const content=list.find(item=>+payload.id===item.id);
           yield put({ type: 'save', payload: {helpInfo:content}});
        }
    },

    

    reducers: {
        save(state, action) {
            return {...state,...action.payload };
        }
    }
};
