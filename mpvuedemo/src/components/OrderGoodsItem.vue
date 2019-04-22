<template>
    <template>
        <div slot="content" class="goods">
            <div class="img">
                <img lazy-load="true"  :src="goodsImg" />
            </div>
            <div class="detail">
                <div class="top">{{ goodsName }}</div>
                <div class="middle"><template v-for="(item, index) in goodsSku" :key="index">{{ item }} </template></div>
                <div class="bottom">
                    <div class="price"><span>￥</span>{{ goodsPrice }}</div>
                    <div class="num">
                        X{{ goodsNum }}
                    </div>
                </div>
            </div>
        </div>
        <div class="delivery">
            <div class="cell top"  @click="onClick">
                <span>送货方式</span><span>{{selectDelivery === 'post' ? '商家邮寄' : '到店消费'}}</span>
            </div>
            <div class="cell bottom" v-if="selectDelivery === 'post'">
                <span>邮费</span><span>{{postFee === 0 ? '免邮' : postFee + '元'}}</span>
            </div>
            <!--<wux-cell title="送货方式"  @click="onClick" :extra="selectDelivery === 'post' ? '商家邮寄' : '到店消费'"></wux-cell>-->
            <!--<wux-cell title="邮费" v-if="selectDelivery === 'post'" :extra="postFee === 0 ? '免邮' : postFee + '元' " ></wux-cell>-->
        </div>
        <van-action-sheet
                :data-id="cartId"
                :show="showSheet"
                :actions="actions"
                cancel-text="取消"
                @cancel="onClose"
                @close="onClose"
                @select="onSelect"
        />
    </template>
</template>

<script>
  export default {
    name: 'OrderGoodsItem',
    data () {
      return {
        showSheet: false
      }
    },
    props: {
      'selectDelivery': String,
      'goodsId': Number,
      'goodsName': String,
      'goodsImg': String,
      'cartId': Number,
      'postFee': Object,
      'goodsSku': {
        type: Object,
        default: []
      },
      'goodsPrice': String,
      'goodsNum': Number,
      'delivery': {
        type: Object,
        default: {}
      }
    },
    computed: {
      actions () {
        let _this = this
        let actions = []
        for (let i in _this.delivery) {
          switch (i) {
            case 'post':
              if (_this.delivery[i] === 1) {
                actions.push({ name: '商家邮寄', value: i, disabled: _this.postFee === false })
              }
              break
            case 'inStore':
              if (_this.delivery[i] === 1) {
                actions.push({ name: '到店消费', value: i, disabled: _this.delivery.inStore === false })
              }
              break
          }
        }
        return actions
      }
    },
    methods: {
      onClose: function (e) { this.showSheet = !this.showSheet },
      onSelect: function (e) {
        this.$parent.onSelect(e.target.dataset.id, e.detail.value)
        this.showSheet = !this.showSheet
      },
      onClick: function (e) { this.showSheet = !this.showSheet }
    }
  }
</script>

<style lang="scss">
.goods {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px;
    flex-direction: row;
    border-top: 1px solid #f3f3f3;
    height: 230px;
    .mask{
        z-index:3;
        position:absolute;
        left:0;
        right:0;
        opacity:0.7;
        background-color:#FFF;
        span {
            margin-left:118px;
            line-height:230px;
        }
    }
    .img {
        width: 160px;
        height: 160px;
        flex-basis: 170px;
        image {
            width: 160px;
            height: 160px;
            border-radius: 10px;
        }
    }
    .detail {
        flex-direction: column;
        display: flex;
        flex-basis: 450px;
        flex:1;
        .top {
            font-size:28px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:#434343;
        }
        .middle {
            display: flex;
            justify-content: flex-start;
            text-align: left;
            font-size:24px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(165,164,164,1);
        }
        .bottom {
            height: 50px;
            display: flex;
            justify-content: space-between;
            .price {
                font-size:30px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(255,77,70,1);
            }
            .num {
                font-size:30px;
                font-family:PingFang-SC-Medium;
                font-weight:500;
                color:rgba(165,164,164,1);
            }
        }
    }
}
.delivery {
    border-top: 1px solid #f3f3f3;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    font-size:24px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(165,164,164,1);
    .cell {
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
    }
}
    .van-action-sheet__cancel {
        color: #FF4D46;
    }
</style>
