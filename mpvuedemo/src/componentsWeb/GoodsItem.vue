<template>
    <van-swipe-cell @touchstart="onTouchstart"  :id="'swiper' + index" class="goods-swiper" :right-width="400" async-close @close="onClose" >
        <div class="goods">
            <div class="mask" v-if="invalid"><span>已失效</span></div>
            <div class="check">
                <van-checkbox :name="jointKey" @click="checkChange(jointKey)" />
            </div>
            <div class="img" @click="toGoodsDetail">
                <img v-lazy="goodsImg" />
            </div>
            <div class="detail">
                <div class="top">{{ goodsName }}</div>
                <div class="middle"><template v-for="(item, index) in goodsSku" >{{ item }} </template></div>
                <div class="bottom">
                    <div class="price"><span>￥</span>{{ goodsPrice }}</div>
                    <div class="num">
                        <!--<wux-input-number @focus="onFocus" @blur="onBlur" :value="getGoodsNum" :controlled="true" :longpress="true" @change.stop="buyNumChange" :disabled="flase" shape="circle" color="assertive" slot="footer" />-->
                        <van-stepper :value="getGoodsNum"
                                     async-change
                                     integer
                                     :min="1"
                                     :max="40"
                                     :step="1"
                                     @change="buyNumChange"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div slot="right" class="hide-side"><div @click="onClick(0)" class="side side1">收藏</div><div @click="onClick(1)" class="side side2">删除</div></div>
    </van-swipe-cell>
</template>
<script>
  import { SwipeCell, Checkbox, Stepper } from 'vant'
  export default {
    name: 'GoodsItem',
    components: {
      [Checkbox.name]: Checkbox,
      [SwipeCell.name]: SwipeCell,
      [Stepper.name]: Stepper
    },
    props: {
      'actions': Array,
      'invalid': {
        type: Boolean,
        default: false
      },
      'checks': {
        type: Array,
        default: []
      },
      'goodsName': String,
      'goodsImg': String,
      'goodsId': Number,
      'shopKey': String,
      'cartId': Number,
      'jointKey': String,
      'indexes': String,
      'index': Number,
      'goodsSku': {
        type: Array,
        default: []
      },
      'goodsPrice': String,
      'goodsNum': Number,
      'checkChange': Function
    },
    data () {
      return {
        min: 1,
        goodsLastNum: null,
        timeCount: 0,
        lastEdit: 0
      }
    },
    computed: {
      getGoodsNum () {
        if (this.goodsLastNum !== null) {
          return this.goodsLastNum
        } else {
          return this.goodsNum
        }
      }
    },
    methods: {
      buyNumChange: function (value) {
        if (value <= 0) {
          return false
        } else {
          this.setGoodsNum(value)
        }
      },
      setGoodsNum (num) {
        let _this = this
        _this.goodsLastNum = num
        if (_this.timeCount !== 0) {
          _this.timeCount = 2
          return false
        }
        _this.timeCount = 2
        let t = setInterval(async function () {
          if (_this.timeCount === 0) {
            clearInterval(t)
            if (_this.lastEdit === 0) {
              _this.lastEdit = _this.goodsNum
              if (_this.goodsNum === _this.goodsLastNum) {
                return false
              }
            } else {
              if (_this.lastEdit === _this.goodsLastNum) {
                return false
              }
            }
            let res = await _this.$parent.updateNum({ shopKey: _this.shopKey, jointKey: _this.jointKey, cartId: _this.cartId, num: _this.goodsLastNum })
            console.log('res:', res)
            if (res) {
              _this.lastEdit = _this.goodsLastNum
            } else {
              _this.goodsLastNum = _this.lastEdit
            }
          } else {
            _this.timeCount--
          }
        }, 500)
      },
      onClose (e) {
        e.detail.instance.close()
      },
      onTouchstart () {
        this.$parent.hideSwiper(this.index)
      },
      toGoodsDetail () {
        this.$router.push({ path: '/pages/goodsDetail/index', query: { goodsId: this.goodsId } })
      },
      onClick (type) {
        switch (type) {
          case 0:
            this.$parent.onSwipClick({ jointKey: this.jointKey, goodsId: this.goodsId, type: type })
            break
          case 1:
            this.$parent.onSwipClick({ shopKey: this.shopKey, indexes: this.indexes, cartId: this.cartId, goodsId: this.goodsId, type: type, jointKey: this.jointKey })
            break
        }
      }
    }
  }
</script>

<style lang="scss">
.goods-swiper {
    .goods {
        padding:0 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        flex:1;
        height: 230px;
        border-top:1px solid #f3f4f5;
        background-color: white;
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
        .check {
            van-checkbox {
                transform: scale(0.8,0.8);
            }
            flex-basis: 65px;
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
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex:1;
                height: 50px;
                .price {
                    font-size:30px;
                    font-family:PingFang-SC-Medium;
                    font-weight:500;
                    color:rgba(255,77,70,1);
                }
                .num {
                    margin-right: 30px;
                }
            }
        }
    }
    .hide-side {
        height: 100%;
        width: 240px;
        display: flex;
        justify-content: center;
        align-items:stretch;
        .side {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
            color: white;
            font-size:28px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
        }
        .side1 {
            background-color: #F39D21;
        }
        .side2 {
            background-color: #FF4D46;
        }
    }
}
</style>
<style lang="scss">
.num{
    .wux-input-number__input {
        margin:0 10px;
        border-color: #f5f6f7 !important;
        border: 1px solid #f5f6f7;
        border-radius: 27px;
        padding:0;
    }
    .wux-input-number__selector {
        font-size: 56px;
    }
    .wux-input-number--circle .wux-input-number__selector--assertive {
        border-color:#A5A4A4;
    }
    .wux-input-number .wux-input-number__selector--assertive {
        color:#A5A4A4;
    }
    .wux-input-number--circle .wux-input-number__selector {
        width:40px;
        height:40px;
        font-size:30px;/*px*/
        line-height:40px;
        border-radius:50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wux-input-number__selector--sub {
        padding: 0 0;
    }
    .wux-input-number {
        align-items: center;
    }


}
</style>
