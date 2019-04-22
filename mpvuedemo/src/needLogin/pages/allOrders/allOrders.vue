<template>
  <div class="all-orders">
    <wux-keyboard id="wux-keyboard" ></wux-keyboard>
    <wux-tabs :controlled="false" scroll :defaultCurrent="navFilterC" @change="showNav">
      <wux-tab v-for="(i, index) in navTitleText" :title="i" :key="index" :tabKey="index"></wux-tab>
    </wux-tabs>
    <scroll-view class="scroll-box" v-show="navFilterC === 0">
      <div class="list" v-for="(list, index) in pendingPay" :key="index">
        <orderCard :goodsInfo="list.goodsInfo" :shopInfo="list.shopInfo" :type="'inList'" @orderDetail="orderDetail"></orderCard>
        <!--<button @click="test" :navNum="1" :orderDetails="list" ></button>-->
        <div class="btn-box">
          <van-tag plain round color="#FF4D46" size="large" type="primary" @click="continueToPay(list.shopInfo)">继续付款</van-tag>
          <van-tag plain round color="#A5A4A4" size="large" type="primary" @click="cancelOrder(list.shopInfo)">取消订单</van-tag>
        </div>
      </div>
    </scroll-view>
    <scroll-view class="scroll-box" v-show="navFilterC === 1">
    <div class="list" v-for="(list, index) in pendingDelivered" :key="index">
        <orderCard :goodsInfo="list.goodsInfo" :shopInfo="list.shopInfo" :type="'inList'"  @orderDetail="orderDetail" ></orderCard>
        <div class="btn-box">
          <van-tag plain round color="#FF4D46" size="large" type="primary" @click="cancelOrder(list.shopInfo)">取消订单</van-tag>
        </div>
        <!--<button :navNum="1" :orderDetails="list" ></button>-->
      </div>
    </scroll-view>
    <scroll-view class="scroll-box" v-show="navFilterC === 2">
      <div class="list" v-for="(list, index) in pendingConsumption" :key="index">
        <orderCard :goodsInfo="list.goodsInfo" :shopInfo="list.shopInfo" :type="'inList'"  @orderDetail="orderDetail" ></orderCard>
        <div class="btn-box">
          <van-tag plain round color="#FF4D46" size="large" type="primary" v-if="list.shopInfo.status === 11 && navFilterC === 2" @click="orderCode(list.shopInfo)">订单二维码</van-tag>
          <van-tag plain round color="#A5A4A4" size="large" type="primary" @click="cancelOrder(list.shopInfo)">取消订单</van-tag>
        </div>
        <!--<button :navNum="2" :orderDetails="list" ></button>-->
      </div>
    </scroll-view>
    <scroll-view class="scroll-box" v-show="navFilterC === 3">
      <div class="list" v-for="(list, index) in pendingReceipt" :key="index">
        <orderCard :goodsInfo="list.goodsInfo" :shopInfo="list.shopInfo" :type="'inList'" @orderDetail="orderDetail" ></orderCard>
        <div class="btn-box">
          <van-tag plain round color="#A5A4A4" size="large" type="primary" @click="refund(list.shopInfo)">退款</van-tag>
          <van-tag plain round color="#A5A4A4" size="large" type="primary" @click="showLogistics(list.shopInfo)">查看物流</van-tag>
          <van-tag plain round color="#FF4D46" size="large" type="primary" @click="confirmReceipt(list.shopInfo)">确认收货</van-tag>
        </div>
        <!--<button :navNum="3" :orderDetails="list" ></button>-->
      </div>
    </scroll-view>
    <scroll-view class="scroll-box" v-show="navFilterC === 4">
      <div class="list" v-for="(list, index) in pendingComment" :key="index">
        <orderCard :goodsInfo="list.goodsInfo" :shopInfo="list.shopInfo" :type="'inList'" @orderDetail="orderDetail" ></orderCard>
        <div class="btn-box">
          <van-tag plain round color="#A5A4A4" size="large" type="primary" @click="refund(list.shopInfo)">退货</van-tag>
          <van-tag plain round color="#FF4D46" size="large" type="primary" @click="evaluation(list.shopInfo)">评价</van-tag>
        </div>
        <!--<button :navNum="4" :orderDetails="list" ></button>-->
      </div>
    </scroll-view>
    <scroll-view class="scroll-box" v-show="navFilterC === 5">
      <div class="list" v-for="(list, index) in completed" :key="index">
        <orderCard :goodsInfo="list.goodsInfo" :shopInfo="list.shopInfo" :type="'inList'" @orderDetail="orderDetail" ></orderCard>
        <div class="btn-box">
          <van-tag plain round color="#FF4D46" size="large" type="primary" v-if="list.shopInfo.status === 4 && navFilterC === 5" @click="refund(list.shopInfo)">退货</van-tag>
          <van-tag plain round color="#FF4D46" size="large" type="primary" @click="evaluation(list.shopInfo)">评价</van-tag>
        </div>
        <!--<button :navNum="5" :orderDetails="list" ></button>-->
      </div>
    </scroll-view>
    <loadMore :isloading="loadingMoreKey" />
    <logistics ref="log" ></logistics>
    <van-toast id="van-toast" />
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import orderCard from '@/components/orderCard'
import md5 from 'js-md5'
import { $wuxKeyBoard } from '@/static/wux-weapp/index'
import '@/static/css/public.scss'
import button from '@/components/Button'
import LoadMore from '@/components/LoadMore'
import logistics from '../logisticsDetails/logisticsDetails'
import { getPendingPay, cancelTheOrder, confirmReceipt, checkSecondPwd } from '@/service/getData'
import empty from 'is-empty'
import { createNamespacedHelpers } from 'vuex'
import Toast from '@/static/vant-weapp/toast/toast'
import Dialog from '@/static/vant-weapp/dialog/dialog'
const { mapState } = createNamespacedHelpers('allOrders')

