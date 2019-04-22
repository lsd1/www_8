<template>
  <div class="search-app">
    <scroll-view
        class="scroll-view-class"
        scroll-y="true"
        :style="'height:' + scrollH + 'px'"
        @scrolltolower="loadingMoreSearch"
    >
      <div class="top-box">
        <van-search
          :value="value"
          placeholder="请输入搜索关键词"
          background="#fff"
          use-action-slot
          @change="onSearchChange"
          @focus="onGoToSearch"
        >
          <view slot="action" @tap="onSearch">搜索</view>
        </van-search>
      </div>

        <!--<ItemList v-if="!isShowNoMore" :listData="list"></ItemList>-->
      <div class="list-recommend" v-if="isOutPutting">
        <div class="recommend-list" v-for="(i, index) in 5" :key="index">123</div>
      </div>

      <div class="list-display" v-if="!isOutPutting">
        <!-- 筛选nav -->
        <div class="nav-filter" v-if="!isShowNoGoods">
          <div
              class="complex-box"
              :class="{ navFilterClick: navFilterC === index }"
              v-for="(i, index) in navTitleText"
              :key="index"
              @click="showNav(index)"
          >
            <div class="complex-box">
              <div class="complex">{{ i }}</div>
              <i :class="{ navClickIcon: navFilterC === index }"></i>
            </div>

            <div class="price-filter" v-if="index === 3">
              <div
                  class="top"
                  :class="{
                topPrice: navFilterC === index && navPriceType === '1'
              }"
              ></div>
              <div
                  class="bottom"
                  :class="{
                bottomPrice: navFilterC === index && navPriceType !== '1'
              }"
              ></div>
            </div>
          </div>
        </div>
        <!-- 列表展示 -->
        <goods-card  v-for="(item, index) in searchRes" :key="index" :goodsIndex="index" :goodsData="item" />
        <!-- 暂无商品 -->
        <div class="no-list" v-if="isShowNoGoods">
          <div class="no-list-img">
            <div
              class="img"
              :style="{ backgroundImage: 'url(' + imgs + ')' }"
            ></div>
            <!--<img lazy-load="true"  :src="imgs" alt="">-->
          </div>
          <div class="no-goods">暂未发现商品</div>
          <div class="change-goods">请换个词试试吧！</div>
        </div>
        <!-- 推荐商品 -->
        <div class="search-res-box" v-if="isShowNoMore">
          <div class="maybe-like">
            <i class="left"></i>
            <div class="maybe-title">猜你喜欢</div>
            <i class="right"></i>
          </div>
          <goods-card v-for="(item, index) in recommendRes" :goodsIndex="index" :key="index" :goodsData="item"/>
        </div>
      </div>
    </scroll-view>
    <van-toast id="van-toast" />
    <loadMore :isloading="loadingMoreKey" />
  </div>
</template>

<script>
import GoodsCard from '@/components/GoodsCard'
// import empty from 'is-empty'
// import ItemList from '@/components/SingleItemList.vue'
import Toast from '@/static/vant-weapp/toast/toast'
import LoadMore from '@/components/LoadMore'
import { searchDetails, mayYouLike } from '@/service/getData'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('searchQuery')

