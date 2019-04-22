<template>
    <div class="test">
        {{ content }}
        <van-row>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
            <van-col span="8">span: 8</van-col>
        </van-row>
    </div>
</template>

<script>
  import { Row, Col } from 'vant';
  export default {
    components: {
      [Row.name]: Row,
      [Col.name]: Col
    },
    data () {
      return {
        content: 'hello !'
      }
    },
    computed: {},
    beforeCreate () {
      console.log('Page [home] Vue beforeCreate')
    },
    async created () {
      console.log('Page [home] Vue created')
    },
    beforeMount () {
      console.log('Page [home] Vue beforeMount')
    },
    mounted () {
      console.log('Page [home] Vue mounted')
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
.test {
    color: red;
}
</style>