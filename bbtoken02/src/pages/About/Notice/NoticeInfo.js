/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-13 17:23:17
 */
import React, { PureComponent } from 'react';
import intl from 'react-intl-universal';
import { connect } from 'dva';
import { withRouter } from 'dva/router';



import Layout from '@/layouts/';
import Crumbs from '@/components/Crumbs/Crumbs';



import './../About.less';



@withRouter
@connect(({ notice,global, loading }) => ({
    global,
    notice
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class NoticeInfo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
        const {dispatch,match}=this.props;
        dispatch({
            type:'notice/fetchGetNoticeInfo',
            payload:{
                id:match.params.id
            }
        });
    }
    render() {
         const {notice:{noticeInfo},global:{lang}}=this.props;
        
        
        return (
                <Layout  className="about notice" title={noticeInfo.title}>
                      <article className="article">
                         <Crumbs title={noticeInfo.title} parentName={intl.get('FOOT_NOTICE')} link={`/${lang}/notice`} />
                         <div className="container">
                            <h2 className="mt-max">{noticeInfo.title}</h2>
                            <p className="mt-sm opacity-5">{noticeInfo.createTime}</p>
                            <div className="mt-max" dangerouslySetInnerHTML={{__html: noticeInfo.content}}> 
                                    
                            </div>
                         </div>
                     </article>
                </Layout>
        );
    }
}

export default NoticeInfo;
