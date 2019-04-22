import { getIndexData, getRecommendGoods } from '@/service/getData'
export default {
  increaseMyCount ({ commit }, num) {
    commit('increaseMyCount', num)
  },
  async getIndexData ({ commit }) {
    let [err, res] = await getIndexData()
    if (err) {
      console.log(err)
      return { type: 'err', msg: err }
    }
    if (res.code === 0) {
      commit('getIndexData', res.data)
      return { type: 'succ', msg: 'succ' }
    } else {
      return { type: 'err', msg: res.msg }
    }
  },
  async getRecommendGoods ({ commit }, { lastIds }) {
    commit('setLodingState', { key: 'loadingRecommendGoods', value: true })
    let [err, res] = await getRecommendGoods({ lastIds })
    commit('setLodingState', { key: 'loadingRecommendGoods', value: false })
    if (err) {
      return { code: 1, msg: err }
    }
    if (res.code === 0) {
      if (res.data.recommendGoods.length === 0) {
        return { type: 'noMore', msg: 'noMore' }
      } else {
        commit(lastIds === '' ? 'getRecommendGoods' : 'getMoreRecommendGoods', res.data)
        return { type: 'succ', msg: 'succ' }
      }
    } else {
      return { type: 'err', msg: res.msg }
    }
  }
}
