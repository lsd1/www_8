import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const pages = ['test']

const getPage = name => {
  return resolve => require([`../pages/${name}/${name}.vue`], resolve)
}
let routerArr = [{
  path: '/',
  name: 'test',
  component: getPage('test'),
}]
pages.forEach(item => {
  let path = item === 'index' ? '' : item
  routerArr.push({
    path: `/${item}`,
    name: item,
    component: getPage(item),
  })
})
export default new Router({
  routes: routerArr
})
