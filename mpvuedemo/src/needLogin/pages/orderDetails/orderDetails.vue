<template>
  <div class="order-details">
    <wux-keyboard id="wux-keyboard" ></wux-keyboard>
    <wux-actionsheet id="wux-actionsheet" ></wux-actionsheet>
    <div class="order-card">
      <div v-for="(info, index) in shopInfo" :key="index">
        <orderCard :goodsInfo="info.goodsInfo" :shopInfo="info.shopInfo" :type="'inDetails'" :navNum="navNum" ></orderCard>
      </div>
    </div>
    <div class="shipment" v-if="orderSn !== ''">
      <div class="shipment-txt">物流单号：<i class="shipment-num">{{ orderSn }}</i></div>
      <van-tag plain round color="#F39D21" size="large" type="primary" @click="copy">复制</van-tag>
    </div>
    <div class="order-content">
      <div class="request" v-for="(list, index1) in otherData" :key="index1">
        <div class="request-time" v-for="(li, index2) in list" :key="index2">
          <div class="request-txt">{{ li.name }}</div>
          <div class="request-time-txt">{{ li.val }}</div>
          <div class="img-box" v-if="li.image">
            <img lazy-load="true"  class="img" v-for="(i, index3) in li.image" :key="index3" :src="i" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-btn">
      <van-tag plain round v-if="btnContinue" :color="btnContinueColor" size="large" type="primary" @click="continueToPay(info)">继续付款</van-tag>
      <van-tag plain round v-if="btnOrderCode" :color="btnOrderCodeColor" size="large" type="primary" @click="orderCode(info)">订单二维码</van-tag>
      <van-tag plain round v-if="btnCancelOrder" :color="btnCancelOrderColor" size="large" type="primary" @click="cancelOrder(info)">取消订单</van-tag>
      <van-tag plain round v-if="btnAppeal" :color="btnAppealColor" size="large" type="primary" @click="cancelAppeal(info)">取消申诉</van-tag>
      <van-tag plain round v-if="btnRefund" :color="btnRefundColor" size="large" type="primary" @click="cancelRefund(info)">取消退款</van-tag>
      <van-tag plain round v-if="btnReturnGoods" :color="btnReturnGoodsColor" size="large" type="primary" @click="refund(info)">退款</van-tag>
      <van-tag plain round v-if="btnLogistics" :color="btnLogisticsColor" size="large" type="primary" @click="showLogistics(info)">查看物流</van-tag>
      <van-tag plain round v-if="btnConfirm" :color="btnConfirmColor" size="large" type="primary" @click="confirmReceipt(info)">确认收货</van-tag>
      <van-tag plain round v-if="btnPlatform" :color="btnPlatformColor" size="large" type="primary" @click="platformAppeal(info)">平台申诉</van-tag>
      <van-tag plain round v-if="btnEval" :color="btnEvalColor" size="large" type="primary" @click="evaluation(info)">评价</van-tag>
    </div>
    <logistics ref="log" ></logistics>
    <van-dialog id="van-dialog" />
    <van-toast  id="van-toast" />
  </div>
</template>

