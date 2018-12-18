/*
 * @Author: Administrator
 * @Date:   2018-08-15 15:53:55
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-15 18:14:43
 */
import React, { PureComponent } from 'react';

import intl from 'react-intl-universal';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { message,Popover} from 'antd';
import QRCode from 'qrcode.react';
class Rush extends PureComponent {

    constructor(props) {
            super(props);
        }
        /**
         * [copyHanlde 复制文本回调]
         * @param  {[type]} text   [文本]
         * @param  {[boolean]} result [是否复制成功]
         * @return {[type]}        [description]
         */
    copyHanlde = (text, result) => {
        if (result) {
            message.destroy();
            message.success(intl.get('GLOBAL_COPY_OK'));
        }
    }
    render() {
        const { item } = this.props;
        return (
            <div className="account-rush">
                <span className="account-triangle" style={{left:item.left}}></span>
                <span className="name opacity-5">{intl.get('PROPERTY_FILLING')}</span>
                <div className="flex-box flex-between mt-md">
                  <p>{item.address}</p>
                  {item.address&&<p>
                  <CopyToClipboard text={item.address}  onCopy={this.copyHanlde}>
                    <span className="yellow mr-md pointer">{intl.get('GLOBAL_COPY')}</span>
                  </CopyToClipboard>
                  <Popover placement="top" content={<QRCode size={100} value={item.address}/>}>
                    <span className="yellow pointer">{intl.get('PROPERTY_EWM')}</span>
                  </Popover>
                  </p>}
                </div>
                
                <p className="opacity-5 mt-md">{intl.get('GLOBAL_WAEM')}</p>
                <div className="opacity-5">
                  <p>• {intl.get('PROPERTY_DESC4')}</p>
                  <p>• {intl.get('PROPERTY_DESC5')}</p>
                  <p>• {intl.get('PROPERTY_DESC6')}</p>
                  <p>• {intl.get('PROPERTY_DESC7')}</p>
                  <p>• {intl.get('PROPERTY_DESC8')}</p>
                </div>
             </div>
        );
    }
}
export default Rush;
