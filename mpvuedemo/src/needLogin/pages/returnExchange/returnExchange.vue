<template>
  <div class="exchange-app">
    <wux-tabs :controlled="false" :defaultCurrent="navFilterC" @change="navFilter">
      <wux-tab v-for="(i, index) in navTxt" :title="i" :key="index" :tabKey="index"></wux-tab>
    </wux-tabs>
    <scroll-view class="scroll-box" v-show="navFilterC === 0">
      <div class="order-box" v-for="(list, index) in pendingRefundArr" :key="index">
        <orderCard :goodsInfo="list.goodsInfo" :shopInfo="list.shopInfo" :type="'inList'" @orderDetail="orderDetail"></orderCard>
        <div class="btn-box">
          <van-tag plain round color="#FF4D46" size="large" type="primary" v-if="list.shopInfo.status === -6 && statusType === 6" @click="platformAppeal(list.shopInfo)">平台申诉</van-tag>
          <van-tag plain round color="#A5A4A4" size="large" type="primary" @click="cancelRefund(list.shopInfo)">取消退款</van-tag>
        </div>
      </div>
    </scroll-view>
    <scroll-view class="scroll-box" v-show="navFilterC === 1">
      <div class="order-box" v-for="(list, index) in refundedArr" :key="index">
        <orderCard :goodsInfo="list.goodsInfo" :shopInfo="list.shopInfo" :type="'inList'" @orderDetail="orderDetail"></orderCard>
      </div>
    </scroll-view>
    <scroll-view class="scroll-box" v-show="navFilterC === 2">
      <div class="order-box" v-for="(list, index) in appealingArr" :key="index">
        <orderCard :goodsInfo="list.goodsInfo" :shopInfo="list.shopInfo" :type="'inList'" @orderDetail="orderDetail"></orderCard>
        <div class="btn-box">
          <van-tag plain round color="#FF4D46" size="large" type="primary" @click="cancelAppeal(list.shopInfo)">取消申诉</van-tag>
        </div>
      </div>
    </scroll-view>
    <van-toast  id="van-toast" />
    <LoadMore v-show="loadingMoreKey"></LoadMore>
  </div>
</template>

<script>
import '@/static/css/public.scss'
import orderCard from '@/components/orderCard.vue'
import { getPendingPay, cancelRefund, cancelPlatform } from '@/service/getData'
import LoadMore from '@/components/LoadMore'
import empty from 'is-empty'
import Toast from '@/static/vant-weapp/toast/toast'
import Button from '@/components/Button'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('returnExchange')

