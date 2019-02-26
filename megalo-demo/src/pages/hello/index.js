import App from './hello'
import Vue from 'vue'
const app = new Vue(App)
app.$mount()

export default {
    config: {
        "usingComponents": {
            "van-notice-bar": "/vant-weapp/dist/notice-bar/index"
        }
    }
}