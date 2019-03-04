/* 展示模板 */
<template>
  <div id='my-order'>
    <div class="my-order-total">
      <span>我的订单</span>
      <div>
        <span>查看全部订单</span>
        <img src="https://m.lecuntao.com/resource/images/per/icon_wodedingdanjiantou.png?lv=91168a2962"
             alt="">
      </div>
    </div>
    <div class="my-order-item">
      <div v-for="(item,index) in orderData"
           :key="index">
        <img :src="item.img"
             alt="">
        <span>{{item.con}}</span>
        <p>{{item.count}}</p>
      </div>
    </div>
    <div class="nullbackground"></div>
  </div>
</template>
<script>
//导入组件
export default {
  name: 'App',
  data () {
    return {
      orderData: [{ img: "https://m.lecuntao.com/resource/images/per/icon_gerenzhongixndaifukuan.png?lv=48763fe68b", con: "待付款", count: 0 }, { img: "https://m.lecuntao.com/resource/images/per/icon_gerenzhongxindaihouhuo.png?lv=aa5d07c6ee", con: "待发货", count: 0 }, { img: "https://m.lecuntao.com/resource/images/per/icon_gerenzhongxindaishouhuo.png?lv=36b3358854", con: "待收货", count: 0 }, { img: "https://m.lecuntao.com/resource/images/per/icon_gerenzhongxintuihuo.png?lv=10857a8ab1", con: "退款退货", count: 0 },],
    }
  },
}
</script>
<style lang="scss" scoped>
/* 样式代码 */
$fontsize: 0.32rem;
$rightcolor: #b2b2b2;
#my-order {
  height: 2.7rem;
  width: 7.5rem;
  background:#fff;
  .my-order-total {
    width: 100%;
    height: 1.02rem;
    display: flex;
    justify-content: space-between;
    padding: 0 0.18rem;
    align-items: center;
    font-size: $fontsize;
    div {
      display: flex;
      align-items: center;
      span {
        color: $rightcolor;
        margin-right: 0.14rem;
      }
      img {
        width: 0.26rem;
        height: 0.26rem;
      }
    }
    border: 0.02rem solid #ccc;
  }
  .my-order-item {
    width: 7.5rem;
    height: 1.48rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      height: 100%;
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position:relative;
      img {
        width: 0.52rem;
        height: 0.52rem;
        margin-bottom: 0.06rem;
      }
      span {
        font-size: $fontsize;
      }
      p {
        width: 0.38rem;
        height: 0.44rem;
        background: red;
        color: #fff;
        line-height: .44rem;
        text-align: center;
        border-radius:.1rem;
        position:absolute;
        top:.04rem;
        right:.46rem;
      }
    }
  }
  .nullbackground{
    height:0.2rem;
    width:7.5rem;
    background:#f0f0f0;
  }
}
</style>