


/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-25 14:27:37
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { NavLink, Link } from 'dva/router';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';
import InputDigit from '@/components/InputDigit/InputDigit';
import SearchForm from '@/components/SearchList/SearchList';
import { Icon, Tag, Form, Select, Button, Pagination, message } from 'antd';
import cx from 'classnames';
import { formatNumber, toFixed, mul } from '@/utils/utils';
import PayIcon from '../component/PayIcon';
import Details from '../component/Details';

import '../Trade.less';
import './Index.less';
const FormItem = Form.Item;
const Option = Select.Option;
const fromData = {
    pageNo: 1,
    pageSize: 10,
    legalCurrency: '',
    paymode: '',
    advertiseType: 1,
    unit: 'BTC'
};


const CreateForm = Form.create()(props => {
    const { form, handleEdit, handleHoverChange, searchList } = props;
    const formItemLayout = {
        labelCol: {
            sm: { span: 8 }
        },
        wrapperCol: {
            sm: { span: 16 }
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            handleEdit(fieldsValue);
        });
    };
    return (
        <Form className="popover-cont" onSubmit={handleSubmit}>
          <FormItem {...formItemLayout} label={intl.get('GLOBAL_PAY_MANAGER')} colon={false} >
              {form.getFieldDecorator('paymode', {
                initialValue:searchList.paymode
              })(
                <Select   style={{ width: '100%' }}>
                      <Option value="">{intl.get('GLOBAL_ALLPAY_MANAGER')}</Option>
                      {/* <Option value="微信">{intl.get('GLOBAL_WECHAT')}</Option> */}
                      <Option value="支付宝">{intl.get('GLOBAL_ALIPAY')}</Option>
                      <Option value="银联">{intl.get('GLOBAL_PAY')}</Option>
                      <Option value="飞马">{intl.get('GLOBAL_FM')}</Option>
                </Select>
              )}
            </FormItem>
            <div className="bt-gray pt-sm flex-box flex-end">
               <Button  onClick={()=>handleHoverChange(0)}>{intl.get('GLOBAL_CANCEL')}</Button>
               <Button className="ml-sm" type="primary" htmlType="submit"><span className="blue">{intl.get('GLOBAL_SEARCH')}</span></Button>
            </div>
       </Form>
    );
});
@Form.create()
@connect(({ trade, business, user, global,loading }) => ({
  global,
    trade,
    user,
    business,
    loading: loading.effects['trade/saveBuySell']
}))
class Trade extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            status:0,
            visible: false,
            shop: true,
            searchList: fromData,
            name: ''
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        const { dispatch, match: { params: { name, type } } } = nextProps;
        const { searchList } = prevState;
        const obj = {
            ...searchList,
            advertiseType: type,
            unit: name
        };
        const flag = name !== searchList.unit || type !== searchList.advertiseType;
        if (flag) {

            dispatch({
                type: 'trade/fetchAdvertisePageByUnit',
                payload: {
                    ...obj,
                    pageSize: fromData.pageSize,
                    pageNo: fromData.pageNo
                }
            });
        }
        return flag ? { searchList: obj } : null;

    }
    componentDidMount() {
            const { dispatch, user: { isLogin }, match: { params: { type, name } } } = this.props;
            dispatch({
                type: 'business/fetchGetCoinAll'
            });
            if (isLogin) {
                dispatch({
                    type: 'user/fetchGetUserSetting'
                });
            }
            this.setState({
                searchList: {
                    ...fromData,
                    advertiseType: type,
                    unit: name
                }
            });

        }
        /**
         * [输入监听]
         * @param  {[type]} status [description]
         * @param  {[type]} val    [description]
         * @return {[type]}        [description]
         */
    changeHandle = (status, val) => {
            let price=0;
            const { form, trade: { preInfo } } = this.props;
            const name = ['amount', 'money'][status];
            if(status === 0&&val!==''){
                   price=parseFloat(mul(`${val}/${preInfo.price}`)).toFixed(8);
                   this.setState({
                      status
                   });
            }else if(status === 1&&val!==''){
                   price=parseFloat(mul(`${val}*${preInfo.price}`)).toFixed(2);
                   this.setState({
                      status
                   });
            }
            form.setFieldsValue({
                [name]:val===''?'':price
            });
        }
        /**
         * [表单提交]
         * @param  {[type]} item [description]
         * @param  {[type]} e    [description]
         * @return {[type]}      [description]
         */
    submitHanlde = (item, e) => {
  
            const { searchList: { advertiseType },status } = this.state;
            const { form, history, dispatch,trade: { preInfo }, user: { userSetting } ,global:{lang} } = this.props;
            e.preventDefault();
            form.validateFields((err, fieldsValue) => {
                if (err) { message.error(intl.get('GLOBAL_EMPTY'));
                    return; }
                  //判断是否实名和绑定手机
                if (userSetting.realVerified !== 1&&+advertiseType===0) {
                         this.savePath(intl.get('GLOBAL_AUTONYME'),`/${lang}/user/identity`);
                } else if ((!userSetting.mobilePhone || userSetting.fundsVerified !== 1)&&+advertiseType===0) {
                        this.savePath(intl.get('TRADE_BIND_PHONE'),`/${lang}/user/safety`);
                } else if (!userSetting.accountVerified&&+advertiseType===0) {
                    this.savePath(intl.get('TRADE_BIND_AUTONYME'),`/${lang}/user/setting`);
                } else if (fieldsValue['money'] > item.maxLimit || fieldsValue['money'] < item.minLimit) {
                    message.error(intl.get('TRADE_PURCHASED',{maxLimit:item.maxLimit,minLimit:item.minLimit}));
                } else {
                  //币转为人民币要提交8位小数
                   if(status===1){
                       fieldsValue.money=parseFloat(mul(`${fieldsValue.amount}*${preInfo.price}`)).toFixed(8);
                   }
                  

                    dispatch({
                        type: 'trade/saveBuySell',
                        payload: {
                            money:fieldsValue.money,
                            amount:+fieldsValue.amount,
                            coinId: item.coinId,
                            price: item.price,
                            id: item.advertiseId,
                            type: +advertiseType,
                            mode: 0,
                            remark: +fieldsValue.amount
                        },
                        callback: (data) => {
                           
                            history.push(`/${lang}/payment/user/${data.data}/${advertiseType}`);
                        }
                    });
                }




            });
        }
        /**
         * [savePath 路径跳转并写入]
         * @param  {[type]} mess [错误消息]
         * @param  {[type]} url  [地址]
         * @return {[type]}      [description]
         */
   savePath(mess,url){
    const {  history,dispatch } = this.props;
      message.error(mess);
       dispatch({
             type:'global/savePathName',
             payload:{
               pathName:history.location.pathname
             }
          });
        history.push(url);
   }
        /**
         * [搜索确认]
         * @param  {[type]} fieldsValue [description]
         * @return {[type]}             [description]
         */
    handleEdit = (fieldsValue) => {
            const { searchList } = this.state;

            this.queryList(Object.assign(searchList, fieldsValue), 1, searchList.pageSize);
            this.setState({
                visible: false
            });

        }
        /**
         * [分页点击]
         * @param  {[type]} current  [description]
         * @param  {[type]} pageSize [description]
         * @return {[type]}          [description]
         */
    handleStandardTableChange = (current, pageSize) => {
        this.queryList(this.state.searchList, current, pageSize);

    }
    queryList(searchData, pageNo, pageSize) {
        let searchList = {
            ...searchData,
            pageNo,
            pageSize
        };
        this.setState({
            searchList
        });
        this.props.dispatch({
            type: 'trade/fetchAdvertisePageByUnit',
            payload: searchList
        });

    }

    handleHoverChange = (state) => {
            this.setState({
                visible: !!state
            });
        }
        /**
         * [修改状态]
         * @param  {[type]} item [description]
         * @return {[type]}      [description]
         */
    shopHandle = (item) => {
        const { dispatch, user: { isLogin }, form } = this.props;
        if (isLogin) {
            form.resetFields();
            Promise.all([dispatch({
                type: 'trade/editAdvertiseStatus',
                payload: item
            }), dispatch({
                type: 'trade/fetchGetPreInfo',
                payload: {
                    id: item.advertiseId
                }
            })]);

        } else {
            message.error(intl.get('GLOBAL_LOGIN_ERR'));
        }

    }

    render() {

        const { visible, searchList} = this.state;
        const { trade: { advertiseList,preInfo }, business: { coinList },global:{lang},loading, form } = this.props;
        const parentMethods = {
            searchList,
            handleEdit: this.handleEdit,
            handleHoverChange: this.handleHoverChange
        };
        const NavLinkItemLayout = {

            className: 'trade-top-item',
            activeClassName: 'active'
        };


        return (
            <Layout className="trade container" title={intl.get('TOP_LEGAL')}>
                 <section className="trade-top flex-box flex-between">
                     <div className="trade-top-left flex-item flex-box">
                          <div className="trade-top-box">
                            <p className="weight">{intl.get('TRADE_BUY')}</p>
                            <div className="trade-top-list mt-sm">
                              {coinList.map((item,index)=>{
                                 return (<NavLink key={`${item.marketPrice}${index}`} {...NavLinkItemLayout} to={`/${lang}/trade/${item.unit}/1`} >{item.unit}</NavLink>);
                              })}
                            </div>
                          </div>
                          <div className="trade-top-box">
                             <p className="weight">{intl.get('TRADE_SELL')}</p>
                             <div className="trade-top-list mt-sm">
                               {coinList.map((item,index)=>{
                                 return (<NavLink key={`${item.marketPrice}${index}`} {...NavLinkItemLayout} to={`/${lang}/trade/${item.unit}/0`} >{item.unit}</NavLink>);
                              })}
                            </div>
                          </div>
                     </div>
                     <SearchForm content={<CreateForm {...parentMethods}  />} visible={visible} onVisibleChange={()=>this.handleHoverChange(1)}>
                        <Tag color="#909197">{searchList.paymode?searchList.paymode:intl.get('GLOBAL_ALLPAY_MANAGER')}</Tag>
                     </SearchForm>
                 </section>
                 <section className="trade-wrap">
                    <div className="trade-wrap-list  opacity-5   flex-box-inline">
                        <span className="item business">{intl.get('TRADE_BUSINESS')}</span> 
                        <span className="item credit">{intl.get('RELEASEADS_NUM')}</span>
                        <span className="item limit">{intl.get('TRADE_LIMIT')}</span>
                        <span className="item price">{intl.get('ORDER_UNIT')}</span>
                        <div className="item operation">
                            <p className="flex-box flex-between">
                                <span className="payways">{intl.get('GLOBAL_PAY_MANAGER')}</span>
                                <span>{intl.get('EXCHANGE_OPERATING')}</span>
                            </p>
                        </div>
                    </div>
                    <ul className="trade-table bt-gray mt-sm">
                      {advertiseList.context&&advertiseList.context.map(item=>{
                        return (<li key={item.advertiseId} className={cx('trade-tr flex-box flex-alignItem',{active:item.shop})}>
                            {!item.shop?(<div className="trade-wrap-list flex-box-inline ">
                                <div className="item business">
                                    <div className="avatar ">{item.memberName.charAt(item.memberName.length-1)}</div>
                                    <Link className="link name ml-md weight" to={`/${lang}/checkUser/user/${item.memberName}`}>{item.memberName}</Link>
                                </div> 
                                <span className="item credit">{formatNumber(toFixed(item.remainAmount,4))} {item.unit}</span>
                                <span className="item limit">{formatNumber(item.minLimit)} - {formatNumber(item.maxLimit)} CNY</span>
                                <span className="item price green">{formatNumber(item.price)} CNY</span>
                                <div className="item operation">
                                    <p className="flex-box flex-between flex-alignItem">
                                    
                                        <span className="payways">
                                           <PayIcon name={item.payMode}  />
                                        </span>
                                        <Button type="primary"  size="large" onClick={()=>this.shopHandle(item)}><span className="blue">{searchList.advertiseType==1?intl.get('TRADE_BUY'):intl.get('TRADE_SELL')}{item.unit}</span></Button>
                                    </p>
                                </div>
                             </div>):(<div className="trade-wrap-shop">
                               <div className="shop-top flex-box flex-alignItem">
                                     <Details item={item} />
                                     <Form onSubmit={(e)=>this.submitHanlde(item,e)} layout="inline" className="flex-item flex-box">
                                         <div className="shop-input flex-box flex-alignItem">
                                         
                                            {form.getFieldDecorator('money', {
                                                    initialValue: '',
                                                    validateFirst:true,
                                                    validateTrigger:'',
                                                    rules: [{ required: true, message: intl.get('GLOBAL_EMPTY') }]
                                                  })(
                                             <InputDigit small="CNY" className="inputMoney" maxLength="14" onChange={(val)=>this.changeHandle(0,val)} />
                                            )}

                                            <Icon className="shop-input-icon" type="swap" />
                                                {form.getFieldDecorator('amount', {
                                                        initialValue: '',
                                                        validateFirst:true,
                                                        validateTrigger:'',
                                                        rules: [{ required: true, message: intl.get('GLOBAL_EMPTY') }]
                                                      })(
                                                <InputDigit small={item.unit} className="inputMoney" maxLength="20" decimal={8} onChange={(val)=>this.changeHandle(1,val)} />
                                                )}
                                         </div>
                                         <div className="shop-btn flex-box flex-end">
                                           <Button className="border-rest" size="large" onClick={()=>this.shopHandle(item)}>{intl.get('GLOBAL_CANCEL')}</Button>
                                           <Button  className="btn-confirm ml-sm " loading={loading} size="large" type="primary" htmlType="submit">{intl.get('TRADE_ORDER')}</Button>
                                         </div>
                                    </Form>
                               </div>
                               <div className="shop-down flex-box flex-between">

                                 <span className="payways flex-box flex-alignItem flex-item">
                                     <PayIcon name={item.payMode} small />
                                   </span>   
                                    <p className="fz-sm gray">{intl.get('TRADE_TIME_LIMIT',{timeLimit:preInfo.timeLimit})}</p>
                               </div>
                             </div>)}
                         </li>);
                      })}
                    </ul>
                    {advertiseList.context&&advertiseList.context.length>0?(
                        <div className="paging tc">
                      <Pagination defaultCurrent={searchList.pageNo} defaultPageSize={searchList.pageSize} total={advertiseList.totalElement} onChange={this.handleStandardTableChange} />
                    </div>
                    ):<div className="tc mt-lg">{intl.get('GLOBAL_NO_DATA')}</div>}
                    
                 </section>
            </Layout>

        );
    }
}

export default Trade;
