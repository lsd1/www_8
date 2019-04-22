<template>
  <div class="pay">
    <div class="balance"><div>￥</div><div class="num">{{ orderPrice }}</div></div>
    <div class="title">请选择支付方式</div>
    <PayItem v-for="(item, index) in payList"
      :key="index"
      :payIcon="iconList[item.id]"
      :payDesc="item.desc"
      :payTip="item.remark"
      :payId="item.id"
      :payType="payType"
    />
    <div class="pay-bottom">
      <div class="tips">该笔订单可获积分{{ integral }}</div>
      <van-button @click="checkSecondPwd"> 支付（{{ orderPrice }}） </van-button>
    </div>
    <wux-keyboard id="wux-keyboard" />
    <van-toast id="van-toast" />
  </div>
</template>

<script>
// import md5 from 'js-md5'
import { createNamespacedHelpers } from 'vuex'
// import { getPayList, payOrder, continuePay, checkSecondPwd } from '@/service/getData'
import { getPayList, payOrder, continuePay } from '@/service/getData'
import Toast from '@/static/vant-weapp/toast/toast'
import PayItem from '@/components/PayItem'
// import { $wuxKeyBoard } from '@/static/wux-weapp/index'
const { mapState } = createNamespacedHelpers('pay')

export default {
  components: { PayItem },
  data () {
    return {
      type: null,
      radio: null,
      iconList: { 1: '//imgHost/dingdanzhifu_yuezhifu@2x.png', 2: '//imgHost/dingdanzhifu_weixinzhifu@2x.png', 3: '//imgHost/dingdanzhifu_zhifubao@2x.png' },
      payList: [],
      payId: 1,
      payTip: '余额不足',
      payType: null,
      orderPrice: 0,
      orderId: 0,
      orderSn: '',
      integral: 0,
      orderStoreId: 0
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [pay] Vue beforeCreate')
  },
  created () {
    console.log('Page [pay] Vue created')
  },
  beforeMount () {
    console.log('Page [pay] Vue beforeMount')
  },
  mounted () {
    console.log('Page [pay] Vue mounted')
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    console.log('Page [pay] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [pay] onReady')
  },
  async onShow () {
    this.type = this.$router.currentRoute.query.type
    switch (this.type) {
      case '1':
        let data = JSON.parse(this.$router.currentRoute.query.data)
        this.payList = data.payList
        this.integral = data.integral
        this.orderPrice = data.orderPrice
        this.orderSn = data.orderSn
        this.orderId = data.orderId
        this.payList.forEach(item => {
          if (item.isDefault) {
            this.payType = item.id
            return false
          }
        })
        break
      case '2':
        this.orderStoreId = JSON.parse(this.$router.currentRoute.query.orderStoreId)
        let [err, res] = await getPayList({ orderStoreId: this.orderStoreId })
        if (err) {
          Toast(err)
          return false
        }
        if (res.code === 0) {
          this.payList = res.data.payList
          this.integral = res.data.integral
          this.orderPrice = res.data.orderPrice
          this.payList.forEach(item => {
            if (item.isDefault) {
              this.payType = item.id
              return false
            }
          })
          // todo 调起wx支付
        } else {
          Toast(res.msg)
        }
        break
    }
    // Do something when page show.
    console.log('Page [pay] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [pay] onHide')
  },
  onUnload: function () {
    wx.setNavigationBarTitle({
      title: '订单支付'
    })
    // Do something when page close.
    console.log('Page [pay] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    selectPayType (value) {
      this.payType = value
    },
    // async pay () {
    //   let [err, res] = await prepay({ amount: 101 })
    //   if (err) {
    //     Toast(err)
    //     return false
    //   }
    //   if (res.code === 0) {
    //     let appId = 'wxff162416b78c29b9'
    //     let timeStamp = parseInt(new Date().getTime() / 1000).toString()
    //     let nonceStr = timeStamp + Math.random().toString().split('.')[1]
    //     let packages = 'prepay_id=' + res.data.prepayId
    //     let signType = 'MD5'
    //     let key = 'TYkCifqynrsSuGKqooZ7FnQcKJVVQTg1'
    //     let paySign = md5(`appId=${appId}&nonceStr=${nonceStr}&package=${packages}&signType=${signType}&timeStamp=${timeStamp}&key=${key}`).toUpperCase()
    //     wx.requestPayment(
    //       {
    //         'timeStamp': timeStamp,
    //         'nonceStr': nonceStr,
    //         'package': packages,
    //         'signType': 'MD5',
    //         'paySign': paySign,
    //         'success': function (res) {
    //           console.log('success:', res)
    //         },
    //         'fail': function (res) {
    //           console.log('fail:', res)
    //         },
    //         'complete': function (res) {
    //           console.log('complete:', res)
    //         }
    //       })
    //   }
    // },
    // async makeOrder () {
    //   // console.log(res)
    //   // let timeStamp = parseInt(new Date().getTime() / 1000).toString()
    //   // let orderApi = 'https://api.mch.weixin.qq.com/pay/unifiedorder'
    //   // let openid = 'openid=ooc_ls9O1AbWAILPDJEytcIQkRcw'
    //   // let appid = 'appid=wxff162416b78c29b9'
    //   // let mch_id = 'mch_id=1351592401'
    //   // let device_info = 'device_info=WEB'
    //   // let nonce_str = 'nonce_str=' + timeStamp + Math.random().toString().split('.')[1]
    //   // let sign_type = 'sign_type=MD5'
    //   // let body = 'body=test'
    //   // let out_trade_no = 'out_trade_no=DFGHJKCVBNMFGHJKLBNM'
    //   // let total_fee = 'total_fee=1'
    //   // let spbill_create_ip = 'spbill_create_ip=223.104.64.158'
    //   // let notify_url = 'notify_url=http://192.168.1.238'
    //   // let trade_type = 'trade_type=JSAPI'
    //   // let params = [openid, appid, mch_id, device_info, nonce_str, sign_type, body, out_trade_no, total_fee, spbill_create_ip, notify_url, trade_type]
    //   // let sign = md5(params.sort().join('&')).toUpperCase()
    //   // console.log('params:', params.sort().join('&'))
    // },
    onChange (e) {
      this.radio = e.detail
    },
    checkSecondPwd () {
      this.toPay()
      // let _this = this
      // $wuxKeyBoard().show({
      //   async callback (value) {
      //     let secpwd = md5(value)
      //     let [err, res] = await checkSecondPwd({ secpwd })
      //     if (err) {
      //       Toast(err)
      //       return false
      //     }
      //     if (res.code === 0) {
      //       _this.toPay()
      //     } else {
      //       Toast(res.msg)
      //       return false
      //     }
      //   }
      // })
    },
    async toPay () {
      console.log(typeof this.type)
      switch (this.type) {
        case '1':
          let data1 = {}
          data1.orderId = this.orderId
          data1.orderPrice = this.orderPrice
          data1.orderSn = this.orderSn
          data1.payType = this.payType
          let [err1, res1] = await payOrder(data1)
          if (err1) {
            Toast(err1)
            return false
          }
          if (res1.code === 0) {
            // todo 调起相关支付
            Toast(res1.msg)
            this.$router.replace({ path: '/needLogin/pages/payRes/index', isTab: false, query: { orderType: res1.data.orderType, orderStoreId: this.orderStoreId, orderPrice: this.orderPrice } })
          } else {
            Toast(res1.msg)
          }
          break
        case '2':
          let data2 = {}
          data2.orderStoreId = this.orderStoreId
          data2.price = this.orderPrice
          data2.payType = this.payType
          let [err2, res2] = await continuePay(data2)
          if (err2) {
            Toast(err2)
            return false
          }
          if (res2.code === 0) {
            // todo 调起相关支付
            // Toast(res1.msg)
            this.$router.replace({ path: '/needLogin/pages/payRes/index', isTab: false, query: { orderType: res2.data.orderType, orderStoreId: this.orderStoreId, orderPrice: this.orderPrice } })
          } else {
            Toast(res2.msg)
          }
          break
        default:
          console.log('typeof type3:', typeof this.type)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pay{
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    font-size:24px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(165,164,164,1);
    padding: 25px;
  }
  .balance {
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 45px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color: #FF4D46;
    .yun {
      font-size:30px;
    }
    .num {
      font-size:48px;
    }
  }
  .pay-bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 30px;
    .tips{
      font-size:30px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color: #A5A4A4;
      text-align: center;
      margin-bottom: 40px;
    }
  }

}
</style>
<style lang="scss">
page {
  height: 100%;
  background-color: #F3F4F5;
  ._van-button {
    display: flex;
    justify-content: center;
  }
  .van-button {
    width: 90%;
    color: #FFF;
    background:linear-gradient(90deg,rgba(255,104,83,1),rgba(255,81,57,1));
    border-radius:44px;
    font-size:30px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
}
</style>
