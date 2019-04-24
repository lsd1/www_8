<template>
    <van-loading />
</template>
<script>
  import { Loading } from 'vant';
  export default {
    name: 'LoadMore',
    components: {
      [Loading.name]: Loading
    },
    props: {
      'isloading': {
        type: Boolean,
        default: false
      }
    }
  }
</script>
