/* 展示模板 */
<template>
  <div id='my-common'>
    <div class="my-com-left">
      <img :src="myComData.img"
           alt="">
      <span>{{myComData.title}}</span>
    </div>
    <div class="my-com-right">
      <span>{{myComData.detail}}</span>
      <img :src="myComData.icon"
           alt="">
    </div>
  </div>
</template>
<script>
//导入组件
export default {
  name: 'App',
  props:{
    myComData:Object,
  }
}
</script>
<style lang="scss" scoped>
/* 样式代码 */
$fontsize: 0.32rem;
$rightcolor: #b2b2b2;
#my-common {
  height: 1rem;
  width: 7.5rem;
  display: flex;
  padding: 0 0.18rem;
  justify-content: space-around;
  background:#fff;
  .my-com-left {
    width: 7.5rem;
    height: 1rem;
    display: flex;
    align-items: center;
    img {
      width: 0.32rem;
      height: 0.32rem;
      margin-right: 0.16rem;
    }
    span {
      font-size: $fontsize;
    }
  }
  .my-com-right {
    width: 7.5rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span {
      font-size: $fontsize;
      color: $rightcolor;
      margin-right:.18rem;
    }
    img {
      width: 0.26rem;
      height: 0.26rem;
    }
  }
  border-bottom:.02rem solid #ccc;
}
</style>