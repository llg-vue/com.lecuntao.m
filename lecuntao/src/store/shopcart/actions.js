import {
  ShopCart,
  GoodReduce,
  GoodAdd
} from "../../apis/shopcart"
import {
  MessageBox
} from 'mint-ui';
export default {
  async actionShopCart({
    commit,
    state
  }, params) {
    let goods = await ShopCart({
      key: state.getShopToken,
      act: "mobile_cart",
      op: "index",
    })
    // console.log(goods);
    commit("mutateShopCart", goods)
  },
  async actionGoodReduce({
    commit,
    state
  }, params) {
    let goods = await GoodReduce({
      key: state.getShopToken,
      act: "mobile_cart",
      op: "edit",
      cart_id: params.id,
      goods_num: params.num,
    })
    commit("mutateGoodReduce", params)
  },
  async actionGoodAdd({
    commit,
    state
  }, params) {
    await GoodAdd({
      key: state.getShopToken,
      act: "mobile_cart",
      op: "edit",
      cart_id: params.id,
      goods_num: params.num,
    })
    commit("mutateGoodAdd", params);
  },
  actionGoodNumUpdate({
    commit,
    state
  }, goodItem) {
    // console.log(goodItem)
    let storage=goodItem.goods_storage;
    let inputVal="库存量为"+storage;
    MessageBox.prompt('', {
      message: '请输入购买数量',
      title: '',
      inputPlaceholder:inputVal,
      inputType:"Number",
    }).then(({value,action}) => {
      if (action == 'confirm') { //点击确定的回调
        goodItem.goods_num=value;
      }
    }).catch(err => {
      if (err == 'cancel') { //点击暂不的回调
        console.log('商品数量未修改！');
      }
    });
  }
}
