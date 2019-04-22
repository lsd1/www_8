<template>
  <div class="my-app">
    <div class="owner-info">
      <div class="owner-head" :style="{backgroundImage: 'url(' + '//imgHost/general_t_headportrait.png' + ')'}"></div>
      <div class="owner-title" @click="goToMyVIP">
        <div class="title-txt">{{ userInfo.username }}</div>
        <div class="id-box">
          <i style="background-image: url(//imgHost/s_personalauthentication.png)"></i>
          ID: {{ userInfo.uid }}
        </div>
        <div class="vip-img" :style="{backgroundImage: 'url('+ vipIcon +')'}"></div>
      </div>
    </div>
    <div class="owner-order">
      <div class="all-order"><i></i>全部订单</div>
      <div class="order-icon">
        <div class="icon" @click="goToOrder(0)">
          <div class="icon-num" :class="{hide: (iconNum[0] === 0)}">{{ iconNum[0] }}</div>
          <div class="icon-img" style="background-image: url(//imgHost/icon-3.png)"></div>
          <div class="icon-txt">待付款</div>
        </div>
        <div class="icon" @click="goToOrder(1)">
          <div class="icon-num" :class="{hide: (iconNum[1] === 0)}">{{ iconNum[1] }}</div>
          <div class="icon-img" style="background-image: url(//imgHost/icon-6.png)"></div>
          <div class="icon-txt">待发货</div>
        </div>
        <div class="icon" @click="goToOrder(2)">
          <div class="icon-num" :class="{hide: (iconNum[2] === 0)}">{{ iconNum[2] }}</div>
          <div class="icon-img" style="background-image: url(//imgHost/icon-1.png)"></div>
          <div class="icon-txt">待消费</div>
        </div>
        <div class="icon" @click="goToOrder(3)">
          <div class="icon-num" :class="{hide: (iconNum[3] === 0)}">{{ iconNum[3] }}</div>
          <div class="icon-img" style="background-image: url(//imgHost/icon-2.png)"></div>
          <div class="icon-txt">待收货</div>
        </div>
        <div class="icon" @click="goToOrder(4)">
          <div class="icon-num" :class="{hide: (iconNum[4] === 0)}">{{ iconNum[4] }}</div>
          <div class="icon-img" style="background-image: url(//imgHost/icon-5.png)"></div>
          <div class="icon-txt">待评论</div>
        </div>
        <div class="icon" @click="goToOrder(5)">
          <div class="icon-num" :class="{hide: (iconNum[5] === 0)}">{{ iconNum[5] }}</div>
          <div class="icon-img" style="background-image: url(//imgHost/icon-4.png)"></div>
          <div class="icon-txt">退款/货</div>
        </div>
      </div>
    </div>
    <div class="owner-list">
      <van-cell
          title="我的余额"
          is-link
          @click="goToMyPrice"
      ></van-cell>
      <van-cell
          title="我的收藏"
          is-link
          @click="goToMyCollection"
      ></van-cell>
      <van-cell
          title="大米卡券"
          is-link
          @click="goToMyRice"
      ></van-cell>
    </div>
    <van-toast id="van-toast" />
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import { getMyInfo } from '@/service/getData'
import '@/static/css/public.scss'
import { createNamespacedHelpers } from 'vuex'
import Toast from '@/static/vant-weapp/toast/toast'
import Dialog from '@/static/vant-weapp/dialog/dialog'
import empty from 'is-empty'
const { mapState } = createNamespacedHelpers('my')

