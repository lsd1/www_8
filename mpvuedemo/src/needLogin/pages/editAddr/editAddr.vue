<template>
  <div class="editAddr">
    <wux-cell hover-class="none">
      <wux-input clear label="姓名" type="text" placeholder="请输入收货人姓名" controlled :maxlength="15" :value="consignee" :error="consignee === ''" @error="showConsigneeTips"  @clear="clear('consignee')" @change="change1" />
    </wux-cell>
    <wux-cell hover-class="none">
      <wux-input clear label="电话" placeholder="请输入收货人电话或手机号码" type="number" controlled :value="phone" maxlength="12" :error="isPhoneErr" @error="showPhoneTips" @clear="clear('phone')" @change="change2"/>
    </wux-cell>
    <wux-cell hover-class="none">
      <!--<wux-input clear label="选择地区" type="text" controlled :value="address"  @change="change3"/>-->
      <span class="select-label">当前选择   </span>
      <picker
              mode="region"
              @change="bindRegionChange"
              :value="region"
      >
        <view class="picker">
          {{region[0]}}，{{region[1]}}，{{region[2]}}
        </view>
      </picker>
    </wux-cell>
    <wux-cell hover-class="none">
      <!--<wux-input clear label="详细地址" placeholder="请输入详细的街道、小区、楼层地址" type="text" controlled :value="detailInfo" :error="detailInfo === ''" @error="showAddressTips" @clear="clear('detailInfo')"  @change="change3"/>-->
      <wux-textarea label="详细地址" hasCount="true" placeholder="请输入详细的街道、小区、楼层地址" clear="true" autoHeight="true" maxlength="50" controlled :value="detailInfo" :error="detailInfo === '' && !firstTime" @error="showAddressTips" @clear="clear('detailInfo')"  @change="change3" />
    </wux-cell>
    <div class="default">
      <div>设为默认</div>
      <van-switch :name="addressId" :checked="isDefault === 1" active-color="#f39d21" inactive-color="#EFEFEF" @change="change4"/>
    </div>
    <div class="btn"><van-button round type="danger" @click="editAddr">保存</van-button></div>
    <van-toast id="van-toast" />
  </div>
