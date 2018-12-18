/*
 * @Author: Administrator
 * @Date:   2018-08-15 15:53:55
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-11-09 19:23:06
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Input, Button, Row, Col, Select,Modal} from 'antd';
import { numberDecimalMax } from '@/utils/regular';
import intl from 'react-intl-universal';
import { mul } from '@/utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;



@Form.create()
@connect(({ property,global, loading}) => ({
    global,
    property,
    loading: loading.effects['property/addWithdrawApply']
}))
class Carry extends PureComponent {

    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        const { form, dispatch, carryInfo } = this.props;
        e.preventDefault();
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            Modal.confirm({
                title: intl.get('GLOBAL_WAEM'),
                content: intl.get('PROPERTY_OK_TITLE'),
                okText: intl.get('PROPERTY_OK'),
                cancelText:  intl.get('GLOBAL_CANCEL'),
                onOk: () => {
                    dispatch({
                        type: "property/addWithdrawApply",
                        payload: {
                            ...fieldsValue,
                            unit: carryInfo.unit
                        }
                    });
                }

            });

        });
    };
    /**
     * [监听数量]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    amountHandle = (e) => {
            const { form, carryInfo } = this.props;
            const value = mul(`${e.target.value}-${carryInfo.maxTxFee}`);

            form.setFieldsValue({
                num: value > 0 ? value : 0
            });
        }
        /**
         * [校验手续费]
         * @param  {[type]}   rule     [description]
         * @param  {[type]}   value    [description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
    compareToFirstFee = (rule, value, callback) => {
            const { carryInfo } = this.props;
            if (value < carryInfo.minTxFee || value > carryInfo.maxTxFee) {
                callback(`${intl.get('PROPERTY_MIN')}${carryInfo.minTxFee} ,${intl.get('PROPERTY_MAX')}${carryInfo.maxTxFee}`);
            } else {
                callback();
            }

        }
        /**
         * [校验数量]
         * @param  {[type]}   rule     [description]
         * @param  {[type]}   value    [description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
    compareToFirstAmount = (rule, value, callback) => {
        const { carryInfo } = this.props;
        const minAmount=carryInfo.minAmount || 0; 
        const maxAmount=carryInfo.maxAmount || 1e8;
        if (value < minAmount || value > maxAmount || !numberDecimalMax(0, carryInfo.withdrawScale).test(value)) {
            callback(intl.get('PROPERTY_AT_MOST',{withdrawScale:carryInfo.withdrawScale,minAmount:carryInfo.minAmount,
              maxAmount:carryInfo.maxAmount}));
        } else if (value > carryInfo.balance) {
            callback(intl.get('PROPERTY_CURRENT'));
        } else {
            callback();
        }

    }
    render() {
        const { form, item, carryInfo,global:{lang},loading } = this.props;
        const formItemLayout = {
            labelCol: {
                sm: { span: 24 }
            },
            wrapperCol: {
                sm: { span: 24 }
            }
        };

        return (
            <div className="account-carry">
            <span className="account-triangle" style={{left:item.left}}></span>
              <div className="pt-sm">
               <Form className="account-carry-box" onSubmit={this.handleSubmit} layout="vertical" autocomplete="off">
                  <label className="account-label mb-sm">
                     <p className="flex-box-inline flex-between">
                       <span className="opacity-5">{intl.get('PROPERTY_ADDRESS')}</span>
                       <Link className="yellow pointer" to={`/${lang}/user/address/${item.coin.unit}`}>{intl.get('PROPERTY_ADDRESS_SETTING')}</Link>
                     </p> 
                  </label>
                  <FormItem {...formItemLayout}  >
                      {form.getFieldDecorator('address', {
                        initialValue:'',
                        rules: [{ required: true, message: intl.get('PROPERTY_ADDRESS') }]
                      })(
                         <Select allowClear >
                           <Option value="">{intl.get('GLOBAL_SELECT')}</Option>
                           {carryInfo.addresses.map(item=>{
                                return (<Option  key={item.address} value={item.address}>{item.address}</Option>);
                           })}
                         </Select>
                      )}
                    </FormItem>
                    <label  className="account-label mb-sm mb-md">
                      <p className="flex-box-inline flex-between">
                            <span className="opacity-5">{intl.get('RELEASEADS_NUM')}</span>
                            <span >{intl.get('EXCHANGE_AVAILABLE')}：{carryInfo.balance}</span>
                      </p> 
                    </label>
                     <FormItem {...formItemLayout}  >
                      {form.getFieldDecorator('amount', {
                        validateFirst:true,
                        rules: [{ required: true, message: intl.get('GLOBAL_EMPTY') },{validator: this.compareToFirstAmount}]
                      })(
                        <Input  placeholder={intl.get('PROPERTY_NUM_ERR')} autoComplete="off" addonAfter={carryInfo.unit}  onChange={this.amountHandle}/>
                      )}
                    </FormItem>
                      <Row>
                        <Col span={12} style={{paddingRight:10}}>
                        <label  className="account-label  mb-sm mb-md">
                          <p className="flex-box-inline flex-between">
                            <span className="opacity-5">{intl.get('PROPERTY_FEE')}</span>
                            
                          </p> 
                        </label>
                           <FormItem {...formItemLayout}  >
                            {form.getFieldDecorator('fee', {
                                initialValue:carryInfo.maxTxFee,
                                rules: [{ required: true, message:intl.get('GLOBAL_EMPTY')   },{validator: this.compareToFirstFee}]
                              })(
                              <Input autoComplete="off" addonAfter={carryInfo.unit} disabled />
                            )}
                          </FormItem>
                        </Col>
                        <Col span={12} style={{paddingLeft:10}}>
                           <label  className="account-label mb-sm mb-md"><span className="opacity-5">{intl.get('PROPERTY_NUM')}</span></label>
                             <FormItem {...formItemLayout}  >
                              {form.getFieldDecorator('num', {
                                rules: [{ required: true, message: intl.get('GLOBAL_EMPTY')  }]
                              })(
                                <Input  autocomplete="off"  addonAfter={carryInfo.unit} disabled  />
                              )}
                            </FormItem>
                        </Col>
                        <label className="account-label mb-sm"><span className="opacity-5">{intl.get('GLOBAL_PWD_PRICE')}</span></label>
                        <FormItem {...formItemLayout}  >
                          {form.getFieldDecorator('jyPassword', {
                            rules: [{ required: true, message: intl.get('GLOBAL_EMPTY')  }]
                          })(
                            <Input autocomplete="off" type="password"  />
                          )}
                        </FormItem>
                      </Row>


                    <div className="mt-lg flex-box  flex-between">
                       <div className="flex-item mr-md fz-sm">
                         <p className="opacity-5 mb-md">{intl.get('GLOBAL_WAEM')}</p>
                          <div className="opacity-5">
                            <p>• {intl.get('PROPERTY_DESC1',{name:`${carryInfo.minAmount}  ${carryInfo.unit}`})}</p>
                            <p>• {intl.get('PROPERTY_DESC2')}</p>
                            <p>• {intl.get('PROPERTY_DESC3')}</p>
                          </div>
                       </div>
                       <Button className="btn-wd150"  type="primary" size="large" htmlType="submit" loading={loading}><span className="blue">{intl.get('PROPERTY_TICKING')}</span></Button>
                    </div>
               </Form>
               </div>
            </div>
        );
    }
}
export default Carry;
