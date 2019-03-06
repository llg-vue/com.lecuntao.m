import {
  MessageBox
} from 'mint-ui';
export default {
  mutateShopCart(state, params) {
    let merch = params.datas.cart;
    for (let i = 0; i < merch.length; i++) {
      merch[i].merchState = false;
      for (let j = 0; j < merch[i].goods.length; j++) {
        merch[i].goods[j].goodState = false;
      }
    }
    // console.log(merch)
    if (merch) {
      state.goods = merch;
      // console.log(state.goods)
      // MessageBox.alert("获取成功","提示");
    } else {
      MessageBox.alert("未添加商品至购物车", "提示");
    }
  },
  mutateGoodReduce(state, params) {
    // console.log(state,params)
    let count = state.goods[params.merch].goods[params.good].goods_num;
    if (count == 1) {
      count == 1
    } else {
      count--
    }
    state.goods[params.merch].goods[params.good].goods_num = count;
  },
  mutateGoodAdd(state, params) {
    let count = state.goods[params.merch].goods[params.good].goods_num;
    let storage = state.goods[params.merch].goods[params.good].goods_storage;
    if (count == storage) {
      MessageBox.alert("亲，仓库只有这么多啦o(╥﹏╥)o", "提示")
    } else {
      count++;
    }
    state.goods[params.merch].goods[params.good].goods_num = count;
  },
  mutateMerchState(state, merch) {
    for (let i = 0; i < merch.goods.length; i++) {
      if (merch.merchState) {
        merch.goods[i].goodState = true;
      } else if (!merch.merchState) {
        merch.goods[i].goodState = false;
        state.allGoodState = false;
      } else if (!merch.goods[i].goodState) {
        merch.merchState = false;
      }
    }
  },
  mutateGoodState(state, merch) {
    for (let m = 0; m < merch.goods.length; m++) {
      if (!merch.goods[m].goodState) {
        merch.merchState = false;
        state.allGoodState = false;
        break;
      }
      merch.merchState = true;
    }
    // for (let i = 0; i < state.goods.length; i++) {
    //   for (let j = 0; j < state.goods[i].goods.length; j++) {
    //     if (!state.goods[i].merchState){
    //       state.allGoodState = false;
    //       break;
    //     }
    //     if(!state.goods[i].goods[j].goodState) {
    //       state.allGoodState = false;
    //       break;
    //     }
    //     state.allGoodState = true;
    //   }
    // }
  },
  mutateAllGoodState(state, allState) {
    if (allState) {
      state.allGoodState = false;
      for (let m = 0; m < state.goods.length; m++) {
        state.goods[m].merchState = false;
        for (let n = 0; n < state.goods[m].goods.length; n++) {
          state.goods[m].goods[n].goodState = false;
        }
      }
    } else if (!allState) {
      state.allGoodState = true;
      for (let i = 0; i < state.goods.length; i++) {
        state.goods[i].merchState = true;
        for (let j = 0; j < state.goods[i].goods.length; j++) {
          state.goods[i].goods[j].goodState = true;
        }
      }
    }
    // console.log("总的控制：",state.allGoodState)
  },
  // mutateGoodsAllUnClick(state) {
  //   for (let i = 0; i < state.goods.length; i++) {
  //     for (let j = 0; j < state.goods[i].goods.length; j++) {
  //       if (state.goods[i].merchState && state.goods[i].goods[j].goodState) {
  //         state.allGoodState = true;
  //       }
  //       state.goods[i].merchState = true;
  //       state.goods[i].goods[j].goodState = true;
  //     }
  //   }
  // }
  mutateGoCount(state) {
    let goods = state.goods;
    for (let i = 0; i < goods.length; i++) {

    }
  },
  mutateDelGoods(state) {
    let goods = state.goods;
    console.log(goods)
    for (let i = 0; i < goods.length; i++) {
      for (let j = 0; j < goods[i].goods.length; j++) {
        if (goods[i].goods[j].goodState) {
          goods[i].goods.splice(j, 1)
          if (goods[i].goods.length === 0) {
            goods.splice(i, 1)
          }
          MessageBox.alert("删除成功", "提示")
        }
      }
    }
    state.goods = goods;
  }
}
