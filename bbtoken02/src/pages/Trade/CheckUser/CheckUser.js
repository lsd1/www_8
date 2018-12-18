
/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-29 16:45:31
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';

import intl from 'react-intl-universal';
import Layout from '@/layouts/';
import { Icon, Button,Form,message } from 'antd';
import cx from 'classnames';
import { formatNumber, mul} from '@/utils/utils';
import InputDigit from '@/components/InputDigit/InputDigit';
import PayIcon from '../component/PayIcon';
import Details from '../component/Details';



import '../Trade.less';
import './CheckUser.less';


const Item=Form.create()(props => {
  const {shopHandle,submitHanlde,item,preInfo,status,changeHandle,form}=props;




     return     (<div  className="item ">
                           {!item.shop?(
                            <div className="item-def flex-box flex-alignItem">
                               <div className="item-icon flex-box flex-box-center">
                                  <Icon className={cx('checkUser-icon',`icon-${item.unit}`)} type={item.unit} />
                               </div>
                               <div className="item-price">
                                  <p className="green">{formatNumber(item.price)} CNY/{item.unit}</p>
                                  <p><span className="opacity-5">{intl.get('TRADE_LIMIT')}：</span>{formatNumber(item.minLimit)} - {formatNumber(item.maxLimit)} </p>
                               </div>
                               <div className="item-mode">
                                     <PayIcon name={item.payMode} />
                               </div>
                               <div className="item-btn tr">
                                  <Button type="primary" size="large" onClick={()=>shopHandle(item,status,form)}><span className="blue main-pd">{[intl.get('RELEASEADS_SELL_SET'),intl.get('RELEASEADS_BUY_ON')][status]}</span></Button>
                               </div>
                          </div>):(
                          <div className="item-edit">
                          
                              <div className="shop-top flex-box flex-alignItem">
                                     <Details item={item} />
                                     <Form onSubmit={(e)=>submitHanlde(item,e,status,form)} layout="inline" className="flex-item flex-box">
                                         <div className="shop-input flex-box flex-alignItem">
                                         
                                            {form.getFieldDecorator('money', {
                                                    initialValue: '',
                                                    validateFirst:true,
                                                    validateTrigger:'',
                                                    rules: [{ required: true, message: intl.get('GLOBAL_EMPTY') }]
                                                  })(
                                             <InputDigit small="CNY" className="inputMoney" maxLength="14" onChange={(val)=>changeHandle(0,val,form)} />
                                            )}

                                            <Icon className="shop-input-icon" type="swap" />
                                                {form.getFieldDecorator('amount', {
                                                        initialValue: '',
                                                        validateFirst:true,
                                                        validateTrigger:'',
                                                        rules: [{ required: true, message: intl.get('GLOBAL_EMPTY') }]
                                                      })(
                                                <InputDigit small={item.unit} className="inputMoney" maxLength="20" decimal={8} onChange={(val)=>changeHandle(1,val,form)} />
                                                )}
                                         </div>
                                         <div className="shop-btn flex-box flex-end">
                                           <Button className="border-rest" size="large" onClick={()=>shopHandle(item,status,form)}>{intl.get('GLOBAL_CANCEL')}</Button>
                                           <Button  className="btn-confirm ml-sm " size="large" type="primary" htmlType="submit">{intl.get('TRADE_ORDER_BTN')}</Button>
                                         </div>
                                    </Form>
                               </div>
                               <div className="shop-down flex-box flex-between">
                               
                                 <span className="payways flex-box flex-alignItem flex-item">
                                     <PayIcon name={item.payMode} small />
                                   </span>   
                                    <p className="fz-sm gray">{intl.get('TRADE_ORDER_TIME',{timeLimit:preInfo.timeLimit})}</p>
                               
                               </div>
                           </div>)}
                         </div>);
});





