/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:30:49
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-20 18:16:04
 */
import React, { PureComponent } from 'react';
import intl from 'react-intl-universal';
import { Link } from 'dva/router';
import { connect} from 'dva';
import {Popover} from 'antd';
@connect(({global}) => ({
    global
}))
class Foot extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
           data:[{
              name:intl.get('FOOT_COMY'),
              list:[
              // {
              //   link:'/contact-us',
              //   name:intl.get('FOOT_CONTACT_US')
              // },
              {
                link:'/about-us',
                name:intl.get('FOOT_ABOUT_US')
              },{
                link:'/notice',
                name:intl.get('FOOT_NOTICE')
              }]
           },{
              name:intl.get('FOOT_TOOLS'),
              list:[
              // {
              //   link:'/',
              //   name:'客户端下载'
              // },
              {
                link:'/tools/help',
                name:intl.get('FOOT_HELP')
              }
              // {
              //   link:'/',
              //   name:'API文档'
              // },
              // {
              //   link:'/tools/digiccy/1',
              //   name:intl.get('FOOT_DIGICCY')
              // }
              ]
           },
           // {
           //    name:intl.get('FOOT_SERVER'),
           //    list:[{
           //      link:'/serve/news',
           //      name:intl.get('FOOT_NEWS')
           //    }
           //    // ,{
           //    //   link:'/',
           //    //   name:'BB Token生态'
           //    // },{
           //    //   link:'/',
           //    //   name:'BB Token资本'
           //    // }
           //    ]
           // },
           {
              name:intl.get('FOOT_EXPLIAIN'),
              list:[{
                link:'/explain/Terms',
                name:intl.get('TOP_COIN')
              },{
                link:'/explain/releaseRule',
                name:intl.get('FOOT_RELEASE_RULE')
              },{
                link:'/explain/tradingRule',
                name:intl.get('FOOT_TRANDING_RULE')
              },
              {
                link:'/explain/protocol',
                name:intl.get('FOOT_PROTOCOL')
              },{
                link:'/explain/rate',
                name:intl.get('FOOT_RATE')
              }]
           }]
        };
    }
    render() {
      const {data}=this.state;
      const {footMarginTop,global:{lang}}=this.props;
        return (
            <footer className="footer flex-box flex-between page-pd" style={{marginTop:footMarginTop}}>
               <div className="footer-left">
                  <h5 className="footer-title">EXBB</h5>
                  <p className="footer-small mt-md">{intl.get('FOOT_DESC')}</p>
                  <div className="footer-icon-item mt-sm">
                    <Popover content={<div style={{width:100,height:100}}><img src={require('@/assets/images/wchat.jpg')} /></div>} placement="top">
                        <img className="pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABbUlEQVR42sXWz0vCYBzH8a+VQRdneSgjLBAMSsHykrFD0LFLsXUQlIK8VNJhEOVSt//c3ocF8uV59uMgHV5jbGOfPb++z2S5XKZx4GKEADOEmGAIF7sQm7QXe1ggzhDBg5M34BRTxAWF6GQFXCFCDBQWoW8LaFtfXjykrQMchIiVOcZ4xABBge5yVgM89cACt9iBrCihidccIf5fQBWRauIZJEUZTzm6qiocXHXjAZJ4wQ0kEeASggpmGSGucBiqiy1I4kDN72PU0ME5BmrstKEYBq4OsWiih21IYhNdfBoCAjE08wJiUMcJxKKGLz0LTQHvKEOULiTxhn0IxjiEwDUEGOf2QIeoMrBlOT8yddEIsUEDVVRUC9K0TIPsWlbiPRYrK/pDfa1WwrOepmqhZfIsIRu4sy00gY84pwn6aCR62MO3LhX2YlfcD6a62K21XK9zw7n+ly1Tc+DnbE0E37bpF/1tmScCjPL8tvwCnY5gExnwNVcAAAAASUVORK5CYII=" />
                     </Popover>
                     <Popover content={<div style={{width:100,height:100}}><img src={require('@/assets/images/QQ.jpg')} /></div>} placement="top" >
                        <img className="pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABRklEQVR42sWWzUvDQBDFVdCbbAuCJz9ugk3Ri1glBw9WPUgPbY7ptaL0lKpo6If/eXwDWyhL3ky3IB5+EHZm30smk9lsVVWl0QQpGIICTEEJxiD3saamwQIODMAC/BgsfK5b1+AMfFNBTgnalkHHvGv7aW6YQWKIz8HYMzdMktDAgVIRfgT7y03++kExKoFbNRgo4i2lS84Vk2xp0FBKcy9JBndKqRqSkJKEL7C3hsEu+CQaqSTkJNgLhDSeiUYuwYIELyMMLohGIcEpCZ5GGJwQjRkzeAM7EQbbsqfOgJXomopxOqxEw5rA8QYGR3UvmbXpFehHtGlP9pA2DT60+E5KrA9NyGoSniLK0+Wjgg+7F3AYCB0IwZrkjPiws8f1B3gFk5W1iV97Z+P6Lw+c2385MkMcyCIO/Ywd+rG/LTNP4dfM35Zft2xSLLwACIUAAAAASUVORK5CYII=" />
                      </Popover>
                      <a target="_blank" href="http://share.newbiyong.com/index.html?url=http://sh//://share.telebox88.com/exbbcommunity?channel=guanwang ">
                        <img className="pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADOUlEQVRIS61WTWgcZRh+nm+6JqlGDASEFKqnXqxFvRT1IiqiHrSlEhShElvY7G72Z0IFCwq5qPSSndlNdnbBNGigh1SxLfRgwXqxLagotCWoPRU0EWls1Uo2pjOPTDa7bNbdZKru8Xufn/3en+8dIsIvn598yBizA+B2QHfVKFo0xv84nU7PbyTBTsF8fvoeY6opCQdJ3N8BJwBngwDv2nbibDtMWwPX9d4EdBjg3REuuAbRmS1btC+VSt1s5qwzqFQqsWo1+BDAy9GF1yHngsA8bdvxhfppw2B2dtZaWFg8BeD5fylep31LrjyayWSWw4OGgeN4JRKJ/yheK780lcslDzYMXNfbCeDS/yFe1zDG7Eqn45dWb+A4pU9I7rl9Ay0D/AjAVgB7W/gns9nEHo6Pj/cY03ODxB1RDSR9ZQynu7rMsXg8/ls+X37FGB1r5kv4q6fH9NF1yy8COrGZuIRfAMwYw6OZzPCc45T3Wxbm0unhrx3HGydht2oEgfay1vN4r4PBiqTTAKYHBvpPDw4O+hMTE/f5vilLOJrLJY/XUux9QeLxNhqH6TjeJIlkS/CKBO/WLTNz6FD8WhgL23h+/tooQFviPtsevhCej42Nmb6+e6sAYq0GEkp03VIBYHrd9BHJ3t7u6aGhoZCItbdoRkIfoKdyueT3dXyh4D0s4Zv2GdDkBinSssRzpK5KeA3AxVhMz6VSqZ+bxRzHi5MotzOQ9DYdp/QCyZObFdmy/P6RkZHFVpzrelMAXu/A389KpbJ1aSm4vlGbhi2XyyW6whd227Y7/wiLXRd0nNJlkg+0Mwj/VMRB07xlBY/5vvWZpF9J82o2O3ylNkPdN0maNgZfZrOJ3asGxWLlwSAILnZKk6QlgH+S6F/DVCW8AfB3Uh+044UzYNvJE02PXel9kgc2q0W0uM5ns8nVuWgYFAqFriCInSfxSDSRjvf9IUxnvSHWLZxisTjg+9aZTkWLYDzn+3hmdDTxUx37j5V55MhUb3f38izAZyMINiASPo3Fgpc2XJnNgvm896QxegvgE82pbDGVhM8lvHNbS79ZJEybZA0GAXeQ2i5RpH4EzHfGrBzf7LPlb/zNUOFM31CwAAAAAElFTkSuQmCC" />
                      </a>
                   </div>
                   <p className="copyright">Copyright © 2017 - &nbsp;&nbsp;EXBB.IO</p>
               </div>
               <div className="footer-right flex-box flex-end">
                  {data.map(data=>{
               return ( <dl className="footer-list" key={data.name}>
                           <dt className="footer-list-title mb-md">{data.name}</dt>
                           {data.list.map(item=>{
                            return (<dd className="footer-list-item" key={item.name}>
                              <Link className="link" to={`/${lang}${item.link}`} >{item.name}</Link>
                           </dd>);
                           })}
                        </dl>);
                  })}
               </div>
            </footer>
        );
    }
}
export default Foot;
