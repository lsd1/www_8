/*
 * @Author: Administrator
 * @Date:   2018-08-08 16:53:27
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-20 17:22:17
 */
import React, { PureComponent, Fragment } from 'react';
import {Slider} from 'antd';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Index.less';

class SilderLine extends PureComponent {

    static propTypes = {
        minValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        maxValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        num: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        small:PropTypes.string
    };
    static defaultProps = {
        minValue: 0,
        maxValue: 0,
        num: 0,
        small:'BTC'
    };
    constructor(props) {
        super(props);
    }
    silderChange=(val)=>{
       const {onChange}=this.props;
       onChange&&onChange(+val);
    }
    render() {
    	const {minValue,maxValue,num,small}=this.props;
        return (
            <Fragment>
               <div className="input_range buy_color login_limit_buy mt-sm">
		            <div className="range" >
		                <div className="progress" style={{width:(num>100?100:num)+'%'}}></div>
		                <div className="path"></div>
		                <i className="point cur"  style={{left:0}} onClick={()=>this.silderChange(0)}></i>
		                <i className={cx('point',{cur:num>24})}  style={{left:'25%'}} onClick={()=>this.silderChange(25)}></i>
		                <i className={cx('point',{cur:num>49})}   style={{left:'50%'}} onClick={()=>this.silderChange(50)}></i>
		                <i className={cx('point',{cur:num>75})}  style={{left:'75%'}} onClick={()=>this.silderChange(75)}></i>
		                <i className={cx('point',{cur:num===100})}   style={{right:0}}  onClick={()=>this.silderChange(100)}></i>
		                <i className="drag_bar"  style={{left:(num>96?96:num)+'%'}}></i>
		                <i className="drag_track"></i>
		            </div>
		            <Slider className="slider" min={0} max={100} value={num} tipFormatter={null}  onChange={this.silderChange}></Slider>
		        </div>
		        <div className="amount_range uppercase clear">
		            <span className="min"><span className="min_num">{minValue}</span>
		            <em>{small}</em> </span>
		            <span className="max"><span className="max_num">{maxValue}</span>
		            <em>{small}</em>
		            </span>
		        </div>
            </Fragment>
        );
    }
}
export default SilderLine;
