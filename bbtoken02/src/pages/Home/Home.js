/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-25 11:26:13
 */
import React, { PureComponent,Fragment } from 'react';
import { connect } from 'dva';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';
import { Carousel, Icon, Tabs, Table,message } from 'antd';
import { Link } from 'dva/router';


import { mul, toFixed} from '@/utils/utils';


import './Home.less';

const TabPane = Tabs.TabPane;

@connect(({ home,user, global,notice, loading }) => ({
    home,
    user,
    notice,
    global,
    loading: loading.effects['home/fetchGetThumbTrend']
}))
class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.stompClient=null;
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        const { dispatch } = this.props;
        Promise.all([dispatch({
            type: 'home/fetchGetBanner',
            payload: { sysAdvertiseLocation: 1 }
        }), 
        dispatch({
            type: 'home/fetchGetThumbTrend'
        }),
         dispatch({
            type: 'global/socketLink',
            payload:{
                url:'/market/market-ws'
            },
            callback: (stompClient) => {
                this.stompClient=stompClient;
                this.stompClient.connect({}, () => {
                    //订阅价格变化消息
                    this.stompClient.subscribe('/topic/market/thumb', (data) => {
                        const map = JSON.parse(data.body);
                        dispatch({
                            type: 'home/fetchGetThumbInfo',
                            payload: map
                        });
                    });
                });
            }
        }),dispatch({
            type: 'notice/fetchGetNoticeList',
            payload:{
                pageNo:1,pageSize:3
            }
        })]);

    }
    componentWillUnmount() {
        const { dispatch } = this.props;
         dispatch({
            type: 'global/socketClose',
            payload:{
                stompClient:this.stompClient
            }
        });
    }
     //新增,取消收藏
    favorAdd=(e,record)=>{
      e.preventDefault();
      e.stopPropagation();
      const {dispatch,user:{isLogin}}=this.props;
      if(isLogin){
      
          dispatch({
            type:'home/fetchEditFavorAdd',
            payload:{
                 ...record,
                 type:+record.isFavor
            }
          });
      }else{
         message.error(intl.get('GLOBAL_LOGIN_ERR'));

      }
    }


    callback = () => {
        console.log(1);
    }

    goLink(record){
      const {history,global:{lang}}=this.props;
      history.push(`/${lang}/exchange/${record.symbol}`);
    }

    render() {
        const { data } = this.state;
     
        const { home: { bannerData,favorList, thumbTrendData },global:{lang}, notice:{noticeList},loading, global: { USD } } = this.props;
        const columns = [{
            title: '',
            dataIndex: 'lastDayClose',
            key: 'lastDayClose',
            align: 'center',
            
            render: (text,record) => (<Fragment><Icon className="tab-star mr-sm" type={record.isFavor?'star':'star-o'}  onClick={(e)=>this.favorAdd(e,record)} /></Fragment>)
        }, {
            title: intl.get('HOME_CHECK'),
            dataIndex: 'symbol',
            key: 'symbol',
            sorter: (a, b) => {
                return a.symbol.charCodeAt(0) - b.symbol.charCodeAt(0);
            },
            render: text => {
                const arr = text.split('/');
                return (<span>{arr[0]}<em className="opacity-5"> / {arr[1]}</em></span>);
            }
        }, {
            title: intl.get('EXCHANGE_NEW'),
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => a.price - b.price,
            render: (text, record) => {
                return (record.base == 'CNY' ? <span>{'￥'+text}</span> : <span>{`${text}`}<em className="opacity-5">{`≈¥${record.cny}`}</em></span>);
            }
        }, {
            title: intl.get('HOME_GROWTH'),
            dataIndex: 'rose',
            key: 'rose',
            sorter: (a, b) => a.chg - b.chg,
            render: (text, record) => {
                const className = parseFloat(record.rose) < 0 ? 'red' : 'green';
                const block = parseFloat(record.rose) < 0 ? 'caret-down' : 'caret-up';
                return (<span className={className}>{text}<Icon style={{fontSize:12,marginLeft:3}} type={block} className={className} /></span>);

            }
        }, {
            title:  intl.get('HOME_HIGH'),
            dataIndex: 'high',
            key: 'high',
            render: (text, record) => {
                const rmb = toFixed(mul(`${text}*${USD}`), 2);
                return (record.base == 'CNY' ? <span>{'￥'+text}</span> : <span>{`${text}`}<em className="opacity-5">{`≈¥${rmb}`}</em></span>);
            }
        }, {
            title:  intl.get('HOME_BASS'),
            dataIndex: 'low',
            key: 'low',
            render: (text, record) => {
                const rmb = toFixed(mul(`${text}*${USD}`), 2);
                return (record.base == 'CNY' ? <span>{'￥'+text}</span> : <span>{`${text}`}<em className="opacity-5">{`≈¥${rmb}`}</em></span>);
            }
        }, {
            title: `24H${intl.get('EXCHANGE_AMOUNT')}`,
            dataIndex: 'volume',
            key: 'volume',
            align: 'right'
        }];

        return (
            <Layout content white className="home" title={intl.get('HOME')}>
               <div  className="carousel">
                    {bannerData.length>0&&(
                    <Carousel autoplay>
                       {bannerData.map(item=>{
                        return (<a href={`${item.linkUrl}`}  target="_blank"  key={item.startTime} className="carousel-item"><img className="carousel-item-img" alt="" src={item.url} /></a>);
                       })}
                    </Carousel>
                    )}
                </div>
                <div className="rollNotice page-pd flex-box flex-box-center  tc">
                    
                       {noticeList.content.map(item=>{
                        return ( <span key={item.id} className="rollNotice-item"><Link className="white"  to={`/${lang}/noticeInfo/${item.id}`} >{item.title}</Link></span>);
                       })}


                </div>
                <div className="page-pd mt-lg">
                  <div className="tabs-box">
                    <Tabs onChange={this.callback} type="card">
                        <TabPane tab={<span className="tab-icon flex-box flex-box-center"><i className="icon-home icon-home-3 mr-sm"></i>USDT</span>} key="1">
                           <Table 
                             rowKey={record => record['price']} 
                             loading={loading} 
                             locale={{emptyText:intl.get('GLOBAL_NO_DATA')}} 
                             columns={columns} 
                             dataSource={thumbTrendData} 
                             pagination={false} 
                             onRow={(record) =>({onClick:()=>this.goLink(record)})}
                             size="middle" />
                        </TabPane>
                        <TabPane tab={<span className="tab-icon flex-box flex-box-center"><i className="icon-home icon-home-2 mr-sm"></i>ETH</span>} key="2">
                          <Table 
                            rowKey={record => record['price']} 
                            columns={columns} 
                            locale={{emptyText:intl.get('GLOBAL_NO_DATA')}} 
                            dataSource={data} 
                            pagination={false} 
                            onRow={(record) =>({onClick:()=>this.goLink(record)})}
                            size="middle" />
                        </TabPane>
                        <TabPane tab={<span className="tab-icon flex-box flex-box-center"><i className="icon-home icon-home-1 mr-sm"></i>BTC</span> } key="3">
                          <Table 
                            rowKey={record => record['price']} 
                            columns={columns} 
                            locale={{emptyText:intl.get('GLOBAL_NO_DATA')}} 
                            dataSource={data} 
                            pagination={false} 
                            onRow={(record) =>({onClick:()=>this.goLink(record)})}
                            size="middle" />
                        </TabPane>
                        <TabPane tab={<span className="tab-icon flex-box flex-box-center"><Icon className="icon-star" type="star"  />{intl.get('EXCHANGE_OPTIONAL')}</span>} key="4">
                           <Table 
                             rowKey={record => record['price']} 
                             columns={columns} 
                             locale={{emptyText:intl.get('GLOBAL_NO_DATA')}} 
                             dataSource={favorList} 
                             pagination={false} 
                             oonRow={(record) =>({onClick:()=>this.goLink(record)})}
                             size="middle" />
                        </TabPane>
                    </Tabs>
                  </div>
                </div>
               </Layout>

        );
    }
}

export default Home;