export default {
  components: {
    GoodsCard,
    LoadMore
    // ItemList
  },
  data () {
    return {
      scrollH: 0,
      navTitleText: ['综合', '销量', '好评', '价格'],
      isOutPutting: false,
      value: '',
      valueTxt: '',
      navFilterC: 0,
      navPriceType: '0',
      navPriceKey: false, // 价格筛选
      oldNav: null,
      imgs: '//imgHost/gouwuche_zanwushagnping.png',
      isShowNoMore: false, // 没有更多的
      isShowNoGoods: false, // 初始请求没有数据
      cateId: null,
      pricetxt: 'desc',
      lastIds: null,
      searchRes: [], // 搜索结果列表
      loadingMoreKey: false,
      noMore: false,
      recommendRes: [] // 推荐列表
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [hello] Vue beforeCreate')
  },
  created () {
    this.value = this.$route.query.value // 大类名称
    if (this.$route.query.isUseValue) {
      this.valueTxt = this.value
    }
    this.cateId = this.$route.query.cateId // 分类ID
    this.getGoodsList({ cateId: this.cateId, keywords: this.valueTxt }, 'newArr')
    console.log('Page [hello] Vue created')
  },
  beforeMount () {
    console.log('Page [hello] Vue beforeMount')
  },
  mounted () {
    console.log('Page [hello] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索'
    })
    var self = this
    wx.getSystemInfo({
      success: function (res) {
        let height = res.windowHeight
        self.scrollH = height
        console.log('height:', height)
      }
    })
    // Do some initialize when page load.
    console.log('Page [hello] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [hello] onReady')
  },
  onShow: function () {},
  onHide: function () {
    // Do something when page hide.
    console.log('Page [hello] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [hello] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    showNav (i) {
      this.isShowNoMore = false // 切换tab以后关闭猜你喜欢
      this.noMore = false // 切换以后,noMore状态回归
      this.navFilterC = i
      if (this.navFilterC === 3 && this.navPriceKey) {
        if (this.navPriceType !== '0') {
          this.navPriceType = '0'
          this.pricetxt = 'desc'
          console.log(this.navPriceType)
        } else {
          this.navPriceType = '1'
          this.pricetxt = 'asc'
          console.log(this.navPriceType)
        }
      }
      this.getList(0, 'newArr')
    },
    onSearch () {
      console.log('点击搜索')
      if (this.value !== this.valueTxt) {
        console.log('曲搜索了')
        console.log(this.value)
        this.noMore = false // 放开请求
        this.valueTxt = this.value
        this.navFilterC = 1 // 回归默认排序
        this.getGoodsList({ keywords: this.valueTxt }, 'newArr')
      }
      this.isOutPutting = false
      // this.$router.push({ path: '/pages/searchInput/index', isTab: true })
    },
    onSearchChange (e) {
      console.log(e.detail)
      this.value = e.detail
    },
    onGoToSearch () {
      this.isOutPutting = true
      console.log('搜索光标中')
      // this.$router.push({ path: '/pages/searchInput/index', isTab: true })
    },
    loadingMoreSearch () {
      this.getList(this.lastIds, 'oldArr')
    },
    getList (lastId = 0, type = '') {
      switch (this.navFilterC) {
        case 0:
          this.navPriceKey = false
          this.getGoodsList({ cateId: this.cateId, lastIds: lastId, keywords: this.valueTxt }, type)
          break
        case 1:
          this.navPriceKey = false
          this.getGoodsList({ cateId: this.cateId, lastIds: lastId, order: 'sales', keywords: this.valueTxt }, type)
          break
        case 2:
          this.navPriceKey = false
          this.getGoodsList({ cateId: this.cateId, lastIds: lastId, order: 'score', keywords: this.valueTxt }, type)
          break
        case 3:
          this.navPriceKey = true
          this.getGoodsList({ cateId: this.cateId, lastIds: lastId, order: 'price', sort: this.pricetxt, keywords: this.valueTxt }, type)
          break
      }
    },
    async getGoodsList (data = {}, type = '') {
      let _this = this
      console.log('no-more')
      if (_this.noMore) return false
      console.log('moreKey')
      if (_this.loadingMoreKey) return false
      this.loadingMoreKey = true
      let [err, res] = await searchDetails(data)
      this.loadingMoreKey = false
      console.log(err)
      console.log(res)
      if (err) {
        Toast(err)
      }
      if (res.code === 0) {
        if (type === 'newArr') {
          this.searchRes = [] // 清空上一次搜索的结果内容
          if (res.data.goodsList.length === 0) {
            this.getMayYouLove()
            this.isShowNoGoods = true
            this.isShowNoMore = true
            this.noMore = true
          } else {
            this.searchRes = res.data.goodsList
            this.lastIds = res.data.lastIds
          }
        } else {
          if (res.data.goodsList.length === 0) {
            this.getMayYouLove()
            this.isShowNoMore = true
            this.noMore = true
          } else {
            this.searchRes = [...this.searchRes, ...res.data.goodsList]
            this.lastIds = res.data.lastIds
          }
        }
      } else {
        Toast(res.data.msg)
      }
    },
    getMayYouLove: async function () {
      let [err1, res1] = await mayYouLike()
      if (err1) {
        Toast(err1)
      }
      if (res1.code === 0) {
        this.recommendRes = res1.data.goodsList
      } else {
        Toast(res1.data.msg)
      }
    }
  }
}
</script>
<!--<style src="../../css/public.scss"></style>-->
<style lang="scss">
page {
  height: 100%;
  background-color: #f3f4f5;
}

