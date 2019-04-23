<template>
    <div class="test">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            {{ content }}
            <van-row>
                <van-col span="8">span: 8</van-col>
                <van-col span="8">span: 8</van-col>
                <van-col span="8">span: 8</van-col>
                <van-col span="8">span: 8</van-col>
                <van-col span="8">span: 8</van-col>
                <van-col span="8">span: 8</van-col>
            </van-row>
            <Banner :banners="banners"></Banner>
            <p>刷新次数: {{ count }}</p>
            <LoadMore></LoadMore>
        </van-pull-refresh>
    </div>
</template>

<script>
  import { Row, Col, PullRefresh, Toast  } from 'vant'
  import Banner from '@/componentsWeb/Banner'
  import LoadMore from '@/componentsWeb/LoadMore'
  import { createNamespacedHelpers } from 'vuex'
  const { mapState } = createNamespacedHelpers('home')
  export default {
    components: {
      LoadMore,
      Banner,
      [Row.name]: Row,
      [PullRefresh.name]: PullRefresh,
      [Col.name]: Col
    },
    data () {
      return {
        content: 'hello !',
        count: 0,
        isLoading: true
      }
    },
    computed: {
      ...mapState([
        'name',
        'lastIds',
        'banners',
        'categories',
        'todayRecommends',
        'recommendGoods',
        'loadingIndexData',
        'loadingRecommendGoods'
      ])
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
      let res1 = await this.$store.dispatch('home/getIndexData')
      console.log('Page [home] Vue mounted')
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          Toast('刷新成功');
          this.isLoading = false;
          this.count++;
        }, 500);
      }
    }
  }
</script>

<style lang="scss" scoped>
.test {
    color: red;
    height: 100%;
}
</style>
<style lang="scss">
.van-pull-refresh, .van-pull-refresh__track {
    height: 100%;
}
</style>