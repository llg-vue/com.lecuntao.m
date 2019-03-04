// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/css/reset.css'
import './common/js/flexble'
import store from './store'
<<<<<<< HEAD
import 'mint-ui/lib/style.css';
=======
import "./common/css/my-mint.css"

Vue.prototype.$EventBus=new Vue();

>>>>>>> e91724c40287891b2c4fc6001b231f4b3ec2daeb
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
