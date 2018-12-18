/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-11-09 21:30:19
 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';

import Layout from '@/layouts/';
import { Checkbox, Button, message } from 'antd';

import intl from 'react-intl-universal';
import Aside from '../component/Aside';
import Rush from '../component/Rush';
import Carry from '../component/Carry';
import Deal from '../component/Deal';
import { formatNumber, scientificToNumber } from '@/utils/utils';
import LoadingIcon from '@/components/Loading/Loading';


import '../Property.less';
import './Account.less';



@connect(({ property, loading }) => ({
    property,
    loading: loading.effects['property/fetchGetWalletList']
}))
class Account extends PureComponent {
    constructor(props) {
        super(props);
        this.refTable = React.createRef();
        this.state = {
            carryInfo: {}
        };
    }
    componentDidMount() {
        const { dispatch } = this.props;

        Promise.all([dispatch({
            type: "property/fetchGetWalletList"
        }), dispatch({
            type: "property/feitchGetSupportInfo"
        })]);
    }
    componentWillUnmount() {
            const { dispatch } = this.props;
            dispatch({
                type: 'property/clear'
            });
        }
        /**
         * [隐藏为0的资产]
         * @param  {[type]} event [description]
         * @return {[type]}       [description]
         */
    hideCurrencyHandle = (event) => {
            const { dispatch } = this.props;
            dispatch({
                type: "property/editWalletList",
                payload: {
                    price: 0,
                    checked: event.target.checked
                }
            });
        }
        /**
         * [根据类型切换]
         * @param  {[type]} event [description]
         * @return {[type]}       [description]
         */
    switchHandle = (active, index, unit, event) => {

        const { offsetLeft, offsetWidth } = event.target;
        const { dispatch, property: { walletList, supportInfo } } = this.props;
        const left = offsetLeft - this.refTable.current.offsetLeft + offsetWidth / 2 - 8;
        const list = supportInfo.find(item => unit === item.unit);

        if (!list && active === 2) {
            message.error(intl.get('PROPERTY_OF_COIN'));
            return;
        } else if (walletList[index].balance === 0 && active === 2) {
            message.error(intl.get('PROPERTY_WITHDRAW'));
            return;
        }

        this.setState({
            carryInfo: list
        });
        dispatch({
            type: "property/fetchWalletListType",
            payload: {
                index,
                left: left,
                active: walletList[index].active === active ? 0 : active
            }
        });



    }
    switchRender = (text, state, carryInfo) => {

        switch (state) {
            case 1:
                return <Rush item={text} />;
            case 2:
                return <Carry item={text} carryInfo={carryInfo} />;
            case 3:
                return <Deal item={text} />;
            default:
                return null;
        }
    }




    render() {
        const { carryInfo } = this.state;
        const { property: { walletList, totalUSTD, totalCNY }, loading } = this.props;
        return (
            <Layout back white className="pproperty account container">
                   <div className="flex-box ">
                      <Aside  />
                      <section className="pproperty-right flex-item ml-lg box pb-md">
                         <div className="account-top flex-box flex-alignItem flex-between  pd-20">
                             <div className="account-top-left">
                                 {intl.get('PROPERTY_TOTAL_PRICE')}：<span className="fz-md">{totalUSTD} USDT <em className="opacity-5">≈ {totalCNY} CNY</em></span>
                             </div>
                             <div className="account-top-right">
                                  <Checkbox onChange={this.hideCurrencyHandle}> {intl.get('PROPERTY_HIDDEN')}</Checkbox>
                                 
                             </div>
                         </div>
                         
                         <div className="account-box pd-20 ">
                            <div className="account-table" ref={this.refTable}>
                              <dl className="account-header account-tr flex-box flex-alignItem">
                                 <dd className="account-td wd-130 opacity-5">{intl.get('EXCHANGE_CURRENCY')}</dd>
                                 <dd className="account-td wd-150 opacity-5 tc">{intl.get('EXCHANGE_AVAILABLE')}</dd>
                                 <dd className="account-td wd-270 opacity-5 tc">{intl.get('PROPERTY_FREEZE')}</dd>
                                 <dd className="account-td flex-item tr opacity-5">{intl.get('EXCHANGE_OPERATING')}</dd>
                              </dl>
                              {!loading?(<div className="account-table   bb-gray">
                               {walletList.map((item,index)=>{
                                return (<Fragment key={item.id}>
                                  <dl className="flex-box account-tr  flex-alignItem bt-gray">
                                   <dd className="account-td wd-130">{item.coin.unit}</dd>
                                   <dd className="account-td wd-150 tc">{formatNumber(scientificToNumber(item.balance))}</dd>
                                   <dd className="account-td wd-270 tc">{formatNumber(scientificToNumber(item.frozenBalance))}</dd>
                                   <dd className="account-td flex-item tr">
                                      <Button className="account-btn" onClick={(e)=>this.switchHandle(1,index,item.coin.unit,e)}><span className="yellow">{intl.get('EXCHANGE_COIN')}</span></Button>
                                      <Button className="account-btn" onClick={(e)=>this.switchHandle(2,index,item.coin.unit,e)}><span className="yellow">{intl.get('PROPERTY_TICKING')}</span></Button>
                                    
                                   </dd>
                                 </dl>
                                 {this.switchRender(item,item.active,carryInfo)}
                                 </Fragment>);

                               })}
                                 
                              </div>):<LoadingIcon height={300} title="" />}
                              
                              
                            </div>

                         </div>
                      </section>
                   </div>
             </Layout>
        );
    }
}

export default Account;
