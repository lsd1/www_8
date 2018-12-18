/*
 * @Author: Administrator
 * @Date:   2018-09-06 21:50:20
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-12 09:29:12
 */
import React, { Fragment } from 'react';
import { Icon } from 'antd';
import intl from 'react-intl-universal';
export default function PayIcon({ name,small=false}) {
  return  (<Fragment> 
     {name.includes('银联')&&(
        <Fragment>
          <Icon className="payways-icon"  style={{color:'#de9308',fontSize:22}} type="yinhangqia" />
          {small &&<span className="mr-sm fz-sm gray">{intl.get('GLOBAL_BANK')}{intl.get('GLOBAL_PAYMENT')}</span>}
          
        </Fragment>)}
     {name.includes('支付宝')&&(
     	<Fragment>
          <Icon className="payways-icon"  style={{color:'#02a9f1',fontSize:22}} type="zhifubao" />
          {small &&<span className="mr-sm fz-sm gray">{intl.get('GLOBAL_ALIPAY')}{intl.get('GLOBAL_PAYMENT')}</span>}
          
        </Fragment>)}
     {name.includes('微信')&&(
     	<Fragment>
          <Icon className="payways-icon"  style={{color:'#24af41',fontSize:22}} type="weixin-copy" />
          {small &&<span className="mr-sm fz-sm gray">{intl.get('GLOBAL_WECHAT')}{intl.get('GLOBAL_PAYMENT')}</span>}
          
        </Fragment>)}
     
    </Fragment>);
}
