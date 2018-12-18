/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-19 13:33:09
 */
import React, { PureComponent,Fragment } from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router';
import {Icon,Checkbox,Button,Modal,Form,message,Input,Select,Col,Row,Alert} from 'antd';
import UploadImg from '@/components/UploadImg/';
import intl from 'react-intl-universal';
import Layout from '@/layouts/';
import {numbers} from '@/utils/regular';
import {fileUpload} from '@/utils/utils';
import Context from '@/pages/Serve/component/Context';




import './Release.less';

const FormItem = Form.Item;
const Option=Select.Option;


const CreateForm = Form.create()(props => {
    const { form, handleEdit,businessList,handleCancelData } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            handleEdit(fieldsValue);
        });
    };
    const coinSymbolhandle=(value,{props})=>{
       form.setFieldsValue({
        amount: businessList[props.index].amount
      });

    };
    const  normFile  =  (e) => {
       return fileUpload(e,()=>{
           message.error(intl.get('GLOBAL_IMG_VAILD'));
       },()=>{
           message.error(intl.get('GLOBAL_IMG_SIZE'));
       });
    };

    return (
      <Fragment>
        <div className="pd-25">
           <p className="red">{intl.get('RELEASE_TITLE')}</p>
            <FormItem  label={intl.get('GLOBAL_PHONE')} colon={false} >
                {form.getFieldDecorator('telno', {
                    rules: [{ required: true, message: intl.get('GLOBAL_PHONE_EMPTY') },{
                     pattern:numbers, message: intl.get('GLOBAL_PHONE_ERR')
                    }]
                })(
                  <Input size="large" />
                )}
          </FormItem>
          
          <FormItem  label={intl.get('GLOBAL_WECHAT')} colon={false} >
                {form.getFieldDecorator('wechat', {
                  rules: [{ required: true, message: intl.get('GLOBAL_WECHAT_EMPTY') }]
                })(
                  <Input size="large" />
                )}
          </FormItem>
          <FormItem  label="QQ" colon={false} >
                {form.getFieldDecorator('qq', {
                  rules: [{ required: true, message: intl.get('GLOBAL_QQ_EMPTY') },{
                     pattern:numbers, message: intl.get('GLOBAL_QQ_ERR')
                  }]
                })(
                  <Input size="large" />
                )}
          </FormItem>
          <Row>
               <Col span={11}>

                 <FormItem label={intl.get('RELEASE_COIN')} colon={false} >
                     {form.getFieldDecorator('coinSymbol', {
                        initialValue:businessList.length>0?businessList[0].coin.unit:null,
                        rules: [{ required: true, message: intl.get('RELEASE_COIN_EMPTY') }]
                      })(<Select size="large" style={{width:'100%'}} onChange={coinSymbolhandle}>
                         {businessList.map((item,index)=>{
                          return (<Option key={item.createTime} index={index} value={item.coin.unit}>{item.coin.unit}</Option>);
                         })}
                      </Select>)}
                </FormItem>
                </Col>
                <Col span={11} offset={2}>
                <FormItem label={intl.get('RELEASE_NUM')} colon={false}>
                 {form.getFieldDecorator('amount', {
                        initialValue:businessList.length>0?businessList[0].amount:null,
                        rules: [{ required: true, message: intl.get('RELEASE_NUM_EMPTY') }]
                      })(
                        <Input size="large" type="text" disabled />
                         )}
                </FormItem>
                </Col>
          </Row>
          <FormItem >
             <div className="flex-box flex-between flex-wrap mt-md">
                 <FormItem>
                     {form.getFieldDecorator('assetData', {
                        initialValue:'',
                        valuePropName: 'fileList',
                        getValueFromEvent:normFile,
                        rules: [{ required: true, message:intl.get('RELEASE_ASSET_EMPTY')}]
                      })(<UploadImg className="card-icon card-icon-upload flex-box flex-box-center">
                                {intl.get('RELEASE_ASSET')}
                         </UploadImg> )}
                </FormItem>
                <FormItem>
                 {form.getFieldDecorator('tradeData', {
                        initialValue:'',
                        valuePropName: 'fileList',
                        getValueFromEvent:normFile,
                        rules: [{ required: true, message:intl.get('RELEASE_DEAL_EMPTY') }]
                      })(<UploadImg className="card-icon card-icon-upload  flex-box flex-box-center">
                                {intl.get('RELEASE_DEAl')}
                         </UploadImg>
                         )}
                </FormItem>
              </div>
          </FormItem>
          
        </div>
        <div className="bt-gray mt-md pb-sm pt-sm  tr">
           <div className="pd-25">
              <Button key="back" className="border-rest opacity-5" size="large" onClick={handleCancelData}>{intl.get('GLOBAL_CANCEL')}</Button>
              <Button className="pd-25" key="submit" type="primary" size="large"  onClick={handleSubmit} >{intl.get('GLOBAL_OK')}</Button>
           </div>
        </div>
        </Fragment>
        
    );
});



