<template>
  <div class="app">

  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('index')

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
    console.log('Page [index] Vue beforeCreate')
  },
  created () {
    console.log('Page [index] Vue created')
  },
  beforeMount () {
    console.log('Page [index] Vue beforeMount')
  },
  mounted () {
    console.log('Page [index] Vue mounted')
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    console.log('Page [index] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [index] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [index] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [index] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [index] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {}
}
</script>

<style lang="scss" scoped>
.app{
  padding-top: 100px;
  .img {
    display: block;
    height: 120px;
    width: 138px;
    margin: 20px auto;
  }
}
</style>
