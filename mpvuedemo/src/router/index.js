import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const pages = ['home', 'goodsDetail', 'shoppingCart', 'storeDetail', 'makeOrder', 'test']
const loginPages = ['makeOrder', 'pay', 'payRes']
const getPage = name => {
  return resolve => require([`../pages/${name}/${name}.vue`], resolve)
}
const getLoginPage = name => {
  return resolve => require([`../needLogin/pages/${name}/${name}.vue`], resolve)
}
let routerArr = [{
  path: '/',
  name: 'test',
  component: getPage('test'),
}]
pages.forEach(item => {
  routerArr.push({
    path: `/pages/${item}/index`,
    name: item,
    component: getPage(item),
  })
})
loginPages.forEach(item => {
  routerArr.push({
    path: `/needLogin/pages/${item}/index`,
    name: item,
    component: getLoginPage(item),
  })
})
export default new Router({
  mode: 'history',
  routes: routerArr
})
