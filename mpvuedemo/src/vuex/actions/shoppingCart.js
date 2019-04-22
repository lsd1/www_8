import { getShoppingCart, checkGoods, unCheckGoods } from '@/service/getData'
export default {
  async getShoppingCart ({ commit }) {
    let [err, res] = await getShoppingCart()
    if (err) {
      console.log(err)
      return { type: 'err', msg: err }
    }
    if (res.code === 0) {
      console.log(res.data.shopCart)
      commit('getShoppingCart', res.data.shopCart)
      commit('getChecks')
      commit('getAmountAndNum')
      return { type: 'succ', msg: 'succ' }
    } else {
      return { type: 'err', msg: res.msg }
    }
  },
  async checkChange ({ commit, state }, data) {
    let unCheckArr = []
    let checkArr = []
    switch (data.type) {
      case 'add-shop' :
        for (let i in state.checkTree[data.shopKey]) {
          if (!state.checkTree[data.shopKey][i]['checked']) {
            checkArr.push([data.shopKey, i, i.split('-').pop()])
          }
        }
        break
      case 'del-shop' :
        for (let i in state.checkTree[data.shopKey]) {
          if (state.checkTree[data.shopKey][i]['checked']) {
            unCheckArr.push([data.shopKey, i, i.split('-').pop()])
          }
        }
        break
      case 'add-goods' :
        let shopKey1 = data.shopKey
        let jointKey1 = data.jointKey
        if (!state.checkTree[shopKey1][jointKey1]['checked']) {
          checkArr.push([shopKey1, jointKey1, jointKey1.split('-').pop()])
        }
        break
      case 'del-goods' :
        let shopKey2 = data.shopKey
        let jointKey2 = data.jointKey
        if (state.checkTree[shopKey2][jointKey2]['checked']) {
          unCheckArr.push([shopKey2, jointKey2, jointKey2.split('-').pop()])
        }
        break
      case 'del-all' :
        for (let i in state.checkTree) {
          for (let j in state.checkTree[i]) {
            if (state.checkTree[i][j]['checked']) {
              unCheckArr.push([i, j, j.split('-').pop()])
            }
          }
        }
        break
      case 'add-all' :
        for (let i in state.checkTree) {
          for (let j in state.checkTree[i]) {
            if (!state.checkTree[i][j]['checked']) {
              checkArr.push([i, j, j.split('-').pop()])
            }
          }
        }
        break
    }

    if (checkArr.length > 0) {
      commit('checkChange', { type: 1, arr: checkArr })
      commit('getChecks')
      commit('getAmountAndNum')
      let [err1, res1] = await checkGoods({ cartIds: checkArr.map(item => { return item[2] }) })
      if (err1 || res1.code !== 0) {
        commit('checkChange', { type: 0, arr: checkArr })
        commit('getChecks')
        commit('getAmountAndNum')
        return { type: 'err', msg: err1 || res1.msg }
      } else {
        return { type: 'succ', msg: 'succ' }
      }
    }

    if (unCheckArr.length > 0) {
      commit('checkChange', { type: 0, arr: unCheckArr })
      commit('getChecks')
      commit('getAmountAndNum')
      let [err2, res2] = await unCheckGoods({ cartIds: unCheckArr.map(item => { return item[2] }) })
      if (err2 || res2.code !== 0) {
        commit('checkChange', { type: 1, arr: unCheckArr })
        commit('getChecks')
        commit('getAmountAndNum')
        return { type: 'err', msg: err2 || res2.msg }
      } else {
        return { type: 'succ', msg: 'succ' }
      }
    }
  },
  updateNum ({ commit }, data) {
    commit('updateNum', data)
    commit('getAmountAndNum')
  },
  delGoods ({ commit }, data) {
    commit('delGoods', data)
    commit('getChecks')
    commit('getAmountAndNum')
  },
  addGoods ({ commit }, data) {
    commit('addGoods', data)
  }
}
