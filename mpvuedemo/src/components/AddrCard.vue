<template>
    <div class="addr-box">
        <div class="top">
            <div>{{ consignee }}</div>
            <div>{{ phone }}</div>
        </div>
        <div class="middle" :data-index="index" @click.stop="choseAddr">
            <div>
               {{ address }}
            </div>
        </div>
        <div class="bottom">
            <div class="check-box">
                <div class="checkbox">
                    <checkbox style="width: 30px;height: 30px;" :checked="defaultAddr === addressId" :data-id="addressId" @click="setDefault" />
                </div>
                默认地址
            </div>
            <div class="edit">
                <div :data-index="index" @click.stop="editAddr">编辑</div>
                <div :data-id="addressId" @click.stop="delAddr">删除</div>
            </div>
        </div>
        <van-dialog id="van-dialog" />
    </div>
</template>

<script>
  import Dialog from '@/static/vant-weapp/dialog/dialog'
  export default {
    name: 'AddrCard',
    props: {
      'consignee': String,
      'phone': String,
      'address': String,
      'addressId': Number,
      'index': Number,
      'defaultAddr': {
        type: Number,
        default: -1
      }
    },
    methods: {
      choseAddr (e) {
        this.$parent.choseAddr(e.currentTarget.dataset.index)
      },
      editAddr (e) {
        this.$parent.editAddr(e.currentTarget.dataset.index)
      },
      delAddr (e) {
        Dialog.confirm({
          message: '确认删除？'
        }).then(() => {
          this.$parent.delAddr(e.currentTarget.dataset.id)
        }).catch(() => {
          // on cancel
        })
      },
      setDefault (e) {
        this.$parent.setDefault(e.currentTarget.dataset.id)
      }
    }
  }
</script>

<style lang="scss" scoped>
.addr-box {
    background-color: white;
    display: flex;
    flex-direction: column;
    font-size:30px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
    margin-top:20px;
    .top{
        padding: 36px 30px 15px 30px;
        display: flex;
        justify-content: space-between;
        div:first-child {
            font-family:PingFang-SC-Heavy;
            font-weight:800;
            color:rgba(51,51,51,1);
        }
    }
    .middle {
        padding: 36px 30px 15px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .bottom {
        padding: 36px 30px 15px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .check-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .edit {
            display: flex;
            justify-content: space-between;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(165,164,164,1);
            width: 30%;
        }
        .checkbox {
            width:50px;
            height:50px;
            display:inline-block;
            checkbox {
                transform: scale(0.8,0.8);
            }
        }
    }
}

</style>
<style lang="scss">
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
