/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-11-01 17:59:22
 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import intl from 'react-intl-universal';
import { Icon, Button, Modal, Form, Input, Select, message } from 'antd';
import Layout from '@/layouts/';
import Aside from '../component/Aside';
import Box from '../component/Box';
import UploadImg from '@/components/UploadImg/';
import {cloneDeep} from 'lodash-es';
import {getByteLen,fileUpload} from '@/utils/utils';
import {nickName} from '@/utils/regular';
import Cookies from 'js-cookie';
import './../UserInfo.less';
import './Setting.less';


const FormItem = Form.Item;
const Option = Select.Option;
const payForm = {
    bank: '',
    jyPassword: '',
    cardNo: '',
    ali: '',
    wechat: '',
    fm: '',
    qrCodeUrl: [],
    branch: ''
};



const CreateForm = Form.create()(props => {
    const { form, handleCancel, handleEdit, status, selectChange, bankNameList, name, payInfo } = props;
    const handleOk = () => {
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            handleEdit(fieldsValue, form);
        });
    };
    const selectHandle = (num) => {
        selectChange(num);
    };

    const  normFile  =  (e) => {
       return fileUpload(e,()=>{
           message.error(intl.get('GLOBAL_IMG_VAILD'));
       },()=>{
           message.error(intl.get('GLOBAL_IMG_SIZE'));
       });
    };
    const compareToFirstPassword = (rule, value, callback) => {
        if (value && value !== form.getFieldValue('cardNo')) {
            callback(intl.get('USERINFO_BANK_ERR'));
        } else {
            callback();
        }
    };
    return (
        <Fragment>
         <div className="pd-25">
          <FormItem  label={intl.get('GLOBAL_PAY_MANAGER')} colon={false} >
              {form.getFieldDecorator('payment', {
                 initialValue:status
              })(
                <Select style={{ width: '100%' }} onChange={selectHandle} disabled>
                      {/*<Option value={1}>PalPal支付</Option>*/}
                      <Option value={2}>{intl.get('GLOBAL_BANK')}</Option>
                      <Option value={3}>{intl.get('GLOBAL_ALIPAY')}</Option>
                      <Option value={4}>{intl.get('GLOBAL_WECHAT')}</Option>
                      <Option value={5}>{intl.get('GLOBAL_FM')}</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label={intl.get('USERINFO_NAME')} colon={false} >
              {form.getFieldDecorator('realName', {
                initialValue:name
             })(
                <Input  disabled />

              )}
            </FormItem>
            {status===1&&(<FormItem label="PayPal账号" colon={false}  >
              {form.getFieldDecorator('country')(
                <Input placeholder="请输入PayPal账号" />
              )}
            </FormItem>)}
            {status===2&&(<Fragment>
              <FormItem label={intl.get('USERINFO_BANK_DEPOSIT')} colon={false}  >
              {form.getFieldDecorator('bank',{
                initialValue:payInfo.bank,
                rules: [{ required: true, message: `${intl.get('USERINFO_BANK_DEPOSIT')}${intl.get('GLOBAL_EMPTY')}` }]
              })(
                <Select style={{ width: '100%' }}>
                      <Option value="">{intl.get('GLOBAL_SELECT')}</Option>
                      {bankNameList.map(item=>{
                        return (<Option key={item.value} value={item.value}>{item.label}</Option>);
                      })}
                      
                </Select>
              )}
            </FormItem>
            <FormItem label={intl.get('USERINFO_BANK_OPENING')} colon={false}  >
               
                  {form.getFieldDecorator('branch',{
                     initialValue:payInfo.branch,
                    rules: [{ required: true, message: `${intl.get('USERINFO_BANK_OPENING')}${intl.get('GLOBAL_EMPTY')}` }]
                  })(
                    <Input placeholder={`${intl.get('USERINFO_PLEASE_ENTER')}${intl.get('USERINFO_BANK_OPENING')}`} />
                  )}
            
            </FormItem>
            <FormItem label={intl.get('USERINFO_BANK_CARD')} colon={false}  >
                  {form.getFieldDecorator('cardNo',{
                    initialValue:payInfo.cardNo,
                    rules: [{ required: true, message:  `${intl.get('USERINFO_BANK_CARD')}${intl.get('GLOBAL_EMPTY')}` }]
                  })(
                    <Input placeholder={`${intl.get('USERINFO_PLEASE_ENTER')}${intl.get('USERINFO_BANK_CARD')}`}  />
                  )}
            </FormItem>
            <FormItem label={intl.get('USERINFO_CONFIRM_CARD')} colon={false}  >
                  {form.getFieldDecorator('bankNoConfirm',{
                    rules: [{ required: true, message:  `${intl.get('USERINFO_CONFIRM_CARD')}${intl.get('GLOBAL_EMPTY')}` },{
                                   validator: compareToFirstPassword
                    }]
                  })(
                    <Input placeholder={`${intl.get('USERINFO_PLEASE_ENTER2')}${intl.get('USERINFO_BANK_CARD')}`}  />
                  )}
            </FormItem>
            </Fragment>)}
            {(status!==2)&&(<Fragment>
              <FormItem label={`${status === 3 ? intl.get('GLOBAL_ALIPAY') : status===4 ? intl.get('GLOBAL_WECHAT') : intl.get('GLOBAL_FM')}${intl.get('USERINFO_PAYMENT_NO')}`} colon={false}  >
              {form.getFieldDecorator(`${status === 3 ? 'ali' : status === 4 ? 'wechat' : 'fm'}`,{
                initialValue:payInfo[`${status === 3 ? 'ali' : status === 4 ? 'wechat' : 'fm'}`],
                rules: [{ required: true, message:  `${intl.get('USERINFO_PAYMENT_NO')}${intl.get('GLOBAL_EMPTY')}` }]
              })(
                <Input placeholder={`${intl.get('USERINFO_PLEASE_ENTER')}${intl.get('USERINFO_PAYMENT_NO')}`}  />
              )}
            </FormItem>

            <FormItem label={intl.get('USERINFO_QR_CODE')} colon={false}  >
              {form.getFieldDecorator('qrCodeUrl',{
                  initialValue:payInfo.qrCodeUrl,
                  valuePropName: 'fileList',
                  getValueFromEvent:normFile,
                   rules: [{ required: true, message:`${intl.get('USERINFO_QR_CODE')}${intl.get('GLOBAL_EMPTY')}`}]
                })(<UploadImg className="setting-ewm flex-box flex-box-center">
                 <p>{intl.get('USERINFO_QR_IMAGE')}(*.jpg / *.png / *.jpeg)</p>
                </UploadImg>
              )}
            </FormItem>
            
            </Fragment>)}
          
            <FormItem label={intl.get('GLOBAL_PWD_PRICE')} colon={false}  >
              {form.getFieldDecorator('jyPassword',{
                rules: [{ required: true, message: `${intl.get('GLOBAL_PWD_PRICE')}${intl.get('GLOBAL_EMPTY')}` }]
              })(
                <Input type="password" placeholder={`${intl.get('USERINFO_PLEASE_ENTER')}${intl.get('GLOBAL_PWD_PRICE')}`} />
              )}
            </FormItem>
            </div>
             <div className="bt-gray mt-md pb-sm pt-sm  flex-box flex-end flex-alignItem">
                 
                 <div className="pd-25">
                    <Button key="back" className="border-rest opacity-5" size="large" onClick={handleCancel}>{intl.get('GLOBAL_CANCEL')}</Button>
                    <Button className="pd-25" key="submit" type="primary" size="large"  onClick={handleOk}>{intl.get('GLOBAL_OK')}</Button>
                 </div>
              </div>
       </Fragment>
    );
});
const CreateFormNickName = Form.create()(props => {
    const { form, handleEdit } = props;
    const handleOk = () => {
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            handleEdit(fieldsValue,form);
        });
    };
    const regNick = (rule, value, callback) => {
        if  (!nickName.test(value)) {
            callback(intl.get('USERINFO_NICKNAME_VAILd1'));
        } else if(getByteLen(value)>20){
            callback(intl.get('USERINFO_NICKNAME_VAILd2'));
        }else{
          callback();
        }
    };

    
    return (
        <Form layout="inline" className="ml-lg flex-box flex-between flex-alignItem">

          <FormItem >
              {form.getFieldDecorator('nickname',{
                  initialValue:'',
                  rules: [{ required: true, message: `${intl.get('USERINFO_NICKNAME')}${intl.get('GLOBAL_EMPTY')}` },
                  {validator: regNick}]
                })(<Input style={{width:300}} type="text"  maxLength={20} placeholder={`${intl.get('USERINFO_PLEASE_ENTER')}${intl.get('USERINFO_NICKNAME')}`} />
              )}
            </FormItem>
          <Button type="primary" style={{width:144}} size="large" onClick={handleOk}>确认修改</Button>
     </Form>
    );
});

