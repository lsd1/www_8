/*
* @Author: syyws
* @Date:   2018-06-06 10:46:26
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-17 15:15:47
*/
import React, { PureComponent,Fragment} from 'react';
import PropTypes from 'prop-types';
import {
    Modal,

    Upload
} from 'antd';
import './index.less';
import cx from 'classnames';

import {globalData} from '../../utils/config';



export default class Index extends PureComponent {
  static propTypes = {
    size:PropTypes.number,
    action:PropTypes.string
  };
  static defaultProps = {
    size:1,
    name:'file',
    action:`${globalData.url}/uc/upload/oss/image`,
    listType:'picture-card',
    accept: "image/jpg,image/jpeg,image/png",
    headers:{
      'x-auth-token':`${localStorage.getItem('TOKEN')}`
    }
    
  };

  state={
  	previewImage:'',
  	previewVisible:false
  }

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  }

  handleCancel = () => this.setState({ previewVisible: false })

  render() {

  	const {size,fileList,className,children,...param} =this.props;
  	const {previewImage,previewVisible}=this.state;
  	 const uploadButton = (
	      <div className={cx('btn-upload',className)}>
	        {children}
	      </div>
	    );
    return (
    	<Fragment>
        <Upload {...param} fileList={fileList}  className="upload-list" onPreview={this.handlePreview}>
		     {fileList.length>=size?null:uploadButton}
    		</Upload>
    		<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
		</Fragment>
    );
  }
}
