/*
 * @Author: Administrator
 * @Date:   2018-08-06 10:33:17
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-12 17:16:54
 */
import React, { PureComponent } from 'react';
import { connect } from 'dva';



import Layout from '@/layouts/';

import intl from 'react-intl-universal';

import './../About.less';


@connect(({ user, loading }) => ({
    user
    // loading: loading.effects['home/fetchGetThumbTrend']
}))
class AboutUs extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {

    }
    render() {

        return (
            <Layout  className="about aboutUs" title={intl.get('FOOT_COMY')}>
              <img className="about-img" src={require('@/assets/images/about.jpg')} alt="" />
                 <article className="container article">
                    <h3 className="headline lin-1 mb-lg">关于 BDAEX</h3>
                    <p className="opacity-5">BDAEX.全球领先的区块链资产交易 平台。聚合全球优质区块链资产，为全球用户提供优质 的区块链项目投资机会，以及更加安全、便捷的区块链 资产兑换服务。拥有最专业的区块链技术应用开发团队， 平台采用GSLB、分布式服务器集群、分布式存储、多机 互备的高速内存交易引擎、冷钱包、私钥离线化的热钱 包等先进的技术，建立世界顶级的安全风控体系，打造 金融级别的专业区块链资产交易平台；同时，我们以PC 端、手机端等多终端为客户提供安全、稳定、便捷的数 字资产交易服务，并会根据客户的建议和需求，不断改 进和升级产品和服务。</p>
                    <p className="fz-md mt-md mb-md">我们的使命</p>
                    <p className="opacity-5">在全球区块连技术革命浪潮下，硬币数字资产交易平台以推动全球金融改革为使命，致力于发现优质的区块链数字资产，为个人提供更多、更优的数字资产投资机会，打造全球顶尖的数字资产交易平台。</p>
                    <p className="opacity-5">我们信仰比特币和区块链的核心思想，认为分布式账本和智能合约技术将构建人类的信任基础，消除交易壁垒，提升交易效率，对人类的实体经济产生重大的影响。因此我们放全力投入到区块链技术革命的大潮，希望可做一点点改变世界的事情。</p>
                    <p className="fz-md mt-md mb-md">我们的核心理念</p>
                    <p className="opacity-5">诚信 开放 互利 创新</p>
                    <p className="fz-md mt-md mb-md">敬告您：</p>
                    <p className="opacity-5">1 您了解本网站仅作为您获取数字资产信息、寻找交易方、就数字资产的交易进行协商及开展交易的场所，本网站不参与您的任何交易，故您应自行谨慎判断确定相关数字资产及/或信息的真实性、合法性和有效性，并自行承担因此产生的责任与损失。</p>
                    <p className="opacity-5">2 本网站的任何意见、消息、探讨、分析、价格、建议和其他资讯均是一般的市场评论，并不构成投资建议。我们不承担任何因依赖该资讯直接或间接而产生的损失，包括但不限于任何利润损失。</p>
                    <p className="opacity-5">3 本网站的内容会随时更改并不作另行通知，我们已采取合理措施确保网站资讯的准确性，但并不能保证其准确性程度，亦不会承担任何因本网站上的资讯或因未能链结互联网、传送或接收任何通知和信息时的延误或失败而直接或间接产生的损失。</p>
                    <p className="opacity-5">4 使用互联网形式的交易系统亦存有风险，包括但不限于软件，硬件和互联网链结的失败等。由于我们不能控制互联网的可靠性和可用性，我们不会对失真，延误和链结失败而承担任何责任。</p>
                    <p className="opacity-5">5 https://www.bdaex.io为本网站唯一官方对外信息公布平台；</p>
                    <p className="opacity-5">6 本网站任何服务均不接受信用卡支付；</p>
                    <p className="opacity-5">7 禁止使用本网站从事洗钱、走私、商业贿赂等一切非法交易活动，若发现此类事件，本站将采取各种可使用之手段，包括但不限于冻结账户，通知相关权力机关等，我们不承担由此产生的所有责任并保留向相关人士追究责任的权利。</p>
                    <p className="opacity-5">8 禁止使用本网站进行恶意操纵市场、不正当交易等一切不道德交易活动，若发现此类事件，本网站将对所有恶意操纵价格、恶意影响交易系统等不道德的行为采取警告、限制交易、关停账户等预防性地保护措施，我们不承担由此产生的所有责任并保留向相关人士追究责任的权利。</p>
                 </article>
            </Layout>

        );
    }
}

export default AboutUs;
