/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:30:41
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-11-02 13:55:46
 */
import React, { PureComponent,Fragment } from 'react';
import { connect } from 'dva';
import { Link, NavLink,withRouter } from 'dva/router';
import { Menu, Dropdown, Icon,Modal,Button,Select} from 'antd';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {replacePhone} from '@/utils/utils';
import intl from 'react-intl-universal';
import {ThemeContext} from '@/context/theme-context';
import {globalData} from '@/utils/config';
import QRCode from 'qrcode.react';

const Option = Select.Option;


@withRouter
@connect(({user,global}) => ({
    global,user
}))
class Top extends PureComponent {
    static propTypes = {
        content: PropTypes.bool
    };
    static defaultProps = {
        content: false
    };
    constructor(props) {
        super(props);
        this.langData = {
            'zh-CN': intl.get('GLOBAL_zh-CN'),
            'zh-TW': intl.get('GLOBAL_zh-TW'),
            'en-US': intl.get('GLOBAL_en-US')
        };
        this.state={
          QRvisible:false,
          visible:false
        };
    }
    async componentDidMount() {
      const {dispatch}=this.props;
     await  Promise.all([dispatch({
          type:'user/fetchGetLogin'
       }),dispatch({
          type:'user/saveUserInfo'
       })]);
    }

    showModal = (name) => {
      this.setState({
        [name]: true
      });
    }
    handleCancel = (name) => {
      this.setState({
        [name]: false
      });
    }
    handleOk=(name)=>{
      this.setState({
        [name]: false
      });

    }
   
    /**
     * [语言切换]
     * @param  {[type]} lang [description]
     * @return {[type]}      [description]
     */
    langHanlde=(e,currentLocale,langHanlde)=>{
      e.preventDefault();
      langHanlde(currentLocale);
    }
    oddEvent = (match, location) => {
        return location.pathname.includes('exchange');
    }
    /**
     * [退出登录]
     * @return {[type]} [description]
     */
    loginOutHandle=()=>{
      const {dispatch}=this.props;
       dispatch({
          type:'user/loginOut',
          callback(){
              window.location.reload();
          }
       });
    }
    //写入当前地址
    linkWrite=(e)=>{
      //e.preventDefault();
      const {dispatch,history,global:{lang}}=this.props;
      dispatch({
         type:'global/savePathName',
         payload:{
           pathName:history.location.pathname
         }
      });

    }
    bandClock=(e)=>{
      e.preventDefault();

    }

