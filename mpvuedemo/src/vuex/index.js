import Vue from 'vue'
import Vuex from 'vuex'
// import allOrders from './store/allOrders'
import editAddr from './store/editAddr'
import goodsDetail from './store/goodsDetail'
import home from './store/home'
import returnExchange from './store/returnExchange'
import searchQuery from './store/searchQuery'
import shoppingCart from './store/shoppingCart'
import sortGoods from './store/sortGoods'
import { getCartCount } from '@/service/getData'

Vue.use(Vuex)
export default new Vuex.Store({
  // 通过modules属性引入login 模块。
  modules: {
    // allOrders: allOrders,
    editAddr: editAddr,
    goodsDetail: goodsDetail,
    home: home,
    returnExchange: returnExchange,
    searchQuery: searchQuery,
    shoppingCart: shoppingCart,
    sortGoods: sortGoods
  },
  state: {
    oauthUserId: null,
    oauthClientToken: null,
    cartCount: 0,
    selectAddr: {}
  },
  actions: {
    setRegisterInfo: function ({ commit }, data) {
      commit('setRegisterInfo', data)
    },
    addGoods: function ({ commit }, data) {
      commit('addGoods', data)
    },
    selectAddr ({ commit }, data) {
      commit('selectAddr', data)
    },
    setCartCount ({ commit }, data) {
      commit('setCartCount', data)
    },
    async setCartCountFromApi ({ commit }, data) {
      if (wx.getStorageSync('uid')) {
        let [err, res] = await getCartCount()
        if (err || res.code !== 0) {
          return { type: 'err', msg: err || res.msg }
        }
        if (res.code === 0) {
          commit('setCartCount', { cartCount: res.data.goodsCount })
          return { type: 'succ' }
        }
      }
    }
  },
  mutations: {
    setRegisterInfo (state, data) {
      state.oauthUserId = data.oauthUserId
      state.oauthClientToken = data.oauthClientToken
    },
    selectAddr (state, data) {
      state.selectAddr = data.selectAddr
    },
    setCartCount (state, data) {
      state.cartCount = data.cartCount
    }
  },
  getters: {
    getShoppingCart (state) {
      return state.getShoppingCart
    }
  }
})