.search-app {
  /*display: flex;*/
  /*flex-wrap: wrap;*/
  /*flex-direction: column;*/
  /*align-items: flex-start;*/
  /*height: 100%;*/
  /*width: 100%;*/
  .scroll-view-class {
    -webkit-overflow-scrolling:touch
  }
  .top-box {
    width: 100%;
    background-color: #fff;
    position: relative;

  }
  .list-recommend {
    width: 100%;
    /*padding: 0 30px;*/
    background-color: #fff;
    z-index: 10;
    width: 100%;
      .recommend-list {
        font-size:30px;/*px*/
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(51,51,51,1);
        height: 90px;
        margin: 0 40px;
        border-bottom: 1px solid #EEEEEE;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .recommend-list:last-child{
        border-bottom: none;
      }

  }
  .list-display {
    .nav-filter {
      background-color: #fff;
      height: 70px;
      display: flex;
      justify-content: space-around;
      align-items: stretch;
      flex-wrap: nowrap;
      font-size: 28px; /*px*/
      font-family: PingFang-SC-Medium;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
      .complex-box {
        display: flex;
        align-items: stretch;
        position: relative;
        .complex-box {
          .complex {
            display: flex;
            align-items: center;
          }
          .navClickIcon {
            width: 42px;
            height: 6px;
            background: linear-gradient(
                    90deg,
                    rgba(255, 104, 83, 1),
                    rgba(255, 81, 57, 1)
            );
            border-radius: 3px;
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -21px;
          }
        }
        .price-filter {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 22px;
          margin-left: 10px;
          .top {
            width: 0;
            height: 0;
            margin-bottom: 5px;
            border-width: 10px;
            border-style: solid;
            border-color: transparent transparent #e5e5e5 transparent;
          }
          .bottom {
            width: 0;
            height: 0;
            margin-top: 5px;
            border-width: 10px;
            border-style: solid;
            border-color: #e5e5e5 transparent transparent transparent;
          }
          .topPrice {
            border-color: transparent transparent #333 transparent;
          }
          .bottomPrice {
            border-color: #333 transparent transparent transparent;
          }
        }
      }
    }
    .no-list {
      padding-top: 60px;
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      text-align: center;
      .no-list-img {
        width: 50%;
        display: flex;
        justify-content: center;
        .img {
          width: 240px;
          height: 135px;
          -webkit-background-size: cover;
          background-size: cover;
          /*background-image: url("//imgHost/gouwuche_zanwushagnping.png");*/
        }
      }
      .no-goods {
        padding-top: 40px;
        width: 100%;
        font-size: 36px; /*px*/
        font-family: PingFang-SC-Heavy;
        font-weight: 800;
        color: rgba(51, 51, 51, 1);
      }
      .change-goods {
        padding-top: 20px;
        width: 100%;
        font-size: 24px; /*px*/
        font-family: PingFang-SC-Medium;
        font-weight: 500;
        color: rgba(153, 153, 153, 1);
      }
    }
    .search-res-box {
      width: 100%;
      flex-grow: 1;
      overflow: scroll;
      padding-bottom: 2%;
      .maybe-like {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        padding-top: 60px;
        width: 100%;
        font-size: 30px;
        font-family: PingFang-SC-Heavy;
        font-weight: 800;
        color: rgba(51, 51, 51, 1);
        i {
          /*display: inline-block;*/
          /*background-color: #eee;*/
          /*width: 88px;*/
          /*height: 4px;*/
          display: inline-block;
          width: 65px;
          height: 24px;
          -webkit-background-size: cover;
          background-size: cover;
        }
        .left {
          background-image: url('//imgHost/guessyoulike_ontheleft.png');
        }
        .right {
          background-image: url('//imgHost/guessyoulike_right.png');
        }
        .maybe-title {
          padding: 0 30px;
          font-size: 30px; /*px*/
          font-family: PingFang-SC-Heavy;
          font-weight: 800;
          color: rgba(51, 51, 51, 1);
        }
      }
    }
  }
}

.navFilterClick {
  font-size: 30px; /*px*/
  font-family: PingFang-SC-Heavy;
  font-weight: 800;
  color: rgba(51, 51, 51, 1);
}

.van-cell {
  background-color: #f3f4f5 !important;
  border-radius: 28px;
}
</style>
