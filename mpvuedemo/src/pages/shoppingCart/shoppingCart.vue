<template>
  <div class="shoppingCart">
      <van-checkbox-group  :value="checks" >
          <ShopItem v-for="(item1, index1) in shoppingCart"
                       :key="index1"
                       :checks="checks"
                       :shopName="item1.storeInfo.shopName"
                       :shopImg="item1.storeInfo.shopImg"
                       :shopKey="item1.storeInfo.shopKey"
                       :storeId="item1.storeInfo.storeId"
                       :checkChange="onChange"
          >
             <GoodsItem v-for="(item2, index2) in item1.goodsList"
                        :key="index2"
                        :invalid="item2.invalid"
                        :goodsName="item2.goodsName"
                        :goodsImg="item2.goodsImg"
                        :goodsSku="item2.goodsSku"
                        :goodsPrice="item2.goodsPrice"
                        :storeId="item1.storeInfo.storeId"
                        :goodsId="item2.goodsId"
                        :jointKey="item2.jointKey"
                        :shopKey="item1.storeInfo.shopKey"
                        :cartId = "item2.cartId"
                        :cartIds = "cartIds"
                        :goodsNum="item2.goodsNum"
                        :checks="checks"
                        :index="index2"
                        :indexes="index1 + '-' + index2"
                        :actions="actions"
                        :checkChange="onChange"
             />
           </ShopItem>
          <template v-if="shoppingCart.length === 0">
              <EmptyPage content="购物车是空的" imgUrl="//imgHost/smallprogram_thereisnogoods@2x.png" />
              <div class="empty-tip" @click="toHome">去逛逛!</div>
          </template>
          <div class="bottom1">
              <div class="select">
                  <van-checkbox name="all" @click="onChange('all')">全选</van-checkbox>
              </div>
              <div class="amount">
                  <div class="all-txt">合计</div><div>￥：</div><div>{{ selectedGoodsAmount }}</div>
              </div>
              <div class="cal" :class="{noCard: shoppingCart.length === 0}">
                  <van-button round type="danger" @click="toMakeOrder" ><div >结算({{ selectedGoodsNum }})</div></van-button>
              </div>
          </div>
      </van-checkbox-group>
      <!--<van-toast id="van-toast" />-->
      <!--<van-dialog id="van-dialog" />-->
  </div>
</template>

<script>
import { Stepper, Button, Checkbox, CheckboxGroup, Toast, Dialog } from 'vant'
import { createNamespacedHelpers } from 'vuex'
import GoodsItem from '@/componentsWeb/GoodsItem'
import ShopItem from '@/componentsWeb/ShopItem'
import EmptyPage from '@/componentsWeb/EmptyPage'
import empty from 'is-empty'
import { delGoods, changeGoodsNum, collectGoods } from '@/service/getData'
const { mapState } = createNamespacedHelpers('shoppingCart')