@Form.create()
@connect(({user,business,global, loading }) => ({
  global,
    user,
    business,
    loading: loading.effects['business/fetchGetBusinessList']
}))
class Release extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tempText:'',
            protocolVisible:false,
            visibleData:false,
            visible:false
        };
    }
    componentDidMount() {
      const {dispatch,user:{isLogin}}=this.props;
      if(isLogin){
        Promise.all([dispatch({
          type:'business/fetchBusinessStatus'
        },dispatch({
                type: 'user/fetchGetUserSetting'
         }),dispatch({
          type:'business/fetchGetBusinessList',
          callback:(data)=>{
             const tempText=data.reduce((prev,curr,index)=>{
                  return `${prev}${curr.amount}个${curr.coin.unit}${index===0&&data.length===index?'':intl.get('RELEASE_OR')}`;
             },'');
             this.setState({
                  tempText
             });
          }
        }))]);
      }
    }
    /**
     * [商家认证]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    showModal = (e) => {
        const { form,history,user:{isLogin,userSetting},global:{lang}} = this.props;
        e.preventDefault();

        form.validateFields(['approve'],(err, fieldsValue) => {
          if(!fieldsValue.approve){
            message.error(intl.get('RELEASE_PROMPT'));
            return;
          }
          if(isLogin){
            //判断是否实名和绑定手机
             if (userSetting.realVerified !== 1) {
                    message.error(intl.get('GLOBAL_AUTONYME'));
                    history.push(`/${lang}/user/identity`);
                } else if (!userSetting.mobilePhone || userSetting.realVerified !== 1) {
                    message.error(intl.get('TRADE_BIND_PHONE'));
                    history.push(`/${lang}/user/safety`);
                }else{
                   this.setState({
                      visible: true
                    });
                }
          }else{
              message.error(intl.get('GLOBAL_LOGIN_ERR'));
          }
        });
    }

    handleCancel = (e) => {
        this.setState({
            visible: false
        });
    }
    
    /**
     * [商家认证步骤]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    applyHanlde=(e)=>{
       const { form } = this.props;
        e.preventDefault();
        form.validateFields(['freeze'],(err, fieldsValue) => {
          if(!fieldsValue.freeze){
            message.error(intl.get('RELEASE_FREEZE'));
            return;
          }
          this.setState({visible:false,visibleData:true});
        });
       

    }
    /**
     * [商家认证资料提交]
     * @return {[type]} [description]
     */
    handleOk=(fieldsValue)=>{
       const {dispatch,business:{businessList} } = this.props;
        const assetData=fieldsValue.assetData.length>0?fieldsValue.assetData[0].response.data:null;
        const tradeData=fieldsValue.tradeData.length>0?fieldsValue.tradeData[0].response.data:null;
        const findData=businessList.find(item=>item.coin.unit===fieldsValue.coinSymbol);
        dispatch({
           type:'business/saveBusinessList',
           payload:{
             businessAuthDepositId:findData.id,
             json:JSON.stringify({...fieldsValue,assetData,tradeData})
           },
           callback:()=>{
              this.setState({
                  visibleData: false
              });
           }
        });
    }
    handleCancelData = (e) => {
        this.setState({
            visibleData: false
        });
    }
    /**
     * [发布广告]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    releaseHandle=(e)=>{
       const {user:{userSetting},global:{lang},history}=this.props;
       if(userSetting.accountVerified!==1){
         message.error(intl.get('GLOBAL_BIND_PAY'));
       }else{
         history.push(`/${lang}/ads/releaseAds`);
       }


    }
    showProtocol=(stauts)=>{
      const { form } = this.props;
       this.setState({
          protocolVisible:!this.state.protocolVisible
       });
       if(stauts===1){
            form.setFieldsValue({
                approve:true
            });
        

       }
    }
    /**
     * [关闭协议]
     * @param  {[type]} e [description]
     * @return {[type]}   [description]
     */
    protocolcancelHandle=(e)=>{
      this.setState({
          protocolVisible:false
      });
    }
    
    render() {
        const {visible,tempText,visibleData,protocolVisible}=this.state;
        const {form,business:{businessList,businessStatus},global:{lang} }=this.props;
        const parentMethods = {
            businessList,
            handleEdit: this.handleOk,
            handleCancelData: this.handleCancelData
        };

        return (
            <Layout  className="business release" title={intl.get('TOP_RELEASE')}>
               <article className="container article">
                   {businessStatus.certifiedBusinessStatus===3 && (
                             <div className="pd-25 mt-md">
                              <Alert
                                message={intl.get('RELEASE_FOR_ERR')}
                                description={businessStatus.detail&&`${intl.get('USERINFO_REJECT_REASON')} ${businessStatus.detail}`}
                                type="error"
                                closable
                              />
                             </div>
                        )}
                        <h6 className="title tc">{businessStatus.certifiedBusinessStatus!==2?intl.get('RELEASE_APPLY_FOR'):intl.get('RELEASE_NAME')}</h6>
                        {businessStatus.certifiedBusinessStatus!==2&&<p className="small opacity-5 tc">{intl.get('RELEASE_DESC1')}</p>}
                    
                     
                     <div className="release-box flex-box flex-between">
                        <div className="release-item">
                             <div className="release-icon flex-box flex-box-center">
                               <Icon type="laba" />
                             </div>
                             <p className="release-item-tit lin-1 tc">{intl.get('RELEASE_NAME')}</p>
                             <p className="release-item-desc lin-1 tc">{intl.get('RELEASE_DESC2')}</p>
                        </div>
                        <div className="release-item">
                             <div className="release-icon flex-box flex-box-center">
                                <Icon type="zhuanshi" />
                             </div>
                             <p className="release-item-tit lin-1 tc">{intl.get('RELEASE_DESC3')}</p>
                             <p className="release-item-desc lin-1 tc">{intl.get('RELEASE_DESC4')}</p>
                        </div>
                        <div className="release-item">
                              <div className="release-icon flex-box flex-box-center">
                                 <Icon type="kefu" />
                              </div>
                              <p className="release-item-tit lin-1 tc">{intl.get('RELEASE_DESC5')}</p>
                              <p className="release-item-desc lin-1 tc">{intl.get('RELEASE_DESC6')}</p>
                        </div>
                     </div>
                     {businessStatus.certifiedBusinessStatus===2?
                      <Button className="release-btn mt-lg" type="primary" onClick={this.releaseHandle}><span className="blue">{intl.get('TOP_RELEASE')}</span></Button>
                      :(
                      <Form onSubmit={this.showModal}>
                       <div className="tc release-protocol">
                           {form.getFieldDecorator('approve',{
                                valuePropName: 'checked'
                            })(
                             <Checkbox><span>{intl.get('RELEASE_DESC7')}</span></Checkbox>
                           )}<span className="yellow pointer" onClick={this.showProtocol}>{intl.get('RELEASE_DESC8')}</span>
                       </div>
                     <Button className="release-btn" type="primary" htmlType="submit" disabled={businessStatus.certifiedBusinessStatus===1}><span className="blue">{businessStatus.certifiedBusinessStatus===1?intl.get('RELEASE_STAY'):intl.get('RELEASE_ONCE')}</span></Button>
                     </Form>
                      )}
                      <Modal width="62.5%" bodyStyle={{padding:0}} visible={protocolVisible} footer={null}  onCancel={this.protocolcancelHandle} >
                         <div className="protocol-box">
                            <h4 className="protocol-tit">认证商家协议</h4>
                            <div className="protocol-cont  mt-md bt-gray">
                              <div className="protocol-desc">
                                   <Context />
                              </div>
                            </div>
                            <Button className="protocol-btn mt-lg" type="primary" size="large" onClick={()=>this.showProtocol(1)}><span className="blue">我已阅读并同意该协议</span></Button>
                         </div>
                      </Modal>
                     
                     <Modal
                       wrapClassName="model release-model"
                       width={500}
                       title={intl.get('RELEASE_DESC9')}
                       visible={visible} 
                       onCancel={this.handleCancel} 
                       maskClosable={false}
                       footer={null} >
                       <div className="pd-25">
                           <p className="mt-md mb-sm">{intl.get('RELEASE_STEP_ONE')}</p>
                           <p className="opacity-5">{intl.get('RELEASE_STEP_1')}</p>
                           <p className="opacity-5">{intl.get('RELEASE_STEP_DESC1')}</p>
                           <p className="mt-md mb-sm">{intl.get('RELEASE_STEP_TWO')}</p>
                           <p className="opacity-5">{intl.get('RELEASE_STEP_DESC2')}</p>
                           <p className="mt-md mb-sm">{intl.get('RELEASE_STEP_THREE')}</p>
                           <p className="opacity-5">{intl.get('RELEASE_STEP_DESC3')}</p>

                       </div>
                          <div className="pb-sm pt-sm  mt-md  bt-gray ">
                          <Form onSubmit={this.applyHanlde} className="flex-box flex-between flex-alignItem">
                             <p className="red pointer pl-lg">
                               {form.getFieldDecorator('freeze')(
                                  <Checkbox><span>{intl.get('RELEASE_FREEZE_DESC',{tempText:tempText})}</span></Checkbox>
                               )}
                             </p>
                             <div className="pd-25">
                                <Button className="pd-25" key="submit" type="primary" size="large"  htmlType="submit">{intl.get('RELEASE_FREEZE_OK')}</Button>
                             </div>
                           </Form>  
                          </div>
                         </Modal>
                         <Modal
                           wrapClassName="model release-model"
                           width={500}
                           title={intl.get('RELEASE_OK_DATA')}
                           visible={visibleData} 
                           onCancel={this.handleCancelData} 
                           maskClosable={false}
                           footer={null} >
                             <CreateForm  {...parentMethods} />
                         </Modal>
                 </article>
                  
            </Layout>

        );
    }
}

export default Release;
