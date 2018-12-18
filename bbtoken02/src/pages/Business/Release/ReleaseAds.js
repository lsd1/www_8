/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-29 16:20:03
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Button, Form, Icon, Input, Select, Col, Modal, Switch, Checkbox, Row,message } from 'antd';
import { pwd, numberDecimal, numbers ,numberDecimal_4,plusORminus} from '@/utils/regular';
import { mul, toFixed,formatNumber} from '@/utils/utils';
import intl from 'react-intl-universal';
import cx from 'classnames';




import Layout from '@/layouts/';



import './Release.less';
const CheckboxGroup = Checkbox.Group;
const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;



@Form.create()
@connect(({ global, business, user, loading }) => ({
    business,
    global,
    user,
    loading: loading.effects['business/saveAdvertise']
}))
class Release extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            countryList: [],
            status: false,
            coinIndex: 0,
            countryIndex: 0,
            tabIndex: 1, //1出售 0收购
            autoStatus: false,
            advForm: {
                coinId: '',
                country: '',
                rmb: '',
                priceType: false,
                price: '',
                number: '',
                timeLimit: '',
                pay: [],
                premiseRate: '',
                minLimit: '',
                maxLimit: '',
                remark: '',
                autoword: '',
                auto: false,
                jyPassword: ''
            }
        };

    }
    componentDidMount() {
            const { dispatch, match: { params } } = this.props;
            const { advForm, coinIndex, countryIndex } = this.state;
            Promise.all([dispatch({
                type: 'business/fetchGetCoinAll'
            }), dispatch({
                type: 'global/fetchGetCountry',
                callback: (data) => {
                    const countryList = data.filter(item => item.enName === 'China');

                    this.setState({
                        countryList
                    });
                }
            }), dispatch({
                type: 'user/fetchUserPayment'
            })]).then(data => {
                if (params.id) {
                    dispatch({
                        type: 'business/fetchGetAdvertiseInfo',
                        payload: params,
                        callback: (data) => {
                            this.setState({
                                advForm: {
                                    ...data,
                                    coinId: data.coinId + '',
                                    country: data.country.zhName,
                                    rmb: data.country.localCurrency,
                                    price: data.marketPrice,
                                    pay: data.payMode.split(','),
                                    auto: !!data.auto,
                                    priceType: !data.priceType
                                },
                                tabIndex:data.advertiseType,
                                status: !data.priceType,
                                autoStatus: !!data.auto
                            });
                        }
                    });
                } else {
                    const { countryList } = this.state;
                    const { business: { coinList } } = this.props;
                    this.setState({
                        advForm: {
                            ...advForm,
                            coinId: coinList[coinIndex].id,
                            country: countryList[countryIndex].zhName,
                            rmb: countryList[countryIndex].localCurrency,
                            price: coinList[coinIndex].marketPrice
                        }
                    });


                }

            });

        }
        /**
         * [发布提交]
         * @param  {[type]} e [description]
         * @return {[type]}   [description]
         */
    handleSubmit = (e) => {
            const { form, dispatch, match: { params } } = this.props;
            const { tabIndex } = this.state;
            e.preventDefault();
            form.validateFields((err, fieldsValue) => {
                if (err) return;
                dispatch({
                    type: 'business/saveAdvertise',
                    payload: {
                        ...fieldsValue,
                        id: params.id ? params.id : null,
                        type: params.id ? 2 : 1,
                        advertiseType: tabIndex,
                        'coin.id': fieldsValue.coin,
                        priceType: +!fieldsValue.priceType,
                        auto: +fieldsValue.auto
                    },
                    callback: (data) => {
                        if (!params.id) {
                            this.setState({
                                visible: true
                            });
                        } else {
                            message.success(data.message);
                            history.go(-1);
                        }

                    }
                });
            });

        }
        /**
         * [溢价或者固定价格验证]
         * @param  {[type]}   rule     [description]
         * @param  {[type]}   value    [description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
    compareToFirstPrice = (rule, value, callback) => {
            const { status } = this.state;
            if (status) {
                if (!numberDecimal.test(value)) {
                    callback(`${intl.get('RELEASEADS_PRICE_ERR')},${intl.get('RELEASEADS_PRICE_NUM4')}`);
                } else {
                    callback();
                }
            } else {
                if(!plusORminus.test(value)){
                     callback(intl.get('RELEASEADS_PRICE_NUM5'));
                }else if (value == 0 || value > 20 || value < -20) {
                    callback(intl.get('RELEASEADS_PRICE_ERR2'));
                } else {
                    callback();
                }
            }
        }
        /**
         * [溢价或者固定价格监听]
         * @return {[type]} [description]
         */
    priceHanlde = (e) => {
            const value = e.target.value;
            const { status, coinIndex } = this.state;
            const { form, business: { coinList } } = this.props;
            if (value !== '' && plusORminus.test(value)) {
                const price = status ? value : mul(`${coinList[coinIndex].marketPrice}*(100+${value})/100`);
                form.setFieldsValue({
                    price: toFixed(+price, 2)
                });
            } else {
                form.setFieldsValue({
                    price: coinList[coinIndex].marketPrice
                });
            }
        }
        /**
         * [交易期限]
         * @param  {[type]}   rule     [description]
         * @param  {[type]}   value    [description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
    compareTimeLimit = (rule, value, callback) => {
            const { tabIndex } = this.state;
            const flag = tabIndex === 1 ? (value < 15 || value > 120) : (value < 10 || value > 30);
            if (flag || !numbers.test(value)) {
                callback(intl.get('RELEASEADS_TIME_ERR'));
            } else {
                callback();
            }
        }
        /**
         * [最小交易额]
         * @param  {[type]}   rule     [description]
         * @param  {[type]}   value    [description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
    compareMinLimit = (rule, value, callback) => {
            const form = this.props.form;
            const maxLimit = form.getFieldValue('maxLimit');
            if (value && value < 10) {
                callback(intl.get('RELEASEADS_MIN_100'));
            } else if (maxLimit) {
                if (value > maxLimit) {
                    callback(intl.get('RELEASEADS_MIN_MAX'));
                } else {
                    callback();
                }
            } else {
                callback();
            }
        }
        /**
         * [最大交易额]
         * @param  {[type]}   rule     [description]
         * @param  {[type]}   value    [description]
         * @param  {Function} callback [description]
         * @return {[type]}            [description]
         */
    compareMaxLimit = (rule, value, callback) => {
            const form = this.props.form;
            const { minLimit, price, number } = form.getFieldsValue(['minLimit', 'price', 'number']);
            const { countryList, countryIndex } = this.state;
            const totalPrice = mul(`${price}*${number || 1}`);
            if (value && parseFloat(value) < parseFloat(minLimit || 0)) {
                callback(intl.get('RELEASEADS_MAX_MIN'));
            } else if (value > totalPrice) {
                callback(`${intl.get('RELEASEADS_MAX_PRICE')}${totalPrice}${countryList[countryIndex].localCurrency}`);
            } else {
                callback();
            }

        }
        /**
         * [开启自动回复]
         * @return {[type]} [description]
         */
    autoHandle = (value) => {
            this.setState({
                autoStatus: value
            });
        }
        /**
         * [固定价格切换]
         * @return {[type]} [description]
         */
    priceTypeHandle = (status) => {
            this.setState({
                status
            });
        }
        /**
         * [币种切换]
         * @return {[type]} [description]
         */
    coinHanlde = (value, { props }) => {
            const { form } = this.props;
            this.setState({
                coinIndex: props.index
            });
            form.setFieldsValue({
                price: props.price
            });
        }
        /**
         * [国家切换]
         * @return {[type]} [description]
         */
    countryHanlde = (value, { props }) => {
            this.setState({
                countryIndex: props.index
            });
        }
        /**
         * [tab切换]
         * @return {[type]} [description]
         */
    tabHanlde = (state) => {
        const { form } = this.props;
        if (state !== this.state.tabIndex) {
            this.setState({
                tabIndex: state
            });
            form.resetFields();
        }

    }

    handleCancel = () => {
        this.setState({
            visible: false
        });
    }
    handleOk = () => {
        const { form } = this.props;
        this.setState({
            visible: false,
            PayFinish: 1
        });
        form.resetFields();
    }
    backCancel = () => {
        this.props.history.push('/');
    }
    render() {
        const { form, business: { coinList }, user: { userPayment }, match: { params },global:{lang},loading } = this.props;
        const { visible, countryList, status, coinIndex, countryIndex, tabIndex, autoStatus, advForm } = this.state;




        return (
            <Layout  className="business release" title={intl.get('TOP_RELEASE')}>
                 <div className="release-ads">
                    <img className="release-img" src={require('@/assets/images/release.jpg')} alt="" />
                 </div>
                  <article className="container article">
                        {!params.id&&<ul className="release-tab flex-box">
                            <li className={cx('release-tab-item',{active:tabIndex===1})} onClick={()=>this.tabHanlde(1)}>{intl.get('RELEASEADS_SELL_RE')}</li>
                            <li className={cx('release-tab-item',{active:tabIndex===0})} onClick={()=>this.tabHanlde(0)}>{intl.get('RELEASEADS_BUY_RE')}</li>
                         </ul>}
                         {coinList.length>0&&countryList.length>0&&(
                         <Form className="release-form"  onSubmit={this.handleSubmit} autoComplete="off">
                          <FormItem  label={intl.get('RELEASEADS_COIN')} >
                              {form.getFieldDecorator('coin', {
                                 initialValue:advForm.coinId //coinList[coinIndex].id
                              })(

                                 <Select  disabled={!!params.id}  style={{ width: '100%' }} onChange={this.coinHanlde}>
                                   {coinList.map((item,index)=>{
                                    return (<Option key={item.id} index={index} price={item.marketPrice} value={item.id} >{item.unit}</Option>);
                                   })}
                                </Select>
                              )}
                            </FormItem>
                            <FormItem  label={intl.get('RELEASEADS_COUNTRY')} >
                              {form.getFieldDecorator('country', {
                                 initialValue:advForm.country 
                              })(
                                <Select  disabled={!!params.id}   style={{ width: '100%' }} onChange={this.countryHanlde}>
                                   {countryList.map((item,index)=>{
                                    return (<Option key={item.zhName} index={index} value={item.zhName}>{item.zhName}</Option>);
                                   })}
                                </Select>
                              )}
                            </FormItem>

                          <FormItem  label={intl.get('RELEASEADS_MONEY')}  >
                              {form.getFieldDecorator('rmb',{
                                  initialValue: advForm.rmb   
                                  
                              })(
                                <Input  disabled  />
                              )}
                            </FormItem>
                            <FormItem  label={intl.get('RELEASEADS_FIXED')}  >
                              {form.getFieldDecorator('priceType',{
                                  initialValue: advForm.priceType,
                                  valuePropName: 'checked'
                              })(
                                <Switch size="large" checkedChildren={intl.get('RELEASEADS_ON')} unCheckedChildren={intl.get('RELEASEADS_OFF')} onClick={this.priceTypeHandle}  />
                              )}
                            </FormItem>
                            {status&&<p className="opacity-5">{intl.get('RELEASEADS_FIXED_DESC')}</p>}
                            
                            <FormItem label={status?intl.get('RELEASEADS_FIXED_RPICE'):intl.get('RELEASEADS_PREMIUM')}>
                                  {form.getFieldDecorator(status?'fixedPrice':'premiseRate',{
                                      initialValue: advForm.premiseRate,
                                      validateFirst:true,
                                     rules: [{ required: true, message: `${status?intl.get('RELEASEADS_FIXED_RPICE'):intl.get('RELEASEADS_PREMIUM')}${intl.get('GLOBAL_EMPTY')}` },
                                     {validator: this.compareToFirstPrice}
                                      ]
                                  })(
                                    <Input onChange={this.priceHanlde}  addonAfter={<p  className="wd-40">{status?countryList[countryIndex].localCurrency:'%'}</p>} />
                                  )}
                            </FormItem>
                            <p>{intl.get('RELEASEADS_REFERENCE')}：<span className="red">{`${formatNumber(coinList[coinIndex].marketPrice)} ${countryList[countryIndex].localCurrency}/${coinList[coinIndex].unit}`}</span> </p>
                            {!status&&<p className="opacity-5">{intl.get('RELEASEADS_PRICE_DESC')}{tabIndex===1?intl.get('RELEASEADS_SELL_SET'):intl.get('RELEASEADS_BUY_ON')}。</p>}
                            <FormItem  label={intl.get('RELEASEADS_PRICE')}  >
                               {form.getFieldDecorator('price',{

                                  initialValue:advForm.price,  // coinList[coinIndex].marketPrice,
                                  rules: [{ required: true, message: `${intl.get('RELEASEADS_PRICE')}${intl.get('GLOBAL_EMPTY')}`},
                                      {pattern:numberDecimal,message:intl.get('RELEASEADS_PRICE_NUM')}
                                      ]
                              })(
                                <Input  disabled  addonAfter={`${countryList[countryIndex].localCurrency}/${coinList[coinIndex].unit}`} />
                              )}
                            </FormItem>
                            <p className="opacity-5">{intl.get('RELEASEADS_FORMULA')}：（Bitstamp+Bitfinex+Coinbase）/ 3 *1.0000</p>

                            <FormItem  label={`${tabIndex===1?intl.get('RELEASEADS_SELL_SET'):intl.get('RELEASEADS_BUY_ON')}${intl.get('RELEASEADS_NUM')}`}  >
                              {form.getFieldDecorator('number',{
                                 initialValue:advForm.number,
                                rules: [{ required: true, message: `${tabIndex===1?intl.get('RELEASEADS_SELL_SET'):intl.get('RELEASEADS_BUY_ON')}${intl.get('RELEASEADS_NUM')}${intl.get('GLOBAL_EMPTY')}` },
                                {pattern:numberDecimal,message:intl.get('RELEASEADS_PRICE_NUM4')}]
                              })(
                                 <Input   />
                              )}
                            </FormItem>
                            <FormItem  label={intl.get('RELEASEADS_TIME')}   >
                              {form.getFieldDecorator('timeLimit',{
                                initialValue:advForm.timeLimit,
                                validateFirst:true,
                                rules: [{ required: true, message: `${intl.get('RELEASEADS_TIME')}${intl.get('GLOBAL_EMPTY')}` },
                                 {validator: this.compareTimeLimit}]
                              })(
                                 <Input   placeholder={`${intl.get('RELEASEADS_TIME_MINUTE',{time:tabIndex===1?'15-120':'10-30'})}`} addonAfter={<p  className="wd-40">{intl.get('RELEASEADS_MINUTE')}</p>} />
                              )}
                            </FormItem>
                            <p className="opacity-5">{intl.get('RELEASEADS_ACCEPTED',{name:tabIndex===1?'买':'卖'})}</p>
                            
                            <FormItem  label={intl.get('RELEASEADS_PAYMENT')} >
                              {form.getFieldDecorator('pay',{
                                 initialValue:advForm.pay,
                                 rules: [{ required: true, message: `${intl.get('RELEASEADS_PAYMENT')}${intl.get('GLOBAL_EMPTY')}`}]
                              })(
                                  <CheckboxGroup>
                                     <Checkbox value="支付宝" disabled={!userPayment.alipay}>{intl.get('GLOBAL_ALIPAY')}</Checkbox>
                                     <Checkbox value="微信" disabled={!userPayment.wechatPay}>{intl.get('GLOBAL_WECHAT')}</Checkbox>
                                     <Checkbox value="银联" disabled={!userPayment.bankInfo}>{intl.get('GLOBAL_PAY')}</Checkbox>
                                  </CheckboxGroup>
                              )}
                            </FormItem>
                            <p className="opacity-5 mt-sm sub-10">{intl.get('RELEASEADS_PROMPT')}<Link to={`/${lang}/user/setting`} className="yellow">{intl.get('TOP_MY_USER')}</Link>{intl.get('RELEASEADS_BIND_PANY')}</p>
                              <Row >
                              <Col span={10}>
                                 <FormItem   label={intl.get('RELEASEADS_MIN')}>
                                  {form.getFieldDecorator('minLimit',{
                                    initialValue:advForm.minLimit,
                                    validateTrigger:['onChange',"onBlur"],
                                    rules: [{ required: true, message: intl.get('GLOBAL_EMPTY') },
                                     {pattern:numbers,message:`${intl.get('RELEASEADS_MIN')}${intl.get('RELEASEADS_INTEGER')}`},
                                     {validator: this.compareMinLimit}]
                                  })(
                                    <Input autoComplete="off" placeholder={intl.get('RELEASEADS_MIN')} addonAfter={<p  className="wd-40">{countryList[countryIndex].localCurrency}</p>} />
                                  )}
                                </FormItem>
                              </Col>
                              <Col span={4} >
                                <span className="grop-middle">
                                  一
                                </span>
                              </Col>
                              <Col span={10}>
                                 <FormItem   label={intl.get('RELEASEADS_MAX')}>
                                  {form.getFieldDecorator('maxLimit',{
                                    initialValue:advForm.maxLimit,
                                    validateTrigger:['onChange',"onBlur"],
                                    rules: [{ required: true, message: intl.get('GLOBAL_EMPTY') },
                                     {pattern:numbers,message:`${intl.get('RELEASEADS_MAX')}${intl.get('RELEASEADS_INTEGER')}`},
                                     {validator: this.compareMaxLimit}]
                                  })(
                                    <Input autoComplete="off" placeholder={intl.get('RELEASEADS_MAX')}  addonAfter={<p  className="wd-40">{countryList[countryIndex].localCurrency}</p>} />
                                  )}
                                </FormItem>
                              </Col>
                              </Row>
                          
                            <FormItem  label={intl.get('RELEASEADS_REMAEK')}  >
                              {form.getFieldDecorator('remark',{
                                initialValue:advForm.remark,
                                rules: [{ max: 200, message: intl.get('RELEASEADS_MAX_LNEGTH',{len:200}) }]
                              })(
                                 <TextArea rows={5}  maxLength={200}   placeholder={intl.get('RELEASEADS_REMAEK_DESC')} />
                              )}
                            </FormItem>
                            <FormItem  label={intl.get('RELEASEADS_REPLY')}  >
                              {form.getFieldDecorator('auto',{
                                initialValue:advForm.auto,
                                valuePropName: 'checked'
                              })(
                                <Switch size="large" checkedChildren={intl.get('RELEASEADS_ON')} unCheckedChildren={intl.get('RELEASEADS_OFF')} onChange={this.autoHandle}  />
                              )}
                            </FormItem>
                            <p className="opacity-5">{intl.get('RELEASEADS_REPLY_DESC')}</p>
                            {autoStatus &&(<FormItem  label={intl.get('RELEASEADS_REPLY_INFO')} >
                              {form.getFieldDecorator('autoword',{
                                initialValue:advForm.autoword,
                                rules: [{ max: 200, message: intl.get('RELEASEADS_MAX_LNEGTH',{len:200}) }]
                              })(
                                 <TextArea rows={3}   maxLength={200}   placeholder={intl.get('RELEASEADS_REPLY_PL')} />
                              )}
                            </FormItem>)}
                             
                            
                            <FormItem  label={intl.get('GLOBAL_PWD_PRICE')}  >
                              {form.getFieldDecorator('jyPassword',{
                                rules: [{ required: true, message:`${intl.get('GLOBAL_PWD_PRICE')}${intl.get('GLOBAL_EMPTY')}` },{
                                 pattern:pwd,message:intl.get('GLOBAL_PWD_ERR')
                                }]
                              })(
                                 <Input autoComplete="off" type="password"   />
                              )}
                            </FormItem>
                             
                             <Button style={{marginTop:70}} loading={loading}  size="large" type="primary" htmlType="submit"  block ><span className="blue">{intl.get('RELEASEADS_BTN')}</span></Button>
                       
                          </Form>
                         )}
                      <Modal  
                        wrapClassName="model"
                        width={500}
                        title=""
                        visible={visible} 
                        onOk={this.handleOk} 
                        onCancel={this.handleCancel} 
                        maskClosable={false}
                        footer={[
                        <Button key="back" className="border-rest opacity-5" size="large" onClick={this.backCancel}>{intl.get('RELEASEADS_GO')}</Button>,
                        <Button key="submit" type="primary" size="large"  onClick={this.handleOk}>
                          {intl.get('RELEASEADS_GO_ON')}
                        </Button>]} >
                          <div className="tc mt-lg">
                            <Icon type="check-circle" className="green" style={{fontSize:64}} />
                            <p className="mt-md fz-md">{intl.get('RELEASEADS_OK',{name:tabIndex===1?intl.get('RELEASEADS_SELL'):intl.get('RELEASEADS_BUY')})}</p>
                          </div>
                       </Modal>
                 </article>
            </Layout>

        );
    }
}

export default Release;
