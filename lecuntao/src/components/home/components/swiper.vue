<template>
    <div id="swiper-container3" ref="bannerContainer" class="swiper-container swiper-container-horizontal swiper-container-ios">
        <ul class="swiper-wrapper">
            <li @click="handle(item)" class="swiper-slide swi_li" v-for="(item, index) in msgs" :key="index">
                <span class="img_sp">
                    <img :src="item.goods_image">
                </span>
                <span class="txt_sp">{{item.goods_name}}</span>
                <span class="cen_price_original">{{item.goods_price}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import Vuex from "vuex"
import Swiper from "swiper";
export default {
    props: {
        msgs:Array
    },
  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.bannerContainer, {
            slidesPerView : 3.5,
            slidesPerGroup : 1,
      });
    }
  },
  methods: {
      handle(item){
          this.$router.push({name:'Details',query:{goodId:item.goods_id,gcId:item.gc_id}});
      }
  },
}
</script>
<style lang="" scoped>
@import "../../../../node_modules/swiper/dist/css/swiper.min.css";
    #swiper-container3,.swiper-wrapper{
        width: max-content；
    }
    .swi_li {
        width: 2rem;
        height: 3.4rem;
        background: #fff;
    }
    .img_sp {
        width: 90%;
        height: 1.8rem;
        margin: 0.2rem auto;
        display: block;
    }
    .img_sp img {
        width: 100%;
        display: block;
        vertical-align: middle;
    }
    .txt_sp {
        color: rgb( 51,51,51);
        font-size: .24rem;
        display: block;
        margin-left: .2rem;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        display: -webkit-box;
        height: 0.72rem;
        line-height: 0.36rem;
        margin-right: .2rem;
    }
    .cen_price_original {
        font-size: .24rem;
        color: rgb(242,48,48);
        display: block;
        width: 100%;
        text-align: center;
        padding-top: .05rem;
        padding-bottom: .1rem;
    }
</style>