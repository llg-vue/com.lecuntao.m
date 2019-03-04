<template>
  <div class="infoBox" v-if="infos">
    
    <div class="prod-title">
      <a href="#" class="prod-tit-l">
        <span>{{infos.goods_name}}</span>
      </a>
      <div class="prod-tit-r">
        <i></i>
        <span>二维码</span>
      </div>
    </div>
    <div class="prod-tit-des">{{infos.goods_jingle}}</div>
    <div class="prod-price">
      <span class="prod-money">
        <em class="icon-m">￥</em>
        {{infos.goods_price}}
      </span>
      <span class="ori-price">{{infos.goods_marketprice}}</span>
    </div>
    <div class="prod-freight">
      <span>运费：</span>
      <span>运至{{infos.fare_title}}</span>
    </div>
    <div class="space-line"></div>
    <div class="prod-spec">
      <span class="spec-desc">请选择</span>
      <div class="base-txt">{{store.spec}}</div>
      <div class="part-note-msg">1个</div>
      <em class="icon-spot"></em>
    </div>
    <div class="space-line"></div>
    <div class="prod-shop" v-if="store.storeInfo">
      <a href="#">
        <div class="shoppic">
          <img :src="store.storeInfo.store_logo" alt>
        </div>
        <div class="shop-con">
          <div class="shopname">{{store.storeInfo.store_name}}</div>
          <div class="shopaddress">
            <span>所在地:</span>
            {{store.storeInfo.area_info}}
          </div>
        </div>
      </a>
    </div>
    <div class="space-line"></div>
    <!-- <div class="cont-pull">查看图文详情</div>
    <div class="wrap-shop">
      <div class="slide-bar">
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700421669979_1280.jpg"
          alt="image"
        >
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700424157600_1280.jpg"
          alt="image"
        >
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700424704647_1280.jpg"
          alt="image"
          class="lazy"
          data-original="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700424704647_1280.jpg"
          style="opacity: 1;"
        >
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700426926473_1280.jpg"
          alt="image"
          class="lazy"
          data-original="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700426926473_1280.jpg"
          style="opacity: 1;"
        >
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700425575397_1280.jpg"
          alt="image"
          class="lazy"
          data-original="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700425575397_1280.jpg"
          style="opacity: 1;"
        >
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700427132845_1280.jpg"
          alt="image"
          class="lazy"
          data-original="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700427132845_1280.jpg"
          style="opacity: 1;"
        >
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700428209830_1280.jpg"
          alt="image"
          class="lazy"
          data-original="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700428209830_1280.jpg"
          style="opacity: 1;"
        >
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700429271249_1280.jpg"
          alt="image"
          class="lazy"
          data-original="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700429271249_1280.jpg"
          style="opacity: 1;"
        >
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700430686457_1280.jpg"
          alt="image"
          class="lazy"
          data-original="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700430686457_1280.jpg"
          style="opacity: 1;"
        >
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700443793366_1280.jpg"
          alt="image"
          class="lazy"
          data-original="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700443793366_1280.jpg"
          style="opacity: 1;"
        >
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700436508800_1280.jpg"
          alt="image"
          class="lazy"
          data-original="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700436508800_1280.jpg"
          style="opacity: 1;"
        >
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700437686803_1280.jpg"
          alt="image"
          class="lazy"
          data-original="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700437686803_1280.jpg"
          style="opacity: 1;"
        >
        <img
          src="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700438838113_1280.jpg"
          alt="image"
          class="lazy"
          data-original="https://img.lecuntao.com/data/upload/shop/store/goods/723/2018/12/23/723_05988700438838113_1280.jpg"
          style="opacity: 1;"
        >
      </div>
    </div> -->

    <!-- <div id="guess-ulike" class="guess-ulike" v-if="reco.length===0?false:true">
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
          <div class="swiper-pagination"></div>
        </div>
        <div class="al-bot">已经到底了</div>
      </div>
    </div> -->

  </div>
</template>
<script>
export default {
  data() {
    return {
      leibie: "",
      num: "",
      infos: {},
      store: {},
      reco: []
    };
  },
  props: ["Infos", "stores", "recoGoods"],
  watch:{
    Infos(val) {
      this.infos = val;
    },
    stores(val) {
      this.store = val;
    },
    recoGoods(val) {
      if(val.length>6){
        this.reco = val.slice(0,6)
      }else{
        this.reco = val;
      }
      // console.log(this.reco);
    }
  }
};
</script>

