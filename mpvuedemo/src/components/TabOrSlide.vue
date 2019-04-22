<template>
    <div>
      <wux-tabs class="myTabs" :style="'opacity :'+ opacityCount/10 "  wux-class="bordered" :current="current" controlled @change="onTabsChange">
          <template v-for="(item, index) in tabs" >
              <wux-tab :key="index" :tabKey="item.key" :title="item.title" />
          </template>
      </wux-tabs>
      <slot></slot>
    </div>
</template>

<script>
  import empty from 'is-empty'
  export default {
    name: 'TabOrSlide',
    data () {
      return {
        toView: 'tab1',
        opacityCount: 0,
        loading: false,
        onTabActive: {},
        isRefresh: false,
        tabArr: {},
        query: wx.createSelectorQuery(),
        gettingPosition: false
      }
    },
    props: {
      'tabs': Object,
      'current': String,
      'blockClass': String,
      'scrollH': Number,
      'offset': Number,
      'needLoadMore': {
        type: Boolean,
        default: false
      }
    },
    onShow () {
      this.getTabPositionInfo()
    },
    mounted () {
      console.log('Page [TabOrSlide] Vue mounted')
      for (let i in this.tabs) {
        if (this.tabs[i]['onActive']) {
          this.onTabActive[this.tabs[i]['key']] = { hasShow: false, ...this.tabs[i]['onActive'] }
        }
      }
    },
    onPageScroll ({ scrollTop }) {
      let _this = this
      _this.getTabPositionInfo()
      if (scrollTop <= 100) {
        if (_this.opacityCount !== 0) {
          _this.hide()
        }
      } else {
        if (_this.opacityCount !== 10) {
          _this.show()
        }
      }
      for (let i in _this.tabArr) {
        if ((_this.tabArr[i].top - scrollTop) <= _this.offset) {
          _this.current = _this.tabArr[i].id
          _this.onTabAction()
        }
      }
    },
    onReachBottom () {
      this.loadMore()
    },
    async onPullDownRefresh () {
      let _this = this
      if (_this.isRefresh) {
        wx.stopPullDownRefresh()
        return false
      } else {
        _this.isRefresh = true
        await _this.$parent.refresh()
        wx.stopPullDownRefresh({
          success () {
            let t = setTimeout(() => {
              _this.isRefresh = false
              clearTimeout(t)
            }, 2000)
          }
        })
      }
    },
    methods: {
      getTabPositionInfo () {
        let _this = this
        if (_this.gettingPosition) return false
        _this.gettingPosition = true
        let t = setTimeout(() => {
          let q = _this.query
          q.selectAll(_this.blockClass).boundingClientRect()
          q.exec((res) => {
            if (empty(_this.tabArr)) {
              res[0].forEach(item => {
                _this.tabArr[item.id] = item
              })
              console.log('empty:', 'empty')
            } else {
              let addHeight = 0
              res[0].forEach(item => {
                _this.tabArr[item.id].top += addHeight
                let oldHeight = _this.tabArr[item.id].height
                let newHeight = item.height
                addHeight += (newHeight - oldHeight)
                _this.tabArr[item.id].height = item.height
              })
            }
          })
          this.gettingPosition = false
          clearTimeout(t)
        }, 1000)
      },
      onTabAction () {
        let actionObj = this.onTabActive[this.current]
        if (actionObj) {
          if (actionObj.isOnce) {
            if (!actionObj.hasShow) {
              this.onTabActive[this.current]['hasShow'] = true
              actionObj.action()
            }
          } else {
            actionObj.action()
          }
        }
      },
      onTabsChange: function (e) {
        console.log('e:', e)
        let _this = this
        console.log('toView:', _this.toView)
        _this.current = e.detail.tabKey
        wx.pageScrollTo({
          scrollTop: _this.tabArr[e.detail.tabKey].top,
          duration: 300
        })
        _this.onTabAction()
      },
      show () {
        let _this = this
        if (_this.loading) return false
        _this.loading = true
        let t1 = setInterval(function () {
          if (_this.opacityCount === 10) {
            clearInterval(t1)
            return false
          } else {
            _this.opacityCount++
          }
        }, 50)
        let t2 = setTimeout(function () {
          _this.loading = false
          clearTimeout(t2)
          clearInterval(t1)
          console.log('_this.opacityCount:', _this.opacityCount)
        }, 550)
      },
      hide () {
        let _this = this
        if (_this.loading) return false
        console.log('hide')
        _this.loading = true
        let t1 = setInterval(function () {
          if (_this.opacityCount === 0) {
            clearInterval(t1)
            return false
          } else {
            _this.opacityCount--
          }
        }, 50)
        let t2 = setTimeout(function () {
          _this.loading = false
          clearTimeout(t2)
          clearInterval(t1)
          console.log('_this.opacityCount:', _this.opacityCount)
        }, 550)
      },
      loadMore: function (e) {
        console.log('loadMore')
        console.log('needLoadMore:', this.needLoadMore)
        if (this.needLoadMore) {
          this.$parent.loadMoreData()
        }
      }
    }
  }
</script>

<style lang="scss">
    .myTabs {
        .wux-tabs {
            position: fixed!important;
            z-index: 999;
            top:0;
        }
    }
    .wux-tabs__tab-bar {
        background:#FF6853!important;
    }
    .wux-tabs__tab {
        font-size:30px!important;
        font-family:PingFang-SC-Heavy!important;
        font-weight:800!important;
        color:#333!important;
    }
</style>