<template>
  <div class="myVip">
    <div class="top-box">
      <div class="vip-box" :style="{backgroundImage: 'url('+ img.vipBG +')'}">
        <div class="user-info">
          <div class="user-head">
            <img lazy-load="true"  class="defauleImg headImg" :src="head === '' ? img.mgeLogo : head " :class="{headImg : headStatus === 1 }" alt="">
          </div>
          <div class="user">
            <div class="user-name">{{ userName }}</div>
            <div class="user-time">有效期:{{ theStartOverTime}}</div>
          </div>
        </div>
        <div class="go-details" @click="goDetail">
          <div class="go-detail-btn" v-if="vipStatus !== 1">激活</div>
        </div>
      </div>
      <!--<div class="price-num" v-if="vipStatus === 1">￥365.00</div>-->
    </div>
    <div class="bottom-box" :style="{color: vipStatus === 1 ? '#AF8048' : '#A09E9E'}">
      <div class="title">VIP权益:</div>
      <div class="list-box" v-for="(list, index) in discription" :key="index">
        <div class="list-icon" :style="{backgroundImage: 'url('+ (vipStatus === 1 ? list.iconActive : list.iconInactive) +')'}"></div>
        <!--<div class="list-icon" style="background-image: url(//imgHost/my_icon8.png)"></div>-->
        <div class="list-txt">{{ list.name }}</div>
      </div>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import '@/static/css/public.scss'
import { getMyVip } from '@/service/getData'
// import empty from 'is-empty'
import { createNamespacedHelpers } from 'vuex'
import Toast from '@/static/vant-weapp/toast/toast'

const { mapState } = createNamespacedHelpers('myVip')

export default {
  components: {},
  data () {
    return {
      userName: '',
      head: '',
      img: {
        vipBG: '//imgHost/VIP_bg.png',
        mgeLogo: '//imgHost/mge-logo.png'
      },
      goodsId: null, // vip商品ID
      theStartOverTime: '',
      vipStatus: 0,
      discription: []
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [myVip] Vue beforeCreate')
  },
  created () {
    console.log(this.$route.query)
    this.userName = this.$route.query.username
    this.head = this.$route.query.portrait || ''
    this.getMyVipInfo()
    console.log('Page [myVip] Vue created')
  },
  beforeMount () {
    console.log('Page [myVip] Vue beforeMount')
  },
  mounted () {
    console.log('Page [myVip] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的VIP'
    })
    // Do some initialize when page load.
    console.log('Page [myVip] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [myVip] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [myVip] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [myVip] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [myVip] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    async getMyVipInfo () {
      let [err, res] = await getMyVip()
      if (err) {
        Toast(err)
      }
      if (res.code === 0) {
        let resMsg = res.data
        this.vipStatus = resMsg.vipStatus
        this.discription = resMsg.welfareList
        this.goodsId = resMsg.vipGoodsId
        this.theStartOverTime = resMsg.vipStartDate + '-' + resMsg.vipEndDate
      }
    },
    goDetail () {
      // 跳转到VIP卡券商品详情界面
      this.$router.push({ path: '/pages/goodsDetail/index', query: { goodsId: this.goodsId } })
    }
  }
}
</script>
<style lang="scss" scoped>

.myVip{
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  .top-box {
    width: 100%;
    background-color: #fff;
    .vip-box {
      width: 650px;
      height: 266px;
      margin: auto;
      margin-bottom: 10px;
      position: relative;
      -webkit-background-size: cover;
      background-size: cover;
      .user-info {
        position: absolute;
        left: 60px;
        bottom: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .user-head {
          width: 108px;
          height: 108px;
          border-radius: 50%;
          -webkit-background-size: cover;
          background-size: cover;
          border: 1px solid #AF8048;
          background-color: #E0BB7D;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          .defauleImg {
            width: 60%;
            height: 60%;
          }
          .headImg {
            width: 100%;
            height: 100%;
          }
        }
        .user {
          padding-left: 25px;
          .user-name {
            font-size:36px;/*px*/
            font-family:PingFang-SC-Heavy;
            font-weight:800;
            color:rgba(169,142,105,1);
            text-shadow:0px 2px 1px rgba(253,244,229,0.4);
            background:linear-gradient(180deg,rgba(175,128,72,1) 0%, rgba(175,128,72,1) 0%, rgba(188,140,83,1) 100%);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
          }
          .user-time {
            padding-top: 8px;
            font-size:24px;/*px*/
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(175,128,72,1);
          }
        }
      }
      .go-details {
        position: absolute;
        right: 59px;
        top: 47px;
        .go-detail-btn {
          width: 130px;
          height: 60px;
          border:1px solid #AF8048;
          border-radius: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size:30px;/*px*/
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(175,128,72,1);
        }
      }
    }
    .price-num {
      font-size:30px;/*px*/
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(175,128,72,1);
      height: 50px;
      width: 650px;
      margin: auto;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  .bottom-box {
    background-color: #fff;
    height: 100px;
    flex-grow: 1;
    padding: 40px 50px;
    .title {
      font-size:36px;/*px*/
      font-family:PingFang-SC-Heavy;
      font-weight:800;
      padding-bottom: 20px;
    }
    .list-box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-bottom: 30px;
      .list-icon {
        width: 60px;
        height: 60px;
        -webkit-background-size: cover;
        background-size: cover;
        flex-shrink: 0;
      }
      .list-txt {
        padding-left: 10px;
        font-size:30px;/*px*/
        font-family:PingFang-SC-Medium;
        font-weight:500;
      }
    }
  }
}
</style>
