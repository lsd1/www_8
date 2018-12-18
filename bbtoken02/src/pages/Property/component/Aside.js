

/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-12 00:45:59
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';

import intl from 'react-intl-universal';

import { NavLink } from 'dva/router';




@connect(({ user,global, loading }) => ({
    global,
    user
}))
class Account extends PureComponent {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
       

    }
    render() {
      const {global:{lang}}=this.props;
        return (
           <aside className="aside box">
               <NavLink className="aside-item" to={`/${lang}/user/account`} activeClassName="active" ><span>{intl.get('PROPERTY_TRAN')}</span></NavLink>
               <NavLink className="aside-item" to={`/${lang}/user/record`} activeClassName="active" ><span>{intl.get('PROPERTY_FINANCIAL')}</span></NavLink>
           </aside>
        );
    }
}

export default Account;
