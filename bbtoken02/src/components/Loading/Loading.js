/*
 * @Author: Administrator
 * @Date:   2018-09-03 20:46:32
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-03 20:49:17
 */
import React from 'react';
import { Spin } from 'antd';

export default function Loading({height=600,title='加载中...'}){
	return (<div style={{height:height,display: 'flex',justifyContent: 'center',alignItems: 'center'}}><div><Spin size="large" /><p style={{marginLeft:-5}}>{title}</p></div></div>);
}
