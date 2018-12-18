/*
* @Author: Administrator
* @Date:   2018-09-06 00:18:29
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-11 14:26:08
*/
import React from 'react';

import intl from 'react-intl-universal';
import {  Button, Modal, Form, Select, Input } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

export const CreateForm = Form.create()(props => {
    const { modalVisible, form, handleEdit, handleCancel } = props;

    const handleOk = () => {
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            form.resetFields();
            handleEdit(fieldsValue);
        });
    };

    return ( 
      <Modal wrapClassName="model"
        width={500}
        title={intl.get('TRADE_COMPLAINT')}
        visible={modalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        maskClosable={false}
        footer={[
                <Button key="back" className="border-rest opacity-5" size="large" onClick={handleCancel}>{intl.get('GLOBAL_CANCEL')}</Button>,
                <Button key="submit" type="primary" size="large"  onClick={handleOk}> {intl.get('GLOBAL_OK')}</Button>
            ]} >
         <FormItem  label={intl.get('TRADE_TYPE')} >
                {form.getFieldDecorator('type', {
                  rules: [{ required: true, message:intl.get('TRADE_TYPE_EMPTY') }]
                })(
                  <Select size="large" style={{width:'100%'}}>
                    <Option value={1}>{intl.get('TRADE_PAYMENT_NO')}</Option>
                    <Option value={2}>{intl.get('TRADE_PAYED_NO')}</Option>
                  </Select>
                )}
          </FormItem> 
          <FormItem label={intl.get('TRADE_REMARKS')} > {
                  form.getFieldDecorator('remark', {
                    rules: [{ required: true, message: intl.get('TRADE_REMARKS_EMPTY') }]
                  })(
                      <TextArea rows={5} />
                  )
              }
          </FormItem> 
        </Modal>
    );
});
