<template>
    <div id="cont_bk">
        <div><span class="llj_title"><img src="../../../../static/img/index/imgLe6Ji.png"></span></div>
        <div class="triangle_bg">
            <i class="icon_triangle"></i>
            <img class="tri_img" :src="le6jiBg">
        </div>
        <Swiper-com :msgs="le6ji"></Swiper-com>
    </div>
</template>
<script>
import Vuex from "vuex"
import Swiper from "./swiper"
export default {
    components: {
        "Swiper-com":Swiper
    },
    computed: {
    ...Vuex.mapState({
      le6jiBg: state => state.home.le6jiBg
    }),
    ...Vuex.mapState({
      le6ji: state => state.home.le6ji
    })
  },
}
</script>
<style lang="" scoped>
    .llj_title{
        width: 2.38rem;
        height: .3rem;
        background-size: contain;
        margin: 0.2rem auto;
        display: block;
    }
    .llj_title>img{
        width: 100%;
        height: 100%;
    }
    .triangle_bg{
        width: 100%;
        position: relative;
    }
    .tri_img {
        width: 100%;
        display: block;
    }
    .icon_triangle {
        width: 0px;
        height: 0px;
        border-top: 10px solid rgba(0,0,0,0);
        border-right: 10px solid rgba(0,0,0,0);
        border-bottom: 10px solid #fff;
        border-left: 10px solid rgba(0,0,0,0);
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: -6px;
    }
</style>