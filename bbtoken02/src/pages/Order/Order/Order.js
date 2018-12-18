/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-21 17:35:19
 */
import React, { PureComponent,Fragment } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';

import SearchForm from '@/components/SearchList/SearchList';
import { Form, Input, Select, Button,Table,Icon,Tag} from 'antd';
import cx from 'classnames';

import './Order.less';

const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const fromData = {
    status:'',
    pageNo: 0,
    orderSn:'',
    pageSize: 10
};


const CreateForm = Form.create()(props => {
    const { form, handleEdit, handleHoverChange,searchList } = props;

    const formItemLayout = {
        labelCol: {
            sm: { span: 8 }
        },
        wrapperCol: {
            sm: { span: 16 }
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            handleEdit(fieldsValue);
        });
    };
    const clearHandle=(e)=>{
       form.setFieldsValue({
        status:'',
        orderSn:''
       });
    };
    return (
        <Form className="popover-cont" onSubmit={handleSubmit}>
          <FormItem {...formItemLayout} label={intl.get('ORDER_STATUS')} colon={false} >
              {form.getFieldDecorator('status', {
                initialValue:searchList.status
              })(    
                <Select   style={{ width: '100%' }}>
                      <Option value="">{intl.get('ORDER_ALL_ORDERS')}</Option>
                      <Option value={1}>{intl.get('ORDER_NOT_PAID')}</Option>
                      <Option value={2}>{intl.get('ORDER_PAYMENT')}</Option>
                      <Option value={3}>{intl.get('ORDER_COMPLETED')}</Option>
                      <Option value={0}>{intl.get('ORDER_CANCELLED')}</Option>
                      <Option value={4}>{intl.get('ORDER_APPEAL')}</Option>
                </Select>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label={intl.get('ORDER_NUMBER')} colon={false} >
              {form.getFieldDecorator('orderSn', {
                initialValue:searchList.orderSn
              })(
                <Search placeholder={intl.get('ORDER_PLEASE')}  />
              )}
            </FormItem>
            <div className="pt-sm bt-gray  flex-box flex-between flex-alignItem">
                <p className="yellow pointer" onClick={clearHandle}>{intl.get('ORDER_EMPTY')}</p>
                <div>
	               <Button  onClick={()=>handleHoverChange(0)}>{intl.get('GLOBAL_CANCEL')}</Button>
	               <Button className="ml-sm" type="primary" htmlType="submit"><span className="blue">{intl.get('GLOBAL_SEARCH')}</span></Button>
	            </div>
            </div>
       </Form>
    );
});


@connect(({ order,global, loading }) => ({
  global,
    order,
    loading: loading.effects['order/fetchOrderlist']
}))
class Order extends PureComponent {
    constructor(props) {
        super(props);
        this.captcha = React.createRef();
        this._captchaReset = null;
        this.state = {
            visible: false,
            exportVisible:false,
            shop: true,
            searchList: {...fromData}
        };
    }
    componentDidMount() {
      const {dispatch}=this.props;
      dispatch({
        type:'order/fetchOrderlist',
        payload:fromData
      });

    }

    handleHoverChange = (state) => {
        this.setState({
            visible: !!state
        });
    }
    /**
     * [搜索确认]
     * @param  {[type]} fieldsValue [description]
     * @return {[type]}             [description]
     */
    handleEdit = (fieldsValue) => {
       this.queryList(fieldsValue,0,this.state.searchList.pageSize);

       this.setState({
             visible:false
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
            type: 'order/fetchOrderlist',
            payload: searchList
        });

    }


    render() {

        const { visible,searchList } = this.state;
        const {order:{orderList},global:{lang},loading}=this.props;
        const parentMethods = {
            searchList,
            handleEdit: this.handleEdit,
            handleHoverChange: this.handleHoverChange
        };
        const columns = [{
            title: intl.get('ORDER_NUMBER2'),
            dataIndex: 'orderSn',
            
            render(text,row){
               return (<Fragment><Link className="yellow" to={`/${lang}/payment/user/${text}/${row.type}`}>{text}</Link></Fragment>);
            }
        }, {
            title:  intl.get('ORDER_TYPE'),
            dataIndex: 'type',
            
            render(text){
              return (<span className={cx({green:text===0,red:text===1})}>{text===0?'买入':'卖出'}</span>);
            }
        }, {
            title: intl.get('ORDER_NUM'),
            dataIndex: 'amount'
           
        }, {
            title:intl.get('ORDER_TOTAL_PRICE'),
            dataIndex: 'money'
            
        }, {
            title:intl.get('ORDER_UNIT'),
            dataIndex: 'price'
            
        }, {
            title: intl.get('EXCHANGE_TIME'),
            dataIndex: 'createTime'
          
        }, {
            title: intl.get('EXCHANGE_STATUS'),
            dataIndex: 'status',
            align:'center',
            render:(text)=>(
            
            <Fragment>
            	{[
              (<Fragment key={text}><Icon className="gray mr-sm" type="close-circle" />{intl.get('ORDER_CANCELLED')}</Fragment>),
            	(<Fragment key={text}><Icon className="red mr-sm" type="clock-circle" />{intl.get('ORDER_NOT_PAID')}</Fragment>),
            	(<Fragment key={text}><Icon className="green mr-sm" type="check-circle" />{intl.get('ORDER_PAYMENT')}</Fragment>),
              (<Fragment key={text}><Icon className="green mr-sm" type="check-circle" />{intl.get('ORDER_COMPLETED')}</Fragment>),
              (<Fragment key={text}><Icon className="gray mr-sm" type="clock-circle" />{intl.get('ORDER_APPEAL')}</Fragment>)
              ][+text]}
            </Fragment>)
        }, {
            title: intl.get('ORDER_OBJECT'),
            
            dataIndex: 'name',
            align: 'right',
             width:200,
            render(text, row, index) {
                return (<Fragment><Link className="yellow" to={`/${lang}/checkUser/user/${text}`}>{text}</Link></Fragment>);
            }
        }];





        return (
            <Layout className="order container" title={intl.get('ORDER')}>
                 <section className="order-top flex-box flex-between">
                     <h3 className="order-title flex-item">{intl.get('ORDER')}</h3>
                     <div className="flex-box flex-item flex-end flex-alignItem">
                     <SearchForm content={<CreateForm {...parentMethods}  />} placeholder={intl.get('ORDER_NUMBER_STATUS')} visible={visible} onVisibleChange={()=>this.handleHoverChange(1)}>
                       <Tag color="#909197">{searchList.status===''?intl.get('ORDER_ALL_ORDERS'):{0:intl.get('ORDER_CANCELLED'),1:intl.get('ORDER_NOT_PAID'),2:intl.get('ORDER_PAYMENT'),3:intl.get('ORDER_COMPLETED'),4:intl.get('ORDER_APPEAL')}[searchList.status]}</Tag>
                       {searchList.orderSn&&<Tag color="#909197">{searchList.orderSn}</Tag>}
                     </SearchForm>
                     </div>
                 </section>
                 <section>
                     <Table 
                       loading={loading}
                       rowKey={record => record['orderSn']}
                       locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                       dataSource={orderList.content}  
                       columns={columns} 
                       onChange={this.handleStandardTableChange}
                       pagination={{
                          style: { marginBottom: 0 },
                          pageSize: 10,
                          hideOnSinglePage:true,
                          current:searchList.pageNo+1,
                          total:orderList.totalElements
                        }} />

                 </section>
            
                
            </Layout>

        );
    }
}

export default Order;
