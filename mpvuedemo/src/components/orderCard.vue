<template>
	<div class="order-card" >
		<div class="head-box">
			<div class="store-img" :style="{backgroundImage: 'url('+ shopInfo.shopImg +')'}"></div>
			<div class="store-title">{{ shopInfo.storeName }}</div>
			<div class="order-status" :class="{orangeStatus : (colorType === 0)}" v-text="orderStatusTxt"></div>
		</div>
		<div class="order-info" @click="goToOrderDetails">
			<div class="info-card" v-for="(i, index) in goodsInfo" :key="index">
				<div class="goods-info">
					<div class="goods-img" :style="{backgroundImage: 'url('+ i.goodsImg +')'}"></div>
					<div class="box">
						<div class="goods-name">{{ i.goodsName }}</div>
						<div class="goods-des">{{ i.goodsSku}}</div>
						<div class="goods-share">分享佣金：{{ i.shareCommission }}</div>
					</div>
				</div>
				<div class="goods-num">
					<div class="goods-price">￥{{ i.goodsPrice }}</div>
					<div class="goods-amount">x{{ i.goodsNum }}</div>
				</div>
			</div>
		</div>
		<div class="order-total">
			<div class="order-num">订单编号：{{ shopInfo.orderSn }}</div>
			<div class="price-total">合计: <i>￥<i>{{ shopInfo.storePrice }}</i></i></div>
		</div>
	</div>
</template>

<script>
// import empty from 'is-empty'
export default {
  props: ['goodsInfo', 'shopInfo', 'type'],
  created () {
    this.orderStatusTxtFunc()
    console.log('info')
    console.log(this.shopInfo)
    console.log(this.goodsInfo)
    console.log(this.type)
  },
  components: {
  },
  data () {
    return {
      orderStatusTxt: '',
      colorType: 0
    }
  },
  filters: {},
  methods: {
    goToOrderDetails () {
      this.$emit('orderDetail', { orderStoreId: this.shopInfo.orderStoreId, status: this.shopInfo.status })
    },
    orderStatusTxtFunc () {
      console.log('this.type:' + this.type)
      let txt = ''
      if (this.type === 'inList') {
        switch (this.shopInfo.status) {
          case 2:
            txt = '待收货'
            break
          case 3:
            txt = '待评价'
            break
          case 8:
            txt = '待接单'
            break
          case -8:
            txt = '拒绝接单'
            break
          case 11:
            txt = '待消费'
            break
          case -6:
            txt = '拒绝退款'
            break
        }
      } else {
        this.colorType = 1
        switch (this.shopInfo.status) {
          case 0:
            txt = '待付款'
            break
          case 1:
            txt = '待发货'
            break
          case 2:
            txt = '待收货'
            break
          case 3:
            txt = '待评价'
            break
          case 4:
            txt = '已完成'
            break
          case 6:
            txt = '待退款'
            break
          case -6:
            txt = '拒绝退款'
            break
          case 7:
            txt = '取消中'
            break
          case 8:
            txt = '待接单'
            break
          case -8:
            txt = '拒绝接单'
            break
          case 9:
            txt = '已退款'
            break
          case 10:
            txt = '申诉中'
            break
          case -10:
            txt = '平台拒绝申诉'
            break
          case 11:
            txt = '待消费'
            break
        }
      }
      this.orderStatusTxt = txt
    }
  }
}
</script>

<style lang="scss">
	.order-card {
		/*padding-top: 20px;*/
		background-color: #fff;
		width: 100%;
		.head-box {
			height: 80px;
			padding-left: 30px;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			border-bottom: 1px solid #F3F4F5;
			font-family:PingFang-SC-Medium;
			font-weight:500;
			padding-right: 30px;
			.store-img {
				width: 48px;/*px*/
				height: 48px;/*px*/
				border-radius: 50%;
				/*background-color: #000;*/
				background-size: cover;
			}
			.store-title {
				padding-left: 16px;
				font-size:30px;/*px*/
				color:rgba(67,67,67,1);
			}
			.order-status {
				font-size:24px;/*px*/
				flex-grow: 1;
				color:#333333;
				text-align: right;
			}
			.orangeStatus {
				color: #F39D21;
			}

		}
		.order-info {
			width: 100%;
			.info-card {
				height:210px;
				padding:30px 30px 0 30px;
				display:flex;
				justify-content:flex-start;
				border-bottom:1px solid #f3f4f5;
				.goods-info {
					font-family:PingFang-SC-Medium;
					height: 160px;
					font-weight:500;
					flex-grow: 1;
					display: flex;
					justify-content: flex-start;
					align-items: stretch;
					.goods-img {
						width: 160px;
						height: 160px;
						flex-basis: 160px;
						border-radius: 6px;
						flex-shrink: 0;
						-webkit-background-size: cover;
						background-size: cover;
					}
					.box {
						padding-left: 10px;
						display: flex;
						flex-wrap: wrap;
						flex-direction: column;
						justify-content: space-between;
						.goods-name {
							overflow: hidden;
							font-size:28px;/*px*/
							color:rgba(67,67,67,1);
						}
						.goods-des {
							height: 80px;
							font-size:24px;/*px*/
							color:rgba(165,164,164,1);
							left: 0;
							bottom: 0;
						}
						.goods-share {
							font-size:24px;/*px*/
							color:rgba(243,157,33,1);
						}
					}


				}
				.goods-num {
					height: 160px;
					font-family:PingFang-SC-Medium;
					font-weight:500;
					text-align: right;
					/*display: flex;*/
					/*justify-content: flex-end;*/
					/*flex-wrap: wrap;*/
					.goods-price {
						height: 38px;
						font-size:24px;/*px*/
						color:rgba(51,51,51,1);
					}
					.goods-amount {
						font-size:30px;/*px*/
						color:rgba(165,164,164,1);
					}

				}
			}
		}
		.order-total {
			height: 80px;
			display: flex;
			padding: 0 30px;
			justify-content: space-between;
			align-items: center;
			border-bottom:1px solid #f3f4f5;
			.order-num {
				font-size:24px;/*px*/
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color:rgba(51,51,51,1);
			}
			.price-total {
				font-size:24px;/*px*/
				font-family:PingFang-SC-Medium;
				font-weight:500;
				color: #333333;
				i {
					display: inline-block;
					font-size:24px;/*px*/
					color: #FF4D46;
					i	{
						font-weight: 800;
						font-size:30px;/*px*/
					}
				}
			}
		}
	}

</style>
