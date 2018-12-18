/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-15 16:10:03
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';
import Aside from './component/Aside';
import Article from './component/Article';
import './Exchange.less';



@withRouter
@connect(({ global, user, home, exchange }) => ({
    user,
    home,
    global,
    exchange

}))
class Exchange extends PureComponent {
    constructor(props) {
        super(props);
        this.stompClient = null;
        this.currentCoin = { symbol: null };
        this.state = {
            sellInfo: {},
            buyInfo: {}
        };

    }
    componentDidMount() {
        const { dispatch, match } = this.props;
        const { name, small } = match.params;
        this.currentCoin = { symbol: `${name}/${small}` };

        Promise.all([dispatch({
            type: 'home/fetchGetThumbTrend',
            payload: {
                ...this.currentCoin
            }
        }), dispatch({
            type: 'exchange/fetchGetLatestTrade',
            payload: {
                ...this.currentCoin,
                size: 20
            }
        }), dispatch({
            type: 'exchange/fetchAddCurrentCoin',
            payload: this.currentCoin
        }), dispatch({
            type: 'exchange/fetchGetplate',
            payload: this.currentCoin
        }), dispatch({
            type: 'global/socketLink',
            payload: {
                url: '/market/market-ws'
            },
            callback: this.initStompClient.bind(this)
        })]);


    }
    componentWillUnmount() {
            const { dispatch } = this.props;
            Promise.all([dispatch({
                type: 'global/socketClose',
                payload: {
                    stompClient: this.stompClient
                }
            }), dispatch({
                type: 'exchange/clear'
            })]);
        }
        //初始化
    initStompClient(stompClient) {
        const { dispatch, user: { isLogin, userInfo } } = this.props;
        this.stompClient = stompClient;
        this.stompClient.connect({}, () => {
             //订阅价格变化消息

            this.stompClient.subscribe('/topic/market/thumb', (data) => {
                const map = JSON.parse(data.body);
                dispatch({
                    type: 'home/fetchGetThumbInfo',
                    payload: map
                });
            });
            //订阅实时成交信息
            this.stompClient.subscribe('/topic/market/trade/' + this.currentCoin.symbol, (data) => {
                const map = JSON.parse(data.body);

                dispatch({
                    type: 'exchange/fetchEditLatestTrade',
                    payload: map
                });
            });
            if (isLogin) {
                //订阅委托取消信息
                stompClient.subscribe('/topic/market/order-canceled/' + this.currentCoin.symbol + "/" + userInfo.id, (data) => {
                    const map = JSON.parse(data.body);
                    this.againInit(1, map);
                   // this.initDeal(0,map);
                });
                //订阅委托交易完成
                stompClient.subscribe('/topic/market/order-completed/' + this.currentCoin.symbol + "/" + userInfo.id, (data) => {
                    const map = JSON.parse(data.body);
                    this.againInit(1, map);
                    //this.initDeal(0,map);
                });
            }
            //订阅盘口
            stompClient.subscribe('/topic/market/trade-plate/' + this.currentCoin.symbol, (data) => {
                const map = JSON.parse(data.body);
                dispatch({
                    type: 'exchange/fetchTradePlate',
                    payload: map
                });
            });

        }, (error) => {
            console.log(error);

        });

    }

    /**
     * [againInit socket初始化委托数据]
     * @return {[type]} [description]
     */
    againInit = (state = 0, data = { memberId: 0 }) => {
            const { dispatch, user: { userInfo } } = this.props;
            dispatch({
                type: 'exchange/fetchGetplate',
                payload: { symbol: this.currentCoin.symbol }
            });
            //跟当前用户相关的才刷新
            if (state === 0 || userInfo.id === data.memberId) {
                dispatch({
                    type: 'exchange/fetchGetCurrentOrder',
                    payload: {
                        'pageNo': 0,
                        'pageSize': 5,
                        'symbol': this.currentCoin.symbol
                    }
                });
            }
            if (state === 1 && userInfo.id === data.memberId) {
                dispatch({
                    type: 'exchange/fetchGetHistoryOrder',
                    payload: {
                        'pageNo': 0,
                        'pageSize': 5,
                        'symbol': this.currentCoin.symbol
                    }
                });
            }
        }
        /**
         * [init 初始化用户当前币种数据]
         * @return {[type]} [description]
         */
    initDeal = (state = 0,data = { memberId: 0 }) => {
        const { dispatch, user: { userInfo }, match  } = this.props;
        const { name, small } = match.params;
        if (userInfo.id === data.memberId||state===1) {
            Promise.all([dispatch({
                type: 'exchange/fetchGetWallet',
                payload: {
                    name
                },
                callback: (data) => {
                    this.setState({
                        sellInfo: data.data
                    });
                }
            }), dispatch({
                type: 'exchange/fetchGetWallet',
                payload: {
                    name: small
                },
                callback: (data) => {

                    this.setState({
                        buyInfo: data.data
                    });

                }
            })]);

        }


    }


    render() {
        const { home: { thumbTrendData, newPrice } } = this.props;
        const { sellInfo, buyInfo } = this.state;
        const info = thumbTrendData.find((item) => item.symbol === this.currentCoin.symbol) || {};


        return (
            <Layout black className="exchange main-pd flex-box flex-between" title={info.symbol?`${info.symbol} ${info.price} ≈ ${info.cny}CNY`:intl.get('TOP_COIN')}>
                <Aside />
                <Article sellInfo={sellInfo} buyInfo={buyInfo} initDeal={this.initDeal} againInit={this.againInit}    newPrice={newPrice} info={info} stompClient={this.stompClient}  />
            </Layout>
        );
    }
}

export default Exchange;