    render() {
  
        const { content,user:{userInfo},global:{lang} } = this.props;

        return (
           <ThemeContext.Consumer>
            {({langs,langHanlde}) => (
            <header className={cx('header','page-pd','flex-box','flex-between',`${content?'header-main':'header-cont'}`)}>
                <nav  className="flex-box flex-alignItem head-left">
                 <h1 className="logo"><Link to={`/${lang}/`}><img  className="logo-img" src={require(`@/assets/images/logo${content?'':'2'}.png`)} alt="" />BDAEX</Link></h1>
                  <ul className="flex-box flex-wrap nav flex-item ml-md">
                   <li className="nav-item"><NavLink isActive={this.oddEvent} className="link  head-link" to={`/${lang}/exchange/MDB/USDT`} >{intl.get('TOP_COIN')}</NavLink></li>
                   <li className="nav-item"><NavLink   className="link  head-link" to={`/${lang}/trade/USDT/1`} >{intl.get('TOP_LEGAL')}</NavLink></li>
                   <li className="nav-item"><NavLink   className="link  head-link" to={`/${lang}/ads/release`} >{intl.get('TOP_RELEASE')}</NavLink></li>
                  </ul>
                </nav>
                 <div  className="flex-box head-right">
                    {!userInfo.username?(
                      <ul className="flex-box flex-alignItem flex-end  header-login">
                       <li className="white pointer mr-lg" onClick={()=>this.showModal('QRvisible')}><Icon type="app" />{intl.get('GLOBAL_DOWN')}</li>
                       <li><NavLink className="link nav-item head-link" exact to={`/${lang}/login`} onClick={this.linkWrite}>{intl.get('GLOBAL_LOGIN')}</NavLink></li>
                       <li><NavLink className="link nav-item head-link" exact to={`/${lang}/register`} onClick={this.linkWrite} >{intl.get('GLOBAL_REGISTER')}</NavLink></li>
                      </ul>
                      ):(
                      <ul className="flex-box flex-alignItem flex-end">
                        <li><NavLink className="link nav-item head-link"  to={`/${lang}/user/account`} ><Icon className="assets-icon" type="dollar" />{intl.get('TOP_ASSETS')}</NavLink></li>
                        <li><NavLink className="link nav-item head-link"  to={`/${lang}/user/order`} ><Icon className="order-icon" type="order2" />{intl.get('TOP_ORDER')}</NavLink></li>
                        <li>
                        <Dropdown 
                          overlay={<Menu>
                                <Menu.Item key="0">
                                   <Link to={`/${lang}/user/userInfo`}>{intl.get('TOP_MY_USER')}</Link>
                                </Menu.Item>
                               
                                <Menu.Item key="2">
                                   <Link to={`/${lang}/user/adv`}>{intl.get('TOP_MY_ORDER')}</Link>
                                </Menu.Item>

                                <Menu.Item key="3" onClick={this.loginOutHandle}>
                                   <p>{intl.get('GLOBAL_LOGIN_OUT')}</p>
                                </Menu.Item>
                          </Menu>}>
                          <span className="link nav-item head-link white ellipsis header-nickName"  >
                              <Icon className="user-icon" type="user2" />{replacePhone(userInfo.username)}<Icon className="ml-sm" type="down" />
                          </span>
                        </Dropdown>
                        </li>
                      </ul>
                      )}

                   
                    <div className="language ml-sm ">
                     
                       <Dropdown overlay={
                              <Menu>
                                <Menu.Item>
                                  <a  rel="noopener noreferrer" onClick={(e)=>this.langHanlde(e,'zh-CN',langHanlde)} href="#">{intl.get('GLOBAL_zh-CN')}</a>
                                </Menu.Item>
                                 <Menu.Item>
                                  <a  rel="noopener noreferrer" onClick={(e)=>this.langHanlde(e,'zh-TW',langHanlde)} href="#">{intl.get('GLOBAL_zh-TW')}</a>
                                </Menu.Item>
                                <Menu.Item>
                                  <a  rel="noopener noreferrer" onClick={(e)=>this.langHanlde(e,'en-US',langHanlde)} href="#">{intl.get('GLOBAL_en-US')}</a>
                                </Menu.Item>
                              </Menu>}>
                          <a className="link head-link flex-between" href="#"  onClick={this.bandClock}>
                            <span>{this.langData[langs]}</span> <Icon type="down" />
                          </a>
                        </Dropdown>
                      
                    </div>
                    
                </div>
                <Modal
                  width={300}
                  title={intl.get('GLOBAL_DOWN')}
                  visible={this.state.QRvisible}
                  onOk={()=>this.handleOk('QRvisible')}
                  onCancel={()=>this.handleCancel('QRvisible')}
                  footer={null}
                >
                  <div className="tc">
                     <QRCode size={200} value={`${globalData.uploadUrl}download.html`}/>
                  </div>
                  
                </Modal>
                <Modal
                  wrapClassName="model"
                  width={500}
                  title={intl.get('TOP_SETTING')}
                  onCancel={()=>this.handleCancel('visible')}
                  visible={this.state.visible}
                  bodyStyle={{border:0}}
                  footer={[
                    <Button key="submit" type="primary" size="large"  onClick={()=>this.handleOk('visible')}>
                       {intl.get('GLOBAL_OK')}
                    </Button>]}
                >
                <Fragment>
                  <div  className="mb-sm opacity-5"><label>{intl.get('TOP_CONVER')}</label></div>
                  <Select defaultValue="CNY" style={{ width: '100%' }}>
                    <Option value="CNY">￥CNY</Option>
                  </Select>
                  </Fragment>
                </Modal>
            </header>
              )} 
            </ThemeContext.Consumer>

        );
    }
}

export default Top;
