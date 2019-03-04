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
