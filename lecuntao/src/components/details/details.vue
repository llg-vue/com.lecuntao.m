<template>
  <div class="box">
    <div class="upImg" v-show="upFlag" @click="upClick()">
      <img src="https://m.lecuntao.com//resource/images/index/iconZhiding.png" alt>
    </div>
    <div class="header">
      <a href="##" @click="goBack()">
        <img src="https://m.lecuntao.com/resource/images/details/detail-back.png?lv=6a69a719d0" alt>
      </a>
      <ul>
        <li
          v-for="(item,index) in head"
          :key="index"
          @click="liHandler(index)"
          :class="index === active?'active':''"
        >{{item}}</li>
      </ul>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <Banner :Banner="Banners"/>
        <Info :Infos="goodsInfo" :stores="store" :recoGoods="recommendGoods"/>
        <ImgList id="imgBox"/>
        <Tui :recoGoods="recommendGoods" id="tuijian"/>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li>
          <img src="https://m.lecuntao.com/resource/images/details/store.png?lv=250ff76e67" alt>
          店铺
        </li>
        <li @click="goSHop()">
          <img src="https://m.lecuntao.com/resource/images/details/shgo.png?lv=1bec669aec" alt>
          购物车
        </li>
        <li @click="addShop()">加入购物车</li>
        <li>立即购买</li>
      </ul>
    </div>

    <mt-popup v-model="popupVisible" position="bottom" class="popup">
      <div class="popup-desc" style="opacity: 1;" @click="gb()"></div>
      <div class="popusBox popup-pos">
        <div class="popup-shop">
          <a href="javascript:;">
            <span class="box1">
              <img :src="url+storeId+specGoods.goods_image">
            </span>
            <div>
              <span class="popup-price">
                <em>¥</em>
                {{specGoods.goods_price}}
              </span>
              <span class="popup-stock">库存{{specGoods.goods_storage}}件</span>
              <span class="popup-cont">
                <em>已选：</em>
                {{specGoods.goods_name}}
              </span>
            </div>
          </a>
        </div>

        <div id="popup-con" class="popup-con">
          <div
            style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
          >
            <div class="popup-flavor">
              <div class="spec_item" >
                <div class="popup-txt">颜色</div>
                <div class="popup-type">
                  <div>
                    <a href="javascript:;" data-attr_value_id="12808" class="a-item act">闪银色</a>
                    <!-- <a href="javascript:;" v-for='(item,index) in specList[1].value_list' :key="index" data-attr_value_id="item.id" :class="item.act===1?'a-item act':'a-item'">{{item.name}}</a> -->
                  </div>
                </div>
              </div>
              <div class="spec_item">
                <div class="popup-txt">版本</div>
                <div class="popup-type">
                  <div >
                    <!-- <a href="javascript:;" v-for='(item,index) in specList[18].value_list' :key="index" data-attr_value_id="item.id" :class="item.act===1?'a-item act':'a-item'">{{item.name}}</a> -->
                    <a href="javascript:;" data-attr_value_id="12809" class="a-item act">182升</a>                  
                  </div>
                </div>
              </div>
              <div class="spec_item">
                <div class="popup-txt">服务</div>
                <div class="popup-type">
                  <div>
                    <!-- <a href="javascript:;" v-for='(item,index) in specList[23].value_list' :key="index" data-attr_value_id="item.id" :class="item.act===1?'a-item act':'a-item'">{{item.name}}</a> -->
                    <a href="javascript:;" data-attr_value_id="12737" class="a-item act">无</a>
                  
                  </div>
                </div>
              </div>
            </div>
            <div class="popup-count">
              <div class="popup-ctl">
                <span class="popup-txt2">已选择</span>
                <span class="x-mgt">海尔/统帅 BCD-182LTMPA 182升双门 统帅冰箱 闪银色 182升</span>
              </div>
              <div class="quantity-wrapper">
                <a href="javascript:;" symbol="-" class="quantity-decrease1" @click="jianNum()">
                  <em id="minus" class="reduce1"></em>
                </a>
                <input
                  type="tel"
                  value="1"
                  onchange="selMopGoods();"
                  id="136777"
                  data-sel_goods_id="136777"
                  data-max="99"
                  class="quantity"
                  v-model="inputNum"
                >
                <a href="javascript:;" symbol="+" class="quantity-decrease2" @click="addNum()">
                  <em id="plus"></em>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="popup-bot">
          <a href="javascript:;" class="popup-join">加入购物车</a>
          <a href="javascript:;" class="popup-confirm">立即购买</a>
        </div>
        <div
          class="popup-cur"
          style="display:block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
        @click="addShopCart()"
        >
          <a href="javascript:;" >确定</a>
        </div>
      </div>
    </mt-popup>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import http from "../../apis/details.js";
