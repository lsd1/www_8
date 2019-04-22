import empty from 'is-empty'
export default {
  getShoppingCart (state, data) {
    let checkTree = {}
    let shoppingCart = data
    let allGoodsNum = 0
    let cartCount = 0
    shoppingCart.forEach((item1, index1) => {
      let shopKey = 's-' + item1.storeInfo.storeId
      shoppingCart[index1]['storeInfo']['shopKey'] = shopKey
      checkTree[shopKey] = {}
      item1.goodsList.forEach((item2, index2) => {
        cartCount++
        if (item2.invalid) {
          return true
        }
        allGoodsNum += item2.goodsNum
        let jointKey = shopKey + '-' + item2.cartId
        checkTree[shopKey][jointKey] = { checked: item2.check === 1, num: item2.goodsNum, price: item2.goodsPrice }
        shoppingCart[index1]['goodsList'][index2]['jointKey'] = jointKey
      })
    })
    state.cartCount = cartCount
    state.allGoodsNum = allGoodsNum
    state.shoppingCart = null
    state.shoppingCart = shoppingCart
    state.checkTree = checkTree
    console.log('state:', state)
  },
  checkChange (state, data) {
    let arr = data.arr
    switch (data.type) {
      case 1 :
        arr.forEach(item => {
          state.checkTree[item[0]][item[1]]['checked'] = true
        })
        break
      case 0 :
        arr.forEach(item => {
          state.checkTree[item[0]][item[1]]['checked'] = false
        })
        break
    }
  },
  updateNum (state, data) {
    let { jointKey, shopKey } = data
    let oldNum = state.checkTree[shopKey][jointKey]['num']
    let changeNum = data.num - oldNum
    state.allGoodsNum += changeNum
    state.checkTree[shopKey][jointKey]['num'] = data.num
  },
  getChecks (state) {
    let allChecks = []
    let cartIds = []
    let count = 0
    for (let i in state.checkTree) {
      count++
      for (let j in state.checkTree[i]) {
        count++
        if (state.checkTree[i][j].checked) {
          console.log('key:', i, '-', j)
          allChecks.push(j)
          allChecks.push(i)
          cartIds.push(j.split('-').pop())
        }
      }
    }
    let checks = Array.from(new Set(allChecks))
    // 判断是否全选
    if (count === checks.length && count > 0) {
      checks.push('all')
    }
    state.checks = checks
    state.cartIds = cartIds
    console.log('state:', state)
  },
  getAmountAndNum (state) {
    let selectedGoodsAmount = 0
    let selectedGoodsNum = 0
    for (let i in state.checkTree) {
      for (let j in state.checkTree[i]) {
        if (state.checkTree[i][j].checked) {
          selectedGoodsAmount += state.checkTree[i][j].price * state.checkTree[i][j].num
          selectedGoodsNum += state.checkTree[i][j].num
        }
      }
    }
    state.selectedGoodsAmount = selectedGoodsAmount
    state.selectedGoodsNum = selectedGoodsNum
  },
  delGoods (state, data) {
    let { indexes, jointKey, shopKey } = data
    let index = indexes.split('-')
    state.shoppingCart[index[0]]['goodsList'].splice(index[1], 1)
    if (empty(state.shoppingCart[index[0]]['goodsList'])) {
      state.shoppingCart.splice(index[0], 1)
    }
    delete state.checkTree[shopKey][jointKey]
    if (empty(state.checkTree[shopKey])) {
      delete state.checkTree[shopKey]
    }
  },
  addGoods (state, data) {
    state.allGoodsNum += data.num
  }
}
