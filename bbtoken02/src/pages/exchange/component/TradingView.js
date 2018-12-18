/*
 * @Author: Administrator
 * @Date:   2018-08-08 10:17:28
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-27 17:38:57
 */
import React, { Component, Fragment } from 'react';
import intl from 'react-intl-universal';
import { Collapse } from 'antd';
import { withRouter } from 'dva/router';
import cx from 'classnames';
import { globalData } from '@/utils/config';
import tradingConfig from '@/pages/exchange/component/TradingConfig.js';
import { WebsockFeed } from 'tradingview/datafeed/bitrade';


const Panel = Collapse.Panel;

@withRouter
class Trading extends Component {

    constructor(props) {
        super(props);
        this.num = 0;
    }

    shouldComponentUpdate(nextProps) {

        if (nextProps.info.symbol && nextProps.stompClient && this.num === 0) {
                const datafeed = new WebsockFeed(globalData.url + '/market', nextProps.info, nextProps.stompClient);
                tradingConfig(nextProps.info.symbol, datafeed);
                this.num = 1;
        }
        return this.props.info.price !== nextProps.info.price;
    }
    render() {
        const { info,match} = this.props;

        return (
            <Collapse defaultActiveKey={['1']}>
                <Panel header={
                    <div className="flex-box flex-alignItem">
                       {info.symbol &&(
                        <Fragment>
                        <span className="fz-md">{info.symbol}&nbsp;&nbsp;{info.price}</span>
                        <em className="ml-md">≈ {info.cny}CNY</em>
                        <em className="ml-md">{intl.get('EXCHANGE_GROWTH')} <i className={cx([parseFloat(info.rose) < 0 ? 'red' : 'green'])}>{info.rose}</i></em>
                        <em className="ml-md">{intl.get('EXCHANGE_HIGH')}  {info.high}</em>
                        <em className="ml-md">{intl.get('EXCHANGE_BASS')}  {info.low}</em>
                        <em className="ml-md">24H{intl.get('EXCHANGE_AMOUNT')}  {info.volume} {match.params.name}</em>
                        </Fragment>)}
                        </div>} key="1"
                >
                  <div id="kline_container"></div>
                </Panel>
            </Collapse>
        );
    }
}
export default Trading;
