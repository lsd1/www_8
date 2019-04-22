import { getFirstClass, getSubClass } from '@/service/getData'
import empty from 'is-empty'
export default {
  async getFirstClass ({ commit }) {
    let [err1, res1] = await getFirstClass()
    console.log(res1)
    if (err1) {
      console.log(err1)
      return false
    }
    if (res1.code === 0) {
      commit('getFirstClass', res1.data)
    }
  },
  async getSubClass ({ commit }, data = {}) {
    let cateId
    if (!empty(data)) {
      cateId = { cateId: data.cateId }
    } else {
      cateId = {}
    }
    let [err1, res1] = await getSubClass(cateId)
    if (err1) {
      console.log(err1)
      return false
    }
    if (res1.code === 0) {
      console.log(2)
      commit('getSubClass', res1.data)
    }
  }
}
