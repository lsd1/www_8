import React from 'react';
import Loadable from 'react-loadable';
import Loading from '@/components/Loading/Loading';





function MyLoadingComponent({ error, pastDelay }) {
    if (error) {
        return <div>Error!</div>;
    } else if (pastDelay) {
        return <Loading />;
    } else {
        return null;
    }
}

const Home = Loadable({ loader: () =>
        import ('../pages/Home/Home'), loading: MyLoadingComponent, delay: 50 });
const Exchange = Loadable({ loader: () =>
        import ( /* webpackPrefetch: true */ '../pages/Exchange/Exchange'), loading: MyLoadingComponent, delay: 50 });
const Trade = Loadable({ loader: () =>
        import ('../pages/Trade/Index/Index'), loading: MyLoadingComponent, delay: 50 });
const TradeCheckUser = Loadable({ loader: () =>
        import ('../pages/Trade/CheckUser/CheckUser'), loading: MyLoadingComponent, delay: 50 });
const Payment = Loadable({ loader: () =>
        import ('../pages/Trade/Payment/Payment'), loading: MyLoadingComponent, delay: 50 });
const Login = Loadable({ loader: () =>
        import ('../pages/User/Login/Login'), loading: MyLoadingComponent, delay: 50 });
const Register = Loadable({ loader: () =>
        import ('../pages/User/Register/Register'), loading: MyLoadingComponent, delay: 50 });
const ResetPwd = Loadable({ loader: () =>
        import ('../pages/User/ResetPwd/ResetPwd'), loading: MyLoadingComponent, delay: 50 });
const Account = Loadable({ loader: () =>
        import ('../pages/Property/Account/Account'), loading: MyLoadingComponent, delay: 50 });
const Record = Loadable({ loader: () =>
        import ('../pages/Property/Record/Record'), loading: MyLoadingComponent, delay: 50 });
const ExtractAddress = Loadable({ loader: () =>
        import ('../pages/Property/ExtractAddress/ExtractAddress'), loading: MyLoadingComponent, delay: 50 });
const Order = Loadable({ loader: () =>
        import ('../pages/Order/Order/Order'), loading: MyLoadingComponent, delay: 50 });
const UserInfo = Loadable({ loader: () =>
        import ('../pages/UserInfo/Index/Index'), loading: MyLoadingComponent, delay: 50 });
const UserInvite = Loadable({ loader: () =>
        import ('../pages/UserInfo/Invite/Invite'), loading: MyLoadingComponent, delay: 50 });
const UserSafety = Loadable({ loader: () =>
        import ('../pages/UserInfo/Safety/Safety'), loading: MyLoadingComponent, delay: 50 });
const UserIdentity = Loadable({ loader: () =>
        import ('../pages/UserInfo/Identity/Identity'), loading: MyLoadingComponent, delay: 50 });
const UserSetting = Loadable({ loader: () =>
        import ('../pages/UserInfo/Setting/Setting'), loading: MyLoadingComponent, delay: 50 });
const UserEditPwd = Loadable({ loader: () =>
        import ('../pages/UserInfo/EditPwd/EditPwd'), loading: MyLoadingComponent, delay: 50 });
const ResetPrice = Loadable({ loader: () =>
        import ('../pages/UserInfo/ResetPrice/ResetPrice'), loading: MyLoadingComponent, delay: 50 });
const AboutUS = Loadable({ loader: () =>
        import ('../pages/About/AboutUs/AboutUs'), loading: MyLoadingComponent, delay: 50 });
const ContactUs = Loadable({ loader: () =>
        import ('../pages/About/ContactUs/ContactUs'), loading: MyLoadingComponent, delay: 50 });
const Notice = Loadable({ loader: () =>
        import ('../pages/About/Notice/Notice'), loading: MyLoadingComponent, delay: 50 });
const NoticeInfo = Loadable({ loader: () =>
        import ('../pages/About/Notice/NoticeInfo'), loading: MyLoadingComponent, delay: 50 });
const Help = Loadable({ loader: () =>
        import ('../pages/Tools/Help/Help'), loading: MyLoadingComponent, delay: 50 });
const HelpInfo = Loadable({ loader: () =>
        import ('../pages/Tools/Help/HelpInfo'), loading: MyLoadingComponent, delay: 50 });
const Digiccy = Loadable({ loader: () =>
        import ('../pages/Tools/Digiccy/Digiccy'), loading: MyLoadingComponent, delay: 50 });
const News = Loadable({ loader: () =>
        import ('../pages/Serve/News/News'), loading: MyLoadingComponent, delay: 50 });
const NewsInfo = Loadable({ loader: () =>
        import ('../pages/Serve/News/NewsInfo'), loading: MyLoadingComponent, delay: 50 });
const Protocol = Loadable({ loader: () =>
        import ('../pages/Serve/Protocol/Protocol'), loading: MyLoadingComponent, delay: 50 });
