<template>
    <div :class="bottomBorder ? 'title' : 'title hbb' ">
        <img v-lazy="'//imgHost/icon_branch.png'" class="title-icon" />
        <span class="title-text">{{ title }}</span>
    </div>
</template>

<script>
  export default {
    name: 'BlockTitle',
    props: {
      'title': String,
      'bottomBorder': { type: Boolean, default: false }
    }
  }
</script>

<style lang="scss" scoped>
.hbb {
    border-bottom: none!important;
}
.title {
    display: flex;
    align-items: center;
    height: 100px;
    font-size:30px;
    font-family:PingFang-SC-Heavy;
    font-weight:800;
    color:#333;
    border-bottom: 1px solid #f5f5f5;
    .title-icon {
        width:6px;
        height:30px;
        margin:0 20px 0 30px;
    }
    .title-text {
        font-size:30px;
        font-family:PingFang-SC-Bold;
        font-weight:bold;
        color:rgba(67,67,67,1);
    }
}
</style>
