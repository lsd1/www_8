/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-12 17:49:12
 */
import React, { PureComponent } from 'react';

import { Link } from 'dva/router';


import Layout from '@/layouts/';



import './../Serve.less';





class Terms extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
       

    }


    render() {
    
        return (
            <Layout  className="serve news container" title="币币交易">
                  <article className="container article">
                    <h3 className="headline lin-1 mb-lg">币币交易</h3>
                    <p className="fz-md mt-md mb-md">什么是币币交易？</p>
                    <p className="opacity-5">币币交易是指某两种数字资产形成的交易对，两种数字资产的价值变化方向和变化程度可能不同，投资者会判断哪种数字资产价值相对较高，之后通过交易兑换持有该币种。当前硬币数字资产交易平台支持的交易有USDT，BTC、ETH。可以用数字货币（USDT、BTC、ETH）去交易其他数字货币</p>
                    <p className="fz-md mt-md mb-md">币币交易手续费是多少？</p>
                    <p className="opacity-5">您好，交易费率请参考官网下方的费率声明。如有相关优惠活动，我们会发布公告说明</p>
                 </article>
            </Layout>

        );
    }
}

export default Terms;