</template>
<script>
  import { editAddr } from '@/service/getData'
  import { createNamespacedHelpers } from 'vuex'
  import empty from 'is-empty'
  import Toast from '@/static/vant-weapp/toast/toast'
  const { mapState } = createNamespacedHelpers('editAddr')

  export default {
    components: {},
    data () {
      return {
        consignee: '',
        phone: null,
        provinceName: '',
        cityName: '',
        countyName: '',
        detailInfo: '',
        isDefault: 0,
        addressId: 0,
        emptySelect: ['请选择省', '市', '区']
      }
    },
    computed: {
      ...mapState([
        'editAddrData'
      ]),
      isPhoneErr () {
        // 返回true 说明号码格式有误
        if (empty(this.phone)) {
          return true
        }
        // 校验电话、手机号格式
        // let phoneRex = [/^(0\d{2,3}-)?\d{7,8}$/, /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/]
        let phoneRex = [/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/]
        let matchRes = false
        phoneRex.forEach(item => {
          if (item.test(this.phone)) {
            matchRes = true
          }
        })

        if (!matchRes) {
          return true
        }

        return false
      },
      region () {
        return [this.provinceName, this.cityName, this.countyName]
      }
    },
    beforeCreate () {
      console.log('Page [editAddr] Vue beforeCreate')
    },
    created () {
      console.log('Page [editAddr] Vue created')
    },
    beforeMount () {
      console.log('Page [editAddr] Vue beforeMount')
    },
    mounted () {
      console.log('Page [editAddr] Vue mounted')
    },
    onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '添加地址'
      })
      // Do some initialize when page load.
      console.log('Page [editAddr] onLoad')
    },
    onReady: function () {
      // Do something when page ready.
      console.log('Page [editAddr] onReady')
    },
    onShow: async function () {
      // Do something when page show.
      console.log('Page [editAddr] onShow')
      this.consignee = this.editAddrData.consignee
      this.phone = this.editAddrData.phone
      this.provinceName = this.editAddrData.provinceName
      this.cityName = this.editAddrData.cityName
      this.countyName = this.editAddrData.countyName
      this.detailInfo = this.editAddrData.detailInfo
      this.isDefault = this.editAddrData.isDefault
      this.addressId = this.editAddrData.addressId
    },
    onHide: function () {
      // Do something when page hide.
      console.log('Page [editAddr] onHide')
    },
    onUnload: function () {
      // Do something when page close.
      console.log('Page [editAddr] onUnload')
    },
    /**
     * for other event handlers, please check https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html
     */
    methods: {
      showConsigneeTips () {
        Toast('请输入收货人名称')
      },
      showAddressTips () {
        Toast('请输入具体的乡镇、街道地址')
      },
      showPhoneTips () {
        Toast('如果是带有区号的座机号请用-连接,例：020-222222')
      },
      clear (data) {
        this[data] = ''
      },
      isEmpty () {
        if (empty(this.consignee)) {
          Toast('收货人不能为空')
          return false
        }
        if (empty(this.phone)) {
          Toast('手机号码不能为空')
          return false
        }

        // 校验电话、手机号格式
        let phoneRex = [/^(0\d{2,3}-)?\d{7,8}$/, /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/]
        let matchRes = false
        phoneRex.forEach(item => {
          if (item.test(this.phone)) {
            matchRes = true
          }
        })

        if (!matchRes) {
          Toast('手机或电话号码格式不对')
          return false
        }

        let isRegionEmpty = true
        this.region.forEach(item => {
          if (this.emptySelect.find(v => v === item)) {
            isRegionEmpty = false
          }
        })

        if (!isRegionEmpty) {
          Toast('请选择完整的省市区信息')
          return false
        }

        if (empty(this.detailInfo)) {
          Toast('详细地址不能为空')
          return false
        }
        return true
      },
      bindRegionChange ({ detail }) {
        this.provinceName = detail.value[0]
        this.cityName = detail.value[1]
        this.countyName = detail.value[2]
      },
      change1 (e) {
        this.consignee = e.detail.value
      },
      change2 (e) {
        this.phone = e.detail.value
      },
      change3 (e) {
        this.detailInfo = e.detail.value
      },
      change4 (e) {
        this.isDefault = e.detail ? 1 : 0
      },
      async editAddr () {
        if (!this.isEmpty()) {
          return false
        }
        let consignee = this.consignee
        let phone = this.phone
        let provinceName = this.provinceName
        let cityName = this.cityName
        let countyName = this.countyName
        let detailInfo = this.detailInfo
        let isDefault = this.isDefault
        let addressId = this.addressId
        let data = { consignee, phone, provinceName, cityName, countyName, detailInfo, isDefault, addressId }
        let [err, res] = await editAddr(data)
        if (err) {
          Toast(err)
          return false
        }
        let _this = this
        Toast(res.msg)
        let t = setTimeout(() => {
          clearTimeout(t)
          _this.$router.back()
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .editAddr{
    .select-label {
      display: inline-block;
      font-size:30px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
    }
  }
</style>
<style lang="scss" >
  page {
    background-color: #F3F4F5;
  }
  .editAddr{
    picker {
      display: inline-block;
    }
    .picker {
      font-size:30px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:#A5A4A4;
    }
    icon {
      width: 60px;
      height: 60px;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    .wux-input,.wux-textarea {
      font-size: 30px!important;
    }
    .wux-input__label, .wux-textarea__label {
      width:130px;
    }
    .wux-textarea__control {
      padding-bottom: 0!important;
    }
    .wux-textarea__label {
      display: flex;
      align-items: center;
    }
    .wux-cell {
      padding:28px 30px;
      background-color: white!important;
    }
    .default {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 30px;
      height: 100px;
      margin-top: 30px;
      font-size:30px;
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(51,51,51,1);
      background-color: white;
    }
    .wux-cell__ft {
      color: #F39D21;
      font-size: 30px!important;
    }
    .van-switch {
      width: 60px;
      height: 34px;
      font-size: 26px!important;
    }
    .van-switch__node {
      width: 34px;
      height: 34px;
    }
    .btn {
      position: fixed;
      bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .van-button--danger {
        width: 690px;
        background-color: #FF6853;
        border: none;
        background:linear-gradient(90deg,rgba(255,104,83,1),rgba(255,81,57,1));
        box-shadow:0px 10px 14px 2px rgba(255,77,70,0.3);
      }
    }
  }
</style>
