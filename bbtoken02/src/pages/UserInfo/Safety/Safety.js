/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-15 16:56:54
 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import cx from 'classnames';
import intl from 'react-intl-universal';
import { Modal, Button, Icon, message } from 'antd';


import Layout from '@/layouts/';
import { replacePhone } from '@/utils/utils';

import Aside from '../component/Aside';
import Box from '../component/Box';
import CloseForm from './component/CloseForm';
import PhoneForm from './component/PhoneForm';
import PrcieForm from './component/PrcieForm';
import EmailForm from './component/EmailForm';




import './../UserInfo.less';
import './Safety.less';






@connect(({ user, global, loading }) => ({
    user,
    global
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class Safety extends PureComponent {
    constructor(props) {
        super(props);
      
        this.state = {
            confirmDirty:false,
            visible: false,
            status: 1,
            type:1 //1保存，2修改

        };

    }
    componentDidMount() {

    }
    showModal = (state,type=1) => {
            this.setState({
                visible: true,
                status: state,
                type
            });
        }
     handleConfirmBlurChange=(value)=>{
        this.setState({ confirmDirty: this.state.confirmDirty  || !!value });

     }   
        /**
         * [codeHandle 发送验证码]
         * @param  {[type]} type  [类型]
         * @param  {[type]} value [值]
         * @return {[type]}       [description]
         */
    codeHandle(type, value) {
            const { dispatch } = this.props;
            return new Promise((resolve) => {
                dispatch({
                    type: type,
                    payload: value,
                    callback: (state) => {

                        resolve(state);
                    }
                });
            });

        }
        /**
         * [bindHandle 绑定]
         * @param  {[type]} type  [description]
         * @param  {[type]} value [description]
         * @param  {[type]} form  [description]
         * @return {[type]}       [description]
         */
    bindHandle(type, value, form) {
            const { dispatch } = this.props;
            dispatch({
                type: type,
                payload: value,
                callback: () => {
                    form.resetFields();
                    this.cancelHandle();
                }
            });

        }
        /**
         * [邮箱验证码]
         * @param  {[type]} fieldsValue [description]
         * @return {[type]}             [description]
         */
    codeEmailHandle = (fieldsValue) => {
            this.codeHandle("global/fetchGetEmailCode", fieldsValue);
        }
        /**
         * [EmailOkhandle 绑定邮箱]
         * @param {[type]} value [description]
         */
    emailOkHandle = (fieldsValue, form) => {

            this.bindHandle("user/saveUserBindEmail", fieldsValue, form);
        }
        /**
         * [手机验证码]
         * @param  {[type]} fieldsValue [description]
         * @return {[type]}             [description]
         */
    codePhoneHandle = (fieldsValue) => {
            this.codeHandle("global/fetchGetPhoneCode", fieldsValue);
        }
        /**
         * [EmailOkhandle 绑定手机]
         * @param {[type]} value [description]
         */
    phoneOKHandle = (fieldsValue, form) => {
            this.bindHandle("user/saveUserBindPhone", fieldsValue, form);
        }
        /**
         * [资金验证码]
         * @param  {[type]} fieldsValue [description]
         * @return {[type]}             [description]
         */
    codePriceHandle = (fieldsValue) => {
            const { dispatch, user: { userSetting: { mobilePhone, email } } } = this.props;
            return new Promise(resolve => {
                const { type } = fieldsValue;
                const list = [{
                    name: "phone",
                    type: 'global/fetchGetEmailPhoneCode',
                    isValue: mobilePhone,
                    value: { mobilePhone, type, areaCode: 86 },
                    mes: intl.get('GLOBAL_CERN_PHONE')
                }, {
                    name: "email",
                    type: 'global/fetchGetEmailPhoneCode',
                    isValue: email,
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


        }
        /**
         * [EmailOkhandle 修改,保存资金密码 0设置，1修改]
         * @param {[type]} value [description]
         */
    priceOKHandle = (fieldsValue, form) => {
        this.bindHandle("user/userfundsPasswords", {...fieldsValue}, form);
    }

    cancelHandle = (e) => {
        this.setState({
            visible: false
        });
    }

    safetyClass = (user) => {
        return (user.email && user.mobilePhone && user.fundsVerified===1) ? 'bar-100' : 'bar-50';
    }
    createForm =(status,type=1,lang)=>{
       return [{
            title: intl.get('USERINFO_CLOSE_VAILD'),
            elemt: <CloseForm codeHandle={this.codeHandle} cancelHandle={this.cancelHandle}  saveHandle={this.emailOkHandle}  type={type}  />
        }, {
            title: intl.get('USERINFO_BIND_PHONE'),
            elemt: <PhoneForm codeHandle={this.codePhoneHandle} cancelHandle={this.cancelHandle} saveHandle={this.phoneOKHandle} type={type}    />
        }, {
            title: intl.get('GLOBAL_PWD_PRICE'),
            elemt: <PrcieForm codeHandle={this.codePriceHandle} handleConfirmBlurChange={this.handleConfirmBlurChange} confirmDirty={this.state.confirmDirty} lang={lang} cancelHandle={this.cancelHandle} saveHandle={this.priceOKHandle}  type={type}   />
        }, {
            title: intl.get('USERINFO_BIND_EMIAL'),
            elemt: <EmailForm codeHandle={this.codeEmailHandle} cancelHandle={this.cancelHandle} saveHandle={this.emailOkHandle}   type={type}   />
        }][status];
    }
    render() {
        const { user: { userSetting },global:{lang} } = this.props;
        const { visible, status,type } = this.state;

        return (
            <Layout white className="user safety container">
                 <article className="article flex-box flex-between">
                    <Aside />
                   <section className="content">
                       <Box className="mt-lg" title={intl.get('USERINFO_DUAL')}>
                        <div className="user-box  pt-lg pb-150">
                            <div>{intl.get('USERINFO_LEVEL')}：<span className={cx('bar',this.safetyClass(userSetting))}></span><span className="yellow ml-sm">{(userSetting.email && userSetting.mobilePhone) ? intl.get('USERINFO_HIGH') :intl.get('USERINFO_MEDIUM')}</span></div>
                            <div className="safety-item flex-box flex-alignItem">
                              <Icon  
                                className={cx('icon','fz-lg',{green:userSetting.email,red:!userSetting.email})} 
                                type={userSetting.email?'check-circle':'exclamation-circle'}/>
                              <div className="declare">
                                  <p className="fz-xs">{intl.get('TRADE_MAILBOX')}</p>
                                  <p className="opacity-5">{intl.get('USERINFO_DESC_4')}  </p>
                              </div>
                              <p className="info">{userSetting.email}</p>
                              <div className="btn flex-box flex-end">
                                 {userSetting.email? (<Fragment><Button type="primary" size="large" onClick={()=>this.showModal(4)}><span className="blue">{intl.get('USERADV_EDIT')}</span></Button></Fragment>):<Button type="primary" size="large" onClick={()=>this.showModal(4)}><span className="blue">{intl.get('USERINFO_BINDING')}</span></Button>}
                              </div>
                            </div>
                            <div className="safety-item flex-box flex-alignItem">

                              <Icon  
                                className={cx('icon','fz-lg',{green:userSetting.mobilePhone,red:!userSetting.mobilePhone})} 
                                type={userSetting.mobilePhone?'check-circle':'exclamation-circle'}/>
                              <div className="declare">
                                  <p className="fz-xs">{intl.get('TRADE_MOBILE')}</p>
                                  <p className="opacity-5">{intl.get('USERINFO_DESC_4')} </p>
                              </div>
                              <p className="info">{userSetting.mobilePhone &&(replacePhone(userSetting.mobilePhone))}</p>
                              <div className="btn flex-box flex-end">
                                 {userSetting.mobilePhone? (<Fragment><Button type="primary" size="large" onClick={()=>this.showModal(2)}><span className="blue">{intl.get('USERADV_EDIT')}</span></Button></Fragment>):<Button type="primary" size="large" onClick={()=>this.showModal(2)}><span className="blue">{intl.get('USERINFO_BINDING')}</span></Button>}
                              </div>
                            </div>

                            <div className="safety-item flex-box flex-alignItem">
                              <Icon  
                                className={cx('icon','fz-lg',{green:userSetting.fundsVerified,red:!userSetting.fundsVerified})}
                                type={userSetting.fundsVerified?'check-circle':'exclamation-circle'} />
                              <div className="declare">
                                  <p className="fz-xs">{intl.get('GLOBAL_PWD_PRICE')}</p>
                                  <p className="opacity-5">{intl.get('USERINFO_DESC_6')}  </p>
                              </div>
                              <p className="info"></p>
                              <div className="btn flex-box flex-end" >
                                 {userSetting.fundsVerified===1? (<Fragment><Button type="primary" size="large" onClick={()=>this.showModal(3,2)}><span className="blue">{intl.get('USERADV_EDIT')}</span></Button></Fragment>):<Button type="primary" size="large" onClick={()=>this.showModal(3,1)}><span className="blue">{intl.get('TOP_SETTING')}</span></Button>}
                              </div>
                            </div>
                         </div>
                       </Box>
                     <Modal
                       wrapClassName="model userInfo-model"
                       width={500}
                       title={this.createForm(status-1,type).title}
                       visible={visible} 
                       onCancel={this.cancelHandle} 
                       maskClosable={false}
                       footer={null} >
                        {this.createForm(status-1,type,lang).elemt}
                    </Modal>
                      
                   </section>
                 </article>
            </Layout>

        );
    }
}

export default Safety;
