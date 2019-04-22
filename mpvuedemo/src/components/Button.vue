<template>
	<div class="btn-box" @click="test3">
		<!--<button @click="test">你好</button>-->
		<van-tag plain round color="#FF4D46" size="large" type="primary" @click.native="btnAppealFunc">取消申诉</van-tag>
		<van-tag plain round :class="{hide: btnAppeal}" color="#FF4D46" size="large" type="primary">取消申诉</van-tag>
		<van-tag plain round :class="{hide: btnEval}" color="#FF4D46" size="large" type="primary">评价</van-tag>
		<van-tag plain round :class="{hide: btnConfirm}" color="#FF4D46" size="large" type="primary">确认收货</van-tag>
		<!--<van-tag plain round :class="{hide: btnPlatform}" @click="btnPlatformFunc" color="#A5A4A4" size="large" type="primary">平台申诉</van-tag>-->
		<!--<van-tag plain round v-if="btnRefund" @click="btnRefundFunc" color="#FF4D46" size="large" type="primary">取消退款</van-tag>-->
		<!--<van-tag plain round v-if="btnContinue" color="#A5A4A4" size="large" type="primary">继续付款</van-tag>-->
		<!--<van-tag plain round v-if="btnCancelOrder" color="#FF4D46" size="large" type="primary">取消订单</van-tag>-->
		<!--<van-tag plain round v-if="btnReturnGoods" color="#FF4D46" size="large" type="primary">退货</van-tag>-->
		<!--<van-tag plain round v-if="btnLogistics" color="#FF4D46" size="large" type="primary" @click="btnLogisticsFunc">查看物流</van-tag>-->
		<!--<van-tag plain round v-if="btnOrderCode" color="#FF4D46" size="large" type="primary">订单二维码</van-tag>-->
	</div>
</template>

<script>
  import Toast from '../static/vant-weapp/toast/toast'

export default {
    data () {
      return {
        btnNum: null,
        btnRefund: true, // 取消退款按钮
        btnAppeal: true, // 取消申诉按钮
        btnEval: true, // 评论按钮
        btnConfirm: true, // 确认按钮
        btnPlatform: true, // 平台申诉
        btnContinue: true, // 继续付款
        btnCancelOrder: true, // 取消订单
        btnReturnGoods: true, // 退货
        btnLogistics: true, // 查看物流
        btnOrderCode: true // 订单二维码
      }
    },
    created () {
      console.log('button')
      console.log(this.navNum)
      console.log(this.orderDetails)
    },
    props: {
      navNum: {
        type: Number,
        required: true
      },
      orderDetails: {
        type: Object,
        required: true
      }
    },
    methods: {
      test3 () {
        console.log('test3')
        Toast('test3')
      },
      btnAppealFunc () {
        console.log('sabi')
        Toast('button')
        // this.$parent.btnAppealFunc()
        this.$emit('btnAppealFunc', 132)
      },
      btnRefundFunc () {
        this.$parent.btnRefundFunc()
      },
      btnPlatformFunc () {
        this.$parent.btnPlatformFunc({ id: 11 })
      },
      btnLogisticsFunc () {
        this.$parent.showLogistics()
      },
      routerChange (func) {
        console.log(func)
        console.log(typeof func)
        this.$parent.func()
      }
    }
  }
</script>

<style lang="scss">
	.btn-box {
		background-color: #fff;
		height: 80px;
		padding-right: 30px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		van-tag {
			padding-left: 30px;
		}
		.hide {
			display: none;
		}
	}
</style>
