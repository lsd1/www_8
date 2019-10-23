<template>
    <div class="mask" v-if="showPopup" catchtouchmove="null">
        <div class="loadingImg"></div>
    </div>
</template>

<script>
  export default {
    name: 'Loading',
    props: {
      'showPopup': {
        type: Boolean,
        default: false
      }
    },
    watch: {
      showPopup (newV, oldV) {
        console.log('loading ====' + oldV)
        console.log('loading ====' + newV)
      }
    }
  }
</script>

<style lang="scss" scoped>
.mask {
    display: flex;
    align-items: center;
    justify-content: center;
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: rgba(51, 51, 51, 0.51);
    z-index: 1;
}
.loadingImg {
    height: 150px;
    width: 150px;
    background: url('//imgHost/img.png') no-repeat;
    background-size: 150px auto;
    animation: myfirst 1s infinite steps(9, start) 0ms normal backwards;
    -webkit-animation: myfirst 1s infinite steps(9, start) 0ms normal backwards;
}
@-webkit-keyframes myfirst {
    0%    {background-position: 0 0;}
    100%  {background-position: 0 -1350px;}
}
@keyframes myfirst{
    0%    {background-position: 0 0;}
    100%  {background-position: 0 -1350px;}
}
.van-popup {
    background-color: unset!important;
}
.van-transition {
  background-color: rgba(0, 0, 0, 0.5) !important;
}
</style>
