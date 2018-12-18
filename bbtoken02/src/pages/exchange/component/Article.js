/*
 * @Author: Administrator
 * @Date:   2018-08-07 21:53:53
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-27 14:36:46
 */

import React, { PureComponent } from 'react';
import { connect } from 'dva';

import cx from 'classnames';
import LazyLoad from 'react-lazy-load';
import Loadable from 'react-loadable';
import { Collapse,Spin } from 'antd';
import intl from 'react-intl-universal';
import Authorized from '@/components/Authorized/Authorized';
import TradingView from './TradingView';
import Deal from './Deal';



const LoadableEntrust = Loadable({
  loader: () => import('./Entrust'),
  loading() {
    return (<div className="tc pt-lg"><Spin size="large" /></div>);
  }
});
const LoadableRealTime = Loadable({
  loader: () => import('./RealTime'),
  loading() {
    return (<div className="tc pt-lg"><Spin size="large" /></div>);
  }
});
// const LoadableMSCurrency = Loadable({
//   loader: () => import('./MSCurrency'),
//   loading() {
//     return (<div className="tc pt-lg"><Spin size="large" /></div>);
//   }
// });






const Panel = Collapse.Panel;


@connect(({ home,exchange,user  }) => ({
    home,exchange,user
}))
class Aside extends PureComponent {

    constructor(props) {
        super(props);
        this.emptyForm=null;
        this.state = {
            height:625,
            tabState: 1,
            price:null         
        };

    }
    componentDidMount() {

    }
   
    switchHandle = (tabState) => {
        this.setState({ tabState });
    }
    //获取选中的价格
    bindPrice=(bindPrice)=>{
      this.setState({
        price:bindPrice
      });

      //重置表单值
      this.emptyForm.resetForm();
    }
    //加载成功后高度隐藏
    scrollLazy=()=>{
      this.setState({
        height:'auto'
      });
    }

    render() {
      
        const {  tabState,price,height} = this.state;
        const {stompClient,info,newPrice, exchange:{
          LatestTradeData,plateSellData,plateBuyData, depthList,depthMin,depthMax,ticks},
        sellInfo,buyInfo,initDeal,againInit } = this.props;

        const sellPrice=price===null?(plateSellData.length>0?(plateSellData[6].price===0?newPrice:plateSellData[6].price):newPrice):price;
        const buyPrice=price===null?(plateBuyData.length>0?(plateBuyData[0].price===0?newPrice:plateBuyData[0].price):newPrice):price;
      
        const symbol=info.symbol&& info.symbol.split('/');
       

        return (
            <article className="content mt-sm flex-item ml-sm">
                <TradingView info={info} stompClient={stompClient} />
                <section className="mt-sm flex-box flex-between">
                  <div className="panel-left ">
                     <Collapse defaultActiveKey={['1']} >
                        <Panel disabled header={<div className="flex-box flex-alignItem panel-deal-tab">
                        <p className={cx('fz-md','pointer',{active:tabState===1})} onClick={()=>this.switchHandle(1)}>{intl.get('EXCHANGE_LIMIT')}</p>
                        <p  className={cx('fz-md','pointer','ml-lg',{active:tabState===2})} onClick={()=>this.switchHandle(2)}>{intl.get('EXCHANGE_CITY')}</p></div>} key="1"
                        >
                          <Deal againInit={againInit} initDeal={initDeal} sellInfo={sellInfo} buyInfo={buyInfo}   onRef={(ref)=>{this.emptyForm=ref;}}  newPrice={newPrice} tabState={tabState} sellPrice={sellPrice}  buyPrice={buyPrice} /> 
                        </Panel>
                    </Collapse>
                  </div>
                  <div className="panel-right flex-item ml-sm">
                     <Collapse defaultActiveKey={['2']} >
                        <Panel showArrow={false} disabled header={<div className="flex-box flex-alignItem">{intl.get('EXCHANGE_NEW')}&nbsp;{info.price} <em className="opacity-5 fz-sm ml-sm">USDT ≈ {info.cny} CNY</em> </div>} key="2">
                          <div className="panel-buy main-pd">
                            <dl className="panel-price">
                             <dt className="panel-price-dt flex-box flex-wrap">
                                 <span className="panel-price-item"></span>
                                 <span className="panel-price-item">{intl.get('EXCHANGE_PRICE')}({symbol&&symbol[1]})</span>
                                 <span className="panel-price-item">{intl.get('RELEASEADS_NUM')}({symbol&&symbol[0]})</span>
                                 <span className="panel-price-item">{intl.get('EXCHANGE_GRAND')}({symbol&&symbol[0]})</span>
                              </dt>
                              
                              {plateSellData.map(item=>{
                              return (
                                <dd key={item.index} className="panel-price-dd flex-box flex-wrap" onClick={()=>this.bindPrice(item.price)}>
                                 <span className="panel-price-item"><span className="red">{intl.get('EXCHANGE_SELL')}{item.index}</span></span>
                                 <span className="panel-price-item">{item.price || '-'}</span>
                                 <span className="panel-price-item">{item.amount || '-'}</span>
                                 <span className="panel-price-item">{item.totalAmount || '-'}</span>
                              </dd>);
                              })}
                            </dl>
                            <dl className="panel-price bt-1 mt-sm pt-sm">
                              {plateBuyData.map(item=>{
                              return (
                                <dd key={item.index} className="panel-price-dd flex-box flex-wrap" onClick={()=>this.bindPrice(item.price)}>
                                 <span className="panel-price-item "><span className="green">{intl.get('EXCHANGE_BUY')}{item.index}</span></span>
                                 <span className="panel-price-item">{item.price || '-'}</span>
                                 <span className="panel-price-item">{item.amount || '-'}</span>
                                 <span className="panel-price-item">{item.totalAmount || '-'}</span>
                              </dd>);
                              })}
                            </dl>
                          </div>
                        </Panel>
                    </Collapse>
                  </div>
                </section>
                <Authorized>
                   <LazyLoad offsetTop={50} height={height} onContentVisible={this.scrollLazy}>
                     <LoadableEntrust initDeal={initDeal} />
                    </LazyLoad>
                </Authorized>
                <LazyLoad offsetBottom={50} height={470}>
                   <LoadableRealTime {...{ticks,LatestTradeData,depthList,depthMin,depthMax}} />
                </LazyLoad>
                
                      
            </article>
        );
    }
}
export default Aside;
