export default {
  getterGoodsCount(state) {
    let goodsNum = 0,
      goodsPrice = 0;
    for (let i = 0; i < state.goods.length; i++) {
      for (let j = 0; j < state.goods[i].goods.length; j++) {
        if (state.goods[i].goods[j].goodState) {
          goodsNum += state.goods[i].goods[j].goods_num;
          goodsPrice += state.goods[i].goods[j].goods_num * state.goods[i].goods[j].goods_price;
        }
      }
    }
    goodsPrice=goodsPrice.toFixed(2);
    return {
      goodsNum,
      goodsPrice
    }
  }
}
