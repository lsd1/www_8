<template>
  <div class="app">
      <img class="img" :src="logo" @touchstart="changeStat">
      <hello-world :msg="acc" :color="color"></hello-world>
      <van-toast  id="van-toast" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Toast from '@/static/vant-weapp/dist/toast/toast';
export default {
  components: {
      HelloWorld
  },
  data() {
    return {
      logo: 'https://user-images.githubusercontent.com/20720117/48262986-80e02780-e45f-11e8-8426-2872916adad9.png',
      color: '#007d37',
      acc: 'hello lsd'
    }
  },
  beforeCreate() {
    console.log('Page [test] Vue beforeCreate')
  },
  created() {
    console.log('Page [test] Vue created')
    var appInstance = getApp()
    console.log(appInstance.globalData) // I am global data
  },
  beforeMount() {
    console.log('Page [test] Vue beforeMount')
  },
  mounted() {
    // this.id = this.$router.query.id;
    console.log('Page [test] Vue mounted')
  },
  onLoad: function(options) {
    // Do some initialize when page load.
    console.log('Page [test] onLoad')
  },
  onReady: function() {
      setTimeout(() => {
          Toast.success('get id : ' + this.$router.currentRoute.query.id + ' from route');
      }, 1000);
      console.log('testcurrentRoute:', this.$router.currentRoute);
      // Do something when page ready.
    console.log('Page [test] onReady')
  },
  onShow: function() {
    // Do something when page show.
    console.log('Page [test] onShow')
  },
  onHide: function() {
    // Do something when page hide.
    console.log('Page [test] onHide')
  },
  onUnload: function() {
    // Do something when page close.
    console.log('Page [test] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods:{
    changeStat: function(){
      this.t++
      this.color = '#'+Math.floor(Math.random()*0xffffff).toString(16)
    }
  }
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
  .txt {
      color: #567567;
      font-size: 13px;
      text-align: center;
  }
}
</style>
