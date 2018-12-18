/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-15 16:10:18
 */
import React, { PureComponent } from 'react';

import { Link } from 'dva/router';

import {Table}  from 'antd';


import Layout from '@/layouts/';



import './../Serve.less';





class Rate extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
       

    }
    pageHandle=(page, pageSize)=>{
       

    }

    render() {




        const dataSource = [{
          key: '1',
          name: 'BTC/USDT',
          suspend: '0.2%',
          eat: '0.2%'
        }, {
          key: '2',
          name: 'ETH/USDT',
          suspend: '0.2%',
          eat: '0.2%'
        }, {
          key: '3',
          name: 'LTC/USDT',
          suspend: '0.2%',
          eat: '0.2%'
        }, {
          key: '4',
          name: 'BCH/BTC',
          suspend: '0.2%',
          eat: '0.2%'
        }, {
          key: '5',
          name: 'BCH/ETH',
          suspend: '0.2%',
          eat: '0.2%'
        }, {
          key: '6',
          name: 'ETH/BTC',
          suspend: '0.2%',
          eat: '0.2%'
        }, {
          key: '7',
          name: 'LTC/BTC',
          suspend: '0.2%',
          eat: '0.2%'
        }, {
          key: '8',
          name: 'LTC/ETH',
          suspend: '0.2%',
          eat: '0.2%'
        }];

        const columns = [{
          title: '交易对',
          dataIndex: 'name',
          key: 'name'
        }, {
          title: '挂单',
          dataIndex: 'suspend',
          key: 'suspend'
        }, {
          title: '吃单',
          dataIndex: 'eat',
          key: 'eat'
        }];
           
        const dataSource2 = [{
          key: '1',
          name: 'BTC',
          min: 0.01,
          max: 0.1,
          dayMin: 0.1,
          fee:'0.001- 0.001'
        },{
          key: '2',
          name: 'BCH',
          min: 0.01,
          max: 0.6,
          dayMin: 0.6,
          fee:'0.0001'
        },{
          key: '3',
          name: 'ETH',
          min:  0.015,
          max: 2.5 ,
          dayMin: 2.5,
          fee:'0.01'
        },{
          key: '4',
          name: 'LTC',
          min: 0.1,
          max: 5,
          dayMin: 5,
          fee:'0.001'
        }, {
          key: '5',
          name: 'USDT',
          min: 200,
          max: '1,500',
          dayMin: '1,500',
          fee:'10'
        }];
     
  

    

        const dataSource3 = [{
          key: '1',
          name: 'BTC',
          min: 0.01,
          max: 200,
          dayMin: 200,
          fee:'0.001- 0.001'
        },{
          key: '2',
          name: 'BCH',
          min: 0.1,
          max: 200,
          dayMin: 200,
          fee:'0.0001'
        },{
          key: '3',
          name: 'ETH',
          min:  0.015,
          max: '2,000',
          dayMin: '2,000',
          fee:'0.01'
        },{
          key: '4',
          name: 'LTC',
          min: 0.1,
          max: '5,000',
          dayMin: '5,000',
          fee:'0.001'
        }, {
          key: '5',
          name: 'USDT',
          min: 200,
          max: '600,000',
          dayMin: '600,000',
          fee:'10'
        }];
     
  

        const columns3 = [{
          title: '已认证用户',
          dataIndex: 'name',
          key: 'name'
        }, {
          title: '单次最小(不包括手续费)',
          dataIndex: 'min',
          key: 'min'
        }, {
          title: '单次最大',
          dataIndex: 'max',
          key: 'max'
        }, {
          title: '单日最小',
          dataIndex: 'dayMin',
          key: 'dayMin'
        } ,{
          title: '单笔手续费',
          dataIndex: 'fee',
          key: 'fee'
        }];


    
        return (
            <Layout  className="serve news container" title="费率">
                  <article className="container article">
                    <h3 className="headline lin-1">费率</h3>
                    <p className="fz-md mt-md mb-md">交易手续费</p>
                    <Table dataSource={dataSource} columns={columns} pagination={{hideOnSinglePage:true}} />
                    <p className="fz-md mt-md mb-md">提示</p>
                    <p className="opacity-5"> 1、挂单是你所下的限价单并未与当前挂单成交，并被放在买卖盘中等待成交的摆单，它增加了买卖盘的流动性。</p>
                    <p className="opacity-5">2、当其他人的摆单主动与你所下的摆单成交，你将支付挂单交易手续费（请注意当其他人的限价单与你的限价单成交，而下单时间又早于你时，你将支付吃单费）。</p>
                    <p className="opacity-5">3、吃单是你所下的限价单或市价单与当前的挂单直接成交。</p>
                    <p className="opacity-5">4、当你所下的摆单主动与其他人的摆单成交，你将支付吃单交易手续费。</p>
                    <p className="opacity-5 mb-md">5、交易手续费将从您的成交总额中扣除。若成交后获得比特币资产，则支付比特币交易手续费。</p>
                    <p className="fz-md mt-md mb-md">提币限额&提币手续费</p>
       
                     <Table dataSource={dataSource3} columns={columns3} pagination={{hideOnSinglePage:true}} />
                 </article>
            </Layout>

        );
    }
}

export default Rate;
