import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Category from '@/components/category/category'
import Shopcart from '@/components/shopcart/shopcart'
import My from '@/components/my/my'
import Login from "@/components/login/login"
import Error from '@/components/error/index'
import ProList from '../components/common/proList.vue';
import Details from '../components/details/details.vue';
import {
  Store
} from 'vuex';
import cookie from "../utils/cookie"
import Search from '../components/home/components/search.vue'
import Address from '../components/home/components/address.vue'
import AddressCity from '../components/home/components/addressCity.vue'
import ConfirmOrder from '../components/confirmOrder/confirmOrder.vue'
Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: "/home",
      meta: {
        title: '乐村淘',
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '乐村淘'
      }
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      meta: {
        title: '乐村淘-分类'
      }
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart,
      meta: {
        title: '乐村淘-购物车',
        Auth: true
      }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta: {
        title: '乐村淘-我的',
        Auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '乐村淘-登录'
      }
    },
    {
      path: "/ProList",
      component: ProList,
      meta: {
        title: "乐村淘-列表"
      }
    },
    {
      path: "/Details",
      component: Details,
      meta: {
        title: "乐村淘-商品详情"
      }
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/address",
      name: "address",
      component: Address,
      meta: {
        title: "地址选择"
      }
    },
    {
<<<<<<< HEAD
      path:"/Details",
      component:Details,
      name:"Details",
      meta:{
        title:"乐村淘-商品详情"
=======
      path: "/addressCity",
      name: "addressCity",
      component: AddressCity,
      meta: {
        title: "地址选择"
>>>>>>> e91724c40287891b2c4fc6001b231f4b3ec2daeb
      }
    },
    {
      path: "/confirmOrder",
      name: "confirmOrder",
      component: ConfirmOrder
    },
    {
      path: '**',
      component: Error,
      meta: {
        title: '页面走丢了'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = cookie.get("token");
  let user = cookie.get("user")
  if (to.meta.Auth) {
    if (token && user) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
})

export default router;
