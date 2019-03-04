<template>
  <div id="header">
    <div class="sel-city" @click="handleCity()">
      <i class="icon-location">
        <img src="../../../../static/img/index/icon_dingwei.png">
      </i>
      <span class="city-name">{{msg}}</span>
      <i class="icon-right">
        <img src="../../../../static/img/index/right-white.png">
      </i>
    </div>
    <div class="search-wrap" @click="handleTo()">
      <a href="javascript:;" class="search-btn"><img src="../../../../static/img/index/iconSousuoBlack.png" alt=""></a>
      <input type="text" placeholder="搜索您需要的商品" class="search-inp">
    </div>
  </div>
</template>
<script>
import Vuex from 'vuex'
export default {
  data() {
    return {
      msg:""
    }
  },
  mounted () {
    this.msg = localStorage.msg
  },
  computed: {
    ...Vuex.mapState({
      CityName:state=>state.home.CityName,
    })
  },
  methods: {
    handleTo(){
    this.$router.push({
              name:"search",
          })
  },
  handleCity(name){
    this.$router.push({
              name:"address",
          })
  }
  },
};
</script>
<style lang="" scoped>
#header {
  width: 100%;
  height: 0.8rem;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
}
.sel-city {
  height: 0.56rem;
  font-size: 0.28rem;
  color: #fff;
  text-align: center;
  position: absolute;
  left: 0.18rem;
  top: 0.1rem;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon-location {
  width: 0.24rem;
  height: 0.3rem;
  background-size: contain;
}
.icon-location>img{
  width: 100%;
  height: 100%;
}
.city-name {
  width: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.icon-right {
  width: 0.1rem;
  height: 0.2rem;
  background-size: contain;
}
.icon-right>img{
  width: 100%;
  height: 100%;
}
.search-wrap{
    position: absolute;
    right: 0.18rem;
    top: 0.1rem;
    width: 70%;
    height: 0.6rem;
    background: #fff;
    border-radius: 0.28rem;
    z-index: 10;
}
.search-inp {
    width: 80%;
    height: 100%;
    font-size: .28rem;
    text-indent: 0.08rem;
    vertical-align: top;
    border: none;
    position: absolute;
    left: 0.64rem;
    top: 0rem;
}
.search-btn{
    width: 0.29rem;
    height: 0.3rem;
    position: absolute;
    left: 0.2rem;
    top: 0.14rem;
}
.search-btn>img{
    width: 100%;
    height: 100%;
}
</style>