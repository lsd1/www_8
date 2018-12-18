/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-12 00:57:13
 */
import React, { PureComponent,Fragment } from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';


import {  Button,Modal,Table,Icon} from 'antd';

import './../UserAdv.less';




@withRouter
@connect(({ user, loading }) => ({
    user
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.captcha = React.createRef();
        this._captchaReset = null;
        this.state = {
            exportVisible:false
        };
    }
    componentDidMount() {

    }

    handleHoverChange = (state) => {
        this.setState({
            visible: !!state
        });
    }
    handleEdit = (fieldsValue) => {
        console.log(fieldsValue);

    }
    showModal = (state) => {
    	const { dispatch } = this.props;
        dispatch({
            type: 'user/fetchGetCaptcha',
            callback: (captchaObj) => {
                    
                    const captcha = this.captcha.current;
                    captchaObj.appendTo(captcha);
                    captchaObj.onReady(() => {
                        captcha && captcha.removeChild(captcha.childNodes[0]);
                    });
                   
                    captchaObj.onSuccess(() => {
                        this.setState({
                            captchaCount: 0,
                            captchaResult: captchaObj.getValidate()
                        });
                    });
                    this._captchaReset = captchaObj;
            
            }
        });
        this.setState({
            exportVisible: true
        });
    }
    handleOk = (e) => {
        this.setState({
            exportVisible: false
        });

    }
    handleCancel = (e) => {
        this.setState({
            exportVisible: false
        });
        this._captchaReset.reset();
    }

    render() {

        const { exportVisible } = this.state;
        const {match:{params}}=this.props;

       

        const columns = [{
            title: '广告编号',
            dataIndex: 'no',
            width: 100
        }, {
            title: '交易对象',
            dataIndex: 'name',
            width: 150
        }, {
            title: '支付方式',
            dataIndex: 'type',
            width: 200
        }, {
            title: '交易数量',
            dataIndex: 'num',
            width: 200
        },  {
            title: '交易类型',
            dataIndex: 'quota',
            width: 200
        },  {
            title: '创建时间',
            dataIndex: 'createTime',
            width: 200
        }, {
            title: '状态',
            dataIndex: 'status',
            width: 200,
            render:(text)=>(
            <Fragment>
            	{[(<span key="one" className="red">有待处理订单</span>),
            	(<span key="two">订单已处理</span>),
            	(<span key="three">已完成</span>)][+text]}
            </Fragment>)
        }, {
            title: '操作',
            width: 300,
            align: 'right',
            render(text, row, index) {
                return (
                	<Fragment>
                	<span className="yellow mr-sm">标记为已转款</span>
                	<span className="yellow pointer">取消订单</span>
                	</Fragment>);
            }
        }];

        const data = [{
            no: '1',
            createTime:'2015-2-2',
            type:'支付宝',
            name: '张三',
            quota:'1000-5000 CNY',
            num: 20000,
            status:0
        },{
            no: '2',
            createTime:'2015-2-2',
            type:'微信',
            name: '张三',
            quota:'1000-5000 CNY',
            num: 20000,
            status:0
        }];



        return (
            <Layout className="order container">
                 <section className="order-top flex-box flex-between">
                     <h3 className="order-title flex-item">我的广告<small className="yellow ml-sm" >· 广告编号{params.id}</small></h3>
                     <div className="flex-box flex-item flex-end flex-alignItem">

                      <Button className="mt-sm ml-lg" onClick={this.showModal}><Icon type="upload" /> 导出</Button>
                     </div>
                 </section>
                 <section>
                     <Table rowKey={record => record['no']} columns={columns} dataSource={data} pagination={{hideOnSinglePage:true}} />
                 </section>
                 <Modal  
                   wrapClassName="model"
                   width={500}
                   title="数据导出"
                   visible={exportVisible} 
                   onOk={this.handleOk} 
                   onCancel={this.handleCancel} 
                   maskClosable={false}
                   footer={[
		            <Button key="back" className="border-rest opacity-5" size="large" onClick={this.handleCancel}>取消</Button>,
		            <Button key="submit" type="primary" size="large"  onClick={this.handleOk}>确定导出</Button>]} >
		            <div className="opacity-5">
		               系统会将当前结果导出为.xlsx文件，您每次最多可导出1000条订单数据。
                       <div id="catchv" className="tc" ref={this.captcha}>
                         <p id="wait" ><Icon type="loading" style={{ fontSize: 24 }} spin /></p>
                       </div>
		            </div>
		         </Modal>
                
            </Layout>

        );
    }
}

export default Index;
