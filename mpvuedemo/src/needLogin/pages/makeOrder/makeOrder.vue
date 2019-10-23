<template>
  <div class="makeOrder">
      <div class="address" @click="toAddrList" v-if="isNeedAddress">
        <template v-if="hasAddr">
          请选择收货地址
        </template>

        <template v-else>
          <div class="icon">
            <van-icon name="//imgHost/shopping_address_location_@2x.png" />
          </div>
          <div class="content">
            <div>收货人:{{ selectAddr.consignee }}</div>
            <div>收货地址:{{ selectAddr.address }} {{ selectAddr.provinceName }} {{ selectAddr.cityName }} {{ selectAddr.countyName }} {{ selectAddr.detailInfo }}</div>
          </div>
        </template>
        <van-icon name="arrow" />
      </div>
    <OrderShopItem v-for="(item1, index1) in orderInfo"
                   :shopImg="item1.shopInfo.shopImg"
                   :key="index1"
                   :shopName="item1.shopInfo.shopName"
    >
      <OrderGoodsItem v-for="(item2, index2) in item1.goodsInfo"
                      :key="index2"
                      :goodsName="item2.goodsName"
                      :goodsImg="item2.goodsImg"
                      :goodsSku="item2.goodsSku"
                      :goodsPrice="item2.goodsPrice"
                      :goodsId="item2.goodsId"
                      :cartId="item2.cartId"
                      :goodsNum="item2.goodsNum"
                      :delivery="item2.delivery"
                      :selectDelivery="orderDetail[item2.cartId]['selectDelivery']"
                      :postFee="orderDetail[item2.cartId].postFee"
      >
      </OrderGoodsItem>
    </OrderShopItem>
    <!--// TODO:优惠券的使用-->
    <div class="bottom1">
      <div class="amount">
        <div class="desc">合计 </div>
        <div>￥{{ calDetail.goodsAmount }}</div>
      </div>
      <div class="cal">
        <van-button round type="danger" @click="makeOrder"><div>提交订单({{ calDetail.goodsNum }})</div></van-button>
      </div>
    </div>
    <BlankBottom />
  </div>
</template>

<script>
import { Col, Button, Icon, Toast } from 'vant'
import OrderGoodsItem from '@/componentsWeb/OrderGoodsItem'
import OrderShopItem from '@/componentsWeb/OrderShopItem'
import empty from 'is-empty'
import BlankBottom from '@/componentsWeb/BlankBottom'
import { makeOrderInfo, createOrder, buyNow, buyNowCreateOrder } from '@/service/getData'
import { mapState } from 'vuex'

