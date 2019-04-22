<template>
  <div class="addrList">
    <EmptyPage v-if="addrList.length === 0" :content="'暂无收货地址'" :imgUrl="imgUrl"/>
    <AddrCart v-for="(item, index) in addrList"
              :key="index"
              :index="index"
              :consignee="item.consignee"
              :phone="item.phone"
              :isDefault="item.isDefault"
              :address="item.provinceName + item.cityName + item.countyName + item.detailInfo"
              :defaultAddr="defaultAddr"
              :addressId="item.addressId" />
    <div class="button">
      <div class="add">
        <div @click="toAddAddrPage">新增地址</div>
      </div>
      <div class="add" @click="wxAddr">
        <div>微信地址</div>
      </div>
    </div>
    <BlankBottom />
    <van-toast id="van-toast" />
    <van-popup :show="showAuth">
      <div class="dialod">
        <div class="content"><span>去授权使用微信地址？</span></div>
        <div class="action"><span @click="hideDialod">取消</span><span @click="toAuthorize">确定</span></div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import AddrCart from '@/components/AddrCard'
import { getAddrList, addAddr, setDefault, delAddr } from '@/service/getData'
import EmptyPage from '@/components/EmptyPage'
import BlankBottom from '@/components/BlankBottom'
import Toast from '@/static/vant-weapp/toast/toast'
import { mapState } from 'vuex'
export default {
  components: {
    AddrCart,
    EmptyPage,
    BlankBottom
  },
  data () {
    return {
      addrList: [],
      defaultAddr: -1,
      imgUrl: '//imgHost/shopping_noaddress@2x.png',
      showAuth: false
    }
  },
  computed: {
    ...mapState([
      'selectAddr'
    ])
  },
  beforeCreate () {
    console.log('Page [addrList] Vue beforeCreate')
  },
  async created () {
    console.log('Page [addrList] Vue created')
  },
  beforeMount () {
    console.log('Page [addrList] Vue beforeMount')
  },
  mounted () {
    console.log('Page [addrList] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '选择地址'
    })
    // Do some initialize when page load.
    console.log('Page [addrList] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [addrList] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [addrList] onShow')
    this.getAddrList()
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [addrList] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [addrList] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    hideDialod () {
      this.showAuth = false
    },
    showDialod () {
      this.showAuth = true
    },
    wxAddr () {
      let _this = this
      wx.getSetting({
        success (res) {
          if (!res.authSetting['scope.address']) {
            wx.authorize({
              scope: 'scope.address',
              success () {
                // 用户已经同意小程序地址，后续调用接口不会弹窗询问
                _this.getWxAddr()
              },
              fail () {
                // 去授权页面
                _this.showDialod()
              }
            })
          } else {
            _this.getWxAddr()
          }
        },
        fail (err) {
          console.log('getSetting err:', err)
        }
      })
    },
    getWxAddr () {
      let _this = this
      wx.chooseAddress({
        success (res) {
          let consignee = res.userName
          let phone = res.telNumber
          let provinceName = res.provinceName
          let cityName = res.cityName
          let countyName = res.countyName
          let detailInfo = res.detailInfo
          let isDefault = 0
          let data = { consignee, phone, provinceName, cityName, countyName, detailInfo, isDefault }
          _this.addAddr(data)
        }
      })
    },
    toAuthorize () {
      let _this = this
      // 重新调起授权
      wx.openSetting({
        success: (res) => {
          if (res.authSetting['scope.address']) {
            _this.getWxAddr()
          } else {
            console.log('未授权')
          }
        },
        fail: (res) => {
          console.log('授权失败')
        }
      })
      this.hideDialod()
    },
    editAddr (index) {
      this.$store.dispatch('editAddr/setEditAddrData', this.addrList[index])
      this.$router.push('/needLogin/pages/editAddr/index')
    },
    async delAddr (addressId) {
      if (addressId === this.selectAddr.addressId) {
        this.$store.dispatch('selectAddr', { selectAddr: {} })
      }
      let [err, res] = await delAddr({ addressId })
      if (err) {
        Toast(err)
        return false
      }
      if (res.code === 0) {
        Toast(res.msg)
        this.getAddrList()
      }
    },
    async addAddr (data) {
      let [err, res] = await addAddr(data)

      if (err) {
        Toast(err)
        return false
      }
      if (res.code === 0) {
        this.getAddrList()
      } else {
        Toast(res.msg)
      }
    },
    async setDefault (addressId) {
      if (this.defaultAddr === addressId) {
        this.defaultAddr = -1
      } else {
        this.defaultAddr = addressId
      }
      let [err, res] = await setDefault({ addressId })
      if (err) {
        Toast(err)
        return false
      }
      if (res.code === 0) {
        Toast('设置成功')
        this.getAddrList()
      }
    },
    async getAddrList () {
      let [err, res] = await getAddrList()
      if (err) {
        Toast(err)
        return false
      }
      if (res.code === 0) {
        this.addrList = res.data
        this.addrList.forEach(item => {
          if (item.isDefault) {
            this.defaultAddr = item.addressId
          }
        })
      } else {
        Toast(res.msg)
      }
    },
    toAddAddrPage () {
      this.$router.push('/needLogin/pages/addAddr/index')
    },
    choseAddr (index) {
      this.$store.dispatch('selectAddr', { selectAddr: this.addrList[index] })
      this.$router.back({ query: { reload: false } })
    }
  }
}
</script>

<style lang="scss" scoped>
.addrList{
  .dialod {
    display: flex;
    flex-direction: column;
    background-color: white;
    font-size: 30px;
    .content {
      flex: 1;
      display: flex;
      justify-content:center;
      padding: 50px 100px;
      span {
        white-space:nowrap;
      }
    }
    .action {
      display: flex;
      justify-content: center;
      span {
        padding: 20px 0;
        flex: 1;
        text-align: center;
        border: 1px solid #f3f3f3;
      }
    }
  }
  .button {
    position: fixed;
    bottom: 0;
    height: 100px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    .add {
      display: flex;
      justify-content: center;
      align-items: center;
      width:280px;
      height:60px;
      background:linear-gradient(0deg,rgba(255,104,83,1),rgba(255,81,57,1));
      border-radius:30px;
      font-size:30px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color: #FFF;
    }
  }
}
</style>
<style lang="scss">
  page {
    background-color: #F3F4F5;
  }
</style>
