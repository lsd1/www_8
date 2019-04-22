<template>
  <div class="myCollection">
    <wux-tabs :controlled="false" :defaultCurrent="navFilterC" @change="showNav">
      <wux-tab v-for="(i, index) in navTitleText" :title="i" :key="index" :tabKey="index"></wux-tab>
    </wux-tabs>
    <scroll-view class="scroll-box">
      <div class="shop" v-show="navFilterC === 0">
        <div class="shop-box" v-if="!shopListNoList">
          <div class="shop-list" v-for="(list, index) in shopListArr" :key="index">
            <van-card  @click="goToShopList(list)">
              <div slot="title" class="title-class">
                <div class="top">
                  <div class="goods-title">{{ list.storeName }}</div>
                  <div class="goods-position">
                    <i
                        :style="{backgroundImage: 'url(//imgHost/smallicon_positio.png)'}"
                    ></i>
                    {{ list.area }}
                  </div>
                </div>
                <div class="goods-position-into">{{ list.address }}</div>
              </div>
              <div
                  class="thumb-class"
                  slot="thumb"
                  :style="{backgroundImage: 'url('+ list.storeImg +')'}"
              ></div>
              <div
                  v-if="list.storeType !== ''"
                  class="tags-icon"
                  slot="tags"
                  :style="{backgroundImage: 'url(//imgHost/smallicon_mycollection.png)'}"
              >{{ list.storeType }}</div>
            </van-card>
            <i class="soild-li"></i>
          </div>
        </div>
        <emptyPage
            :content="'暂时没有数据哦~'"
            v-if="shopListNoList"
            :imgUrl="'//imgHost/no-collection-icon.png'"
        ></emptyPage>
      </div>
      <div class="commodity" v-show="navFilterC === 1">
        <div class="commodity-box"  v-if="!goodsListNoList">
          <div class="com-list-box">
            <div class="com-list" v-for="(list, index) in goodsListArr" :key="index" @click="goToGoodsList(list)">
              <div class="head">
                <div class="shop-head"
                     :style="{backgroundImage: 'url('+ list.storeImg +')'}"
                ></div>
                <div class="shop-title">{{ list.storeName }}</div>
              </div>
              <div class="goods">
                <van-card>
                  <div
                      class="thumb-class"
                      slot="thumb"
                      :style="{backgroundImage: 'url('+ list.goodsImg +')'}"
                  ></div>
                  <div class="title-class" slot="title">
                   <div class="info">
                     <div class="goods-title">
                       {{ list.goodsName }}
                     </div>
                     <!--<div class="goods-info">adfasdfasdf</div>-->
                   </div>
                    <div class="price">
                      <div class="price-num">￥<i>{{ list.price }}</i></div>
                      <div class="price-share">分享佣金:{{ list.shareCommission }}</div>
                    </div>
                  </div>
                </van-card>
              </div>
            </div>
          </div>
        </div>
        <emptyPage
            :content="'暂时没有数据哦~'"
            v-if="goodsListNoList"
            :imgUrl="'//imgHost/no-collection-icon.png'"
        ></emptyPage>
      </div>
    </scroll-view>
    <loadMore :isloading="loadMoreKey"/>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import '@/static/css/public.scss'
import emptyPage from '@/components/EmptyPage'
import loadMore from '@/components/LoadMore'
import empty from 'is-empty'
import { getMyShopList, getMyGoodsList } from '@/service/getData'
import { createNamespacedHelpers } from 'vuex'
import Toast from '@/static/vant-weapp/toast/toast'

const { mapState } = createNamespacedHelpers('myCollection')

export default {
  components: {
    emptyPage,
    loadMore
  },
  data () {
    return {
      navTitleText: ['店铺', '商品'],
      navNum: null,
      navFilterC: 0,
      oldNav: null,
      titleTxt: '',
      shopListArr: [], // 店铺列表
      shopListKey: false,
      shopListNoList: false,
      shopListLastId: null,
      goodsListArr: [], // 商品列表
      goodsListKey: false,
      goodsListNoList: false,
      goodsListLastId: null,
      loadMoreKey: false
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [myCollection] Vue beforeCreate')
  },
  created () {
    this.getList()
    this.oldNav = this.navFilterC
    console.log('Page [myCollection] Vue created')
  },
  beforeMount () {
    console.log('Page [myCollection] Vue beforeMount')
  },
  mounted () {
    console.log('Page [myCollection] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的收藏'
    })
    // Do some initialize when page load.
    console.log('Page [myCollection] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [myCollection] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [myCollection] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [myCollection] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [myCollection] onUnload')
  },
  onReachBottom (e) {
    console.log(e)
    let lastId = 0
    switch (this.navFilterC) {
      case 0:
        if (this.shopListKey) {
          Toast('没有更多了')
          return false
        }
        lastId = this.shopListLastId
        break
      case 1:
        if (this.goodsListKey) {
          Toast('没有更多了')
          return false
        }
        lastId = this.goodsListLastId
        break
    }
    this.getList({ lastId: lastId })
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    showNav (e) {
      this.navFilterC = Number(e.detail.tabKey)
      if (this.oldNav === this.navFilterC) {
        return false
      }
      this.oldNav = this.navFilterC
      console.log(this.navFilterC)
      this.getList()
    },
    async getList (data = {}) {
      switch (this.navFilterC) {
        case 0: // 店铺
          if (this.shopListKey) {
            return false
          }
          this.loadMoreKey = true
          let [err, res] = await getMyShopList(data)
          this.loadMoreKey = false
          if (err) {
            Toast(err)
          }
          if (res.code === 0) {
            let dataMsg = res.data
            if (empty(data)) {
              if (dataMsg.storeInfo.length === 0) {
                this.shopListKey = true
                this.shopListNoList = true
              } else {
                this.shopListArr = dataMsg.storeInfo
                this.shopListLastId = dataMsg.lastId
              }
            } else {
              if (dataMsg.storeInfo.length === 0) {
                this.shopListKey = true
              } else {
                this.shopListArr = [this.shopListArr, ...dataMsg.storeInfo]
                this.shopListLastId = dataMsg.lastId
              }
            }
          }
          break
        case 1: // 商品
          if (this.goodsListKey) {
            return false
          }
          this.loadMoreKey = true
          let [err1, res1] = await getMyGoodsList(data)
          this.loadMoreKey = false
          if (err1) {
            Toast(err1)
          }
          if (res1.code === 0) {
            let dataMsg = res1.data
            if (empty(data)) {
              if (dataMsg.goodsInfo.length === 0) {
                this.goodsListNoList = true
                this.goodsListKey = true
              } else {
                this.goodsListArr = dataMsg.goodsInfo
                this.goodsListLastId = dataMsg.lastId
              }
            } else {
              if (dataMsg.goodsInfo.length === 0) {
                this.goodsListKey = true
              } else {
                this.goodsListArr = [this.goodsListArr, ...dataMsg.goodsInfo]
                this.goodsListLastId = dataMsg.lastId
              }
            }
          }
          break
      }
    },
    goToShopList (list) {
      this.$router.push({ path: '/pages/storeDetail/index', query: { storeId: list.storeId } })
    },
    goToGoodsList (list) {
      this.$router.push({ path: '/pages/goodsDetail/index', query: { goodsId: list.goodsId } })
    }
  }
}
</script>
<style lang="scss">

