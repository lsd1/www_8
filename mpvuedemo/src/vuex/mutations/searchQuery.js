export default {
  setLodingState (state, option) {
    if (state[option.key] === undefined) return false
    state[option.key] = option.value
  },
  getSearchDetails (state, data) {
    console.log(data)
    state.searchRes = data.goodsList
  },
  getMayYouLike (state, data) {
    state.recommendRes = data.goodsList
  }
}
