/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-12 17:42:46
 */
import React, { PureComponent } from 'react';




import Layout from '@/layouts/';



import './../Serve.less';





class TradingRule extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
       

    }


    render() {
    
        return (
            <Layout  className="serve news container" title="法币交易区买入规则">
                  <article className="container article">
                    <h3 className="headline lin-1 mb-lg">法币交易区买入规则</h3>
                    <p className="opacity-5">1、法币交易区买入时需完成实名认证。</p>
                    <p className="opacity-5">2、买家需在“广告”规定的时间内完成付款，并点击确认付款按钮。买家主动取消订单或者订单超时取消，系统将记录买家取消订单一次。</p>
                    <p className="opacity-5">3、买家当日累计3笔取消订单，会限制当日买入功能。</p>
                    <p className="opacity-5">4、因为卖家未提供有效支付方式，导致系统记录买家取消订单，买家因此被限制当天买入功能的，可以联系平台官方客服，要求解除限制。</p>
                    <p className="opacity-5">5、请勿在未付款或不付款的情况下点击“我已付款”，该行为是属于恶意行为。当此类订单发生申诉，卖家可拒绝成交，情节严重的，系统将冻结买家账户。</p>
                    <p className="opacity-5">6、如果您在10分钟内未付款且不回应卖家，当此订单出现申诉时，卖家可拒绝成交。</p>
                    <p className="opacity-5">7、请所有的买家用户选择与您实名一致的支付账户如银行卡来付款，如果您使用非实名账户付款，当此订单出现申诉时，卖家可选择退款不成交。</p>
                    <p className="opacity-5">8、为了保证交易的及时性，请选择实时到账的汇款方式，例如支付宝、微信支付、银行实时汇款等。节假日或工作日的17：00-9：00，超过5万以上的汇款请分批支付，以确保到款的及时性。买家点击“我已付款”两个小时后，卖家未收到付款，订单出现申诉时，卖家可以拒绝成交。</p>
                    <p className="opacity-5">9、进行中的订单对应的数字货币资产会锁定在平台；如您转账完成，并点击“我已付款”10分钟后，卖家未放币，则您可选择申诉，如您完全符合以上操作，我们会判定资产属于您。</p>
                 </article>
            </Layout>

        );
    }
}

export default TradingRule;
