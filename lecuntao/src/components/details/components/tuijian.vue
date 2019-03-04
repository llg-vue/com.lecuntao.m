<template>
    <div>
        <div id="guess-ulike" class="guess-ulike" v-if="reco.length===0?false:true">
      <div id="shopping-guess-container" class="shopping-guess-container">
        <div class="guess-recommend">为你推荐</div>
        <div id="swiper-container2" class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" >
              <ul class="guess-cont">
                <li class="mr20" v-for="(item,index) in reco" :key="index">
                  <div class="guess-item-pic">
                    <img
                      :src="item.goods_image"
                      :alt="item.goods_name"
                    >
                  </div>
                  <div class="guess-item-content">
                    <span>{{item.goods_name}}</span>
                  </div>
                  <div class="guess-item-price">
                    <span>
                      <em>¥</em>{{item.goods_price}}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="al-bot">已经到底了</div>
      </div>
    </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            reco : {}
        }
    },
    props:['recoGoods'],
    watch:{
    recoGoods(val) {
      if(val.length>6){
        this.reco = val.slice(0,6)
      }else{
        this.reco = val;
      }
    }
  }
}
</script>

<style lang="" scoped>
    .guess-ulike {
    background: #fff;
}
.shopping-guess-container {
    width: 100%;
    box-sizing: border-box;
}
.guess-recommend {
    color: #f81234;
    font-size: 0.3rem;
    width: 7.2rem;
    text-align: center;
    font-weight: bold;
    padding-top: 0.26rem;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: 1;
}
.swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    
}
.swiper-slide ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.guess-cont {
    overflow: hidden;
    width: 100%;
    padding-left: 2.5%;
    box-sizing: border-box;
        margin-bottom: 0.4rem;
}
.guess-cont>li {
    float: left;
    width: 30.8%;
    margin-top: 0.2rem;
}
.mr20 {
    margin-right: 2.5%;
}
.guess-item-pic {
    width: 100%;
    height: 2rem;
    overflow: hidden;
    background-size: contain;
    border-radius: 0.03rem;
    margin-bottom: 0.12rem;
}
.guess-item-pic>img {
    width: 100%;
}
.guess-item-content span {
    height: 0.68rem;
    line-height: 0.34rem;
    overflow: hidden;
    font-size: 0.24rem;
    color: #808080;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.guess-item-price {
    font-size: 0.3rem;
    color: #333;
}
em, i {
    font-style: normal;
}
.guess-item-price span em {
    font-size: 0.24rem;
    margin-right: 0.04rem;
}
.al-bot {
    width: 100%;
    height: 1.26rem;
    background: #f0f0f0;
    color: #bababa;
    font-size: 0.26rem;
    border-top: 0.02rem solid #dcdcdc;
    line-height: 1.26rem;
    text-align: center;
}
</style>