export default {
  components: {
    orderCard,
    Button,
    LoadMore
  },
  data () {
    return {
      current: 'tab1',
      navFilterC: 0,
      navNum: null,
      statusType: null, // 请求列表类型区分,6,7,8
      loadingMoreKey: false,
      navTxt: ['待退款', '已退款', '申诉中'],
      btnTypes: [],
      pendingRefundArr: [], // 待退款
      pendingRefundArrKey: false,
      pendingRefundArrLastId: null,
      refundedArr: [], // 已退款
      refundedArrKey: false,
      refundedArrLastId: null,
      appealingArr: [], // 申诉中
      appealingArrKey: false,
      appealingArrLastId: null
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [returnExchange] Vue beforeCreate')
  },
  created () {
    // this.onReachBottom()
    this.onChange({ type: this.navFilterC })
    this.navNum = this.navFilterC
    console.log('Page [returnExchange] Vue created')
  },
  beforeMount () {
    console.log('Page [returnExchange] Vue beforeMount')
  },
  mounted () {
    console.log('Page [returnExchange] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的订单'
    })
    // Do some initialize when page load.
    console.log('Page [returnExchange] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [returnExchange] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [returnExchange] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [returnExchange] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    // 清空数据
    console.log('Page [returnExchange] onUnload')
  },
  onReachBottom () {
    let lastId = null
    switch (this.navFilterC) {
      case 0:
        if (this.pendingRefundArrKey) {
          Toast('没有更多了')
          return false
        }
        lastId = this.pendingRefundArrLastId
        break
      case 1:
        if (this.refundedArrKey) {
          Toast('没有更多了')
          return false
        }
        lastId = this.refundedArrLastId
        break
      case 2:
        if (this.appealingArrKey) {
          Toast('没有更多了')
          return false
        }
        lastId = this.appealingArrLastId
        break
    }
    this.onChange({ type: this.navFilterC, lastId: lastId })
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    onChange: async function (data = {}) {
      let _this = this
      switch (_this.navFilterC) {
        case 0:
          _this.statusType = 6
          data.type = _this.statusType
          _this.loadingMoreKey = true
          let [err, res] = await getPendingPay(data)
          _this.loadingMoreKey = false
          if (err) {
            Toast(err)
          }
          if (res.code === 0) {
            if (res.data.orderInfo.length === 0) {
              _this.pendingRefundArrKey = true
              Toast('没有更多了')
              return false
            }
            if (empty(data.lastId)) {
              _this.pendingRefundArr = res.data.orderInfo
            } else {
              _this.pendingRefundArr = [_this.pendingRefundArr, ...res.data.orderInfo]
            }
            _this.pendingRefundArrLastId = res.data.lastId
          }
          break
        case 1:
          _this.statusType = 7
          data.type = _this.statusType
          _this.loadingMoreKey = true
          let [err1, res1] = await getPendingPay(data)
          _this.loadingMoreKey = false
          if (err1) {
            Toast(err1)
          }
          if (res1.code === 0) {
            if (res1.data.orderInfo.length === 0) {
              _this.refundedArrKey = true
              Toast('没有更多了')
              return false
            }
            if (empty(data.lastId)) {
              _this.refundedArr = res1.data.orderInfo
            } else {
              _this.refundedArr = [_this.refundedArr, ...res1.data.orderInfo]
            }
            _this.refundedArrLastId = res1.data.lastId
          }
          break
        case 2:
          _this.statusType = 8
          data.type = _this.statusType
          _this.loadingMoreKey = true
          let [err2, res2] = await getPendingPay(data)
          _this.loadingMoreKey = false
          if (err2) {
            Toast(err2)
          }
          if (res2.code === 0) {
            if (res2.data.orderInfo.length === 0) {
              _this.appealingArrKey = true
              Toast('没有更多了')
              return false
            }
            if (empty(data.lastId)) {
              _this.appealingArr = res2.data.orderInfo
            } else {
              _this.appealingArr = [_this.appealingArr, ...res2.data.orderInfo]
            }
            _this.appealingArrLastId = res2.data.lastId
          }
          break
      }
    },
    navFilter (e) {
      this.navFilterC = Number(e.detail.tabKey)
      if (this.navNum === this.navFilterC) {
        return false
      } else {
        this.onChange({ type: this.navFilterC })
        this.navNum = this.navFilterC
      }
    },
    async cancelAppeal (listInfo) { // 取消申诉
      console.log(listInfo)
      Toast('请求申诉接口')
      let [err, res] = await cancelPlatform({ orderStoreId: listInfo.orderStoreId })
      if (err) {
        Toast(err)
      }
      if (res.code === 0) {
        Toast(res.msg)
      } else {
        Toast(res.msg)
      }
    },
    cancelRefund: async function (listInfo) { // 取消退款 //
      console.log(listInfo)
      let [err, res] = await cancelRefund({ orderStoreId: listInfo.orderStoreId })
      if (err) {
        Toast(err)
      }
      if (res.code === 0) {
        Toast(res.msg)
      } else {
        Toast(res.msg)
      }
    },
    platformAppeal: async function (listInfo) { // 平台申诉 //
      console.log(listInfo)
      this.$router.push({ path: '/needLogin/pages/platformAppeal/index', query: { orderStoreId: listInfo.orderStoreId } })
    },
    orderDetail (info) { // 跳转订单详情
      this.$router.push({ path: '/needLogin/pages/orderDetails/index', query: { orderStoreId: info.orderStoreId, navNum: this.navFilterC, status: info.status } })
      console.log('跳转到订单详情')
    },
    test1 () {
      console.log('123')
    },
    test2 () {
      console.log('abc')
    },
    btnRefundFunc () {
      console.log('ert')
    },
    btnPlatformFunc (data = {}) {
      console.log('erssss')
      console.log(data.id)
    }
  }
}
</script>
<style lang="scss">

.exchange-app {
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*align-items: stretch;*/
  .nav-filter {
    height: 80px;
    width: 100%;
    background-color: #fff;
    .complex-box {
      display: flex;
      align-items: stretch;
      justify-content: space-around;
      height: 100%;
      .com-box {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .complex {
          font-size: 30px; /*px*/
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(165, 164, 164, 1);
        }
        .navC {
          font-family: PingFang-SC-Heavy;
          font-weight: 800;
          color: rgba(51, 51, 51, 1);
        }
        .navIconClick {
          position: absolute;
          width: 48px;
          height: 6px;
          background: linear-gradient(
            90deg,
            rgba(255, 104, 83, 1),
            rgba(255, 81, 57, 1)
          );
          border-radius: 3px;
          bottom: 0;
          left: 0;
          margin-left: 24px;
        }
      }
    }
  }
  .scroll-box {
    width: 100%;
    padding-bottom: 20px;
    .order-box {
      padding-top: 20px;
      .btn-box {
        background-color: #fff;
        height: 80px;
        padding-right: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        van-tag {
          padding-left: 30px;
          .van-tag {
            min-width:130px;
            display:flex;
            justify-content:center;
            align-items: center;
            border-radius: 24px!important;
          }
        }
      }
    }
  }
}
.wux-tabs__tab--balanced .wux-tabs__tab-bar {
  background:#FF6853!important;
  width:48px;
  height:6px;
  left:50%;
  margin-left:-24rpx;
  bottom: 6px;
}
.wux-tabs__tab {
  font-size:30px!important;/*px*/
  font-family:PingFang-SC-Medium!important;
  font-weight:500!important;
  color:#A5A4A4!important;
}
.wux-tabs__tab--balanced.wux-tabs__tab--current{
  color:#333!important;
  font-family:PingFang-SC-Heavy!important;
  font-weight:800!important;
}
</style>
