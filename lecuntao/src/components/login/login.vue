/* 展示模板 */
<template>
  <div id='login'>
    <header>
      <router-link to="/home"
                   tag="span">
        <svg t="1550923703121"
             class="icon"
             style=""
             viewBox="0 0 1024 1024"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="2324"
             xmlns:xlink="http://www.w3.org/1999/xlink"
             width="40"
             height="40">
          <defs>
          </defs>
          <path d="M549.554512 511.539522l271.784151-269.430599c5.525732-5.525732 8.288598-12.688718 8.288598-19.954032s-2.762866-14.4283-8.288598-19.954032c-11.051464-11.051464-28.8566-11.051464-39.908064 0L509.441791 471.836115 237.452983 202.200859c-11.051464-11.051464-28.8566-11.051464-39.908064 0-5.525732 5.525732-8.288598 12.688718-8.288598 19.954032s2.762866 14.4283 8.288598 19.954032l271.784151 269.430599L197.544919 780.970121c-5.525732 5.525732-8.288598 12.688718-8.288598 19.954032s2.762866 14.4283 8.288598 19.954032c5.525732 5.525732 12.688718 8.288598 19.954032 8.288598s14.4283-2.762866 19.954032-8.288598L509.441791 551.24293l271.988808 269.635255c5.525732 5.525732 12.688718 8.288598 19.954032 8.288598s14.4283-2.762866 19.954032-8.288598 8.288598-12.688718 8.288598-19.954032-2.762866-14.4283-8.288598-19.954032L549.554512 511.539522z"
                p-id="2325"
                fill="#F81738"></path>
        </svg>
      </router-link>
      <h2>{{headerTitle}}</h2>
    </header>
    <div class="login-form">
      <div class="login-text">
        <div v-for="(item,index) in title"
             :key="index"
             @click="switchLogin(index)"
             :class="loginItem===index?'loginItem':''">
          {{item}}
        </div>
      </div>
      <Component :is="loginCom"></Component>
    </div>
  </div>
</template>
<script>
//导入组件
import LoginItem from "./components/loginItem"
import RegisterItem from "./components/regItem"
export default {
  data () {
    return {
      title: ["乐村淘账户登录", "免费注册"],
      loginCom: "LoginItem",
      loginItem: 0,
      headerTitle: "登录",
    }
  },
  components: {
    LoginItem,
    RegisterItem,
  },
  methods: {
    switchLogin (index) {
      this.loginItem = index;
      switch (index) {
        case 0:
          this.loginCom = "LoginItem";
          this.headerTitle = "登录";
          break;
        case 1:
          this.loginCom = "RegisterItem";
          this.headerTitle = "注册";
          break;
        default:
          console.log("登录组件动态切换失败");
          break;
      }
    }
  },
}
</script>
<style scoped>
#login {
  background: #f0f0f0;
  width: 7.5rem;
  height: 100%;
}
#login > header {
  width: 7.5rem;
  height: 1.26rem;
}
#login > header svg {
  position: absolute;
  left: 0.08rem;
  top: 0.08rem;
}
#login > header > h2 {
  font-size: 0.36rem;
  height: 0.96rem;
  width: 7.5rem;
  line-height: 0.96rem;
  text-align: center;
  color: #333;
}
#login > .login-form {
  width: 7.5rem;
  height: 5.64rem;
  padding: 0 0.18rem;
}
#login > .login-form > .login-text > .loginItem {
  background: #f81234;
  color: #fff;
}
#login > .login-form > .login-text {
  display: flex;
  border: 0.02rem solid #f81234;
  border-radius: 0.08rem;
  margin-bottom: 0.3rem;
  color: #000;
  font-size: 0.3rem;
}
#login > .login-form > .login-text > div {
  width: 3.56rem;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
}
</style>
