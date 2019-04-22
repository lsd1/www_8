<template>
  <div class="myPurse">
    <div class="top" id="topBanner">
      <wux-tabs
        :controlled="false"
        :defaultCurrent="navFilterC"
        @change="showNav"
      >
        <wux-tab
          v-for="(i, index) in navTitleText"
          :title="i"
          :tabKey="index"
          :key="index"
        ></wux-tab>
      </wux-tabs>
      <div class="top-banner">
        <div class="balance" v-show="navFilterC === 0">
          <div class="balance-box">
            <div class="balance-txt">当前余额</div>
            <div class="balance-num">{{ nowBalance }}</div>
          </div>
          <div class="description" @click="goToDescription">说明</div>
        </div>
        <div class="voucher" v-show="navFilterC === 1">
          <div class="balance-box">
            <div class="balance-txt">当前代金券</div>
            <div class="balance-num">{{ nowVoucher }}</div>
          </div>
        </div>
        <div class="shop-voucher" v-show="navFilterC === 2">
          <div class="shop-box">
            <div class="usable-voucher">
              <div class="txt">可用购物券</div>
              <div class="num">{{ fruitShop }}</div>
            </div>
            <i></i>
            <div class="frozen-voucher">
              <div class="txt">冻结购物券</div>
              <div class="num">{{ fruitShopFree }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <scroll-view
      class="scroll scroll-one"
      :scroll-y="true"
      v-show="navFilterC === 0"
      :style="'height:' + scrollH + 'px'"
      @scrolltolower="LoadMoreData"
    >
      <div class="balance" v-if="!balanceNoList" ref="balance">
        <div class="list-box" v-for="(list, index) in balanceArr" :key="index">
          <div class="left-box">
            <div class="title">{{ list.content }}</div>
            <div class="time">{{ list.datetime | setISO8601 }}</div>
          </div>
          <div class="right-box" :class="{ posNum: list.changeType === 1 }">
            {{ list.changeNum }}
          </div>
        </div>
      </div>
      <empty-page
        :content="'暂没有记录哦~'"
        v-else="balanceNoList"
        :imgUrl="'//imgHost/no-collection-icon.png'"
      ></empty-page>
    </scroll-view>
    <scroll-view
      class="scroll scroll-two"
      v-show="navFilterC === 1"
      :scroll-y="true"
      :style="'height:' + scrollH + 'px'"
      @scrolltolower="LoadMoreData"
    >
      <div class="voucher" v-if="!voucherCouponNoList">
        <div
          class="list-box"
          v-for="(list, index) in voucherCouponArr"
          :key="index"
        >
          <div class="left-box">
            <div class="title">{{ list.content }}</div>
            <div class="time">{{ list.datetime | setISO8601 }}</div>
          </div>
          <div class="right-box" :class="{ posNum: list.changeType === 1 }">
            {{ list.changeNum }}
          </div>
        </div>
      </div>
      <empty-page
        :content="'暂没有记录哦~'"
        v-else="voucherCouponNoList"
        :imgUrl="'//imgHost/no-collection-icon.png'"
      ></empty-page>
    </scroll-view>
    <scroll-view
      class="scroll"
      v-show="navFilterC === 2"
      :scroll-y="true"
      :style="'height:' + scrollH + 'px'"
      @scrolltolower="LoadMoreData"
    >
      <div class="shop-voucher">
        <div class="list-box first-list">
          <div class="left-box">
            <div class="title">{{ nowDate }}</div>
            <div class="time">
              {{ count }} （收入：{{ countIn }}支付：{{ countOut }}）
            </div>
          </div>
          <picker
            mode="date"
            :value="date"
            start="'2010-01-01'"
            :end="wechatDate"
            fields="month"
            @change="bindDateChange"
          >
            <div
              class="filter-data picker"
              :style="{ backgroundImage: 'url(//imgHost/small-icon-prog.png)' }"
            ></div>
          </picker>
        </div>
        <div class="li-box" v-if="!shopCouponNoList">
          <div
            class="list-box"
            v-for="(list, index) in shopCouponArr"
            :key="index"
          >
            <div class="left-box">
              <div class="title">{{ list.content }}</div>
              <div class="time">{{ list.datetime | setISO8601 }}</div>
            </div>
            <div class="right-box" :class="{ posNum: list.changeType === 1 }">
              {{ list.changeNum }}
            </div>
          </div>
        </div>
        <empty-page
          :content="'暂没有记录哦~'"
          v-if="shopCouponNoList"
          :imgUrl="'//imgHost/no-collection-icon.png'"
        ></empty-page>
      </div>
    </scroll-view>
    <div class="btn-bottom" v-show="navFilterC === 0">充值</div>
    <loadMore :isloading="loadMoreKey" />
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import '@/static/css/public.scss'
import empty from 'is-empty'
import emptyPage from '@/components/EmptyPage'
import loadMore from '@/components/LoadMore'
import { getMyBalance, getMyCoupon, getMyShop } from '@/service/getData'
import { createNamespacedHelpers } from 'vuex'
import Toast from '@/static/vant-weapp/toast/toast'

const { mapState } = createNamespacedHelpers('myPurse')

export default {
  components: {
    emptyPage,
    loadMore
  },
  data () {
    return {
      navTitleText: ['余额', '代金券', '购物券'],
      navFilterC: 0, // 导航
      navNum: null, // 防止重复点击
      scrollH: null, // 滚动区域高度
      bannerH: null, // 上部banner高度
      nowDate: null, // 当前月份
      // changeData: '', // 修改月份请求
      wechatDate: null,
      nowBalance: '', // 当前余额
      balanceArr: [], // 余额列表
      balanceKey: false,
      balanceNextPage: '',
      balanceNoList: false,
      nowVoucher: '', // 当前代金券
      voucherCouponArr: [], // 代金券列表
      voucherCouponKey: false,
      voucherCouponLastId: 0,
      voucherCouponNoList: false,
      fruitShop: '', // 可用购物券
      fruitShopFree: '', // 冻结购物券
      count: '', // 统计
      countIn: '', // 收入
      countOut: '', // 支出
      shopCouponArr: [], // 购物券列表
      shopCouponKey: false,
      shopCouponLastId: null,
      shopCouponNoList: false,
      loadMoreKey: false
    }
  },
  filters: {
    setISO8601 (timing) {
      console.log(timing)
      var regexp = '([0-9]{4})(-([0-9]{2})(-([0-9]{2})' +
          '(T([0-9]{2}):([0-9]{2})(:([0-9]{2})(([0-9]+))?)?' +
          '(Z|(([-+])([0-9]{2}):([0-9]{2})))?)?)?)?'
      if (timing) {
        var d = timing.match(new RegExp(regexp))
        var offset = 0
        var date = new Date(d[1], 0, 1)
        if (d[3]) {
          date.setMonth(d[3] - 1)
        }
        if (d[5]) {
          date.setDate(d[5])
        }
        if (d[7]) {
          date.setHours(d[7])
        }
        if (d[8]) {
          date.setMinutes(d[8])
        }
        if (d[10]) {
          date.setSeconds(d[10])
        }
        if (d[12]) {
          date.setMilliseconds(Number('0.' + d[12]) * 1000)
        }
        if (d[14]) {
          offset = (Number(d[16]) * 60) + Number(d[17])
          offset *= ((d[15] === '-') ? 1 : -1)
        }
        offset -= date.getTimezoneOffset()
        let time
        time = (Number(date) + (offset * 60 * 1000))
        console.log(new Date(Number(time)))
        let newDate = new Date(Number(time))
        let year = newDate.getFullYear()
        let month = newDate.getMonth() + 1
        let theDay = newDate.getDate()
        let houer = newDate.getHours()
        let minute = newDate.getMinutes()
        return year + '-' + month + '-' + theDay + ' ' + houer + ':' + minute
      } else {
        return false
      }
    }
  },
  computed: {
    ...mapState(['name'])
  },
  beforeCreate () {
    console.log('Page [myPurse] Vue beforeCreate')
  },
  created () {
    this.getMyList()
    this.navNum = this.navFilterC
    let date = new Date()
    let month = date.getMonth() + 1
    if (month < 10) {
      month = '0' + month
    }
    this.wechatDate = date.getFullYear() + '-' + month
    this.nowDate = this.wechatDate
    console.log('Page [myPurse] Vue created')
  },
  beforeMount () {
    console.log('Page [myPurse] Vue beforeMount')
  },
  mounted () {
    console.log(this.$refs.balance)
    // this.$refs.balance.addEventListener('scroll', () => {
    //   console.log('scroll+++++' + this.$refs.balance.scrollTop)
    // }, false)
    console.log('Page [myPurse] Vue mounted')
  },
  watch: {
    // scrollH (val) {
    //   if (empty(val)) {
    //
    //   }
    // }
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的余额'
    })
    var self = this
    var query = wx.createSelectorQuery()
    // 选择id wux-tabs
    query
      .select('#topBanner')
      .boundingClientRect()
      .exec(function (res) {
        self.bannerH = res[0].height
      })
  },
  onReady: function () {
    var self = this
    wx.getSystemInfo({
      success: function (res) {
        let height = res.windowHeight
        self.scrollH = height - self.bannerH
      }
    })
    // Do something when page ready.
    console.log('Page [myPurse] onReady')
  },
  onShow: function () {
    // Do something when page show.
    console.log('Page [myPurse] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [myPurse] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [myPurse] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    showNav (e) {
      this.navFilterC = Number(e.detail.tabKey)
      if (this.navNum !== this.navFilterC) {
        this.navNum = this.navFilterC
        this.getMyList()
      }
    },
    goToDescription () {
      this.$router.push({ path: '/needLogin/pages/balanceDescription/index', query: {} })
    },
    bindDateChange (e) {
      this.nowDate = e.detail.value
      this.shopCouponKey = false
      this.shopCouponNoList = false
      this.getMyList()
    },
    LoadMoreData (e) {
      let data = {}
      switch (this.navFilterC) {
        case 0:
          if (this.balanceKey) {
            Toast('没有更多了')
            return false
          }
          data.page = this.balanceNextPage
          break
        case 1:
          if (this.voucherCouponKey) {
            Toast('没有更多了')
            return false
          }
          data.lastId = this.voucherCouponLastId
          break
        case 2:
          if (this.shopCouponKey) {
            Toast('没有更多了')
            return false
          }
          data.lastId = this.shopCouponLastId
          break
      }
      this.getMyList(data)
    },
    async getMyList (data = {}) {
      console.log(data)
      switch (this.navFilterC) {
        case 0:
          if (this.balanceKey) {
            return false
          }
          this.loadingMoreKey = true
          let [err, res] = await getMyBalance(data)
          this.loadingMoreKey = false
          if (err) {
            Toast(err)
          }
          if (res.code === 0) {
            let resData = res.data
            this.nowBalance = resData.balance
            if (empty(data)) {
              if (resData.logList.length === 0) {
                Toast('没有更多了')
                this.balanceKey = true
                this.balanceNoList = true
              } else {
                this.balanceArr = resData.logList
                this.balanceNextPage = resData.nextPage
              }
            } else {
              if (resData.logList.length === 0) {
                Toast('没有更多了')
                this.balanceKey = true
              } else {
                this.balanceNextPage = resData.nextPage
                this.balanceArr = [...this.balanceArr, ...resData.logList]
              }
            }
          }
          break
        case 1:
          if (this.voucherCouponKey) {
            return false
          }
          this.loadingMoreKey = true
          let [err1, res1] = await getMyCoupon(data)
          this.loadingMoreKey = false
          if (err1) {
            Toast(err1)
          }
          if (res1.code === 0) {
            let resData = res1.data
            this.nowVoucher = resData.voucher
            if (empty(data)) {
              if (resData.logList.length === 0) {
                Toast('没有更多了')
                this.voucherCouponKey = true
                this.voucherCouponNoList = true
              } else {
                this.voucherCouponArr = resData.logList
                this.voucherCouponLastId = resData.logList[resData.logList.length - 1].id
              }
            } else {
              if (resData.logList.length === 0) {
                Toast('没有更多了')
                this.voucherCouponKey = true
              } else {
                this.voucherCouponLastId = resData.logList[resData.logList.length - 1].id
                this.voucherCouponArr = [...this.voucherCouponArr, ...resData.logList]
              }
            }
          }
          break
        case 2:
          if (this.shopCouponKey) {
            return false
          }
          data.page = this.nowDate
          this.loadingMoreKey = true
          let [err2, res2] = await getMyShop(data)
          this.loadingMoreKey = false
          if (err2) {
            Toast(err2)
          }
          if (res2.code === 0) {
            let resData = res2.data
            this.fruitShop = resData.fruit
            this.fruitShopFree = resData.fruitFreeze
            // this.nowDate = resData.month
            this.count = resData.count.income
            this.countIn = resData.count.in
            this.countOut = resData.count.out
            if (empty(data)) {
              if (resData.logList.length === 0) {
                Toast('没有更多了')
                this.shopCouponKey = true
                this.shopCouponNoList = true
              } else {
                this.shopCouponLastId = resData.logList[resData.logList.length - 1].id
                this.shopCouponArr = resData.logList
              }
            } else {
              if (resData.logList.length === 0) {
                this.shopCouponKey = true
              } else {
                this.shopCouponLastId = resData.logList[resData.logList.length - 1].id
                this.shopCouponArr = [...this.shopCouponArr, ...resData.logList]
              }
            }
          }
          break
      }
    }
  }
}
</script>
<style lang="scss">

