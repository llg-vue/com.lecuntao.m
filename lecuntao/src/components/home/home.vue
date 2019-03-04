<template>
  <div id="home">
    <Header-com :class="status==true?'active':''"></Header-com>
    <div ref="homeWraper" class="wrapper">
      <div id="home-wrap" class="content" ref="loutiWrap">
        <Banner-com></Banner-com>
        <Container-com></Container-com>
        <Contentone-com></Contentone-com>
        <Contenttwo-com></Contenttwo-com>
        <TabBar-com @handleH="getIndex" :id="bool==true?'tabActive':''"></TabBar-com>
        <Louti-com></Louti-com>
        <Hot-com></Hot-com>
      </div>
    </div>
      <img @click="mescrollTotop()" :id="bool==true ? 'mescrollTotop' : ''" class="mescroll-totop" src="../../../static/img/zd.png">
    <Footer-com/>
  </div>
</template>
<script>
import Footer from '../common/footer'
import Vuex from "vuex";
import Header from "./components/header";
import Banner from "./components/banner";
import Container from "./components/container";
import Contentone from "./components/contentone";
import Contenttwo from "./components/contenttwo";
import TabBar from "./components/tabbar";
import Louti from "./components/louti";
import Hot from "./components/hot";

import BScroll from "better-scroll";
export default {
  data () {
    return {
      status:false,
      bool:false,
    }
  },
  components: {
    "Footer-com": Footer,
    "Header-com": Header,
    "Banner-com": Banner,
    "Container-com": Container,
    "Contentone-com": Contentone,
    "Contenttwo-com": Contenttwo,
    "TabBar-com": TabBar,
    "Louti-com": Louti,
    "Hot-com": Hot
  },

  created () {
    this.handleHomeData();
    this.handleHotData(this.page);
  },
  computed: {
    ...Vuex.mapState({
      state: state => state.home,
      page: state => state.home.page,
      hotList: state => state.home.hotList
    })
  },
  watch: {
    hotList (newVal, oldVal) {
      //重新计算content高度
      this.scroll.refresh();
      //数据加载完毕允许下次加载
      this.scroll.finishPullUp();
    }
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.homeWraper,{
          pullUpLoad:true,
          tap:true,
          probeType:2,
          click: true,
          scrollY: true,
          pullDownRefresh: {
            threshold: 50,
            stop: 20
          }
        });
      this.scroll.on("pullingUp",()=>{
          if(this.page<=10){
            this.handleHotData(this.page);
          }else{
            alert("到底了")
          }
      });
      this.scroll.on('pullingDown', () => {
          this.scroll.finishPullDown();
          this.handleHotData(1);
      });
      this.scroll.on("scroll",()=>{
        if(this.scroll.y <= -164){
            this.status = true;
            }else{
              this.status = false;
            }
        if(this.scroll.y <= -875){
            this.bool = true;
            }else{
              this.bool = false;
            }
      })
      
  },
  methods: {
    ...Vuex.mapActions({
      handleHomeData: "home/handleHomeData"
    }),
    ...Vuex.mapActions({
      handleHotData: "home/handleHotData"
    }),
    getIndex(index){
        switch (index) {
          case 0:this.scroll.scrollTo(0, -875, 1000)  
            break;
          case 1:this.scroll.scrollTo(0, -1472, 1000)  
            break;
          case 2:this.scroll.scrollTo(0, -2023, 1000)  
            break;
          case 3:this.scroll.scrollTo(0, -2574, 1000)  
            break;
          case 4:this.scroll.scrollTo(0, -3124, 1000)  
            break;
          default:
            break;
        }  
    },
    mescrollTotop(){
      this.scroll.scrollTo(0, 0, 1000)
    }
  }
};
</script>
<style lang="" scoped>
<<<<<<< HEAD
.wrapper{
   height: 18rem;
=======
#home{
  width: 100%;
  height: 100%;
  background: #f0f0f0;
}
.wrapper{
    height: 11.54rem;
>>>>>>> e91724c40287891b2c4fc6001b231f4b3ec2daeb
}
#home-wrap {
  width: 100%;
  position: relative;
  height: max-content;
  padding-bottom: 1rem;
}
.active {
  background: rgb(248, 18, 52);
}
.mescroll-totop{
    width: 1.05rem;
    height: 1.05rem;
    bottom: 2.2rem;
    z-index: 10;
    position: fixed;
    right: 10px;
    bottom: 60px;
    display: none;
}
#mescrollTotop{
    display: block;
}
</style>