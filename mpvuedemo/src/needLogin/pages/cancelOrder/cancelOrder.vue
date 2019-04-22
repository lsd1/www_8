<template>
  <div class="cancelOrder">
    <van-notice-bar
        text="* 为避免产生疑问，请与商家进行沟通"></van-notice-bar>
    <van-cell
        :title=linkTitle
        is-link
        @click="onShowList"
    ></van-cell>
    <div class="input">
      <wux-cell hover-class="none">
        <wux-textarea type="text" :placeholder="placeholder" @change="onMultiChange" :maxlength="120" placeholder-style="font-weight:500;color:#A5A4A4;" />
      </wux-cell>
    </div>
    <div class="upload" v-if="hasPhoto">
      <wux-upload url="" listType="picture-card" sourceType="['album', 'camera']"  @change="onChangePhoto" max="3">
        <!--<button type="default">Click to Upload</button>-->
        <div class="addImg" type="default" :style="{backgroundImage: 'url(//imgHost/theorder_add.png)'}"></div>
      </wux-upload>
    </div>
    <div class="select" v-if="hasPhoto">
      <!--<picker @change="bindPickerChange" :value="index" :range="columns">-->
        <wux-cell title="选择物流" is-link @click="showPopup">
          <div slot="footer">
            {{ company }}
          </div>
        </wux-cell>
      <!--</picker>-->
    </div>
    <div class="select-num" v-if="hasPhoto">
        <wux-cell hover-class="none">
          <wux-input label="填写单号" :value="valueNum"  controlled  type="number" @change="onChange" />
        </wux-cell>
    </div>
    <div class="btn">
      <van-button size="large" round type="danger" @click="submitContent">提交</van-button>
    </div>
    <van-popup
        :show="show"
        position="bottom"
        custom-class="bottom"
        @close="showPopup"
    >
      <van-picker :columns="columns" show-toolbar :defaultIndex="index" @confirm="bindPickerChange" @cancel="onCancel" /></van-popup>
    <van-action-sheet
        :show="showCancelOrder"
        :actions="orderActions"
        @close="onClose"
        @select="onSelect"
        @cancel="onClose"
    ></van-action-sheet>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import '@/static/css/public.scss'
import { getCancelOrder, refund, getLogistics } from '@/service/getData'
import empty from 'is-empty'
import Toast from '@/static/vant-weapp/toast/toast'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('cancelOrder')

export default {
  components: {},
  data () {
    return {
      linkTitle: '请选择原因',
      linkTitleId: null, // 退款Id
      placeholder: '请输入您要取消订单的原因（120字以内）',
      columns: null,
      columnsObj: {},
      valueNum: null, // 物流单号
      orderId: null, // 订单ID
      company: '', // 物流公司
      valueMultiTxt: '', // 输入退款理由
      show: false,
      index: 0,
      showCancelOrder: false,
      orderActions: [],
      hasPhoto: false, // 是否需要上传图片和物流单号
      imgArr: [],
      fileList: [] // 默认组件储存的图片Arr
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [cancelOrder] Vue beforeCreate')
  },
  created () {
    this.orderId = this.$route.query.orderStoreId
    this.getCancelOrder()
    this.getLogistics()
    console.log(this.columns)
    // console.log(this.hasPhoto)
    // console.log(this.$route.query)
    // console.log(typeof this.hasPhoto)
    // console.log(Boolean(this.hasPhoto))
    console.log('Page [cancelOrder] Vue created')
  },
  beforeMount () {
    console.log('Page [cancelOrder] Vue beforeMount')
  },
  mounted () {
    console.log('Page [cancelOrder] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '取消订单'
    })
    // Do some initialize when page load.
    console.log('Page [cancelOrder] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [cancelOrder] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [cancelOrder] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [cancelOrder] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [cancelOrder] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    async getCancelOrder () {
      let [err, res] = await getCancelOrder({ orderStoreId: this.orderId })
      if (err) {
        Toast(err)
      }
      if (res.code === 0) {
        this.orderActions = []
        let list = res.data.cancelReasonList
        for (var i in list) {
          this.orderActions.push({ 'name': list[i].desc, 'id': list[i].id })
        }
        if (res.data.isShow === 0) {
          this.hasPhoto = false
        } else {
          this.hasPhoto = true
        }
      } else {
        Toast(res.msg)
      }
    },
    onMultiChange (event) {
      console.log(event.detail.value)
      this.valueMultiTxt = event.detail.value
    },
    onChangePhoto (event) {
      console.log(event)
      this.fileList = event.detail.fileList
      console.log(this.fileList)
    },
    onChange (event) {
      console.log(event)
      this.valueNum = event.detail.value
    },
    async submitContent () {
      console.log('submit')
      if (empty(this.linkTitleId)) {
        Toast('请选择退款原因')
        return false
      }
      if (this.hasPhoto) {
        if (empty(this.valueMultiTxt)) {
          Toast('请填写取消订单说明')
          return false
        }
        if (empty(this.company) || empty(this.valueNum)) {
          Toast('请正确填写物流信息')
          return false
        }
      }
      let data = {}
      if (this.hasPhoto) {
        if (!empty(this.fileList)) {
          for (var i in this.fileList) {
            this.imgArr.push(this.fileList[i].url)
          }
        }
        console.log(this.imgArr)
        data = {
          orderStoreId: this.orderId,
          reasonId: this.linkTitleId,
          desc: this.valueMultiTxt,
          express: this.company,
          logisticsNumber: this.valueNum,
          images: this.imgArr
        }
      } else {
        data = {
          orderStoreId: this.orderId,
          reasonId: this.linkTitleId,
          desc: this.valueMultiTxt
        }
      }
      let [err2, res2] = await refund(data)
      if (err2) {
        Toast(err2)
      }
      if (res2.code === 0) {
        Toast(res2.msg)
        setTimeout(() => {
          this.$router.back()
        }, 1000)
      } else {
        Toast(res2.msg)
      }
    },
    onClose () {
      this.showCancelOrder = false
      this.placeChange()
    },
    onSelect (e) {
      console.log(e)
      this.linkTitle = e.detail.name
      this.linkTitleId = e.detail.id
      this.onClose()
    },
    placeChange () {
      if (this.showCancelOrder) {
        this.placeholder = ''
      } else {
        this.placeholder = '请输入您要取消订单的原因（120字以内）'
      }
    },
    showPopup () {
      this.show = !this.show
    },
    onShowList () {
      this.showCancelOrder = true
      this.placeChange()
    },
    async getLogistics () {
      let [err, res] = await getLogistics()
      if (err) {
        Toast(err)
      }
      if (res.code === 0) {
        let resMsg = res.data
        this.columnsObj = resMsg.logisticsList
        this.columns = []
        for (let i in this.columnsObj) {
          this.columns.push(this.columnsObj[i].company)
        }
        // this.columns = resMsg.logisticsList
        console.log(this.columns)
      }
    },
    bindPickerChange (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      console.log('picker发送选择改变，携带值为', e.detail.index)
      console.log(this.columns[e.detail.index])
      this.index = e.detail.index
      this.company = this.columns[e.detail.index]
      this.showPopup()
    },
    onCancel () {
      this.showPopup()
    }
  }
}
</script>
<style lang="scss">

