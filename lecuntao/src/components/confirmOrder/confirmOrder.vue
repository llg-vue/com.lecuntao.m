<template>
  <div id="order_data">
    <div class="order-confirm">
      <div class="conf-step">
        <span class="conf-address">收件人:</span>
        <span class="conf-name">李文翔</span>
        <span class="conf-phone">15536​​633808</span>
      </div>
      <div class="conf-detail">
        <i class="location-pic">
          <img src="../../../static/img/bot-icons/icon_qrdd_address.png">
        </i>
        <div class="adr-w">
          <span>收货地址：</span>
          <span
            style="vertical-align: inherit;"
            class="address-where"
          >山西省太原市小店区刘家堡乡洛阳村小店区刘家堡乡洛阳村李文娟体验店</span>
        </div>
        <i class="s-point">
          <img src="../../../static/img/bot-icons/icon_wodedingdanjiantou.png">
        </i>
      </div>
      <div class="adr-line"></div>
      <div class="order-con">
        <div class="c-hd">
          <i class="icon-dp"></i>
          <span>嘉诺康商贸</span>
        </div>
        <div class="c-cont">
          <img class="c-img" src="../../../static//img/aaa.jpg">
          <div class="sitem-m">
            <span class="sitem-txt">金龙鱼精炼一级大豆油30件起发（包邮）5L * 4桶/件</span>
            <div class="stiem-msg">
              <span>规格</span>
              <span>5L * 4桶/件</span>
            </div>
            <div class="stiem-s">
              <span class="s-price">
                <i>¥</i>
                <span>179.00</span>
              </span>
              <span class="s-num">
                <i>×</i>
                <span>1</span>
              </span>
            </div>
          </div>
        </div>
        <div class="c-freight">
          <span class="fr-txt">配送</span>
          <span class="fr-msg">快递：0.00元</span>
        </div>
        <div class="c-cell">
          <div class="cl-l">买家留言</div>
          <div class="cl-c">
            <input class="inp" type="text" placeholder="选填:对本次交易的说明(建议填写已和卖家协商一致的内容)">
          </div>
        </div>
        <div class="c-total">
            <input type="hidden" id="coupon">
            <div class="ct-r">
                <span>合计：</span>
                <span class="ct-price">
                    <i>¥ </i>
                    <span>169.00</span>
                </span>
            </div>
        </div>
      </div>
    </div>
    <div class="order-sub">
        <a class="norel-sub" href="javascript:;">提交订单</a>
        <div class="ct-r l-height">
            <span>合计：</span>
            <span class="ct-price">
                <i>¥ </i>
                <span>169</span>
            </span>
        </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="" scoped>
.order-confirm {
  width: 100%;
  height: 619px;
}
.conf-step {
  overflow: hidden;
  padding: 0.3rem 0.6rem 0.2rem 0.68rem;
}
.conf-step span {
  float: left;
  color: #333;
  font-size: 0.3rem;
}
.conf-step .conf-phone {
  float: right;
}
.conf-detail {
  width: 100%;
  overflow: hidden;
}
.location-pic > img {
  width: 0.25rem;
  height: 0.3rem;
  background-size: contain;
  display: block;
  float: left;
  margin-left: 0.18rem;
  margin-top: 0.25rem;
}
.adr-w {
  width: 80%;
  margin-left: 0.2rem;
  float: left;
  overflow: hidden;
  line-height: 0.8rem;
}
.adr-w span {
  font-size: 0.28rem;
  color: #666;
}
.s-point > img {
  float: right;
  width: 0.22rem;
  height: 0.22rem;
  background-size: contain;
  margin-right: 0.18rem;
  margin-top: 0.3rem;
}
.adr-line {
  background: url(../../../static/img/bot-icons/img_addressbar.png) no-repeat;
  width: 100%;
  height: 0.1rem;
  margin-top: 0.2rem;
}
.order-con {
  margin-top: 0.2rem;
  background: #fff;
  width: 100%;
}
.c-hd {
  width: 100%;
  overflow: hidden;
  height: 0.8rem;
}
.order-con {
  margin-top: 0.2rem;
  background: #fff;
  width: 100%;
}
.icon-dp {
  background: url(../../../static/img/bot-icons/icon_wodedingdanshangdian.png)
    no-repeat;
  width: 0.3rem;
  height: 0.3rem;
  background-size: contain;
  float: left;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
}
.c-hd span {
  color: #333;
  font-size: 0.28rem;
  display: block;
  float: left;
  padding-left: 0.2rem;
  padding-top: 0.28rem;
}
.c-cont {
  width: 100%;
  overflow: hidden;
  background: #f7f7f7;
  padding-top: 0.24rem;
}
.c-img {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  float: left;
  margin-left: 0.18rem;
}
.sitem-m {
  float: left;
  padding-left: 0.18rem;
  padding-right: 0.08rem;
  width: 5.8rem;
}
.sitem-txt {
  color: #333;
  font-size: 0.3rem;
  width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  display: -webkit-box;
  height: 0.72rem;
  line-height: 0.36rem;
}
.stiem-msg {
  color: #999;
  font-size: 0.24rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.stiem-s {
  width: 100%;
  overflow: hidden;
  color: #333;
  font-size: 0.3rem;
}
.stiem-s {
  width: 100%;
  overflow: hidden;
  color: #333;
  font-size: 0.3rem;
}
.s-num {
  float: right;
}
.c-freight {
  height: 100%;
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
  border-bottom: 0.02rem solid #f0f0f0;
  line-height: 0.6rem;
  overflow: hidden;
  font-size: 0.3rem;
}
.fr-txt {
  float: left;
  color: #333;
}
.fr-msg {
  float: right;
  color: #999;
}
.c-cell {
  height: 1rem;
  width: 100%;
  padding-left: 3%;
  padding-right: 3%;
  border-bottom: 0.02rem solid #f0f0f0;
  overflow: hidden;
}
.cl-l {
  font-size: 0.3rem;
  color: #333;
  float: left;
  padding-top: 0.28rem;
}
.cl-c {
  float: left;
  width: 5.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.32rem;
  margin-left: 0.2rem;
}
.inp {
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  font-size: 0.3rem;
  border: none;
}
.c-total {
    padding-right: 0.18rem;
    overflow: hidden;
    height: 1rem;
    line-height: 1rem;
}
.ct-r {
    float: right;
    color: #333;
    font-size: 0.3rem;
}
.ct-j {
    font-size: 0.3rem;
    color: #333;
    float: right;
    margin-right: 0.2rem;
}
.order-sub {
    width: 100%;
    height: 0.96rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    z-index: 20;
}
.norel-sub {
    width: 1.86rem;
    height: 0.96rem;
    text-align: center;
    line-height: 0.96rem;
    color: #fff;
    font-size: 0.28rem;
    float: right;
    background: #e5e5e5;
}
.l-height {
    line-height: 0.96rem;
    margin-right: 0.3rem;
}
.ct-r .ct-price {
    color: #f81234;
    font-size: 0.3rem;
}
</style>
