/*
 * @Author: syyws
 * @Date:   2017-10-12 10:03:14
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-11-02 15:54:01
 */

import React, { Component } from "react";
import { connect } from 'dva';

import { Switch, withRouter, Redirect } from 'dva/router';
import Top from '@/layouts/Top';
import Foot from '@/layouts/Foot';
import cx from 'classnames';
import intl from 'react-intl-universal';
import { PrivateRoute,PrivateDefaultRoute } from 'oAuth';
import { routeList } from './routers/router';
import { hot } from 'react-hot-loader';
import cookie from 'js-cookie';
import { ThemeContext } from '@/context/theme-context';
import qs from 'qs';

@hot(module)
@withRouter
@connect(({ global }) => ({
    global
}))
class App extends Component {
    constructor(props) {
        super(props);
        
        /**
         * [content语言切换]
         * @param  {[type]} lang [description]
         * @return {[type]}      [description]
         */
        this.langHanlde = (currentLocale) => {
            const { history } = this.props;

          
            this.setState({
                 footInitDone:false
            });
            this.server(currentLocale,()=>{
              this.setState(state => ({
                      footInitDone:true,
                      languages:{
                        ...state.languages,
                        initDone:true,
                        langs:currentLocale
                      }
                    }));
            });
            const historyArr = history.location.pathname.split('/');
            historyArr.splice(1, 1, currentLocale);
            history.push(historyArr.join('/'));
             
        };
        this.state = {
            footInitDone:false,
            initDone: false,
            langTo: null,
            languages:{
              langs:cookie.get('lang') || 'en-US',
              langHanlde : this.langHanlde
            }
           
        };
        

    }

    componentDidMount() {
            this.loadLocales();
            const { history,location } = this.props;
            //兼容老版本项目重定向到注册页面
             if(location.hash.includes('agent')){
                const param=qs.parse(location.hash.split('?')[1]);
               history.push(`/${cookie.get('lang') || 'en-US'}/register/${param.agent}`);
             }
             
    }
    server(currentLocale,callback){
      const {dispatch}=this.props;
      const langList=['zh-CN','zh-TW','en-US'];
      const lang=langList.includes(currentLocale)?currentLocale:'en-US';
       dispatch({
                type: 'global/fetchGetLang',
                payload: {
                    currentLocale: lang
                },
                callback: (data) => {
                    intl.init({
                        currentLocale:lang,
                        locales: {
                            [lang]: data
                        }
                    });
                    cookie.set('lang', lang);
                    callback();
                }
            });

    }
        /**
         * [loadLocales 语言切换]
         * @return {[type]} [description]
         */
    loadLocales() {
        const pathname = location.pathname.split("/");
        let currentLocale = '';
        let lang = cookie.get('lang');
        if (pathname.length >= 2 && pathname[1].length > 0) {
            currentLocale = pathname[1];
            
        } else if (lang) {
            currentLocale = intl.determineLocale({
                cookieLocaleKey: "lang"
            });
        } else {
            cookie.set('lang', ['zh-CN', 'zh-TW','en-US'].includes(currentLocale) ? currentLocale : 'en-US');
        }
        this.server(currentLocale,()=>{
           this.setState({ initDone: true,footInitDone:true, langTo: lang });
        });

    }
    render() {
        const { langTo, initDone,languages,footInitDone } = this.state;
        const { global: { lang, config: { black, white, content, footMarginTop } } } = this.props;
        return (
            <ThemeContext.Provider value={languages}>
            {initDone &&
            <div className={cx('pages', {'bg-1':black,'bg-2':white })}>
                <Top content={content}/> 
                <div className="main"> 
                      <Switch>
                       {
                            routeList.map((item, index) => {
                                return item.isLogin ? ( <PrivateRoute lang={lang} key={index} {...item}
                                    />):(<PrivateDefaultRoute lang={lang} key={index}  {...item} /> );
                            })
                        } 
                        <Redirect from="/" to={`/${langTo?langTo:lang}/`}  />

                </Switch> 
                </div> 
              {footInitDone&& <Foot footMarginTop={footMarginTop} />} 
            </div>
          }
        </ThemeContext.Provider>
        );
    }
}

export default App;
