/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-12 17:41:04
 */
import React, { PureComponent } from 'react';




import Layout from '@/layouts/';



import './../Serve.less';





class ReleaseRule extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
       

    }


    render() {
    
        return (

            <Layout  className="serve news container" title="发布广告规则">
                  <article className="container article">
                    <h3 className="headline lin-1 mb-lg">发布广告规则</h3>
                    <p className="opacity-5">1、完成商家认证成为商家才能发布广告。</p>
                    <p className="opacity-5">2、发布广告免费。</p>
                    <p className="opacity-5">3、交易完成后收取广告方交易额的1%作为手续费。</p>
                    <p className="opacity-5">4、如您不在设备旁或离线无法及时处理订单，请提前下架广告。此类广告如产生订单，属于正常订单，按正常交易流程处理。</p>
                    <p className="opacity-5">5、发布求购广告时，当天累计取消订单达到3笔的，系统会限制您当天的买入功能。</p>
                 </article>
            </Layout>

        );
    }
}

export default ReleaseRule;
