import App from './hello'
import Vue from 'vue'
import MegaloRouterPatch from 'megalo-router-patch'
const app = new Vue(App)
app.$mount()
Vue.use(MegaloRouterPatch)
export default {
    config: {
        "usingComponents": {
            "van-notice-bar": "/static/vant-weapp/dist/notice-bar/index",
            "van-button": "/static/vant-weapp/dist/button/index"
        }
    }
}