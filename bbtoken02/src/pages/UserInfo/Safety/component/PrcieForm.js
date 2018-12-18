/*
 * @Author: Administrator
 * @Date:   2018-08-21 16:55:09
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-13 17:33:23
 */

import React, { Fragment } from 'react';
import  { Link } from 'dva/router';
import { Button, Form, Input, Select } from 'antd';
import Code from '@/components/Code/Code';
import { pwd, codes } from '@/utils/regular';
import intl from 'react-intl-universal';
const FormItem = Form.Item;
const Option = Select.Option;

export default Form.create()(function CloseForm(props) {
    const { form, codeHandle, cancelHandle, saveHandle, type,lang,confirmDirty,handleConfirmBlurChange} = props;

    const handleOk = () => {
        form.validateFields((err, fieldsValue) => {
            if (err) return;
    
            saveHandle && saveHandle({...fieldsValue,oldPassword:fieldsValue.oldPassword?fieldsValue.oldPassword:''}, form);
        });
    };

    const codeClick = () => {
        return new Promise((resolve) => {
            form.validateFields(['type'], (err, fieldsValue) => {
                if (err) return;
                resolve();
                codeHandle(fieldsValue);
            });
        });
    };
    const compareToFirstPassword = (rule, value, callback) => {
        if (value && value !== form.getFieldValue('newPassword')) {
            callback(intl.get('GLOBAL_PWD_COMPARETO'));
        } else {
            callback();
        }
    };
   const  handleConfirmBlur = (e) => {
            const value = e.target.value;
            handleConfirmBlurChange(value);
            
    };
    /**
     * [passwordContrast 新旧密码比对]
     * @return {[type]} [description]
     */
    const passwordContrast = (rule, value, callback) => {
        if (value && type === 2 && value === form.getFieldValue('oldPassword')) {
            callback(intl.get('GLOBAL_PWDNEW_COMPARETO'));
        } else if (value && confirmDirty) {
               form.validateFields(['compare_pwd'], { force: true });
                callback();
        }else {
            callback();
        }

    };
    
    return (
        <Fragment>
          <div className="pd-25">
           {type===2&&<FormItem  label={intl.get('USERINFO_OLDPRICE_PWD')} colon={false} >
                   {form.getFieldDecorator('oldPassword', {
                      rules: [{ required: true, message: `${intl.get('USERINFO_OLDPRICE_PWD')}${intl.get('GLOBAL_EMPTY')}` },{
                       pattern:pwd,message:intl.get('GLOBAL_PWD_ERR')
                      }]
                    })(
                      <Input size="large" type="password" />
                    )}
            </FormItem>}
            <FormItem  label={intl.get('GLOBAL_PWD_PRICE')} colon={false} >
                   {form.getFieldDecorator('newPassword', {
                      rules: [{ required: true, message:`${intl.get('GLOBAL_PWD_PRICE')}${intl.get('GLOBAL_EMPTY')}` },{
                       pattern:pwd,message:intl.get('GLOBAL_PWD_ERR') 
                      },{validator: passwordContrast}]
                    })(
                      <Input size="large" type="password" />
                    )}
            </FormItem>
            <FormItem  label={intl.get('USERINFO_CONFIRMPRICE_PWD')} colon={false} >
                  {form.getFieldDecorator('compare_pwd', {
                      rules: [{ required: true, message: `${intl.get('USERINFO_CONFIRMPRICE_PWD')}${intl.get('GLOBAL_EMPTY')}` },{
                         validator: compareToFirstPassword
                       }]
                    })(
                      <Input size="large" type="password"  onBlur={handleConfirmBlur} />
                    )}
            </FormItem>
            <FormItem label={intl.get('PROPERTY_MANNER')} >
               {form.getFieldDecorator('type', {
                  initialValue:1,
                  rules: [{ required: true, message: intl.get('USERINFO_PLEASE_CODE') }]
                })(
                   <Select size="large"  style={{width:'100%'}}>
                      <Option value={1}>{intl.get('PROPERTY_MANNER_SMS')}</Option>
                      <Option value={2}>{intl.get('PROPERTY_MANNER_EMAIL')}</Option>
                   </Select>
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
          <div className="bt-gray mt-md pb-sm pt-sm  flex-box flex-between flex-alignItem">

             <p className="pd-25">{type===2&&<Link className="yellow" to={`/${lang}/user/resetPrice`}>忘记资金密码?</Link>} </p>
             <div className="pd-25">
                <Button key="back" className="border-rest opacity-5" size="large" onClick={cancelHandle}>{intl.get('GLOBAL_CANCEL')}</Button>
                <Button className="pd-25" key="submit" type="primary" size="large"  onClick={handleOk}>{intl.get('GLOBAL_OK')}</Button>
             </div>
          </div>
        </Fragment>
    );
});
