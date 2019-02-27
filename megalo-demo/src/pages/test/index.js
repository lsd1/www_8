import App from './test'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()

export default {
    config: {
        "usingComponents": {
            "van-toast": "/static/vant-weapp/dist/toast/index"
        }
    }
}