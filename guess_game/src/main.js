//入口
import Vue from 'vue';

//导入路由组件
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//导入路由
import router from './router.js';

//导入resource获取数据
import VueResource from 'vue-resource';
Vue.use(VueResource);
//请求的根路径
// Vue.http.options.root = 'http://192.168.1.238:666';

//导入全局token
import {Params,Cookie} from './cookie.js';
Vue.prototype.parmis = new Params();
Vue.prototype.cookie = new Cookie();


//引入jq
// import 'zepto.js';
//存取
import storage from './storage.js';
Vue.use(storage);

// import VueSocketio from 'vue-socket.io';
// Vue.use(VueSocketio,'http://192.168.1.238:666')

// md5加密
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

// i18n
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale:localStorage.getItem('language')||'cn',//使用缓存
    messages:{
        'cn':require('./i18n/cn'),
        'en':require('./i18n/en'),
    }
})

// import bus from 'vue-bus';
// Vue.use(bus);

import app from './App.vue';
//按需引入mint-ui
// import 'mint-ui/lib/style.css';
import { Header, Swipe, Toast, SwipeItem, InfiniteScroll, Loadmore, Spinner,  MessageBox  } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component( Toast.name, Toast);
Vue.component(Swipe.name, Swipe);
Vue.component(MessageBox.name, MessageBox );
Vue.component(SwipeItem.name, SwipeItem);
Vue.component( Loadmore.name, Loadmore);
Vue.component( Spinner.name, Spinner);
Vue.component(InfiniteScroll);

//引入虚拟键盘
// import pswInput from './psword_input.js'
// Vue.use(pswInput);

//引入字体
import './font/Font.css';

//引入公共样式
import '../src/css/app.css';
//引入动画样式
// import animated from 'animate.css';

//引入上拉下拉加载刷新组件

//导入mui样式
import './lib/mui/css/mui.css';
// import './lib/mui/js/mui.min.js';
import './lib/mui/css/icons-extra.css';
var vm = new Vue({
    el: "#app",
    data: {},
    i18n,
    methods: {},
    render: c => c(app),
    router
})
// vm.socket = io('http://192.168.1.238:666');


