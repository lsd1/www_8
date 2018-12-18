/*
 * @Author: Administrator
 * @Date:   2018-08-13 09:20:47
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-17 18:23:07
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import intl from 'react-intl-universal';
import { Icon, Input,message } from 'antd';
import Layout from '@/layouts/';
import dayjs from 'dayjs';
import { mul } from '@/utils/utils';

import BuyPayment from '../component/BuyPayment';
import SellPayment from '../component/SellPayment';
import './Payment.less';



@connect(({ order, user, loading }) => ({
    order,
    user
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class Payment extends PureComponent {
    constructor(props) {
        super(props);
        this.stompClient = null;
        this.time = null;
        this.mess=React.createRef();
        this.chatRef=React.createRef();
        this.state = {
            textStatus:'',
            status: 1, //1购买,0出售,
            times: {
                timeMinute: null,
                timeSecond: null
            }

        };

    }
    componentDidMount() {
        const { dispatch, match: { params: { orderId } } } = this.props;
        Promise.all([dispatch({
            type: 'order/fetchOrderInfo',
            payload: {
                orderSn: orderId
            },
            callback: (data) => {
                //聊天监听
                dispatch({
                    type: 'global/socketLink',
                    payload: {
                        url: '/chat/chat-webSocket'
                    },
                    callback: (stompClient) => {
                        this.stompClient = stompClient;
                        this.stompClient.connect({}, (frame) => {
                            //订单消息变化消息
                            this.stompClient.subscribe(`/user/${data.myId}/order-notice/${orderId}`, (datas) => {
                                const info = JSON.parse(datas.body);
                                clearInterval(this.time);
                                this.editStatus(info.status, orderId);
                            });
                            //聊天消息变化消息
                            this.stompClient.subscribe(`/user/${data.myId}/${orderId}`, (datas) => {
                                const info = JSON.parse(datas.body);
                                dispatch({
                                  type:'order/fetchSavaMessage',
                                  payload:{
                                      type:0,
                                      data:{
                                          ...info
                                      }
                                  },
                                  callback:()=>{
                                       setTimeout(()=>{
                                          this.chatRef.current.scrollTop=this.chatRef.current.scrollHeight;
                                       },0);
                                  }
                              });
                            });

                        });
                    }
                });
                //倒计时
                if (data.status === 1) {
                    this.countdown(data);
                }
            }
        }),dispatch({
             type:'order/fetchSavaMessage',
              payload:{
                orderId:orderId,
                Page:1,
                type:1
              },
              callback:()=>{
                
                   this.chatRef.current.scrollTop=this.chatRef.current.scrollHeight;
               
                

              }
        })]);

        
    }
    componentWillUnmount() {
            clearInterval(this.time);
        }
     /**
      * [countdown 倒计时]
      * @param  {[type]} data    [订单详情]
      * @param  {[type]} orderId [description]
      * @return {[type]}         [description]
      */
    countdown(data) {
            const minute = mul(`${data.timeLimit}`) * 60;
            this.time = window.setInterval(() => {
                const second = mul(`${dayjs().unix()}-${dayjs(data.createTime).unix()}`);
                const num = mul(`${minute}-${second}`);
                const virginia = mul(`${num}%60`);
                //倒计时为0自动取消订单
                if ( (num <= 60 && virginia === 1)||num<=0 ) {
                    clearInterval(this.time);
                    this.editStatus(0, data.orderSn);
                    if(num<=0){
                      this.setState({
                          textStatus:intl.get('TRADE_BUY_Limit')
                      });
                    }
                } else {
                    this.setState(() => {
                        return { times: { timeMinute: parseInt(mul(`${num}/60`)), timeSecond: virginia >= 10 ? virginia : `0${virginia}` } };
                    });
                }

            }, 1e3);

        }
     /**
      * [editStatus 修改订单状态]
      * @param  {[type]} status  [状态码]
      * @return {[type]}         [description]
      */
    editStatus(status) {
        const { dispatch } = this.props;
        dispatch({
            type: "order/editPayStatus",
            payload: {
                status: status
            }
        });
    }
    /**
     * [发送消息]
     * @return {[type]} [description]
     */
    messHandle=()=>{
        const { order: { orderInfo },user:{userInfo},dispatch } = this.props;
        const {value}=this.mess.current.input;
        if(value){
            const jsonParam={
                uidTo:orderInfo.hisId,
                uidFrom:orderInfo.myId,
                orderId:orderInfo.orderSn,
                nameFrom:userInfo.username,
                nameTo:orderInfo.otherSide,
                content:value
            };
            
            this.stompClient.send("/app/message/chat", {}, JSON.stringify(jsonParam));
            dispatch({
                type:'order/fetchSavaMessage',
                payload:{
                    type:0,
                    data:{
                        ...jsonParam,
                        sendTimeStr:dayjs().format('YYYY-MM-DD HH:mm')
                    }
                },
                callback:()=>{
                     this.mess.current.input.value='';
                     setTimeout(()=>{
                        this.chatRef.current.scrollTop=this.chatRef.current.scrollHeight;
                     },0);
                }
            });
        }else{
            message.error(intl.get('TRADE_MESS_EMPTY'));
        }
    }
    keypress=(e)=>{
      if (e.which !== 13) return;
      this.messHandle();
    }

    render() {
        const { times,textStatus } = this.state;
        const { match: { params },user:{userInfo}, order: { orderInfo,messageList} } = this.props;

        return (
            <Layout className="payment container ">
                  <div className="payment-box flex-box flex-between">
                      <section className="payment-left"> 
                        <div className="payment-top bb-gray">
                          <p className="opacity-5">{intl.get('TRADE_ORDER')}：{params.orderId}</p>
                        <p className="title">{intl.get('TRADE_TO')}{orderInfo.otherSide}{+orderInfo.type===0?intl.get('TRADE_BUY'):intl.get('TRADE_SELL')}{orderInfo.amount} {orderInfo.unit}</p>
                        <p className="money">{intl.get('ORDER_UNIT')}：{orderInfo.price} CNY/{orderInfo.unit}</p>
                        <p className="money">{intl.get('ORDER_TOTAL_PRICE')}：<span className="green">{orderInfo.money} CNY/{orderInfo.unit}</span></p>
                        </div>
                        <div className="payment-cont">
                           {orderInfo.payInfo&& (+orderInfo.type===0?(
                            <BuyPayment orderInfo={orderInfo} dataTime={times} textStatus={textStatus} />):(
                            <SellPayment orderInfo={orderInfo} dataTime={times} textStatus={textStatus}  />))} 
                        
                        </div>
                    </section>
                    <section className="payment-right flex-item">
                         <div className="chat-top flex-box flex-alignItem">
                           <div className="flex-box">
                               <div className="avatar">{orderInfo.otherSide &&orderInfo.otherSide.charAt(0)}</div>
                               <div className="chat-name">
                                 <p>{orderInfo.otherSide}</p>
                                
                               </div>
                             </div>
                             
                         </div>

                         
                        <div className="chat-box" ref={this.chatRef}>
                               <p className="tc opacity-5 mt-md">{dayjs(orderInfo.createTime).format('YYYY-MM-DD')}</p>
                               <p className="tc mt-sm">{intl.get('TRADE_DESC_17')}<span className="opacity-5">{dayjs(orderInfo.createTime).format('HH:mm')}</span></p>
                                {messageList.map((item,index)=>{
                                    return (
                                    <div key={index} className="mt-sm">
                                      {userInfo.username!==item.nameFrom?(
                                        <div className="flex-box">

                                           <div className="avatar photo">{item.nameFrom.charAt(0)}</div>
                                           <div className="chat-content left-arrow">
                                              <div className="chat-content-top">
                                               {item.content}
                                              </div>
                                              <p className="small-time opacity-5">{item.sendTimeStr}</p>
                                           </div>
                                           
                                        </div> ):(<div className="flex-box flex-end tr">
                                           <div className="chat-content right-arrow">
                                              <div className="chat-content-top flex-item">
                                               {item.content}
                                              </div>
                                              <p className="small-time opacity-5">{item.sendTimeStr}</p>
                                           </div>
                                           <div className="avatar photo">{item.nameFrom.charAt(0)}</div>
                                        </div>)}
                                      
                                      
                                    </div>);
                                })}
                         </div>

                        
                         <div className="chat-input bt-gray flex-box flex-alignItem">
                               <Input className="input-textArea" placeholder={intl.get('TRADE_DESC_18')}  onKeyPress={this.keypress}  ref={this.mess} />
                               <div className="flex-box flex-box-center flex-item btn-confirm"  onClick={this.messHandle}>
                                 <Icon className="pointer" style={{fontSize:20}}  type="link" />
                               </div>
                         </div>
                    </section>
                  </div>
            </Layout>
        );
    }
}
export default Payment;
