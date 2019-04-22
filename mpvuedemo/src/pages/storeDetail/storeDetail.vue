<template>
  <div class="storeDetail">
    <div v-if="flexTop" class="flex-top">
      <wux-tabs controlled :current="current" @change="onChange">
        <wux-tab tabKey="tab1" title="商品"></wux-tab>
        <wux-tab tabKey="tab2" title="评论"></wux-tab>
        <wux-tab tabKey="tab3" title="商家"></wux-tab>
      </wux-tabs>
    </div>
      <div class="top">
        <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <template v-for="(item, index) in storeInfo.images" >
            <swiper-item :key="index">
              <img lazy-load="true" :src="item" class="slide-image" mode="aspectFill"/>
            </swiper-item>
          </template>
        </swiper>
      </div>

      <div class="middle">
        <wux-tabs id="bar" controlled :current="current" @change="onChange">
          <wux-tab tabKey="tab1" title="商品"></wux-tab>
          <wux-tab tabKey="tab2" title="评论"></wux-tab>
          <wux-tab tabKey="tab3" title="商家"></wux-tab>
        </wux-tabs>
        <div class="button">
          <van-icon size="16px" class="desc-icon" v-if="isCollect === 0" name="//imgHost/theorder_collection_didnotclick@2x.png" @click="onCollect"/>
          <van-icon size="16px" class="desc-icon" v-if="isCollect === 1" name="//imgHost/theorder_collection@3x.png" @click="onCollect"/>
          <van-icon size="16px" class="desc-icon" name="//imgHost/smallprogram_share@3x.png" @click="onShareApp"/>
        </div>
      </div>

      <div v-if="current === 'tab1'" class="content content1">
        <wux-tabs controlled scroll :current="categoryCurrent" @change="onCategoryChange">
          <wux-tab :tabKey="'c-' + item.cateId" :index="index" :key="index" :title="item.cateName" v-for="(item, index) in categoryInfo" />
        </wux-tabs>

        <div class="goods">
          <template v-if="goodsList.length === 0">
            <EmptyPage />
          </template>
          <template v-else>
            <goods-card v-for="(item, index) in goodsList" :goodsIndex="index" :key="index" :goodsData="item"/>
          </template>
          <LoadMore :isloading="goodsLoading"/>
        </div>
      </div>

      <div v-if="current === 'tab2'" class="content content2">
          <template v-if="commentList.length === 0">
              <EmptyPage />
          </template>
          <template v-else>
              <CommentCard :commentList="commentList" />
          </template>
          <LoadMore :isloading="commentLoading"/>
      </div>

      <div v-if="current === 'tab3'" class="content content3">
        <div class="addr">
          <div>{{ storeInfo.location }}{{ storeInfo.address }} </div>
          <div><van-icon size="16px" class="desc-icon" name="//imgHost/thestore_phone@3x.png"/></div>
        </div>
        <div class="type">
          <div>商家类型</div>
          <div class="detail">{{ storeInfo.industry }}</div>
        </div>
        <div class="desc">
          <div>商家简介</div>
          <div class="detail">{{ storeInfo.profile }}</div>
        </div>
      </div>

      <div class="bottom">
        <van-tabbar active-color="#A5A4A4" @click="onTabChange">
          <van-tabbar-item :info="cartCount || ''">
            <img lazy-load="true"  slot="icon" src="//imgHost/smallprogram_theshoppingcart@2x.png" mode="aspectFit" />
            <img lazy-load="true"  slot="icon-active" src="//imgHost/smallprogram_theshoppingcart@2x.png" mode="aspectFit" />
            购物车
          </van-tabbar-item>
        </van-tabbar>
      </div>
      <BlankBottom :height="'100rpx'"/>
    <van-toast id="van-toast" />
    <Loading :showPopup="isRefresh"/>
    <SharePages v-if="imgShareArr" ref="sharePage" :from="'storeDetail'" :shareInfo="shareInfo" :imgShareArr="imgShareArr"></SharePages>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import '@/static/css/public.scss'
import { getStoreDetail, getStoreComments, getStoreCategory, getStoreGoods, collectStore } from '@/service/getData'
import CommentCard from '@/components/CommentCard'
import Toast from '@/static/vant-weapp/toast/toast'
import GoodsCard from '@/components/GoodsCard'
import SharePages from '@/components/SharePages'
import BlankBottom from '@/components/BlankBottom'
import LoadMore from '@/components/LoadMore'
import EmptyPage from '@/components/EmptyPage'
import Loading from '@/components/Loading'
import empty from 'is-empty'

