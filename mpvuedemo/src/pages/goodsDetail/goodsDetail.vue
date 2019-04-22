<template>
  <div class="goodsDetail">
    <TabOrSlide :tabs="tabs" :current="current" :blockClass="blockClass" :offset="offset" :needLoadMore="true" >
      <div id="tab1" class="goods-swiper slide-block">
        <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
          <template v-for="(item, index) in goodsInfo.images" >
            <swiper-item :key="index">
              <img lazy-load="true"  :src="item" class="slide-image" mode="aspectFill"/>
            </swiper-item>
          </template>
        </swiper>
      </div>
      <div class="block goods-desc">
        <van-row>
          <van-col span="24">
            <span class="yun">￥</span><span class="price">{{  + goodsInfo.goodsPrice }}</span>
            <van-icon size="16px" @click="onShareApp" class="desc-icon desc-icon1" name="//imgHost/smallprogram_share@3x.png"/>
            <van-icon size="16px" @click="onCollect" class="desc-icon" v-if="isCollect === 0" name='//imgHost/smallprogram_focuson_nopoint@3x.png'/>
            <van-icon size="16px" @click="onCollect" class="desc-icon" v-if="isCollect === 1" name='//imgHost/smallprogram_clickonthefocus@3x.png'/>
          </van-col>

          <van-col span="24">
            <div class="desc"><van-tag  class="tag" color="#FF4D46" plain v-for="(item, index) in goodsInfo.goodsTags" :key="index">
              {{ item }}
            </van-tag>
              {{ goodsInfo.description }}
            </div>
          </van-col>
          <van-col span="24">
            <van-tag class="tag2" size="medium" color="#F39D21" text-color="#FFFFFF" v-for="(item, index) in goodsInfo.goodsLabels" :key="index">
              {{ item }}
            </van-tag>
          </van-col>

        </van-row>
      </div>
      <div id="tab2" class="block goods-detail slide-block">
        <van-row>
          <van-col span="24">
            <BlockTitle :title="'商品详情'" :bottomBorder="true"></BlockTitle>
          </van-col>

          <van-col span="24" class="detail" >
            <div v-html="goodsInfo.detail"></div>
          </van-col>
        </van-row>
      </div>
      <div class="block goods-disclaimer">
        <van-row>
          <van-col span="24">
            <BlockTitle :title="'免责声明'" :bottomBorder="true"></BlockTitle>
          </van-col>
          <van-col span="24" class="detail">
            <div v-for="(item, index) in goodsInfo.disclaimer" v-html="item" :key="index" >{{ item }}</div>
          </van-col>

        </van-row>
      </div>
      <div id="tab3" class="block goods-appraisal slide-block">
        <van-row>
          <van-col span="24">
            <BlockTitle :title="'评价'" :bottomBorder="true"></BlockTitle>
          </van-col>
          <van-col span="24">
            <template v-if="commentList.length > 0">
              <CommentCard :commentList="commentList" />
            </template>
            <template v-if="commentList.length === 0">
              <EmptyPage content="暂无评价" :imgUrl="'//imgHost/noevaluation.png'" />
            </template>
            <LoadMore :isloading="loadingGoodsDetail" />
          </van-col>
        </van-row>
      </div>
      <div class="goods-tool">
        <van-tabbar :active="-1" >
          <van-tabbar-item @click="onTabChange(0)" icon="shopping-cart-o" :info="cartCount || ''">购物车</van-tabbar-item>
          <van-tabbar-item @click="onTabChange(1)" icon="shop-o">店铺</van-tabbar-item>
          <div v-if="goodsInfo.goodsType !== 3" class="footer1">
          <van-button @click.stop="showSku">加入购物车</van-button>
          <van-button @click.stop="buyNowShowSku">立即购买</van-button>
          </div>
          <div v-else class="footer2">
            <van-button round @click.stop="buyNowShowSku">立即购买</van-button>
          </div>
        </van-tabbar>
      </div>
      <!--<BlankBottom/>-->
    </TabOrSlide>
    <div class="goods-sku">
      <wux-popup position="bottom" :visible="isShowSku" @touchmove.stop="touchmoveHandler">
        <div class="top">
          <van-row>
            <van-col span="8">
              <img lazy-load="true"  class="img" :src="skuImg" />
            </van-col>
            <van-col span="16" class="desc">
              <div class="price">
                ￥<span class="price-num">{{ skuPrice || goodsInfo.goodsPrice }}</span>
              </div>
              <van-icon class="close" name="close" @click.stop="hideSku" />
              <div class="selected" v-show="!isEmpty(selectedSkuIds)">
                <!--已选:<span v-for="(item, index) in selectedSkuIds" :key="index">"{{ SkuList[item] }}" </span>-->
                已选:<span> {{ selectedSkuText }} </span>
              </div>
            </van-col>
          </van-row>
        </div>

        <div class="middle">
          <template v-for="(item1, index1) in goodsInfo.goodsSku">
            <van-row :key="index1">
            <van-col span="24" class="title">
                {{ item1.name }}
              </van-col>
              <van-col span="24" class="item" @click.stop="selectSku">
                <van-tag :color="Object.values(selectedSkuIds).find(v => v === item2.id) ? '#F39D21' : '#CECECE'" :data-type="item1.name"  :data-tag="item2.id" :data-img="item2.img" v-for="(item2, index2) in item1.value" :key="index2">{{ item2.desc }}</van-tag>
              </van-col>
            </van-row>
          </template>
          <van-row>
            <van-col span="24" class="title">
              <wux-cell title="购买数量" hover-class="none">
                <wux-input-number min="1" :longpress="true" @change="buyNumChange" :disabled="flase" shape="circle" color="assertive" slot="footer"/>
              </wux-cell>
            </van-col>
          </van-row>
        </div>
        <div class="bottom">
          <van-button size="large" color="#FF5139" :disabled="notRight" @click.stop="addShoppingCart">{{ buyText }}</van-button>
        </div>
      </wux-popup>
    </div>
    <van-toast id="van-toast" />
    <SharePages v-if="imgShareArr" ref="sharePage" :from="'goodsDetail'" :shareInfo="shareInfo" :imgShareArr="imgShareArr"></SharePages>
    <Loading :showPopup="isRefresh"/>
  </div>
