/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-15 16:20:14
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import intl from 'react-intl-universal';
import { Button, Icon, Form, Row, Col, Input,Select,Alert,message  } from 'antd';

import Layout from '@/layouts/';
import {IDcode,passport} from '@/utils/regular';
import UploadImg from '@/components/UploadImg/';
import {fileUpload} from '@/utils/utils';
import Aside from '../component/Aside';
import Box from '../component/Box';



import './../UserInfo.less';
import './identity.less';

const FormItem = Form.Item;
const Option =Select.Option;



@Form.create()
@connect(({ user, loading }) => ({
    user,
    loading: loading.effects['user/saveUserApproveName']
}))
class Safety extends PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            active:0
        };

    }
    componentDidMount() {
      

    }
    /**
     * [实名认证提交]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    handleSubmit = (e) => {
        const {dispatch,form}=this.props;
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
               const idCardFront=values.idCardFront.length>0?values.idCardFront[0].response.data:null;
               const idCardBack=values.idCardBack&&values.idCardBack.length>0?values.idCardBack[0].response.data:0;
               const handHeldIdCard=values.handHeldIdCard.length>0?values.handHeldIdCard[0].response.data:null;
                dispatch({
                   type:'user/saveUserApproveName',
                   payload:{
                     ...values,
                     idCardFront,
                     idCardBack,
                     handHeldIdCard
                   }
                });
            }
        });
    }
    //重置参数
    certificationHandle=(value)=>{
      const {form}=this.props;
      form.resetFields(['idCardFront','idCardBack','handHeldIdCard','idCard']);
      this.setState({
        active:value
      });
    }

     normFile  =  (e) => {
       return fileUpload(e,()=>{
           message.error(intl.get('GLOBAL_IMG_VAILD'));
       },()=>{
           message.error(intl.get('GLOBAL_IMG_SIZE'));
       });
    };
    render() {
        const {active} = this.state;
        const { form,user:{userInfo,userSetting},loading } = this.props;
      
        return (
            <Layout white className="user identity container">
                 <article className="article flex-box flex-between">
                    <Aside />
                   <section className="content">
                     {userSetting.username&&(
                        <Box
                          className="mt-lg" 
                          title={<ul className="user-tab flex-box"><li  className="user-tab-item">{intl.get('USERINFO_REAL_AUTHENTICATION')}</li></ul>} >
                           {userSetting.realNameRejectReason && (
                             <div className="pd-25 mt-md">
                              <Alert
                                message={intl.get('USERINFO_REJECT_REASON')}
                                description={userSetting.realNameRejectReason}
                                type="error"
                                closable
                              />
                             </div>
                            )}

                            <div className="user-box identity-box">
                              {userSetting.realVerified===0&&userSetting.realAuditing!==2?(<Row>
                                <Col span={10} offset={7}>
                                  <Form onSubmit={this.handleSubmit}>
                                  <FormItem  label={intl.get('USER_NATIONALITY')} colon={false} >
                                        {form.getFieldDecorator('country', {
                                           initialValue:userInfo.country.zhName
                                        })(
                                          <Input size="large" disabled />
                                        )}
                                  </FormItem>
                                  <FormItem label={intl.get('USERINFO_NAME')} >
                                   {form.getFieldDecorator('realName', {
                                      rules: [{ required: true, message:`${intl.get('USERINFO_NAME')}${intl.get('GLOBAL_EMPTY')}`  }]
                                    })(
                                      <Input size="large"  />
                                    )}
                                  </FormItem>
                                  <FormItem label={intl.get('USERINFO_AUTHENTICATION_METHOD')} >
                                   {form.getFieldDecorator('type', {
                                      initialValue:0
                                    })(
                                      <Select size="large"  onChange={this.certificationHandle} >
                                         <Option value={0}>{intl.get('USERINFO_ID_CARD')}</Option>
                                         <Option value={1}>{intl.get('USERINFO_PASSPORT')}</Option>
                                      </Select>
                                    )}
                                  </FormItem>

                                  <FormItem  label={active===0?intl.get('USERINFO_ID_CARD_NO'):intl.get('USERINFO_PASSPORT_NO')} colon={false} >
                                        {form.getFieldDecorator('idCard', {
                                           rules: [{ required: true, message:`${active===0?intl.get('USERINFO_ID_CARD_NO'):intl.get('USERINFO_ID_CARD_NO')}${intl.get('GLOBAL_EMPTY')}` },{
                                             pattern:active===0?IDcode:passport,message:`${active===0?intl.get('USERINFO_ID_CARD_NO'):intl.get('USERINFO_ID_CARD_NO')}${intl.get('USER_FORMAT')}`
                                           }]
                                        })(
                                          <Input size="large" />
                                        )}
                                  </FormItem>
                                  <FormItem label={intl.get('USERINFO_IMAGE')} >
                                  <div className="flex-box flex-between flex-wrap">
                                     <FormItem>
                                         {form.getFieldDecorator('idCardFront', {
                                            initialValue:'',
                                            valuePropName: 'fileList',
                                            getValueFromEvent:this.normFile,
                                            rules: [{ required: true, message:`${active===0?intl.get('USERINFO_ID_CARD_FRONT'):intl.get('USERINFO_PASSPORT_PAGE')}${intl.get('GLOBAL_EMPTY')}`}]
                                          })(<UploadImg className="card-icon card-icon-just flex-box flex-box-center">
                                                  {`${intl.get('USERINFO_CLICK_UPLOAD')}${active===0?intl.get('USERINFO_ID_CARD_FRONT'):intl.get('USERINFO_PASSPORT_PAGE')}`}
                                             </UploadImg> )}
                                    </FormItem>
                                    {active===0&&(
                                    <FormItem>
                                     {form.getFieldDecorator('idCardBack', {
                                            initialValue:'',
                                            valuePropName: 'fileList',
                                            getValueFromEvent:this.normFile,
                                            rules: [{ required: true,  message:`${intl.get('USERINFO_ID_CARG_REVERSE')}${intl.get('GLOBAL_EMPTY')}` }]
                                          })(<UploadImg className="card-icon card-icon-anti  flex-box flex-box-center">
                                                    {`${intl.get('USERINFO_CLICK_UPLOAD')}${intl.get('USERINFO_ID_CARG_REVERSE')}`}
                                             </UploadImg>
                                             )}
                                    </FormItem>)}
                                    <FormItem>
                                     {form.getFieldDecorator('handHeldIdCard', {
                                            initialValue:'',
                                            valuePropName: 'fileList',
                                            getValueFromEvent:this.normFile,
                                            rules: [{ required: true, message: `${intl.get('USERINFO_HANDHELD')}${active===0?intl.get('USERINFO_ID_CARD'):intl.get('USERINFO_PASSPORT')}${intl.get('GLOBAL_EMPTY')}` }]
                                          })(<UploadImg className="card-icon card-icon-anti  flex-box flex-box-center">
                                                    {`${intl.get('USERINFO_CLICK_UPLOAD')}${intl.get('USERINFO_HANDHELD')}${active===0?intl.get('USERINFO_ID_CARD'):intl.get('USERINFO_PASSPORT')}`}
                                             </UploadImg>
                                             )}
                                    </FormItem>
                                  </div>
                                  </FormItem>
                                  <Button htmlType="submit" className="mt-lg" type="primary" disabled={userSetting.realAuditing===1} loading={loading} size="large" block><span className="black">{userSetting.realAuditing===0?intl.get('GLOBAL_OK'):`${intl.get('RELEASE_STAY')}...`}</span></Button>
                                  </Form>
                                </Col>
                              </Row>):(
                              <Row>
                                 <Col span={10} offset={7}>
                                   <div className="tc">
                                      <Icon type="check-circle" className="green" style={{fontSize:64}} />
                                   </div>
                                   <p className="fz-md tc mt-md">{intl.get('USERINFO_INFORMATION_BEEN')}</p>
                                   <div className="identity-width">
                                      <p><span className="identity-label opacity-5">{intl.get('USER_NATIONALITY')}</span><em>{userInfo.country.zhName}</em></p>
                                      <p><span className="identity-label opacity-5">{intl.get('USERINFO_NAME')}</span><em>{userSetting.realName}</em></p>
                                      <p><span className="identity-label opacity-5">{userSetting.type===0?intl.get('USERINFO_ID_NUMBER'):intl.get('USERINFO_PASSPORT_NO')}</span><em>{userSetting.idCard}</em></p>
                                   </div>
                                 </Col>
                              </Row>
                              )}

                          </div>
                       </Box>
                      )}
                   </section>
                 </article>
            </Layout>

        );
    }
}

export default Safety;