<style lang="" scoped>
  .upImg{
    position: fixed;
    width: 1.05rem;
    height: 1.05rem;
    bottom: 2rem;
    right: 0.5rem;
    z-index: 99;
  }
  .upImg>img{
    width: 100%;
    height: 100%;
  }
a {
  text-decoration: none;
  color: #252525;
  outline: none;
}
.infoBox {
  width: 7.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  /* position: relative; */
}

.prod-title {
  margin: 0.2rem 0.18rem 0rem 0.18rem;
  overflow: hidden;
  background-color: #fff;
}
.prod-tit-l {
  width: 80%;
  float: left;
}
.prod-tit-l span {
  font-size: 0.3rem;
  color: #252525;
  line-height: 1.5;
}
.prod-tit-r {
  float: right;
  width: 0.88rem;
}
.prod-tit-r i {
  background: url("https://m.lecuntao.com/resource/images/details/icon_QRcode2.png?lv=365ee8b54d")
    no-repeat;
  width: 0.4rem;
  height: 0.4rem;
  display: block;
  background-size: contain;
  margin-left: 0.24rem;
}
.prod-tit-des {
  display: block;
  font-size: 0.24rem;
  color: #808080;
  margin-left: 0.18rem;
  margin-top: 0.14rem;
}
.prod-price {
  margin-left: 0.12rem;
  padding-bottom: 0.14rem;
  overflow: hidden;
}
.prod-money {
  color: #ff7300;
  font-size: 0.48rem;
  float: left;
  color: #ff4b4b;
  margin-top: 0.18rem;
}
.icon-m {
  margin-right: 0.04rem;
  font-size: 0.38rem;
  color: #ff4b4b;
}
em,
i {
  font-style: normal;
}
.ori-price {
  float: left;
  font-size: 0.24rem;
  color: #808080;
  margin-left: 0.12rem;
  padding-top: 0.4rem;
  text-decoration: line-through;
}
.prod-freight {
  color: #808080;
  font-size: 0.24rem;
  padding-bottom: 0.2rem;
  margin-left: 0.18rem;
}
.space-line {
  width: 100%;
  height: 0.08rem;
  background: #f0f0f0;
}
.prod-spec,
.pro-count {
  height: 1rem;
  margin-left: 0.18rem;
  padding-right: 0.22rem;
  line-height: 1rem;
  font-size: 0.3rem;
  overflow: hidden;
}
.spec-desc {
  margin-right: 0.2rem;
  float: left;
  color: #808080;
}
.base-txt {
  float: left;
  color: #333;
  width: 65%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.part-note-msg {
  float: left;
  margin-left: 0.08rem;
  color: #333;
}
.icon-spot {
  background: url("https://m.lecuntao.com/resource/images/irt.png?lv=cb30aa58fb")
    no-repeat;
  background-size: contain;
  display: block;
  width: 0.1rem;
  height: 0.14rem;
  float: right;
  margin-top: 0.4rem;
}
.prod-shop {
  width: 100%;
  overflow: hidden;
  height: 1rem;
}
.shoppic {
  float: left;
  background: #fff;
  margin: 0.2rem;
  border: 0.02rem solid #e3e3e3;
  width: 1.4rem;
  height: 0.48rem;
  background-size: contain;
  margin-top: 0.2rem;
}
.shoppic img {
  width: 100%;
}
.shop-con {
  float: left;
  width: 66%;
  overflow: hidden;
}
.shopname {
  margin-top: 0.1rem;
  font-size: 0.26rem;
  color: #333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
}
.shopaddress {
  font-size: 0.26rem;
  color: #333;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 0.04rem;
}
.cont-pull {
  width: 100%;
  height: 1.26rem;
  background: #f0f0f0;
  color: #bababa;
  font-size: 0.26rem;
  line-height: 1.26rem;
  text-align: center;
}
img {
  border: 0;
  vertical-align: middle;
}
.wrap-shop {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.shop-des {
  width: 7.5rem;
  margin: 0.2rem 0.18rem;
  color: #414141;
  font-size: 0.2rem;
}
.slide-bar img {
  width: 7.5rem;
  height: 5.52rem;
}
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