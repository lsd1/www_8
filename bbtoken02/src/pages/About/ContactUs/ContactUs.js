/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-09 17:16:59
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Button, Form, Input } from 'antd';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';



import './../About.less';

const FormItem = Form.Item;
const { TextArea } = Input;

@Form.create()
@connect(({ user, loading }) => ({
    user
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class ContactUs extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
            }
        });
    }
    render() {
        const { form } = this.props;

        return (
            <Layout  className="about contactUs container" title={intl.get('FOOT_CONTACT_US')}>
                  <article className="container article">
                    <h3 className="headline lin-1 mb-lg">{intl.get('FOOT_CONTACT_US')}</h3>
                    <div className="flex-box flex-between">
                      <div className="contact-left flex-box flex-box-center">
                        <div>
                           <p className="tc"><img src={require('@/assets/images/send.png')} alt="" /></p>
                           <p className="about-p">你想联系我们么？</p>
                           <p className="mt-md fz-md">我们准备解答您的疑问并且向您讲述更多关于我们解决方案的细节。</p>
                        </div>
                      </div>
                      <div className="contact-right">
                          <h6 className="tit pt-lg">请填写以下信息</h6>
                          <Form onSubmit={this.handleSubmit}>
                              <FormItem  label="联系人" colon={false} >
                                    {form.getFieldDecorator('name', {
                                       rules: [{ required: true, message: '联系人不能为空' }]
                                    })(
                                      <Input size="large"  />
                                    )}
                              </FormItem>
                              <FormItem label="联系电话" >
                               {form.getFieldDecorator('pwd', {
                                  rules: [{ required: true, message: '联系电话不能为空' }]
                                })(
                                  <Input size="large"  />
                                )}
                              </FormItem>
                              <FormItem  label="问题描述" colon={false} >
                                    {form.getFieldDecorator('compare_pwd', {
                                       rules: [{ required: true, message: '问题描述不能为空' }]

                                    })(
                                      <TextArea autosize={{minRows: 5, maxRows: 5}} />
                                
                                    )}
                              </FormItem>
                              <Button htmlType="submit" className="mt-lg" type="primary" size="large" block><span className="black">提交</span></Button>
                            </Form>
                      </div>
                    </div>
                 </article>
            </Layout>

        );
    }
}

export default ContactUs;
