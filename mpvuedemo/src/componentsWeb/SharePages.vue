<template>
	<div class="share-page" @touchmove.stop="touchmoveHandler">
		<van-action-sheet
				:show="showShareApp"
				@close="closeShareApp"
		>
			<div class="share-box">
				<div class="share-title">
					分享到:
				</div>
				<div class="share-list">
					<div class="wechat" @click="test">
						<button open-type="share" @click="onShareWechat" hover-class="none">
							<img src="//imgHost/common_share05@2x.png" alt="">
							微信
						</button>
					</div>
					<div class="circle">
						<button @click="onShareCircle" hover-class="none">
							<img src="//imgHost/common_share06@2x.png" alt="">
							朋友圈
						</button>
					</div>
				</div>
				<div class="cancel" @click="onShare">取消</div>
			</div>
		</van-action-sheet>
		<van-toast id="van-toast" />
		<div class="showCanvasClass" v-if="showCanvas">
			<van-popup  :show="showCanvas">
				<canvas :style="{width: 617 * (deviceWidth / 750) + 'px', height: 792 * (deviceWidth / 750) + 'px'}" canvas-id="shareCanvas"></canvas>
				<div class="saveToPhoto" @click="savePhoto">保存到相册</div>
				<div class="close" @click="onCloseCanvas"></div>
			</van-popup>
		</div>
		<van-dialog id="van-dialog" />
	</div>
</template>

<script>
import empty from 'is-empty'
import Dialog from '@/static/vant-weapp/dialog/dialog'
import { getWxCode } from '@/service/getData'
export default {
  data () {
    return {
      deviceWidth: null, // 屏幕宽度
      showCanvas: false, // 获取用户信息按钮
      showShareApp: false, // 显示分享界面
      isLogin: false
    }
  },
  props: {
    'imgShareArr': {
      default: [],
      type: Array
    },
    'from': {
      default: '',
      type: String
    },
    'shareInfo': {
      default: {},
      type: Object
    }
  },
  created () {
    let _this = this
    wx.getSystemInfo({
      success (res) {
        console.log(res)
        _this.deviceWidth = res.screenWidth
      }
    })
    console.log('deviceWidth', this.deviceWidth)
    console.log('imgArr', this.imgShareArr)
  },
  mounted () {
    console.log('imgArr', this.imgShareArr)
  },
  onShow () {
    console.log('imgArr', this.imgShareArr)
  },
  methods: {
    touchmoveHandler () {},
    onNoLogin () {
      Dialog.confirm({
        message: '请先登录！'
      }).then(() => {
        this.$router.push({ path: '/pages/login/index', query: { redirectUrl: JSON.stringify({ path: '/pages/goodsDetail/index', query: {} }) } })
      }).catch(() => {
        this.$router.push({ path: '/pages/home/index', isTab: true })
      })
    },
    onShareApp () {
      // this.$refs('sharePage').
      const token = wx.getStorageSync('token')
      if (empty(token)) {
        this.onNoLogin()
        return false
      } else {
        this.isLogin = true
      }
      if (!this.isLogin) return false
      this.onShare()
      console.log('imgArr', this.imgShareArr)
    },
    closeShareApp () {
      this.onShare()
    },
    onShare () {
      this.showShareApp = !this.showShareApp
    },
    async onShareWechat () {
      this.onShare()
    },
    onShowCircle () {
      this.showCanvas = !this.showCanvas
    },
    wxPromisify (fn) {
      return function (obj = {}) {
        return new Promise((resolve, reject) => {
          obj.success = function (res) {
            resolve(res)
          }
          obj.fail = function (res) {
            reject(res)
          }
          fn(obj)
        })
      }
    },
    async onShareCircle () {
      console.log('this.from+++', this.from)
      this.onShare()
      const wxGetImageInfo = this.wxPromisify(wx.getImageInfo)
      const __x = this.deviceWidth / 750
      wx.showLoading({
        title: '生成中...'
      })
      // 请求微信二维码接口
      let [err, res] = await getWxCode({ page: '/pages/goodsDetail/index', width: '280px' })
      console.log(err, res) // 请求商品图片等图片信息
      Promise.all([
        wxGetImageInfo({
          src: this.imgShareArr.infoImg // 商品图片
        }),
        wxGetImageInfo({
          // src: this.imgShareArr.headImg // 用户头像
          src: '//imgHost/smallprogram_focuson_nopoint@3x.png' // 用户头像
        }),
        wxGetImageInfo({
          // src: this.imgShareArr[2] // 二维码图片 // TODO:这里需要拿到后台返回的二维码图片
          src: '//imgHost/largeNature2.jpg' // 二维码图片 // TODO:这里需要拿到后台返回的二维码图片
        })
      ]).then(res => {
        console.log('this.from+++1111', this.from)
        wx.getSystemInfo({
          success (res) {
            console.log(res)
          }
        })
        const ctx = wx.createCanvasContext('shareCanvas', this)
        console.log('sss')
        ctx.setFillStyle('white')
        ctx.fillRect(0, 0, 617 * __x, 792 * __x)
        // 底图
        ctx.drawImage(res[0].path, 0, 173 * __x, 617 * __x, 392 * __x)
        // 用户头像
        ctx.save()
        ctx.beginPath() // 开始绘制
        ctx.arc(85 * __x, 85 * __x, 50 * __x, 0, Math.PI * 2, false)
        ctx.clip()
        ctx.drawImage(res[1].path, 35 * __x, 35 * __x)
        // ctx.scale(1.2, 1.2)
        ctx.restore()
        ctx.setFillStyle('#000000') // 文字颜色
        ctx.setFontSize(30 * __x) // 文字字号
        ctx.fillText(this.shareInfo.name, 166 * __x, 75 * __x)
        ctx.setFillStyle('#A5A4A4') // 文字颜色
        ctx.setFontSize(24 * __x) // 文字字号
        ctx.fillText('ID:' + this.shareInfo.name, 166 * __x, 120 * __x)
        if (this.from === 'goodsDetail') {
          ctx.setFillStyle('#000000') // 文字颜色
          ctx.setFontSize(24 * __x) // 文字字号
          ctx.fillText(this.shareInfo.title, 30 * __x, 628 * __x)
          ctx.setFillStyle('#FF4D46') // 文字颜色
          ctx.setFontSize(20 * __x) // 文字字号
          ctx.fillText(this.shareInfo.price, 30 * __x, 684 * __x)
        } else {
          ctx.setFillStyle('#000000') // 文字颜色
          ctx.setFontSize(24 * __x) // 文字字号
          ctx.fillText(this.shareInfo.title, 30 * __x, 658 * __x)
        }
        ctx.drawImage(res[2].path, 456 * __x, 577 * __x, 127 * __x, 127 * __x)
        ctx.setFillStyle('#A5A4A4') // 文字颜色
        ctx.setFontSize(20 * __x) // 文字字号
        ctx.fillText('长按识别查看商品', 442 * __x, 733 * __x)
        ctx.stroke()
        ctx.draw()
      })
      wx.hideLoading()
      this.onShowCircle()
    },
    savePhoto () {
      const wxCanvasToTempFilePath = this.wxPromisify(wx.canvasToTempFilePath)
      const wxSaveImageToPhotosAlbum = this.wxPromisify(wx.saveImageToPhotosAlbum)

      wxCanvasToTempFilePath({
        canvasId: 'shareCanvas'
      }, this).then(res => {
        return wxSaveImageToPhotosAlbum({
          filePath: res.tempFilePath
        })
      }).then(res => {
        wx.showToast({
          title: '已保存到相册'
        })
        this.onCloseCanvas()
      })
    },
    onCloseCanvas () {
      this.onShowCircle()
    }
  }
}
</script>

