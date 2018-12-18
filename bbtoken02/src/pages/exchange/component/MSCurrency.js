/*
 * @Author: Administrator
 * @Date:   2018-08-09 13:36:38
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-11 10:18:12
 */
import React,{PureComponent} from 'react';
import {Link} from 'dva/router';
import { Collapse } from 'antd';
import { connect } from 'dva';
import intl from 'react-intl-universal';


const Panel = Collapse.Panel;


class MSCurrency extends PureComponent {

    constructor(props) {
        super(props);
    }
    render() {
        return (
          <section className="mt-xs">
            <Collapse defaultActiveKey={['1']}>
            <Panel header={<div className="flex-box flex-alignItem"><span className="fz-md">币种资料</span></div>} key="1">
              <div className="panel-info flex-box flex-between">
                <div className="panel-info-left">
                    <h3 className="panel-info-title">ETC</h3>
                    <small className="panel-info-small">以太经典（ETC）</small>
                    <div className="panel-info-desc bt-1 mt-md">
                        <p className="panel-info-intro mt-md">简介</p>
                        <p className="panel-info-cont">ETC（Ethereum Classic）是以太坊在1,920,000个块后硬分叉出的分叉币种，功能和以太坊极为类似。ETC秉承去中心化理念，支持区块链保证的共识机制。ETC坚信，区块链一旦开始运行，
                        它的发展方向就不被任何中心团队所左右，而是按照参与整个网络人员的共识和全网算力的共识所决定。</p>
                    </div>
                </div>
                <div className="panel-info-right flex-item">
                     <div className="panel-info-item flex-box flex-wrap">
                         <label>发行时间</label>
                         <p>2016/1/2</p>
                     </div>
                     <div className="panel-info-item flex-box flex-wrap">
                         <label>发行总量</label>
                         <p>9000.00万</p>
                     </div>
                     <div className="panel-info-item flex-box flex-wrap">
                         <label>流通总量</label>
                         <p>9000.00万</p>
                     </div>
                     <div className="panel-info-item flex-box flex-wrap">
                         <label>众筹价格</label>
                         <p>--</p>
                     </div>
                     <div className="panel-info-item flex-box flex-wrap">
                         <label>白皮书</label>
                         <p>--</p>
                     </div>
                     <div className="panel-info-item flex-box flex-wrap">
                         <label>官网</label>
                         <p><Link className="panel-info-link link" to="www.baidu.com" target="_blank">www.baidu.com</Link></p>
                     </div>
                     <div className="panel-info-item flex-box flex-wrap">
                         <label>区块查询</label>
                         <p><Link className="panel-info-link link" to="www.baidu.com" target="_blank">www.baidu.com</Link></p>
                     </div>
                </div>
               </div>
            </Panel>
          </Collapse>
        </section>
        );
    }
}
export default MSCurrency;
