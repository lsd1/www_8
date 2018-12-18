/*
* @Author: Administrator
* @Date:   2018-08-21 16:55:09
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-11 17:51:03
*/

import React, {Fragment } from 'react';
import { Button, Form, Input } from 'antd';
import Code from '@/components/Code/Code';
import intl from 'react-intl-universal';
const FormItem = Form.Item;

export default Form.create()(function CloseForm(props){
    const { form,codeHandle,cancelHandle,saveHandle } = props;
    const handleOk=()=>{
      form.validateFields((err, fieldsValue) => {
            if (err) return;
           saveHandle&&saveHandle(fieldsValue);
       });
    };
    return (
        <Fragment>
          <div className="pd-25">
            <p className="red">关闭邮箱验证后24小时内禁止提币。</p>
              <FormItem  label="手机" colon={false} >
                  {form.getFieldDecorator('phone', {
                  })(
                    <Input size="large" />
                  )}
            </FormItem>
            <FormItem label={`验证码`} >
             {form.getFieldDecorator('code', {
                rules: [{ required: true, message: '验证码不能为空' }]
              })(
                <Input size="large" addonAfter={<Code className="group-code" name="获取验证码" delay={60}  onClick={codeHandle} />}  />
              )}
            </FormItem>
            <FormItem  label="邮箱" colon={false} >
                  {form.getFieldDecorator('email', {
                  })(
                    <Input size="large" />
                  )}
            </FormItem>
            <FormItem label={`验证码`} >
             {form.getFieldDecorator('code', {
                rules: [{ required: true, message: '验证码不能为空' }]
              })(
                <Input size="large" addonAfter={<Code className="group-code" name="获取验证码" delay={60}  onClick={codeHandle} />}  />
              )}
            </FormItem>
          </div>
          <div className="bt-gray mt-md pb-sm pt-sm  tr">
             <div className="pd-25">
                <Button key="back" className="border-rest opacity-5" size="large" onClick={cancelHandle}>取消</Button>
                <Button className="pd-25" key="submit" type="primary" size="large"  onClick={handleOk}>确定</Button>
             </div>
          </div>
        </Fragment>
    );
});