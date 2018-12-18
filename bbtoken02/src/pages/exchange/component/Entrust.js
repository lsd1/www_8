/*
 * @Author: Administrator
 * @Date:   2018-08-24 10:56:45
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-22 18:02:47
 */
import React, { PureComponent, Fragment } from 'react';
import { Collapse, Button, Table, Modal } from 'antd';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import dayjs from 'dayjs';
import intl from 'react-intl-universal';
import BuySell from '@/components/BuySell/BuySell';
import { scientificToNumber } from '@/utils/utils';
const Panel = Collapse.Panel;
const fromData = {
    pageNo: 0,
    pageSize: 5
};
@withRouter
@connect(({ user, exchange, loading }) => ({
    user,
    exchange,
    loadingCurrent: loading.effects['exchange/fetchGetCurrentOrder'],
    loadingHistory: loading.effects['exchange/fetchGetHistoryOrder']
}))
class Entrust extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            searchListCurrent: {...fromData },
            searchListHistory: {...fromData }
        };
    }
    componentDidMount() {
            const { searchListHistory, searchListCurrent } = this.state;
            const { dispatch, user: { isLogin }, exchange: { currentCoin } } = this.props;
            if (isLogin) {
                Promise.all([dispatch({
                    type: 'exchange/fetchGetCurrentOrder',
                    payload: {
                        ...searchListCurrent,
                        symbol: currentCoin.symbol
                    }
                }), dispatch({
                    type: 'exchange/fetchGetHistoryOrder',
                    payload: {
                        ...searchListHistory,
                        'symbol': currentCoin.symbol
                    }
                })]);

            }


        }
        /**
         * [委托翻页]
         * @param  {[type]} pagination [description]
         * @param  {[type]} index      [0，当前，1历史]
         * @return {[type]}            [description]
         */
    handleStandardTableChange = (pagination, index) => {
            const { dispatch, exchange: { currentCoin } } = this.props;
            const name = ['searchListCurrent', 'searchListHistory'][index];
            const pageNo = pagination.current - 1;
            let searchList = {
                ...this.state[name],
                pageNo
            };
            this.setState({
                [name]: searchList
            });
            dispatch({
                type: `exchange/${index===0?'fetchGetCurrentOrder':'fetchGetHistoryOrder'}`,
                payload: {
                    ...searchList,
                    'symbol': currentCoin.symbol
                }
            });
        }
        /**
         * [againInit 加载用户数据]
         * @return {[type]} [description]
         */
    againInit() {
            const { dispatch, exchange: { currentCoin } } = this.props;
            return dispatch({
                type: 'exchange/fetchGetplate',
                payload: { symbol: currentCoin.symbol }
            });

        }
        /**
         * [撤单]
         * @param  {[type]} item [description]
         * @return {[type]}      [description]
         */
    undoHandle = (item) => {
            this.cancleRevoke({
                type: 'exchange/dealCancelUndo',
                payload: {
                    id: item.orderId
                }
            });

        }
        /**
         * [一键撤单]
         * @param  {[type]} item [description]
         * @return {[type]}      [description]
         */
    cancelHandle = (e) => {
      e.stopPropagation();
    const { exchange: { currentCoin } } = this.props;
       this.cancleRevoke({
                type: 'exchange/dealCancelAll',
                payload:{
                    symbol:currentCoin.symbol
                }
        });
    }
    cancleRevoke(params) {
        const { dispatch, initDeal } = this.props;
        Modal.confirm({
            title: intl.get('GLOBAL_WAEM'),
            content: intl.get('EXCHANGE_WITHDRAWAL'),
            cancelText: intl.get('GLOBAL_CANCEL'),
            okText: intl.get('GLOBAL_OK'),
            onOk: async() => {
                await dispatch(params);
                this.againInit();
                initDeal && initDeal(1);

            }
        });

    }
    render() {
        const { searchListHistory, searchListCurrent } = this.state;
        const { exchange: { currentOrder, historyOrder }, loadingCurrent, loadingHistory } = this.props;


        const columnsCurrent = [{
            title: intl.get('EXCHANGE_TIME'),
            align: 'center',
            width: 200,
            dataIndex: 'time',
            render: (text) => dayjs(text).format('YYYY-MM-DD HH:mm')
        }, {
            title: intl.get('EXCHANGE_DIRECTION'),
            align: 'center',
            width: 100,
            dataIndex: 'direction',
            render: (text) => {
                return (<BuySell text={text} />);
            }
        }, {
            title: intl.get('EXCHANGE_PRICE'),
            align: 'center',
            width: 200,
            dataIndex: 'price',
            render: (text) => text === 0 ? intl.get('EXCHANGE_CITY_PRICE') : text
        }, {
            title: intl.get('RELEASEADS_NUM'),
            align: 'center',
            width: 100,
            dataIndex: 'amount'
        }, {
            title: intl.get('EXCHANGE_DONE'),
            align: 'center',
            width: 100,
            dataIndex: 'tradedAmount'
        }, {
            title: intl.get('EXCHANGE_OPERATING'),
            width: 100,
            align: 'center',
            render: (text, row) => {
                return (<Button className="panel-table-btn" size="small" onClick={()=>this.undoHandle(row)}>{intl.get('EXCHANGE_EEVOKE')}</Button>);
            }
        }];
        const columnsHistory = [{
            title: intl.get('EXCHANGE_TIME'),
            align: 'center',
            width: 200,
            dataIndex: 'time',
            render: (text) => dayjs(text).format('YYYY-MM-DD HH:mm')
        }, {
            title: intl.get('EXCHANGE_DIRECTION'),
            align: 'center',
            width: 100,
            dataIndex: 'direction',
            render: (text) => {
                return (<BuySell text={text} />);
            }
        }, {
            title: intl.get('EXCHANGE_PRICE'),
            align: 'center',
            width: 200,
            dataIndex: 'price',
            render: (text) => text === 0 ? intl.get('EXCHANGE_CITY_PRICE') : text
        }, {
            title: intl.get('EXCHANGE_COMMISSION'),
            align: 'center',
            width: 100,
            dataIndex: 'amount'
        }, {
            title: intl.get('EXCHANGE_DONE'),
            align: 'center',
            width: 100,
            dataIndex: 'tradedAmount'
        }, {
            title: intl.get('EXCHANGE_STATUS'),
            align: 'center',
            width: 100,
            dataIndex: 'status',
            render: (text) => {
                const data = { COMPLETED: intl.get('ORDER_COMPLETED'), CANCELED: intl.get('ORDER_CANCELLED') };
                return data[text];
            }
        }];

        const columnsDetail = [{
            title: intl.get('EXCHANGE_TIME'),
            align: 'center',
            dataIndex: 'time',
            render: (text) => dayjs(text).format('YYYY-MM-DD HH:mm')
        }, {
            title: intl.get('EXCHANGE_PRICE'),

            dataIndex: 'price'
        }, {
            title: intl.get('RELEASEADS_NUM'),

            dataIndex: 'amount'
        }, {
            title: intl.get('PROPERTY_FEE'),
            dataIndex: 'fee',
            render: (text) => scientificToNumber(text)
        }];


        return (
            <Fragment>
            <section className="mt-xs">
                  <Collapse defaultActiveKey={['1']}>
                      <Panel header={<div className="flex-box flex-alignItem flex-between "><span className="fz-md">{intl.get('EXCHANGE_CURRENT')}</span>{currentOrder.content&&currentOrder.content.length>0 &&<Button className="mr-md" type="primary"  size="small" onClick={(e)=>this.cancelHandle(e)}>一键撤单</Button>}  </div>} key="1">
                         <div className="panel-table-box panel-table-currentOrder pb-sm">
                          <Table 
                            loading={loadingCurrent}  
                            rowKey={record => record['time']} 
                            locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                            size="small" 
                            className="panel-table panel-tableHistory" 
                            pagination={{
                                style: { marginBottom: 0 },
                                hideOnSinglePage:true,
                                pageSize: 5,
                                current:searchListCurrent.pageNo+1,
                                total:currentOrder.totalElements
                              }}
                            onChange={(pagination)=>this.handleStandardTableChange(pagination,0)}
                            dataSource={currentOrder.content} 
                            columns={columnsCurrent} />
                          </div>
                      </Panel>
                  </Collapse>
                </section>
                <section className="mt-xs">
                  <Collapse defaultActiveKey={['1']}>
                      <Panel header={<div className="flex-box flex-alignItem"><span className="fz-md">{intl.get('EXCHANGE_HISTORY')}</span></div>} key="1">
                         <div className="panel-table-box panel-table-scroll panel-table-currenthistory   pb-sm">
                           <Table 
                             loading={loadingHistory}
                             locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                             rowKey={record => record['time']}
                             className="panel-table panel-tableHistory"  
                             size="small" 
                             dataSource={historyOrder.content}  
                             columns={columnsHistory} 
                             expandRowByClick
                             onChange={(pagination)=>this.handleStandardTableChange(pagination,1)}
                             expandedRowRender={record =>(
                              <Table
                                size="small"
                                rowKey={record => record['time']} 
                                locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                                className="panel-small-table" 
                                pagination={{hideOnSinglePage:true}} 
                                dataSource={record.detail} 
                                columns={columnsDetail} />) 
                             }
                             pagination={{
                                style: { marginBottom: 0,marginTop:10},
                                hideOnSinglePage:true,
                                pageSize: 5,
                                current:searchListHistory.pageNo+1,
                                total:historyOrder.totalElements
                              }} />
                          </div>
                      </Panel>
                  </Collapse>
                </section>
            </Fragment>
        );
    }
}
export default Entrust;
