/*
 * @Author: Administrator
 * @Date:   2018-08-15 15:53:55
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-21 17:35:26
 */
import React,{PureComponent} from 'react';
import { connect } from 'dva';
import intl from 'react-intl-universal';
import {  Table } from 'antd';

const fromData = {
    pageSize: 10,
    pageNo: 1,
    type:0
};
@connect(({ property, loading }) => ({
    property,
    loading
}))
class Deal extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            searchList: {...fromData }
        };
    }
    componentDidMount() {
    	const {dispatch}=this.props;

    	dispatch({
          type:'property/fetchGetAssetRecordList',
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
                type: 'property/fetchGetAssetRecordList',
                payload: searchList
            });

        }

    render() {
    	 const { searchList } = this.state;
        const {item, property: { assetRecordList,loading } } = this.props;

        const columns = [{
            title: intl.get('PROPERTY_TIME'),
            dataIndex: 'createTime'
        }, {
            title:  intl.get('EXCHANGE_CURRENCY'),
            dataIndex: 'symbol'
        }, {
            title:  intl.get('PROPERTY_RECHAEGE_ADDRESS'),
            dataIndex: 'address'
        }, {
            title: intl.get('PROPERTY_RECHAEGE_NUM'),
            dataIndex: 'amount'
        }];
        return (
            <div className="account-deal">
            <span className="account-triangle" style={{left:item.left}}></span>
              <Table 
                loading={loading}
                rowKey={record => record['id']}
                locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                dataSource={assetRecordList.content}  
                columns={columns} 
                onChange={this.handleStandardTableChange}
                pagination={{
                  style: { marginBottom: 0 },
                  pageSize: 10,
                  hideOnSinglePage:true,
                  current:searchList.pageNo,
                  total:assetRecordList.totalElements
                }} />
            </div>
        );
    }
}
export default Deal;