.myCollection{
  .scroll-box {
    padding-top: 20px;
    .shop {
      .shop-box {
        padding-top:20px;
        background-color:#fff;
        .shop-list {
          position: relative;
          .soild-li {
            position: absolute;
            height: 1px;
            width: 65%;
            bottom: 0;
            background-color: #f3f4f5;
            right: 0;
          }
          .van-card {
            height: 190px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            background-color: #fff;
            /*:first-child {*/
              /*padding-top: 40px;*/
            /*}*/
            .van-card__content {
              /*border-bottom: 1px solid #F3F4F5;*/
            }
            .van-card__thumb {
              padding-right: 40px;
            }
            .title-class {
              height: 150px;
              width: 450px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-start;
              padding-left: 20px;
              .top {
                font-size:30px;/*px*/
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(51,51,51,1);
                .goods-title{

                }
                .goods-position {
                  display:flex;
                  justify-content: flex-start;
                  align-items: center;
                  i{
                    width:23px;
                    height:30px;
                    -webkit-background-size: cover;
                    background-size: cover;
                    margin-right: 15px;
                  }
                }
                .goods-position-into {
                  font-size:24px;/*px*/
                  font-family:PingFang-SC-Medium;
                  font-weight:500;
                  color:rgba(165,164,164,1);
                }
              }
            }
            .thumb-class {
              width: 220px;
              height: 150px;
              -webkit-background-size: cover;
              background-size: cover;
            }
            .tags-icon {
              width: 30px;
              height: 60px;
              -webkit-background-size: cover;
              background-size: cover;
              position: absolute;
              top:-10rpx;
              left:-60rpx;
              font-size:20px;/*px*/
              font-family:PingFang-SC-Medium;
              font-weight:500;
              color:rgba(255,255,255,1);
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items:flex-start;
              padding-top:5px;
              writing-mode: vertical-lr;
            }
          }
        }
      }
    }
    .commodity {
      .commodity-box {
        .com-list-box {
          .com-list {
            padding-bottom: 20px;
            .head {
              height: 120px;
              display: flex;
              background-color: #fff;
              justify-content: flex-start;
              align-items: center;
              padding-left: 30px;
              border-bottom: 1px solid #F3F4F5;
              .shop-head {
                width: 68px;
                height: 68px;
                border-radius: 50%;
                -webkit-background-size: cover;
                background-size: cover;
              }
              .shop-title {
                padding-left: 25px;
                font-size:30px;/*px*/
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(67,67,67,1);
              }
            }
            .goods {
              .van-card {
                background-color: #fff;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                padding: 20px 30px;
                .thumb-class {
                  width: 160px;
                  height: 160px;
                  border-radius: 6px;
                  -webkit-background-size: cover;
                  background-size: cover;
                }
                .title-class {
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  align-items: stretch;
                  height: 160px;
                  .info {
                    .goods-title {
                      font-size:28px;/*px*/
                      color:rgba(67,67,67,1);
                    }
                    .goods-info {
                      font-size:24px;/*px*/
                      color:rgba(165,164,164,1);
                    }
                  }
                  .price {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    .price-num {
                      font-size: 24px;/*px*/
                      color:rgba(255,77,70,1);
                      display: flex;
                      justify-content: flex-start;
                      align-items: flex-end;
                      i {
                        font-size:30px;/*px*/
                      }
                    }
                    .price-share {
                      font-size:24px;/*px*/
                      color:rgba(243,157,33,1);
                    }
                  }
                }
                .price-class {
                  font-size:30px;/*px*/
                  color:rgba(255,77,70,1);
                }
              }
            }
          }
        }
      }
    }
  }
}
.wux-tabs__tab--balanced .wux-tabs__tab-bar {
  background:#FF6853!important;
  width:48px;
  height:6px;
  left:50%;
  bottom: 6px;
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
