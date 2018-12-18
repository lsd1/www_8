
/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-31 19:57:10
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';
import { Form, Input, Button,Select } from 'antd';
import {email,numbers,pwd}  from '@/utils/regular';
import Code from '@/components/Code/Code';
import { delay } from '@/utils/utils';
import {backPrev} from '@/utils/decorator';
const FormItem = Form.Item;
const Option = Select.Option;



import './ResetPwd.less';


@Form.create()
@connect(({ user,global, loading }) => ({
    global,
    user
}))
class ResetPwd extends PureComponent {
    constructor(props) {
        super(props);
        this._captchaResult = null;
        this._captchaReset = null;
        this.captcha = React.createRef();
        this.state={
          confirmDirty: false,
            active:0,
            codeMes: intl.get('GLOBAL_CODE_BTN')
        };

    }
    @backPrev('/exchange/BTC/USDT')
    componentDidMount() {
    	

    }
      /**
         * [验证方式切换]
         * @param  {[type]} active [description]
         * @return {[type]}        [description]
         */
    switchHandle = (active) => {
        const { form } = this.props;
        if (active === this.state.active) return;
        form.resetFields();
        this.setState({
            active
        });

    }
    /**
     * [验证密码是否一致]
     * @param  {[type]}   rule     [description]
     * @param  {[type]}   value    [description]
     * @param  {Function} callback [description]
     * @return {[type]}            [description]
     */
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;

        if (value && value !== form.getFieldValue('password')) {
            callback(intl.get('GLOBAL_PWD_COMPARETO'));
        } else {
            callback();
        }
    }
     handleConfirmBlur = (e) => {
            const value = e.target.value;
            this.setState({ confirmDirty: this.state.confirmDirty || !!value });
        }
        /**
         * [验证密码是否一致]
         * @param  {[type]}   rule     [description]
         * @param  {[type]}   value    [description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['compare_pwd'], { force: true });
        }
        callback();
    }
    /**
     * [发送验证码]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    codeHandle = () => {
      return new Promise((resolve)=>{
          const { form, dispatch } = this.props;
            form.validateFields(['account','mode'], (err, fieldsValue) => {
                if (err) return;

                const captcha = this.captcha.current;
                captcha.innerHTML = '';
                dispatch({
                    type: 'user/fetchGetCaptcha',
                    callback: (captchaObj) => {
                        // 将验证码加到id为captcha的元素里，同时会有三个input的值用于表单提交

                        captchaObj.appendTo(captcha);
                        captchaObj.onReady(async() => {
                            await delay(0);
                            captcha.querySelector('.geetest_holder').click();

                        });

                        captchaObj.onSuccess(() => {
                            const { geetest_challenge, geetest_validate, geetest_seccode } = captchaObj.getValidate();
                            dispatch({
                                type: 'user/editRestPassWord',
                                payload: {
                                    ...fieldsValue,
                                    geetest_challenge,
                                    geetest_validate,
                                    geetest_seccode
                                },
                                callbackErr: () => {
                                    captchaObj.reset();
                                },
                                callbackOk: () => {
                                    resolve();
                                }
                            });
                        });
                    }
                });
            });
        });
    }


    handleSubmit = (e) => {
        const { form,dispatch,global:{lang},history } = this.props;
        e.preventDefault();
        form.validateFields((err, fieldsValue) => {
            if (err) return;
               dispatch({
                    type: "user/resetPassword",
                    payload: {
                        ...fieldsValue
                    },
                    callback: () => {
                      history.replace(`/${lang}/login`);
                    }
                });
        });
    };

    render() {
        const { form } = this.props;
        const {active,codeMes}=this.state;
     


        return (
            <Layout content footMarginTop={0} className="resetPwd">
                   <div className="container ">
                   <div className="flex-box resetPwd-box">
                      <Form className="resetPwd-left" onSubmit={this.handleSubmit} layout="vertical">
                          <p className="resetPwd-title">重置密码</p>
                            <FormItem label={intl.get('PROPERTY_MANNER')} >
                                 {form.getFieldDecorator('mode', {
                                    initialValue:0,
                                    rules: [{ required: true, message: intl.get('USERINFO_PLEASE_CODE') }]
                                  })(
                                     <Select size="large"  style={{width:'100%'}} onChange={this.switchHandle}>
                                        <Option value={0}>{intl.get('PROPERTY_MANNER_SMS')}</Option>
                                        <Option value={1}>{intl.get('PROPERTY_MANNER_EMAIL')}</Option>
                                     </Select>
                                  )}
                            </FormItem>
                             <FormItem  label={active===0?intl.get('USER_MOBILE_NUMBER'):intl.get('USER_MAILBOX')} >
                              {form.getFieldDecorator('account', {
                                rules: [{ required: true, message: `${active===0?intl.get('USER_MOBILE_NUMBER'):intl.get('USER_MAILBOX')}${intl.get('GLOBAL_EMPTY')}` },{
                                pattern:active===0?numbers:email,message:`${active===0?intl.get('USER_MOBILE_NUMBER'):intl.get('USER_MAILBOX')}${intl.get('USER_FORMAT')}`   
                                }]
                              })(
                                <Input  style={{ width: '100%' }} maxLength={50} />
                              )}
                            </FormItem>
                            <div id="captcha" ref={this.captcha} style={{height:0,overflow: 'hidden'}}></div>
                               <FormItem  label={intl.get('GLOBAL_CODE')} >
                             {form.getFieldDecorator('code', {
                                rules: [{ required: true, message: `${intl.get('GLOBAL_CODE')}${intl.get('GLOBAL_EMPTY')}` }]
                              })(
                                <Input addonAfter={<Code className="group-code" name={codeMes} delay={60}  onClick={this.codeHandle} />} style={{ width: '100%' }} />
                              )}
                            </FormItem>
                            
        				             <FormItem  label="新密码" colon={false} >
        				              {form.getFieldDecorator('password', {
        				              	rules: [{ required: true, message: `${intl.get('USER_LOGIN_PAD')}${intl.get('GLOBAL_EMPTY')}` },{
                                         pattern:pwd,message:intl.get('GLOBAL_PWD_ERR')},{
                                   validator: this.validateToNextPassword
                                 }]
        				              })(
        				                <Input type="password" />
        				              )}
        				            </FormItem>
                            <FormItem  label="确认新密码" colon={false} >
                              {form.getFieldDecorator('compare_pwd', {
                                rules: [{ required: true, message: `${intl.get('USER_CONFIRM_PWD')}${intl.get('GLOBAL_EMPTY')}` },{
                                   validator: this.compareToFirstPassword
                                 }]
                              })(
                                <Input type="password" onBlur={this.handleConfirmBlur}  />
                              )}
                            </FormItem>
 
				            <div className="mt-lg flex-box flex-end">
				               <Button  block type="primary" size="large" htmlType="submit"><span className="blue">立即重置</span></Button>
				            </div>
				       </Form>
				       
				      </div> 
                   </div>
             </Layout>
        );
    }
}

export default ResetPwd;
