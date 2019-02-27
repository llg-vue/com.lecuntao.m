import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Category from '@/components/category/category'
import Shopcart from '@/components/shopcart/shopcart'
import My from '@/components/my/my'
import Error from '@/components/error/index'
import ProList from '../components/common/proList.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/home",
      meta:{
        title:'乐村淘'
    }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        title:'乐村淘'
    }
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
      meta:{
        title:'乐村淘-分类'
    }
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart,
      meta:{
        title:'乐村淘-购物车'
    }
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      meta:{
        title:'乐村淘-我的'
    }
    },
    {
      path: '**',
      component: Error,
      meta:{
        title:'页面走丢了'
    }
    },
    {
      path:"/ProList",
      component:ProList,
      meta:{
        title:"乐村淘-列表"
      }
    }
  ]
})
