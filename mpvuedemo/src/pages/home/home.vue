<template>
  <div class="home">
    <scroll ref="scroll"
            :scrollbar="scrollbarObj"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp"
            @click="clickItem"
    >
      <!--<scroll-view scroll-y='true' :style="'height:' + scrollH + 'px'" @scrolltoupper="refresh"  @scrolltolower='LoadMoreData'>-->
        <!--轮播图-->
        <div class="banner">
          <banner :banners="banners" />
        </div>

        <!--导航栏-->
        <div class="category">
          <div class="cate-cell"  @click="toCategoryDetail(item, index)" v-for="(item, index) in categories" :key="index">
            <img :src="item.icon" />
            <div>{{ item.cateName }}</div>
          </div>
        </div>

        <!--今日推荐-->
        <div class="ad">
          <van-row>
            <van-col span="24">
              <BlockTitle :title="'今日推荐'" ></BlockTitle>
            </van-col>
            <van-col span="12" >
              <img v-lazy="todayRecommends[0]['cover']" @click="toOtherPage(todayRecommends[0])" class="ad-0" />
            </van-col>
            <van-col span="12" >
              <img v-lazy="todayRecommends[1]['cover']" @click="toOtherPage(todayRecommends[1])" class="ad-1" />
            </van-col>
            <van-col span="24" >
              <img v-lazy="todayRecommends[2]['cover']" @click="toOtherPage(todayRecommends[2])" class="ad-2"  />
            </van-col>
          </van-row>
        </div>


        <!--推荐商品列表-->
        <div class="goods">
            <goods-card v-for="(item, index) in recommendGoods" :goodsIndex="index" :key="index" :goodsData="item"/>
        </div>
    </scroll>
    <!--<loadMore :isloading="loadingRecommendGoods" />-->
    <!--<van-toast id="van-toast" />-->
    <Loading :showPopup="isRefresh"/>
  </div>
</template>

<script>
import { Row, Col, Icon, Toast } from 'vant'
import { createNamespacedHelpers } from 'vuex'
import GoodsCard from '@/componentsWeb/GoodsCard'
import Banner from '@/componentsWeb/Banner'
import BlockTitle from '@/components/BlockTitle'
import LoadMore from '@/componentsWeb/LoadMore'
import Loading from '@/componentsWeb/Loading'
import Scroll from '@/componentsWeb/scroll/scroll.vue'
// import { ease } from '../../utils/ease'

const { mapState } = createNamespacedHelpers('home')

