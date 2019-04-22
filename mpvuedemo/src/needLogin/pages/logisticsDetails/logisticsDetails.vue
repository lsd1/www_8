<template>
  <div class="logisticsDetails">
    <van-popup :show="show" position="bottom" @close="onClose">
      <div class="box">
        <div class="top-box">
          <div class="company">快递公司: 申通</div>
          <div class="track-num">快递单号: 123123123</div>
        </div>
        <div class="bottom-box">
          <scroll-view class="scroll-box" :style="'height: 100%'" scroll-y="true">
            <!--原生手写-->
            <!--<div class="scroll-list">-->
              <!--<div class="time-box">-->
                <!--<div class="date-txt"></div>-->
                <!--<div class="time-txt"></div>-->
              <!--</div>-->
              <!--<div class="icon-box"></div>-->
              <!--<div class="status-box">-->
                <!--<div class="status-txt"></div>-->
                <!--<div class="status-info"></div>-->
              <!--</div>-->
            <!--</div>-->
            <!--vant版-->
            <!--<van-steps-->
                <!--:steps="steps"-->
                <!--:active="active"-->
                <!--direction="vertical"-->
                <!--:custom="true"-->
                <!--active-color="#333"-->
            <!--&gt;-->
            <!--</van-steps>-->
            <!--wux版-->
            <wux-timeline>
              <wux-timeline-item v-for="(item, index) in steps" :key="index" :custom="index === 0 ? true : false">
                <div class="time-txt"> {{ item.text }}</div>
                <wux-icon slot="dot" type="ios-time" size="23" />
                <div class="accept">{{ item.desc }}</div>
              </wux-timeline-item>
            </wux-timeline>
          </scroll-view>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import '@/static/css/public.scss'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('logisticsDetails')

export default {
  components: {
  },
  data () {
    return {
      show: false,
      orderId: null,
      shipmentNum: null,
      steps: [
        {
          text: '2018/12/12 08.56',
          desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息'
        },
        {
          text: '步骤二',
          desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息'
        },
        {
          text: '步骤三',
          desc: '描述信息'
        },
        {
          text: '步骤四',
          desc: '描述信息'
        },
        {
          text: '2018/12/12 08.56',
          desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息'
        },
        {
          text: '2018/12/12 08.56',
          desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息'
        },
        {
          text: '2018/12/12 08.56',
          desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息'
        },
        {
          text: '2018/12/12 08.56',
          desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息'
        },
        {
          text: '2018/12/12 08.56',
          desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息'
        },
        {
          text: '2018/12/12 08.56',
          desc: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息'
        }
      ],
      active: 0
    }
  },
  computed: {
    ...mapState([
      'name'
    ])
  },
  beforeCreate () {
    console.log('Page [logisticsDetails] Vue beforeCreate')
  },
  created () {
    console.log('Page [logisticsDetails] Vue created')
  },
  beforeMount () {
    console.log('Page [logisticsDetails] Vue beforeMount')
  },
  mounted () {
    console.log('Page [logisticsDetails] Vue mounted')
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    console.log('Page [logisticsDetails] onLoad')
  },
  onReady: function () {
    // Do something when page ready.
    console.log('Page [logisticsDetails] onReady')
  },
  onShow: async function () {
    // Do something when page show.
    console.log('Page [logisticsDetails] onShow')
  },
  onHide: function () {
    // Do something when page hide.
    console.log('Page [logisticsDetails] onHide')
  },
  onUnload: function () {
    // Do something when page close.
    console.log('Page [logisticsDetails] onUnload')
  },
  /**
   * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
   */
  methods: {
    onClose (data = {}) {
      console.log(data)
      // let [err, res] =
      this.show = !this.show
    }
  }
}
</script>
<style lang="scss">

.logisticsDetails{
  width: 100%;
  height: 100%;
  .van-popup {
    border-radius: 10px;
    overflow: hidden;
  }
  .van-popup--bottom {
    width: 90%;
    margin-bottom: 5%;
    .box {
      padding: 30px 20px;
      font-size:30px;/*px*/
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
      .top-box {
        height: 160px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-bottom: 1px solid #F3F4F5;
        .track-num {
          padding-top: 10px;
        }
      }
      .bottom-box {
        height: 840px;
        padding-top: 10px;
        .scroll-box {
          width:95%;
          margin:auto;
          /*vant版*/
          .scroll-list {
            .time-box {
              .date-txt {

              }
              .time-txt {

              }
            }
            .icon-box {

            }
            .status-box {
              .status-txt {

              }
              .status-info {

              }
            }
          }
          /*wux版*/
          .wux-timeline {
            top:10px;
            left: 10px;
            margin-right:5px;
          }
        }
      }
    }
  }


}
</style>
