/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-08-23 14:25:15
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import {Pagination  } from 'antd';

import Layout from '@/layouts/';



import './../Serve.less';




@connect(({ news, loading }) => ({
    news
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class News extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
       

    }
    pageHandle=(page, pageSize)=>{
       

    }

    render() {
        const {news:{newsList}}=this.props;
        return (
            <Layout  className="serve news container" title="新闻资讯">
                  <article className="container article">
                    <h3 className="headline lin-1">新闻资讯</h3>
                    <dl className="news-list">
                        <dd className="news-item flex-box flex-between">
                            <Link className="news-img" to={`/serve/newsInfo/1`}>

                            </Link>
                            <div className="news-cont flex-item" >
                              <Link to={`/serve/newsInfo/1`} className="title ellipsis-2 mb-sm">看见”行人却不避让，Uber测试车致死事故或与看见”行人却不避让，Uber测试车致死事故或与看见”行人却不避让，Uber测试车致死事故或与看见”行人却不避让，Uber测试车致死事故或与</Link>
                              <p className="time opacity-5">2018-05-14  12:00:00</p>
                              <p className="desc mt-lg ellipsis-2">有两名知情人表示，尽管Uber的传感器组合已经发现了该名行人，
                              但是由于系统的设定，该车并未采取避让措施，并可能将行人检测视为“误报”但是由于系统的设定，该车并未采取避让措施，并可能将行人检测视为“误报
                              但是由于系统的设定，该车并未采取避让措施，并可能将行人检测视为“误报
                              但是由于系统的设定，该车并未采取避让措施，并可能将行人检测视为“误报</p>
                            </div>
                        </dd>
                    </dl>
                    <div className="paging tc">
                      <Pagination defaultCurrent={1} defaultPageSize={2} hideOnSinglePage total={5} onChange={this.pageHandle} />
                    </div>
                 </article>
            </Layout>

        );
    }
}

export default News;