export default {
  components: {
    CommentCard,
    GoodsCard,
    BlankBottom,
    EmptyPage,
    LoadMore,
    Loading,
    SharePages
  },
  data () {
    return {
      storeId: 0,
      storeInfo: {},
      current: 'tab1',
      categoryCurrent: 'c-0',
      isCollect: 0,
      commentList: [],
      categoryInfo: [],
      shareInfo: {
        name: 'niHao',
        id: '123123',
        title: '你好,我是一个商品'
      },
      lastId: 0,
      cateId: 0,
      goodsLastIds: '',
      goodsLoading: false,
      commentLoading: false,
      goodsList: [],
      flexTop: false,
      flexTopHeight: 0,
      isRefresh: false,
      noMoreGoods: false,
      noMore: false,
      imgShareArr: false
    }
  },
  computed: {
    ...mapState([
      'cartCount'
    ])
  },
  beforeCreate () {
    console.log('Page [storeDetail] Vue beforeCreate')
  },
  async created () {
    console.log('Page [storeDetail] Vue created')
  },
  beforeMount () {
    console.log('Page [storeDetail] Vue beforeMount')
  },
  mounted () {
    // this.imgShareArr = ['//imgHost/largeNature1.jpg', '//imgHost/smallprogram_focuson_nopoint@3x.png', '//imgHost/largeNature2.jpg']
    console.log('Page [storeDetail] Vue mounted')
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    wx.setNavigationBarTitle({
      title: '店铺详情'
    })
    console.log('Page [storeDetail] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [storeDetail] onReady')
  },
  onShareAppMessage (options) {
    return {
      title: '脉果儿好货',
      path: '/pages/storeDetail/index?storeId=' + this.storeId,
      imageUrl: this.storeInfo.images[0],
      success: (res) => {
        Toast('转发成功', res)
      },
      fail: (res) => {
        Toast('转发失败', res)
      }
    }
  },
  onShow: async function () {
    // Do something when page show.
    let query = wx.createSelectorQuery()
    query.select('#bar').boundingClientRect()
    query.exec((res) => {
      this.flexTopHeight = res[0].top
    })
    console.log('Page [storeDetail] onShow')
    if (this.storeId !== this.$router.currentRoute.query.storeId) {
      this.storeId = this.$router.currentRoute.query.storeId
      // this.storeId = this.$router.currentRoute.query.storeId
      this.refresh()
    }
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [storeDetail] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [storeDetail] onUnload')
  },
  onReachBottom () {
    this.LoadMoreData()
  },
  onPageScroll ({ scrollTop }) {
    if (this.flexTopHeight > 0 && scrollTop >= this.flexTopHeight) {
      this.flexTop = true
    } else {
      this.flexTop = false
    }
  },
  async onPullDownRefresh () {
    let _this = this
    if (_this.isRefresh) {
      wx.stopPullDownRefresh()
      return false
    } else {
      await _this.refresh()
      wx.stopPullDownRefresh()
    }
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    async refresh () {
      this.isRefresh = true
      // 获取店铺信息
      this.goodsLastIds = ''
      this.lastId = 0
      this.cateId = 0
      this.current = 'tab1'
      this.categoryCurrent = 'c-0'
      this.noMore = false
      this.noMoreGoods = false
      this.commentList = []
      this.goodsList = []
      let [err1, res1] = await getStoreDetail({ storeId: this.storeId })
      this.isRefresh = false
      if (err1) {
        Toast(err1)
        return false
      }
      if (res1.code === 0) {
        this.imgShareArr = {}
        this.storeInfo = res1.data.storeInfo
        this.shareInfo.title = this.storeInfo.storeName
        this.imgShareArr.infoImg = this.storeInfo.images[0]
        this.isCollect = this.storeInfo.isCollect
      } else {
        Toast(res1.msg)
      }

      // 获取店铺分类
      let [err2, res2] = await getStoreCategory({ storeId: this.storeId })
      if (err2) {
        Toast(err2)
        return false
      }
      if (res2.code === 0) {
        this.categoryInfo = [ {
          'cateId': 0,
          'cateName': '全部分类'
        }, ...res2.data.categories
        ]
      } else {
        Toast(res2.msg)
      }
      // 获取店铺对应分类商品
      this.getStoreGoodsData()
    },
    onChange: function (e) {
      this.current = e.detail.tabKey
      if (this.current === 'tab2' && empty(this.commentList)) {
        this.getCommentsData()
      }
    },
    onCategoryChange: function (e) {
      this.categoryCurrent = e.detail.tabKey
      this.cateId = this.categoryCurrent.split('-')[1]
      this.goodsLastIds = ''
      this.noMoreGoods = false
      this.getStoreGoodsData()
    },
    getCommentsData: async function () {
      if (this.noMore) {
        Toast('没有更多了')
        return false
      }
      // 加载评论内容
      this.commentLoading = true
      let [err2, res2] = await getStoreComments({ storeId: this.storeId, lastId: this.lastId })
      this.commentLoading = false
      if (err2) {
        Toast(err2)
        return false
      }
      if (res2.code === 0) {
        if (res2.data.commentList.length === 0) {
          this.noMore = true
          Toast('没有更多了')
          return false
        } else {
          if (this.lastId === 0) {
            this.commentList = res2.data.commentList
          } else {
            this.commentList = [...this.commentList, ...res2.data.commentList]
          }
          this.lastId = res2.data.lastId
        }
      } else {
        Toast(res2.msg)
      }
    },
    getStoreGoodsData: async function () {
      if (this.noMoreGoods) {
        Toast('没有更多了')
        return false
      }
      this.goodsLoading = true
      let [err2, res2] = await getStoreGoods({ storeId: this.storeId, cateId: this.cateId, lastIds: this.goodsLastIds })
      this.goodsLoading = false
      if (err2) {
        Toast(err2)
        return false
      }
      if (res2.code === 0) {
        if (res2.data.goodsList.length === 0) {
          this.noMoreGoods = true
          if (empty(this.goodsLastIds)) {
            this.goodsList = []
          } else {
            Toast('没有更多了')
          }
          return false
        } else {
          if (empty(this.goodsLastIds)) {
            this.goodsList = res2.data.goodsList
          } else {
            this.goodsList = [...this.goodsList, ...res2.data.goodsList]
          }
          this.goodsLastIds = res2.data.lastIds
        }
      } else {
        Toast(res2.msg)
      }
    },
    LoadMoreData: async function () {
      switch (this.current) {
        case 'tab1':
          this.getStoreGoodsData()
          break
        case 'tab2':
          this.getCommentsData()
          break
      }
    },
    onTabChange: function (e) {
      this.$router.push({ path: '/pages/shoppingCart/index', isTab: true })
    },
    onShareApp () {
      console.log(this.$refs.sharePage)
      this.$refs.sharePage.onShareApp()
    },
    async onCollect () {
      let [err, res] = await collectStore({ storeId: this.storeId })
      console.log(err, res)
      if (err) {
        console.log(err)
      }
      if (res.code === 0) {
        if (this.isCollect === 0) {
          this.isCollect = 1
        } else {
          this.isCollect = 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.storeDetail{
  display: flex;
  flex-direction: column;
  .slide-image {
    display: block;
    width:750px;
    height:290px;
    margin: 0 auto;
  }
  .middle {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .button {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 200px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    /*padding: 0 30px 30px 30px;*/
    padding-bottom: 30px;
  }
  .content1 {
    background-color: #F3F4F5;
  }
  .content2 {
    padding-top: 20px;
    background-color: #F3F4F5;
  }
  .content3 {
    margin-top: 20px;
    background-color: #fff;
    font-size:30px;/*px*/
    font-family:PingFang-SC-Bold;
    font-weight:bold;
    padding: 0 30px;
    color: #333;
    .addr, .type, .desc {
      padding: 30px 0;
      border-bottom: 1px solid #F3F4F5;
    }
    .addr {
      display: flex;
      justify-content: space-between;
      /*margin-bottom: 60px;*/
    }
    .type {
      /*margin-bottom: 60px;*/
    }
    .desc {
      /*margin-bottom: 60px;*/
    }
    .detail {
      margin-top: 10px;
      font-size:24px;/*px*/
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:#A5A4A4;
    }
  }
}
</style>
<style lang="scss">
.storeDetail {
  .middle {
    .wux-tabs {
      width: 375px!important;
      display: flex;
      justify-content: space-around;
    }
    .wux-tabs__tab {
      font-size:30px;/*px*/
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color: #333!important;
    }
    .wux-tabs__tab-bar {
      height: 6px;
      background: #FF6853!important;
      border-radius: 3px!important;
    }
  }
  .content1 {
    font-size:30px;/*px*/
    font-family:PingFang-SC-Medium;
    font-weight:500;
    .wux-tabs {
      background-color: #F3F4F5;
    }
    .wux-tabs__tab {
      color:#A4A5A5!important;
    }
    .wux-tabs__tab--current {
      color:#333!important;
    }
    .wux-tabs__tab-bar {
      display:none;
    }
  }
  .flex-top {
    position: fixed;
    top: 0;
    z-index: 1;
    width:100%;
    background-color: #FFF;
    .wux-tabs {
      width: 375px!important;
      display: flex;
      justify-content: space-around;
    }
    .wux-tabs__tab {
      font-size:30px;/*px*/
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color: #333!important;
    }
    .wux-tabs__tab-bar {
      height: 6px;
      background: #FF6853!important;
      border-radius: 3px!important;
    }
  }
}
.wx-swiper-dots{
  position:relative;
  bottom: 30px!important;
}
</style>
