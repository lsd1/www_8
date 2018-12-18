/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-12 00:49:16
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import intl from 'react-intl-universal';

import Layout from '@/layouts/';



import './../Tools.less';




@connect(({ digiccy,global, loading }) => ({
  global,
    digiccy
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class Digiccy extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
        const {dispatch}= this.props;
       

    }
 
    render() {
      const {global:{lang}}=this.props;
        
        return (
            <Layout  className="tools digiccy container" title={intl.get('FOOT_DIGICCY')}>
                  <article className="article flex-box flex-between">
                      <aside className="aside">
                         <h5 className="aside-title mb-lg">{intl.get('FOOT_DIGICCY')}</h5>
                         <p className="item active"><Link to={`/`}>USTD（Tether）</Link></p>
                         <p className="item"><Link to={`/`}>BTC（Tether）</Link></p>
                         <p className="item"><Link to={`/`}>ETH（Tether）</Link></p>
                         <p className="item"><Link to={`/`}>ECH</Link></p>
                      </aside>
                      <section className="content">
                          <h4 className="content-title bb-gray">USTD（Tether）</h4>
                          <div className="desc mt-md">
                            11111
                          </div>
                      </section>
                 </article>
            </Layout>

        );
    }
}

export default Digiccy;