@connect(({ user, global,loading }) => ({
    user,
    global
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class Setting extends PureComponent {
    constructor(props) {
        super(props);
        this.bankNameList = [
            { value: '中国工商银行', label: '中国工商银行' },
            { value: '中国农业银行', label: '中国农业银行' },
            { value: '中国建设银行', label: '中国建设银行' },
            { value: '中国邮政储蓄银行', label: '中国邮政储蓄银行' },
            { value: '招商银行', label: '招商银行' },
            { value: '中国银行', label: '中国银行' },
            { value: '交通银行', label: '交通银行' },
            { value: '中信银行', label: '中信银行' },
            { value: '华夏银行', label: '华夏银行' },
            { value: '中国民生银行', label: '中国民生银行' },
            { value: '广发银行', label: '广发银行' },
            { value: '平安银行', label: '平安银行' },
            { value: '兴业银行', label: '兴业银行' },
            { value: '上海浦东发展银行', label: '上海浦东发展银行' },
            { value: '浙商银行', label: '浙商银行' },
            { value: '渤海银行', label: '渤海银行' },
            { value: '恒丰银行', label: '恒丰银行' },
            { value: '花旗银行', label: '花旗银行' },
            { value: '渣打银行', label: '渣打银行' },
            { value: '汇丰银行', label: '汇丰银行' },
            { value: '中国光大银行', label: '中国光大银行' },
            { value: '上海银行', label: '上海银行' },
            { value: '江苏银行', label: '江苏银行' },
            { value: '重庆银行', label: '重庆银行' },
            { value: '天津银行', label: '天津银行' },
            { value: '厦门银行', label: '厦门银行' },
            { value: '城市商业银行', label: '城市商业银行' },
            { value: '农村商业银行', label: '农村商业银行' },
            { value: '徽商银行', label: '徽商银行' }
        ];
        this.state = {
            payInfo: payForm,
            type: 1, //1绑定，2修改
            status: 2, //下拉默认值
            visible: false
        };
    }
    componentDidMount() {
            const {dispatch, user: { userSetting },global:{lang},history } = this.props;
            if (userSetting.realVerified === 0) {
                message.error(intl.get('GLOBAL_AUTONYME'));
                history.push(`/${lang}/user/identity`);
                console.log(1);
            } else if (userSetting.fundsVerified === 0) {
                message.error(intl.get('USERINFO_EMPTY_PRICE'));
                history.push(`/${lang}/user/safety`);
            } else {
                dispatch({
                    type: 'user/fetchUserPayment'
                });

            }

        }
        /**
         * [showModal 初始化表单数据]
         * @param  {[type]} state [description]
         * @param  {[type]} type  [description]
         * @return {[type]}       [description]
         */
    showModal = (state, type) => {
        const { user: { userPayment } } = this.props;
        let paydata = {};
        let qrCodeUrl = [];
        if (type === 2) {
            paydata = userPayment[{ 2: 'bankInfo', 3: 'alipay', 4: 'wechatPay', 5: 'fmpay' }[state]];
            paydata.qrCodeUrl=paydata.qrCodeUrl || paydata.qrWeCodeUrl || paydata.qrFmUrl;
            qrCodeUrl = paydata.qrCodeUrl ? [{ uid: '-1', url: paydata.qrCodeUrl}] : [];
        }
        this.setState({
            payInfo: {
                ...paydata,
                qrCodeUrl
            },
            type: type,
            status: state,
            visible: true
        });
    }

    handleCancel = (e) => {
            this.setState({
                payInfo: cloneDeep(payForm),
                visible: false
            });
        }
        /**
         * [handleOk 支付方式提交]
         * @param  {[type]} value [description]
         * @return {[type]}       [description]
         */
    handleOk = (value, form) => {
            const { status, type } = this.state;
            const { dispatch,global:{pathName},history } = this.props;
            const typeWay = { 2: 'user/saveBindBank', 3: 'user/saveBindAlipay', 4: 'user/saveBindWechat', 5: 'user/saveBindFm' }[status];
            if (value.qrCodeUrl) {
                value.qrCodeUrl = value.qrCodeUrl[0].url ? value.qrCodeUrl[0].url : value.qrCodeUrl[0].response.data;

            }
            dispatch({
                type: typeWay,
                payload: {
                    ...value,
                    type
                },
                callback: () => {
                    this.handleCancel();
                    form.resetFields();
                    dispatch({
                        type: 'user/fetchUserPayment'
                    });
                    const flag=true;
                    if(pathName || Cookies.get('pathname')){
                       Modal.confirm({
                          title: intl.get('GLOBAL_WAEM'),
                          content: '是否返回法币交易？',
                          okText: intl.get('GLOBAL_OK'),
                          cancelText: intl.get('GLOBAL_CANCEL'),
                          onOk:()=>{
                            history.go(-1);
                          }
                        });
                    }
                }
            });

        }
        /**
         * [selectHandle 支付方式下拉]
         * @param  {[type]} num [description]
         * @return {[type]}     [description]
         */
    selectHandle = (num) => {
        this.setState({
            status: num
        });
    }
    /**
     * [修改昵称]
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
    nickNamehandle = (value,form) => {
        const { dispatch, user: { userInfo } } = this.props;
        dispatch({
            type: 'user/saveUserNickName',
            payload: {
                id: userInfo.id,
                ...value
            },
            callback(){
              form.resetFields();
            }
        });
    }
    render() {
        const { visible, status, payInfo } = this.state;
        const { user: { userPayment } } = this.props;
        const handleEdit = {
            selectChange: this.selectHandle,
            handleCancel: this.handleCancel,
            handleEdit: this.handleOk,
            bankNameList: this.bankNameList,
            name: userPayment.realName,
            payInfo: payInfo
        };

        return (
            <Layout white className="user setting container">
                 <article className="article flex-box flex-between">
                    <Aside />
                   <section className="content">
                        <Box className="mt-lg" title={intl.get('USERINFO_EDIT_NICKNAME')} >
                         <div className="user-box pt-lg  pb-lg">
                             <CreateFormNickName handleEdit={this.nickNamehandle} />
                         </div> 
                       </Box>
                       <Box className="mt-lg" title={<Fragment>{intl.get('GLOBAL_PAY_MANAGER')}<small className="ml-sm opacity-5">{intl.get('USERINFO_DESC_5')}</small></Fragment>} >
                         <div className="user-box pt-lg  pb-lg ">
                            <div className="setting-item flex-box flex-alignItem">
                              <Icon  className="icon fz-lg ml-md bank-icon" type="yinhangqia" />
                              <p className="declare ml-xs fz-xs opacity-5">{intl.get('GLOBAL_BANK')}</p>
                              <p className="info fz-xs ellipsis">
                                 {userPayment.bankInfo&&(
                                  <Fragment>
                                    <span className="mr-sm">{userPayment.realName}</span>
                                    <span className="mr-sm">{userPayment.bankInfo.cardNo}</span>
                                    <span className="mr-sm">{userPayment.bankInfo.bank}</span>
                                    <span>{userPayment.bankInfo.branch}</span>
                                  </Fragment>)} 
                                 </p>
                              <div className="btn flex-box flex-end">
                                 {}
                                 <p className="yellow pointer" onClick={()=>this.showModal(2,userPayment.bankInfo?2:1)}>{userPayment.bankInfo?intl.get('USERADV_EDIT'):intl.get('USERINFO_BINDING')}</p>
                               
                              </div>
                            </div>
                            <div className="setting-item flex-box flex-alignItem">
                              <Icon  className="icon fz-lg ml-md zfb-icon" type="zhifubao" />
                              <p className="declare ml-xs fz-xs opacity-5">{intl.get('GLOBAL_ALIPAY')}</p>
                              <p className="info fz-xs">
                               {userPayment.alipay&&(
                                  <Fragment>
                                    <span className="mr-sm">{userPayment.realName}</span>
                                    <span className="mr-sm">{userPayment.alipay.aliNo}</span>
                                    <span className="mr-sm">{intl.get('GLOBAL_ALIPAY')}</span>
                                  </Fragment>)} 
                              </p>
                              <div className="btn flex-box flex-end">
                                 <p className="yellow pointer" onClick={()=>this.showModal(3,userPayment.alipay?2:1)}>{userPayment.alipay?intl.get('USERADV_EDIT'):intl.get('USERINFO_BINDING')}</p>
                                 
                              </div>
                            </div>
                            {/* <div className="setting-item flex-box flex-alignItem">
                              <Icon  className="icon fz-lg ml-md wx-icon" type="weixin-copy" />
                              <p className="declare ml-xs fz-xs opacity-5">{intl.get('GLOBAL_WECHAT')}</p>
                              <p className="info fz-xs">
                               {userPayment.wechatPay&&(
                                  <Fragment>
                                    <span className="mr-sm">{userPayment.realName}</span>
                                    <span className="mr-sm">{userPayment.wechatPay.wechat}</span>
                                    <span className="mr-sm">{intl.get('GLOBAL_WECHAT')}</span>
                                  </Fragment>)} 
                              </p>
                              <div className="btn flex-box flex-end">
                                 <p className="yellow pointer" onClick={()=>this.showModal(4,userPayment.wechatPay?2:1)}>{userPayment.wechatPay?intl.get('USERADV_EDIT'):intl.get('USERINFO_BINDING')}</p>
                              
                              </div>
                            </div> */}

                            <div className="setting-item flex-box flex-alignItem">
                              <Icon  className="icon fz-lg ml-md fm-icon" type="fm" />
                              <p className="declare ml-xs fz-xs opacity-5">{intl.get('GLOBAL_FM')}</p>
                              <p className="info fz-xs">
                               {userPayment.fmpay&&(
                                  <Fragment>
                                    <span className="mr-sm">{userPayment.realName}</span>
                                    <span className="mr-sm">{userPayment.fmpay.fmNo}</span>
                                    <span className="mr-sm">{intl.get('GLOBAL_FM')}</span>
                                  </Fragment>)} 
                              </p>
                              <div className="btn flex-box flex-end">
                                 <p className="yellow pointer" onClick={()=>this.showModal(5,userPayment.fmpay?2:1)}>{userPayment.fmpay?intl.get('USERADV_EDIT'):intl.get('USERINFO_BINDING')}</p>
                              </div>
                            </div>
                         </div>
                       </Box>
                   </section>
                     <Modal
                       wrapClassName="model userInfo-model setting-model"
                       width={500}
                       title={intl.get('GLOBAL_PAY_MANAGER')}
                       visible={visible} 
                       onCancel={this.handleCancel} 
                       maskClosable={false}
                       footer={null} >
                              <CreateForm status={status} {...handleEdit}  />
                     </Modal>
                 </article>
            </Layout>
        );
    }
}

export default Setting;
