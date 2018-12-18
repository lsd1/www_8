/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-08-23 14:25:23
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';



import Layout from '@/layouts/';
import Crumbs from '@/components/Crumbs/Crumbs';



import './../Serve.less';



@withRouter
@connect(({ news, loading }) => ({
    news
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class NewsInfo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
        const {dispatch,match}=this.props;
        dispatch({
            type:'news/fetchGetNewsInfo',
            payload:{
                id:match.params.id
            }
        });
    }
    render() {
         const {news:{newsInfo}}=this.props;
        
        
        return (
                <Layout  className="tools help" title={newsInfo.title}>
                      <article className="article">
                         <Crumbs title={newsInfo.title} parentName="新闻资讯" link="/serve/news" />
                         <div className="container">
                            <h2 className="mt-max">{newsInfo.title}</h2>
                            <p className="mt-sm opacity-5">{newsInfo.createTime}</p>
                            <div className="mt-max" dangerouslySetInnerHTML={{__html: newsInfo.content}}> 
                                    
                            </div>
                         </div>
                     </article>
                </Layout>
        );
    }
}

export default NewsInfo;
