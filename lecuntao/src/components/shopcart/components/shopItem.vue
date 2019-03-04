/* 展示模板 */
<template>
  <div id='cart-shopItem'>
    <div v-for="(merch,merchindex) in goods"
         :key="merchindex">
      <div class="cart-merchant">
        <mt-checklist v-model="merch.merchState"
                      align="left"
                      :options="['']"
                      id="cart-item-mer"
                      @change="handlerMerchState(merch)">
        </mt-checklist>
        <p class="cart-mer-title">{{merch.store_name}}</p>
      </div>
      <div class="cart-good"
           v-for="(goodItem,goodindex) in merch.goods"
           :key="goodindex">
        <div class="cart-good-btn">
          <mt-checklist v-model="goodItem.goodState"
                        align="left"
                        :options="['']"
                        id="cart-item-good"
                        @change="handlerGoodState(merch,goodItem)">
          </mt-checklist>
        </div>
        <div class="cart-good-img">
          <img :src="goodItem.goods_image"
               alt="">
        </div>
        <div class="cart-good-con">
          <p>{{goodItem.goods_name}}</p>
          <div class="cart-good-price">
            <div class="good-price-item">
              <del>{{goodItem.goods_marketprice}}</del>
              <span>{{goodItem.goods_price}}</span>
            </div>
            <div class="good-count-btn">
              <div @click="handlerGoodsReduce({id:goodItem.cart_id,num:goodItem.goods_num,merch:merchindex,good:goodindex})">-</div>
              <div class="good-count"
                   ref="goodCount" @click="handlerGoodNumUpdate(goodItem)">{{goodItem.goods_num}}</div>
              <div @click="handlerGoodsAdd({id:goodItem.cart_id,num:goodItem.goods_num,merch:merchindex,good:goodindex})">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//导入组件
import { mapActions, mapState, mapMutations } from "vuex"
export default {
  name: 'App',
  data () {
    return {
      // goods:this.good,
      value: [],
    }
  },
  created () {
    this.axiosShop();
  },
  methods: {
    ...mapActions({
      axiosShop: "shopcart/actionShopCart",
      handlerGoodsReduce: "shopcart/actionGoodReduce",
      handlerGoodsAdd: "shopcart/actionGoodAdd",
      handlerGoodNumUpdate:"shopcart/actionGoodNumUpdate"
    }),
    ...mapMutations({
      handlerMerchState: "shopcart/mutateMerchState",
      handlerGoodState: "shopcart/mutateGoodState",
    }),
  },
  computed: {
    ...mapState({
      goods: (state) => state.shopcart.goods,
    })
  },
}
</script>
<style lang="scss" scoped>
/* 样式代码 */
#cart-shopItem {
  div {
    .cart-merchant {
      width: 7.5rem;
      height: 0.96rem;
      background: #fff;
      display: flex;
      padding-bottom: 0.08rem;
      .cart-mer-title {
        line-height: 0.96rem;
        font-size: 0.3rem;
        height: 0.96rem;
      }
    }
    .cart-good {
      display: flex;
      height: 2.2rem;
      margin-top: 0.08rem;
      background: #f7f7f7;
      .cart-good-btn {
        display: flex;
        align-items: center;
      }
      .cart-good-img {
        height: 100%;
        width: 1.72rem;
        display: flex;
        align-items: center;
        margin-right: 0.08rem;
        img {
          height: 1.72rem;
          width: 1.72rem;
        }
      }
      .cart-good-con {
        padding-top: 0.2rem;
        display: flex;
        flex-direction: column;
        p {
          color: #333;
          font-size: 0.3rem;
          height: 0.72rem;
          line-height: 0.36rem;
          width: 4.82rem;
        }
        .cart-good-price {
          width: 4.82rem;
          height: 0.72rem;
          display: flex;
          justify-content: space-between;
          .good-price-item {
            display: flex;
            flex-direction: column;
            del {
              font-size: 0.24rem;
              color: #808080;
              height: 0.32rem;
              line-height: 0.32rem;
            }
            span {
              font-size: 0.3rem;
              color: #f81234;
            }
          }
          .good-count-btn {
            display: flex;
            align-items: flex-end;
            div {
              height: 0.6rem;
              width: 0.64rem;
              line-height: 0.6rem;
              text-align: center;
              font-size: 0.3rem;
              border-left: 0.02rem solid #fff;
              background: #f0f0f0;
            }
            .good-count {
              width: 0.8rem;
            }
          }
        }
      }
    }
  }
}
</style>