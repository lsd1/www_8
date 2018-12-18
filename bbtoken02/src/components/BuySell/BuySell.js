/*
* @Author: Administrator
* @Date:   2018-09-07 17:02:22
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-11 18:37:16
*/
import React from 'react';
import cx from 'classnames';
import intl from 'react-intl-universal';
export default function BuySell(props){
   return  (<em className={cx(`${props.text==='SELL'?'red':'green'}`)}>{props.text==='SELL'?intl.get('RELEASEADS_SELL_SET'):intl.get('RELEASEADS_BUY_ON')}</em>);
}