export default {
  components: {
  },
  computed: {
    ...mapState([
      'name',
      'count'
    ])
  },
  data () {
    return {
      vipIcon: '',
      isLogin: false,
      vip: {
        noVip: '//imgHost/personal_vip_didnotopen.png',
        isVip: '//imgHost/personal_vip_hasbeenopened.png'
      },
      userInfo: {},
      iconNum: [ 0, 0, 0, 0, 0, 0 ],
      icon: [
        '//imgHost/icon-3.png',
        '//imgHost/icon-6.png',
        '//imgHost/icon-1.png',
        '//imgHost/icon-2.png',
        '//imgHost/icon-5.png',
        '//imgHost/icon-4.png'],
      active: 1
    }
  },
  beforeCreate () {
    console.log('Page [my] Vue beforeCreate')
  },
  created () {
    const token = wx.getStorageSync('token')
    if (empty(token)) {
      this.onNoLogin()
      return false
    } else {
      this.isLogin = true
    }
    if (!this.isLogin) return false
    console.log('Page [my] Vue created')
  },
  beforeMount () {
    console.log('Page [my] Vue beforeMount')
  },
  async mounted () {
    let [err, res] = await getMyInfo()
    if (err) {
      Toast(err)
    }
    if (res.code === 0) {
      this.userInfo = res.data.userInfo
      if (this.userInfo.isVip === 0) {
        this.vipIcon = this.vip.noVip
      } else {
        this.vipIcon = this.vip.isVip
      }
      let orderCount = res.data.orderCount
      this.iconNum = [ orderCount.unpaidNumber, orderCount.unshippedNumber, orderCount.unconsumedNumber, orderCount.unreceivedNumber, orderCount.uncommentNumber, orderCount.refundNumber ]
      console.log('iconNum:', this.iconNum)
    } else {
      Toast(res.msg)
    }
    console.log('Page [my] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的'
    })
    // Do some initialize when page load.
    console.log('Page [my] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [my] onReady')
  },
  async onShow () {
    if (!this.isLogin) return false
    let [err, res] = await getMyInfo()
    if (err) {
      Toast(err)
    }
    if (res.code === 0) {
      this.userInfo = res.data.userInfo
      console.log(this.userInfo)
      let orderCount = res.data.orderCount
      console.log(res.data.orderCount)
      console.log(typeof orderCount.uncommentNumber)
      this.iconNum = [ orderCount.unpaidNumber, orderCount.unshippedNumber, orderCount.unconsumedNumber, orderCount.unreceivedNumber, orderCount.uncommentNumber, orderCount.refundNumber ]
    } else {
      Toast(res.msg)
    }
    // Do something when page show.
    console.log('Page [my] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [my] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [my] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    onNoLogin () {
      Dialog.confirm({
        message: '请先登录！'
      }).then(() => {
        this.$router.push({ path: '/pages/login/index', query: { redirectUrl: JSON.stringify({ path: '/pages/my/index', isTab: true }) } })
      }).catch(() => {
        this.$router.push({ path: '/pages/home/index', isTab: true })
      })
    },
    onChange ({ detail }) {
      console.log(detail)
    },
    goToOrder (i) {
      if (i === 5) {
        this.$router.push({ path: '/needLogin/pages/returnExchange/index' })
      } else {
        this.$router.push({ path: '/needLogin/pages/allOrders/index', query: { navIndex: i } })
      }
    },
    goToMyVIP () {
      this.$router.push({ path: '/needLogin/pages/myVip/index', query: { uid: this.userInfo.uid, username: this.userInfo.username, portrait: this.userInfo.portrait } })
    },
    goToMyRice () {
      // this.$router.push({ path: '/needLogin/pages/orderQrCode/index', query: { orderStoreId: 155, price: 34234, orderNum: 201900000111 } })
      this.$router.push({ path: '/needLogin/pages/myRice/index', query: {} })
    },
    goToMyCollection () {
      this.$router.push({ path: '/needLogin/pages/myCollection/index', query: {} })
    },
    goToMyPrice () {
      this.$router.push({ path: '/needLogin/pages/myPurse/index', query: {} })
    }
  }
}
</script>
<style lang="scss">
.my-app {
  background-color: #F3F4F5;
  .owner-info {
    height: 190px;
    background-color: #fff;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 30px;
    .owner-head {
      width: 115px;
      height: 115px;
      border-radius: 50%;
      -webkit-background-size: cover;
      background-size: cover;
    }
    .owner-title {
      padding-left: 40px;
      .title-txt {
        padding: 5px 0;
        font-size:36px;/*px*/
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(67,67,67,1);
      }
      .id-box {
        padding: 5px 0 10px 0;
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          width: 30px;
          height: 30px;
          -webkit-background-size: cover;
          background-size: cover;
        }
        font-size:24px;/*px*/
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(165,164,164,1);
      }
      .vip-img {
        width: 56px;
        height: 30px;
        -webkit-background-size: cover;
        background-size: cover;
      }
    }
  }
  .owner-order {
    height: 280px;
    background-color: #fff;
    margin-bottom: 20px;
    .all-order {
      height: 90px;
      font-size:30px;/*px*/
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      display: flex;
      align-items: center;
      padding-left: 30px;
      color:rgba(32,32,32,1);
      border-bottom: 1px solid #F3F4F5;
      i {
        width:6px;
        height:30px;
        background:linear-gradient(180deg,rgba(255,104,83,1),rgba(255,81,57,1));
        border-radius:2px;
        margin-right: 16px;
      }
    }
    .order-icon {
      width: 100%;
      height: 190px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        flex-wrap: wrap;
        flex-direction: column;
        .icon-num {
          position: absolute;
          color:#fff;
          left:80%;
          top:-.5em;
          font-size:.6em;
          padding:0 .25em;
          text-align:center;
          min-width:1.4em;
          line-height:1.4;
          border-radius:50%;
          box-sizing:border-box;
          background-color:#f44;
          -webkit-transform:translateX(-50%);
          transform:translateX(-50%);
          font-family:PingFang-SC-Medium;
        }
        .hide {
          display: none;
        }
        .icon-img {
          width: 36px;
          height: 32px;
          -webkit-background-size: cover;
          background-size: cover;
        }
        .icon-txt {
          padding-top: 20px;
          font-size:20px;/*px*/
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(67,67,67,1);
        }
      }

    }

  }
  .owner-list {
    background-color: #fff;
  }
}
.van-cell {
  color: #434343;
}
  .van-icon {
    color: #E5E5E5;
  }

</style>
