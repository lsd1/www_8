/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-17 15:46:50
 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';
import Code from '@/components/Code/Code';

import { Form, Input, Select, Button, Table, Icon, Modal, message } from 'antd';

import './ExtractAddress.less';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const fromData = {
    pageNo: 0,
    pageSize: 10,
    unit: ''
};


const CreateForm = Form.create()(props => {
    const { form, handleEdit, cancelHandle, codeHandle, searchList } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            handleEdit(fieldsValue,form);
        });
    };
    const codeClick = () => {
        return codeHandle(form);
    };

    return (
        <Fragment>
          <div className="pd-25">
              <FormItem  label={intl.get('EXCHANGE_CURRENCY')}  >
                  {form.getFieldDecorator('unit', {
                    rules: [{ required: true, message: intl.get('GLOBAL_EMPTY') }],
                    initialValue:searchList.unit
                  })(
                    <Input size="large" disabled />
                  )}
            </FormItem>
            <FormItem  label={intl.get('PROPERTY_ADDRESS')}  >
                  {form.getFieldDecorator('address', {
                    rules: [{ required: true, message: intl.get('PROPERTY_ADDRESS_EMPTY') },
                    { max: 100, message: intl.get('RELEASEADS_MAX_LNEGTH',{len:100}) }]
                  })(
                    <Input size="large" maxLength={100} />
                  )}
            </FormItem>
            
            <FormItem label={intl.get('PROPERTY_MANNER')} >
             {form.getFieldDecorator('type', {
                initialValue:1,
                rules: [{ required: true, message:`${intl.get('PROPERTY_MANNER')}${intl.get('GLOBAL_EMPTY')}` }]
              })(
                 <Select size="large"  style={{width:'100%'}}>
                    <Option value={1}>{intl.get('PROPERTY_MANNER_SMS')}</Option>
                    <Option value={2}>{intl.get('PROPERTY_MANNER_EMAIL')}</Option>
                 </Select>
              )}
            </FormItem>
            <FormItem label={intl.get('GLOBAL_CODE')} >
             {form.getFieldDecorator('code', {
                rules: [{ required: true, message: intl.get('GLOBAL_CODE_EMPTY') }]
              })(
                <Input size="large" addonAfter={<Code className="group-code" name={intl.get('GLOBAL_CODE_BTN')} delay={60}  onClick={codeClick} />}  />
              )}
            </FormItem>
            <FormItem  label={intl.get('RELEASEADS_REMAEK')} colon={false} >
                  {form.getFieldDecorator('remark', {
                     rules: [
                    { max: 200, message: intl.get('RELEASEADS_MAX_LNEGTH',{len:200}) }]
                  })(
                    <TextArea row={4} size="large" maxLength={200}  />
                  )}
            </FormItem>
            
          </div>
          <div className="bt-gray mt-md pb-sm pt-sm  tr">
             <div className="pd-25">
                <Button key="back" className="border-rest opacity-5" size="large" onClick={cancelHandle}>{intl.get('GLOBAL_CANCEL')}</Button>
                <Button className="pd-25" key="submit" type="primary" size="large" onClick={handleSubmit}>{intl.get('GLOBAL_OK')}</Button>
             </div>
          </div>
        </Fragment>
    );
});


@connect(({ property, user, loading }) => ({
    user,
    property,
    global,
    loading: loading.effects['property/fetchgetMyCoinAdderess']
}))
class extractAddress extends PureComponent {
    constructor(props) {
        super(props);
        this.captcha = React.createRef();
        this._captchaReset = null;
        this.state = {
            visible: false,
            searchList: {}
        };
    }
    componentDidMount() {
        const { dispatch, match: { params } } = this.props;
        Promise.all([dispatch({
            type: 'user/fetchGetUserSetting'
        }), dispatch({
            type: 'property/fetchgetMyCoinAdderess',
            payload: {
                ...fromData,
                unit: params.address
            }
        })]);
        this.setState({
            searchList: {
                ...fromData,
                unit: params.address
            }
        });



    }



