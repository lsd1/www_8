/*
 * @Author: Administrator
 * @Date:   2018-08-06 17:35:38
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-14 15:16:07
 */
import  React,{ PureComponent } from 'react';
import {withRouter } from 'dva/router';
import { connect } from 'dva';
import DocumentTitle  from 'react-document-title';
import PropTypes from 'prop-types';



@withRouter
@connect(({ global }) => ({
    global
}))
class Index extends PureComponent {
    static propTypes = {
        content: PropTypes.bool,
        black:PropTypes.bool,
        white:PropTypes.bool,
        footMarginTop:PropTypes.number
    };
    static defaultProps = {
        content: false,
        black:false,
        white:false
    };
    componentDidMount(){
        //获取页面布局信息
        const {dispatch,content,black,white,footMarginTop}=this.props;
        dispatch({
            type:'global/add',
            payload:{
                config:{
                    content,
                    black,
                    white,
                    footMarginTop
                }
            }
        });
    }
    componentWillUnmount() {
        //绑定上级页面地址
        const {dispatch,match:{url}} =this.props;
        dispatch({
            type:'global/add',
            payload:{
                url
            }
        });
    }
    

    render() {
        const {children,className,title}=this.props;
        return (<DocumentTitle title={title ||'BDAEX'}><div className={className}>{children}</div></DocumentTitle>);
    }
}
export default Index;
