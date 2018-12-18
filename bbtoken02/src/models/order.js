/*
 * @Author: Administrator
 * @Date:   2018-08-03 18:13:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-06 19:00:24
 */
import { getOrderSelf, getOrderInfo, savaOrderPay,cancelOrderPay,postRelease,saveOrderAppeal,getMessage} from '@/services/order';
import {message} from 'antd';

export default {
    namespace: 'order',

    state: {
        orderList: { content: [] },
        orderInfo: {},
        messageList:[]

    },

    effects: {
        //获取订单列表
        * fetchOrderlist({ payload }, { put, call }) {
            const response = yield call(getOrderSelf, payload);
            yield put({ type: 'save', payload: { orderList: response.data } });
        },
        //获取订单详情
        * fetchOrderInfo({ payload, callback }, { put, call }) {
            const response = yield call(getOrderInfo, payload);
            if (response.code === 0) {
                callback && callback(response.data);
                yield put({ type: 'save', payload: { orderInfo: response.data } });
            }

        },
        //修改订单状态{0:'已取消',1:'未付款',2:'已付款',3:'已完成',4:'申诉中'}
        * saveOrderPayStatus({ payload,callback}, { put, call, select }) {
            const method=[cancelOrderPay,'',savaOrderPay,postRelease,saveOrderAppeal][payload.status];
            const response = yield call(method, payload);
            if (response.code === 0) {
                const orderInfo = yield select(state => state.order.orderInfo);
                message.success(response.message);
                callback&&callback();
                yield put({
                    type: 'save',
                    payload: {
                        orderInfo: {
                            ...orderInfo,
                            status: payload.status
                        }
                    }
                });
            }
        },
        //修改本地订单状态{0:'已取消',1:'未付款',2:'已付款',3:'已完成',4:'申诉中'}
        *editPayStatus({ payload }, { put, select }) {
            const orderInfo = yield select(state => state.order.orderInfo);
                yield put({
                    type: 'save',
                    payload: {
                        orderInfo: {
                            ...orderInfo,
                            status: payload.status
                        }
                    }
                });
        },
        //订单聊天 1获取，2新增
        *fetchSavaMessage({ payload, callback }, { put, call,select }) {
            let messageList=yield select(state => state.order.messageList);
             if(payload.type===1){
                const response = yield call(getMessage, payload);

                messageList=response.data.reverse();
             }else{
                 messageList.push(payload.data);
             }
             yield put({type: 'save', payload: { messageList } });
             callback&&callback();
        }

        
        
    },

    reducers: {
        save(state, action) {
            return {...state, ...action.payload };
        }
    }
};
