<template>
    <wux-divider v-if="isloading">
        <wux-spin wux-class="spin" tip="小脉果儿拼命加载中" />
    </wux-divider>
</template>
<script>
  export default {
    name: 'LoadMore',
    props: {
      'isloading': {
        type: Boolean,
        default: false
      }
    }
  }
</script>
