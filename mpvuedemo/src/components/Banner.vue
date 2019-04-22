<template>
  <swiper class="swiper" indicator-dots="true" indicator-active-color="#000" autoplay="true" interval="5000" duration="1000">
    <template v-for="(item, index) in banners" >
      <swiper-item :key="index">
        <img lazy-load="true" :src="item.cover" class="slide-image" mode="aspectFill" @click="toBannerDetail(item.curType, item.content)"/>
      </swiper-item>
    </template>
  </swiper>
</template>
<script>
export default {
  name: 'Banner',
  props: {
    'banners': Object
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
  width:750px;
  height:290px;
  margin: 0 auto;
}
.wx-swiper-dots{
  position:relative;
  bottom: 30px!important;
}
.wx-swiper-dots .wx-swiper-dots-horizontal{
}
</style>
