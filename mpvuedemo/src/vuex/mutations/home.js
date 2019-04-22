export default {
  increaseMyCount (state, num) {
    state.count += num
  },
  setLodingState (state, option) {
    if (state[option.key] === undefined) return false
    state[option.key] = option.value
  },
  getIndexData (state, data) {
    state.banners = data.banners
    state.categories = data.categories
    if (data.todayRecommends.length > 0) {
      state.todayRecommends = data.todayRecommends
    }
  },
  getMoreRecommendGoods (state, data) {
    state.recommendGoods = [...state.recommendGoods, ...data.recommendGoods]
    state.lastIds = data.lastIds
  },
  getRecommendGoods (state, data) {
    state.recommendGoods = data.recommendGoods
    state.lastIds = data.lastIds
  }
}
