/* 展示模板 */
<template>
  <div id='findPsw'>
    <header>
      <router-link to="/login"
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
      <h2>找回密码</h2>
    </header>
    <div id='loginItem'>
      <div class="loginInput">
        <input type="text"
               class="username"
               placeholder="没钱做短信验证了，别点下一步了。"
               v-model="loginUser">
        <em></em>
      </div>
      <div class="nextLogin">下一步</div>
    </div>
</template>
<script>
//导入组件
export default {
  name: 'App'
}
</script>
<style scoped>
/* 样式代码 */
#findPsw {
  background: #f0f0f0;
  width: 7.5rem;
  height: 100%;
}
#findPsw > header {
  width: 7.5rem;
  height: 1.26rem;
}
#findPsw > header svg {
  position: absolute;
  left: 0.08rem;
  top: 0.08rem;
}
#findPsw > header > h2 {
  font-size: 0.36rem;
  height: 0.96rem;
  width: 7.5rem;
  line-height: 0.96rem;
  text-align: center;
  color: #333;
}
#findPsw > .login-form {
  width: 7.5rem;
  height: 5.64rem;
  padding: 0 0.18rem;
}
</style>