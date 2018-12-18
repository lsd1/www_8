/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-13 09:31:33
 */
import React, { PureComponent } from 'react';
import intl from 'react-intl-universal';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {Pagination  } from 'antd';

import Layout from '@/layouts/';



import './../About.less';




@connect(({ notice,global, loading }) => ({
    notice,
    global
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class Notice extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
        const {dispatch}= this.props;
        dispatch({
            type: 'notice/fetchGetNoticeList',
            payload:{
                pageNo:1,
                pageSize:10
            }
        });

    }
    pageHandle=(page, pageSize)=>{
        const {dispatch}= this.props;
        dispatch({
            type: 'notice/fetchGetNoticeList',
            payload:{
                pageNo:page,
                pageSize
            }
        });

    }

    render() {
        const {notice:{noticeList},global:{lang}}=this.props;
        return (
            <Layout  className="about notice container" title={intl.get('FOOT_NOTICE')}>
                  <article className="container article">
                    <h3 className="headline lin-1">{intl.get('FOOT_NOTICE')}</h3>
                    <div className="flex-box flex-between">
                       <ul className="notice-list">
                         {noticeList.content.map(item=>{
                            return (
                             <li key={item.id} className="notice-item">
                                <Link className="link" to={`/${lang}/noticeInfo/${item.id}`}>{item.title}</Link><span>{item.createTime}</span>
                             </li>);
                          })}
                       </ul>
                    </div>
                    <div className="paging tc">
                      <Pagination defaultCurrent={1} defaultPageSize={10} hideOnSinglePage total={noticeList.totalElements} onChange={this.pageHandle} />
                    </div>
                 </article>
            </Layout>

        );
    }
}

export default Notice;
