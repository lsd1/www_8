/*
 * @Author: Administrator
 * @Date:   2018-08-14 10:47:19
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-09-18 11:17:07
 */
import React,{PureComponent} from 'react';
import {Modal,Button} from 'antd';
import PropTypes from 'prop-types';
class Protocol extends PureComponent {
    static propTypes = {
        visible: PropTypes.bool
    };
    static defaultProps={
    	visible:false
    }
    static getDerivedStateFromProps(nextProps) {
        return {stauts:nextProps.visible};
    }
    constructor(props) {
        super(props);
        this.state={
        	content:`
<div data-v-643022ad="" style="white-space: normal; text-indent: 2em; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
        本协议是您与服务提供商EXBB之间就使用任何由EXBB网站（http://www.exbb.io）以及EXBB相关公司提供的服务时，所达成的权力义务关系的协议。请确认您已阅读、理解，并接受所有本文包含的条款以及纳入通用数据保护条例（GDPR）的隐私政策。 由于此协议具有法律约束力，请在使用我们的服务前仔细阅读。注册访问和使用EXBB，表示您已同意本协议中所有条款。如有异议，请您保持账户锁定状态（针对现有用户）并停止使用EXBB。为了本协议表述之方便，公司和该网站在本协议中合称使用“我们”或其他第一人称称呼。只要登陆该网站的自然人或其他主体均为本网站的用户，本协议表述之便利，以下使用“您”或其他第二人称。为了本协议表述之便利，我们和您在本协议中合称为“双方”，我们或您单称为“一方”。
    </div>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">重要提示：</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<p data-v-643022ad="" style="white-space: normal; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-size: 14px; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    我们在此特别提醒您：
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p>
            1 数字资产本身不由任何金融机构或公司或本网站发行；
        </p>
    </li>
    <li>
        <p>
            2 数字资产市场是全新的、未经确认的，而且可能不会增长；
        </p>
    </li>
    <li>
        <p>
            3 数字资产主要由投机者大量使用，零售和商业市场使用相对较少，数字资产交易存在极高风险，其全天不间断交易，没有涨跌限制，价格容易受庄家、全球政府政策的影响而大幅波动；
        </p>
    </li>
    <li>
        <p>
            4 因各国法律、法规和规范性文件的制定或者修改，数字资产交易随时可能被暂停或被禁止。
        </p>
    </li>
</ul>
<p data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; text-indent: 2em; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-size: 14px; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    数字资产交易有极高风险，并不适合绝大部分人士。您了解和理解此投资有可能导致部分损失或全部损失，所以您应该以能承受的损失程度来决定投资的金额。您了解和理解数字资产会产生衍生风险，所以如有任何疑问，建议先寻求理财顾问的协助。此外，除了上述提及过的风险以外，还会有未能预测的风险存在。您应慎重考虑并用清晰的判断能力去评估自己的财政状况及上述各项风险而作出任何买卖数字资产的决定，并承担由此产生的全部损失，我们对此不承担任何责任。
</p>
<p data-v-643022ad="" style="white-space: normal; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-size: 14px; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    敬告您：
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p>
            1 您了解本网站仅作为您获取数字资产信息、寻找交易方、就数字资产的交易进行协商及开展交易的场所，本网站不参与您的任何交易，故您应自行谨慎判断确定相关数字资产及/或信息的真实性、合法性和有效性，并自行承担因此产生的责任与损失。
        </p>
    </li>
    <li>
        <p>
            2 本网站的任何意见、消息、探讨、分析、价格、建议和其他资讯均是一般的市场评论，并不构成投资建议。我们不承担任何因依赖该资讯直接或间接而产生的损失，包括但不限于任何利润损失。
        </p>
    </li>
    <li>
        <p>
            3 本网站的内容会随时更改并不作另行通知，我们已采取合理措施确保网站资讯的准确性，但并不能保证其准确性程度，亦不会承担任何因本网站上的资讯或因未能链结互联网、传送或接收任何通知和信息时的延误或失败而直接或间接产生的损失。
        </p>
    </li>
    <li>
        <p>
            4 使用互联网形式的交易系统亦存有风险，包括但不限于软件，硬件和互联网链结的失败等。由于我们不能控制互联网的可靠性和可用性，我们不会对失真，延误和链结失败而承担任何责任。
        </p>
    </li>
    <li>
        <p>
            5 http://www.exbb.io 为本网站唯一官方对外信息公布平台；
        </p>
    </li>
    <li>
        <p>
            6 本网站任何服务均不接受信用卡支付；
        </p>
    </li>
    <li>
        <p>
            7 禁止使用本网站从事洗钱、走私、商业贿赂等一切非法交易活动，若发现此类事件，本站将采取各种可使用之手段，包括但不限于冻结账户，通知相关权力机关等，我们不承担由此产生的所有责任并保留向相关人士追究责任的权利。
        </p>
    </li>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">一、总则</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p>
            1.1 《用户协议》（以下称“本协议”或“本条款及条件”），由正文、《隐私条款》、《了解你的客户和反洗钱政策》以及本网站已经发布的或将来可能发布的各类规则、声明、说明等构成。
        </p>
    </li>
    <li>
        <p>
            1.2 您在使用本网站提供的各项服务之前，应仔细阅读本协议，如有不理解之处或其他必要，请咨询专业律师。如您不同意本协议及/或随时对其的修改，请您立即停止使用本网站提供的服务或不再登陆本网站。您一旦登陆本网站、使用本网站的任何服务或任何其他类似行为即表示您已了解并完全同意本协议各项内容，包括本网站对本协议随时所做的任何修改。
        </p>
    </li>
    <li>
        <p>
            1.3 您通过按照本网站的要求填写相关信息，并经过其他相关程序后成功注册可以成为本网站的会员（以下称“会员”），在进行注册过程中点击“同意”按钮即表示您以电子签署的形式与公司达成协议；或您在使用本网站过程中点击任何标有“同意”或类似意思的按钮的行为或以其他本网站允许的方式实际使用本网站提供的服务时，均表示您完全了解、同意且接受本协议项下的全部条款的约束，无您手写的书面签字就本协议对您的法律约束力无任何影响。
        </p>
    </li>
    <li>
        <p>
            1.4 您成为本网站的会员后，您将获得一个会员帐号及相应的密码，该会员帐号和密码由会员负责保管；会员应当对以其您帐号进行的所有活动和事件负法律责任。
        </p>
    </li>
    <li>
        <p>
            1.5 只有成为本网站的会员才可使用本网站提供的数字资产交易平台进行交易及享受其他本网站规定的只有会员才可获得的服务；会员外的其他您只有登陆网站、浏览网站及其他本网站规定的可获得的服务。
        </p>
    </li>
    <li>
        <p data-v-643022ad="">
            1.6 通过注册和使用任何由本网站提供的服务和功能，您将被视为已阅读，理解并：
        </p>
    </li>
    <ul data-v-643022ad="" class="indent list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                1.6.1 接受本协议所有条款及条件的约束。
            </p>
        </li>
        <li>
            <p>
                1.6.2 您确认您已年满16周岁或根据不同的可适用的法律规定的具有可订立合同的法定年龄，并有充分的能力接受这些条款，并订立交易，使用本网站进行数字资产交易。
            </p>
        </li>
        <li>
            <p>
                1.6.3 您保证交易中涉及到的属于您的数字资产均为合法取得并所有。
            </p>
        </li>
        <li>
            <p>
                1.6.4 您同意您为您自身的交易或非交易行为承担全部责任和任何收益或亏损。
            </p>
        </li>
        <li>
            <p>
                1.6.5 您确认注册时提供的信息是真实和准确的。
            </p>
        </li>
        <li>
            <p>
                1.6.6 您同意遵守任何有关法律的规定，就税务目的而言，包括报告任何交易利润。
            </p>
        </li>
        <li>
            <p>
                1.6.7 本协议只是就您与我们之间达成的权利义务关系进行约束，而并不涉及本网站用户之间与其他网站和您之间因数字资产交易而产生的法律关系及法律纠纷。
            </p>
        </li>
    </ul>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">二、协议修订</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<div data-v-643022ad="" style="white-space: normal; text-indent: 2em; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    我们保留不时修订本协议、并以网站公示的方式进行公告、不再单独通知您的权利，变更后的协议会在本协议首页标注变更时间，一经在网站公布，立即自动生效。您应不时浏览及关注本协议的更新变更时间及更新内容，如您不同意相关变更，应当立即停止使用本网站服务；您继续使用本网站服务，即表示您接受并同意经修订的协议的约束。
</div>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">三、注册</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p>
            3.1 注册资格
        </p>
    </li>
    <li>
        <p>
            您确认并承诺：在您完成注册程序或以其他本网站允许的方式实际使用本网站提供的服务时，您应当是具备可适用的法律规定的可签署本协议及使用本网站服务应具有的能力的自然人、法人或其他组织。您一旦点击同意注册按钮，即表示您自身或您的有权代理人已经同意该协议内容并由其代理注册及使用本网站服务。若您不具备前述主体资格，则您及您的有权代理人应承担因此而导致的一切后果，且公司保留注销或永久冻结您账户，并向您及您的有权代理人追究责任的权利。
        </p>
    </li>
    <li>
        <p>
            3.2 注册目的
        </p>
    </li>
    <li>
        <p>
            您确认并承诺：您进行本网站注册并非出于违反法律法规或破坏本网站数字资产交易秩序的目的。
        </p>
    </li>
    <li>
        <p data-v-643022ad="">
            3.3注册流程
        </p>
    </li>
    <ul data-v-643022ad="" class="indent list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                3.3.1 您同意根据本网站用户注册页面的要求提供有效电子邮箱、手机号码等信息，您可以使用您提供或确认的邮箱、手机号码或者本网站允许的其它方式作为登陆手段进入本网站。如有必要，按照不同法域相关法律法规的规定，您必须提供您的真实姓名、身份证件等法律法规及隐私条款及反洗钱条款规定的相关信息并不断更新注册资料，符合及时、详尽、准确的要求。所有原始键入的资料将引用为注册资料。您应对该等信息的真实性、完整性和准确性负责，并承担因此产生的任何直接或间接损失及不利后果。
            </p>
        </li>
        <li>
            <p>
                3.3.2 如您所在主权国家或地区的法律法规、规则、命令等规范对手机号码有实名要求，您同意提供注册的手机号码是经过实名登记的，如您不按照规定提供，因此给您带来的任何直接或间接损失及不利后果均应由您承担。
            </p>
        </li>
        <li>
            <p>
                3.3.3您合法、完整并有效提供注册所需信息并经验证，有权获得本网站账号和密码，您获得本网站账号及密码时视为注册成功，可在本网站进行会员登陆。
            </p>
        </li>
        <li>
            <p>
                3.3.4 您同意接收本网站发送的与本网站管理、运营相关的电子邮件和/或短消息。
            </p>
        </li>
    </ul>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">四、服务</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<div data-v-643022ad="" style="white-space: normal; text-indent: 2em; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    本网站只为您通过本网站进行数字资产交易活动（包括但不限于数字资产交易等服务）提供网络交易平台服务，本网站并不作为买家或卖家参与买卖数字资产行为本身；本网站不提供任何国家法定货币充入和提取的相关服务。
</div>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p data-v-643022ad="">
            4.1 服务内容
        </p>
    </li>
    <ul data-v-643022ad="" class="indent list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                4.1.1 您有权在本网站浏览数字资产各项产品的实时行情及交易信息、有权通过本网站提交数字资产交易指令并完成数字资产交易。
            </p>
        </li>
        <li>
            <p>
                4.1.2 您有权在本网站查看其本网站会员账号下的信息，有权应用本网站提供的功能进行操作。
            </p>
        </li>
        <li>
            <p>
                4.1.3 您有权按照本网站发布的活动规则参与本网站组织的网站活动。
            </p>
        </li>
        <li>
            <p>
                4.1.4 本网站承诺为您提供的其他服务。
            </p>
        </li>
    </ul>
    <li>
        <p data-v-643022ad="">
            4.2.服务规则
        </p>
        <p data-v-643022ad="">
            您承诺遵守下列本网站服务规则：
        </p>
    </li>
    <ul data-v-643022ad="" class="indent list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                4.2.1 您应当遵守法律法规、规章、及政策要求的规定，保证账户中所有数字资产来源的合法性，不得在本网站或利用本网站服务从事非法或其他损害本网站或第三方权益的活动，如发送或接收任何违法、违规、侵犯他人权益的信息，发送或接收传销材料或存在其他危害的信息或言论，未经本网站授权使用或伪造本网站电子邮件题头信息等。
            </p>
        </li>
        <li>
            <p>
                4.2.2 您应当遵守法律法规并妥善使用和保管其本网站账号及登陆密码、资金密码、和其注册时绑定的手机号码、以及手机接收的手机验证码的安全。您对使用其本网站账号和登陆密码、资金密码、手机验证码进行的任何操作和后果承担全部责任。当您发现本网站账号、登陆密码、或资金密码、验证码被未经其授权的第三方使用，或存在其他账号安全问题时，应立即有效通知本网站，要求本网站暂停本网站账号的服务。本网站有权在合理时间内对您的该等请求采取行动，但本网站对在采取行动前已经产生的后果（包括但不限于您的任何损失）不承担任何责任。您在未经本网站同意的情况下不得将本网站账号以赠与、借用、租用、转让或其他方式处分给他人。
            </p>
        </li>
        <li>
            <p>
                4.2.3 您同意您对您的本网站的账号、密码下发生的所有活动（包括但不限于信息披露、发布信息、网上点击同意或提交各类规则协议、网上续签协议或购买服务等）承担责任。
            </p>
        </li>
        <li>
            <p>
                4.2.4 您在本网站进行数字资产交易时不得恶意干扰数字资产交易的正常进行、破坏交易秩序；不得以任何技术手段或其他方式干扰本网站的正常运行或干扰其他用户对本网站服务的使用；不得以虚构事实等方式恶意诋毁本网站的商誉。
            </p>
        </li>
        <li>
            <p>
                4.2.5 如您因网上交易与其他用户产生纠纷的，不得通过司法或行政以外的途径要求本网站提供相关资料。
            </p>
        </li>
        <li>
            <p>
                4.2.6 您在使用本网站提供的服务过程中，所产生的应纳税赋，以及一切硬件、软件、服务及其它方面的费用，均由您独自承担。
            </p>
        </li>
        <li>
            <p>
                4.2.7 您应当遵守本网站不时发布和更新的本协议以及其他服务条款和操作规则，有权随时终止使用本网站提供的服务。
            </p>
        </li>
    </ul>
    <li>
        <p data-v-643022ad="">
            4.3.产品规则
        </p>
    </li>
    <ul data-v-643022ad="" class="indent list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                4.3.1.1 浏览交易信息
            </p>
        </li>
        <li>
            <p>
                您在本网站浏览币币交易信息时，应当仔细阅读交易信息中包含的全部内容，包括但不限于价格、委托量、手续费、买入或卖出方向， 您完全接受交易信息中包含的全部内容后方可点击按钮进行交易。
            </p>
        </li>
        <li>
            <p>
                4.3.1.2 提交委托
            </p>
        </li>
        <li>
            <p>
                在浏览完交易信息确认无误之后您可以提交交易委托。您提交交易委托后，即您授权本网站代理您进行相应的交易撮合，本网站在有满足您委托价格的交易时将会自动完成撮合交易而无需提前通知您。
            </p>
        </li>
        <li>
            <p>
                4.3.1.3 查看交易明细
            </p>
        </li>
        <li>
            <p>
                您可以通过管理中心的交易明细中查看相应的成交记录，确认自己的详情交易记录。
            </p>
        </li>
        <li>
            <p>
                4.3.1.4 撤销/修改委托，在委托未达成交易之前，您有权随时撤销或修改委托。
            </p>
        </li>
        <li>
            <p data-v-643022ad="">
                4.3.1 币币交易产品规则
            </p>
            <p data-v-643022ad="">
                您承诺在其进入本网站交易，通过本网站与其他用户进行币币交易的过程中良好遵守如下交易规则。
            </p>
        </li>
    </ul>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">五、本网站的权利和义务</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p>
            5.1 如您不具备本协议约定的注册资格，则本网站有权拒绝您进行注册，对已注册的，本网站有权注销您的会员账号，本网站保留向您或您的有权代理人追究责任的权利。同时，本网站保留其他任何情况下决定是否接受您注册的权利。
        </p>
    </li>
    <li>
        <p>
            5.2 本网站发现账户使用者并非账户初始注册人时，有权中止或终止该账户的使用。
        </p>
    </li>
    <li>
        <p>
            5.3 本网站通过技术检测、人工抽检等检测方式合理怀疑您提供的信息错误、不实、失效或不完整时，有权通知您更正、更新信息或中止、终止为其提供本网站服务。
        </p>
    </li>
    <li>
        <p>
            5.4 本网站有权在发现本网站上显示的任何信息存在明显错误时，对信息予以更正。
        </p>
    </li>
    <li>
        <p>
            5.5 本网站保留随时修改、中止或终止本网站服务的权利，本网站行使修改或中止服务的权利不需事先告知您；本网站终止本网站一项或多项服务的，终止自本网站在网站上发布终止公告之日生效。
        </p>
    </li>
    <li>
        <p>
            5.6 本网站应当采取必要的技术手段和管理措施保障本网站的正常运行，并提供必要、可靠的交易环境和交易服务，维护数字资产交易秩序。
        </p>
    </li>
    <li>
        <p>
            5.7 如您连续一年未使用本网站会员账号和密码登陆本网站，则本网站有权注销您的本网站账号。账号注销后，本网站有权将相应的会员名开放给其他您注册使用。
        </p>
    </li>
    <li>
        <p>
            5.8 本网站通过加强技术投入、提升安全防范等措施保障您的数字资产的安全，有义务在您账户出现可以预见的安全风险时提前通知您。
        </p>
    </li>
    <li>
        <p>
            5.9 本网站有权随时删除本网站内各类不符合法律法规或本网站规定等的内容信息，本网站行使该等权利不需提前通知您。
        </p>
    </li>
    <li>
        <p>
            5.10 本网站有权根据您所属主权国家或地区的法律法规、规则、命令等规范的要求，向您要求提供更多的信息或资料等，并采取合理的措施，以符合当地的规范之要求，您有义务配合；本网站有权根据您所属主权国家或地区的法律法规、规则、命令等规范的要求，暂停或永久停止对您的开放本网站及其部分或全部服务。
        </p>
    </li>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">六、赔偿</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p>
            6.1 在任何情况下，我们对您的直接损害的赔偿责任均不会超过您从使用本网站服务产生的为期三（ 3）个月的总费用。
        </p>
    </li>
    <li>
        <p>
            6.2 如您发生违反本协议或其他法律法规等情况，您须向我们至少赔偿200万美元及承担由此产生的全部费用（包括律师费等），如不够弥补实际损失，您须补全。
        </p>
    </li>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">七、寻求禁令救济的权利</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<div data-v-643022ad="" style="white-space: normal; text-indent: 2em; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    我们和您均承认普通法对违约或可能违约情况的救济措施是可能是不足以弥补我们遭受的全部损失的，故非违约方有权在违约或可能违约情况下寻求禁令救济以及普通法或衡平法允许的其他所有的补救措施。
</div>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">八、责任限制与免责</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p data-v-643022ad="">
            8.1 您了解并同意，在任何情况下，我们不就以下各事项承担责任：
        </p>
    </li>
    <ul data-v-643022ad="" class="indent list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                8.1.1 收入的损失；
            </p>
        </li>
        <li>
            <p>
                8.1.2 交易利润或合同损失；
            </p>
        </li>
        <li>
            <p>
                8.1.3 业务中断
            </p>
        </li>
        <li>
            <p>
                8.1.4 预期可节省的货币的损失；
            </p>
        </li>
        <li>
            <p>
                8.1.5 信息的损失；
            </p>
        </li>
        <li>
            <p>
                8.1.6 机会、商誉或声誉的损失；
            </p>
        </li>
        <li>
            <p>
                8.1.7 数据的损坏或损失；
            </p>
        </li>
        <li>
            <p>
                8.1.8 购买替代产品或服务的成本；
            </p>
        </li>
        <li>
            <p>
                8.1.9 任何由于侵权（包括过失）、违约或其他任何原因产生的间接的、特殊的或附带性的损失或损害，不论这种损失或损害是否可以为我们合理预见；不论我们是否事先被告知存在此种损 失或损害的可能性。
            </p>
        </li>
        <li>
            <p>
                8.1.1 条至8.1.9条均是彼此独立的。
            </p>
        </li>
    </ul>
    <li>
        <p data-v-643022ad="">
            8.2 您了解并同意，我们不对因下述任一情况而导致您的任何损害赔偿承担责任：
        </p>
    </li>
    <ul data-v-643022ad="" class="indent list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                8.2.1 我们有合理的理由认为您的具体交易事项可能存在重大违法或违约情形。
            </p>
        </li>
        <li>
            <p>
                8.2.2 我们有合理的理由认为您在本网站的行为涉嫌违法或不当。
            </p>
        </li>
        <li>
            <p>
                8.2.3 通过本网站服务购买或获取任何数据、信息或进行交易等行为或替代行为产生的费用及损失。
            </p>
        </li>
        <li>
            <p>
                8.2.4 您对本网站服务的误解。
            </p>
        </li>
        <li>
            <p>
                8.2.5 任何非因我们的原因而引起的与本网站提供的服务有关的其它损失。
            </p>
        </li>
    </ul>
    <li>
        <p>
            8.3 我们对由于信息网络设备维护、信息网络连接故障、电脑、通讯或其他系统的故障、电力故障、天气原因、意外事故、罢工、劳动争议、暴乱、起义、骚乱、生产力或生产资料不足、火灾、洪水、风暴、爆炸、战争、银行或其他合作方原因、数字资产市场崩溃、政府行为、 司法或行政机关的命令、其他不在我们可控范围内或我们无能力控制的行为或第三方的原因而造成的不能服务或延迟服务，以及造成的您的损失，我们不承担任何责任。
        </p>
    </li>
    <li>
        <p>
            8.4 我们不能保证本网站包含的全部信息、程序、文本等完全安全，不受任何病毒、木马等恶意程序的干扰和破坏，故您登陆、使用本网站任何服务或下载及使用该下载的任何程序、信息、数据等均是您个人的决定并自行承担风险及可能产生的损失。
        </p>
    </li>
    <li>
        <p>
            8.5 我们对本网站中链接的任何第三方网站的任何信息、产品及业务及其他任何形式的不属于我们的主体的内容等不做任何保证和承诺，您如果使用第三方网站提供的任何服务、信息及产品等均为您个人决定且承担由此产生的一切责任。
        </p>
    </li>
    <li>
        <p>
            8.6 我们对于您使用本网站服务不做任何明示或暗示的保证，包括但不限于本网站提供服务的适用性、没有错误或疏漏、持续性、准确性、可靠性、适用于某一特定用途。同时，我们也不对本网站提供的服务所涉及的技术及信息的有效性、准确性、正确性、可靠性、质量、稳定、完整和及时性作出任何承诺和保证。是否登陆或使用本网站提供的服务是您个人的决定且自行承担风险及可能产生的损失。我们对于数字资产的市场、价值及价格等不做任何明示或暗示的保证，您理解并了解数字资产市场是不稳定的，价格和价值随时会大幅波动或崩盘，交易数字资产是您个人的自由选择及决定且自行承担风险及可能产生的损失。
        </p>
    </li>
    <li>
        <p>
            8.7 本协议中规定的我们的保证和承诺是由我们就本协议和本网站提供的服务的唯一保证和陈述，并取代任何其他途径和方式产生的保证和承诺，无论是书面的或口头的，明示的或暗示的。所有这些保证和陈述仅仅代表我们自身的承诺和保证，并不保证任何第三方遵守本协议中的保证和承诺。
        </p>
    </li>
    <li>
        <p>
            8.8 我们并不放弃本协议中未提及的在法律适用的最大范围内我们享有的限制、免除或抵销我们损害赔偿责任的任何权利。
        </p>
    </li>
    <li>
        <p>
            8.9 您注册后即表示认可我们按照本协议中规定的规则进行的任何操作，产生的任何风险均由您承担。
        </p>
    </li>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">九、协议的终止</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p>
            9.1 本网站有权依据本协议约定注销您的本网站账号，本协议于账号注销之日终止。
        </p>
    </li>
    <li>
        <p>
            9.2 本网站有权依据本协议约定终止全部本网站服务，本协议于本网站全部服务终止之日终止。
        </p>
    </li>
    <li>
        <p>
            9.3 本协议终止后，您无权要求本网站继续向其提供任何服务或履行任何其他义务，包括但不限于要求本网站为您保留或向您披露其原本网站账号中的任何信息， 向您或第三方转发任何其未曾阅读或发送过的信息等。
        </p>
    </li>
    <li>
        <p>
            9.4 本协议的终止不影响守约方向违约方要求其他责任的承担。
        </p>
    </li>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">十、知识产权</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p>
            10.1 本网站所包含的全部智力成果包括但不限于网站标志、数据库、网站设计、文字和图表、软件、照片、录像、音乐、声音及其前述组合，软件编译、相关源代码和软件 (包括小应用程序和脚本) 的知识产权权利均归本网站所有。您不得为商业目的复制、更改、拷贝、发送或使用前述任何材料或内容。
        </p>
    </li>
    <li>
        <p>
            10.2 本网站名称中包含的所有权利 (包括但不限于商誉和商标、标志) 均归公司所有。
        </p>
    </li>
    <li>
        <p>
            10.3 您接受本协议即视为您主动将其在本网站发表的任何形式的信息的著作权， 包括但不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权 以及应当由著作权人享有的其他可转让权利无偿独家转让给本网站所有，本网站有权利就任何主体侵权单独提起诉讼并获得全部赔偿。 本协议效力及于您在本网站发布的任何受著作权法保护的作品内容， 无论该内容形成于本协议签订前还是本协议签订后。
        </p>
    </li>
    <li>
        <p>
            10.4 您在使用本网站服务过程中不得非法使用或处分本网站或他人的知识产权权利。您不得将已发表于本网站的信息以任何形式发布或授权其它网站（及媒体）使用。
        </p>
    </li>
    <li>
        <p>
            10.5 您登陆本网站或使用本网站提供的任何服务均不视为我们向您转让任何知识产权。
        </p>
    </li>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">十一、信息保护</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p data-v-643022ad="">
            11.1 适用范围
        </p>
    </li>
    <ul data-v-643022ad="" class="indent list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                11.1.1 在您注册网站账号或者使用账户时，您根据本网站要求提供的个人注册信息，包括但不限于电话号码、邮箱信息、身份证件信息。
            </p>
        </li>
        <li>
            <p>
                11.1.2 在您使用本网站服务时，或访问本网站网页时，本网站自动接收并记录的您浏览器上的服务器数值，包括但不限于IP地址等数据及您要求取用的网页记录。
            </p>
        </li>
        <li>
            <p>
                11.1.3 本网站收集到的您在本网站进行交易的有关数据，包括但不限于交易记录。
            </p>
        </li>
        <li>
            <p>
                11.1.4本网站通过合法途径取得的其他您个人信息。
            </p>
        </li>
    </ul>
    <li>
        <p data-v-643022ad="">
            11.2 信息使用
        </p>
    </li>
    <ul data-v-643022ad="" class="indent list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                11.2.1.1 向您提供本网站服务；
            </p>
        </li>
        <li>
            <p>
                11.2.1.2 基于主权国家或地区相关主管部门的要求向相关部门进行报告；
            </p>
        </li>
        <li>
            <p>
                11.2.1.3 在您使用本网站服务时，本网站将您的信息用于身份验证、客户服务、安全防范、诈骗监测、存档和备份用途，确保本网站向您提供的产品和服务的安全性；
            </p>
        </li>
        <li>
            <p>
                11.2.1.4 帮助本网站设计新产品及服务，改善本网站现有服务；
            </p>
        </li>
        <li>
            <p>
                11.2.1.5为了使您解本网站服务的具体情况，您同意本网站向其发送营销活动通知、商业性电子信息以及提供与您相关的广告以替代普遍投放的广告；
            </p>
        </li>
        <li>
            <p>
                11.2.1.6 本网站为完成合并、分立、收购或资产转让而将您的信息转移或披露给任何非关联的第三方；
            </p>
        </li>
        <li>
            <p>
                11.2.1.7 软件认证或管理软件升级；
            </p>
        </li>
        <li>
            <p>
                11.2.1.8 邀请您参与有关本网站服务的调查；
            </p>
        </li>
        <li>
            <p>
                11.2.1.9 用于和政府机关、公共事务机构、协会等合作的数据分析；
            </p>
        </li>
        <li>
            <p>
                11.2.1.10 用作其他一切合法目的以及经您授权的其他用途。
            </p>
        </li>
        <li>
            <p data-v-643022ad="">
                11.2.1 不需要您额外的同意，您在本网站注册成功即视为您同意本网站收集并使用其在本网站的各类信息，如11.1条所列，您了解并同意，本网站可以将收集的您信息用作包括但不限于下列用途：
            </p>
        </li>
        <li>
            <p>
                11.2.2 本网站不会向其他任何人出售或出借您的个人信息，除非事先得到您的许可。本网站也不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。
            </p>
        </li>
    </ul>
    <li>
        <p>
            11.3 本网站对所获得的客户身份资料和交易信息等进行保密，不得向任何单位和个人提供客户身份资料和交易信息，应相关主权国家或地区法律法规、政令、命令等规定要求本网站提供的除外。
        </p>
    </li>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">十二、计算</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<p data-v-643022ad="" style="white-space: normal; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-size: 14px; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    所有的交易计算结果都经过我们的核实，所有的计算方法都已经在网站上公示，但是我们不能保证网站的使用不会受到干扰或没有误差。
</p>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">十三、出口控制</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<p data-v-643022ad="" style="white-space: normal; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-size: 14px; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    您理解并承认，根据台湾相关法律，您不得将本网站上的任何材料（包括软件）出口、再出口、进口或转移，故您保证不会主动实施或协助或参与任何上述违反法规的出口或有关转移或其他违反适用的法律和法规的行为；如发现此类情形，会向我们积极报告并协助我们处理。
</p>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">十四、转让</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<p data-v-643022ad="" style="white-space: normal; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-size: 14px; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    本协议中约定的权利及义务同样约束从该权利义务中获取到利益的各方的受让人，继承人，遗嘱执行人和管理员。您不得在我们不同意的前提下转让给任何第三人，但我们可随时将我们在本协议中的权利和义务转让给任何第三人，并给予您提前30天的通知。
</p>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">十五、可分割性</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<p data-v-643022ad="" style="white-space: normal; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-size: 14px; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    如本协议中的任何条款被任何有管辖权的法院认定为不可执行的，无效的或非法的，并不影响本协议的其余条款的效力。
</p>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">十六、非代理关系</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<p data-v-643022ad="" style="white-space: normal; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-size: 14px; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    本协议中的任何规定均不可被认为创造了、暗示了或以其他方式将我们视为您的代理人、受托人或其他代表人，本协议有其他规定的除外。
</p>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">十七、弃权</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<p data-v-643022ad="" style="white-space: normal; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-size: 14px; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    我们或您任何一方对追究本协议约定的违约责任或其他责任的弃权并不能认定或解释为对其他违约责任的弃权；未行使任何权利或救济不得以任何方式被解释为对该等权利或救济的放弃。
</p>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">十八、标题</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<p data-v-643022ad="" style="white-space: normal; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-size: 14px; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    所有标题仅供协议表述方便，并不用于扩大或限制该协议条款的内容或范围。
</p>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">十九、适用法律</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<p data-v-643022ad="" style="white-space: normal; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-size: 14px; font-variant-ligatures: normal; orphans: 2; widows: 2; ">
    本协议全部内容均为根据台湾法律订立的合同，其成立、解释、内容及执行均适用台湾相关法律规定；任何因或与本协议约定的服务有关而产生的索赔或诉讼，都应依照台湾的法律进行管辖并加以解释和执行。为避免疑义，这一条款明确适用于任何针对我们的侵权索赔。任何针对我们或者是和我们有关的索赔或诉讼的管辖法院或诉讼地均在台湾。您无条件地获得在台湾法院进行诉讼和上诉的排他性的管辖权。您也无条件地同意与本协议款有关的争议或问题或产生的任何索赔请求和诉讼的发生地或法院均排他性得在台湾。不方便法院的原则不适用于根据本服务条款的选择的法院。
</p>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">二十、协议的生效和解释</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p>
            20.1 本协议于您点击本网站注册页面的同意注册并完成注册程序、获得本网站账号和密码时生效，对本网站和您均具有约束力。
        </p>
    </li>
    <li>
        <p>
            20.2 本协议的最终解释权归本网站所有。
        </p>
    </li>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "><span data-v-643022ad="" class="large_title">了解你的客户和反洗钱政策</span></em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">&nbsp;</span><em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">一、导言</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p>
            1.1我们保证审慎遵守“了解你的客户”和反洗钱相关的法律法规且不得故意违反该《了解你的客户和反洗钱政策》。在我们合理控制的范围内我们将采取必要的措施和技术为您提供安全的服务，尽可能使您免于遭受犯罪嫌疑人的洗钱行为带来的损失。
        </p>
    </li>
    <li>
        <p>
            1.2我们的了解你的客户和反洗钱政策是一个综合性的国际政策体系，包括您隶属的不同法律辖区的了解你的客户和反洗钱政策。我们健全合规的框架确保我们在本地和全球层面均符合监管要求和监管水平，并确保本网站持续性运行。
        </p>
    </li>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">二、了解你的客户和反洗钱政策如下：</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p>
            2.1颁布了解你的客户和反洗钱政策并时时更新以满足相应的法律法规规定的标准；
        </p>
    </li>
    <li>
        <p>
            2.2颁布和更新运行本网站的一些指导原则和规则，且我们的员工将按照该原则和规则的指导提供服务；
        </p>
    </li>
    <li>
        <p>
            2.3 设计并完成内部监测和控制交易的程序，如以严格的手段验证身份，安排组建专业团队专门负责反洗钱工作；
        </p>
    </li>
    <li>
        <p>
            2.4 采用风险预防的方法对客户进行尽职调查和持续的监督;
        </p>
    </li>
    <li>
        <p>
            2.5 审查和定期检查已发生的交易;
        </p>
    </li>
    <li>
        <p>
            2.6 向主管当局报告可疑交易;
        </p>
    </li>
    <li>
        <p>
            2.7身份证明文件、地址证明文件和交易记录的证明文件将会维持至少六年，如被提交给监管部门，恕不另行通知您。
        </p>
    </li>
    <li>
        <p>
            2.8 整个交易过程中，信用卡被禁止使用；
        </p>
    </li>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">三、身份信息与核实确认</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p data-v-643022ad="">
            3.1 身份信息
        </p>
    </li>
    <ul data-v-643022ad="" class="indent list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                3.1.1 根据不同的司法管辖区的不同规定及不同的实体类型，我们收集的您的信息内容可能不一致，原则上将向注册的个人收集以下信息：
            </p>
        </li>
        <li>
            <p>
                个人基本信息：您的姓名，住址（及永久地址，如果不同） ，出生日期及国籍等可获得的其他情况。身份验证应该是根据官方或其他类似权威机构发放的文件，比如护照，身份证或其他不同的辖区要求的和引发的身份证明文件。您提供的地址将使用适当的方法进行验证，比如检查乘用交通工具的票据或利率票据或检查选民登记册等。
            </p>
        </li>
        <li>
            <p>
                有效的照片：在您注册之前，您须提供您将您的身份证件放在胸前的照片；
            </p>
        </li>
        <li>
            <p>
                联系方式：电话/手机号码和/或有效的电子邮件地址。
            </p>
        </li>
        <li>
            <p>
                3.1.2如果您是一个公司或其他合法实体，我们将收集以下信息以确定您或信托帐户的最终受益人。
            </p>
        </li>
        <li>
            <p>
                公司注册、登记证；公司的章程与备忘录副本；公司的股权机构和所有权说明的详细证明材料，证明决定本网站账户的开立以及执行的授权委托人的董事会决议；按照要求需要提供的公司董事、大股东及本网站账户有权签字人的身份证明文件；该公司的主要营业地址，如果与公司的邮寄地址不同，提供邮寄地址。如果公司在本地的地址与它的主要营业地址不一致的，则被视为风险较高的客户，需要提交额外附加文件。
            </p>
        </li>
        <li>
            <p>
                •根据不同的司法管辖区的不同规定及不同的实体类型，我们要求的其他认证和权威部门发布的文件以及我们认为必要的文件。
            </p>
        </li>
        <li>
            <p>
                3.1.3 我们只接受英语版本或汉语版本的身份信息，如不是，请您将您的身份信息翻译成英文的版本并加以公证。
            </p>
        </li>
    </ul>
    <li>
        <p data-v-643022ad="">
            3.2确认核实
        </p>
    </li>
    <ul data-v-643022ad="" class="indent list-paddingleft-2" style="list-style-type: square;">
        <li>
            <p>
                3.2.1我们要求您提供身份证明文件的全部页面内容。
            </p>
        </li>
        <li>
            <p>
                3.2.2 我们要求您提供您将您的身份证明文件放在您胸前的照片。
            </p>
        </li>
        <li>
            <p>
                3.2.3证明文件的副本一般应核和原始凭证进行核对。然而，如果某个可信赖的合适的认证人可证明该副本文件是原始文件准确而全面的复制的，该副本可接受。这样的认证人包括大使、司法委员、地方治安官等。
            </p>
        </li>
        <li>
            <p>
                3.2.4 对识别最终受益人和账户控制权的要求是确定哪些个人最终所有或控制直接客户，和/或确定正在进行的交易是由他人代为执行。如果是企业，则大股东的身份（例如那些持有10％或以上的投票权益）应被验证。一般，持股25 ％会被认定为正常风险内，其股东身份须验证；持股10%或拥有更多的投票权或股票时被认定为高风险的情况，股东身份须加以验证。
            </p>
        </li>
    </ul>
</ul>
<p>
    <em data-v-643022ad="" class="paragraph" style="white-space: normal; font-weight: bold; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; ">四、监控交易</em><span style="color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; "></span>
</p>
<ul data-v-643022ad="" style="white-space: normal; margin-bottom: 10px; padding-right: 0px; padding-left: 0px; color: #666; font-family: &quot;Helvetica Neue&quot;, Helvetica, &quot;PingFang SC&quot;, &quot;Hiragino Sans GB&quot;, &quot;Microsoft YaHei&quot;, 微软雅黑, Arial, sans-serif; font-variant-ligatures: normal; orphans: 2; widows: 2; " class=" list-paddingleft-2">
    <li>
        <p>
            4.1 我们根据安全性和实际交易情况时时设置和调整日常交易和提币最高限额;
        </p>
    </li>
    <li>
        <p>
            4.2如果交易频繁集中发生在某个注册用户或存在超乎合理的情况，我们的专业团队将评估并决定他们是否可疑;
        </p>
    </li>
    <li>
        <p>
            4.3我们凭借自身的判断认定为可疑交易的情况，我们可能会采取暂停该交易、拒绝该交易等限制性措施，甚至如果可能将尽快逆转该交易，同时向主管部门报告，但不会通知您;
        </p>
    </li>
    <li>
        <p>
            4.4我们保留拒绝来自于不符合国际反洗钱标准辖区的人或可被视为政治公众人物的人的注册申请，我们保留随时暂停或终止根据我们自身判断为可疑交易的交易，但我们这样做并不违反对您的任何义务和责任。
        </p>
    </li>
</ul>
<p>
    <br/>
</p>`,
      stauts:false
        };
    }
    OkHandle=()=>{
    	const {onOk}=this.props;
    	onOk&&onOk(1);
    }
    cancelHandle = (e) => {
        const {cancelHandle}=this.props;
        cancelHandle && cancelHandle();

    }

    render() {

    	const {stauts,content}=this.state;
        return (

            <Modal width="62.5%" bodyStyle={{padding:0}} visible={stauts} footer={null}  onCancel={this.cancelHandle} >
               <div className="protocol-box">
                  <h4 className="protocol-tit">用户协议</h4>
                  <div className="protocol-cont  mt-md bt-gray">
                     <div className="protocol-desc" dangerouslySetInnerHTML={{__html: content}}>

                     </div>
                  </div>
                  <Button className="protocol-btn mt-lg" type="primary" size="large" onClick={this.OkHandle}><span className="blue">我已阅读并同意该协议</span></Button>
               </div>
            </Modal>
        );
    }
}
export default Protocol;