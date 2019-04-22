import { getGoodsDetail, getComments } from '@/service/getData'
export default {
  increaseMyCount ({ commit }, num) {
    commit('increaseMyCount', num)
  },
  async getGoodsDetail ({ commit }) {
    let [err, res] = await getGoodsDetail()
    if (err) {
      console.log(err)
      return false
    }
    if (res.code === 0) {
      commit('getGoodsDetail', res.data)
    }
  },
  async getComments ({ commit }, lastIds = 0) {
    commit('setLodingState', { key: 'loadingIndexData', value: true })
    let [err, res] = await getComments({ lastIds: lastIds })
    commit('setLodingState', { key: 'loadingIndexData', value: false })
    if (err) {
      console.log(err)
      return false
    }
    if (res.code === 0) {
      commit('getComments', res.data)
    }
  },
  setLodingState ({ commit }, value) {
    commit('setLodingState', value)
  }
}
