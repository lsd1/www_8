/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-18 11:02:44
 */
import React, { PureComponent } from 'react';

import Layout from '@/layouts/';
import Context from './../component/Context';



import './../Serve.less';





class Protocol extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentDidMount() {
       

    }
    render() {
    
        return (
            <Layout  className="serve news container" title="商家协议">
                  <article className="container article">
                    <h3 className="headline lin-1 mb-lg">商家协议</h3>
                    <Context />
                 </article>
            </Layout>

        );
    }
}

export default Protocol;
