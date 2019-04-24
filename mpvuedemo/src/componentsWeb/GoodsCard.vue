<template>
  <div :class="(goodsIndex % 2) > 0  ? 'list lf' : 'list lr'" >
    <div class="cell">
      <img v-lazy="goodsData.goodsCover" class="img" @click="toGoodsDetail(goodsData.goodsId)" />
      <div class="name">{{ goodsData.goodsName }}</div>
      <div class="price">{{ goodsData.goodsPrice }}</div>
      <van-tag class="tag" color="#FF4D46" plain v-for="(item, index) in goodsData.goodsTags" :key="index">
        {{ item }}
      </van-tag>
    </div>
  </div>
</template>
<script>
import { Tag } from 'vant';
export default {
  name: 'GoodsCard',
  components: {
    [Tag.name]: Tag
  },
  props: {
    'goodsData': Object,
    'goodsIndex': Number
  },
  data () {
    return {}
  },
  mounted () {
    console.log('Page [GoodsCard] Vue mounted')
  },
  methods: {
    toGoodsDetail (id) {
      console.log('goodsId:', id)
      this.$router.push({ path: '/pages/goodsDetail/index', query: { goodsId: id } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.list {
  background:#F3F4F5;
  width: 46%;
  float: left;
  .cell{
    width: 100%;
    height: 460px;
    background:rgba(255,255,255,1);
    border-radius: 10px;
    .img {
      height: 300px;
      width: 100%;
      border-radius: 10px;
    }
    .name {
      font-size:24px;/*px*/
      font-family:PingFang-SC-Medium;
      font-weight:500;
      color:rgba(67,67,67,1);
      margin-left: 20px;
      text-align: left;
      margin-top: 10px;
    }
    .price {
      font-size:30px;/*px*/
      font-family:PingFang-SC-Bold;
      font-weight:bold;
      color:rgba(255,77,70,1);
      margin-left: 20px;
      text-align: left;
      margin-top: 10px;
    }
    .tag {
      display: block;
      float: left;
      margin-left: 20px;
      /*width:75px;*/
      height:32px;
      background:rgba(165,164,164,0);
      border-radius:4px;
      margin-top: 10px;
    }
  }
}
.lr {
  padding:2% 1% 2% 3%;
}
.lf {
  padding:2% 3% 2% 1%;
}
</style>