.cancelOrder{
  .input {
    .wux-cell {
      background-color: #fff!important;
      padding-top: 30px;
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
  }
  .upload {
    /*background-color: #fff;*/
    padding: 20px 0;
    .wux-upload {
      .addImg {
        height: 100%;
        width: 100%;
        /*background-image: url(//imgHost/theorder_add.png);*/
        -webkit-background-size: cover;
        background-size: cover;
      }
    }
  }
  .select {
    background-color: #fff;
    wux-cell {
      .wux-cell__bd {
        flex: 0;
        white-space: nowrap;
        font-size:30px;/*px*/
        font-family:PingFang-SC-Heavy;
        font-weight:800;
        color:rgba(51,51,51,1);
        padding-right: 30px;
      }
      .wux-cell__ft {
        flex: 1;
        text-align: left;
        font-size:30px;/*px*/
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(165,164,164,1);
      }
    }
  }
  .select-num {
    background-color: #fff;
    font-size:30px;/*px*/
    .wux-input__label {
      padding-right: 30px;
      margin-right: 0;
      font-family:PingFang-SC-Heavy;
      font-weight:800;
      color:rgba(51,51,51,1);
      width: auto;
      display:flex;
      align-items:center;
    }
    .wux-input__control {
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(165,164,164,1);
    }
  }
  .btn {
    width: 90%;
    margin: auto;
    padding-top: 70px;
    .van-button {
      /*width:345px;*/
      height:70px;
      line-height: 70px;
      background:linear-gradient(90deg,rgba(255,104,83,1),rgba(255,81,57,1));
      box-shadow:0px 5px 7px 1px rgba(255,77,70,0.3);
      border-radius:50px;
    }
  }
  .van-notice-bar {
    height: 60px;
    background-color: #F3F4F5!important;
    color: #A5A4A4!important;
    font-size:24px;/*px*/
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(165,164,164,1);
  }
}
.wux-upload--picture-card .wux-upload__files .wux-upload__select {
  border: none;
  background-color: #F3F4F5;
  width: 226px;
  height: 226px;
  margin: 5px;
}
.wux-upload--picture-card .wux-upload__files .wux-upload__file {
  border-color: transparent;
  width: 226px;
  height: 226px;
  margin: 5px;
}
.wux-upload--picture-card .wux-upload__files .wux-upload__file--error {
  border: transparent;
}
.wux-upload--picture-card .wux-upload__files {
  padding: 0 25px;
}
</style>
