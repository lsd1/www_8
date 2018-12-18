/*
 * @Author: Administrator
 * @Date:   2018-08-07 21:53:53
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-28 10:49:28
 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Icon, Tabs, Table,message } from 'antd';
import { Link } from 'dva/router';
import cookie from 'js-cookie';
import cx from 'classnames';
import intl from 'react-intl-universal';


const TabPane = Tabs.TabPane;

@withRouter
@connect(({exchange,global,property,  user, notice, home, loading }) => ({
     global,
    exchange,
    property,
    user,
    home,
    notice,
    loading: loading.effects['home/fetchGetThumbTrend']
}))
class Aside extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            eye: "eye-o",
            status: false
        };
    }
    componentDidMount() {
            const { dispatch,user:{isLogin}} = this.props;
            const eye=cookie.get('eye');
            dispatch({
                type: 'notice/fetchGetNoticeList'
            });
            if(isLogin){
              dispatch({
                    type: "property/fetchGetWalletList"
              });
            }
            if(eye){
              this.setState({
                    eye:eye
              });
            }
        }
        /**
         * [是否显示余额]
         * @return {[type]} [description]
         */
    switchHandle = () => {
            const { eye } = this.state;
            const data=eye.includes('o') ? 'eye' : 'eye-o';
            this.setState({
                eye: data
            });
            cookie.set('eye',data);
        }
        /**
         * [金额转换]
         * @return {[type]} [description]
         */
    switchPrice = () => {
        this.setState({
            status: !this.state.status
        });
    }
   //新增,取消收藏
    favorAdd=(record,e)=>{
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
         message.err(intl.get('GLOBAL_LOGIN_ERR'));

      }
      

    }
    //跳转
    goLink(record){
        const {global:{lang}}=this.props;
        window.location.href=`//${location.host}/${lang}/exchange/${record.symbol}`;
   
    }

    
    render() {
        const { eye, status } = this.state;
        const {property: {  totalUSTD, totalCNY }, home: { thumbTrendData,favorList },user: { isLogin }, notice: { noticeList }, global:{lang},loading } = this.props;


        const columns = [{
            title: intl.get('EXCHANGE_CURRENCY'),
            dataIndex: 'symbol',
            width: '30%',
            sorter: (a, b) => a.symbol.charCodeAt(0) - b.symbol.charCodeAt(0),
            render: (text,record) => {
                const val = text.split('/');
                return (<Fragment><Icon className="tab-star mr-sm fz-xs" type={record.isFavor?'star':'star-o'}   onClick={(e)=>this.favorAdd(record,e)}/>{val[0]}</Fragment>);
            }
        }, {
            title: `${intl.get('EXCHANGE_NEW')}${status?'CNY':''}`,
            dataIndex: 'price',
            width: '35%',
            sorter: (a, b) => a.price - b.price,
            render: (text, record) => {
                const val = status ? record.cny : text;
                return (<Fragment>{val}</Fragment>);
            }
        }, {
            title: intl.get('EXCHANGE_GROWTH'),
            dataIndex: 'rose',
            width: '25%',
            sorter: (a, b) => a.chg - b.chg,
            render: (text, record) => {
                const className = parseFloat(record.rose) < 0 ? 'red' : 'green';
                return (<span className={className}>{text}</span>);
            }
        }];

        return (
            <aside className="aside mt-sm">
                   <div className="aside-top">
                     {isLogin?(<div className="aside-price cont-pd">
                          <p className="aside-price-title pt-md">{intl.get('EXCHANGE_DISCOUNT')}：</p>
                          <p className="aside-price-info mt-md  flex-box flex-between flex-alignItem">
                             <span>{eye==='eye-o'?totalUSTD:'****'} <em>USDT</em><em>&nbsp;&nbsp;≈&nbsp;&nbsp;{eye==='eye-o'?totalCNY:'****'} CNY</em></span>
                             <Icon className="pointer" type={eye} style={{fontSize:16}} onClick={this.switchHandle} />
                          </p>
                       </div>):(<p className="pt-md pl-md"><Link  className="yellow" to={`/${lang}/login`}>{intl.get('GLOBAL_LOGIN')}</Link>{intl.get('RELEASE_OR')}<Link className="yellow" to={`/${lang}/register`}>{intl.get('GLOBAL_REGISTER')}</Link>{intl.get('EXCHANGE_TRADING')}</p>)}
                       
                       
                       <div className="aside-market  cont-pd mt-md">
                          <div className="aside-drawer bt-1   clear">
                             <em className="small mt-sm pull-left">
                                  {intl.get('EXCHANGE_MARKET')}
                             </em>
                             <div className="serach mt-sm pull-right clear">
                                 
                                  <div className={cx('conversion pull-left pointer',{active:status})} onClick={this.switchPrice}>
                                     <Icon  type="xingzhuang" />
                                     <span className="ml-sm">CNY</span>
                                  </div>
                             </div>
                          </div>
                       </div>
                       <div className="exchange-tabs">  
                           <Tabs defaultActiveKey="1" onChange={this.callback}>
                            <TabPane tab="USDT" key="1">
                              <div className="aside-list">
                                 <Table 
                                   rowKey={record => record['price']}
                                   loading={loading} 
                                   locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                                   onRow={(record) =>({onClick:()=>this.goLink(record)})}
                                   columns={columns}
                                   dataSource={thumbTrendData} 
                                   pagination={false} 
                                   size="middle" 
                                   />
                              </div>
                            </TabPane>
                            <TabPane tab="BTC" key="2">
                               <div className="aside-list">
                                 <Table 
                                   rowKey={record => record['price']}
                                   loading={loading} 
                                   locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                                   onRow={(record) =>({onClick:()=>this.goLink(record)})}
                                   columns={columns}
                                   dataSource={[]} 
                                   pagination={false} 
                                   size="middle" 
                                    />
                                </div>
                              </TabPane>
                            <TabPane tab="ETH" key="3">
                               <div className="aside-list">
                                 <Table 
                                   rowKey={record => record['price']}
                                   loading={loading} 
                                   locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                                   onRow={(record) =>({onClick:()=>this.goLink(record)})}
                                   columns={columns}
                                   dataSource={[]} 
                                   pagination={false} 
                                   size="middle" 
                                    />
                                   </div>
                                </TabPane>
                            <TabPane  tab={<span className="flex-box-inline flex-box-center"><Icon className="side-icon" type="star"  />自选</span>} key="4">
                              <div className="aside-list">
                                 <Table 
                                   rowKey={record => record['price']}
                                   loading={loading} 
                                   locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                                   onRow={(record) =>({onClick:()=>this.goLink(record)})}
                                   columns={columns}
                                   dataSource={favorList} 
                                   pagination={false} 
                                   size="middle" 
                                   />
                                   </div>
                            </TabPane>
                          </Tabs>
                       </div>
                   </div>
                   <div className="aside-down mt-sm">
                        <h3 className="title  cont-pd">
                             {intl.get('FOOT_NOTICE')}
                        </h3>
                        <ul className="aside-notice cont-pd">
                          {noticeList.content.map(item=>{
                            return (
                              <li key={item.id} className="aside-notice-item">
                               <Link to={`/${lang}/noticeInfo/${item.id}`} target="_blank" className="aside-notice-link"><p>{item.title}</p></Link>
                               <p className="aside-notice-time fz-sm tr lin-1">{item.createTime}</p>
                            </li>);
                          })}
                        </ul>
                   </div>
                </aside>
        );
    }
}
export default Aside;
