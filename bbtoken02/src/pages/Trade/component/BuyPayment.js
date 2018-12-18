/*
 * @Author: Administrator
 * @Date:   2018-08-13 11:59:18
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-26 16:55:15
 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Icon, Button, Popover, Modal } from 'antd';
import PayManner from './PayManner.js';
import { CreateForm } from './Appeal.js';
import intl from 'react-intl-universal';





@connect(({ order, loading }) => ({
    order
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class BuyPayment extends PureComponent {

    constructor(props) {
        super(props);
        this.dataModel = [{
            title:intl.get('TRADE_ORDER_CANCEL'),
            cancelBtn: intl.get('TRADE_ORDER_THINK'),
            okBtn: intl.get('TRADE_OK_CANCEL')
        }, {
            title: intl.get('TRADE_OK_PAY'),
            cancelBtn: intl.get('TRADE_ERROW'),
            okBtn: intl.get('TRADE_OK_PAY')
        }];
        this.state = {
            visible: false,
            status: 1, //1确认支付，0取消支付，
            statusData: this.dataModel[1],
            complaintVisible: false
        };
    }



    showModal = (state) => {
            this.setState({
                visible: true,
                status: state,
                statusData: this.dataModel[state + '']
            });
        }
        /**
         * [投诉确认]
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
    handleEdit = (fieldsValue) => {
            const { dispatch, orderInfo } = this.props;
            dispatch({
                type: "order/saveOrderPayStatus",
                payload: {
                    ...fieldsValue,
                    orderSn: orderInfo.orderSn,
                    status: 4
                },
                callback: () => {
                    this.setState({
                        complaintVisible: false
                    });
                }
            });


        }
        /**
         * [支付确认]
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
    handleOk = (e) => {
        const { status } = this.state;
        const { dispatch, orderInfo } = this.props;
        dispatch({
            type: "order/saveOrderPayStatus",
            payload: {
                status: status === 1 ? 2 : 0,
                orderSn: orderInfo.orderSn
            },
            callback: () => {
                this.setState({
                    visible: false
                });
            }
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false
        });
    }
    showComplaintModal = () => {

        this.setState({
            complaintVisible: true
        });
    }
    complaintHandleCancel = (e) => {
        this.setState({
            complaintVisible: false
        });
    }
    render() {
        const { orderInfo, dataTime ,textStatus} = this.props;
        const { status, visible, statusData, complaintVisible } = this.state;
        const { payInfo } = orderInfo;
        const modelMethod = {
            handleCancel: this.complaintHandleCancel,
            modalVisible: complaintVisible,
            handleEdit: this.handleEdit
        };
        return (
            <Fragment>
              {orderInfo.status!==0&&(
              <Fragment>
                <PayManner payInfo={payInfo} />
              {/**备注 **/}
              <p className="declare fz-xs">{orderInfo.remark}</p>

              </Fragment>)}
              
               {/**支付信息 **/}
              <p className="datatime fz-lg">
                 {orderInfo.status===1&&
                  (<Fragment>
                     {intl.getHTML('TRADE_NO_PAYMENT',{timeMinute:dataTime.timeMinute,timeSecond:dataTime.timeSecond})}
                    
                   </Fragment>)
                }
                {orderInfo.status!==0 &&(
                   <Fragment>
                   {['','',intl.get('TRADE_PAID'),intl.get('TRADE_COPLETED'),''][orderInfo.status]}
                 <span className="mr-sm">{intl.get('TRADE_REF_NO')}：</span><em className="mark">{orderInfo.referenceNumber}</em>

                  </Fragment>)
              }
                
              </p>

               {(orderInfo.status===1||orderInfo.status===2) && (
                <Popover placement="right" overlayClassName="popover-payment-box"  content={<div className="payment-tips red"><Icon className="mr-sm" type="exclamation-circle"  />{orderInfo.status===2?intl.get('TRADE_DESC_2'):intl.get('TRADE_DESC_1')}</div>} defaultVisible visible>
                  <Button type="primary" size="large" disabled={orderInfo.status===2} onClick={()=>this.showModal(1)}><span className="blue" >{intl.get('TRADE_PAID_PAY')}{orderInfo.money}CNY</span> </Button>
               </Popover>)}
               {orderInfo.status===3&&(
                <div className="mt-sm mb-lg flex-box flex-alignItem fz-xs">
                  <Icon type="check-circle" className="green" style={{fontSize:62}} />
                  <p className="ml-md">{intl.get('TRADE_DESC_3')}</p>
                </div>
              )}
               {orderInfo.status===4&&(
                <div className="mt-sm mb-lg flex-box flex-alignItem fz-xs">
                  <Icon type="clock-circle" className="gray" style={{fontSize:62}} />
                  <p className="ml-md">{intl.get('TRADE_DESC_4')}</p>
                </div>
              )}
              {orderInfo.status===0&&(<Fragment>
                <div className="cancel-top">{textStatus?textStatus:intl.get('TRADE_DESC_5')}</div>
                 <p className="datatime fz-lg">{textStatus?textStatus:intl.get('TRADE_DESC_6')}：<em className="mark">{orderInfo.referenceNumber}</em></p>
                 <Icon type="close-circle" className="gray mt-sm mb-lg" style={{fontSize:62}} />
              </Fragment>)}
              


              <p className="opacity-5 mt-lg">1、{intl.get('TRADE_DESC_7')}</p>
              <p className="opacity-5">2、{intl.get('TRADE_DESC_8')}</p>
              <p className="opacity-5 mb-md">3、{intl.get('TRADE_DESC_9')}</p>

              {(orderInfo.status===1||orderInfo.status===2)&&(<span className="yellow mt-md pointer mr-md" onClick={()=>this.showModal(0)}>{intl.get('TRADE_ORDER_CANCEL')}</span>)}
              {orderInfo.status===2&&(<span className="yellow mt-md pointer" onClick={this.showComplaintModal}>{intl.get('TRADE_ORDER_APPEAL')}</span>)}

              
              
              <CreateForm {...modelMethod} />
              <Modal  
                wrapClassName="model"
                width={500}
                title={statusData.title}
                visible={visible} 
                onOk={this.handleOk} 
                onCancel={this.handleCancel} 
                maskClosable={false}
                footer={[
              <Button key="back" className="border-rest opacity-5" size="large" onClick={this.handleCancel}>{statusData.cancelBtn}</Button>,
              <Button key="submit" type="primary" size="large"  onClick={this.handleOk}>
                {statusData.okBtn}
              </Button>]} >
              <div className="fz-md height-100 flex-box flex-box-center">
              {status?(<Fragment>{intl.getHTML('TRADE_DESC_10')}</Fragment>):
               (<div className="pd-25">{intl.getHTML('TRADE_DESC_11')}</div>
                )}
                
              </div>
           </Modal>
         </Fragment>
        );
    }
}
export default BuyPayment;
