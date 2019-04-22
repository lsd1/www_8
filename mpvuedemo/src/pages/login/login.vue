<template>
  <div class="login">
    <img lazy-load="true"  class="logo" src="http://www.maiguoer.com/favicon.ico">
    <div class="slogan">上脉果儿购实惠</div>
    <button class="btn"
            open-type="getUserInfo"
            @getuserinfo="getAuth"
    >
      微信登陆
    </button>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import { login } from '@/service/getData'
import Toast from '@/static/vant-weapp/toast/toast'
import empty from 'is-empty'

export default {
  components: {},
  data () {
    return {
      code: null
    }
  },
  computed: {},
  beforeCreate () {
    console.log('Page [login] Vue beforeCreate')
  },
  created () {
    let urlString = this.$router.currentRoute.query.redirectUrl
    if (empty(urlString)) {
      this.redirectUrl = { path: '/pages/home/index', isTab: true }
    } else {
      this.redirectUrl = JSON.parse(urlString)
    }
    console.log('Page [login] Vue created')
  },
  beforeMount () {
    console.log('Page [login] Vue beforeMount')
  },
  mounted () {
    console.log('Page [login] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '登陆'
    })
    // Do some initialize when page load.
    console.log('Page [login] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [login] onReady')
  },
  async onShow () {
    let _this = this
    wx.login({
      success (res) {
        if (res.code) {
          console.log('code:', res.code)
          _this.code = res.code
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    // Do something when page show.
    console.log('Page [login] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [login] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [login] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    async getAuth (e) {
      console.log('code:', this.code)
      let [err, res] = await login({ code: this.code, encryptedData: e.detail.encryptedData, iv: e.detail.iv })
      if (err) {
        Toast(err)
        console.log(err)
        return false
      }
      if (res.code === 302) {
        this.$store.dispatch('setRegisterInfo', { oauthUserId: res.data.oauthUserId, oauthClientToken: res.data.oauthClientToken })
        this.$router.push({ path: '/pages/phoneEnter/index' })
      } else if (res.code === 0) {
        console.log('typeof detail:', typeof detail)
        let data = res.data
        wx.setStorage({
          key: 'token',
          data: data.token
        })

        for (let i in data.loginInfo) {
          wx.setStorage({
            key: i,
            data: data.loginInfo[i]
          })
        }
        this.$router.push(this.redirectUrl)
      } else {
        Toast(res.msg)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    width: 100px;
    height: 100px;
    margin-top: 100px;
    border-radius: 10px;
  }
  .btn {
    width: 60%;
    background-color: red;
    height: 80px;
    color: white;
    margin-top: 200px;
    border-radius: 40px;
    line-height: 80px;
  }
  .slogan {
    color: #ccc;
    font-size: 20px;
    margin-top: 10px
  }
}
</style>
