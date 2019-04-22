<template>
    <div class="app">
        <div class="left-box">
            <div class="nav-lists-box">
                <div :class="{navList: true, navClick:(index === navIndex) }" @click="showItems(index, nav.cateId, nav.cateName)" :key="index"  v-for="(nav, index) in cateArr">
                    <i v-show="index === navIndex"></i>
                    <p>{{ nav.cateName }}</p>
                </div>
            </div>
        </div>
        <div class="right-box">
            <div class="item-lists-box">
                <div class="item-list" :key="index" v-for="(list, index) in suvCateArr" @click="goSearchQuery(list.cateId)">
                    <div class="item-img-box">
                        <img lazy-load="true"  :src="list.icon" alt="">
                    </div>
                    <div class="item-txt">{{ list.cateName }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import '@/static/css/public.scss'
// import { getSubClass } from '@/service/getData'
const { mapState } = createNamespacedHelpers('sortGoods')
export default {
  data () {
    return {
      mainActiveIndex: 0,
      activeId: 1,
      navIndex: 0
    }
  },
  computed: {
    ...mapState([
      'name',
      'cateArr',
      'suvCateArr'
    ])
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '分类'
    })
  },
  created () {
    this.$store.dispatch('sortGoods/getFirstClass')
    this.$store.dispatch('sortGoods/getSubClass')
  },
  onPullDownRefresh () {
    console.log('下拉刷新')
    wx.stopPullDownRefresh()
  },
  mounted () {},
  methods: {
    showItems (i, cateId) {
      console.log(i)
      this.navIndex = i
      if (i === 0) {
        this.$store.dispatch('sortGoods/getSubClass')
      } else {
        this.$store.dispatch('sortGoods/getSubClass', { cateId: cateId })
      }
    },
    goSearchQuery (cateID) {
      this.$router.push({ path: '/pages/searchQuery/index', query: { cateId: cateID, value: this.cateArr[this.navIndex].cateName } })
    }
  }
}
</script>
<style lang="scss">
    .app {
        display: flex;
        align-items: stretch;
        height: 100%;
    }
    .left-box {
        width: 23%;
        overflow: scroll;
        background-color: #F3F4F5;
    }

    .right-box {
        background-color: #fff;
        width: 87%;
        overflow: scroll;
    }
    .navList {
        position: relative;
        height: 84px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F3F4F5;
    }
    .navList p {
        font-size:30px;/*px*/
        font-family:PingFang-SC-Heavy;
        color:rgba(51,51,51,1);
    }
    .navClick {
        background-color: #fff;
        font-weight: 600;
    }
    .navList i {
        background-color: #ff5139;
        width: 6px;
        height: 40px;
        border-radius: 5px;
        position: absolute;
        left: 0;
        top:50%;
        margin-top:-20px;
    }
    .item-lists-box {
        padding:0 1%;
        display: flex;
        flex-wrap: wrap;
    }
    .item-list {
        width: 33.33%;
        height: 302px;
    }
    .item-list .item-img-box {
        width: 100%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .item-list .item-txt {
        height: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size:24px;/*px*/
        font-family:PingFang-SC-Medium;
        font-weight:500;
        color:rgba(153,153,153,1);
    }
    .item-img-box img {
        width: 80%;
        height: 80%;
    }

</style>
