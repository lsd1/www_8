/*
 * @Author: Administrator
 * @Date:   2018-08-20 09:55:44
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-08-21 09:44:42
 */
import React from 'react';
import {Popover,Icon} from 'antd';

import './Index.less';


export default  function SerachList(props) {
    const {children,placeholder, ...param}=props;
    return (<Popover placement="bottomRight"   trigger="click" {...param}>
                 <div className="mt-sm">
                      <div className="search-wrap flex-box flex-alignItem">
                         {children?children:(<div className="search-placeholder">{placeholder}</div>)}
                         <Icon  className="search-icon fz-md weight" type="sslb" />
                      </div>
                 </div>
             </Popover>);
}

