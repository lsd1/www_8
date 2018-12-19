
/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-31 19:58:57
 */
import React, { PureComponent  } from 'react';
import { connect } from 'dva';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';
import { Form, Input, Button, Icon } from 'antd';
import { Link } from 'dva/router';
import {pwd} from '@/utils/regular';
import {backPrev} from '@/utils/decorator';

const FormItem = Form.Item;



import './Login.less';

@Form.create()
@connect(({ user,global, loading }) => ({
   global,
    user,
    loading: loading.effects['user/login']
}))
class Login extends PureComponent  {
    constructor(props) {
        super(props);
        this.captcha = React.createRef();
        this._captchaReset = null;
        this.state = {
            captchaCount: 0,
            captchaResult: null
        };
    }


    @backPrev('/exchange/MDB/USDT')
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'user/fetchGetCaptcha',
            callback: (captchaObj) => {
                    // 将验证码加到id为captcha的元素里，同时会有三个input的值用于表单提交
                    const captcha = this.captcha.current;
                    captchaObj.appendTo(captcha);
                    captchaObj.onReady(() => {
                        captcha && captcha.removeChild(captcha.childNodes[0]);
                    });
                    captchaObj.onSuccess(() => {
                        this.setState({
                            captchaCount: 0,
                            captchaResult: captchaObj.getValidate()
                        });
                    });
                    this._captchaReset = captchaObj;
            
            }
        });


    }
    

   /**
    * [登录]
    * @param  {[type]} e [description]
    * @return {[type]}   [description]
    */
    handleSubmit = (e) => {
        const { captchaResult, captchaCount } = this.state;
        const { form, dispatch } = this.props;
        e.preventDefault();
        form.validateFields((err, fieldsValue) => {
            if (!captchaResult||err) {
                if ((captchaCount === 0)&&!captchaResult) {
                    this.setState({
                        captchaCount: 1
                    });
                    
                }
                return false;
            }
           const { geetest_challenge, geetest_validate, geetest_seccode } = captchaResult;
            dispatch({
              type:"user/login",
              payload:{
                ...fieldsValue,
                geetest_challenge,
                geetest_validate,
                geetest_seccode
              },
              callback:()=>{
                  this.setState({
                    captchaResult:null
                  });
                  this._captchaReset.reset();
              }
            });

            return true;

        });
    };

    render() {
        const { form,global:{lang},loading } = this.props;
        const { captchaCount } = this.state;



        return (
             <Layout content footMarginTop={0} className="login " title={intl.get('USER_LOGIN')}>
                   <div className="container ">
                   <div className="flex-box login-box">
                      <Form className="login-left" onSubmit={this.handleSubmit} layout="vertical">
                          <p className="login-title">{intl.get('USER_WELCOME')}</p>
                          <FormItem label={intl.get('USER_NAME')}  >
                              {form.getFieldDecorator('username', {
                                rules: [{ required: true, message: intl.get('USER_EMAILPHONE_EMPTY') }]
                              })(
                                <Input   autoComplete="off"  placeholder={intl.get('USER_EMAILPHONE_PLEASE')} />
                              )}
                            </FormItem>
                             <FormItem  label={intl.get('USER_PWD')}  >
                              {form.getFieldDecorator('password', {
                                rules: [{ required: true, message: intl.get('USER_PWD_EMPTY') },{
                                 pattern:pwd,message: intl.get('GLOBAL_PWD_ERR')
                                }]
                              })(
                                <Input autoComplete="off" type="password" placeholder={intl.get('USER_PWD_PLEASE')} />
                              )}
                            </FormItem>
                            <FormItem  label={intl.get('USER_CLIKC_VAILD')}  validateStatus={!captchaCount?'success':'error'} help={!captchaCount?'':intl.get('USER_VAILD_ERR')} >
                             <div id="captcha" ref={this.captcha}>
                                 <p id="wait" ><Icon type="loading" style={{ fontSize: 24 }} spin /></p>
                             </div>
                            </FormItem>
                             <p className=" mt-sm"><Link className="yellow" to={`/${lang}/resetPwd`}>{intl.get('USER_FORGER_PWD')}</Link></p>
                            <div className="mt-lg flex-box flex-end">
                               <Button  block type="primary" size="large" loading={loading} htmlType="submit"><span className="blue">{intl.get('USER_ITELY_PWD')}</span></Button>
                            </div>
                       </Form>
                       <div className="login-right white">
                          <p>{intl.get('USER_DESC_1')}</p>
                          <p>{intl.get('USER_DESC_2')}</p>
                          <p className="mt-lg fz-xs"><Link className="yellow" to={`/${lang}/register`}>{intl.get('USER_DESC_3')}</Link></p>
                       </div>
                      </div> 
                   </div>
              </Layout>
        );
    }
}

export default Login;
