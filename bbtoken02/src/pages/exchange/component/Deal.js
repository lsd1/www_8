/*
 * @Author: Administrator
 * @Date:   2018-08-17 11:25:03
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-11-02 11:25:41
 */
import React, { PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button, Form,message} from 'antd';
import { withRouter, Link } from 'dva/router';

import intl from 'react-intl-universal';
import { toFixed, mul,validNumber } from '@/utils/utils';
import {pwNumber} from '@/utils/regular';
import cx from 'classnames';

import InputDigit from '@/components/InputDigit/InputDigit';
import SilderLine from '@/components/SilderLine/SilderLine';


const FormItem = Form.Item;
const buy_sell = {
    slider: 0,
    price: 0,
    amount:'',
    figure:null,
    totalPrice:'0.000000'
};

const PanelTop = ({ price, name,lang}) => {
    return (<Fragment>
                 <p className="">{intl.get('EXCHANGE_AVAILABLE')}<span  className="color-default panel-txt">{toFixed(+price || 0,6)}</span>{name}</p>
                   <Link className="color-default" to={`/${lang}/user/account`}><span>{intl.get('EXCHANGE_COIN')}</span></Link>
                </Fragment>);
};

const  NoLogin= ({ lang}) => {
    return (<p><Link  className="yellow" to={`/${lang}/login`}>{intl.get('GLOBAL_LOGIN')}</Link>{intl.get('RELEASE_OR')}<Link className="yellow" to={`/${lang}/register`}>{intl.get('GLOBAL_REGISTER')}</Link>{intl.get('EXCHANGE_TRADING')}</p>);
};


const CreateForm=Form.create()(function  forms(props){
  const {slider,totalPrice,figure,small,amount,price,form,btnUnit,name,foot,disabled, onRef,
    changeHandle,changeNumHandle,status,handleSubmit,silderChange,label,labelSmall,loading}=props;
  const editHandle=(e)=>{
      e.preventDefault();
      handleSubmit(form,status);
  };
  const compareToPrice = (rule, value, callback) => {
        if (value >= 1e10) {
            callback(intl.get('EXCHANGE_PRICEVILAd'));
        } else {
            callback();
        }
  };
  const compareToNumber = (rule, value, callback) => {
        if (value >= 1e10) {
            callback(intl.get('EXCHANGE_PRICEVILAd_NUM'));
        } else {
            callback();
        }
  };
  if(status===0||status===1){
     onRef(form);
  }
 

  return (<Form onSubmit={editHandle}>
            <FormItem>
               {form.getFieldDecorator('price', {
                  initialValue:price,
                  validateFirst:true,
                  rules: [{ required: status===0||status===1, message: intl.get('GLOBAL_EMPTY') },
                 { pattern:pwNumber,message:intl.get('EXCHANGE_MUST')},{validator: compareToPrice}]
                })(
                <InputDigit className="mt-xs" disabled={disabled} decimal={4} onChange={(val)=>changeHandle(status,val,form)}  placeholder={disabled?`${intl.get('EXCHANGE_MARKET')}${label}`:''}   maxLength="14" label={`${label}价`} small={small} foot={foot}  />
                )}
             </FormItem>
             <FormItem>
               {form.getFieldDecorator('amount', {
             
                  initialValue: amount,
                  validateFirst:true,
                  rules: [{ required: true, message:  intl.get('GLOBAL_EMPTY')},
                 { pattern:pwNumber,message:intl.get('EXCHANGE_MUST')},{validator: compareToNumber}]
                })(
              <InputDigit className="mt-xs" onChange={(val)=>changeNumHandle(status,val,form)} decimal={4}    maxLength="14" label={labelSmall?labelSmall:`${label}${intl.get('EXCHANGE_AMOUNT')}`} small={name}  />
              )}
             </FormItem>
            
                <SilderLine num={slider} onChange={(num)=>silderChange(num,status,form)} small={name} maxValue={validNumber(figure)} />
                {!disabled&&<p className="fz-md">{intl.get('EXCHANGE_TRANSACTION')}<span className="panel-txt">{totalPrice}</span>USDT</p>}
            
              <Button loading={loading} htmlType="submit"  className={cx('group-btn','mt-xs',`${status===0||status===2?'green':'red'}-btn`)}>{`${label}${btnUnit}`}</Button>
          </Form>);

});


