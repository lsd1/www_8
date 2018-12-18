
/*
 * @Author: Administrator
 * @Date:   2018-08-08 20:06:37
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-23 10:10:35
 */
import React,{PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Index.less';

class InputDigit extends PureComponent {
    static propTypes = {
        label: PropTypes.string,
        small: PropTypes.string,
        value:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        foot: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        decimal:PropTypes.number
    };
    static defaultProps={
        decimal:2
    }

    
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        };

    }

    changeHandle = (event) => {
        const { onChange,decimal } = this.props;
        const value=event.target.value;
        const len=value.length;
        const num=value.includes('.')?String(value).indexOf(".") + 1:len;
        const decimalValue=decimal<0?10:decimal;
        const reg=new RegExp(`^[0-9]+(.[0-9]{0,${decimalValue}})?$`);
        if ( (value&&reg.test(+value)&&len-num<=decimalValue)||value==='' ) {
            onChange && onChange(value);
        }

    }


    render() {
        const { label, small,defaultValue, foot,className,onChange,...params} = this.props;


        
        return (
            <div className={cx('group',className)}>
               {label&&(<label className="group-label">{label}</label>)} 
              <div className={cx('group-input-box',{'mt-sm':!!label})}>
                 <input className="group-input" {...params} autoComplete="off"  type="text"   defaultValue={defaultValue}     onChange={this.changeHandle} />
                 <i className="group-icon">{small}</i>
              </div>
              {foot&&(<p className="group-small fz-sm">{foot}</p>)}
              
            </div>
        );
    }
}
export default InputDigit;
