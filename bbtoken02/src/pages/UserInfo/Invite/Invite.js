/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-17 16:49:51
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import intl from 'react-intl-universal';
import { Select, Table,  message } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Layout from '@/layouts/';
import Aside from '../component/Aside';
import Box from '../component/Box';

import cx from 'classnames';



import './../UserInfo.less';
import './Invite.less';
const fromData = {
    pageNo: 1,
    pageSize: 5
};

@connect(({ user,global, loading }) => ({
    user,
    global,
    loading
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class Invite extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            active: 1,
            searchList: {...fromData },
            visible: false
        };
    }
    componentDidMount() {
        const { searchList } = this.state;
        const { dispatch } = this.props;
        Promise.all([dispatch({
            type: 'user/fetchGetUserRecord',
            payload: {
                ...searchList
            }
        }), dispatch({
            type: 'user/fetchGetInvite'
        })]);


    }
    switchHanlde = (state) => {
        
        this.setState({
            active: state
        });
        this.handleStandardTableChange({ ...fromData,current:1},state);

    }
    showModal = (state) => {

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
         * [下一页数据]
         * @param  {[type]} pagination [description]
         * @return {[type]}            [description]
         */
    handleStandardTableChange = (pagination,active) => {
            const { dispatch } = this.props;
            const pageNo = pagination.current;
            let searchList = {
                ...this.state.searchList,
                pageNo
            };
            this.setState({
                searchList
            });
            dispatch({
                type: `user/${active===1?'fetchGetUserRecord':'fetchGetUserReward'}`,
                payload: {
                    ...searchList
                }
            });
        }
        /**
         * [copyHanlde 复制文本回调]
         * @param  {[type]} text   [文本]
         * @param  {[boolean]} result [是否复制成功]
         * @return {[type]}        [description]
         */
    copyHanlde=(text, result)=>{
        if (result) {
            message.destroy();
            message.success('复制成功');
        }
    }

    render() {

        const {  searchList, active } = this.state;
        const { user: { userInfo, peopleData, RecordData, RewardData, loading },global:{lang} } = this.props;
        const columnsRecord = [{
            title: intl.get('USERINFO_INVITEES_NO'),
            dataIndex: 'username',
            key: 'username',
            render: text => <a href="javascript:;">{text}</a>
        }, {
            title: intl.get('EXCHANGE_TIME'),
            dataIndex: 'createTime',
            key: 'createTime'
        }, {
            title: intl.get('EXCHANGE_STATUS'),
            dataIndex: 'level',
            key: 'level',
            render:(text)=>{
              return [intl.get('USERINFO_level_1'),intl.get('USERINFO_level_2'),intl.get('USERINFO_level_3')][text];
            }
        }];

        const columnsRewardData = [{
            title: intl.get('EXCHANGE_CURRENCY'),
            dataIndex: 'symbol',
            key: 'symbol',
            render: text => <a href="javascript:;">{text}</a>
        }, {
            title: intl.get('USERINFO_MONEY'),
            dataIndex: 'amount',
            key: 'amount'
        }, {
            title: intl.get('USERINFO_HAIR_TIME'),
            dataIndex: 'createTime',
            key: 'createTime'
        }, {
            title: intl.get('PROPERTY_REMARK'),
            dataIndex: 'remark',
            key: 'remark'
        }];


        return (
            <Layout white className="user invite container">
                 <article className="article flex-box flex-between">
                    <Aside />
                   <section className="content">
                       <img className="invite-adv" src={require('@/assets/images/Invite.png')} alt="" />

                       <Box className="mt-lg" title={intl.get('USERINFO_MY_WAY')}>
                        <div className="user-box ">
                          <dl className="invite-mode">
                               <dd className="flex-box flex-between flex-alignItem">
                                   
                                   <p className="yard opacity-5">{intl.get('USERINFO_PRIVATE_CODE')}</p>
                                   <p className="exclusive-link opacity-5">{intl.get('USERINFO_PRIVATE_LINK')}</p>
                               </dd>
                               <dd className="flex-box flex-between flex-alignItem mt-sm">
                                  
                                   <div className="yard  item-box border-1 flex-box flex-alignItem">
                                        <div className="flex-item pl-md">{userInfo.promotionCode}</div>
                                        <CopyToClipboard text={userInfo.promotionCode}  onCopy={this.copyHanlde}>
                                          <p className="yellow pointer copy tc">{intl.get('USERINFO_COPY_CODE')}</p>
                                        </CopyToClipboard>
                                   </div>
                                   <div className="exclusive-link item-box border-1 flex-box flex-alignItem">
                                      <div className="flex-item pl-md ellipsis">{`${location.host}/${lang}/register/${userInfo.promotionCode}`}</div> 
                                      <CopyToClipboard text={`${location.host}/${lang}/register/${userInfo.promotionCode}`}  onCopy={this.copyHanlde}>
                                       <p className="yellow pointer copy tc">{intl.get('USERINFO_COPY_CODE')}</p>
                                       </CopyToClipboard>
                                   </div>
                               </dd>
                          </dl>
                         </div>
                       </Box>
                       <Box className="mt-lg">
                          <div className="invite-people flex-box">
                             <div className="left">
                                   <p className="fz-xs">{intl.get('USERINFO_INVITEES')}</p>
                                   <p className="mt-sm"><em className="opacity-8 mr-md">{intl.get('USERINFO_TOTAL_INVITEES')}</em><em className="num">{RecordData.totalElements}</em></p>
                             </div>
                             <div className="right">
                                 <p className="fz-xs">{intl.get('USERINFO_REBATE')}</p>
                                 <div className="mt-sm">
                                    <span className="opacity-5"></span><em className="num ml-md">{peopleData.amount}</em>
                                 </div>
                             </div>
                          </div>
                       </Box>
                       <Box
                         className="mt-lg" 
                         title={<ul className="user-tab flex-box"><li onClick={()=>this.switchHanlde(1)} className={cx('user-tab-item',{active:active===1})}>{intl.get('USERINFO_INVITATION')}</li><li onClick={()=>this.switchHanlde(2)}  className={cx('user-tab-item',{active:active===2})}>{intl.get('USERINFO_REBATE_RECORD')}</li></ul>}
                         >
                          <div className="user-box pt-md pb-lg">
                            {active===1?(
                              <Table 
                                columns={columnsRecord} 
                                dataSource={RecordData.content} 
                                loading={loading}
                                rowKey={record => record['createTime']}
                                onChange={(pagination)=>this.handleStandardTableChange(pagination,active)}
                                locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                                pagination={{
                                  hideOnSinglePage:true,
                                  style: { marginBottom: 0 },
                                  pageSize: 5,
                                  current:searchList.pageNo,
                                  total:RecordData.totalElements
                                }} />):(
                                <Table 
                                  columns={columnsRewardData} 
                                  dataSource={RewardData.content} 
                                  loading={loading}
                                  rowKey={(record,index) => index}
                                  onChange={(pagination)=>this.handleStandardTableChange(pagination,active)}
                                  locale={{emptyText:intl.get('GLOBAL_NO_DATA')}}
                                  pagination={{
                                    hideOnSinglePage:true,
                                    style: { marginBottom: 0 },
                                    pageSize: 5,
                                    current:searchList.pageNo,
                                    total:RewardData.totalElements
                                  }} />)}
                              
                            
                              
                          </div>
                       </Box>
                       <Box className="mt-lg" title="活动规则">
                          <div className="user-box pt-md pb-lg opacity-5 invite-bg-f2">
                          {intl.getHTML('USERINFO_DESC_1')}
                          </div> 
                       </Box>
                   </section>

                 </article>
            </Layout>

        );
    }
}

export default Invite;
