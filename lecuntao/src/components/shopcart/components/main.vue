/* 展示模板 */
<template>
  <div id='cart-main'>
    <ShopItem></ShopItem>
  </div>
</template>
<script>
//导入组件
import ShopItem from "./shopItem"
export default {
  name: 'App',
  components:{
    ShopItem,
  }
}
</script>
<style>
/* 样式代码 */
#cart-main {
  padding:1rem 0 1.96rem 0;
}
</style>