    handleStandardTableChange = (pagination) => {
        this.queryList(this.state.searchList, pagination.current - 1, pagination.pageSize);
    }
    queryList(searchData, pageNo, pageSize) {
        let searchList = {
            ...searchData,
            pageNo,
            pageSize
        };
        this.setState({
            searchList: searchList
        });
        this.props.dispatch({
            type: 'property/fetchgetMyCoinAdderess',
            payload: searchList
        });

    }
    showModal = (state) => {
        const { dispatch } = this.props;
        this.setState({
            visible: true
        });
    }
    handleCancel = (e) => {
            this.setState({
                visible: false
            });
        }
        /**
         * [新增]
         * @param  {[type]} state [description]
         * @return {[type]}       [description]
         */
    handleEdit = (fieldsValue,form) => {
            const {searchList}=this.state;
            const { dispatch, user: { userSetting: { mobilePhone, email } } } = this.props;
            dispatch({
                type: 'property/saveMyCoinAdderess',
                payload: {
                    ...fieldsValue,
                    aims:fieldsValue.type===1?mobilePhone:email
                },
                callback: () => {
                    form.resetFields();
                    dispatch({
                        type: 'property/fetchgetMyCoinAdderess',
                        payload: {
                            ...searchList,
                            pageNo:0
                        }
                    });
                    this.setState({
                        visible: false
                    });


                }
            });
        }
        /**
         * [发送验证码]
         * @return {[type]} [description]
         */

    codeHandle = (form) => {
        const { dispatch, user: { userSetting: { mobilePhone, email } } } = this.props;
        return new Promise((resolve) => {
            form.validateFields(['type'], (err, fieldsValue) => {
                if (err) return;

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
        });
    }

    //删除地址
    delHanldes = (id) => {
        const { dispatch } = this.props;
        Modal.confirm({
            title: intl.get('GLOBAL_WAEM'),
            content: intl.get('PROPERTY_DEL_TITLE'),
            okText: intl.get('GLOBAL_OK'),
            cancelText: intl.get('GLOBAL_CANCEL'),
            onOk: () => {
                dispatch({
                    type: 'property/deleteMyCoinAdderess',
                    payload: {
                        id
                    }
                });

            }
        });


    }
    render() {

        const { visible, searchList } = this.state;
        const { property: { loading, coinAdderessList} } = this.props;
     
        const paramsData = {
            codeHandle: this.codeHandle,
            handleEdit: this.handleEdit,
            cancelHandle: this.handleCancel,
            searchList
        };
        const columns = [{
            title: intl.get('EXCHANGE_CURRENCY'),
            width: 100,
            dataIndex: 'unit'
        }, {
            title: intl.get('PROPERTY_ADDRESS'),
            width: 300,
            dataIndex: 'address'
        }, {
            title: intl.get('RELEASEADS_REMAEK'),
            width: 300,
            dataIndex: 'remark'
        }, {
            title: intl.get('EXCHANGE_OPERATING'),
            width: 100,
            align: 'right',
            render: (text, row, index) => {
                return (<Button type="primary" size="small" onClick={()=>this.delHanldes(row.id)}>{intl.get('GLOBAL_DELETE')}</Button>);
            }
        }];

        return (
            <Layout className="extractAddress container">
                <section className="extractAddress-top flex-box flex-between">
                     <h3 className="extractAddress-title flex-item">{intl.get('PROPERTY_ADDRESS_SETTING')}</h3>
                     <div className="flex-box flex-item flex-end flex-alignItem">
                      <Button className="mt-sm ml-lg" type="primary" onClick={this.showModal}><Icon type="plus" /> {intl.get('GLOBAL_ADD')}</Button>
                     </div>
                 </section>
                 <section>
                     <Table 
                       loading={loading}
                       rowKey={record => record['address']}
                       locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                       dataSource={coinAdderessList.content}  
                       columns={columns} 
                       onChange={this.handleStandardTableChange}
                       pagination={{
                          style: { marginBottom: 0 },
                          pageSize: 10,
                          hideOnSinglePage:true,
                          current:searchList.pageNo+1,
                          total:coinAdderessList.totalElements
                        }} />

                 </section>
                 <Modal  
                   wrapClassName="model extractAddress-model"
                   width={500}
                   title={`${intl.get('GLOBAL_ADD')}${intl.get('PROPERTY_ADDRESS')}`}
                   visible={visible} 
                   onOk={this.handleOk} 
                   onCancel={this.handleCancel} 
                   maskClosable={false}
                   destroyOnClose
                   footer={null} >
                  <CreateForm {...paramsData} />
             </Modal>
                
            </Layout>

        );
    }
}

export default extractAddress;
