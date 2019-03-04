<template>

                <div class="swiper-container">
                    <div class="swiper-wrapper" >
                        <div class="swiper-slide" v-for="(item,index) in Banner" :key="index"> 
                            <img :src="item.goods_image" alt="">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>

</template>

<script>
import Swiper from 'swiper';
import '../../../../node_modules/swiper/dist/js/swiper.min.js'
export default {
    
    props:['Banner'],
    created() {
        this.$nextTick(()=>{
             var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                observer:true,
            });
        })
    },
}
</script>

<style lang="" scoped>
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');

    .swiper-container {
      width: 7.5rem;
      height: 7.5rem;
      position: relative;
    }
    .swiper-wrapper{
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
      width: 7.5rem;
      height: 7.5rem;
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .swiper-slide>img{
        width: 100%;
        height: 100%
    }
    .swiper-pagination{
            width: 0.88rem;
            height: 0.88rem;
            border-radius: 50%;
            position: absolute;
            bottom: 0.26rem;
            left: 84%;
            z-index: 5;
            font-size: 0.24rem;
            line-height: 0.88rem;
            background: rgba(0,0,0,0.4);
            color: #fff;
            text-align: center;
            font-family: "Microsoft Yahei";
    }
    .swiper-pagination>.swiper-pagination-current{
        position: absolute;
        right: 0.5rem;
        top: -0.12rem;
        font-size: 0.24rem;
    }
    .swiper-pagination>.swiper-pagination-total{
        position: absolute;
        left: 0.5rem;
        top: 0.1rem;
        font-size: 0.24rem;
    }
</style>