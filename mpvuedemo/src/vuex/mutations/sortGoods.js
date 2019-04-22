export default {
  setLodingState (state, option) {
    if (state[option.key] === undefined) return false
    state[option.key] = option.value
  },
  getFirstClass (state, data) {
    state.cateArr = data.categories
  },
  getSubClass (state, data) {
    state.suvCateArr = data.categories
    console.log(data)
    console.log(data.categories)
  }
}
