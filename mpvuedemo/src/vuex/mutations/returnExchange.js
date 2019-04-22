export default {
  setLodingState (state, option) {
    if (state[option.key] === undefined) return false
    state[option.key] = option.value
  }
}