<script>
import '@/static/css/public.scss'
import md5 from 'js-md5'
// import { $wuxKeyBoard, $wuxActionSheet } from '@/static/wux-weapp/index'
import { $wuxKeyBoard } from '@/static/wux-weapp/index'
import logistics from '../logisticsDetails/logisticsDetails'
import Toast from '@/static/vant-weapp/toast/toast'
import { cancelTheOrder, getOrderDetails, cancelRefund, confirmReceipt, checkSecondPwd } from '@/service/getData'
import orderCard from '@/components/orderCard'
import { createNamespacedHelpers } from 'vuex'
import Dialog from '@/static/vant-weapp/dialog/dialog'
const { mapState } = createNamespacedHelpers('orderDetails')
export default {
  components: {
    orderCard,
    logistics
  },
  data () {
    return {
      info: null,
      shopInfo: [],
      orderId: null,
      status: null,
      orderSn: null, // 订单号
      otherData: null,
      navNum: null,
      btnContinue: false, // 继续付款
      btnContinueColor: '',
      btnOrderCode: false, // 订单二维码
      btnOrderCodeColor: '',
      btnRefund: false, // 取消退款
      btnRefundColor: '',
      btnAppeal: false, // 取消申诉
      btnAppealColor: '',
      btnCancelOrder: false, // 取消订单
      btnCancelOrderColor: '',
      btnReturnGoods: false, // 退货
      btnReturnGoodsColor: '',
      btnEval: false, // 评价
      btnEvalColor: '',
      btnConfirm: false, // 确认收货
      btnConfirmColor: '',
      btnPlatform: false, // 平台申诉
      btnPlatformColor: '',
      btnLogistics: false, // 查看物流
      btnLogisticsColor: ''
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [orderDetails] Vue beforeCreate')
  },
  async created () {
    console.log(this.$route.query)
    this.orderId = this.$route.query.orderStoreId
    this.status = Number(this.$route.query.status)
    this.navNum = Number(this.$route.query.navNum)
    console.log('this.status ==== ' + this.status)
    console.log('this.status ==== ' + typeof this.status)
    // 检查navNum 的类型显示按钮
    switch (this.navNum) {
      case 0:
        this.btnContinue = true
        this.btnContinueColor = '#FF4D46'
        this.btnCancelOrder = true
        this.btnCancelOrderColor = '#A5A4A4'
        break
      case 1:
        this.btnCancelOrder = true
        this.btnCancelOrderColor = '#FF4D46'
        break
      case 2:
        this.btnCancelOrder = true
        this.btnCancelOrderColor = '#A5A4A4'
        if (this.status === 11) {
          this.btnOrderCode = true
          this.btnOrderCodeColor = '#A5A4A4'
        }
        break
      case 3:
        this.btnReturnGoods = true
        this.btnReturnGoodsColor = '#A5A4A4'
        this.btnLogistics = true
        this.btnLogisticsColor = '#A5A4A4'
        this.btnConfirm = true
        this.btnConfirmColor = '#FF4D46'
        break
      case 4:
        this.btnReturnGoods = true
        this.btnReturnGoodsColor = '#A5A4A4'
        this.btnEval = true
        this.btnEvalColor = '#FF4D46'
        break
      case 5:
        this.btnReturnGoods = true
        this.btnReturnGoodsColor = '#A5A4A4'
        break
      case 6:
        this.btnCancelOrder = true
        this.btnCancelOrderColor = '#A5A4A4'
        if (this.status === -6) {
          this.btnPlatform = true
          this.btnPlatformColor = '#FF4D46'
        }
        break
      case 7:
        break
      case 8:
        this.btnCancelOrder = true
        this.btnCancelOrderColor = '#A5A4A4'
        break
    }
    this.getOrderDetails(this.orderId)
    console.log('Page [orderDetails] Vue created')
  },
  beforeMount () {
    console.log('Page [orderDetails] Vue beforeMount')
  },
  mounted () {
    console.log('Page [orderDetails] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单详情'
    })
    // Do some initialize when page load.
    console.log('Page [orderDetails] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [orderDetails] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [orderDetails] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [orderDetails] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [orderDetails] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    copy () {
      wx.setClipboardData({
        data: '这里为复制的内容',
        success: function (res) {
          console.log(res)
        }
      })
    },
    showActionSheet () {
      this.showCancelOrder = true
    },
    test () {
      console.log('test')
    },
    subReturn () {
      Toast('等待商家确认')
    },
    async getOrderDetails (id) {
      console.log(id)
      let [err, res] = await getOrderDetails({ orderStoreId: id })
      if (err) {
        Toast(err)
        return false
      }
      console.log(res)
      if (res.code === 0) {
        let obj = {}
        this.info = res.data.shopInfo
        obj['goodsInfo'] = res.data.goodsInfo
        obj['shopInfo'] = res.data.shopInfo
        console.log(obj)
        this.shopInfo.push(obj)
        this.otherData = res.data.otherData
        this.orderSn = this.info.logisticsNumber
        console.log(this.shopInfo)
      } else {
        Toast(res.msg)
      }
    },
    continueToPay (info) { // 继续付款
      this.$router.push({ path: '/needLogin/pages/pay/index', query: { orderStoreId: info.orderStoreId, type: '2' } })
      console.log(info)
    },
    cancelOrder (listInfo) { // 取消订单
      this.orderId = listInfo.orderStoreId
      if (this.navNum === 0) {
        // Toast('未付款取消订单')
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
            this.getTheList({ status: this.navFilterC })
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
    platformAppeal (listInfo) { // 平台申诉
      console.log(listInfo)
      this.$router.push({ path: '/needLogin/pages/platformAppeal/index', query: { orderStoreId: listInfo.orderStoreId } })
    },
    cancelAppeal (listInfo) { // 取消申诉
      console.log(listInfo)
    },
    cancelRefund: async function (listInfo) { // 取消退款
      console.log(listInfo)
      let [err, res] = await cancelRefund({ orderStoreId: listInfo.orderStoreId })
      console.log(err, res)
      if (err) {
        Toast(err)
      }
      if (res.code === 0) {
        Toast(res.msg)
        Toast('需要返回上一页')
      } else {
        Toast(res.msg)
      }
    },
    refund (listInfo) { // 退款
      console.log(listInfo)
      this.$router.push({ path: '/needLogin/pages/cancelOrder/index', query: { orderStoreId: listInfo.orderStoreId } })
    },
    showLogistics (listInfo) { // 查看物流消息
      this.$refs.log.onClose({ orderStoreId: listInfo.orderStoreId, shipmentNum: listInfo.logisticsNumber })
    },
    evaluation (listInfo) { // 评价
      console.log(listInfo)
      this.$router.push({ path: '/needLogin/pages/productReview/index', query: { orderStoreId: listInfo.orderStoreId } })
    }
  }
}
</script>
<style lang="scss">

.order-details{
  margin-bottom: 100px;
  ._wux-keyboard {
    .wux-keyboard__numbers{
      background-color: #d2d3d7;
      padding: 0 0 2% 2%;
      .wux-keyboard__number {
        .wux-keyboard__text {
          margin: 2% 2% 0 0;
          background-color: #fff;
        }
      }
    }
  }
  .order-card {
    /*margin-bottom: 20px;*/
  }
  .shipment {
    background-color: #fff;
    height: 80px;
    font-size:28px;/*px*/
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    .shipment-txt {
      color: #333333;
      .shipment-num {
        display: inline-block;
        color: #A5A4A4;
      }
    }
    van-tag {
      font-size:24px;/*px*/
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(243,157,33,1);
    }

  }
  .order-content {
    margin-top: 20px;
    padding: 0 20px ;
    background-color: #fff;
    view:last-child {
      /*border-bottom: none;*/
    }
    .receipt, .pay, .delivery, .request, .shipping{
      font-size:28px;/*px*/
      font-family:PingFang-SC-Bold;
      border-bottom: 1px solid #F3F4F5;
      padding: 25px 0;
      padding-left: 10px;
      .shipping-address,
      .order-time,
      .pay-type,
      .pattern,
      .delivery-time,
      .request-time,
      .request-reason,
      .ship-methods,
      .ship-num,
      .evaluation {
        display: flex;
        justify-content: start;
        align-items: flex-start;
        line-height: 45px;/*px*/
        .address-txt,
        .order-txt,
        .pay-txt,
        .pattern-txt,
        .delivery-txt,
        .request-txt,
        .request-txt,
        .ship-txt,
        .ship-num-txt,
        .eval-txt{
          /*width: 25%;*/
          padding-right: 20px;
          white-space: nowrap;
          color: #333333;
          font-weight:bold;
        }
        .address-name,
        .order-time-txt ,
        .pay-name,
        .pattern-type,
        .delivery-time-txt,
        .request-time-txt,
        .ship-methods-txt,
        .ship-n,
        .request-reason-txt,
        .eval-time{
          color: #A5A4A4;
        }
        .img-box {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding-top: 30px;
          .img {
            width: 226px;
            height: 180px;
            padding: 6px;
          }
        }
      }

    }
    .request {
      border-bottom: none;
    }
    .shipping {
      padding-top: 0;
    }
  }
  .bottom-btn {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    van-tag {
      padding-right: 30px;
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
</style>