export default {
  components: {
    Scroll,
    BlockTitle,
    GoodsCard,
    Banner,
    LoadMore,
    Loading,
    [Row.name]: Row,
    [Icon.name]: Icon,
    [Col.name]: Col
  },
  data () {
    return {
      scrollH: 0,
      noreMore: false,
      done: false,
      wait: true,
      isRefresh: false,
      scrollbar: true,
      scrollbarFade: true,
      pullDownRefresh: true,
      pullDownRefreshThreshold: 180,
      pullDownRefreshStop: 80,
      pullUpLoad: true,
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: '加载中',
      pullUpLoadNoMoreTxt: '没有更多了',
    }
  },
  computed: {
    ...mapState([
      'name',
      'lastIds',
      'banners',
      'categories',
      'todayRecommends',
      'recommendGoods',
      'loadingIndexData',
      'loadingRecommendGoods'
    ]),
    scrollbarObj: function () {
      return this.scrollbar ? {fade: this.scrollbarFade} : false
    },
    pullDownRefreshObj: function () {
      return this.pullDownRefresh ? {
        threshold: parseInt(this.pullDownRefreshThreshold),
        stop: parseInt(this.pullDownRefreshStop)
      } : false
    },
    pullUpLoadObj: function () {
      return this.pullUpLoad ? {
        threshold: parseInt(this.pullUpLoadThreshold),
        txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
      } : false
    }
  },
  beforeCreate () {
    console.log('Page [home] Vue beforeCreate')
  },
  async created () {
    console.log('Page [home] Vue created')
  },
  beforeMount () {
    console.log('Page [home] Vue beforeMount')
  },
  async mounted () {
    console.log('this:',this)
    // this.shopPopup = true
    let res1 = await this.$store.dispatch('home/getIndexData')
    this.checkRes(res1)
    // this.shopPopup = false
    let res2 = await this.$store.dispatch('home/getRecommendGoods', { lastIds: this.lastIds })
    this.checkRes(res2)
    // 获取购物车数量
    this.$store.dispatch('setCartCountFromApi')
  },
  // onLoad: function (options) {
  //   var self = this
  //   wx.setNavigationBarTitle({
  //     title: '商城'
  //   })
  //   wx.getSystemInfo({
  //     success: function (res) {
  //       let height = res.windowHeight
  //       self.scrollH = height
  //     }
  //   })
  // },
  // onReady: function () {
  //   // Do something when page ready.
  //   console.log('Page [home] onReady')
  // },
  // onShow: async function () {
  //   // // 获取首页相关数据
  //   let _this = this
  //   const token = wx.getStorageSync('token') || false
  //   if (!token) {
  //     _this.$router.push('/pages/login/index')
  //   } else {
  //     this.wait = false
  //   }
  //   // Do something when page show.
  //   console.log('Page [home] onShow')
  //   if (!this.done && this.wait === false) {
  //     this.shopPopup = true
  //     let res1 = await this.$store.dispatch('home/getIndexData')
  //     this.checkRes(res1)
  //     this.shopPopup = false
  //     let res2 = await this.$store.dispatch('home/getRecommendGoods', { lastIds: this.lastIds })
  //     this.checkRes(res2)
  //   }
  //
  //   // 获取购物车数量
  //   this.$store.dispatch('setCartCountFromApi')
  // },
  // onHide: async function () {
  //   console.log('Page [home] onHide')
  // },
  // onUnload: function () {
  //   // Do something when page close.
  //   console.log('Page [home] onUnload')
  // },
  // onReachBottom () {
  //   this.LoadMoreData()
  // },
  // async onPullDownRefresh () {
  //   let _this = this
  //   if (_this.isRefresh) {
  //     return false
  //   } else {
  //     _this.refresh()
  //     wx.stopPullDownRefresh()
  //   }
  // },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    toOtherPage ({ curType, content }) {
      switch (curType) {
        case 4:
          this.$router.push({ path: '/pages/goodsDetail/index', query: { goodsId: content } })
          break
        case 5:
          this.$router.push({ path: '/pages/storeDetail/index', query: { storeId: content } })
          break
      }
    },
    // async refresh () {
    //   this.noreMore = false
    //   this.isRefresh = true
    //   let res1 = await this.$store.dispatch('home/getIndexData')
    //   this.checkRes(res1)
    //   this.isRefresh = false
    //   let res2 = await this.$store.dispatch('home/getRecommendGoods', { lastIds: '' })
    //   this.checkRes(res2)
    // },
    toCategoryDetail: function (list, index) {
      // 跳转到商品详情页
      if (index === 7) {
        this.$router.push({ path: '/pages/sortGoods/index' })
      } else {
        this.$router.push({ path: '/pages/searchQuery/index', query: { cateId: list.cateId, value: list.cateName } })
      }
    },
    // LoadMoreData: async function () {
    //   // 加载更多
    //   if (this.noreMore) {
    //     Toast('没有更多了！')
    //     return false
    //   }
    //   if (this.loadingRecommendGoods) return false
    //   let res = await this.$store.dispatch('home/getRecommendGoods', { lastIds: this.lastIds })
    //   console.log('res:', res)
    //   this.checkRes(res)
    // },
    checkRes: function ({ type, msg }) {
      switch (type) {
        case 'err':
          this.done = false
          Toast(msg)
          return false
          break
        case 'noMore':
          this.noreMore = true
          // Toast('没有更多了！')
          return false
          break
        default:
          this.done = true
          return true
      }

    },
    async onPullingDown() {
      // 模拟更新数据
      console.log('pulling down and load data')
      this.noreMore = false
      this.isRefresh = true
      let res1 = await this.$store.dispatch('home/getIndexData')
      this.checkRes(res1)
      this.isRefresh = false
      let res2 = await this.$store.dispatch('home/getRecommendGoods', { lastIds: '' })
      this.checkRes(res2)
      this.$refs.scroll.forceUpdate()
      // this.$refs.scroll.scroll.closePullDown()
    },
    async onPullingUp() {
      if(this.noreMore) this.$refs.scroll.forceUpdate()
      // 更新数据
      console.log('pulling up and load data')
      let resData = await this.$store.dispatch('home/getRecommendGoods', { lastIds: this.lastIds })
      let res = this.checkRes(resData)
      if(res) {
        if (this._isDestroyed) {
          return
        }
        this.pullDownRefresh = false
        // this.$refs.scroll.finishPullUp()
      } else {
        // 如果没有新数据
        this.$refs.scroll.forceUpdate()
      }
    },
    clickItem() {
      console.log(12)
      // this.autoPullDownRefresh()
      // this.scrollTo()
    },
    rebuildScroll() {
      console.log('rebuildScroll')
      Vue.nextTick(() => {
        this.$refs.scroll.destroy()
        this.$refs.scroll.initScroll()
      })
    }
  },
  watch: {
    scrollbarObj: {
      handler() {
        this.rebuildScroll()
      },
      deep: true
    },
    pullDownRefreshObj: {
      handler(val) {
        const scroll = this.$refs.scroll.scroll
        if (val) {
          scroll.openPullDown()
        } else {
          scroll.closePullDown()
        }
      },
      deep: true
    },
    pullUpLoadObj: {
      handler(val) {
        const scroll = this.$refs.scroll.scroll
        if (val) {
          scroll.openPullUp()
        } else {
          scroll.closePullUp()
        }
      },
      deep: true
    },
    startY() {
      this.rebuildScroll()
    }
  }
}
</script>

<style lang="scss" scoped>
  .home{
    background: rgba(243,244,245,1);
    .banner {
      background-color: white;
    }
    .category {
      padding-top: 10px;
      padding-bottom: 47px;
      background-color: white;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .cate-cell {
        margin-top: 47px;
        display: flex;
        flex: 1;
        flex-basis: 25%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          margin-bottom: 23px;
        }
      }
    }
    .ad{
      margin-top: 20px;
      background-color: white;
      .ad-0 {
        background-color: #f9f9f9;
        width: 344px;
        height: 128px;
        border-radius: 10px 0 0 10px;
        display:block;
        float: right;
        margin-right: 1px;

      }
      .ad-1 {
        background-color: #f9f9f9;
        width: 344px;
        height: 128px;
        border-radius: 0 10px 10px 0;
        display:block;
        float: left;
        margin-left: 1px;
      }
      .ad-2 {
        background-color: #f9f9f9;
        width: 690px;
        height: 160px;
        border-radius: 10px;
        display:block;
        margin: 12px auto;
      }
    }
  }
</style>
<style lang="scss">
.home{
  .category {
    background-color: white;
  }
}
</style>
