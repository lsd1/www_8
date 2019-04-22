export default {
  increaseMyCount (state, num) {
    state.count += num
  },
  getGoodsDetail (state, data) {
    state.goodsInfo = data.goodsInfo
  },
  setLodingState (state, option) {
    if (state[option.key] === undefined) return false
    state[option.key] = option.value
  },
  getComments (state, data) {
    state.comments = [...state.comments, ...data.comments]
    state.lastIds = data.lastIds
  }
}
