<template>
  <div id="footer">
    <ul>
      <li v-for="(item, index) in tabBar"
          :key="index"
          @click="handle(index,activeIndex)">
        <router-link :to="item.path">
          <img :src=" activeIndex===index? item.iconActive : item.icon ">
          <span>{{item.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabBar: [
        {
          icon: "../../../static/img/bot-icons/icon_shouye_normal.png",
          iconActive: "../../../static/img/bot-icons/icon_shouye_click.png",
          name: "首页",
          path: "home"
        },
        {
          icon: "../../../static/img/bot-icons/icon_fenlei_normal.png",
          iconActive: "../../../static/img/bot-icons/icon_fenlei_click.png",
          name: "分类",
          path: "category"
        },
        {
          icon: "../../../static/img/bot-icons/icon_gouwuche_normal.png",
          iconActive: "../../../static/img/bot-icons/icon_gouwuche_click.png",
          name: "购物车",
          path: "shopcart"
        },
        {
          icon: "../../../static/img/bot-icons/icon_wode_normal.png",
          iconActive: "../../../static/img/bot-icons/icon_wode_click.png",
          name: "我的",
          path: "my"
        }

      ],
      activeIndex: 0,
    }
  },
  methods: {
    handle (index, active) {
      this.activeIndex = index;
      this.$emit("handle", this.activeIndex)
    }
  },
}
</script>
<style lang="" scoped>
#footer {
  width: 100%;
  height: 1rem;
  background: #fff;
  border-top: 0.02rem solid #ccc;
  z-index: 20;
  position: fixed;
  left: 0;
  bottom: 0;
  padding-top: 0.1rem;
}
#footer > ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
#footer > ul > li,
#footer > ul > li > a {
  width: 100%;
  height: 100%;
}
#footer > ul > li > a {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 0.22rem;
  color: #333;
}
#footer > ul > li > a > img {
  width: 0.44rem;
  height: 0.48rem;
}
.router-link-active {
  color: #f81234 !important;
}
</style>