import qs from "qs";
import Banner from "./components/banner.vue";
import Info from "./components/info.vue";
import ImgList from "./components/imgList";
import Tui from "./components/tuijian";
import Vue from "vue";
import { Popup } from "mint-ui";
import Vuex from '../../store/index.js';
Vue.component(Popup.name, Popup);
export default {
  components: {
    Banner,
    Info,
    ImgList,
    Tui
  },
  data() {
    return {
      url: "https://img.lecuntao.com/data/upload/shop/store/goods/",
      storeId:'',
      itemInfo: null,
      head: ["商品", "详情", "推荐", "营业执照"],
      active: 0,
      Banners: [],
      goodsInfo: {},
      store: {},
      recommendGoods: [],
      upFlag: false,
      popupVisible: false,
      goodId: "",
      gcId: "",
      specGoods: {},
      btoFlag:false,
      specList:{},
      inputNum:1
    };
  },
  created() {
    // this.itemInfo = JSON.parse(this.$route.params.info);
    this.goodId = this.$route.query.goodId;
    this.gcId = this.$route.query.gcId;
    let params1 = {
      city_id: "140100000000",
      province_id: "140",
      goods_id: this.goodId,
      key: ""
    };
    http
      .getProData(params1)
      .then(data => {
        this.goodsInfo = data.datas.goods_info;
        this.Banners = data.datas.img_list;
        let paramss = {
          common_id: this.goodsInfo.goods_commonid,
          goods_id: this.goodsInfo.goods_id,
          key: ""
        };
        // console.log(paramss);
        return http.getGoodsDetail(paramss);
      })
      .then(data => {
        this.store = data.datas;
        this.specGoods = this.store.specGoods[0];
        console.log(this.store);
        this.storeId = this.store.goodsDetail.store_id+"/";
        this.specList = this.store.specList;
        console.log(this.specList);
        let params = {
          gc_id: this.gcId,
          province_id: "140",
          city_id: "140100000000",
          key: ""
        };
        return http.getRecommend(params);
      })
      .then(data => {
        this.recommendGoods = data.datas.recommendGoods;
      });
  },
  methods: {
    addNum(){
      this.inputNum++;
    },
    jianNum(){
      if(this.inputNum<=1){
        this.inputNum = 1;
      }else{
        this.inputNum--;
      }
    },
    addShopCart(){
      console.log(this.store.specGoods[0].goods_id,this.inputNum);
       this.popupVisible = false;
       let id = this.store.specGoods[0].goods_id;
       let num = this.inputNum;
       this.inputNum = 1;
       let data = {
         goods_id: id,
         goods_num: num,
         key: '8d0868cb99a39448f9381f85ab0c1346'
       }
       http.addShopCart(data)
       .then((data)=>{
         console.log(data);
       })
    },
    gb() {
      this.popupVisible = false;
    },
    addShop() {
      this.popupVisible = !this.popupVisible;
      this.btoFlag = 'addShop'
    },
    liHandler(index) {
      this.active = index;
      if (index === 0) {
        this.scroll.scrollTo(0, 0, 0);
      } else if (index === 1) {
        this.scroll.scrollToElement("#imgBox", 0, true, false);
      } else {
        this.scroll.scrollToElement("#tuijian", 0, true, false);
      }
    },
    goBack() {
      this.$router.back();
    },
    upClick() {
      this.upFlag = false;
      this.scroll.scrollTo(0, 0, 1000);
    },
    goSHop() {
      this.$router.push({ path: "/shopcart" });
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      let that = this;
      (this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 2,
        scrollY: true
      })),
        this.scroll.on("scroll", function() {
          if (that.scroll.y < -300) {
            that.upFlag = true;
          } else {
            that.upFlag = false;
          }
        });
    });
  }
};
</script>

<style  scoped>
.popup-bot {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1rem;
    color: #fffefe;
    font-size: 0.32rem;
    line-height: 1rem;
    overflow: hidden;
    display: none;
}
.popup-join {
    background: orange;
}
.popup-join, .popup-confirm {
    width: 50%;
    display: block;
    text-align: center;
    text-align: center;
    float: left;
    color: #fff;
}
.popup-confirm {
    background: #f64750;
}
.popup-cur {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1rem;
    font-size: 0.32rem;
    line-height: 1rem;
    text-align: center;
    background: #f64750;
    display: none;
}
.popup-cur a {
    color: #fff;
}
.popup-con {
  position: absolute;
  top: 2rem;
  bottom: 1.6rem;
  overflow: auto;
  z-index: 10;
  width: 100%;
}
.popup-txt {
  color: #333;
  float: left;
  padding-left: 2.5%;
  margin-right: 0.18rem;
  border-top: 0.02rem solid #eaeaea;
  width: 97.5%;
  margin-bottom: 0.22rem;
  padding-top: 0.2rem;
  font-size: 0.32rem;
}
.popup-type a.act {
  background: #f81234;
  color: #fff;
}
.a-item {
  font-size: 0.24rem;
  color: #333;
  margin-bottom: 0.16rem;
  padding: 0.12rem 0.2rem;
  border-radius: 0.08rem;
  background: #f0f0f0;
  margin-left: 0.14rem;
  display: block;
  float: left;
}
.popup-count {
  overflow: hidden;
  width: 97.5%;
  padding-left: 2.5%;
  border-top: 0.02rem solid #eaeaea;
  border-bottom: 0.02rem solid #eaeaea;
  height: 1.1rem;
}
.popup-ctl {
  float: left;
  width: 60%;
  overflow: hidden;
}
.popup-txt2 {
  color: #333;
  line-height: 1rem;
  float: left;
  width: 1.1rem;
  font-size: 0.32rem;
}
.x-mgt {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  line-height: 0.36rem;
  font-size: 0.24rem;
  float: left;
  width: 3.1rem;
  margin-top: 0.2rem;
}
.quantity-wrapper {
  width: 2.08rem;
  height: 0.6rem;
  background: #f0f0f0;
  margin-right: 5%;
  border-radius: 0.08rem;
  float: right;
  margin-top: 0.28rem;
}
.quantity-decrease1 {
  border-right: 0.02rem solid #fff;
  background: #f7f7f7;
}