export default {
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Col.name]: Col,
    OrderGoodsItem,
    OrderShopItem,
    BlankBottom
  },
  data () {
    return {
      orderDetail: {},
      orderInfo: [],
      cartIds: '',
      isBuyNow: false,
      goodsId: 0,
      attrIds: 0,
      num: 0,
      isNeedAddress: true
    }
  },
  computed: {
    ...mapState([
      'selectAddr'
    ]),
    hasAddr () {
      return empty(this.selectAddr)
    },
    calDetail: function () {
      let _this = this
      let goodsAmount = 0
      let goodsNum = 0
      let needAddress = false
      for (let i in _this.orderDetail) {
        let amount = _this.orderDetail[i].goodsNum * _this.orderDetail[i].goodsPrice
        if (_this.orderDetail[i].selectDelivery === 'post') {
          amount += _this.orderDetail[i].postFee
          needAddress = true
        }
        goodsAmount += amount
        goodsNum += _this.orderDetail[i].goodsNum
      }
      this.isNeedAddress = needAddress
      return { goodsAmount: goodsAmount, goodsNum: goodsNum }
    }
  },
  beforeCreate () {
    console.log('Page [makeOrder] Vue beforeCreate')
  },
  async created () {
    console.log('Page [makeOrder] Vue created')
  },
  beforeMount () {
    console.log('Page [makeOrder] Vue beforeMount')
  },
  async mounted () {
    console.log('Page [makeOrder] Vue mounted')
    // 判断是否来自立即购买
    if (this.$router.currentRoute.query.cartIds) {
      if (this.cartIds !== this.$router.currentRoute.query.cartIds) {
        this.cartIds = this.$router.currentRoute.query.cartIds
        let [err1, res1] = await makeOrderInfo({ cartIds: this.cartIds })
        if (err1) {
          this.goBack(err1)
        }
        if (res1.code === 0) {
          if (res1.data.length === 0) return false
          this.orderInfo = res1.data.orderInfo
          this.$store.dispatch('selectAddr', { selectAddr: res1.data.addressInfo })
          this.makeOrderdDetail()
        } else {
          this.goBack(res1.msg)
        }
      }
    } else if (this.$router.currentRoute.query.isBuyNow) {
      if (this.isBuyNow !== this.$router.currentRoute.query.isBuyNow) {
        this.goodsId = this.$router.currentRoute.query.goodsId
        this.attrIds = this.$router.currentRoute.query.attrIds
        this.num = this.$router.currentRoute.query.num
        this.isBuyNow = this.$router.currentRoute.query.isBuyNow
        let [err2, res2] = await buyNow({ goodsId: this.goodsId, attrIds: this.attrIds, num: this.num })
        if (err2) {
          this.goBack(err2)
        }
        if (res2.code === 0) {
          if (res2.data.length === 0) return false
          this.orderInfo = res2.data.orderInfo
          this.$store.dispatch('selectAddr', { selectAddr: res2.data.addressInfo })
          this.makeOrderdDetail()
        } else {
          this.goBack(res2.msg)
        }
      }
    }
  },
  // onLoad: function (options) {
  //   wx.setNavigationBarTitle({
  //     title: '订单确认'
  //   })
  //   // Do some initialize when page load.
  //   console.log('Page [makeOrder] onLoad')
  // },
  // onReady: function () {
  //   // Do something when page ready.
  //   console.log('Page [makeOrder] onReady')
  // },
  // async onShow () {
  //   // Do something when page show.
  //   console.log('Page [makeOrder] onShow')
  // },
  // onHide: function () {
  //   // Do something when page hide.
  //   console.log('Page [makeOrder] onHide')
  // },
  // onUnload: function () {
  //   // Do something when page close.
  //   console.log('Page [makeOrder] onUnload')
  // },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    goBack (tips) {
      let _this = this
      Toast(tips)
      let t2 = setTimeout(function () {
        _this.$router.back()
        clearTimeout(t2)
      }, 2500)
    },
    toAddrList () {
      this.$router.push('/needLogin/pages/addrList/index')
    },
    makeOrderdDetail: function () {
      let _this = this
      let detail = {}
      let goodsAmount = 0
      let goodsNum = 0
      _this.orderInfo.forEach((item1) => {
        item1.goodsInfo.forEach((item2) => {
          let amount = item2.goodsPrice * item2.goodsNum
          let postFee = item2.delivery.postFee
          let selectDelivery = item2.delivery.post === 0 ? 'inStore' : 'post'
          if (selectDelivery === 'post') {
            amount += postFee
          }
          goodsNum += item2.goodsNum
          goodsAmount += amount
          detail[item2.cartId] = {
            goodsId: item2.goodsId,
            goodsNum: item2.goodsNum,
            goodsPrice: item2.goodsPrice,
            goodsSku: item2.goodsSku,
            selectDelivery: selectDelivery,
            postFee: postFee,
            amount: amount
          }
        })
      })
      _this.goodsAmount = goodsAmount
      _this.goodsNum = goodsNum
      _this.orderDetail = detail
    },
    onSelect (cartId, selectDelivery) {
      let _this = this
      _this.orderDetail[cartId]['selectDelivery'] = selectDelivery
    },
    makeOrder () {
      let data = {}
      let cartIds = []
      let spendType = {}
      if (empty(this.selectAddr) && this.isNeedAddress) {
        Toast('请选择收货地址')
        return false
      }
      let addressId = this.isNeedAddress ? this.selectAddr.addressId : 0
      for (let i in this.orderDetail) {
        cartIds.push(i)
        spendType[i] = this.orderDetail[i]['selectDelivery'] === 'post' ? 2 : 1
      }
      if (this.isBuyNow) {
        data.goodsId = this.goodsId
        data.attrIds = this.attrIds
        data.num = this.num
        data.spendType = spendType['undefined']
        data.addressId = addressId
        this.buyNowCreateOrder(data)
      } else {
        data.cartIds = cartIds.join(',')
        data.spendType = spendType
        data.addressId = addressId
        this.createOrder(data)
      }
    },
    async buyNowCreateOrder (data) {
      let [err, res] = await buyNowCreateOrder(data)
      if (err) {
        Toast(err)
        return false
      }
      if (res.code === 0) {
        // todo 去支付列表
        this.$router.replace({ path: '/needLogin/pages/pay/index', query: { type: '1', data: JSON.stringify(res.data) } })
      } else {
        Toast(res.msg)
      }
    },
    async createOrder (data) {
      let [err, res] = await createOrder(data)
      if (err) {
        Toast(err)
        return false
      }
      if (res.code === 0) {
        // todo 去支付列表
        this.$router.push({ path: '/needLogin/pages/pay/index', query: { type: '1', data: JSON.stringify(res.data) } })
      } else {
        Toast(res.msg)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.makeOrder {
  .address {
    margin-bottom: 30px;
    padding: 40px 30px;
    display: flex;
    align-items: center;
    background-color:#FFF;
    justify-content: space-between;
    .icon {
      margin-left: 30px;
      flex-basis: 40px;
    }
    .content {
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      font-size: 30px;/*px*/
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
  }
  .bottom1 {
    padding: 0 30px;
    position: fixed;
    bottom: 0;
    height: 100px;
    width: 100%;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .select {
      font-size: 30px;/*px*/
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
    .amount {
      display: flex;
      justify-content: flex-start;
      flex-basis: 250px;
      font-size: 30px;/*px*/
      font-family: PingFang-SC-Heavy;
      font-weight: 800;
      color: rgba(255, 77, 70, 1);
      .desc {
        color: black;
      }
    }
    .cal {
      display: flex;
      justify-content: center;
      flex-basis: 300px;
      font-size: 30px;/*px*/
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
<style lang="scss">
page {
  background-color: #f3f4f5;
}
.makeOrder {
  .van-icon--image {
    height: 1.4em;
  }
  .cal{
    .van-button--round {
      width: 200px;
      height: 64px;
      line-height:64px;
      background:linear-gradient(90deg,rgba(255,104,83,1),rgba(255,81,57,1));
      box-shadow:0px 10px 14px 2px rgba(255,77,70,0.3);
    }
  }
}
</style>
