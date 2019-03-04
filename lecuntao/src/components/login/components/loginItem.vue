/* 展示模板 */
<template>
  <div id='loginItem'>
    <div class="loginInput">
      <input type="text"
             class="username"
             placeholder="输入手机号/用户名"
             v-model="loginUser">
      <em></em>
      <input type="password"
             class="password"
             placeholder="请输入密码"
             v-model="loginPwd">
    </div>
    <div class="loginBtn"
         @click="handlerClick()">登录</div>
    <div class="findPsw"
         @click="findPsw()">找回密码</div>
  </div>
</template>
<script>
//导入组件
import Vuex from "vuex"
export default {
  name: 'App',
  data () {
    return {
      loginUser: "",
      loginPwd: "",
    }
  },
  computed: {
    ...Vuex.mapState({
      loginState: (state) => state.login.loginState
    })
  },
  methods: {
    async handlerClick () {
      let loginState = await this.handlerLogin({ loginUser: this.loginUser, loginPwd: this.loginPwd });
      if (this.loginState) {
        this.$router.push({ name: "my"})
      }
    },
    ...Vuex.mapActions({
      handlerLogin: "login/actionLogin"
    })
  },
}
</script>
<style scoped>
/* 样式代码 */
#loginItem {
  width: 7.14rem;
  height: 4.5rem;
}
#loginItem > .loginInput {
  width: 7.14rem;
  height: 2rem;
  border-radius: 0.08rem;
  background: #fff;
}
#loginItem > .loginInput > input {
  width: 100%;
  height: 1rem;
  padding: 0 0.8rem;
  font-size: 0.3rem;
  color: #75758b;
  border: none;
  border-radius: 0.08rem;
}
#loginItem > .loginInput > input {
  width: 100%;
  height: 1rem;
  padding: 0 0.8rem;
  font-size: 0.3rem;
  color: #75758b;
  border: none;
}
#loginItem > .loginInput > em {
  width: 94%;
  margin-left: 3%;
  height: 0.02rem;
  background: #ccc;
  display: block;
}
#loginItem > .loginInput > .username {
  background: url(https://m.lecuntao.com/resource/images/login/icon_login.png?lv=0604d8cffe)
    no-repeat 0.2rem #ffffff;
  background-size: 0.48rem;
}
#loginItem > .loginInput > .password {
  background: url(https://m.lecuntao.com/resource/images/login/icon_lock.png?lv=3f0f2d60c4)
    no-repeat 0.2rem #ffffff;
  background-size: 0.48rem;
}

#loginItem > .loginBtn {
  width: 100%;
  color: #fff;
  background: #f81234;
  height: 0.9rem;
  font-size: 0.34rem;
  text-align: center;
  line-height: 0.9rem;
  margin-top: 0.5rem;
  display: block;
  border-radius: 0.08rem;
}
#loginItem > .findPsw {
  width: 100%;
  color: #808080;
  background: #fff;
  height: 0.9rem;
  font-size: 0.32rem;
  text-align: center;
  line-height: 0.9rem;
  margin-top: 0.2rem;
  display: block;
  border-radius: 0.08rem;
}
</style>