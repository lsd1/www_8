/*
 * @Author: Administrator
 * @Date:   2018-08-24 10:56:45
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-23 15:24:21
 */
import React, { PureComponent, Fragment } from 'react';
import { Collapse } from 'antd';
import { withRouter } from 'dva/router';
import  'bizcharts/lib/core';
import Chart from 'bizcharts/lib/components/Chart';
import Axis from 'bizcharts/lib/components/Axis';
import Tooltip from 'bizcharts/lib/components/Tooltip';
import Line from 'bizcharts/lib/components/TypedGeom/Line';
import Area from 'bizcharts/lib/components/TypedGeom/Area';
import DataSet from '@antv/data-set';
import dayjs from 'dayjs';
import intl from 'react-intl-universal';
import BuySell from '@/components/BuySell/BuySell';
import {toFixed} from '@/utils/utils';

const Panel = Collapse.Panel;

@withRouter
class Entrust extends PureComponent {
    constructor(props) {
        super(props);
        this.refDepth = React.createRef();
        this.state = {
            depthWidth: 0
        };
    }
    componentDidMount() {
        this.setState({
            depthWidth: this.refDepth.current.offsetWidth
        });
    }
    render() {
        const { LatestTradeData, depthList,ticks, match: { params } } = this.props;
        const { depthWidth } = this.state;
       
        const ds = new DataSet();
          const dv = ds.createView().source(depthList);
          dv.transform({
            type: 'map',
            callback: function callback(row) {
              row.range = [row.SELL, row.BUY];
              return row;
            }
          });
          dv.transform({
            type: 'fold',
            fields: ['SELL', 'BUY'],
            // 展开字段集
            key: 'type',
            // key字段
            value: 'value' // value字段
          });

          
          const scale = {
            price: {
              type: 'linear',
              alias: '委托价',
              ticks:ticks
            },
            range: {
              type: 'linear',
              alias: '数量'
            },
            value: {
              type: 'linear',
              alias: '数量',
              min: 0
            }
          };
          
        return (
            <Fragment>
           <section className="mt-sm flex-box flex-between">
                  <div className="panel-left ">
                     <Collapse defaultActiveKey={['1']} >
                        <Panel header={<div className="flex-box flex-alignItem"><span className="fz-md">{intl.get('EXCHANGE_DEPTH')}</span></div>} key="1">
                          <div className="panel-buy panel-deal panel-depth-map flex-box flex-between" ref={this.refDepth} >
                           <Chart width={depthWidth} height={400} data={dv} scale={scale} padding={[20,55,50,20]} forceFit>
                              <Axis 
                                name="value" 
                                visible={false} 
                                grid={null}
                                position="right" 
                                line={{stroke:'#474955', lineWidth: 2}}
                                tickLine={{lineWidth: 1,stroke: '#ccc',strokeOpacity:0.5,length:5,alignWithLabel:true}}  />
                              <Tooltip showTitle={false}  itemTpl={`<li data-index={index}><p>委托价:{title}</p>数量:{value}</li>`}/>
                              <Area shape="smooth" position="price*value" color={['type', ['#cf5754', '#06c7b7']]} opacity={1}  tooltip={false} />
                              <Line shape="smooth" position="price*value" color={['type', ['#cf5754', '#06c7b7']]} size={1} />
                            </Chart>

                          </div>
                        </Panel>
                    </Collapse>
                  </div>
                  <div className="panel-right flex-item ml-sm">
                     <Collapse defaultActiveKey={['1']} >
                        <Panel   header={<div className="flex-box flex-alignItem"><span className="fz-md">{intl.get('EXCHANGE_REAL_TIME')}</span></div>} key="1">
                          <div className="panel-buy">
                            <dl className="panel-price panel-time">
                              <dt className="panel-price-dt flex-box flex-wrap">
                                 <span className="panel-price-item to">{intl.get('RELEASEADS_NUM')}({params.name})</span>
                                 <span className="panel-price-item to">{intl.get('EXCHANGE_PRICE')}({params.small})</span>
                                 <span className="panel-price-item">{intl.get('EXCHANGE_DIRECTION')}</span>
                                 <span className="panel-price-item">{intl.get('EXCHANGE_TIME')}</span>
                              </dt>
                              {LatestTradeData.map((item,index)=>{
                              return (
                                <dd key={index} className="panel-price-dd flex-box flex-wrap">
                                 <span className="panel-price-item to">{toFixed(item.amount,4)}</span>
                                 <span className="panel-price-item to">{item.price}</span>
                                 <span className="panel-price-item">
                                    <BuySell text={item.direction} />
                                 </span>
                                 <span className="panel-price-item">{dayjs(item.time).format('HH:mm:ss')}</span>
                              </dd>);
                              })}
                            </dl>
                          </div>
                        </Panel>
                    </Collapse>
                  </div>
                </section>
            </Fragment>
        );
    }
}
export default Entrust;
