/* 展示模板 */
<template>
  <div id='cart-head'>
    <div><img src="https://m.lecuntao.com/resource/images/btn_back.png?lv=09b14befba"
           alt="" @click="goHome()">
    </div>
    <h1>购物车</h1>
    <div>
      <span v-text="edit?headData[0]:headData[1]" @click="handlerHead()"></span>
    </div>
  </div>
</template>
<script>
//导入组件
export default {
  name: 'App',
  data () {
    return {
      headData: ["编辑全部", "完成"],
      edit:true,
    }
  },
  methods: {
    handlerHead () {
      this.edit=!this.edit;
      this.$EventBus.$emit("editOrFin",this.edit)
    },
    goHome(){
      this.$router.push({path:"/home"})
    }
  }
}
</script>
<style lang="scss" scoped>
/* 样式代码 */
#cart-head {
  height: 0.98rem;
  width: 7.5rem;
  position: fixed;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.02rem solid #d9d9d9;
  z-index:99;
  div {
    width: 1.56rem;
    img {
      width: 0.4rem;
      height: 0.4rem;
      margin-left: 0.2rem;
    }
    span {
      margin-right: 0.2rem;
      font-size: 0.34rem;
      float:right;
    }
  }
  h1 {
    font-weight: unset;
    font-size: 0.38rem;
  }
}
</style>
