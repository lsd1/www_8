/*
 * @Author: Administrator
 * @Date:   2018-08-03 18:13:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-31 19:07:35
 */
import { getLatestTrade, getPlateMini, getWallet, getCurrentOrder, getHistoryOrder, saveTransaction, cancelUndo, cancelAll } from '@/services/exchange';
import { mul, toFixed, delay } from '@/utils/utils';
import { message } from 'antd';





function itemBind(askList) {
    return (prev, next, index) => {
        const price = askList[index] && askList[index].price ? toFixed(askList[index].price, 4) : 0;
        const amount = askList[index] && askList[index].amount ? toFixed(askList[index].amount, 4) : 0;
        const totalAmount = index === 0 ? (+amount === 0 ? 0 : amount) : (amount === 0 ? 0 : toFixed(mul(`${amount}+${prev[index-1].totalAmount}`), 4));
        return prev.concat([{ price, amount, index: next.index, totalAmount }]);
    };

}

function depthBind(sellList, buyList) {
    let sellDepth = sellList.map(item => {
        return {...item, name: 'SELL', SELL: item.amount };
    }).sort((curr, prev) => curr.price - prev.price).reduce((curr, prev, index) => {
        if (index === 0) {
            curr.push(prev);
        } else {
            const count = mul(`${curr[curr.length-1].amount}+${prev.amount}`);
            curr.push({...prev, amount: count, SELL: count });
        }
        return curr;
    }, []);
    let buyDepth = buyList.map(item => {
        return {...item, name: 'BUY', BUY: item.amount };
    }).sort((curr, prev) => prev.price - curr.price).reduce((curr, prev, index) => {
        if (index === 0) {
            curr.push(prev);
        } else {
            const count = mul(`${curr[curr.length-1].amount}+${prev.amount}`);
            curr.push({...prev, amount: count, BUY: count });
        }
        return curr;
    }, []);


    const max =sellDepth.length>0?sellDepth[sellDepth.length - 1].price:0,
        min =buyDepth.length>0?buyDepth[buyDepth.length - 1].price:0;
    const dif = toFixed(mul(`(${max}+${min})/2`), 4);
    sellDepth.unshift({ price: +mul(`${dif}+0.00001`), priceStr: dif, SELL: 0, name: "SELL", amount: 0, amountStr: 0 });
    buyDepth.unshift({ price: +mul(`${dif}-0.00001`), priceStr: dif, BUY: 0, name: "BUY", amount: 0, amountStr: 0 });
    let depthList = sellDepth.concat(buyDepth);
    depthList = depthList.filter(item => {
        if (item.name === 'SELL') {
            return item.price > dif;
        } else {
            return item.price < dif;
        }
    });
    return {
        ticks: [min, toFixed(mul(`(${min}+${dif})/2`), 4), dif, toFixed(mul(`(${max}+${dif})/2`), 4), max],
        depthList
    };

}


