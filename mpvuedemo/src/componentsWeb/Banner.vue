<template>
  <swiper class="swiper" indicator-color="#000" :autoplay="2000" :duration="1000">
    <template v-for="(item, index) in banners" >
      <swiper-item :key="index">
        <img v-lazy="item.cover" class="slide-image" @click="toBannerDetail(item.curType, item.content)"/>
      </swiper-item>
    </template>
  </swiper>
</template>
<script>
  import { Swipe, SwipeItem } from 'vant';
  export default {
  name: 'Banner',
  components: {
    Swiper: Swipe,
    SwiperItem:SwipeItem
  },
  props: {
    'banners': Array
  },
  data () {
    return {}
  },
  mounted () {
    console.log('Page [Banner] Vue mounted')
  },
  methods: {
    toBannerDetail: function (curType, content) {
      this.$parent.toOtherPage({ curType, content })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.slide-image {
  display: block;
  margin: 0 auto;
  width:750px;
  height:282px;
}
</style>