@Form.create()
@connect(({ trade,user,business,global, loading }) => ({
    global,
    trade,
    user,
    business
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class CheckUser extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
          status:0
        };

    }
    componentDidMount() {
      const {match:{params},user: { isLogin }, dispatch}=this.props;
      
      dispatch({
        type:'trade/fetchGetAdvertiseMember',
        payload:{
          name:params.userId
        }
      });
      if (isLogin) {
                dispatch({
                    type: 'user/fetchGetUserSetting'
                });
            }
    }
     /**
         * [输入监听]
         * @param  {[type]} status [description]
         * @param  {[type]} val    [description]
         * @return {[type]}        [description]
         */
    changeHandle = (status, val,form) => {
          let price=0;
            const {trade: { preInfo } } = this.props;
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
    submitHanlde = (item, e,type,form) => {
            const {status}=this.state;
            const {  history, dispatch,trade: { preInfo }, user: { userSetting },global:{lang} } = this.props;

            e.preventDefault();
            form.validateFields((err, fieldsValue) => {
                if (err) { message.error(intl.get('GLOBAL_EMPTY'));
                    return; }
                if (userSetting.realVerified !== 1&&+type===0) {
                    message.error(intl.get('GLOBAL_AUTONYME'));
                    history.push(`/${lang}/user/identity`);
                } else if (!userSetting.mobilePhone || userSetting.fundsVerified !== 1) {
                    message.error(intl.get('TRADE_BIND_PHONE'));
                    history.push(`/${lang}/user/safety`);
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
                            type: +type,
                            mode: 0,
                            remark: +fieldsValue.amount
                        },
                        callback: (data) => {
                            history.push(`/${lang}/payment/user/${data.data}/${status}`);
                        }
                    });
                }




            });
        }
      /**
         * [修改状态]
         * @param  {[type]} item [description]
         * @return {[type]}      [description]
         */
    shopHandle = (item,status,form) => {
        const { dispatch, user: { isLogin }  } = this.props;
        
        if (isLogin) {
            form.resetFields();
            Promise.all([dispatch({
                type: 'trade/editAdvertiseCheckUser',
                payload: {status,...item}
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
      const {trade:{userAdvertiseInfo,preInfo}}=this.props;
      const methodParam={
               shopHandle:this.shopHandle,
               submitHanlde:this.submitHanlde,
               changeHandle:this.changeHandle
      };
        return (
            <Layout className="trade checkUser">
                 <section className="user-info">
                    <div className="container">
                      <div className="user-top flex-box flex-alignItem">
                          <div className="flex-box flex-alignItem">
                             <div className="avatar user-avatar">{userAdvertiseInfo.username&&userAdvertiseInfo.username.charAt(0)}</div>
                             <div className="user-data">
                               <p className="name">{userAdvertiseInfo.username}</p>
                               <p className="time">{intl.get('TRADE_REGISTRATION')}：{userAdvertiseInfo.createTime}</p>
                             </div>
                            </div>
                          <dl className="flex-box flex-alignItem user-statistics flex-end">
                               
                               <dd className="item">
                                 <p className="count mr-sm">{userAdvertiseInfo.transactions}<small>{intl.get('TRADE_NEXT')}</small></p>
                                 <p className="opacity-5">{intl.get('TRADE_ASSEMBLY')}</p>
                               </dd>
                               
                          </dl>
                      </div>
                      <div className="user-down flex-box flex-alignItem flex-end">
                          <span className={cx(`${userAdvertiseInfo.emailVerified===1?'yellow':'white opacity-5'}`)} >{intl.get('TRADE_MAILBOX')}&nbsp;<Icon type="check-circle" /></span>
                          <span className={cx(`${userAdvertiseInfo.phoneVerified===1?'yellow':'white opacity-5'}`)} >{intl.get('TRADE_MOBILE')}&nbsp;<Icon type="check-circle" /></span>
                          <span className={cx(`${userAdvertiseInfo.realVerified===1?'yellow':'white opacity-5'}`)} >{intl.get('TRADE_REAL')}&nbsp;<Icon type="check-circle" /></span>
                          
                      </div>
                    </div>
                 </section>
                 <section className="checkUser-wrap container">
                    <h3 className="title">
                      {intl.get('TRADE_SALE_ON')}
                    </h3>
                    <div className="checkUser-box">
                     {userAdvertiseInfo.sell.map(item=>{
                        return (
                          <Item key={item.advertiseId} item={item} preInfo={preInfo} status={1}  {...methodParam}/>
                          );
                     })}

                    </div>
                    <h3 className="title">
                      {intl.get('TRADE_BUY_ON')}
                    </h3>
                    <div className="checkUser-box">
                        {userAdvertiseInfo.buy.map(item=>{
                        return (
                          <Item key={item.advertiseId} item={item} preInfo={preInfo} status={0}  {...methodParam}/>
                          );
                         })}
                    </div>
                 </section>
            </Layout>

        );
    }
}

export default CheckUser;
