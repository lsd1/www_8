<template>
  <div class="product-view">
    <div class="goodsCard">
      <div class="goodsImg" :style="{backgroundImage: 'url(//imgHost/v2-e2a02a9344400089877af0f77e9fb49a_r.jpg)'}"></div>
      <div class="score">
        <div class="score-txt">商品评分</div>
        <wux-rater :value="defalGoods" :fontSize="20" :activeColor="'#f39d21'" :controlled="true" :margin=" 5 " @change="changeGoodsStart" icon="ios-heart" />
      </div>
    </div>
    <wux-cell hover-class="none">
        <wux-textarea type="text" placeholder="请输入评价（120字以内）"  :maxlength="120" placeholder-style="font-weight:500;color:#A5A4A4;" />
    </wux-cell>
    <div class="upload">
      <wux-upload
          url=""
          listType="picture-card"
          sourceType="['album', 'camera']"
          :controlled="true"
          :fileList=" fileList "
          @change="onChange" max="9"
          @success="onSuccess"
          @fail="onFail"
          @complete="onComplete"
      >
        <div class="addImg" type="default"  :style="{backgroundImage: 'url(//imgHost/theorder_add.png)'}"></div>
      </wux-upload>
    </div>
      <div class="bottom-box">
        <div class="bottom-txt">商家服务</div>
          <!--<wux-cell title="商家服务" hover-class="color" >-->
            <wux-rater slot="footer" :value="defalShop" :fontSize="20" :controlled="true" :margin=" 5 " :activeColor="'#f39d21'" @change="changeShopStart" icon="ios-heart" />
          <!--</wux-cell>-->
        </div>
    <wux-button block size="default" :full="false" type="assertive" @click="onProductReview">提交</wux-button>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Toast from '@/static/vant-weapp/toast/toast'
const { mapState } = createNamespacedHelpers('productReview')

export default {
  components: {},
  data () {
    return {
      defalGoods: 5,
      defalShop: 5,
      fileList: []
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [productReview] Vue beforeCreate')
  },
  created () {
    console.log('Page [productReview] Vue created')
  },
  beforeMount () {
    console.log('Page [productReview] Vue beforeMount')
  },
  mounted () {
    console.log('Page [productReview] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '评价商品'
    })
    // Do some initialize when page load.
    console.log('Page [productReview] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [productReview] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [productReview] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [productReview] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [productReview] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    changeGoodsStart (e) {
      this.defalGoods = e.detail.value
      console.log(e.detail.value)
    },
    changeShopStart (e) {
      this.defalShop = e.detail.value
    },
    onChange (e) {
      this.fileList = e.detail.fileList
      console.log('change')
      console.log(e)
    },
    onSuccess (e) {
      console.log('success')
      console.log(e)
    },
    onFail (e) {
      console.log('fail')
      console.log(e)
    },
    onComplete (e) {
      console.log('complete')
      console.log(e)
    },
    onProductReview () {
      Toast('请求评价接口')
    }
  }
}
</script>

<style lang="scss" >
  page {
    height: 100%;
    background-color: #F3F4F5;
  }
.product-view{
  .goodsCard {
    padding: 30px 0 0 30px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #fff;
    .goodsImg {
      width: 160px;
      height: 160px;
      border-radius: 6px;
      background-color: #000;
      -webkit-background-size: cover;
      background-size: cover;
    }
    .score {
      padding-left: 30px;
      .score-txt {
        font-size:28px;
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(67,67,67,1);
        padding-bottom: 20px;
      }
      .wux-cell__text {
        padding-bottom: 20px;
        font-size: 28px;/*px*/
      }
      .wux-rater {
        border-bottom: none;
      }
    }

  }
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
          height: 140px;
        }
      }
    }
  }
  .upload {
    background-color: #fff;
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
  .bottom-box {
    margin-top: 20px;
    height: 80px;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 140px;
    .bottom-txt {
      padding-left: 30px;
      font-size:28px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(67,67,67,1);
    }
    .wux-rater {
      border-bottom: none;
      font-size: 28px;/*px*/
      padding-left: 20px;
    }
  }
  .wux-button {
    margin: auto;
    position: fixed;
    bottom: 20px;
    left: 50%;
    margin-left: -345px;
    width:690px;
    height:88px;
    background:linear-gradient(90deg,rgba(255,104,83,1),rgba(255,81,57,1));
    box-shadow:0px 10px 14px 2px rgba(255,77,70,0.3);
    border-radius:44px;
  }
}
  .wux-upload--picture-card .wux-upload__files .wux-upload__select {
    border: none;
    background-color: #fff;
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
