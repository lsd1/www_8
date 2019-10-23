<template>
  <div class="payRes">
    <div class="top">
      <div class="left">
        <div class="text1">付款成功</div>
        <div class="text2">总金额：<span class="price"><i>￥</i>{{ orderPrice }}</span></div>
        <div class="text3">{{ tips }}</div>
      </div>
      <div class="right">
        <div class="img"><img src="//imgHost/zhifuchenggong_tubiao@2x.png" mode="aspectFit" ></div>
      </div>
    </div>
    <div class="bottom">
      <van-button round class="btn" @click="toDetail">查看详情</van-button>
      <van-button round class="btn" @click="toHome">返回首页</van-button>
    </div>
    <!--<van-toast  id="van-toast" />-->
  </div>
</template>

<script>
import { Button, Toast } from 'vant'
import { createNamespacedHelpers } from 'vuex'
// import Toast from '../../../dist-wechat/static/vant-weapp/toast/toast'
const { mapState } = createNamespacedHelpers('payRes')

export default {
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      orderType: 0,
      orderStoreId: 0,
      orderPrice: 0,
      tips: ''
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [payRes] Vue beforeCreate')
  },
  created () {
    console.log('Page [payRes] Vue created')
  },
  beforeMount () {
    console.log('Page [payRes] Vue beforeMount')
  },
  mounted () {
    console.log('Page [payRes] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单支付'
    })
    // Do some initialize when page load.
    console.log('Page [payRes] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [payRes] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    this.orderType = this.$router.currentRoute.query.orderType || 0
    this.orderPrice = this.$router.currentRoute.query.orderPrice || 0
    this.orderStoreId = this.$router.currentRoute.query.orderStoreId || 0
    switch (this.orderType) {
      case '2':
        this.tips = '大米卡券已发放至您的卡券中'
        break
      case '3':
        this.tips = 'VIP购买成功'
        break
      default:
        this.tips = ''
    }
    console.log('Page [payRes] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [payRes] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [payRes] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    toHome () {
      console.log('home')
      // this.$router.replace('/pages/home/index')
      this.$router.push({ path: '/pages/home/index', isTab: true })
    },
    toDetail () {
      this.$router.push({ path: '/needLogin/pages/allOrders/index', isTab: false, query: { navIndex: 0 } })
      console.log(typeof this.orderType)
      console.log(this.orderType)
      // this.$router.go(2)
      switch (this.orderType) {
        case '0':
          // Toast('跳转')
          this.$router.replace({ path: '/needLogin/pages/allOrders/index', isTab: false, query: { navIndex: 0 } })
          break
        case '1':
          this.$router.replace({ path: '/needLogin/pages/allOrders/index', isTab: false, query: { navIndex: 1 } })
          break
        case '2':
          this.$router.replace({ path: '/needLogin/pages/allOrders/index', isTab: false, query: { navIndex: 2 } })
          break
        case '3':
          this.$router.replace({ path: '/needLogin/pages/allOrders/index', isTab: false, query: { navIndex: 2 } })
          break
        case '4':
          this.$router.replace({ path: '/needLogin/pages/allOrders/index', isTab: false, query: { navIndex: 5 } })
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.payRes{
  display: flex;
  flex-direction: column;
  .top {
    background-color: #FFF;
    display: flex;
    height:230px;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    .left {
      .text1 {
        font-size:36px;/*px*/
        font-family:PingFang-SC-Heavy;
        font-weight:800;
        color:rgba(51,51,51,1);
        margin-bottom: 20px;
      }
      .text2 {
        font-size:30px;/*px*/
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
        margin-bottom: 20px;
        .price {
          color: #FF4D46;
          i {
            display: inline-block;
            font-size:24px;/*px*/
          }
        }
      }
      .text3 {
        font-size:30px;/*px*/
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(243,157,33,1);
        margin-bottom: 20px;
      }
    }
    .right {
      .img {
        img {
          width: 183px;
          height: 118px;
        }
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    margin-top: 120px;
  }
}
</style>
<style lang="scss">
page {
  background-color: #F3F4F5;
}
.payRes{
  .bottom {
    .btn{
      .van-button {
        width: 280px;
        height: 70px;
        line-height: 70px;
        background:linear-gradient(90deg,rgba(255,104,83,1),rgba(255,81,57,1));
        font-size:30px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
      }

    }
  }
}
</style>
