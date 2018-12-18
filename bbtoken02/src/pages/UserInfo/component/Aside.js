/*
 * @Author: Administrator
 * @Date:   2018-08-20 17:07:20
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-13 14:08:12
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { NavLink, withRouter } from 'dva/router';
import { Icon } from 'antd';
import intl from 'react-intl-universal';
@withRouter
@connect(({ user,global }) => ({
    global,
    user
}))
class Aside extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            list: [{
                key: 1,
                name: intl.get('USERINFO_MY_CODE'),
                url: '/user/invite',
                icon: 'invite',
                iconSize: 18
            }, {
                key: 2,
                name:intl.get('USERINFO_SECURITY'),
                url: '/user/safety',
                icon: 'safety',
                iconSize: 18
            }, {
                key: 3,
                name: intl.get('USERINFO_AUTHENTICATION'),
                url: '/user/identity',
                icon: 'Identity',
                iconSize: 20
            }, {
                key: 4,
                name: intl.get('USERINFO_SETTINGS'),
                url: '/user/setting',
                icon: 'user-setting',
                iconSize: 20
            }, {
                key: 5,
                name: intl.get('USERINFO_PASSWORD'),
                url: '/user/editPwd',
                icon: 'editpwd',
                iconSize: 20
            }, {
                key: 6,
                name: intl.get('USERINFO_EXIT_LOGIN'),
                url: '',
                icon: 'exits',
                iconSize: 20
            }]
        };
    }
    componentDidMount() {

        //根据路由判断是否加载设置
        const { dispatch } = this.props;
        dispatch({
                type: 'user/fetchGetUserSetting'
         });
    }

    clickHandle = (e, key) => {
        const { dispatch} = this.props;

        if (key === 6) {
            e.preventDefault();
            dispatch({
                type: 'user/loginOut',
                callback() {
                    window.location.reload();
                }
            });
        }

    }
    render() {
        const { list } = this.state;
        const { user: { userInfo },global:{lang} } = this.props;
        return (
            <aside className="aside">
              <div className="top flex-box">
                 <div className="avatar">H</div>
                 <div className="ml-sm flex-item">
                    <p className="fz-xs lin-1">{userInfo.username}</p>
                    <p className="mt-sm lin-1">UID: {userInfo.promotionCode}</p>
                 </div>
              </div>
              <ul className="list">
                {list.map(item=>{
                    return (
                        <li className="item" key={item.name} >
                          <NavLink exact className=" flex-box flex-alignItem" to={`/${lang}${item.url}`} onClick={(e)=>this.clickHandle(e,item.key)}>
                            <Icon style={{fontSize:item.iconSize}} className="mr-sm weight" type={item.icon}  />
                              <span className="item-name">{item.name}</span>
                           </NavLink>
                        </li>);
                })}
              </ul>
           </aside>
        );
    }
}
export default Aside;
