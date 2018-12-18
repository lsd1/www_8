/*
 * @Author: Administrator
 * @Date:   2018-08-03 18:13:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-20 15:41:48
 */
import { getBanner, getThumbTrend,postFavorAdd,postFavorDelete,getFavorList } from '@/services/api';
import { toFixed, mul } from '@/utils/utils';
import {message} from 'antd';





function bind(item, usd) {
    const chg = toFixed(item.chg * 100, 2);
    item.price = parseFloat(item.close).toFixed(4);
    item.rose = item.chg >= 0 ? ('+' + chg + '%') : (chg + '%');
    item.coin = item.symbol;
    item.volume = parseInt(item.volume);
    item.open = toFixed(item.open, 2);
    item.cny = toFixed(mul(`${item.price}*${usd}`), 2);
    item.high = parseFloat(item.high).toFixed(4);
    item.low = parseFloat(item.low).toFixed(4);
    item.isFavor=!!item.isFavor;
    return item;
}

export default {
    namespace: 'home',

    state: {
        bannerData: [],
        thumbTrendData: [],
        newPrice: 0,
        favorList:[],
        USD: 6.5
    },

    effects: { 
        //轮播图
        * fetchGetBanner({ payload }, { put, call, select }) {

            const data = yield select(state => state.home.bannerData);
            const response = data.length > 0 ? data : (yield call(getBanner, payload)).data;
            yield put({ type: 'save', payload: { bannerData: response } });

        },
        //实时币数据和自选数据
        * fetchGetThumbTrend({ payload, callback }, { put, call, select }) {
            try {
                let favorList=[];
                let newPrice=0;
                const isLogin = yield select(state => state.user.isLogin);
                const thumbData = yield select(state => state.home.thumbTrendData);
                const usd = yield select(state => state.global.USD);
                let list = thumbData.length > 0 ? thumbData : ((yield call(getThumbTrend))).map(item => bind(item, usd));
                if(isLogin){
                    const favorData = yield select(state => state.home.favorList);
                    favorList = favorData.length > 0 ? favorData : yield call(getFavorList);
                    favorList=favorList.map(item=>{
                        list.forEach(item2=>{
                            if(item.symbol===item2.symbol){
                                item2.isFavor=true;
                                item=item2;
                            }
                        });
                        return item;
                    });
                }
               //获取当前价格
                if(payload&&payload.symbol){
                    newPrice=list.find(item=>item.symbol===payload.symbol).price  || 0;
                }
                yield put({ type: 'save', payload: {newPrice:newPrice, thumbTrendData: list,favorList:favorList } });
            } catch (err) {
                console.log(err);
            }

        },
           //新增取消收藏
        * fetchEditFavorAdd({ payload }, { put,select, call }) {
            let favorData = yield select(state => state.home.favorList);
            let thumbData = yield select(state => state.home.thumbTrendData);
            const response = yield call(payload.type===0?postFavorAdd:postFavorDelete,{symbol:payload.symbol});
            if(response.code===0){
                // 收藏
                  if(payload.type===0){
                    favorData.push({...payload,isFavor:true});
                    thumbData=thumbData.map(item=>{
                       if(item.symbol===payload.symbol){
                          item.isFavor=true;
                       }
                       return item;
                    });
                  }else{
                //取消
                    favorData=favorData.filter(item=>{
                         return payload.symbol!==item.symbol;
                    });
                    thumbData=thumbData.map(item=>{
                       if(item.symbol===payload.symbol){
                          item.isFavor=false;
                       }
                       return item;
                    });

                  }
                  message.success(payload.type===0?'收藏成功':'取消收藏');
                  yield put({ type: 'save', payload: {favorList:favorData,thumbTrendData:thumbData } });
            }
            
        },

        //实时币详情数据
        * fetchGetThumbInfo({ payload }, { put, call, select }) {
            try {
                const usd = yield select(state => state.global.USD);
                const bindItem=bind(payload, usd);
                const list = yield select(state => {
                    const data = state.home.thumbTrendData.map(item => {
                        return item.symbol === payload.symbol ? {...bindItem,isFavor:item.isFavor }  : item;
                    });
                    return data;
                });
                const favorList = yield select(state => {
                    const data = state.home.favorList.map(item => {
                        return item.symbol === payload.symbol ? {...bindItem,isFavor:item.isFavor }  : item;
                    });
                    return data;
                });
                yield put({ type: 'save', payload: { thumbTrendData: list,favorList } });
            } catch (err) {
                console.log(err);
            }

        }
    },

    reducers: {
        save(state, action) {
            return {...state, ...action.payload };
        }
    }
};
