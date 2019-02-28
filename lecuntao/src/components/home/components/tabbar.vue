<template>
    <div ref="bannerContainer" class="swiper-container swiper-container-horizontal swiper-container-ios nav-sticky">
        <ul id="navContent" class="nav swiper-wrapper navigation">
            <li class="dq swiper-slide nav_list" v-for="(item, index) in tabBar" :key="index">
                <a href="javascript:;" class="sp_active">
                    <i class="icon_sp icon_sp_active">
                        <img :src="item.cate_image">
                        <span>{{item.cate_name}}</span>
                    </i>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import Vuex from "vuex"
import Swiper from "swiper"
export default {
    computed: {
        ...Vuex.mapState({
            tabBar:state=>state.home.tabBar
        })
    },
    updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.bannerContainer, {
            slidesPerView : 3.5,
            slidesPerGroup : 1,
      });
    }
  }
}
</script>
<style lang="" scoped>
    #navContent{
        display: flex;
        justify-content: space-between;
        background: pink;
    }
    .nav {
        text-align: center;
        -border-bottom: 1px solid #ddd;
        background-color: white;
    }
    #navContent li {
        flex: 1;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        height: .46rem;
        margin: .24rem auto;
    }
    .nav a {
        display: block;
        -padding: .1rem 0;
        font-size: .28rem;
        color: rgb(51,51,51);
        height: .46rem;
        line-height: .46rem;
        border-radius: .35rem;
        padding-right: .1rem;
        text-align: center;
        overflow: hidden;
    }
    .nav span{
        color: rgb(51,51,51);
    }
    .icon_sp>img{
        display: inline-block;
        width: .16rem;
        height: .15rem;
        margin-top: .13rem;
        margin-left: .2rem;
    }
    .nav .sp_active {
        color: #fff;
        background: #ff788b;
        border-radius: 3rem;
        height: .46rem;
        line-height: .46rem;
    }
</style>