<template>
    <div class="empty-page">
        <div class="empty-img">
            <img class="img" mode="scaleToFill" :src="imgUrl" />
        </div>
        <wux-divider>{{ content }}</wux-divider>
    </div>
</template>

<script>
  export default {
    name: 'EmptyPage',
    props: {
      'content': {
        type: String,
        default: '暂无内容'
      },
      imgUrl: {
        type: String,
        default: '//imgHost/noevaluation.png'
      }
    }
  }
</script>
<style lang="scss">
    .empty-page {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        padding-top: 200px;
        width: 100%;
        height: 100%;
        .empty-img {
            width: 300px;
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: flex-end;
            .img {
                width: 322px;
                height: 200px;
                background-size: contain;
                background-repeat: no-repeat;
            }
        }
        .wux-divider--text {
            display: block;
            height: auto;
            font-size:36px;
            font-family:PingFang-SC-Heavy;
            font-weight:800;
            color:rgba(51,51,51,1);
            margin-top: 10px;
        }
    }

</style>
