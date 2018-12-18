/*
 * @Author: Administrator
 * @Date:   2018-08-03 18:13:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-20 17:15:56
 */
import {
    getAssetWallet,
    getAssetProperty,
    getAssetWithdraw,
    getMyCoinAdderess,
    saveMyCoinAdderess,
    delMyCoinAdderess,
    getCoinAdderessCode,
    getSupportInfo,
    saveWithdrawApply,
    getAssetRecharge
} from '@/services/property';
import { mul, toFixed, delay } from '@/utils/utils';
import { message } from 'antd';

const totalBind = () => (prev, curr) => {
    const amount = mul(`${curr.balance}+${curr.frozenBalance}`);
    prev.totalUSTD = toFixed(mul(`${prev.totalUSTD}+${curr.coin.usdRate}*${amount}`), 6);
    prev.totalCNY =toFixed(mul(`${prev.totalCNY}+${curr.coin.cnyRate}*${amount}`),2);
    return prev;
};


export default {
    namespace: 'property',

    state: {
        walletList: [],
        totalUSTD: 0,
        totalCNY: 0,
        coinAdderessList: { content: [] },
        propertylist: { content: [] },
        withdrawList: { content: [] },
        rechargeList: { content: [] },
        supportInfo: []
    },

    effects: {
        //计算资产数据
        * fetchGetWalletList({ payload }, { put, call }) {
            const response = yield call(getAssetWallet);
            if (response.code === 0) {
                let total = response.data.reduce(totalBind(), { totalUSTD: 0, totalCNY: 0 });
                yield put({ type: 'save', payload: { walletList: response.data, totalUSTD: total.totalUSTD, totalCNY: total.totalCNY } });
            }
        },
        //隐藏资产数据 price 
        * editWalletList({ payload = { price: 0, chekcd: false } }, { put, call, select }) {
            let data = [];
            if (payload.checked) {
                data = yield select(state => state.property.walletList);
                data = data.filter((item) => mul(`${item.balance}+${item.frozenBalance}`) !== payload.price);
                yield put({ type: 'save', payload: { walletList: data } });
            } else {
                const response = yield call(getAssetWallet);
                if (response.code === 0) {
                    let total = response.data.reduce(totalBind(),{ totalUSTD: 0, totalCNY: 0 });
                    yield put({ type: 'save', payload: { walletList: response.data, totalUSTD: total.totalUSTD, totalCNY: total.totalCNY } });
                }
            }

        },
        //根据资产列表显示类型
        * fetchWalletListType({ payload = { index: 0, active: 0, left: 0 } }, { put, select }) {
            let data = yield select(state => state.property.walletList);
            data[payload.index].active = payload.active;
            data[payload.index].left = payload.left;
            yield put({ type: 'save', payload: { walletList: data } });
        },
        //显示资产明细
        * fetchGetPropertylist({ payload }, { put, call }) {
            const response = yield call(getAssetProperty, payload);
            yield put({ type: 'save', payload: { propertylist: response } });
        },
        //获取提现记录
        * fetchGetWithdrawList({ payload }, { put, call }) {
            const response = yield call(getAssetWithdraw, payload);
            if (response.code === 0) {
                yield put({ type: 'save', payload: { withdrawList: response.data } });
            }
        },
        //获取充值记录
        * fetchGetAssetRechargeList({ payload }, { put, call }) {
            const response = yield call(getAssetRecharge, payload);
            yield put({ type: 'save', payload: { rechargeList: response } });

        },

        //获取我的提币地址
        * fetchgetMyCoinAdderess({ payload }, { put, call }) {
            const response = yield call(getMyCoinAdderess, payload);
            if (response.code === 0) {
                yield put({ type: 'save', payload: { coinAdderessList: response.data } });
            }
        },
        //保存我的提币地址
        * saveMyCoinAdderess({ payload, callback }, { put, call }) {
            const response = yield call(saveMyCoinAdderess, payload);
            if (response.code === 0) {
                message.success(response.message);
                callback && callback(response);

            }
        },
        //删除我的提币地址
        * deleteMyCoinAdderess({ payload }, { put, call, select }) {
            const response = yield call(delMyCoinAdderess, payload);
            if (response.code === 0) {
                message.success(response.message);
                let data = yield select(state => state.property.coinAdderessList);
                data.content = data.content.filter(item => item.id !== payload.id);
                yield put({ type: 'save', payload: { coinAdderessList: data } });
            }
        },
        //获得我的提币地址验证码
        * feitchGetCoinAdderessCode({ payload }, { call }) {
            const response = yield call(getCoinAdderessCode, payload);
            if (response.code === 0) {
                message.success(response.message);
            }

        },
        //获取提币提币地址信息
        * feitchGetSupportInfo({ payload }, { put, call }) {
            const response = yield call(getSupportInfo, payload);
            if (response.code === 0) {
                yield put({ type: 'save', payload: { supportInfo: response.data } });
            }
        },
        //提币
        * addWithdrawApply({ payload }, { put, call, select }) {
            yield delay(500);
            const response = yield call(saveWithdrawApply, payload);
            if (response.code === 0) {
                message.success(response.message);
                let data = yield select(state => state.property.walletList);
                data = data.map(item => {
                    if (item.coin.unit === payload.unit) {
                        item.balance = +(mul(`${item.balance}-${payload.amount}`));
                        item.active = 0;
                    }
                    return item;
                });
                yield put({ type: 'save', payload: { walletList: data } });

            }
        },
        * clear({ payload }, { put }) {
            yield put({ type: 'save', payload: { walletList: [] } });

        }
    },



    reducers: {
        save(state, action) {
            return {...state, ...action.payload };
        }
    }
};