export default {
  components: {
    orderCard,
    logistics,
    LoadMore,
    button
  },
  data () {
    return {
      navTitleText: ['待付款', '待发货', '待消费', '待收货', '待评价', '已完成'],
      navNum: null,
      navFilterC: 0,
      pendingPay: [], // 待付款
      pendingPayLastId: 0,
      pendingPayNoMore: false,
      pendingDelivered: [], // 待发货
      pendingDeliveredLastId: 0,
      pendingDeliveredNoMore: false,
      pendingConsumption: [], // 待消费
      pendingConsumptionLastId: 0,
      pendingConsumptionNoMore: false,
      pendingReceipt: [], // 待收货
      pendingReceiptLastId: 0,
      pendingReceiptNoMore: false,
      pendingComment: [], // 待评价
      pendingCommentLastId: 0,
      pendingCommentNoMore: false,
      completed: [], // 已完成
      completedLastId: 0,
      completedNoMore: false,
      loadingMoreKey: false,
      orderId: null
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [allOrders] Vue beforeCreate')
  },
  async created () {
    this.navFilterC = Number(this.$route.query.navIndex || 0)
    this.getTheList({ type: this.navFilterC })
    this.navNum = this.navFilterC
  },
  beforeMount () {
    console.log('Page [allOrders] Vue beforeMount')
  },
  mounted () {
    console.log('Page [allOrders] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的订单'
    })
    // Do some initialize when page load.
    console.log('Page [allOrders] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [allOrders] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [allOrders] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [allOrders] onHide')
  },
  onUnload: function () {
    // this.$store.commit('allOrders/cleanInfo', [])
    // Do something when page close.
    console.log('Page [allOrders] onUnload')
  },
  onReachBottom () {
    let lastId
    switch (this.navFilterC) {
      case 0:
        if (this.pendingPayNoMore) {
          Toast('没有更多了')
          return false
        }
        lastId = this.pendingPayLastId
        break
      case 1:
        if (this.pendingDeliveredNoMore) {
          Toast('没有更多了')
          return false
        }
        lastId = this.pendingDeliveredLastId
        break
      case 2:
        if (this.pendingConsumptionNoMore) {
          Toast('没有更多了')
          return false
        }
        lastId = this.pendingConsumptionLastId
        break
      case 3:
        if (this.pendingReceiptNoMore) {
          Toast('没有更多了')
          return false
        }
        lastId = this.pendingReceiptLastId
        break
      case 4:
        if (this.pendingCommentNoMore) {
          Toast('没有更多了')
          return false
        }
        lastId = this.pendingCommentLastId
        break
      case 5:
        if (this.completedNoMore) {
          Toast('没有更多了')
          return false
        }
        lastId = this.completedLastId
        break
    }
    this.getTheList({ type: this.navFilterC, lastId: lastId })
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    showNav (i) {
      this.navFilterC = Number(i.detail.tabKey)
      if (this.navNum !== this.navFilterC) {
        this.getTheList({ type: this.navFilterC })
        this.navNum = this.navFilterC
      }
    },
    showLogistics () { // 查看物流消息
      this.$refs.log.onClose()
    },
    async getTheList  (data = {}) {
      let _this = this
      switch (data.type) {
        case 0:
          data.type = 0
          _this.loadingMoreKey = true
          let [err, res] = await getPendingPay(data)
          console.log(res)
          _this.loadingMoreKey = false
          if (err) {
            Toast(err)
            return false
          }
          if (res.code === 0) {
            if (res.data.orderInfo.length === 0) {
              _this.pendingPayNoMore = true
              Toast('没有更多了')
              return false
            }
            if (empty(data.lastId)) {
              console.log(res.data.orderInfo)
              _this.pendingPay = res.data.orderInfo
            } else {
              console.log(22)
              _this.pendingPay = [_this.pendingPay, ...res.data.orderInfo]
            }
            console.log(_this.pendingPay)
            _this.pendingPayLastId = res.data.lastId
          } else {
            Toast(res.data.msg)
          }
          break
        case 1:
          data.type = 1
          _this.loadingMoreKey = true
          let [err1, res1] = await getPendingPay(data)
          _this.loadingMoreKey = false
          if (err1) {
            Toast(err1)
            return false
          }
          if (res1.code === 0) {
            if (res1.data.orderInfo.length === 0) {
              Toast('没有更多了')
              _this.pendingDeliveredNoMore = true
              return false
            }
            if (empty(data.lastId)) {
              _this.pendingDelivered = res1.data.orderInfo
            } else {
              _this.pendingDelivered = [_this.pendingDelivered, ...res1.data.orderInfo]
            }
            _this.pendingDeliveredLastId = res1.data.lastId
          } else {
            Toast(res1.data.msg)
          }
          break
        case 2:
          data.type = 5
          _this.loadingMoreKey = true
          let [err2, res2] = await getPendingPay(data)
          _this.loadingMoreKey = false
          if (err2) {
            Toast(err2)
            return false
          }
          if (res2.code === 0) {
            if (res2.data.orderInfo.length === 0) {
              Toast('没有更多了')
              _this.pendingConsumptionNoMore = true
              return false
            }
            if (empty(data.lastId)) {
              _this.pendingConsumption = res2.data.orderInfo
            } else {
              _this.pendingConsumption = [_this.pendingConsumption, ...res2.data.orderInfo]
            }
            _this.pendingConsumptionLastId = res2.data.lastId
          } else {
            Toast(res2.data.msg)
          }
          break
        case 3:
          data.type = 2
          _this.loadingMoreKey = true
          let [err3, res3] = await getPendingPay(data)
          _this.loadingMoreKey = false
          if (err3) {
            Toast(err3)
            return false
          }
          if (res3.code === 0) {
            if (res3.data.orderInfo.length === 0) {
              Toast('没有更多了')
              _this.pendingReceiptNoMore = true
              return false
            }
            if (empty(data.lastId)) {
              _this.pendingReceipt = res3.data.orderInfo
            } else {
              _this.pendingReceipt = [_this.pendingReceipt, ...res3.data.orderInfo]
            }
            _this.pendingReceiptLastId = res3.data.lastId
          } else {
            Toast(res3.data.msg)
          }
          break
        case 4:
          data.type = 3
          _this.loadingMoreKey = true
          let [err4, res4] = await getPendingPay(data)
          _this.loadingMoreKey = false
          if (err4) {
            Toast(err4)
            return false
          }
          if (res4.code === 0) {
            if (res4.data.orderInfo.length === 0) {
              Toast('没有更多了')
              _this.pendingCommentNoMore = true
              return false
            }
            if (empty(data.lastId)) {
              _this.pendingComment = res4.data.orderInfo
            } else {
              _this.pendingComment = [_this.pendingComment, ...res4.data.orderInfo]
            }
            _this.pendingCommentLastId = res4.data.lastId
          } else {
            Toast(res4.data.msg)
          }
          break
        case 5:
          data.type = 4
          _this.loadingMoreKey = true
          let [err5, res5] = await getPendingPay(data)
          _this.loadingMoreKey = false
          if (err5) {
            Toast(err5)
            return false
          }
          if (res5.code === 0) {
            if (res5.data.orderInfo.length === 0) {
              Toast('没有更多了')
              _this.pendingCommentNoMore = true
              return false
            }
            if (empty(data.lastId)) {
              _this.completed = res5.data.orderInfo
            } else {
              _this.completed = [_this.completed, ...res5.data.orderInfo]
            }
            _this.completedLastId = res5.data.lastId
          } else {
            Toast(res5.data.msg)
          }
          break
      }
    },
    orderDetail (info) { // 跳转订单详情
      this.$router.push({ path: '/needLogin/pages/orderDetails/index', query: { orderStoreId: info.orderStoreId, navNum: this.navFilterC, status: info.status } })
    },
    continueToPay (listInfo) { // 继续付款
      this.$router.push({ path: '/needLogin/pages/pay/index', query: { orderStoreId: listInfo.orderStoreId, type: '2' } })
    },
    cancelOrder (listInfo) { // 取消订单
      this.orderId = listInfo.orderStoreId
      if (this.navFilterC === 0) {
        Dialog.confirm({
          title: '取消订单',
          message: '是否取消订单'
        }).then(async () => {
          // on confirm
          console.log('confirm')
          let [err, res] = await cancelTheOrder({ orderStoreId: this.orderId })
          if (err) {
            Toast(err)
          }
          if (res.code === 0) {
            Toast(res.msg)
            this.getTheList({ type: this.navFilterC })
          } else {
            Toast(res.msg)
          }
        }).catch(() => {
          console.log('cancel')
          // on cancel
        })
      } else {
        this.$router.push({ path: '/needLogin/pages/cancelOrder/index', query: { orderStoreId: listInfo.orderStoreId } })
      }
    },
    orderCode (listInfo) { // 订单二维码
      console.log(listInfo)
      this.$router.push({ path: '/needLogin/pages/orderQrCode/index', query: { orderStoreId: listInfo.orderStoreId, price: listInfo.storePrice, orderNum: listInfo.orderSn } })
    },
    refund (listInfo) { // 退款
      console.log(listInfo)
      this.$router.push({ path: '/needLogin/pages/cancelOrder/index', query: { orderStoreId: listInfo.orderStoreId } })
    },
    async confirmReceipt (listInfo) { // 确认收货
      $wuxKeyBoard().show({
        className: 'keyBoard',
        titleText: '',
        cancelText: '取消',
        inputText: '请输入密码',
        showCancel: true,
        disorder: false,
        maxlength: 6,
        async callback (value) {
          wx.showLoading({
            title: '验证支付密码'
          })
          let secpwd = md5(value)
          let [err, res] = await checkSecondPwd({ secpwd })
          wx.hideLoading()
          if (err) {
            Toast(err)
          }
          if (res.code === 0) {
            Toast('密码正确')
            let [err, res] = await confirmReceipt({ orderStoreId: listInfo.orderStoreId })
            if (err) {
              Toast(err)
            }
            if (res.code === 0) {
              Toast(res.msg)
            } else {
              Toast(res.msg)
            }
          } else {
            Toast(res.msg)
          }
        }
      })
    },
    evaluation (listInfo) { // 评价
      console.log(listInfo)
      this.$router.push({ path: '/needLogin/pages/productReview/index', query: { orderStoreId: listInfo.orderStoreId } })
    },
    test () {
      console.log('test')
    },
    test2 () {
      console.log('test2')
    }
  }
}
</script>
<style lang="scss">
.all-orders{
  .scroll-box {
    padding-top: 20px;
    .list {
      padding-bottom: 20px;
      .btn-box {
        background-color: #fff;
        height: 80px;
        padding-right: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
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
  .nav-filter {
    background-color: #fff;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    flex-wrap: nowrap;
    font-size:30px;/*px*/
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(153,153,153,1);
    .complex-box {
      display: flex;
      align-items: stretch;
      position: relative;
      .complex-l {
        display: flex;
        justify-content: center;
        align-items: center;
        .complex {
          display: flex;
          align-items: center;
        }
        .navClickIcon {
          width:42px;
          height:6px;
          background:linear-gradient(90deg,rgba(255,104,83,1),rgba(255,81,57,1));
          border-radius:3px;
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: -21px;
        }
      }

      .price-filter {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 22px;
        margin-left: 5px;
        .top{
          width: 0;
          height: 0;
          border-width: 14px;
          border-style: solid;
          border-color: transparent transparent #E5E5E5 transparent;
        }
        .bottom {
          width: 0;
          height: 0;
          border-width: 14px;
          border-style: solid;
          border-color: #E5E5E5 transparent transparent transparent;
        }
      }
    }
    .navFilterClick {
      font-size:30px;/*px*/
      font-family:PingFang-SC-Heavy;
      font-weight:800;
      color:rgba(51,51,51,1);
    }
  }
}
.wux-tabs__tab--balanced .wux-tabs__tab-bar {
  background:#FF6853!important;
  width:48px;
  height:6px;
  left:50%;
  margin-left:-24rpx;
  border-radius: 10px;
  bottom: 6px;
}
  .wux-tabs__tab {
    font-size:30px!important;/*px*/
    font-family:PingFang-SC-Medium!important;
    font-weight:500!important;
    color:#A5A4A4!important;
  }
  .van-transition {
    background-color: rgba(0,0,0,0.5)!important;
  }
  .van-button--default {
    color: #FF4D46!important;
  }
  .wux-tabs__tab--balanced.wux-tabs__tab--current{
    color:#333!important;
    font-family:PingFang-SC-Heavy!important;
    font-weight:800!important;
  }
</style>