@withRouter
@Form.create()
@connect(({ exchange, user, global,loading }) => ({
    global,
    user,
    exchange,
    loading:loading.effects['exchange/saveTransactionData'] 
}))
class Deal extends PureComponent {
    static propTypes = {
        tabState: PropTypes.number,
        buyPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        sellPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };
    static getDerivedStateFromProps(nextProps, prevState) {
        return (nextProps.tabState === prevState.tabState&&nextProps.newPrice===prevState.price&&nextProps.sellPrice===prevState.buyOne.price) ? null:
         { tabState: nextProps.tabState,price:nextProps.newPrice,
          buyOne: {...buy_sell,price:nextProps.sellPrice },buyTwo: {...buy_sell},
          sellOne: {...buy_sell,price:nextProps.buyPrice  },sellTwo: {...buy_sell } };
    }
    constructor(props) {
        super(props);
         this.formBuyOne=null;
         this.formSellOne=null;
        this.state = {
            status:-1,
            price:0,
            buyOne: {...buy_sell },
            buyTwo: {...buy_sell },
            sellOne: {...buy_sell },
            sellTwo: {...buy_sell }
        };
    }
    componentDidMount() {
      const {user:{isLogin},onRef,initDeal}=this.props;
      if(isLogin){
         initDeal &&initDeal(1);
      }
      onRef && onRef(this);
    }
 

