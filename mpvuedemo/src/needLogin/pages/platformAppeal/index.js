import App from './platformAppeal'
import Vue from 'vue'
import MegaloRouterPatch from 'megalo-router-patch'
const app = new Vue(App)
app.$mount()
Vue.use(MegaloRouterPatch)