<style lang="scss">
	.share-page {
		._van-action-sheet {
			.share-box {
				display: flex;
				flex-direction: column;
				align-items: stretch;
				justify-content: flex-start;
				.share-title, .cancel, .share-list {
					height: 90px;
					font-size:30px;/*px*/
					font-family:PingFang-SC-Medium;
					font-weight:500;
					background-color: #fff;
					color:rgba(51,51,51,1);
					display: flex;
					align-items: center;
					justify-content: flex-start;
				}
				.share-title {
					padding-left: 30px;
				}
				.cancel {
					justify-content: center;
					border-top: 1px solid #F3F4F5;
				}
				.share-list {
					height: 200px;
					display: flex;
					align-items: center;
					justify-content: space-around;
					font-size:24px;/*px*/
					padding: 0 40px;
					.wechat, .circle {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						button::after {
							border: none!important;
						}
						button {
							padding-left: 0;
							padding-right: 0;
							font-size: 24px;/*px*/
							background-color: #fff;
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: center;
							border: none;
							img {
								width: 88px;
								height: 88px;
							}
						}
					}
				}
			}
		}
		.showCanvasClass {
			.van-popup {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				background-color: rgba(0,0,0,0);
				.saveToPhoto {
					display: flex;
					align-items: center;
					justify-content: center;
					width:340px;
					height:64px;
					margin-top: 60px;
					background:linear-gradient(90deg,rgba(255,104,83,1),rgba(255,81,57,1));
					border-radius:32px;
					font-size:30px;/*px*/
					font-family:PingFang-SC-Medium;
					font-weight:500;
					color:rgba(255,255,255,1);
				}
				.close {
					margin-top: 40px;
					width: 44px;
					height: 44px;
					background-image: url(//imgHost/asmallvideo_delete_button@2x.png);
					background-size: cover;
				}
			}
		}
	}
</style>
