/*
 * @Author: Administrator
 * @Date:   2018-08-20 17:53:01
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-08-22 14:20:17
 */
import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Box extends PureComponent {
    static propTypes = {
        name:PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        suffix:PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    };
    constructor(props) {
        super(props);
    }
    render() {
    	const {className,title,suffix,children}=this.props;
        return (
            <div className={cx('box',className)}>
              {title&&(<div className="box-title flex-box flex-alignItem flex-between">
                 <h5 className="fz-xs">{title}</h5>
                 <div >
                   {suffix&&suffix}
                 </div>
              </div>)}
               {children} 
            </div>
        );
    }
}
export default Box;


