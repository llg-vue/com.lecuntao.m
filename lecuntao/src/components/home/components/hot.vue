<template>
  <div id="upscrollWarp">
    <div class="lou_line">
      <i class="icon_l"></i>
      <span class="fl">热门推荐</span>
    </div>
    <ul id="dataList" class="data-list">
      <li @click="handleID(item)" v-for="(item, index) in hotList" :key="index">
        <a href="javascript:;">
          <img class="pd-img" v-lazy="item.goods_image" :key="item.goods_image">
        </a>
        <p class="pd-name">{{item.goods_name}}</p>
        <div class="pd-flow">
          <span class="pd-price">{{item.goods_price}}</span>
          <span class="pd-sold">已售{{item.goods_salenum}}件</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vuex from "vuex"
export default {
    computed: {
        ...Vuex.mapState({
            hotList:state=>state.home.hotList
        })
    },
    methods: {
      handleID(item){
        this.$router.push({name:'Details',query:{goodId:item.goods_id,gcId:item.gc_id}});
      }
    }
};
</script>
<style lang="" scoped>

</style>