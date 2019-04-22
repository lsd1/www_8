import { getPendingPay } from '@/service/getData'
export default {
  async getPendingPay ({ commit }) {
    commit('setLodingState', { key: 'loadingMoreKey', value: true })
    let [err1, res1] = await getPendingPay()
    if (err1) {
      console.log(err1)
      return false
    }
    if (res1.code === 0) {
      console.log(2)
      commit('getPendingPay', res1.data)
    }
  }
}
