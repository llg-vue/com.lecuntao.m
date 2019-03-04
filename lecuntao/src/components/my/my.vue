<template>
  <div id="my">
    <Header></Header>
    <MyOrder></MyOrder>
    <Footer></Footer>
    <MyCol :myComData="myCollect"></MyCol>
    <MyCol :myComData="goodAdd"></MyCol>
    <MyCol :myComData="cardPackage"></MyCol>
    <div class="nullbackground"></div>
    <MyCol :myComData="countPay"></MyCol>
    <MyCol :myComData="password"></MyCol>
    <div class="nullbackground"></div>
    <MyCol :myComData="tel"></MyCol>
    <MyCol :myComData="opinion"></MyCol>
    <Link/>
  </div>
</template>

<script>
import Link from "./components/otherlink"
import MyCol from "./components/common"
import Header from "./components/header/header"
import MyOrder from "./components/myOrder/myorder"
import Footer from "../common/footer"
export default {
  components: {
    Header,
    MyOrder,
    Footer,
    MyCol,Link
  },
  data () {
    return {
      myCollect: {
        img: "https://m.lecuntao.com/resource/images/per/icon_gerenzhongxin_jidan.png?lv=9867eed154", title: "我的集单", detail: "", icon: "https://m.lecuntao.com/resource/images/per/icon_wodedingdanjiantou.png?lv=91168a2962"
      },
      goodAdd: { img: "https://m.lecuntao.com/resource/images/per/icon_gerenzhongxinshouhuodizhi.png?lv=d2d3023641", title: "收货地址", detail: "管理地址信息", icon: "https://m.lecuntao.com/resource/images/per/icon_wodedingdanjiantou.png?lv=91168a2962" },
      cardPackage: {
        img: "https://m.lecuntao.com/resource/images/per/icon_gerenzhongxin_kaquanbao.png?lv=7c9c2771cc", title: "卡券包", detail: "红包", icon: "https://m.lecuntao.com/resource/images/per/icon_wodedingdanjiantou.png?lv=91168a2962"
      },
      countPay: {
        img: "https://m.lecuntao.com/resource/images/per/icon_gerenzhongxinzhanghuyue.png?lv=35a75de579", title: "账号余额", detail: "", icon: "https://m.lecuntao.com/resource/images/per/icon_wodedingdanjiantou.png?lv=91168a2962"
      },
      password: {
        img: "https://m.lecuntao.com/resource/images/per/icon_gerenzhongxinlianxidaianhua_password.png?lv=8f523c22fd", title: "支付密码", detail: "设置、管理支付密码", icon: "https://m.lecuntao.com/resource/images/per/icon_wodedingdanjiantou.png?lv=91168a2962"
      },
      tel:{
         img: "https://m.lecuntao.com/resource/images/per/icon_gerenzhongxinlianxidaianhua.png?lv=3eca360974", title: "联系电话", detail: "400-088-0692", icon: "https://m.lecuntao.com/resource/images/per/icon_wodedingdanjiantou.png?lv=91168a2962"
      },
      opinion:{
         img: "https://m.lecuntao.com/resource/images/per/icon_gerenzhongxinyjianfankui.png?lv=297421a35b", title: "意见反馈", detail: "", icon: ""
      }
    }
  },
}
</script>

<style lang="scss" scoped>
#my{
  padding-bottom:1rem;
}
.nullbackground {
  height: 0.2rem;
  width: 7.5rem;
  background: #f0f0f0;
}
</style>