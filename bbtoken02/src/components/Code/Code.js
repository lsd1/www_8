/*
 * @Author: Administrator
 * @Date:   2018-08-21 15:12:23
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-11 18:37:48
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {Button} from 'antd';
import intl from 'react-intl-universal';

import './Code.less';

class Code extends PureComponent {
    static propTypes = {
        name: PropTypes.string,
        delay: PropTypes.number,  //时间
        onClick:PropTypes.func, //可以返回 promise
        trigger:PropTypes.bool  //true才触发倒计时
    };
    static defaultProps={
    	trigger:false,
    	delay:60,
    	name:intl.get('GLOBAL_CODE_BTN')
    }
    
    constructor(props) {
        super(props);
        this.time=null;
        this.state={
            status:false,
            codeMes:0
        };
    }
    componentWillUnmount() {
      clearInterval(this.time);
    }
    timeCode(){
    	const {delay,name}=this.props;
    	this.time = setInterval(() => {
	            this.setState((prevState) => {
	                const mes =prevState.codeMes === 1 ? (clearInterval(this.time), name) :prevState.codeMes===0 ?(delay - 1):(prevState.codeMes-1);
	                return { codeMes: mes===name?0:mes,status:typeof mes==='number' };
	            });
          }, 1e3);
    }
   
    
    /**
     * [点击回调]
     * @return {[type]} [description]
     */
    codeHandle=()=> {

       const {onClick}=this.props;
        clearInterval(this.time);
       if(onClick){
       	  	onClick().then((status=true)=>{
               if(status){this.timeCode();}
            });
       }
    }
    render() {
    	const {codeMes,status}=this.state;
        const { className, name } = this.props;
        return (
            <Button className={cx('yellow pointer btn-code',className)} disabled={status} onClick={this.codeHandle}>{codeMes==0?name:codeMes}</Button>
        );
    }
}
export default Code;
