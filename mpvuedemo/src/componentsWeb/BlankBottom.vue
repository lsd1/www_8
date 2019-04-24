<template>
    <div :style="'height:' + height " class="blank-bottom"></div>
</template>

<script>
  export default {
    name: 'BlankBottom',
    props: {
      height: {
        type: String,
        default: '130px'
      }
    }
  }
</script>

<style scoped>
.blank-bottom {
    width: 100%;
}
</style>