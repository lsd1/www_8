
/*
 * @Author: Administrator
 * @Date:   2018-08-03 18:13:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-19 13:40:31
 */
import {getBusinessList,saveBusinessApply,getBusinessStatus,getCoinAll,postSaveAdvertise,postUpdateAdvertise
,getAdvertiseList,getAdvertiseInfo,postOnshelves,postOffshelves,delAdvertise} from '@/services/business';
import {message}  from 'antd';
import { delay } from '@/utils/utils';
export default {
    namespace: 'business',

    state: {
        businessList:[],
        businessStatus:{},
        coinList:[],
        adtList:{}
    },

    effects: { 
      //获取广告商注册币数据
      *fetchGetBusinessList({ payload,callback}, {  put,call}) {
             const response = yield call(getBusinessList);
             if(response.code===0){
                callback && callback(response.data);
                yield put({ type: 'save', payload: { businessList: response.data } });
             }
        },
        //提交申请信息
        *saveBusinessList({ payload,callback}, {  put,call,select}) {
             const response = yield call(saveBusinessApply,payload);
             if(response.code===0){
                 const businessStatus = yield select(state => state.business.businessStatus);
                message.success('提交成功');
                 yield put({ type: 'save', payload: { businessStatus: {
                    ...businessStatus,
                    certifiedBusinessStatus:1
                } } });
                callback && callback(response.data);
             }
        },
        //获取商家审核信息  certifiedBusinessStatus：1审核中 2，审核通过3，审核不通过
        *fetchBusinessStatus({ payload,callback}, {  put,call}) {
             const response = yield call(getBusinessStatus,payload);
             if(response.code===0){
                callback && callback(response.data);
                 yield put({ type: 'save', payload: { businessStatus: response.data } });
             }
        },
        //获取可交易币种
        *fetchGetCoinAll({ payload}, {  put,call,select}) {
            const data = yield select(state => state.business.coinList);
            const response = data.length > 0 ? data : (yield call(getCoinAll, payload)).data;
            yield put({ type: 'save', payload: { coinList: response } });
        },
        //发布广告信息    type 1新增，2修改
        *saveAdvertise({ payload,callback}, { call}) {
             yield delay(500);
             const response = yield call(payload.type===1?postSaveAdvertise:postUpdateAdvertise,payload);
             if(response.code===0){
                 callback && callback(response);
             }
        },
        //查询广告列表    type 1新增，2修改
        *fetchGetAdvertiseList({ payload,callback}, {  put,call}) {
             const response = yield call(getAdvertiseList,payload);
             if(response.code===0){
                yield put({ type: 'save', payload: { adtList: response.data } });
                 callback && callback(response);
             }
        },
        //查询广告详情 
        *fetchGetAdvertiseInfo({ payload,callback}, {  put,call}) {
             const response = yield call(getAdvertiseInfo,payload);
             if(response.code===0){
                 callback && callback(response.data);
             }
        },
        //上，下架广告 //type:1 上架 2，下架
        *saveShelves({ payload,callback}, {  put,call,select}) {
            const response = yield call(payload.type===1?postOnshelves:postOffshelves,payload);
             if(response.code===0){
                 let adtList = yield select(state => state.business.adtList);
                 adtList.content=adtList.content.map(item=>{
                    if(item.id===payload.id){
                        item.status=payload.type===1?0:1;
                        item.remainAmount=payload.type===1?item.remainAmount:0;
                    }
                    return item;
                 });
                 message.success(response.message);
                 callback && callback(response);
                  yield put({ type: 'save', payload: { adtList:adtList } });
             }
        },
         //删除广告
        *deleteAdvertise({ payload,callback}, {  put,call,select}) {
             const response = yield call(delAdvertise,payload);
             if(response.code===0){
                let adtList = yield select(state => state.business.adtList);
                 adtList.content=adtList.content.filter(item=>item.id!==payload.id);
                 message.success(response.message);
                 callback && callback(response);
                yield put({ type: 'save', payload: { adtList:adtList } });
             }
        }

        

        

        
        
        
    },

    reducers: {
        save(state, action) {
            return {...state,...action.payload };
        }
    }
};
