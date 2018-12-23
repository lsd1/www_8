/*
 * @Author: Administrator
 * @Date:   2018-09-05 17:15:00
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-10-26 17:24:55
 */
import React,{Fragment} from 'react';
import { Icon,  Popover } from 'antd';
import intl from 'react-intl-universal';
export default function PayManner({payInfo}){

	return (
		<Fragment>
		    {/**银行卡 **/}
                {payInfo.bankInfo&&<div className="flex-box  flex-alignItem">
                  <Icon type="yinhangqia" style={{color:'#de9308',fontSize:22}} />
                  <span className="label opacity-5">{intl.get('GLOBAL_BANK')}</span>
                  {payInfo.realName}  {payInfo.bankInfo.cardNo}{payInfo.bankInfo.bank} {payInfo.bankInfo.branch}
                </div>}
                 {/**支付宝 **/}
                {payInfo.alipay&&
                   <div className="flex-box  flex-alignItem mt-md">
                      <Icon type="zhifubao" style={{color:'#02a9f1',fontSize:22}} />
                        <span className="label opacity-5">{intl.get('GLOBAL_ALIPAY')}</span>
                        {payInfo.realName}  {payInfo.alipay.aliNo}  ({intl.get('GLOBAL_ALIPAY')})  
                        <Popover placement="bottomLeft"  content={<div><img style={{width:210,height:210}} src={payInfo.alipay.qrCodeUrl} alt="" /></div>} trigger="click">
                      <span className="ml-sm pointer"><img style={{width:16,height:16}} src={payInfo.alipay.qrCodeUrl} alt="" /></span>
                    </Popover>
                  </div>
                }
                {/**微信 **/}
              {/* {payInfo.wechatPay&&
                 <div className="flex-box  flex-alignItem mt-md">
                    <Icon type="zhifubao" style={{color:'#24af41',fontSize:22}} />
                      <span className="label opacity-5">{intl.get('GLOBAL_WECHAT')}</span>
                      {payInfo.realName}  {payInfo.wechatPay.aliNo}  ({intl.get('GLOBAL_WECHAT')})  
                      <Popover placement="bottomLeft"  content={<div><img style={{width:210,height:210}} src={payInfo.wechatPay.qrCodeUrl} alt="" /></div>} trigger="click">
                    <span className="ml-sm pointer"><img style={{width:16,height:16}} src={payInfo.wechatPay.qrCodeUrl} alt="" /></span>
                  </Popover>
                </div>
              } */}

              {/**飞马钱包 **/}
              {payInfo.fmpay&&
                 <div className="flex-box  flex-alignItem mt-md">
                    <Icon type="fm" style={{color:'#24af41',fontSize:22}} />
                      <span className="label opacity-5">{intl.get('GLOBAL_FM')}</span>
                      {payInfo.realName}  {payInfo.fmpay.fmNo}  ({intl.get('GLOBAL_FM')})  
                      <Popover placement="bottomLeft"  content={<div><img style={{width:210,height:210}} src={payInfo.fmpay.qrFmUrl} alt="" /></div>} trigger="click">
                    <span className="ml-sm pointer"><img style={{width:16,height:16}} src={payInfo.fmpay.qrFmUrl} alt="" /></span>
                  </Popover>
                </div>
              }

		</Fragment>);

}

