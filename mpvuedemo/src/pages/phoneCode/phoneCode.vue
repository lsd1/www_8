<template>
  <div class="phone-code-app">
    <div class="phone-code-title">
      <div class="title-text">验证码已发送至</div>
      <div class="title-number">{{ mosaicMobile }}</div>
    </div>
    <div class="input-code-box">
      <div class="input-code" @click="openKeyWord">
        <div class="num" v-for="(i, index) in codeArr"  :key="index">{{ i }}</div>
      </div>
      <input class="input-class" v-model="code" type="number">
      <div class="status-text" :class="{noStatus: canCodeClick}" @click="getCode">{{ statusTxt }}</div>
    </div>
    <div class="btn-next" :class="{noClick: !canClick}" @click="pushCode">绑定</div>
    <van-toast id="van-toast"/>
  </div>
</template>

<script>
import Toast from '@/static/vant-weapp/toast/toast'
import { sendVerifyCode, register } from '@/service/getData'

import { mapState } from 'vuex'

export default {
  components: {},
  data () {
    return {
      code: '',
      codeArr: ['', '', '', '', '', ''],
      canClick: false,
      timer: null, // 倒计时器
      time: 5,
      statusTxt: '重新获取',
      canCodeClick: false,
      mobile: null,
      mosaicMobile: ''
    }
  },
  computed: {
    ...mapState([
      'oauthUserId',
      'oauthClientToken'
    ])
  },
  watch: {
    code (newV, oldV) {
      console.log(newV)
      let numLen = newV.length
      console.log('watch')
      console.log(newV.length)
      this.canClick = false
      if (numLen > 6) {
        this.code = oldV
        console.log(this.code)
        return false
      } else if (this.code.length === 6) {
        this.canClick = true
      }
      for (var i = 0; i < 6; i++) {
        if (6 - numLen > 0) {
          if (i >= numLen) {
            this.codeArr[i] = ''
          }
        }
        this.codeArr[i] = newV[i]
      }
    }
  },
  filters: {

  },
  beforeCreate () {
    console.log('Page [phoneCode] Vue beforec')
  },
  cd () {
    console.log('Page [phoneCode] Vue cd')
  },
  beforeMount () {
    // console.log(this)
    this.mobile = this.$router.currentRoute.query.mobile || '13613040010'
    this.mosaicMobile = this.mobile.slice(0, 3) + '****' + this.mobile.slice(7)
    console.log('Page [phoneCode] Vue beforeMount')
  },
  mounted () {
    console.log('Page [phoneCode] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '绑定手机号'
    })
    // Do some initialize when page load.
    console.log('Page [phoneCode] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [phoneCode] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [phoneCode] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [phoneCode] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [phoneCode] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    async pushCode () {
      if (!this.canClick) {
        return false
      }

      // 发起请求
      let [err, res] = await register({
        oauthUserId: this.oauthUserId,
        oauthClientToken: this.oauthClientToken,
        mobile: this.mobile,
        verifycode: this.code
      })

      if (err) {
        Toast(err)
        return false
      }
      if (res.code !== 0) {
        Toast(res.msg)
        return false
      }

      let data = res.data
      // let data = {
      //   token: '221576cde0a9944327502c148e0c7e46',
      //   loginInfo: {
      //     'uid': 100248,
      //     'uno': 61667368,
      //     'avatar': 'http://app.img.maiguoer.com/member/avatar.png',
      //     'hxname': '100248',
      //     'hxpwd': '821c7b52df66ea267ce61c820128b3f3',
      //     'hasPut': 1,
      //     'isSetSecPassword': 0,
      //     'authStatus': 0,
      //     'businessAuthStatus': 0
      //   }
      // }

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
      this.canClick = false
      console.log(this.code)
      // Toast(this.code)
      this.$router.push({ path: '/pages/home/index', isTab: true })
      // Toast('验证码错误')
    },
    async getCode () {
      if (this.canCodeClick) {
        return false
      }

      let [err, res] = await sendVerifyCode({ mobile: this.mobile })
      if (err) {
        Toast(err)
        return false
      }
      if (res.code !== 0) {
        Toast(res.msg)
        return false
      }
      this.timer = setInterval(() => {
        this.statusTxt = this.time + 's后重新获取'
        this.canCodeClick = true
        this.time--
        if (this.time < 0) {
          Toast('关闭')
          this.canCodeClick = false
          this.statusTxt = '重新获取'
          clearInterval(this.timer)
          this.timer = null
          this.time = 5
        }
        console.log(this.time)
      }, 1000)
    }
  }
}
</script>

<style lang="scss" >
.phone-code-app{
  padding: 60px 30px 0 30px;
  .phone-code-title {
    font-family:PingFang-SC-Medium;
    color:rgba(51,51,51,1);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 120px;
    .title-text {
      font-size: 30px;/*px*/
    }
    .title-number {
      font-size: 50px;/*px*/
      font-weight:500;
    }
  }
  .input-code-box {
    position: relative;
    padding-bottom: 140px;
    .input-code {
      position: absolute;
      top: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      .num {
        width: 80px;/*px*/
        height: 80px;/*px*/
        border-bottom: 1px solid #A5A4A4;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .input-class {
      height: 80px;/*px*/
      color: #fff;
      background-color: rgba(0,0,0,0);
      opacity: 0;
      position: absolute;
      left: -30%;
      width: 200%;
    }
    .status-text {
      display: inline-block;
      padding-top: 120px;
      font-size:24px;/*px*/
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,77,70,1);
    }
    .noStatus {
      color:rgba(165,164,164,1);
    }
  }
  .btn-next {
    width: 690px;
    height: 88px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    border-radius: 50em;
    background-color: #FF5139;
    font-size:30px;/*px*/
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(255,255,255,1);
  }
  .noClick {
    opacity: .5;
  }
}
.wux-keyboard {
  .wux-keyboard__hd, .wux-keyboard__bd {
    display: none;
  }

}
  .backdrop-index--wux-backdrop ,.wux-backdrop  {
    background: none!important;
  }
</style>