const Rate = Loadable({ loader: () =>
        import ('../pages/Serve/Rate/Rate'), loading: MyLoadingComponent, delay: 50 });
const Terms = Loadable({ loader: () =>
        import ('../pages/Serve/Terms/Terms'), loading: MyLoadingComponent, delay: 50 });

const ReleaseRule = Loadable({ loader: () =>
        import ('../pages/Serve/ReleaseRule/ReleaseRule'), loading: MyLoadingComponent, delay: 50 });
const TradingRule = Loadable({ loader: () =>
        import ('../pages/Serve/TradingRule/TradingRule'), loading: MyLoadingComponent, delay: 50 });




const Release = Loadable({ loader: () =>
        import ('../pages/Business/Release/Release'), loading: MyLoadingComponent, delay: 50 });
const ReleaseAds = Loadable({ loader: () =>
        import ('../pages/Business/Release/ReleaseAds'), loading: MyLoadingComponent, delay: 50 });

const UserAdv = Loadable({ loader: () =>
        import ('../pages/UserAdv/Index/Index'), loading: MyLoadingComponent, delay: 50 });
const UserAdvInfo = Loadable({ loader: () =>
        import ('../pages/UserAdv/Info/Info'), loading: MyLoadingComponent, delay: 50 });



export const routeList = [
    { path: '/:lang', component: Home, exact: true, isLogin: false },
    { path: '/:lang/login', exact:true, component: Login, isLogin: false },
    { path: '/:lang/register/:agent?', exact:true, component: Register, isLogin: false },
    { path: '/:lang/resetPwd', exact:true, component: ResetPwd, isLogin: false },
    { path: '/:lang/exchange/:name/:small', exact:true, component: Exchange, isLogin: false },
    { path: '/:lang/trade/:name/:type', exact:true, component: Trade, isLogin: false },
    { path: '/:lang/checkUser/user/:userId', exact:true, component: TradeCheckUser, isLogin: false },
    { path: '/:lang/payment/user/:orderId/:status', exact:true, component: Payment, isLogin: true },
    { path: '/:lang/user/account', exact:true, component: Account, isLogin: true },
    { path: '/:lang/user/record', exact:true, component: Record, isLogin: true },
    { path: '/:lang/user/address/:address', exact:true, component: ExtractAddress, isLogin: true },
    { path: '/:lang/user/order', exact:true, component: Order, isLogin: true },
    { path: '/:lang/user/userInfo', exact:true, component: UserInfo, isLogin: true },
    { path: '/:lang/user/invite', exact:true, component: UserInvite, isLogin: true },
    { path: '/:lang/user/safety', exact:true, component: UserSafety, isLogin: true },
    { path: '/:lang/user/identity', exact:true, component: UserIdentity, isLogin: true },
    { path: '/:lang/user/setting', exact:true, component: UserSetting, isLogin: true },
    { path: '/:lang/user/editPwd', exact:true, component: UserEditPwd, isLogin: true },
    { path: '/:lang/user/resetPrice', exact:true, component: ResetPrice, isLogin: true },
    { path: '/:lang/user/adv', exact:true, component: UserAdv, isLogin: true },
    { path: '/:lang/user/advInfo/:state/:id', exact:true, component: UserAdvInfo, isLogin: true },
    { path: '/:lang/about-us', exact:true, component: AboutUS, isLogin: false },
    { path: '/:lang/contact-us', exact:true, component: ContactUs, isLogin: false },
    { path: '/:lang/notice', exact:true, component: Notice, isLogin: false },
    { path: '/:lang/noticeInfo/:id', exact:true, component: NoticeInfo, isLogin: false },
    { path: '/:lang/tools/help', exact:true, component: Help, isLogin: false },
    { path: '/:lang/tools/helpInfo/:id', exact:true, component: HelpInfo, isLogin: false },
    { path: '/:lang/tools/digiccy/:id', exact:true, component: Digiccy, isLogin: false },
    { path: '/:lang/serve/news', exact:true, component: News, isLogin: false },
    { path: '/:lang/serve/newsInfo/:id',  exact:true, component: NewsInfo, isLogin: false },
    { path: '/:lang/explain/protocol', exact:true, component: Protocol, isLogin: false },
    { path: '/:lang/explain/rate', exact:true, component: Rate, isLogin: false },
    { path: '/:lang/explain/terms', exact:true, component: Terms, isLogin: false },
    { path: '/:lang/explain/releaseRule', exact:true, component: ReleaseRule, isLogin: false },
    { path: '/:lang/explain/tradingRule', exact:true, component: TradingRule, isLogin: false },
    { path: '/:lang/ads/release', exact:true, component: Release, isLogin: false },
    { path: '/:lang/ads/releaseAds', exact:true, component: ReleaseAds, isLogin: true },
    { path: '/:lang/ads/releaseAds/update/:id', exact:true, component: ReleaseAds, isLogin: true }
];
