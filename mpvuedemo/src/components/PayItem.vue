<template>
    <div class="pay-item" :data-value="payId" @click="onClick">
        <div class="pay-left">
            <img lazy-load="true"  :src="payIcon">
            <div class="pay-text">
                <div class="pay-desc">{{ payDesc }}</div>
                <div class="pay-tip">{{ payTip }}</div>
            </div>
        </div>
        <div class="pay-right">
            <van-radio :value="payType" :name="payId" :disabled="payTip ? true : false" />
        </div>
    </div>
</template>

<script>
  export default {
    name: 'PayItem',
    props: {
      payIcon: String,
      payDesc: Number,
      payTip: String,
      payId: Number,
      payType: Number
    },
    methods: {
      onClick: function (e) {
        this.$parent.selectPayType(e.currentTarget.dataset.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
.pay-item {
    background-color: #FFF;
    padding: 30px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .pay-left {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
            width: 62px;
            height: 62px;
        }
        .pay-text {
            margin-left: 30px;
        }
        .pay-desc {
            font-size:30px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:#333;
        }
        .pay-tip {
            font-size:24px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:#A5A4A4;
        }
    }
    .pay-right {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
}
</style>
<style lang="scss">
    .van-radio__icon--checked {
        color: #FF4D46!important;
    }
</style>
