<template>
    <div class="test">
        <div class="scroll-list-wrap" slot="demo">
            <scroll ref="scroll"
                    :data="items"
                    :scrollbar="scrollbarObj"
                    :pullDownRefresh="pullDownRefreshObj"
                    :pullUpLoad="pullUpLoadObj"
                    @pullingDown="onPullingDown"
                    @pullingUp="onPullingUp"
                    @click="clickItem"
            >
            </scroll>
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
import BScroll from 'better-scroll'
export default {
  data(){
    return{
      dropDown:false
    }
  },
  mounted(){
    this.scrollFn()
  },
  methods:{
    scrollFn(){
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.bscroll, {
            click: true,
            scrollY: true,
            probeType: 3
          });
        }else{
          this.scroll.refresh();
        }
        this.scroll.on('scroll', (pos) => {
          console.log(pos.y,this.dropDown)
          //如果下拉超过50px 就显示下拉刷新的文字
          if(pos.y>50){
            this.dropDown = true
          }else{
            this.dropDown = false
          }
        })
        //touchEnd（手指离开以后触发） 通过这个方法来监听下拉刷新
        this.scroll.on('touchEnd', (pos) => {
          // 下拉动作
          if(pos.y > 50){
            console.log("下拉刷新成功")
            this.dropDown = false
          }
          //上拉加载 总高度>下拉的高度+10 触发加载更多
          if(this.scroll.maxScrollY>pos.y+10){
            console.log("加载更多")
            //使用refresh 方法 来更新scroll  解决无法滚动的问题
            this.scroll.refresh()
          }
          console.log(this.scroll.maxScrollY+"总距离----下拉的距离"+pos.y)
        })
        console.log(this.scroll.maxScrollY)
      });
=======
  import Scroll from '@/componentsWeb/scroll/scroll.vue'
  import { ease } from '../../utils/ease'

  export default {
    components: {
      Scroll
    },
    data () {
      return {
        scrollbar: true,
        scrollbarFade: true,
        pullDownRefresh: true,
        pullDownRefreshThreshold: 180,
        pullDownRefreshStop: 80,
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: '加载中',
        pullUpLoadNoMoreTxt: '没有更多了',
        items: [],
      }
    },
    computed: {
      scrollbarObj: function () {
        return this.scrollbar ? {fade: this.scrollbarFade} : false
      },
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop)
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      }
    },
    beforeCreate () {
      console.log('Page [home] Vue beforeCreate')
    },
    async created () {
      console.log('Page [home] Vue created')
    },
    beforeMount () {
      console.log('Page [home] Vue beforeMount')
    },
    async mounted () {
      console.log('Page [home] Vue mounted')
    },
    watch: {
      scrollbarObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      pullDownRefreshObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            scroll.openPullDown()
          } else {
            scroll.closePullDown()
          }
        },
        deep: true
      },
      pullUpLoadObj: {
        handler(val) {
          const scroll = this.$refs.scroll.scroll
          if (val) {
            scroll.openPullUp()
          } else {
            scroll.closePullUp()
          }
        },
        deep: true
      },
      startY() {
        this.rebuildScroll()
      }
    },
    methods: {
      scrollTo(obj) {
        let scrollToX = 0
        let scrollToY = 0
        let scrollToTime = 700
        let scrollToEasing = 'bounce'
        if(obj.scrollToX) scrollToX = obj.scrollToX
        if(obj.scrollToY) scrollToY = obj.scrollToY
        if(obj.scrollToTime) scrollToTime = obj.scrollToTime
        if(obj.scrollToEasing) scrollToEasing = obj.scrollToEasing
        this.$refs.scroll.scrollTo(scrollToX, scrollToY, scrollToTime, ease[scrollToEasing])
      },
      scrollToElement(obj) {
        if(!obj.el) {
          alert('你想让我滚动到那里？')
        }
        let offsetX = 0
        let offsetY = 0
        let scrollToTime = 700
        let scrollToEasing = 'bounce'
        if(obj.el) el = obj.el
        if(obj.offsetX) offsetX = obj.offsetX
        if(obj.offsetY) offsetY = obj.offsetY
        if(obj.scrollToTime) scrollToTime = obj.scrollToTime
        if(obj.scrollToEasing) scrollToEasing = obj.scrollToEasing
        this.$refs.scroll.scrollToElement(el, scrollToTime, offsetX, offsetY, ease[scrollToEasing])
      },
      autoPullDownRefresh () {
        this.$refs.scroll.autoPullDownRefresh()
      },
      onPullingDown() {
        // 模拟更新数据
        console.log('pulling down and load data')
        setTimeout(() => {
          if (this._isDestroyed) {
            return
          }
          if (Math.random() > 0.2) {
            // 如果有新数据
            this.items.unshift('我是新数据: ' + +new Date())
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 2000)
      },
      onPullingUp() {
        // 更新数据
        console.log('pulling up and load data')
        setTimeout(() => {
          if (this._isDestroyed) {
            return
          }
          if (Math.random() > 0.5) {
            // 如果有新数据
            let newPage = []
            for (let i = 0; i < 10; i++) {
              newPage.push('我是第' + ++this.items.length + '行')
            }

            this.items = this.items.concat(newPage)
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 1500)
      },
      clickItem() {},
      rebuildScroll() {
        console.log('rebuildScroll')
        Vue.nextTick(() => {
          this.$refs.scroll.destroy()
          this.$refs.scroll.initScroll()
        })
      }
>>>>>>> 6663add72e62ba86beb1af34bfb87e26dc5bb47e
    }
  }
}
</script>


<style scoped>
.bscroll{
    width: 100%;
    height:500px;
    overflow: hidden;
}
.bscroll-container{
    background: #ff0000;
}
.drop-down{
    position: absolute;
    top:0px;
    lefT:0px;
    width: 100%;
    height: 50px;
    line-height:50px;
    text-align: center;
    font-size:0.8rem;
    color:#CCC;
}
</style>