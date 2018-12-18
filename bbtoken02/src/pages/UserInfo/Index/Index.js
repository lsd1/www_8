/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-17 15:21:07
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import intl from 'react-intl-universal';
import { Icon}  from 'antd';


import Layout from '@/layouts/';
import Aside from '../component/Aside';
import Box from '../component/Box';




import './../UserInfo.less';
import './Index.less';



@connect(({ user,global, loading }) => ({
    user,
    global
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {

    }

  

    render() {
      const {user:{userSetting,userInfo} ,global:{lang}}=this.props;
        return (
            <Layout white className="user userInfo container">
                 <article className="article flex-box flex-between">
                    <Aside />
                   <section className="content">
                       
                        <Box title={intl.get('USERINFO_SAFETY')} className="mt-sm">
                            <dl className="userInfo-safety">
                               <dd className=" flex-box flex-between">
                                   <p className="flex-item">{intl.get('USER_MAILBOX')}</p>
                                   <p className="flex-item mid">{userSetting.email?intl.get('USERINFO_THEN_BIND'):intl.get('USERINFO_NO_BIND')} </p>
                                   <p className="flex-item tr ellipsis">{userSetting.email?userSetting.email:(<Link  className="yellow" to={`/${lang}/user/safety`}>{intl.get('USERINFO_GO_BIND')}</Link>)}</p>
                               </dd>
                               <dd className=" flex-box flex-between">
                                   <p className="flex-item">{intl.get('GLOBAL_PHONE')}</p>
                                   <p className="flex-item  mid">{userSetting.mobilePhone?intl.get('USERINFO_THEN_BIND'):intl.get('USERINFO_NO_BIND')} </p>
                                   <p className="flex-item tr">{userSetting.mobilePhone?userSetting.mobilePhone:(<Link  className="yellow" to={`/${lang}/user/safety`}>{intl.get('USERINFO_GO_BIND')}</Link>)} </p>
                               </dd>
                               <dd className=" flex-box flex-between">
                                   <p className="flex-item">{intl.get('USER_LOGIN_PAD')}</p>
                                   <p className="flex-item  mid">******</p>
                                   <p className="flex-item tr"><Link className="yellow" to={`/${lang}/user/editPwd`}>{intl.get('USERADV_EDIT')}</Link></p>
                               </dd>
                               <dd className=" flex-box flex-between">
                                   <p className="flex-item">{intl.get('USER_LOGIN')}IP</p>
                                   <p className="flex-item  mid">{userSetting.ip}</p>
                                   <p className="flex-item tr"></p>
                               </dd>
                            </dl>
                        </Box>
                        <Box title={intl.get('USERINFO_IDENTITY_AUTHENTICATION')} className="mt-lg">
                            <dl className="userInfo-safety">
                               <dd className=" flex-box flex-between">
                                   <p className="flex-item">{intl.get('TRADE_REAL')}</p>
                                   <p className="flex-item mid">{userSetting.idCard?`${userSetting.realName}，${userSetting.idCard}`:null}</p>
                                   <p className="flex-item tr">{userSetting.idCard?userInfo.username:(<Link  className="yellow" to={`/${lang}/user/safety`}>{intl.get('USERINFO_THEN_APPROVE')}</Link>)} </p>
                               </dd>
                               <dd className=" flex-box flex-between">
                                   <p className="flex-item">{intl.get('USERINFO_BUSI_AUTHENTICATION')}</p>
                                   <p className="flex-item  mid"> {userSetting.level===2?intl.get('USERINFO_THEN_BIND'):''}</p>
                                   <p className="flex-item tr"> <Link className="yellow" to={`/${lang}/ads/release`}>{userSetting.level===2?intl.get('TOP_RELEASE'):intl.get('USERINFO_THEN_APPROVE')}</Link></p>
                               </dd>
                            </dl>
                        </Box>
                   </section>
                 </article>
            </Layout>

        );
    }
}

export default Index;
