/* 展示模板 */
<template>
  <div id='cart-footer'>
    <div class="cart-foot-left">
      <div class="cart-icon">
        <mt-checklist v-model="allGoodState"
                      align="left"
                      :options="['']"
                      id="checkAll"
                      @change="handlerGoodAll(allGoodState)">
        </mt-checklist>
        <span>全选</span>
      </div>
      <div class="cart-total"
           v-show="editFoot">
        <p>合计：<span>￥{{goodsCount.goodsPrice}}</span></p>
        <p class="cart-total-txt">不含运费</p>
      </div>
    </div>
    <div class="goCount"
         v-if="editFoot">
      去结算({{goodsCount.goodsNum}})
    </div>
    <div class="goCount"
         v-else>
      删除
    </div>
  </div>
</template>
<script>
//导入组件
import Vue from 'vue'
import { Checklist } from 'mint-ui';
import { mapState, mapMutations, mapGetters } from "vuex"
Vue.component(Checklist.name, Checklist);
export default {
  name: 'App',
  data () {
    return {
      // value: allGoodState,
      editFoot: true,
    }
  },
  computed: {
    ...mapState({
      allGoodState: (state) => state.shopcart.allGoodState,
    }),
    ...mapGetters({
      goodsCount: "shopcart/getterGoodsCount"
    })
  },
  methods: {
    ...mapMutations({
      handlerGoodAll: "shopcart/mutateAllGoodState",
      // goodsAllState: "shopcart/mutateGoodsAllUnClick"
    })
  },
  // mounted () {
  //   this.goodsAllState();
  // },
  created () {
    this.$EventBus.$on("editOrFin", (edit) => {
      this.editFoot = edit;
    })
  },
}
</script>
<style lang="scss" scoped>
/* 样式代码 */
#cart-footer {
  height: 0.96rem;
  width: 7.5rem;
  background: #fff;
  position: fixed;
  bottom: 1rem;
  border-top: 0.02rem solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  .cart-foot-left {
    width: 5.06rem;
    height: 0.96rem;
    display: flex;
    justify-content: space-between;
    .cart-icon {
      display: flex;
      align-items: center;
      font-size: 0.3rem;
    }
    .cart-total {
      padding-top: 0.16rem;
      width: 2.2rem;
      height: 0.8rem;
      p {
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.28rem;
        float: right;
        span {
          color: #f81234;
        }
      }
      .cart-total-txt {
        color: #999;
      }
    }
  }
  .goCount {
    height: 0.96rem;
    width: 2.18rem;
    line-height: 0.96rem;
    background: #fb0a84;
    color: #fff;
    text-align: center;
    font-size: 0.3rem;
  }
}
</style>