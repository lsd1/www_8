import App from './sortGoods'
import Vue from 'vue'

const app = new Vue(App)

app.$mount()

export default {
  config: {
    'usingComponents': {
      'van-tree-select': '/static/vant-weapp/tree-select/index'
    }
  }
}
