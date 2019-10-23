// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './AppH5'
import router from './router'
import vuex from './vuex'
import 'lib-flexible/flexible'
import Lazyload from 'vue-lazyload'
import store from './vuex/index'
Vue.prototype.$store = store
// Vue.prototype.$router = router
Vue.use(Lazyload)
Vue.mixin({
  data () {
    return {
      service: '', // 服务
      router: '/', // 路由路径
      imgSrc: '' // 图片路径
    }
  },
  methods: {
      newroot () {
          return  this.$route
      },
      navigatePageTo (url) {
          this.$router.push(url)
      },
      reLaunchPageTo (url) {
          this.$router.replace(url)
      },
      setStorageSync (name, data) {
          sessionStorage.setItem(name, JSON.stringify(data))
      },
      getStorageSync (name) {
          return JSON.parse(sessionStorage.getItem(name))
      }
  },
  created () {}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  vuex
})