export default {
    namespace: 'exchange',

    state: {
        ticks: [],
        LatestTradeData: [],
        currentCoin: {},
        plateSellData: [],
        plateBuyData: [],
        historyOrder: { content: [] },
        currentOrder: { content: [] },
        depthList: [],
        depthMin: 0,
        depthMax: 1000,
        wallet: {
            price: '0.0000',
            priceConvert: '0.00'
        }

    },

    effects: {
        //获取实时成交
        * fetchGetLatestTrade({ payload }, { put, call, select }) {
            const data = yield select(state => state.exchange.LatestTradeData);
            const response = data.length > 0 ? data : (yield call(getLatestTrade, payload));
            yield put({ type: 'save', payload: { LatestTradeData: response } });
        },
        //实时成交更新
        * fetchEditLatestTrade({ payload }, { put, select }) {
            const list = yield select(state => state.exchange.LatestTradeData);
            const data = payload.concat(list);
            yield put({ type: 'save', payload: { LatestTradeData: data } });
        },

        //获取最新成交
        * fetchGetplate({ payload }, { put, call, select }) {
            try {
                const response = yield call(getPlateMini, payload);
                const arrList = Array.from({ length: 7 }, (v, index) => ({ index: index + 1, price: 0, amount: 0 }));
                const sellData = arrList.reduce(itemBind(response.ask.items), []);
                const buyData = arrList.reduce(itemBind(response.bid.items), []);
                //深度图数据
                const depth = depthBind(response.ask.items, response.bid.items);
                yield put({
                    type: 'save',
                    payload: {
                        plateSellData: sellData.reverse(),
                        plateBuyData: buyData,
                        ...depth
                    }
                });
            } catch (err) {
                console.log(err);
            }
        },
        //获取盘点
        * fetchTradePlate({ payload }, { put, call, select }) {
            const obj = yield select(state => {
                const { plateSellData, plateBuyData, depthList } = state.exchange;
                return {
                    plateSellData,
                    plateBuyData,
                    depthList
                };
            });
            let sellData = [],
                depthSell = [],
                buyData = [],
                depthBuy = [];
            let arrList = Array.from({ length: 7 }, (v, index) => ({ index: index + 1, price: 0, amount: 0 }));
            if (payload.direction === 'SELL') {
                sellData = arrList.reduce(itemBind(payload.items), []);
                // depthSell=payload.items;
            } else if (payload.direction === 'BUY') {
                buyData = arrList.reduce(itemBind(payload.items), []);
                // depthBuy=payload.items;
            }

            yield put({
                type: 'save',
                payload: {
                    plateSellData: sellData.length > 0 ? sellData.reverse() : obj.plateSellData,
                    plateBuyData: buyData.length > 0 ? buyData : obj.plateBuyData,

                }
            });

        },
        //绑定当前页面币种
        * fetchAddCurrentCoin({ payload }, { put }) {
            yield put({ type: 'save', payload: { currentCoin: payload } });
        },
        * clear({ payload }, { put }) {
            yield put({ type: 'save', payload: { currentCoin: {} } });
        },
        //获取用户当前币下面的数据
        * fetchGetWallet({ payload, callback }, { call }) {
            const data = yield call(getWallet, payload);
            callback && callback(data || { data: {} });
        },
        //保存用户当前币
        * saveWallet({ payload }, { select, put }) {

            const USD = yield select(state => state.global.USD);
            yield put({ type: 'save', payload: { wallet: { price: payload.price, priceConvert: mul(`${payload.price}*${USD}`) } } });

        },
        //查询当前委托
        * fetchGetCurrentOrder({ payload }, { call, put }) {


            const data = yield call(getCurrentOrder, payload);
            yield put({ type: 'save', payload: { currentOrder: data } });

        },
        //查询历史委托
        * fetchGetHistoryOrder({ payload }, { call, put }) {

            const data = yield call(getHistoryOrder, payload);
            yield put({ type: 'save', payload: { historyOrder: data } });

        },
        //保存交易
        * saveTransactionData({ payload, callback }, { call }) {
            yield delay(500);
            const data = yield call(saveTransaction, payload);
            if (data.code === 0) {
                message.success(data.message);
                callback && callback();
            }


        },
        //撤单
        * dealCancelUndo({ payload, callback }, { call, put, select }) {
            const currentOrder = yield select(state => state.exchange.currentOrder);
            const data = yield call(cancelUndo, payload);
            if (data.code === 0) {
                message.success(data.message);
                currentOrder.content = currentOrder.content.filter((item) => item.orderId !== payload.id);
                callback && callback();
                yield put({ type: 'save', payload: { currentOrder } });
            }
        },
        //一键撤单
        * dealCancelAll({ payload, callback }, { call, put, select }) {
            const data = yield call(cancelAll, payload);
            if (data.code === 0) {
                message.success('撤单成功');
                callback && callback();
                yield put({ type: 'save', payload: { currentOrder: [] } });
            }
        }




    },

    reducers: {
        save(state, action) {
            return {...state, ...action.payload };
        }
    }
};
