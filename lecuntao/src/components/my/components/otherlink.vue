/* 展示模板 */
<template>
  <div id='otherlink'>
    <div v-for="(item,index) in linkData"
         :key="index"
         @click="handlerGo(item.url)">
      <img :src="item.img"
           alt="">
      <span>{{item.con}}</span>
    </div>
  </div>
</template>
<script>
//导入组件
export default {
  name: 'App',
  methods: {
    handlerGo (url) {
      console.log(url)
      location.href = url;
    }
  },
  data () {
    return {
      linkData: [
        {
          img: "https://m.lecuntao.com/resource/images/img_kehuduan.png?lv=429d45be11", con: "客户端", url: "https://www.lecuntao.com/?isMobile=1"
        }, {
          img: "https://m.lecuntao.com/resource/images/img_diannaoban.png?lv=f548be1565", con: "电脑版", url: "https://www.lecuntao.com/?isMobile=1"
        }, {
          img: "https://m.lecuntao.com/resource/images/img_guanwang.png?lv=df748939c3", con: "乐村淘官网", url: "https://home.lecuntao.com/index.html"
        }
      ]
    }
  },
}
</script>
<style lang="scss" scoped>
/* 样式代码 */
#otherlink {
  height:1.6rem;
  width:7.5rem;
  display: flex;
  align-items: flex-end;
  background:#fff;
  div{
    height:100%;
    width:33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:flex-end;
    img{
      width:.7rem;
      height:.7rem;
    }
  }
}
</style>
