import React from "react";
import { Route,Redirect } from 'react-router-dom';
import cookie from 'js-cookie';
import pathToRegexp from 'path-to-regexp';
export const hasLogin = () => {
    return cookie.get("userInfo");
};
const requireAuth = (nextState, replace) => {  // eslint-disable-line
    if (!hasLogin()) {
        replace({
            pathname: '/login'
        });
    }
};

export const PrivateRoute = ({ component: Component,lang, ...rest }) => {
    return (

        <Route {...rest}
          render={
            props => (!hasLogin() ? ( <Redirect to={
                    {
                        pathname: `/${lang}/login`,
                        state: {
                            from: props.location
                        }
                    }
                }
                />
            ) : (<Component {...props}/>))
        }
        />
    );

};
//判断是否是登录，注册，重置
export const PrivateDefaultRoute  = ({ component: Component,lang, ...rest }) => {
    let routeList=['/:lang/register', '/:lang/register/:agent','/:lang/resetPwd'];
    const findIndex =routeList.findIndex((item) => pathToRegexp(item).exec(rest.location.pathname));
    return (
          <Route {...rest}
            render={
                props => ((findIndex>-1&&!!hasLogin()) ? ( <Redirect to={
                        {
                            pathname: `/${lang}/exchange/${Cookies.get('exist_symbol')}`,
                            state: {
                                from: props.location
                            }
                        }
                    }
                    />
                ) : (<Component {...props}/>))
            }
        />
    );

};
