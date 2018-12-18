/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-13 17:24:55
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';




import Layout from '@/layouts/';
import Crumbs from '@/components/Crumbs/Crumbs';



import './../Tools.less';



@connect(({ help,global, loading }) => ({
    global,
    help
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class HelpInfo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
   async componentDidMount() {
        const { dispatch, match: { params } } = this.props;
       await dispatch({ type: 'help/fetchGetHelpList' });
       await dispatch({
                type: 'help/fetchGetHelpInfo',
                payload: {
                    id:params.id
                }
            });

    }
    render() {
         const {help:{helpInfo},global:{lang}}=this.props;
        
         
        
        
        return (

          
                <Layout  className="tools help" title={helpInfo.title&&helpInfo.title}>
                   {helpInfo.title&&<article className="article">
                         <Crumbs title={helpInfo.title} parentName="帮助中心"   link={`/${lang}/tools/help`} />
                         <div className="container">
                            <h2 className="mt-max">{helpInfo.title}</h2>
                            <p className="mt-sm opacity-5">{helpInfo.createTime}</p>
                            <div className="mt-max" dangerouslySetInnerHTML={{__html: helpInfo.content}}> 
                                    
                            </div>
                         </div>
                     </article>}
                      
                </Layout>
        );
    }
}

export default HelpInfo;
