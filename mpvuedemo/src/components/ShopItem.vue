<template>
    <div class="box">
        <div class="shop">
            <div class="check" >
                <checkbox :value="shopKey" :checked="checks.find(v => v === shopKey) ? true : false" />
            </div>
            <div class="img" @click="toStoreDetail">
                <wux-avatar :src="shopImg" />
            </div>
            <div @click="toStoreDetail" class="title">{{ shopName }}</div>
        </div>
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'ShopItem',
    data () {
      return {
        check: false
      }
    },
    props: {
      'storeId': Number,
      'shopName': String,
      'shopImg': String,
      'shopKey': String,
      'checks': {
        type: Object,
        default: []
      }
    },
    methods: {
      toStoreDetail () {
        this.$router.push({ path: '/pages/storeDetail/index', query: { storeId: this.storeId } })
      },
      hideSwiper (index) {
        this.$parent.hideSwiper(index)
      },
      async updateNum (data) {
        let res = await this.$parent.updateNum(data)
        return res
      },
      onSwipClick: function (e) {
        console.log('e2:', e)
        this.$parent.onSwipClick(e)
      }
    }
  }
</script>

<style lang="scss" scoped>
.box {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .shop {
        background-color: white;
        padding:0 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        flex:1;
        height: 120px;
        margin-top: 20px;
        .check {
            flex-basis: 65px;
        }
        .img {
            display: flex;
            flex-basis: 100px;
            justify-content:center;
            align-items: center;
        }
        .title {
            flex-basis: 350px;
            font-size:30px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(67,67,67,1);
        }
    }
}
</style>

<style lang="scss">
    .box {
        .check {
            checkbox {
                transform: scale(0.8,0.8);
            }
            .wux-cell, button {
                padding: 0!important;
                margin: 0!important;
                position: inherit!important;
            }
            .wux-selectable__input {
                top:unset;
                left:unset;
                width:unset;
                height:unset;
            }
        }
    }
    checkbox .wx-checkbox-input{
        border-radius: 50%;/* 圆角 */
        width: 40px; /* 背景的宽 */
        height: 40px; /* 背景的高 */
    }
    /* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
    checkbox .wx-checkbox-input.wx-checkbox-input-checked{
        border: none;
        background: red;
    }
    /* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
    checkbox .wx-checkbox-input.wx-checkbox-input-checked::before{
        border-radius: 50%;/* 圆角 */
        width: 40px;/* 选中后对勾大小，不要超过背景的尺寸 */
        height: 40px;/* 选中后对勾大小，不要超过背景的尺寸 */
        line-height: 40px;
        text-align: center;
        font-size:30px; /* 对勾大小 30px */
        color:#fff; /* 对勾颜色 白色 */
        background: transparent;
        transform:translate(-50%, -50%) scale(1);
        -webkit-transform:translate(-50%, -50%) scale(1);
    }
</style>
