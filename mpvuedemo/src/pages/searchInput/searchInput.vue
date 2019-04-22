<template>
    <div class="search-app">
        <div class="top-box">
            <van-search
                    v-model="value"
                    :placeholder=placeholder
                    background="#fff"
                    use-action-slot
                    @search="onSearch"
                    @change="onChange"
            >
                <view slot="action" @tap="onSearch">搜索</view>
            </van-search>
            <div class="recommend-box">
                <!--<div class="recommend-list" v-for="i in 5" :key="i">123</div>-->
            </div>
        </div>
        <div class="search-res-box">
            <!--<ItemList :listData="list"></ItemList>-->
        </div>
        <van-toast id="van-toast" />
    </div>
</template>

<script>
    import empty from 'is-empty'
    import '@/static/css/public.scss'
    import Toast from '@/static/vant-weapp/toast/toast'
export default {
      components: {
      },
      data () {
        return {
          navTitleText: ['综合', '销量', '好评', '价格'],
          value: '',
          placeholder: '请输入商品',
          navFilterC: 0,
          navPriceType: '0',
          navPriceKey: false, // 价格筛选
          list: [1, 2, 2, 3]
        }
      },
      computed: {

      },
      beforeCreate () {
        console.log('Page [hello] Vue beforeCreate')
      },
      created () {
        console.log('Page [hello] Vue created')
        var appInstance = getApp()
        console.log(appInstance.globalData) // I am global data
      },
      beforeMount () {
        console.log('Page [hello] Vue beforeMount')
      },
      mounted () {
        console.log('Page [hello] Vue mounted')
      },
      onLoad: function (options) {
        wx.setNavigationBarTitle({
          title: '搜索'
        })
        // Do some initialize when page load.
        console.log('Page [hello] onLoad')
      },
      onReady: function () {
        // Do something when page ready.
        console.log('Page [hello] onReady')
      },
      onShow: async function () {

      },
      onHide: function () {
        // Do something when page hide.
        console.log('Page [hello] onHide')
      },
      onUnload: function () {
        // Do something when page close.
        console.log('Page [hello] onUnload')
      },
      /**
         * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
         */
      methods: {
        showNav (i) {
          this.navFilterC = i
          if (i === 3) {
            if (!this.navPriceKey) {
              this.navPriceKey = true
              return
            }
            if (this.navPriceType !== '0') {
              this.navPriceType = '0'
            } else {
              this.navPriceType = '1'
            }
          } else {
            this.navPriceKey = false
          }
        },
        onSearch (event) {
          console.log(this.value)
          if (empty(this.value)) {
            Toast('请输入搜索内容')
            return false
          }
          this.$router.push({ path: '/pages/searchQuery/index', query: { value: this.value, isUseValue: true } })
        },
        onChange (event) {
          this.value = event.detail
        }
      }
    }
</script>
<style lang="scss">

    page {
        background-color: #F3F4F5;
    }
    .search-app{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        width: 100%;
        overflow: hidden;
        .top-box {
            width: 100%;
            background-color: #fff;
            .recommend-box {
                width: 100%;
                background-color: #fff;
                z-index: 10;
                .recommend-list {
                    font-size:30px;/*px*/
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    height: 90px;
                    margin: 0 40px;
                    border-bottom: 1px solid #EEEEEE;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                }
                .recommend-list:last-child{
                    border-bottom: none;
                }
            }
        }
        .search-res-box {
            width: 100%;
            flex-grow: 1;
            overflow: scroll;
            /*display: flex;*/
            /*flex-wrap: wrap;*/
            /*justify-content: flex-start;*/
            /*align-items: flex-start;*/


        }
    }


    .topPrice {
        border-color: transparent transparent #333 transparent !important;
    }
    .bottomPrice {
        border-color: #333 transparent transparent transparent !important;
    }
    .navFilterClick {
        font-size:30px;
        font-family:PingFang-SC-Heavy;
        font-weight:800;
        color:rgba(51,51,51,1);
    }
    .van-cell {
        background-color: #F3F4F5!important;
        border-radius:28px;
    }
</style>