export default {
  components: {
    [Stepper.name]: Stepper,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    ShopItem,
    GoodsItem,
    EmptyPage
  },
  data () {
    return {
      actions: [
        {
          name: '收藏',
          color: '#fff',
          fontsize: '14',
          width: 60,
          background: '#F39D21'
        },
        {
          name: '删除',
          color: '#fff',
          fontsize: '14',
          width: 60,
          background: '#FF4D46'
        }
      ],
      isLogin: false
    }
  },
  computed: {
    ...mapState([
      'shoppingCart',
      'checks',
      'checkTree',
      'cartIds',
      'selectedGoodsAmount',
      'selectedGoodsNum',
      'cartCount'
    ]),
    swiperArr () {
      let allSwiper = []
      for (let i = 0; i < this.cartCount; i++) {
        allSwiper.push(this.$mp.page.selectComponent('#swiper' + i))
      }
      return allSwiper
    }
  },
  beforeCreate () {
    console.log('Page [shoppingCart] Vue beforeCreate')
  },
  async created () {
    const token = localStorage.getItem('token')
    if (empty(token)) {
      this.onNoLogin()
    } else {
      this.isLogin = true
    }
    console.log('Page [shoppingCart] Vue created')
  },
  beforeMount () {
    console.log('Page [shoppingCart] Vue beforeMount')
  },
  async mounted () {
    console.log('Page [shoppingCart] Vue mounted')
    if (!this.isLogin) return false
      let res = await this.$store.dispatch('shoppingCart/getShoppingCart')
      if (res.type === 'err') {
        Toast(res.msg)
        return false
      } else {
        this.$store.dispatch('setCartCount', { cartCount: this.cartCount })
      }
  },
  // onLoad: function (options) {
  //   wx.setNavigationBarTitle({
  //     title: '购物车'
  //   })
  //   // Do some initialize when page load.
  //   console.log('Page [shoppingCart] onLoad')
  // },
  // onReady: function () {
  //   // Do something when page ready.
  //   console.log('Page [shoppingCart] onReady')
  // },
  // onShow: async function () {
  //   // Do something when page show.
  //   console.log('Page [shoppingCart] onShow')
  //   if (!this.isLogin) return false
  //   let res = await this.$store.dispatch('shoppingCart/getShoppingCart')
  //   if (res.type === 'err') {
  //     Toast(res.msg)
  //     return false
  //   } else {
  //     this.$store.dispatch('setCartCount', { cartCount: this.cartCount })
  //   }
  // },
  // async onHide () {
  //   // Do something when page hide.
  //   console.log('Page [shoppingCart] onHide')
  // },
  // onUnload: function () {
  //   // Do something when page close.
  //   console.log('Page [shoppingCart] onUnload')
  // },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    onNoLogin () {
      Dialog.confirm({
        message: '请先登录！'
      }).then(() => {
        this.$router.push({ path: '/pages/login/index', query: { redirectUrl: JSON.stringify({ path: '/pages/shoppingCart/index', isTab: true }) } })
      }).catch(() => {
        this.$router.push({ path: '/pages/home/index', isTab: true })
      })
    },
    hideSwiper (exclude) {
      this.swiperArr.forEach(function (item, index) {
        if (exclude) {
          if (exclude !== index) {
            item.close()
          }
        }
      })
    },
    async onChange (value) {
      console.log('value:', value)
      if (empty(this.checkTree)) {
        return false
      }
      let type
      if(this.checks.includes(value)) {
        type = 'del-'
      } else {
        type = 'add-'
      }

      let keyArr = value.split('-')
      let shopKey = null
      let jointKey = null
      if (value === 'all') {
        type += 'all'
      } else if (keyArr.length === 2) {
        type += 'shop'
        shopKey = value
      } else {
        type += 'goods'
        keyArr.pop()
        shopKey = keyArr.join('-')
        jointKey = value
      }
      let res = await this.$store.dispatch('shoppingCart/checkChange', { type: type, shopKey: shopKey, jointKey: jointKey })
      if (res.type === 'err') {
        Toast(res.msg)
      }
    },
    async updateNum (data) {
      console.log('cart num change')
      let [err, res] = await changeGoodsNum(data)
      if (err) {
        Toast(err)
        return false
      }
      if (res.code === 0) {
        this.$store.dispatch('shoppingCart/updateNum', data)
        return true
      } else {
        Toast(res.msg)
        return false
      }
    },
    async onSwipClick (data) {
      if (data.type === 1) {
        Dialog.confirm({
          message: '确认删除？'
        }).then(async () => {
          let [err, res] = await delGoods({ cartId: data.cartId })
          if (err) {
            Toast(err)
            return false
          }
          if (res.code === 0) {
            // Todo delete
            this.$store.dispatch('shoppingCart/delGoods', data)
            this.$store.dispatch('setCartCount', { cartCount: (this.cartCount - 1) })
            Toast('删除成功')
            return false
          } else {
            Toast(res.msg)
            return false
          }
        }).catch(() => {
          // on cancel
        })
      } else if (data.type === 0) {
        let [err, res] = await collectGoods({ goodsId: data.goodsId })
        if (err) {
          Toast(err)
          return false
        }
        if (res.code === 0) {
          Toast('收藏成功')
        } else {
          Toast(res.msg)
        }
      }
    },
    toMakeOrder (e) {
      if (this.selectedGoodsNum === 0 && this.shoppingCart.length === 0) {
        Toast('购物车是空的')
        return false
      }
      if (this.selectedGoodsNum === 0) {
        Toast('请选择商品')
        return false
      }
      this.$router.push({ path: '/needLogin/pages/makeOrder/index', query: { cartIds: this.cartIds.join(',') } })
    },
    toHome () {
      this.$router.push({ path: '/pages/home/index', isTab: true })
    }
  }
}
</script>

<style lang="scss" scoped>
.shoppingCart {
    van-checkbox-group {
        margin-bottom: 100px;
    }
    background-color: #f3f4f5;
    .wux-avatar {
        width: 68px;
        height: 68px;
        border-radius: 34px;
    }
    .bottom1 {
        padding: 0 30px;
        position: fixed;
        bottom: 0;
        height: 100px;
        width: 100%;
        background-color: #FFF;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .select {
            van-checkbox {
                transform: scale(0.8,0.8);
            }
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size:30px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            width: 122px;
            height: 42px;
            color:rgba(51,51,51,1);
        }
        .amount {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-basis: 250px;
            font-size:30px;
            font-family:PingFang-SC-Heavy;
            font-weight:800;
            color:rgba(255,77,70,1);
            .all-txt {
                color: #000;
            }
        }
        .cal {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-basis: 300px;
            font-size:30px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
        }

    }
    .empty-tip {
        text-align: center;
        font-size:24px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(153,153,153,1);
    }
}
</style>
<style lang="scss">
page {
    background-color: #f3f4f5;
}
.cal{
    .van-button--round {
        /*width: 200px;*/
        /*height: 64px;*/
        /*line-height:60px;*/
        width:220px;
        height:64px;
        line-height: 64px;
        background:linear-gradient(90deg,rgba(255,104,83,1),rgba(255,81,57,1));
        box-shadow:0px 10px 14px 2px rgba(255,77,70,0.3);
        border-radius:32px;
    }
}
.noCard {
    .van-button--round {
        opacity: .8;
    }
}
.select {
    van-checkbox {
        width: 120px;
        height: 42px;
    }
}
</style>