.myPurse {
  .top {
    padding-bottom: 30px;
    /*height: 288px;*/
    .top-banner {
      margin: auto;
      margin-top: 30px;
      width: 690px;
      height: 208px;
      background: linear-gradient(
        90deg,
        rgba(255, 104, 83, 1),
        rgba(255, 81, 57, 1)
      );
      border-radius: 10px;
      .balance,
      .voucher {
        width: 100%;
        height: 100%;
        position: relative;
        .balance-box {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: rgba(255, 255, 255, 1);
          .balance-txt {
            font-size: 30px; /*px*/
            font-family: PingFang-SC-Medium;
            font-weight: 500;
          }
          .balance-num {
            font-size: 72px; /*px*/
            font-family: PingFang-SC-Heavy;
            font-weight: 800;
          }
        }
        .description {
          width: 84px;
          height: 46px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(243, 157, 33, 1);
          border-radius: 23px 0 0 23px;
          font-size: 24px; /*px*/
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          position: absolute;
          right: 0;
          top: 25px;
        }
      }
      .shop-voucher {
        width: 100%;
        height: 100%;
        .shop-box {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .usable-voucher,
          .frozen-voucher {
            width: 49.5%;
            color: rgba(255, 255, 255, 1);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .txt {
              font-size: 30px; /*px*/
              font-family: PingFang-SC-Medium;
              font-weight: 500;
            }
            .num {
              font-size: 72px; /*px*/
              font-family: PingFang-SC-Heavy;
              font-weight: 800;
            }
          }
          i {
            width: 1px;
            height: 80px;
            background: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
  .scroll {
    width: auto;
    padding: 0 30px;
    .balance,
    .voucher,
    .shop-voucher {
      border-radius: 10px;
      overflow: hidden;
      .li-box {
        .list-box {
          padding: 0 30px;
          background-color: #fff;
          height: 128px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f3f4f5;
          .left-box {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            .title {
              font-size: 30px; /*px*/
              color: rgba(51, 51, 51, 1);
            }
            .time {
              padding-top: 15px;
              font-size: 24px; /*px*/
              color: rgba(165, 164, 164, 1);
            }
          }
          .right-box {
            font-size: 30px; /*px*/
            font-family: PingFang-SC-Heavy;
            font-weight: 800;
            color: rgba(243, 157, 33, 1);
            display: flex;
            justify-content: flex-end;
            align-items: center;
          }
          .posNum {
            color: #ff4d46;
          }
        }
      }
      .list-box {
        padding: 0 30px;
        background-color: #fff;
        height: 128px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f3f4f5;
        .left-box {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
          font-family: PingFang-SC-Medium;
          font-weight: 500;
          .title {
            font-size: 30px; /*px*/
            color: rgba(51, 51, 51, 1);
          }
          .time {
            padding-top: 15px;
            font-size: 24px; /*px*/
            color: rgba(165, 164, 164, 1);
          }
        }
        .right-box {
          font-size: 30px; /*px*/
          font-family: PingFang-SC-Heavy;
          font-weight: 800;
          color: rgba(243, 157, 33, 1);
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        .posNum {
          color: #ff4d46;
        }
      }
    }
    .shop-voucher {
      .first-list {
        .filter-data {
          width: 40px;
          height: 35px;
          -webkit-background-size: cover;
          background-size: cover;
        }
      }
    }
    .balance {
      padding-bottom: 98px;
    }
  }
  .scroll-two,
  .scroll-one {
    .empty-page {
      padding-top: 0;
    }
  }
}

.btn-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 98px;
  background: linear-gradient(
    90deg,
    rgba(255, 104, 83, 1),
    rgba(255, 81, 57, 1)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px; /*px*/
  font-family: PingFang-SC-Medium;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}

.wux-tabs {
  height: 80px !important;
}

.wux-tabs__tab--balanced .wux-tabs__tab-bar {
  background: #ff6853 !important;
  width: 48px;
  height: 6px;
  left: 50%;
  bottom: 6px;
  margin-left: -24rpx;
}

.wux-tabs__tab {
  font-size: 30px !important;
  font-family: PingFang-SC-Heavy !important;
  font-weight: 800 !important;
  color: #a5a4a4 !important;
}

.wux-tabs__tab--balanced.wux-tabs__tab--current {
  color: #333 !important;
}
</style>
