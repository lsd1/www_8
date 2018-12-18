/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-11-01 19:26:19
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';
import { Form, Input, Button, Select, Checkbox, notification } from 'antd';
import cx from 'classnames';
import Protocol from './component/Protocol';
import Code from '@/components/Code/Code';
import { email, numbers, pwd } from '@/utils/regular';
import './Register.less';
import { delay } from '@/utils/utils';
import {backPrev} from '@/utils/decorator';
const FormItem = Form.Item;
const Option = Select.Option;







@Form.create()
@withRouter
@connect(({ global, user, loading }) => ({
    user,
    global,
    loadingPhone: loading.effects['user/phoneReg'],
    loadingEmial: loading.effects['user/emailReg']
}))
class Register extends PureComponent {
    constructor(props) {
        super(props);
        this.time = null;
        this._captchaResult = null;
        this._captchaReset = null;
        this.captcha = React.createRef();
        this.state = {
            confirmDirty: false,
            codeStatus: false,
            codeMes: intl.get('GLOBAL_CODE_BTN'),
            active: 1,
            visible: false
        };

    }
    @backPrev('/exchange/BTC/USDT')
    componentDidMount() {
            const { dispatch } = this.props;
            dispatch({
                type: 'global/fetchGetCountry'
            });


        }
        /**
         * [显示协议]
         * @param  {[type]} stauts [description]
         * @return {[type]}        [description]
         */
    showHandle = (stauts) => {
        const { form } = this.props;
        this.setState({
            visible: !this.state.visible
        });
        if (stauts === 1) {
            form.setFieldsValue({
                remember: true
            });
        }
    }
    cancelHandle = () => {
            this.setState({
                visible: false
            });
        }
        /**
         * [注册方式切换]
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
         * [验证确认密码是否一致]
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
     * [注册提交]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    handleSubmit = (e) => {
        const { form, dispatch, history, global: { lang } } = this.props;
        const { active } = this.state;
        e.preventDefault();

        form.validateFields((err, fieldsValue) => {
            if (err) return;

            if (active === 1) { //手机注册
                dispatch({
                    type: "user/phoneReg",
                    payload: {
                        username: fieldsValue.phone,
                        ...fieldsValue
                    },
                    callback: () => {
                        history.replace(`/${lang}/login`);
                    }
                });

            } else { //邮箱注册
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
                                type: "user/emailReg",
                                payload: {
                                    geetest_challenge,
                                    geetest_validate,
                                    geetest_seccode,
                                    username: fieldsValue.email.slice(0, 19),
                                    ...fieldsValue
                                },
                                callback: (data) => {
                                    notification['success']({
                                        message: intl.get('USER_MESS_NOTICE'),
                                        description: data.message
                                    });
                                    history.replace(`/${lang}/login`);

                                }
                            });

                        });
                    }
                });



            }

        });
    };
    /**
     * [根据国籍获取区号]
     * @param  {[type]} val [description]
     * @return {[type]}     [description]
     */
    countryHandle = (val, params) => {
            const { form } = this.props;
            form.setFieldsValue({
                areaCode: `+${params.props.area}`
            });
        }
        /**
         * [根据区号获取国籍]
         * @param  {[type]} val [description]
         * @return {[type]}     [description]
         */
    areaCodeHandle = (val, params) => {
            const { form } = this.props;
            form.setFieldsValue({
                country: params.props.country
            });
        }
        /**
         * [发送验证码]
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
    codeHandle = () => {
        return new Promise((resolve) => {
            const { form, dispatch } = this.props;
            form.validateFields(['phone', 'country'], (err, fieldsValue) => {
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
                                type: 'global/fetchGetCode',
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
    render() {
        const { form, global: { countryData }, match: { params }, loadingPhone, loadingEmial } = this.props;
        const { visible, active, codeMes } = this.state;

        const prefixSelector = form.getFieldDecorator('areaCode', {
            initialValue: 'China'
        })(
            <Select style={{ width: 100 }} onChange={this.areaCodeHandle}>
            {countryData.map(item=>{
                return (<Option key={item.enName} country={item.zhName} value={item.enName}>{`+${item.areaCode}`}</Option>);
              })}
          </Select>
        );


        return (
            <Layout content footMarginTop={0} className="register " title={intl.get('USER_REGISTER')}>
                   <div className="container ">
                   <div className="flex-box register-box">
                      <Form className="register-left" onSubmit={this.handleSubmit} layout="vertical">
                          <p className="register-title">{intl.get('USER_REGISTER_EXBB')}</p>
                          <dl className="register-tab flex-box white mb-md">
                             <dd className={cx('register-item',{active:active===1})}  onClick={()=>this.switchHandle(1)}>{intl.get('USER_MOBILE_REG')}</dd>
                             <dd className={cx('register-item',{active:active===2})} onClick={()=>this.switchHandle(2)}>{intl.get('USER_MAILBOX_REG')}</dd>
                          </dl>
                          <FormItem  label={intl.get('USER_NATIONALITY')} >
                              {form.getFieldDecorator('country', {
                                initialValue: '中国'
                              })(
                                <Select  style={{ width: '100%' }} onChange={this.countryHandle}>
                                  {countryData.map(item=>{
                                    return (<Option key={item.enName}  area={item.areaCode}  value={item.zhName}>{item.zhName}</Option>);
                                  })}
                                </Select>
                              )}
                            </FormItem>
                             <FormItem  label={active===1?intl.get('USER_MOBILE_NUMBER'):intl.get('USER_MAILBOX')} >
                              {form.getFieldDecorator(`${active===1?'phone':'email'}`, {
                                rules: [{ required: true, message: `${active===1?intl.get('USER_MOBILE_NUMBER'):intl.get('USER_MAILBOX')}${intl.get('GLOBAL_EMPTY')}` },{
                                pattern:active===1?numbers:email,message:`${active===1?intl.get('USER_MOBILE_NUMBER'):intl.get('USER_MAILBOX')}${intl.get('USER_FORMAT')}`   
                                }]
                              })(
                                <Input addonBefore={active===1?prefixSelector:null} style={{ width: '100%' }} maxLength={50} />
                              )}
                            </FormItem>
                            {active===1&&(
                              <FormItem  label={intl.get('GLOBAL_CODE')} >
                             {form.getFieldDecorator('code', {
                                rules: [{ required: true, message: `${intl.get('GLOBAL_CODE')}${intl.get('GLOBAL_EMPTY')}` }]
                              })(
                                <Input addonAfter={<Code className="group-code" name={codeMes} delay={60}  onClick={this.codeHandle} />} style={{ width: '100%' }} />
                              )}
                            </FormItem>
                            )}
                            <div id="captcha" ref={this.captcha} style={{height:0,overflow: 'hidden'}}></div>
                             <FormItem label={intl.get('USER_LOGIN_PAD')}  >
                              {form.getFieldDecorator('password', {
                                rules: [{ required: true, message: `${intl.get('USER_LOGIN_PAD')}${intl.get('GLOBAL_EMPTY')}` },{
                                 pattern:pwd,message:intl.get('GLOBAL_PWD_ERR') 
                                },{
                                   validator: this.validateToNextPassword
                                 }]
                                
                              })(
                                <Input type="password" />
                              )}
                            </FormItem>
                             <FormItem  label={intl.get('USER_CONFIRM_PWD')}  >
                              {form.getFieldDecorator('compare_pwd', {
                              
                                rules: [{ required: true, message: `${intl.get('USER_CONFIRM_PWD')}${intl.get('GLOBAL_EMPTY')}` },{
                                   validator: this.compareToFirstPassword
                                 }]
                              })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                              )}
                            </FormItem>
                            <FormItem  label={intl.get('USER_INVITATION')}  >
                              {form.getFieldDecorator('promotion',{
                                initialValue: params.agent
                              })(
                                <Input />
                              )}
                            </FormItem>
                            <FormItem>
                              {form.getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: false,
                                rules: [{
                                   validator:(rule, value, callback) => {
                                      if (!value) {
                                          callback(intl.get('USER_USER_AGREEMENT'));
                                      } else {
                                          callback();
                                      }
                                  }
                                 }]
                              })(
                                <Checkbox><span className="white">{intl.get('USER_READ')}</span></Checkbox>
                              )}
                              <span className="login-form-forgot yellow pointer" onClick={this.showHandle}>{intl.get('USER_AGREEMENT')}</span>
                            </FormItem>
                            <div className="mt-lg flex-box flex-end">
                               <Button  block type="primary" size="large" htmlType="submit" loading={loadingPhone || loadingEmial}><span className="blue">{intl.get('USER_NOW')}</span></Button>
                            </div>
                       </Form>
                       <div className="register-right white">
                          <p>{intl.get('USER_DESC_4')}</p>
                          <p className="register-small">{active===2&& intl.get('USER_DESC_5')}</p>
                          <p className="register-info">{intl.get('USER_DESC_6')}</p>
                          <p>{intl.get('USER_DESC_7')}</p>
                       </div>
                      </div> 
                   </div>
                   <Protocol visible={visible} onOk={this.showHandle} cancelHandle={this.cancelHandle} />
             </Layout>
        );
    }
}

export default Register;