.quantity-decrease1,
.quantity-decrease2 {
  display: block;
  float: left;
  width: 0.62rem;
  height: 100%;
  border-radius: 0.03rem 0 0 0.03rem;
  position: relative;
}
.quantity-decrease1 .reduce1 {
  background: url("https://m.lecuntao.com/resource/images/details/reduce1.png?lv=6c1d393518")
    no-repeat;
  width: 0.22rem;
  height: 0.04rem;
  background-size: 100%;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -0.02rem;
  margin-left: -0.11rem;
  z-index: 10;
}
.quantity {
  float: left;
  width: 0.78rem;
  border: none;
  line-height: 0.6rem;
  text-align: center;
  background: #f0f0f0;
  font-size: 0.26rem;
  color: #333;
}
.quantity-decrease2 {
  border-left: 0.02rem solid #fff;
}
#plus {
  background: url("https://m.lecuntao.com/resource/images/details/add.png?lv=1e91139b4c")
    no-repeat;
  width: 0.22rem;
  height: 0.22rem;
  background-size: 100%;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -0.11rem;
  margin-left: -0.11rem;
}
.popup {
  width: 100%;
  height: 13.34rem;
  /* position: relative; */
  /* top: 0; */
  z-index: 30;
  background: rgba(255, 255, 255, 0);
}
.popup-desc {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 5;
}
.popup-pos {
  width: 100%;
  height: 62.5%;
  position: fixed;
  bottom: 0;
  background: #fff;
  z-index: 10;
  transition: 1s all ease;
  transform-style: preserve-3d;
}
.popup-shop {
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 0.18rem 0 0.2rem;
}
.popup-shop > a {
  display: block;
  overflow: hidden;
}
.popup-shop a img {
  width: 2.08rem;
  height: 2.08rem;
  float: left;
  position: absolute;
  left: 0.16rem;
  top: -0.4rem;
  z-index: 15;
  display: block;
  border: 0.02rem solid #eaeaea;
  border-radius: 0.2rem;
}
.popup-shop a div {
  float: left;
  margin-left: 2.2rem;
}
.popup-price {
  color: #f81234;
  font-weight: bold;
  font-size: 0.36rem;
  display: block;
  margin-top: 0.16rem;
}
.popup-stock {
  display: block;
  color: #808080;
  font-size: 0.26rem;
  margin-top: 0.05rem;
}
.popup-cont {
  margin-top: 0.08rem;
  color: #333;
  margin-top: 0.1rem;
  display: block;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
}
.footer {
  width: 7.5rem;
  height: 1.02rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;
}
.footer > ul {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.footer > ul > li:nth-child(1),
.footer > ul > li:nth-child(2) {
  float: left;
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.2rem;
  color: #808080;
}
.footer > ul > li > img {
  width: 0.32rem;
  height: 0.32rem;
  margin-bottom: 0.08rem;
}
.footer > ul > li:nth-child(3),
.footer > ul > li:nth-child(4) {
  float: left;
  width: 35%;
  font-size: 0.32rem;
  text-align: center;
  line-height: 1rem;
  color: #fff;
}
.footer > ul > li:nth-child(3) {
  background-color: #ff9c00;
}
.footer > ul > li:nth-child(4) {
  background: #f64750;
}
.upImg {
  position: fixed;
  width: 1.05rem;
  height: 1.05rem;
  bottom: 2rem;
  right: 0.5rem;
  z-index: 99;
}
.upImg > img {
  width: 100%;
  height: 100%;
}
.box {
  width: 7.5rem;
  height: 13.34rem;
  overflow: hidden;
}
.header {
  width: 7.5rem;
  height: 0.92rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
.header > a {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  width: 0.8rem;
  height: 1rem;
}
.header > a > img {
  width: 0.6rem;
  height: 0.6rem;
}
.header > ul {
  width: 5.25rem;
  height: 0.9rem;
  margin: 0 auto;
  display: flex;
}
.header > ul > li {
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 0.9rem;
  border-bottom: 0.02rem solid #fff;
  font-size: 0.28rem;
}
.header > ul > .active {
  border-bottom-color: #333;
}

.wrapper {
  width: 7.5rem;
  height: 11.4rem;
  position: fixed;
  top: 0.92rem;
  left: 0;
  bottom: 1.02rem;
}
.content {
  width: 100%;
}
</style>