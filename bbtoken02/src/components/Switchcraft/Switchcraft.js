/*
 * @Author: Administrator
 * @Date:   2018-08-22 13:47:03
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-11 18:39:06
 */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './Switchcraft.less';
import intl from 'react-intl-universal';
class Switchcraft extends React.Component {
    static propTypes = {
        visible:PropTypes.bool
    };
    static defaultProps = {
        visible:null
    };
    constructor(props) {
        super(props);
        this.state={
        	status:true
        };
    }
    switchHandle=(visible)=>{
    	const {onClick}=this.props;
    	this.setState({
    		status:visible
    	});
    	onClick && onClick(visible);
    }
    render() {
        const {visible}=this.props;
    	const {status}=this.state;
        const active=visible===null?status:visible;
    
        return (
             <span className="flex-box-inline flex-box-center switchcraft" >
               <em className={cx('flex-item item',{active:active})} onClick={()=>this.switchHandle(true)}>{intl.get('GLOBAL_OPEN')}</em>
               <em className={cx('flex-item item',{active:!active})} onClick={()=>this.switchHandle(false)}>{intl.get('GLOBAL_CLOSE')}</em>
             </span>
        );
    }
}
export default Switchcraft;
