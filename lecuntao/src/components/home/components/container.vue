<template>
    <div id="swiper-container2" ref="bannerContainer">
      <ul class="swiper-wrapper">
        <li class="list-item" v-for="(item, index) in navlist" :key="index">
          <img class="icon-llj" :src="item.cate_image">
          <span class="ct-txt">{{item.cate_name}}</span>
        </li>
      </ul>
  </div>
</template>
<script>
import Swiper from "swiper";
import Vuex from "vuex"
export default {
  computed: {
    ...Vuex.mapState({
      navlist: state => state.home.navList
    })
  },
  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.bannerContainer, {
         slidesPerview:'auto',
         loop:true
      });
    }
  }
};
</script>
<style lang="" scoped>
@import "../../../../node_modules/swiper/dist/css/swiper.min.css";
#swiper-container2,.swiper-wrapper{
    width: 100%;
    height: 2rem;
    background: #fff;
    overflow: hidden;
}
.swiper-wrapper .list-item{
    width: 20%;
}
.list-item .icon-llj{
    width: .8rem;
    display: block;
    margin: 0.3rem auto 0.15rem;
}
.list-item .ct-txt {
    color: rgb( 85,85,85);
    font-size: .26rem;
    display: block;
    width: 100%;
    text-align: center;
}
</style>