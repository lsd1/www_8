<template>
  <div class="myRice">
    <div class="rice-box" v-if="!isShowNoList">
      <div class="rice-list" v-for="(list, index) in riceListArr" :key="index">
        <div class="left-box">
          <div class="num-weight">{{ list.specContent }}<i>{{ list.unit }}</i></div>
        </div>
        <!--<i></i>-->
        <div class="right-box">
          <div class="rice-name">{{ list.name }}</div>
          <div class="rice-time">可用日期：{{ list.startDate }}-{{ list.endDate }}</div>
        </div>
      </div>
    </div>
    <div class="no-list" v-else>
      <emptyPage :content="'暂无卡券'" :imgUrl="'//imgHost/no-rice-icon.png'"></emptyPage>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import '@/static/css/public.scss'
import Toast from '@/static/vant-weapp/toast/toast'
import emptyPage from '@/components/EmptyPage'
import { getMyRiceList } from '@/service/getData'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('myRice')

export default {
  components: {
    emptyPage
  },
  data () {
    return {
      isShowNoList: false,
      riceListArr: [],
      loadingMoreKey: false
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [myRice] Vue beforeCreate')
  },
  created () {
    this.getMyRiceList()
    console.log('Page [myRice] Vue created')
  },
  beforeMount () {
    console.log('Page [myRice] Vue beforeMount')
  },
  mounted () {
    console.log('Page [myRice] Vue mounted')
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我的卡券'
    })
    // Do some initialize when page load.
    console.log('Page [myRice] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [myRice] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [myRice] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [myRice] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [myRice] onUnload')
  },
  onReachBottom () {
    console.log('下拉')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    async getMyRiceList (data = {}) {
      let [err, res] = await getMyRiceList(data)
      if (err) {
        Toast(err)
      }
      if (res.code === 0) {
        let dataMsg = res.data
        if (dataMsg.stampList.length === 0) {
          this.isShowNoList = true
        } else {
          this.riceListArr = dataMsg.stampList
        }
      }
      console.log(err, res)
    }
  }
}
</script>
<style lang="scss" scoped>

.myRice{
  .rice-box {
    padding: 30px 30px 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .rice-list {
      width: 690px;
      height: 150px;
      background-color: #fff;
      margin-bottom: 30px;
      border-radius: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .left-box {
        height: 100%;
        width: 210px;
        border-right: 2px solid rgba(243,244,245,1);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .num-weight {
          font-size:60px;/*px*/
          font-family:PingFang-SC-Heavy;
          font-weight:800;
          color:rgba(255,77,70,1);
          display: flex;
          align-items: baseline;
          i {
            font-size:30px;/*px*/
          }
        }
        :after {
          content: '';
          background-color: #F3F4F5;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          position: absolute;
          right: -20px;
          top: -20px;
        }
        :before {
          content: '';
          background-color: #F3F4F5;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          position: absolute;
          right: -20px;
          bottom: -20px;
        }
      }
      .right-box {
        height: 100%;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 30px;
        .rice-name {
          font-size:36px;/*px*/
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(51,51,51,1);
        }
        .rice-time {
          font-size:24px;/*px*/
          font-family:PingFang-SC-Medium;
          font-weight:500;
          color:rgba(165,164,164,1);
        }
      }
      /*i {*/
        /*width:1px;*/
        /*height:100px;*/
        /*border:2px solid rgba(243,244,245,1);*/
        /*border-radius:1px;*/
      /*}*/
    }
  }
}
</style>
