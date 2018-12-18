
/*
 * @Author: Administrator
 * @Date:   2018-08-03 18:13:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-25 15:50:18
 */
import { getAdvertisePageByUnit,getPreInfo,saveOrderBuy,saveOrderSell,getAdvertiseMember} from '@/services/trade';
import {  delay } from '@/utils/utils';
import {message} from 'antd';

export default {
    namespace: 'trade',

    state: {
        advertiseList:{context:[]},
        preInfo:{},
        userAdvertiseInfo:{buy:[],sell:[]}
    },

    effects: { 
        //获取发布广告列表
    	* fetchAdvertisePageByUnit({ payload }, { put, call }) {
            const response = yield call(getAdvertisePageByUnit, payload);
            if(response.code===0){
                yield put({ type: 'save', payload: { advertiseList: response.data} });
            }
            
        },
        //修改状态
        * editAdvertiseStatus({ payload:{advertiseId,shop} }, { put, select }) {
            let data = yield select(state => state.trade.advertiseList);
            data.context=data.context.map(item=>{
                item.shop=!shop&&(item.advertiseId===advertiseId);
                return item;
            });
            yield put({ type: 'save', payload: { advertiseList: data } });
        },
        //修改状态 1购买 0 出售
        * editAdvertiseCheckUser({ payload:{advertiseId,shop,status} }, { put, select }) {
            let data = yield select(state => state.trade.userAdvertiseInfo);
            const name=['buy','sell'][status];
            data[name]=data[name].map(item=>{
                console.log(item.advertiseId,advertiseId)
                item.shop=!shop&&(item.advertiseId===advertiseId);
                return item;
            });
            console.log(data)
            yield put({ type: 'save', payload: { userAdvertiseInfo: data } });
        },
        //获取广告列表详情
        * fetchGetPreInfo({ payload }, { put,call }) {
            const response = yield call(getPreInfo, payload);
            if(response.code===0){
                yield put({ type: 'save', payload: { preInfo: response.data} });
            }
        },
        //买入,卖出广告
        * saveBuySell({ payload,callback }, { put,call }) {
            yield delay(500);
            const response = yield call(payload.type===1?saveOrderBuy:saveOrderSell, payload);
            if(response.code===0){
                message.success('订单生成成功');
                callback&&callback(response);
            }
        },
         //获取用户广告详情
        * fetchGetAdvertiseMember({ payload,callback }, { put,call }) {
            const response = yield call(getAdvertiseMember, payload);
            if(response.code===0){
                
                yield put({ type: 'save', payload: { userAdvertiseInfo: response.data} });
               
            }
        }
        
    },

    reducers: {
        save(state, action) {
            return {...state, ...action.payload };
        }
    }
};
