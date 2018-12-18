/*
 * @Author: Administrator
 * @Date:   2018-08-13 15:53:54
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-13 16:28:50
 */
/*
 * @Author: Administrator
 * @Date:   2018-08-13 11:59:18
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-08-13 15:53:14
 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import { Icon, Button,Modal, Popover,Input,Form } from 'antd';
import PayManner from './PayManner.js';
import intl from 'react-intl-universal';


const FormItem = Form.Item;


const CreateFormPassWord = Form.create()(props => {
    const { visible, form, handlePwdEdit, handleCancel } = props;

    const handleOk = () => {
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            form.resetFields();
            handlePwdEdit(fieldsValue);
        });
    };

    return ( 
      <Modal  
        wrapClassName="model"
        width={500}
        title={intl.get('GLOBAL_WAEM')}
        visible={visible} 
        onOk={handleOk} 
        onCancel={handleCancel} 
        maskClosable={false}
        footer={[
      <Button key="back" className="border-rest opacity-5" size="large" onClick={handleCancel}>{intl.get('GLOBAL_CANCEL')}</Button>,
      <Button key="submit" type="primary" size="large"  onClick={handleOk}>
        {intl.get('GLOBAL_OK')}
      </Button>]} >
      <div className="fz-md height-100">
       <p className="red">{intl.get('TRADE_DESC_12')}</p>
       <FormItem >
                {form.getFieldDecorator('jyPassword', {
                  rules: [{ required: true, message: intl.get('GLOBAL_EMPTY') }]
                })(
                  <Input type="password" size="large"   />
                )}
          </FormItem> 
       
      </div>
   </Modal>
    );
});


@connect(({ order, loading }) => ({
    order
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class SellPayment extends PureComponent {
    constructor(props) {
        super(props);
        this.jyPassord=React.createRef();
        this.state = {
            visible: false,



        };

    }
    componentDidMount() {

    }

    

        /**
         * [支付确认]
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
    handlePwdEdit = (fieldsValue) => {
        const { dispatch, orderInfo } = this.props;
       
         dispatch({
                type: "order/saveOrderPayStatus",
                payload: {
                    ...fieldsValue,
                    orderSn: orderInfo.orderSn,
                    status:3
                },
                callback:()=>{
                  this.setState({
                        visible: false
                    });
                }
        });
        

    }
    showModal = (state) => {
            this.setState({
                visible: true,
            });
        }
    handleCancel = (e) => {
        this.setState({
            visible: false
        });
    }








    render() {

        const { orderInfo, dataTime} = this.props;
        const {  visible } = this.state;
        const { payInfo } = orderInfo;



        return (
            <Fragment>
              
               <PayManner payInfo={payInfo} />
                 <p className="datatime fz-lg">
                {/** 支付中**/}
                {orderInfo.status===1&&(
                  <Fragment>
                  {intl.getHTML('TRADE_WAIT_PAYMENT',{otherSide:orderInfo.otherSide,timeMinute:dataTime.timeMinute,timeSecond:dataTime.timeSecond})}
                  
                  </Fragment>)}
             
                {[intl.get('TRADE_ORDER_STOP'),'',intl.get('TRADE_PAID'),intl.get('TRADE_COPLETED'),''][orderInfo.status]}

               <span className="ml-sm"></span>{intl.get('TRADE_REF_NO')}：<em className="mark">{orderInfo.referenceNumber}</em></p>

               {orderInfo.status===2&&(
                <Popover placement="right" overlayClassName="popover-payment-box"  content={<div className="payment-tips red"><Icon className="mr-sm" type="exclamation-circle"  />{intl.get('TRADE_DESC_13')}</div>} defaultVisible visible>
                  <Button type="primary" className="green" size="large"  onClick={this.showModal}><span className="blue" >{intl.get('TRADE_COLLECTION')}{orderInfo.money}</span> </Button>
               </Popover>)}
               {/** 支付中**/}
               {orderInfo.status===1&&
               (<Button disabled className="sell-btn"  size="large">
                     <span >{intl.get('TRADE_DESC_14')}</span><Icon type="ellipsis"  className="green fz-lg" />  
                </Button>)}

                {orderInfo.status===0&&(
                     <Icon type="close-circle" className="darkgray mt-sm mb-lg" style={{fontSize:62}} />
                  )}

                 {orderInfo.status===4&&(
                <div className="mt-sm mb-lg flex-box flex-alignItem fz-xs">
                  <Icon type="clock-circle" className="gray" style={{fontSize:62}} />
                  <p className="ml-md">{intl.get('TRADE_DESC_4')}</p>
                </div>
              )}
               
                {orderInfo.status===3&&(
                  <div className="mt-sm mb-lg flex-box flex-alignItem fz-xs">
                  <Icon type="check-circle" className="green" style={{fontSize:62}} />
                </div>
                  )}
              <p className="opacity-5 mt-lg">1、{intl.get('TRADE_DESC_15')}</p>
              <p className="opacity-5">2、{intl.get('TRADE_DESC_16')}</p>
                <CreateFormPassWord  visible={visible} handleCancel={this.handleCancel} handlePwdEdit={this.handlePwdEdit} />
              

              
         </Fragment>
        );
    }
}
export default SellPayment;