</template>
<script>
import Toast from '@/static/vant-weapp/toast/toast'
import BlockTitle from '@/components/BlockTitle'
import SharePages from '@/components/SharePages'
import LoadMore from '@/components/LoadMore'
import EmptyPage from '@/components/EmptyPage'
import CommentCard from '@/components/CommentCard'
import BlankBottom from '@/components/BlankBottom'
import Loading from '@/components/Loading'
import empty from 'is-empty'
import { mapState } from 'vuex'
import { getGoodsDetail, getGoodsComments, addGoods, collectGoods } from '@/service/getData'
import TabOrSlide from '@/components/TabOrSlide'

export default {
  components: {
    TabOrSlide,
    EmptyPage,
    BlockTitle,
    CommentCard,
    BlankBottom,
    LoadMore,
    Loading,
    SharePages
  },
  data () {
    return {
      isCollect: 0, // 是否收藏
      goodsInfo: {},
      commentList: [],
      lastId: 0,
      shareInfo: {
        name: '',
        id: '',
        title: '',
        price: ''
      },
      loadingGoodsDetail: false,
      noMore: false,
      buyNum: 1,
      isShowSku: false,
      selectedSkuIds: {},
      SkuList: {},
      notRight: true,
      current: 'tab1',
      blockClass: '.slide-block',
      offset: 50,
      skuImg: '',
      skuToPrice: {},
      tabs: [
        {
          key: 'tab1',
          title: '商品'
        },
        {
          key: 'tab2',
          title: '详情'
        },
        {
          key: 'tab3',
          title: '评论',
          onActive: {
            isOnce: true,
            action: this.getCommentsData
          }
        }
      ],
      goodsId: 0,
      isBuyNow: 0,
      buyText: '加入购物车',
      isRefresh: false,
      imgShareArr: false
    }
  },
  computed: {
    ...mapState([
      'cartCount'
    ]),
    selectedSkuText () {
      return (Object.values(this.selectedSkuIds).map(item => { return this.SkuList[item] })).join(',')
    }
  },
  beforeCreate () {
    console.log('Page [goodsDetail] Vue beforeCreate')
  },
  async created () {
  },
  beforeMount () {
    console.log('Page [goodsDetail] Vue beforeMount')
  },
  mounted () {
    console.log('Page [goodsDetail] Vue mounted')
  },
  onLoad (options) {
    // Do some initialize when page load.
    console.log('Page [goodsDetail] onLoad')
    wx.setNavigationBarTitle({
      title: '商品详情'
    })
  },
  onReady () {
    // Do something when page ready.
    console.log('Page [goodsDetail] onReady')
  },
  async onShow () {
    // Do something when page show.
    if (this.goodsId !== this.$router.currentRoute.query.goodsId) {
      this.goodsId = this.$router.currentRoute.query.goodsId
      this.refresh()
      console.log('Page [goodsDetail] onShow')
    }
  },
  onShareAppMessage (options) {
    return {
      title: '脉果儿好货',
      path: '/pages/goodsDetail/index?goodsId=' + this.goodsId,
      imageUrl: this.goodsInfo.images[0],
      success: (res) => {
        Toast('转发成功', res)
      },
      fail: (res) => {
        Toast('转发失败', res)
      }
    }
  },
  onHide () {
    // Do something when page hide.
    console.log('Page [goodsDetail] onHide')
  },
  onUnload () {
    // Do something when page close.
    console.log('Page [goodsDetail] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    touchmoveHandler () {},
    async refresh () {
      this.commentList = []
      this.lastId = 0
      this.noMore = false
      this.isRefresh = true
      let [err1, res1] = await getGoodsDetail({ goodsId: this.goodsId })
      this.isRefresh = false
      if (err1) {
        Toast(err1)
        return false
      }
      if (res1.code === 0) {
        this.imgShareArr = {}
        console.log(typeof res1.data.isCollect)
        this.isCollect = res1.data.isCollect
        this.goodsInfo = res1.data
        this.SkuList = {}
        this.imgShareArr.infoImg = this.goodsInfo.images[0]
        this.goodsInfo.goodsSku.forEach(item1 => {
          item1.value.forEach(item2 => {
            this.SkuList[item2.id] = item2.desc
          })
        })
        let skuToPrice = {}
        this.goodsInfo.skuToPrice.forEach(item2 => {
          skuToPrice[item2.sku] = item2.price
        })
        this.skuToPrice = skuToPrice
      } else {
        Toast(res1.msg)
      }
    },
    showSku () {
      // 显示规格
      this.buyText = '加入购物车'
      this.isBuyNow = 0
      this.isShowSku = true
    },
    buyNowShowSku () {
      // 显示规格
      this.buyText = '立即购买'
      this.isBuyNow = parseInt(Math.random() * 10000)
      this.isShowSku = true
    },
    hideSku () {
      // 隐藏规格
      this.isShowSku = false
    },
    selectSku (e) {
      // 规格选择
      const tag = e.target.dataset.tag
      const img = e.target.dataset.img
      if (!tag) return false
      const type = e.target.dataset.type
      if (Object.values(this.selectedSkuIds).find(v => v === tag)) {
        delete this.selectedSkuIds[type]
      } else {
        this.selectedSkuIds[type] = tag
      }
      this.selectedSkuIds = this.sortObj(this.selectedSkuIds)
      if (img !== '') {
        this.skuImg = img
      }
      this.calBuy()
    },
    isEmpty: empty,
    addShoppingCart () {
      if (this.isBuyNow) {
        this.buyNow()
      } else {
        this.addGoods()
      }
    },
    async buyNow () {
      // 立即购买
      if (this.notRight) {
        Toast('请选择完整的规格！')
        return false
      }
      this.hideSku()
      this.$router.push({ path: '/needLogin/pages/makeOrder/index', query: { goodsId: this.goodsId, attrIds: Object.values(this.selectedSkuIds).join(','), num: this.buyNum, isBuyNow: this.isBuyNow } })
    },
    async addGoods () {
      // 加入购物车
      if (this.notRight) {
        Toast('请选择完整的规格！')
        return false
      }
      let [err, res] = await addGoods({ goodsId: this.goodsId, attrIds: Object.values(this.selectedSkuIds).join(','), num: this.buyNum })
      if (err) {
        Toast(err)
        return false
      }
      if (res.code === 0) {
        this.$store.dispatch('setCartCountFromApi')
        Toast('添加成功！')
        this.hideSku()
      } else {
        Toast(res.msg)
        return false
      }
    },
    buyNumChange (e) {
      // 加减商品数量
      this.buyNum = e.detail.value
      this.calBuy()
    },
    calBuy () {
      // 计算规格是否选择完整，是否可以进行购买
      if (Object.keys(this.selectedSkuIds).length === this.goodsInfo.goodsSku.length && this.buyNum > 0) {
        let res = Object.values(this.selectedSkuIds).join(',')
        this.skuPrice = this.skuToPrice[res]
        this.notRight = false
      } else {
        this.notRight = true
      }
    },
    sortObj (obj) {
      // 数组排序
      let arr = []
      for (let i in obj) {
        arr.push([obj[i], i])
      }
      arr.sort()
      let len = arr.length
      let newObj = {}
      for (let j = 0; j < len; j++) {
        newObj[arr[j][1]] = arr[j][0]
      }
      return newObj
    },
    loadMoreData () {
      if (this.noMore) {
        Toast('没有更多了')
        return false
      }
      if (this.loadingGoodsDetail) return false
      this.getCommentsData()
      // this.$store.dispatch('goodsDetail/getGoodsComments', this.lastId)
    },
    async getCommentsData () {
      // 加载评论内容
      this.loadingGoodsDetail = true
      let [err2, res2] = await getGoodsComments({ goodsId: this.goodsId, lastId: this.lastId })
      this.loadingGoodsDetail = false
      if (err2) {
        Toast(err2)
        return false
      }
      if (res2.code === 0) {
        if (res2.data.commentList.length === 0) {
          this.noMore = true
          // Toast('没有更多了')
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
    onTabChange (type) {
      switch (type) {
        case 0:
          this.$router.push({ path: '/pages/shoppingCart/index', reLaunch: true })
          break
        case 1:
          this.$router.push({ path: '/pages/storeDetail/index', query: { storeId: this.goodsInfo.storeId } })
          break
      }
    },
    async onCollect () {
      let [err, res] = await collectGoods({ goodsId: this.goodsId })
      if (err) {
        Toast(err)
      }
      if (res.code === 0) {
        Toast(res.msg)
        if (this.isCollect === 1) {
          this.isCollect = 0
        } else {
          this.isCollect = 1
        }
      } else {
        Toast(res.msg)
      }
    },
    onShareApp () {
      console.log(this.$refs.sharePage)
      this.$refs.sharePage.onShareApp()
      // this.onShare()
    }
    // closeShareApp () {
    //   this.onShare()
    // },
    // onShare () {
    //   this.showShareApp = !this.showShareApp
    // },
    // async onShareWechat () {
    //   this.onShare()
    // },
    // onShowCircle () {
    //   this.showCanvas = !this.showCanvas
    // },
    // wxPromisify (fn) {
    //   return function (obj = {}) {
    //     return new Promise((resolve, reject) => {
    //       obj.success = function (res) {
    //         resolve(res)
    //       }
    //       obj.fail = function (res) {
    //         reject(res)
    //       }
    //       fn(obj)
    //     })
    //   }
    // },
    // async onShareCircle () {
    //   this.onShare()
    //   const wxGetImageInfo = this.wxPromisify(wx.getImageInfo)
    //   const __x = this.deviceWidth / 750
    //   wx.showLoading({
    //     title: '生成中...'
    //   })
    //   let [err, res] = await getWxCode({ page: '/pages/goodsDetail/index', width: '280px' })
    //   console.log(err, res) // 请求商品图片等图片信息
    //   Promise.all([
    //     wxGetImageInfo({
    //       src: '//imgHost/largeNature1.jpg' // 商品图片
    //     }),
    //     wxGetImageInfo({
    //       src: '//imgHost/smallprogram_focuson_nopoint@3x.png' // 用户头像
    //     }),
    //     wxGetImageInfo({
    //       src: '//imgHost/largeNature2.jpg' // 二维码图片 // TODO:这里需要拿到后台返回的二维码图片
    //     })
    //   ]).then(res => {
    //     const ctx = wx.createCanvasContext('shareCanvas')
    //     ctx.setFillStyle('white')
    //     ctx.fillRect(0, 0, 617 * __x, 792 * __x)
    //     // 底图
    //     ctx.drawImage(res[0].path, 0, 173 * __x, 617 * __x, 392 * __x)
    //     // 用户头像
    //     ctx.save()
    //     ctx.beginPath() // 开始绘制
    //     ctx.setStrokeStyle('red')
    //     ctx.arc(85 * __x, 85 * __x, 50 * __x, 0, Math.PI * 2, false)
    //     ctx.clip()
    //     ctx.drawImage(res[1].path, 35 * __x, 35 * __x)
    //     // ctx.scale(1.2, 1.2)
    //     ctx.restore()
    //     ctx.setFillStyle('#000000') // 文字颜色：黑色
    //     ctx.setFontSize(30 * __x) // 文字字号：22px
    //     ctx.fillText('你好', 166 * __x, 75 * __x)
    //     ctx.setFillStyle('#A5A4A4') // 文字颜色：黑色
    //     ctx.setFontSize(24 * __x) // 文字字号：22px
    //     ctx.fillText('ID:123123', 166 * __x, 120 * __x)
    //     ctx.setFillStyle('#000000') // 文字颜色：黑色
    //     ctx.setFontSize(24 * __x) // 文字字号：22px
    //     ctx.fillText('商品名称商品名称商品名称商品名称...', 30 * __x, 628 * __x)
    //     ctx.setFillStyle('#FF4D46') // 文字颜色：黑色
    //     ctx.setFontSize(20 * __x) // 文字字号：22px
    //     ctx.fillText('￥465.00', 30 * __x, 684 * __x)
    //     ctx.drawImage(res[0].path, 456 * __x, 577 * __x, 127 * __x, 127 * __x)
    //     ctx.setFillStyle('#A5A4A4') // 文字颜色：黑色
    //     ctx.setFontSize(20 * __x) // 文字字号：22px
    //     ctx.fillText('长按识别查看商品', 442 * __x, 733 * __x)
    //     ctx.stroke()
    //     ctx.draw()
    //     wx.hideLoading()
    //   })
    //   this.onShowCircle()
    // },
    // savePhoto () {
    //   const wxCanvasToTempFilePath = this.wxPromisify(wx.canvasToTempFilePath)
    //   const wxSaveImageToPhotosAlbum = this.wxPromisify(wx.saveImageToPhotosAlbum)
    //
    //   wxCanvasToTempFilePath({
    //     canvasId: 'shareCanvas'
    //   }, this).then(res => {
    //     return wxSaveImageToPhotosAlbum({
    //       filePath: res.tempFilePath
    //     })
    //   }).then(res => {
    //     wx.showToast({
    //       title: '已保存到相册'
    //     })
    //   })
    // },
    // onCloseCanvas () {
    //   this.onShowCircle()
    // }
  }
}
</script>

<style lang="scss" scoped>
.goodsDetail{
  background:#F3F4F5;
  .goods-swiper {
    .slide-image {
      display: block;
      width:750px;
      height:290px;
      margin: 0 auto;
    }
  }
  .goods-desc {
    padding: 30px 30px;
    .yun {
      font-size:24px;/*px*/
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,77,70,1);
    }
    .price {
      font-size:30px;/*px*/
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,77,70,1);

    }
    .name {
      margin-left: 20px;
      vertical-align:middle;
      font-size:30px;/*px*/
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
    }
    .desc {
      font-size:24px;/*px*/
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(165,164,164,1);
      padding: 10px 0 10px 0;
    }
    .desc-icon {
      float: right;
      margin-right: 40px;
    }
    .desc-icon1 {
      margin-right: 0;
    }
    .tag {
      float: left;
      margin-right: 20px;
    }
    .tag2 {
      margin-right: 30px;
      margin-bottom: 50px;
    }
  }
  .goods-bar {
    position: fixed;
    bottom: 0;
    border-top: #E8E8E8 1px solid;
    width: 100%;
    .footer1, .footer2 {
      display: inline-block;
      vertical-align:middle;
      width: 50%;
    }
  }
  .goods-sku {
    .top {
      width: 100%;
      position: fixed;
      top: -30px;
      img {
        width: 200px;
        height: 200px;
        border-radius: 10px;
      }
      .desc {
        .price {
          margin-top: 60px;
          text-align: left;
          color: #FF4D46;
          .price-num {
            display: inline-block;
            font-size:34px;/*px*/
            font-weight: 800;
          }
        }
        .selected {
          text-align: left;
        }
      }
    }
    .middle {
      margin-top: 160px;
      padding: 10px 30px;
      text-align: left;
      .title {
        font-size:30px;/*px*/
        font-family:PingFang-SC-Heavy;
        font-weight:800;
        color:#333;
      }
    }
  }
}
</style>
<style lang="scss">
.goodsDetail {
  .block {
    margin-top: 20px;
    background-color: #fff;
    padding: 0 30px 30px 30px;
  }
  .block:nth-of-type(2) {
    margin-top: 0!important;
  }
  .goods-tool{
    .footer1 {
      margin-right: 30px;
        van-button {
          display: inline-block;
          vertical-align: middle;
          margin-top: 0;
          button {
            color: white;
            border: none;
            width: 200px;
            height: 70px;
            line-height: 70px;
            font-size: 28px;/*px*/
          }
        }
        van-button:nth-child(1) {
          button {
            border-bottom-left-radius: 10em;
            border-top-left-radius: 10em;
            background-color: #F39D21;
          }
        }
        van-button:nth-child(2) {
          button {
            border-bottom-right-radius: 10em;
            border-top-right-radius: 10em;
            background-color: #FF4D46;
          }
        }
      }
    .footer2 {
      margin-right: 30px;
      van-button {
        display: inline-block;
        vertical-align: middle;
        margin-top: 0;
        button {
          color: white;
          border: none;
          width: 400px;
          height: 70px;
          line-height: 70px;
          font-size: 28px;/*px*/
          background-color: #FF4D46;
        }
      }
    }
  }
  .goods-sku {
    .top {
      .close {
        position: absolute !important;
        right: 30px !important;
        color: #A5A4A4 !important;
        font-size: 34px !important;/*px*/
        top: 60px !important;
      }
    }
    .middle {
      .van-row {
        display: block !important;
        margin-top: 30px !important;
      }
      .van-tag {
        display: inline-block !important;
        margin-right: 30px !important;
        margin-top: 10px !important;
        min-width: 40px !important;
        text-align: center !important;
      }
      .wux-cell {
        position: inherit;
        padding: 0;
      }
      .wux-input-number__selector {
        color: #A5A4A4 !important;
        border-color: #A5A4A4 !important;
        line-height: 0 !important;
      }
      .wux-input-number__input {
        padding: 0 !important;
        border: 1px solid #A5A4A4 !important;
        border-radius: 30px !important;
        margin: 0 13px !important;
      }
    }
    .bottom {
      .van-button--large {
        background-color: #FF5139 !important;
        font-size: 30px !important;/*px*/
        font-family: PingFang-SC-Medium !important;
        font-weight: 500 !important;
        color: #FFF !important;
        border: none !important;
        margin-top: 30px !important;
      }
    }
  }
  .goods-detail {
    .detail {
      .van-col {
        img {
          width: 100% !important;
        }
        image {
          width: 100% !important;
        }
      }
    }
  }
  .goods-disclaimer {
    font-size: 24px;/*px*/
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: #A5A4A4;
    .detail {
      .van-col {
        margin-top: 30px!important;
        view {
          display: block !important;
          margin-bottom: 30px !important;
        }
      }
    }
  }
  .title-icon {
    margin-left: 0 !important;
  }
  .goods-appraisal {
    .appraisal-item {
      .wux-avatar{
        width: 78px;
        height: 78px;
        line-height: 78px;
        border-radius: 39px;
      }
    }
  }
  .wux-divider--text {
    margin-bottom: 105px;
  }
  ._van-action-sheet {
    .share-box {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: flex-start;
      .share-title, .cancel, .share-list {
        height: 90px;
        font-size:30px;/*px*/
        font-family:PingFang-SC-Medium;
        font-weight:500;
        background-color: #fff;
        color:rgba(51,51,51,1);
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .share-title {
        padding-left: 30px;
      }
      .cancel {
        justify-content: center;
        border-top: 1px solid #F3F4F5;
      }
      .share-list {
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size:24px;/*px*/
        padding: 0 40px;
        .wechat, .circle {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          button::after {
            border: none!important;
          }
          button {
            padding-left: 0;
            padding-right: 0;
            font-size: 24px;/*px*/
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: none;
            img {
              width: 88px;
              height: 88px;
            }
          }
        }
      }
    }
  }
  .showCanvasClass {
    .van-popup {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: rgba(0,0,0,0);
      .saveToPhoto {
        display: flex;
        align-items: center;
        justify-content: center;
        width:340px;
        height:64px;
        margin-top: 60px;
        background:linear-gradient(90deg,rgba(255,104,83,1),rgba(255,81,57,1));
        border-radius:32px;
        font-size:30px;/*px*/
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(255,255,255,1);
      }
      .close {
        margin-top: 40px;
        width: 44px;
        height: 44px;
        background-image: url(//imgHost/asmallvideo_delete_button@2x.png);
        background-size: cover;
      }
    }
  }
}
.van-tabbar {
  align-items: center;
}
.wx-swiper-dots{
  position:relative;
  bottom: 30px!important;
}
.wux-tabs__tab--balanced .wux-tabs__tab-bar {
  background:#FF6853!important;
  width:48px;
  height:6px;
  left:50%;
  margin-left:-24rpx;
}
.wux-tabs__tab {
  font-size:30px!important;/*px*/
  font-family:PingFang-SC-Medium!important;
  font-weight:500!important;
  color:#A5A4A4!important;
}
.wux-tabs__tab--balanced.wux-tabs__tab--current{
  color:#333!important;
  font-family:PingFang-SC-Heavy!important;
  font-weight:800!important;
}
</style>
