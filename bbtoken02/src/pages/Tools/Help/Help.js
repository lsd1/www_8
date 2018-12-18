/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-12 00:50:01
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';



import './../Tools.less';




@connect(({ help,global, loading }) => ({
    help,
    global
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class Help extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
        const {dispatch}= this.props;
        dispatch({
            type: 'help/fetchGetHelpList'
        });

    }
    render() {
       
        const {help:{helpList},global:{lang}}=this.props;
        return (
            <Layout  className="tools help container" title={intl.get('FOOT_HELP')}>
                  <article className="container article">
                    <h3 className="headline lin-1">{intl.get('FOOT_HELP')}</h3>
                    <div className="flex-box flex-between">
                       <ul className="help-list">
                         {helpList.map(item=>{
                            return (
                             <li key={item.id} className="help-item">
                                <Link className="link" to={`/${lang}/tools/helpInfo/${item.id}`}>{item.title}</Link><span>{item.createTime}</span>
                             </li>);
                          })}
                       </ul>
                    </div>
                 
                 </article>
            </Layout>

        );
    }
}

export default Help;
