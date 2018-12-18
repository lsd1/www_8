/*
 * @Author: Administrator
 * @Date:   2018-09-06 22:09:11
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-25 21:26:27
 */
import React, { Fragment } from 'react';
import { formatNumber, toFixed } from '@/utils/utils';
import intl from 'react-intl-universal';
export default function Details({item}) {
    return (<Fragment> 
     <div className="shop-left  item business">
      <div className="avatar ">{item.memberName.charAt(0)}</div>
       <div className="ml-md">
        <span className="link name weight" >{item.memberName}</span>
        <p>{intl.get('RELEASEADS_NUM')}  {formatNumber(toFixed(item.remainAmount,4))} {item.unit}</p>
      </div>
     </div>
     <div className="shop-midd">
        <p className="green">{formatNumber(item.price)} CNY</p>
        <p>{formatNumber(item.minLimit)} - {formatNumber(item.maxLimit)} CNY</p>
     </div>
     
    </Fragment>);
}
