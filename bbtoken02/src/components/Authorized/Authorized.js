/*
 * @Author: Administrator
 * @Date:   2018-08-24 11:08:08
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-08-24 12:02:28
 */
import React,{Fragment} from 'react';

import { connect } from 'dva';

export default connect(({user  }) => ({
    user
}))((props)=>{
	const {children,replace,user:{isLogin}} =props;
	return (<Fragment>{isLogin?children:replace}</Fragment>);
});

