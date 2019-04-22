<template>
  <div class="balanceDescription">
    <div class="title">余额:</div>
    <div class="description">脉果儿用户目前可使用的额度，可以用于提现、商户消费、充值、发红包等。</div>
  </div>
</template>

<script>
import '@/static/css/public.scss'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('balanceDescription')

export default {
  components: {},
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [balanceDescription] Vue beforeCreate')
  },
  created () {
    console.log('Page [balanceDescription] Vue created')
  },
  beforeMount () {
    console.log('Page [balanceDescription] Vue beforeMount')
  },
  mounted () {
    console.log('Page [balanceDescription] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '余额说明'
    })
    // Do some initialize when page load.
    console.log('Page [balanceDescription] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [balanceDescription] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [balanceDescription] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [balanceDescription] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [balanceDescription] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {}
}
</script>
<style lang="scss" scoped>

.balanceDescription{
  padding: 30px;
  background-color: #fff;
  .title {
    font-size:30px;/*px*/
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,77,70,1);
  }
  .description {
    padding-top: 30px;
    font-size:30px;/*px*/
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
}
</style>
