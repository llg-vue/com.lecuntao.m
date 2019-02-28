<template>
  <div>
    <div class="swiper-container banner-container" ref="bannerContainer">
      <div class="swiper-wrapper banner-wrapper">
        <div class="swiper-slide banner-slide" v-for="(item, index) in banners" :key="index">
          <img :src="item.adv_image">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination banner-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import Vuex from "vuex"
export default {
  computed: {
    ...Vuex.mapState({
      banners: state => state.home.banners
    })
  },
  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.bannerContainer, {
        autoplay: {
          disableOnInteraction: false
        },autoplay: {
          disableOnInteraction: false
        },
         loop: true,
         pagination: {
         el: '.banner-pagination'
        },
      });
    }
  }
};
</script>
<style lang="" scope>
@import "../../../../node_modules/swiper/dist/css/swiper.min.css";
.banner-container {
  width: 100%;
  height: 4.1rem;
}
.banner-slide img {
  width: 100%;
  height: 4.1rem;
}
.swiper-pagination-bullet {
  width: 0.12rem;
  height: 0.12rem;
  display: inline-block;
  margin: 0.04rem;
  background: rgba(255, 255, 255, 0.59);
  border-radius: .1rem;
  transition: width 0.2s ease-out 0.1s;
}
.swiper-pagination-bullet-active{
    width: .2rem;
    background: rgba(255, 255, 255, 1);
    transition-delay: 0;
}
</style>