    //重置表单值
    resetForm=()=>{
      
      this.formBuyOne.resetFields(['amount','price']);
      this.formSellOne.resetFields(['amount','price']);

    }

    
        //限价交易
    silderChange = (num, state,form) => {
        let price=0,figure=0,amount='';
        const  {user:{isLogin},buyInfo, sellInfo } =this.props;
        const name = ['buyOne','sellOne','buyTwo', 'sellTwo'][state];
        const fildeValue=form.getFieldsValue(['price']);
        let val=+fildeValue['price'];
        if(!isLogin){ return;}


        switch (state) {
                case 0:
                    figure =toFixed(mul(`${buyInfo.balance}/${val}*${num/100}`),4);
                    price=toFixed(+(mul(`${val}*${figure}`)), 4);
                    amount=validNumber(figure);
         
                    break;
                case 1:
                    
                    figure =toFixed(mul(`${sellInfo.balance}*${num/100}`),4);
                    price =toFixed(+(mul(`${val}*${figure}`)), 4);
                    amount=validNumber(figure);
                 
                    break;
                case 2:
                     price =toFixed(mul(`${buyInfo.balance}*${num/100}`),4);
                     amount=validNumber(price);
               
                break; 
                case 3:
                    price =toFixed(mul(`${sellInfo.balance}*${num/100}`),4);
                    amount=validNumber(price);
    
                break;    

            }
            form.resetFields(['amount']);
        this.setState({
            [name]: {
                ...this.state[name],
                slider: num,
                amount,
                totalPrice:validNumber(price)
            }
        });
    }
    /**
     * [监听买入价]
     * @param  {[type]} state [description]
     * @param  {[type]} val   [description]
     * @return {[type]}       [description]
     */
    changeHandle = (state, val,form) => {

       const name = ['buyOne','sellOne','buyTwo', 'sellTwo'][state];
       const { buyInfo, sellInfo}=this.props;
         form.resetFields(['amount']);
        this.setState({
            [name]: {
                totalPrice:'0.000000',
                slider:0,
                amount:'',
                figure:val===''?0:this.figure(state===0?buyInfo.balance:sellInfo.balance,val),
                price: val || 0
            }
        });
    }
    /**
     * [监听买入量]
     * @param  {[type]} state [description]
     * @param  {Number} num   [description]
     * @return {[type]}       [description]
     */
    changeNumHandle= (state, num=0,form) => {

        let name,balance,price,sum;
        const  {buyPrice, sellPrice,user:{isLogin},buyInfo, sellInfo  } =this.props;
        const fildeValue=form.getFieldsValue(['price']);
        let val=fildeValue['price'];
         if(!isLogin||(+val===0&&(state===0||state===1))){return;}
          switch(state){
            case 0:
              name='buyOne';
              balance=buyInfo.balance;
              price=sellPrice;
              sum=this.figure(balance,val);
            break;
            case 1:
              name='sellOne';
              balance=sellInfo.balance;
              price=buyPrice;
              sum=balance;
            break;
            case 2:
            
              name='buyTwo';
              balance=buyInfo.balance;
              price=buyPrice;
              sum=this.figure(balance,price);
            break;
            case 3:
              name='sellTwo';
              balance=sellInfo.balance;
              price=buyPrice;
              sum=this.figure(balance,price);
            break;
          }
        if(state==2|| state==3){
            sum=balance;
            val=0;
        }
        if(+sum===0){return;}
       

        this.setState({
            [name]: {
                ...this.state[name],
                amount:num,
                slider:num>=0&&num!==''?+parseFloat(mul(`${num}/${+sum}*100`)).toFixed(0):0,
                totalPrice:num>=0&&num!==''?toFixed(+(mul(`${val}*${num}`)), 4):toFixed(0,4)
            }
        });
    }
    /**
     * [金额转换]
     * @param  {[type]} val [description]
     * @return {[type]}     [description]
     */
    convert = (val) => {
        const { global: { USD } } = this.props;
        return +toFixed((mul(`${val}*${USD}`)), 4);
    }
    figure=(count=0,val=0)=>{
           return toFixed(+mul(`${count}/${val}`),4);
    }
    /**
     * [交易提交]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    handleSubmit = (form,status) => {
       const {dispatch,exchange:{currentCoin},initDeal,againInit,user:{isLogin}}=this.props;
       if(!isLogin){
        message.error(intl.get('GLOBAL_LOGIN_ERR'));
        return;
      }
      //loading加载判断
        this.setState({
            status
        });
        form.validateFields((err, values) => {
            if (!err) {
            
                const params=[
                {name:'buyOne',direction:'BUY',type:'LIMIT_PRICE'},
                {name:'sellOne',direction:'SELL',type:'LIMIT_PRICE'},
                {name:'buyTwo',direction:'BUY',type:'MARKET_PRICE'},
                {name:'sellTwo',direction:'SELL',type:'MARKET_PRICE'}][status];

                 dispatch({
                   type:"exchange/saveTransactionData",
                   payload:{
                    ...values,
                    ...params,
                    price:values.price===''?0:values.price,  //市价交易必须传0
                    symbol: currentCoin.symbol
                   },
                   callback:()=>{
                       form.resetFields();
                       initDeal&& initDeal(1);
               
                       againInit && againInit();
                       this.setState({
                        status:-1,
                        [params.name]:{
                          ...buy_sell,
                          price:values.price
                        }
                       });
                   } 
                 });

            }
        });
    }
    render() {
   
        const { buyOne, buyTwo, sellOne, sellTwo ,price,status } = this.state;
        const {buyInfo, sellInfo , user: { isLogin },loading, match: { params: { small, name } },global:{lang},tabState} = this.props;
        
    

        const buyFigure =buyOne.figure===null?this.figure(buyInfo.balance,buyOne.price):buyOne.figure;

        return (
            <div className="panel-buy panel-deal flex-box flex-between">
             {tabState===1?[
              <div className="panel-deal-box" key="01">
               <div className="panel-deal-top flex-box flex-between bb-1">
                {isLogin?(<PanelTop name={small} price={buyInfo.balance} lang={lang} />):(<NoLogin lang={lang}  />)} 
                </div>
                <div className="panel-deal-cont">
                  <CreateForm 
                    
                    onRef={form=>{this.formBuyOne = form;}} 
                    price={buyOne.price===0?price:buyOne.price} 
                    amount={buyOne.amount}
                    changeHandle={this.changeHandle} 
                    changeNumHandle={this.changeNumHandle} 
                    handleSubmit={this.handleSubmit}
                    loading={loading&&status===0}
                    status={0} 
                    small={small} 
                    name={name}
                    btnUnit={name}
                    foot={`≈ ${this.convert(buyOne.price)} CNY`}
                    slider={buyOne.slider}
                    silderChange={this.silderChange}
                    figure={buyFigure}
                    totalPrice={buyOne.totalPrice}
                    label={intl.get('RELEASEADS_BUY_ON')}
                     />
                
                </div>
             </div>,
             <div className="panel-deal-box" key="02">
             <div className="panel-deal-top flex-box flex-between bb-1">
                {isLogin?(<PanelTop name={name} price={sellInfo.balance} lang={lang} />):(<NoLogin lang={lang}  />)} 
                </div>
                <div className="panel-deal-cont">

                  <CreateForm 
                   
                    onRef={form=>{this.formSellOne = form;}} 
                    price={sellOne.price===0?price:sellOne.price} 
                    amount={sellOne.amount}
                    changeHandle={this.changeHandle} 
                    changeNumHandle={this.changeNumHandle} 
                    handleSubmit={this.handleSubmit}
                    loading={loading&&status===1}
                    status={1} 
                    small={small} 
                    name={name}
                    btnUnit={name}
                    foot={`≈ ${this.convert(sellOne.price)} CNY`}
                    slider={sellOne.slider}
                    silderChange={this.silderChange}
                    figure={toFixed(sellInfo.balance,4)}
                    totalPrice={sellOne.totalPrice}
                    label={intl.get('RELEASEADS_SELL_SET')}
                     />

                </div>
             </div>]
              :[
               <div className="panel-deal-box" key="03">
               <div className="panel-deal-top flex-box flex-between bb-1">
                  {isLogin?(<PanelTop name={small} price={buyInfo.balance} lang={lang} />):(<NoLogin lang={lang}  />)} 
       
                </div>
                <div className="panel-deal-cont">
                <CreateForm 
                  
                  price=""
                  amount={buyTwo.amount}
                  disabled
                  changeNumHandle={this.changeNumHandle} 
                  handleSubmit={this.handleSubmit}
                  loading={loading&&status===2}
                  status={2} 
                  small={small} 
                  name={small}
                  btnUnit={name}
                  slider={buyTwo.slider}
                  silderChange={this.silderChange}
                  figure={toFixed(buyInfo.balance,4)}
                  label={intl.get('RELEASEADS_BUY_ON')}
                  labelSmall={intl.get('EXCHANGE_TRANSACTION')}
                   />
                </div>
             </div>,
             <div className="panel-deal-box" key="04">
              <div className="panel-deal-top flex-box flex-between bb-1">
              {isLogin?(<PanelTop name={name} price={sellInfo.balance} lang={lang} />):(<NoLogin lang={lang}  />)} 
                </div>
                <div className="panel-deal-cont">
                <CreateForm 
                  
                  price=""
                  amount={sellTwo.amount}
                  disabled
                  changeNumHandle={this.changeNumHandle} 
                  handleSubmit={this.handleSubmit}
                  loading={loading&&status===3}
                  status={3} 
                  small={small} 
                  name={name}
                  btnUnit={name}
                  slider={sellTwo.slider}
                  silderChange={this.silderChange}
                  figure={toFixed(sellInfo.balance,4)}
                  label={intl.get('RELEASEADS_SELL_SET')}
                   />
                    
                </div>
             </div>
              ]}
             
              
          </div>
        );
    }
}
export default Deal;
