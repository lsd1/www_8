/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-17 10:01:37
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import intl from 'react-intl-universal';
import { Button, Form, Row, Col, Input, Select,message } from 'antd';
import Code from '@/components/Code/Code';
import { pwd } from '@/utils/regular';
import Layout from '@/layouts/';
import Aside from '../component/Aside';
import Box from '../component/Box';
import './../UserInfo.less';
import './editPwd.less';

const FormItem = Form.Item;
const Option = Select.Option;



@Form.create()
@connect(({ user,global, loading }) => ({
    user,
    global
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class Safety extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          confirmDirty: false,
            active: 1

        };

    }
    componentDidMount() {

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
            if (value && value !== form.getFieldValue('newPassword')) {
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
         * [passwordContrast 新旧密码和确认密码比对]
         * @return {[type]} [description]
         */
    passwordContrast = (rule, value, callback) => {
            const form = this.props.form;

            if (value && value === form.getFieldValue('oldPassword')) {
                callback(intl.get('GLOBAL_PWDNEW_COMPARETO'));
            } else if (value && this.state.confirmDirty) {
               form.validateFields(['compare_pwd'], { force: true });
                callback();
            }else{
                callback();
            }


        }

        /**
         * 提交
         */
    handleSubmit = (e) => {
            const { dispatch, history,global:{lang} } = this.props;
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    dispatch({
                        type: 'user/saveUpdatePwd',
                        payload: {...values },
                        callback: () => {
                            dispatch({
                                type: 'user/loginOut'
                            });
                            history.push(`/${lang}/login`);
                        }
                    });
                }
            });
        }
        //获取验证码
    codeClick = () => {
        const { dispatch, user: { userSetting: { mobilePhone, email } }, form } = this.props;


        return new Promise((resolve) => {
            form.validateFields(['type'], (err, fieldsValue) => {
                if (err) return;
          
                const { type } = fieldsValue;
                const list = [{
                    name: "phone",
                    type: 'global/fetchGetEmailPhoneCode',
                    isValue:mobilePhone,
                    value: { mobilePhone, type, areaCode: 86 },
                    mes: intl.get('GLOBAL_CERN_PHONE')
                }, {
                    name: "email",
                    type: 'global/fetchGetEmailPhoneCode',
                    isValue:email,
                    value: { email, type },
                    mes: intl.get('GLOBAL_CERN_EMAIL')
                }][type - 1];
                if (list.isValue) {
                    dispatch({
                        type: list.type,
                        payload: list.value

                    });
                      resolve();
                } else {
                    message.error(list.mes);
                }
              
            });
        });
    }
    render() {
        const { form } = this.props;
        return (
            <Layout white className="user editPwd container">
                 <article className="article flex-box flex-between">
                    <Aside />
                   <section className="content">
                       <Box  className="mt-lg" title={intl.get('USERINFO_EDITPWD')} >
                            <div className="user-box editPwd-box">
                              <Row>
                                <Col span={10} offset={7}>
                                  <Form onSubmit={this.handleSubmit}>
                                  <FormItem  label={intl.get('USERINFO_ORIGINAL_PWD')} colon={false} >
                                        {form.getFieldDecorator('oldPassword', {
                                           rules: [{ required: true, message: `${intl.get('USERINFO_ORIGINAL_PWD')}${intl.get('GLOBAL_EMPTY')}` }]
                                        })(
                                          <Input size="large" type="password" />
                                        )}
                                  </FormItem>
                                  <FormItem label={intl.get('USERINFO_NEW_PWD')} >
                                   {form.getFieldDecorator('newPassword', {
                                     validateFirst:true,
                                      rules: [{ required: true, message: `${intl.get('USERINFO_NEW_PWD')}${intl.get('GLOBAL_EMPTY')}` },{
                                       pattern:pwd,message:intl.get('GLOBAL_PWD_ERR')
                                      },{validator: this.passwordContrast}]
                                    })(
                                      <Input size="large" type="password"  />
                                    )}
                                  </FormItem>
                                  <FormItem  label={intl.get('USERINFO_CONFIRM_PWD')} colon={false} >
                                        {form.getFieldDecorator('compare_pwd', {
                                           rules: [{ required: true, message: `${intl.get('USERINFO_CONFIRM_PWD')}${intl.get('GLOBAL_EMPTY')}` },{
                                             validator: this.compareToFirstPassword
                                           }]
                                        })(
                                          <Input size="large" type="password" onBlur={this.handleConfirmBlur} />
                                        )}
                                  </FormItem>
                                  <FormItem label={intl.get('PROPERTY_MANNER')} >
                                     {form.getFieldDecorator('type', {
                                        initialValue:'',
                                        rules: [{ required: true, message: intl.get('USERINFO_PLEASE_CODE') }]
                                      })(
                                         <Select size="large"  style={{width:'100%'}}>
                                            <Option value={''}>{intl.get('USERINFO_PLEASE_CODE')}</Option>
                                            <Option value={1}>{intl.get('PROPERTY_MANNER_SMS')}</Option>
                                            <Option value={2}>{intl.get('PROPERTY_MANNER_EMAIL')}</Option>
                                         </Select>
                                      )}
                                    </FormItem>
                                    <FormItem label={intl.get('GLOBAL_CODE')} >
                                     {form.getFieldDecorator('code', {
                                        rules: [ { required: true, message: intl.get('GLOBAL_CODE_EMPTY') },
                                        {pattern:/^\d{6}$/,message:intl.get('USERINFO_VERIFICATION_NUMBER')}]
                                      })(
                                        <Input size="large" addonAfter={<Code className="group-code" name={intl.get('GLOBAL_CODE_BTN')} delay={60}  onClick={this.codeClick} />}  />
                                      )}
                                    </FormItem>
                                  <Button htmlType="submit" className="mt-lg" type="primary" size="large" block><span className="black">{intl.get('GLOBAL_OK')}</span></Button>
                                  </Form>
                                </Col>
                              </Row>
                          </div>
                          
                          
                          
                       </Box>
                   </section>
                 </article>
            </Layout>

        );
    }
}

export default Safety;
