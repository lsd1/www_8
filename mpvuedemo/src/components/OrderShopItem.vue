<template>
    <div class="box">
        <div class="shop">
            <div class="img">
                <wux-avatar :src="shopImg" />
            </div>
            <div class="title">{{ shopName }}</div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'OrderShopItem',
    data () {
      return {}
    },
    props: {
      'shopName': String,
      'shopImg': String
    },
    methods: {
      onSelect: function (goodsId, delivery) {
        this.$parent.onSelect(goodsId, delivery)
        // this.orderDetail[goodsId]['delivery'] = delivery
      }
    }
  }
</script>

<style lang="scss">
.box {
    margin-bottom: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .shop {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 30px;
        flex-direction: row;
        height: 120px;
        .check {
            flex-basis: 65px;
        }
        .img {
            display: flex;
            flex-basis: 100px;
            justify-content: center;
            align-items: center;
            .wux-avatar {
                width: 68px;
                height: 68px;
                border-radius: 34px;
            }
        }
        .title {
            flex-basis: 350px;
            font-size: 30px;
            font-family: PingFang-SC-Medium;
            font-weight: 500;
            color: rgba(67, 67, 67, 1);
        }
    }
}
</style>