<template>
    <div class="pay-item" >
        <div class="pay-left">
            <img lazy-load="true"  :src="payIcon">
            <div class="pay-text">
                <div class="pay-desc">{{ payDesc }}</div>
                <div class="pay-tip">{{ payTip }}</div>
            </div>
        </div>
        <div class="pay-right">
            <van-radio :name="payId" :disabled="payTip ? true : false" />
        </div>
    </div>
</template>

<script>
 import { Radio  } from 'vant'
  export default {
    name: 'PayItem',
    components: {
      [Radio.name]: Radio
    },
    props: {
      payIcon: String,
      payDesc: String,
      payTip: String,
      payId: Number
    },
    methods: {
      // onClick: function (payId) {
      //   console.log('payId:', payId)
      //   this.$parent.selectPayType(payId)
      // }
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
