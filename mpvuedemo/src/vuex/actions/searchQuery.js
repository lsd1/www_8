import { searchDetails, mayYouLike } from '@/service/getData'
export default {
  async getSearchDetails ({ commit }, data = {}) {
    console.log('vuex传值+' + data.cateId)
    let [err1, res1] = await searchDetails(data)
    if (err1) {
      console.log(err1)
      return false
    }
    if (res1.code === 0) {
      commit('getSearchDetails', res1.data)
    }
  },
  async getMayYouLike ({ commit }) {
    let [err1, res1] = await mayYouLike()
    if (err1) {
      console.log(err1)
      return false
    }
    if (res1.code === 0) {
      commit('getMayYouLike', res1.data)
    }
  }
}
