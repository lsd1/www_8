<template>
  <div class="order-code">
    <div class="code-box">
      <wux-qrcode
        id="qrcode"
        wux-class="qrcode"
        :data="orderStoreId"
        fg-color="#000"
        @click="previewImage"
      />
      <div class="toast-status" v-if="showToastPopup">
        <img lazy-load="true" src="//imgHost/smallprogram_tick_green@2x.png" alt="">
        <div class="status-txt">取货成功</div>
      </div>
    </div>
    <i><i></i></i>
    <div class="order-txt">
      <div class="total">合计: {{ totalNum }}元</div>
      <div class="order-num">订单号: {{ orderNum }}</div>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import { getOrderConsumStatus } from '@/service/getData'
import '@/static/css/public.scss'
import { createNamespacedHelpers } from 'vuex'
import Toast from '@/static/vant-weapp/toast/toast'
const { mapState } = createNamespacedHelpers('orderQrCode')

export default {
  components: {},
  data () {
    return {
      orderStoreId: '',
      orderNum: null,
      totalNum: null,
      controller: false,
      showToastPopup: false
    }
  },
  computed: {
    ...mapState(['name'])
  },
  beforeCreate () {
    console.log('Page [orderQrCode] Vue beforeCreate')
  },
  created () {
    console.log(this.$route.query.orderStoreId)
    this.orderStoreId = this.$route.query.orderStoreId
    this.orderNum = this.$route.query.orderNum
    this.totalNum = this.$route.query.price
    this.setTimeFunc()
    console.log('Page [orderQrCode] Vue created')
  },
  beforeMount () {
    console.log('Page [orderQrCode] Vue beforeMount')
  },
  mounted () {
    console.log('Page [orderQrCode] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单二维码'
    })
    // Do some initialize when page load.
    console.log('Page [orderQrCode] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [orderQrCode] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [orderQrCode] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [orderQrCode] onHide')
  },
  onUnload: function () {
    this.controller = true
    // Do something when page close.
    console.log('Page [orderQrCode] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    previewImage () {
      console.log('success')
    },
    async getOrderConsumStatus () {
      let [err1, res1] = await getOrderConsumStatus({
        orderStoreId: this.orderStoreId
      })
      if (err1) {
        Toast(err1)
      }
      if (res1.code === 0) {
        if (res1.data.res === 1) {
          // Toast('消费成功')
          this.showToastPopup = true
        } else {
          this.setTimeFunc()
        }
      }
    },
    setTimeFunc () {
      if (this.controller) {
        return false
      }
      setTimeout(() => {
        this.getOrderConsumStatus()
      }, 800)
    }
  }
}
</script>
<style lang="scss" scoped>
.order-code {
  background-color: #f3f4f5;
  padding-top: 80px;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .code-box {
    width: 620px;
    height: 620px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: relative;
    .toast-status {
      position: absolute;
      width: 138px;
      height: 138px;
      background-color: #fff;
      border:1px solid rgba(165, 164, 164, 1);
      border-radius:10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 58px;
        height: 58px;
      }
      .status-txt {
        padding-top: 14px;
        font-size:18px;/*px*/
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(165,164,164,1);
      }
    }
  }
  i {
    background-color: #fff;
    width: 580px;
    display: flex;
    justify-content: center;
    i {
      width: 550px;
      border-top: 1px solid #eee;
    }
  }
  .order-txt {
    width: 620px;
    height: 180px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    :after {
      width: 40px;
      height: 40px;
      content: "";
      right: -20px;
      top: -20px;
      position: absolute;
      display: block;
      background: #f3f4f5;
      border-radius: 40px;
    }
    :before {
      width: 40px;
      height: 40px;
      content: "";
      left: -20px;
      top: -20px;
      position: absolute;
      display: block;
      background: #f3f4f5;
      border-radius: 40px;
    }
    .order-txt {
      padding-bottom: 20px;
      font-size: 36px; /*px*/
      font-family: PingFang-SC-Heavy;
      font-weight: 800;
      color: rgba(51, 51, 51, 1);
    }
    .order-num {
      font-size: 28px; /*px*/
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(165, 164, 164, 1);
    }
  }
}
</style>
