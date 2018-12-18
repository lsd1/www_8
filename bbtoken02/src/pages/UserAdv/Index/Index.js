/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-21 17:35:32
 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';

import intl from 'react-intl-universal';
import Layout from '@/layouts/';


import { Modal, Table, message } from 'antd';

import './../UserAdv.less';





const fromData = {
    pageSize: 10,
    pageNo: 1,
    direction: 1,
    property: 'createTime'
};
@connect(({ business,global, loading }) => ({
    global,
    business,
    loading: loading.models.business
}))
class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.captcha = React.createRef();
        this._captchaReset = null;
        this.state = {
            // visible: false,
            // exportVisible:false,
            searchList: {...fromData }
        };
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'business/fetchGetAdvertiseList',
            payload: fromData
        });
    }
    handleStandardTableChange = (pagination) => {
        this.queryList(this.state.searchList, pagination.current, pagination.pageSize);
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
                type: 'business/fetchGetAdvertiseList',
                payload: searchList
            });

        }
        /**
         * [编辑广告]
         * @param  {[type]} record [description]
         * @return {[type]}        [description]
         */
    editAdtHanlde = (record) => {
            const { history,global:{lang} } = this.props;
            if (record.status === 0) {
                message.success(intl.get('USERADV_MES'));
            } else {
                history.push(`/${lang}/ads/releaseAds/update/${record.id}`);
            }

        }
        /**
         * [上下架广告]
         * @param  {[type]} record [description]
         * @return {[type]}        [description]
         */
    shelvesHandle = (id, type) => {
            const { dispatch } = this.props;
            dispatch({
                type: 'business/saveShelves',
                payload: {
                    id,
                    type
                }
            });



        }
        /**
         * [删除广告]
         * @param  {[type]} record [description]
         * @return {[type]}        [description]
         */
    deleteHanlde = id => {
        const { dispatch } = this.props;
        Modal.confirm({
            title:  intl.get('GLOBAL_WAEM'),
            content: intl.get('PROPERTY_DEL_TITLE'),
            okText:  intl.get('GLOBAL_OK'),
            cancelText:  intl.get('GLOBAL_CANCEL'),
            onOk: () => {
                dispatch({
                    type: 'business/deleteAdvertise',
                    payload: {
                        id
                    }
                });

            }
        });

    }

    render() {

        const { searchList } = this.state;
        const { business: { adtList },loading } = this.props;
        
        const columns = [{
            title: intl.get('USERADV_NUMBER'),
            dataIndex: 'id',
            width: 150
        }, {
            title: intl.get('USERADV_TYPE'),
            dataIndex: 'advertiseType',
            width: 200,
            render: (text) => {
                const className = text === 1 ? 'red' : 'green';
                return (<span className={className}>{[intl.get('TRADE_BUY'),intl.get('TRADE_SELL')][text]}</span>);
            }
        }, {
            title: intl.get('USERADV_NUM'),
            dataIndex: 'remainAmount',
            width: 100
        }, {
            title: intl.get('RELEASEADS_COIN'),
            dataIndex: 'coin.unit',
            width: 100
        }, {
            title: intl.get('USERADV_LIMIT'),
            dataIndex: 'minLimit',
            width: 200,
            render: (text, record) => {
                return (<Fragment>{`${text}~${record.maxLimit}/${record.country.localCurrency}`}</Fragment>);
            }
        }, {
            title: intl.get('USERADV_CREATE'),
            dataIndex: 'createTime',
            width: 200
        }, {
            title: intl.get('EXCHANGE_OPERATING'),
            width: 200,
            align: 'right',
            render: (text, record, index) => {
                const flag = record.status === 1;

                return (
                    <Fragment>
                        <span className="yellow mr-sm pointer" onClick={()=>this.editAdtHanlde(record)}>{intl.get('USERADV_EDIT')}</span>
                        <span className="yellow mr-sm pointer" onClick={()=>this.shelvesHandle(record.id,flag?1:2)}>{flag?intl.get('USERADV_ON'):intl.get('USERADV_OFF')}</span>
                        <span className="yellow pointer" onClick={()=>this.deleteHanlde(record.id)}>{intl.get('GLOBAL_DELETE')}</span>
                    </Fragment>);
            }
        }];
        return (
            <Layout className="order container" title={intl.get('TOP_MY_ORDER')}>
                 <section className="order-top flex-box flex-between">
                     <h3 className="order-title flex-item">{intl.get('TOP_MY_ORDER')}</h3>
                     <div className="flex-box flex-item flex-end flex-alignItem">
                     
                     </div>
                 </section>
                 <section>
                     <Table 
                       loading={loading}
                       rowKey={record => record['id']}
                       locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                       dataSource={adtList.content}  
                       columns={columns} 
                       onChange={this.handleStandardTableChange}
                       pagination={{
                          style: { marginBottom: 0 },
                          pageSize: 10,
                          hideOnSinglePage:true,
                          current:searchList.pageNo,
                          total:adtList.totalElements
                        }} />
                 </section>
            </Layout>

        );
    }
}

export default Index;
