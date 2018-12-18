/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-19 17:14:41
 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';
import { Table } from 'antd';
import {scientificToNumber} from '@/utils/utils';
import cx from 'classnames';

import Aside from '../component/Aside';



import '../Property.less';
import './Record.less';


const fromData = {
    pageSize: 5,
    pageNo: 0
};
const fromDataWList = {
    pageSize: 5,
    page: 0
};

@connect(({ property, loading }) => ({
    property,
    loading_1: loading.effects['property/fetchGetAssetRechargeList'],
    loading_3: loading.effects['property/fetchGetWithdrawList'],
    loading_2: loading.effects['property/fetchGetPropertylist']
}))
class Account extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchRecordList: {...fromData, type: 0 },
            searchPropertyList: {...fromData },
            serchWithdrawList: {...fromDataWList },
            active: 1
        };

    }
    componentDidMount() {
            const { dispatch } = this.props;
            Promise.all([dispatch({
                type: 'property/fetchGetAssetRechargeList',
                payload: {
                    ...fromData,
                    type: 0
                }
            }), dispatch({
                type: 'property/fetchGetPropertylist',
                payload: {
                    ...fromData
                }
            })]);

        }
        /**
         * [切换]
         * @return {[type]} [description]
         */
    switchHanlde = (active) => {
            const { dispatch } = this.props;
            if(active===this.state.active)return;
            const params = {
                1: {
                    label: 'property/fetchGetAssetRechargeList',
                    name:'searchPropertyList',
                    payload: {
                        ...fromData,
                        type: 0
                    }
                },
                2: {
                    label: 'property/fetchGetWithdrawList',
                    name:'serchWithdrawList',
                    payload: {
                        ...fromDataWList
                    }
                }
            }[active];
            this.setState({
                active,
                [params.name]:params.payload
            });
    
            dispatch({
                type:params.label,
                payload: params.payload
            });

        }
        /**
         * [分页查询]
         * @param  {[type]} pagination [description]
         * @return {[type]}            [description]
         */
    handleStandardTableChange = (pagination, type) => {
        const name = [{ label: 'fetchGetPropertylist', search: 'searchPropertyList' },
            { label: 'fetchGetAssetRechargeList', search: 'searchRecordList' }, { label: 'fetchGetWithdrawList', search: 'serchWithdrawList' }
        ][type];
        this.queryList(this.state[name], pagination.current - 1, pagination.pageSize, name);

    }
    queryList(searchData, pageNo, pageSize, param) {
        let searchList = {
            ...searchData,
            page:pageNo,
            pageNo,
            pageSize
        };
        this.setState({
            [param.search]: searchList
        });
        this.props.dispatch({
            type: `property/${param.label}`,
            payload: searchList
        });

    }
    render() {
        const { searchPropertyList, searchRecordList, serchWithdrawList, active } = this.state;
        const { property: { propertylist, rechargeList, withdrawList },loading_1,loading_2,loading_3 } = this.props;
       

        const columns = [{
            title: intl.get('PROPERTY_DEAL_TIME'),
            dataIndex: 'createTime',
            width: 300
        }, {
            title: intl.get('EXCHANGE_CURRENCY'),
            dataIndex: 'symbol',
            width: 150
        }, {
            title: intl.get('PROPERTY_TYPE'),
            dataIndex: 'type',
            width: 200,
            render: (text) => {
                const val = [intl.get('PROPERTY_TYPE_1'),intl.get('PROPERTY_TYPE_2'), intl.get('PROPERTY_TYPE_3'),  intl.get('PROPERTY_TYPE_4'),  intl.get('PROPERTY_TYPE_5'),  intl.get('PROPERTY_TYPE_6'),  intl.get('PROPERTY_TYPE_7'),  intl.get('PROPERTY_TYPE_8'),  intl.get('PROPERTY_TYPE_9'),  intl.get('PROPERTY_TYPE_10'),
                    intl.get('PROPERTY_TYPE_11'), '', intl.get('PROPERTY_TYPE_12'), intl.get('PROPERTY_TYPE_13'), '', '', intl.get('PROPERTY_TYPE_14')
                ][text];
                return (<Fragment>{val}</Fragment>);
            }
        }, {
            title: intl.get('RELEASEADS_NUM'),
            dataIndex: 'amount',
            width: 200,
            render:(text)=>scientificToNumber(text)
        }];
        const columnsRecharge = [{
            title: intl.get('PROPERTY_TIME'),
            dataIndex: 'createTime',
            width: 300
        }, {
            title:  intl.get('EXCHANGE_CURRENCY'),
            dataIndex: 'symbol',
            width: 150
        }, {
            title:  intl.get('PROPERTY_RECHAEGE_ADDRESS'),
            dataIndex: 'address',
            width: 200
        }, {
            title:  intl.get('PROPERTY_RECHAEGE_NUM'),
            dataIndex: 'amount',
            width: 200,
            render:(text)=>scientificToNumber(text)
        }];
        const columnsWithdraw = [{
            title:intl.get('PROPERTY_WITH_TIME'),
            dataIndex: 'createTime'
        }, {
            title: intl.get('EXCHANGE_CURRENCY'),
            dataIndex: 'coin.unit',
            align: 'center'
        }, {
            title: intl.get('PROPERTY_WITH_ADDRESS'),
            dataIndex: 'address',
            width: 200,
            align: 'center'
        }, {
            title:intl.get('PROPERTY_WITH_NUM'),
            dataIndex: 'totalAmount',
            align: 'center'
        }, {
            title: intl.get('PROPERTY_FEE'),
            dataIndex: 'fee',
            align: 'center'
        }, {
            title:  intl.get('PROPERTY_ACTUAL_NUM'),
            dataIndex: 'arrivedAmount',
            align: 'center'
        }, {
            title:  intl.get('EXCHANGE_STATUS'),
            dataIndex: 'status',
            align: 'center',
            render: (text) => {
                const status = [intl.get('PROPERTY_MATERIAL'), intl.get('PROPERTY_TRANSFER'), intl.get('PROPERTY_FAILURE'), intl.get('PROPERTY_SUCCEED')][text];
                return (<Fragment>{status}</Fragment>);
            }
        }, {
            title:  intl.get('PROPERTY_REMARK'),
            dataIndex: 'remark',
            width: 200,
            align: 'center'
        }];
        const params = {
            1: {
                data: rechargeList,
                columns: columnsRecharge,
                searchList: searchRecordList
            },
            2: {
                data: withdrawList,
                columns: columnsWithdraw,
                searchList: serchWithdrawList
            }
        }[active];


        return (
            <Layout back white className="pproperty record container">
                   <div className="flex-box ">
                      <Aside  />
                      <section className="pproperty-right flex-item ml-lg">
                         <div className="box pb-md">
                            <div className="record-top flex-box flex-alignItem flex-between pd-20">
                               <div className="record-top-left">
                                 <p className="record-item">{intl.get('PROPERTY_NEW')}</p> 
                               </div>
                            </div>
                            <div className="pd-20">
                              <Table 
                                loading={loading_2}
                                rowKey={record => record['id']}
                                locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                                dataSource={propertylist.content}  
                                columns={columns} 
                                onChange={(pagination)=>this.handleStandardTableChange(pagination,0)}
                                pagination={{
                                  style: { marginBottom: 0 },
                                  pageSize: searchPropertyList.pageSize,
                                  hideOnSinglePage:true,
                                  current:searchPropertyList.pageNo+1,
                                  total:propertylist.totalElements
                                }} />
                            </div>
                         </div>
                         <div className="box mt-md  pb-md">
                             <div className="record-top flex-box flex-alignItem flex-between pd-20">
                               <div className="record-top-left flex-box-inline ">
                                  <p className={cx('record-item',{active:active===1})} onClick={()=>this.switchHanlde(1)}> {intl.get('PROPERTY_RECORD_1')}</p>
                                  <p className={cx('record-item',{active:active===2})} onClick={()=>this.switchHanlde(2)}> {intl.get('PROPERTY_RECORD_2')}</p>
                               </div>
                            </div>
                            <div className="pd-20">
                               <Table 
                                 loading={active===1?loading_1:loading_3}
                                 rowKey={record => record['id']}
                                 locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                                 dataSource={params.data.content}  
                                 columns={params.columns} 
                                 onChange={(pagination)=>this.handleStandardTableChange(pagination,active)}
                                 pagination={{
                                    style: { marginBottom: 0 },
                                    pageSize:  params.searchList.pageSize,
                                    hideOnSinglePage:true,
                                    current:params.searchList.pageNo+1,
                                    total:params.data.totalElements
                                  }} />
                              
                            </div>

                         </div>
                      </section>
                   </div>
             </Layout>
        );
    }
}

export default Account;
