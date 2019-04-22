<template>
  <div class="platformAppeal">
    <div class="input">
      <wux-textarea type="text" placeholder="请输入您要平台申诉的原因（120字以内）"  :maxlength="120" placeholder-style="font-weight:500;color:#A5A4A4;" />
    </div>
    <div class="btn">
      <van-button size="large" round type="danger" @click="submitContent">提交</van-button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('platformAppeal')

export default {
  components: {},
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [platformAppeal] Vue beforeCreate')
  },
  created () {
    console.log('Page [platformAppeal] Vue created')
  },
  beforeMount () {
    console.log('Page [platformAppeal] Vue beforeMount')
  },
  mounted () {
    console.log('Page [platformAppeal] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '平台申诉'
    })
    // Do some initialize when page load.
    console.log('Page [platformAppeal] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [platformAppeal] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [platformAppeal] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [platformAppeal] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [platformAppeal] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {}
}
</script>

<style lang="scss">
.platformAppeal{
  .input {
    .wux-textarea {
      font-size:24px;/*px*/
      font-family:PingFang-SC-Medium;
      font-weight:500;
      line-height: 30px;
      /*color:rgba(165,164,164,1);*/
      color: #333333;
      .wux-textarea__control {
        .wux-textarea__item {
          height: 200px;
        }
      }
    }
  }
  .btn {
    width: 90%;
    margin: auto;
    padding-top: 300px;
  }
}
</style>
