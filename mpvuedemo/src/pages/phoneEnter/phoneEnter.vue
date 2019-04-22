<template>
  <div class="phone-enter-app">
    <div class="phone-enter" >
      <van-field
              :value=mobile
              clearable
              type="number"
              placeholder="请输入你的手机号"
              placeholder-style="color: #A5A4A4;"
              @change=onChange
      ></van-field>
      <div class="next-button" @click="onClickIcon" :class="{opacityButton: !canClick}">下一步</div>
    </div>
    <van-toast id="van-toast"/>
  </div>
</template>

<script>
import Toast from '@/static/vant-weapp/toast/toast'
import { createNamespacedHelpers } from 'vuex'
import { checkMobile, sendVerifyCode } from '@/service/getData'
const { mapState } = createNamespacedHelpers('phoneEnter')

export default {
  components: {},
  data () {
    return {
      mobile: '',
      canClick: false // 可点击状态控制
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforec () {
    console.log('Page [phoneEnter] Vue beforec')
  },
  cd () {
    console.log('Page [phoneEnter] Vue cd')
  },
  beforeMount () {
    console.log('Page [phoneEnter] Vue beforeMount')
  },
  mounted () {
    console.log('Page [phoneEnter] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '绑定手机号'
    })
    // Do some initialize when page load.
    console.log('Page [phoneEnter] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [phoneEnter] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [phoneEnter] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [phoneEnter] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [phoneEnter] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    async onChange ({ detail }) {
      console.log('detail:', detail)
      if (detail.length < 11 || detail.length > 11) {
        this.canClick = false
        return false
      }
      if (!(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(Number(detail)))) {
        Toast('请填写正确的手机号')
        this.canClick = false
        return false
      }
      let [err, res] = await checkMobile({ mobile: detail })
      if (err) {
        Toast(err)
        return false
      }
      if (res.code === 303) {
        Toast(res.msg)
      } else if (res.code !== 0) {
        Toast(res.msg)
        return false
      }
      this.mobile = detail.toString()
      this.canClick = true
    },
    async onClickIcon (event) {
      if (!this.canClick) {
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
      // 提交成功或者失败时,清空输入框
      // setTimeout(() => {
      //   this.mobile = ''
      // }, 1000)
      this.$router.push({ path: '/pages/phoneCode/index', query: { mobile: this.mobile } })
    }
  }
}
</script>

<style lang="scss" >
.phone-enter-app{
  padding-top: 100px;
  .phone-enter {
    width: 520px;
    margin: auto;
    .next-button {
      margin-top: 120px;
      width: 100%;
      height: 80px;
      border-radius: 50em;
      background-color: #ff543d;
      font-size:30px;/*px*/
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(255,255,255,1);
      display:flex;
      justify-content:center;
      align-items:center;
    }
  }
}
  .opacityButton {
    opacity: .5;

  }
  van-field {
    padding-bottom: 120px;
  }
  van-cell .van-cell {
    border-bottom: 1px solid #E0E1E2;
    padding:5px 0;
  }
  van-button {
    width: 520px;
    height: 80px;
  }
</style>
