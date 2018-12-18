/*
* @Author: Administrator
* @Date:   2018-08-21 16:55:09
* @Last Modified by:   Administrator
* @Last Modified time: 2018-10-17 10:01:27
*/

import React, {Fragment } from 'react';
import { Button, Form, Input } from 'antd';
import Code from '@/components/Code/Code';
import {codes,pwd,email} from '@/utils/regular';
import intl from 'react-intl-universal';
const FormItem = Form.Item;

export default Form.create()(function CloseForm(props){
    const { form,codeHandle,cancelHandle,saveHandle} = props;
    
    const handleOk=()=>{
      form.validateFields((err, fieldsValue) => {
            if (err) return;
         
           saveHandle&& saveHandle(fieldsValue,form);
       });
    };
    const codeClick=()=>{
        return new Promise((resolve) => {
            form.validateFields(['email'], (err, fieldsValue) => {
                if (err) return;
                resolve();
                codeHandle(fieldsValue);
                
            });
        });
    };
    return (
        <Fragment>
          <div className="pd-25">
            <FormItem  label={intl.get('USER_MAILBOX')} colon={false} >
                  {form.getFieldDecorator('email', {
                      rules: [
                      { required: true, message: `${intl.get('USER_MAILBOX')}${intl.get('GLOBAL_EMPTY')}` },
                      {pattern:email,message:`${intl.get('USER_MAILBOX')}${intl.get('USER_FORMAT')}`}
                      ]
                  })(
                    <Input size="large" />
                  )}
            </FormItem>
            <FormItem  label={intl.get('USER_LOGIN_PAD')} colon={false} >
                  {form.getFieldDecorator('password', {
                      rules: [
                      { required: true, message: `${intl.get('USER_LOGIN_PAD')}${intl.get('GLOBAL_EMPTY')}` },
                      {pattern:pwd,message:intl.get('GLOBAL_PWD_ERR') }
                      ]
                  })(
                    <Input type="password" size="large" />
                  )}
            </FormItem>
            <FormItem label={intl.get('GLOBAL_CODE')} >
             {form.getFieldDecorator('code', {
                rules: [
                { required: true, message: intl.get('GLOBAL_CODE_EMPTY') },
                {pattern:codes,message:intl.get('USERINFO_VERIFICATION_NUMBER')}]
              })(
                <Input size="large" addonAfter={<Code className="group-code" name={intl.get('GLOBAL_CODE_BTN')} delay={60}  onClick={codeClick} />}  />
              )}
            </FormItem>
          </div>
          <div className="bt-gray mt-md pb-sm pt-sm  tr">
             <div className="pd-25">
                <Button key="back" className="border-rest opacity-5" size="large" onClick={cancelHandle}>{intl.get('GLOBAL_CANCEL')}</Button>
                <Button className="pd-25" key="submit" type="primary" size="large"  onClick={handleOk}>{intl.get('GLOBAL_OK')}</Button>
             </div>
          </div>
        </Fragment>
    );
});