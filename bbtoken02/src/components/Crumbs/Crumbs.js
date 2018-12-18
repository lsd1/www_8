/*
* @Author: Administrator
* @Date:   2018-08-23 10:34:22
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-23 14:18:54
*/
import React from 'react';
import { Link } from 'dva/router';
import './Crumbs.less';
export default function Crumbs(props){

	return (<div className="crumbs flex-box flex-alignItem">
                       <p className="container">
                          <span className="yellow"><Link className="yellow" to={props.link}>{props.parentName}</Link><em className="main-pd">></em></span>
                          <span>{props.title} </span>
                       </p>
                     </div>);
}