<template>
  <div>
    <div class="swiper-container" ref="swiperWrap">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in imgs" :key="index">
          <img :src="item">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
    props: {
    imgs:Array
  },
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: {
        disableOnInteraction: false
      },
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>
<style lang="" scope>
@import "../../../node_modules/swiper/dist/css/swiper.css";
.swiper-container {
  width: 100%;
}
.swiper-container {
  width: 100%;
  height: 4.1rem;
}
.swiper-slide img {
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