/* 展示模板 */
<template>
  <div id='regItem'>
    <div class="regInput">
      <input type="tel"
             class="telNumber"
             name="telephone"
             placeholder="注册手机号"
             v-model="phoneNumber" />
      <em></em>
      <div class="verify">
        <input type="text"
               class="telCode"
               placeholder="请写短信验证码"
               v-model="codeData"><span class="getCode"
              ref="getTelCode"
              @click="handerGetCode(phoneNumber)">{{getCodeText}}</span>
      </div>
      <em></em>
      <input type="password"
             class="password"
             placeholder="设置登录密码(8-20字母数字组合)"
             v-model="pswData">
      <em></em>
      <input type="password"
             class="repsw"
             placeholder="确认密码"
             v-model="repswData">
    </div>
    <p>收不到短信，试试语音验证码</p>
    <div class="regBtn"
         @click="handlerReg({phoneNumber,codeData,pswData,repswData})">注册</div>
    <!-- <Verify v-if="verifyFlag"></Verify> -->
  </div>
</template>
<script>
//导入组件
// import Verify from "./verify/verify"
import Vuex from "vuex"
import qs from "qs"
import { setInterval, clearInterval } from 'timers';
export default {
  // components: {
  //   Verify,
  // },
  data () {
    return {
      // verifyFlag: false,
      phoneNumber: "",
      codeData: "",
      pswData: "",
      repswData: "",
    }
  },
  computed: Vuex.mapState({
    getCodeText: state => state.login.getCodeText
  }),
  methods:
    // handerGetCode () {
    // this.verifyFlag = true;
    // }
    Vuex.mapActions({
      handerGetCode: "login/actionGetCode",
      handlerReg: "login/actionRegister"
    }),
  // handlerReg () {
  //   if (!(/^[a-z0-9_-]{8,20}$/.test(this.pswData))) {
  //     alert("密码输入错误");
  //     return false;
  //   }
  //   if(this.pswData!==this.repswData){
  //     alert("密码不一致");
  //     return false;
  //   }
  // }
}

</script>
<style scoped>
/* 样式代码 */
#regItem {
  width: 7.14rem;
}
#regItem > .regInput {
  background: #fff;
  width: 7.14rem;
  height: 4rem;
}
#regItem > .regInput input {
  width: 100%;
  height: 1rem;
  padding-left: 0.8rem;
  border: none;
  font-size: 0.3rem;
  color: #75758b;
}
#regItem > .regInput > em {
  width: 94%;
  margin-left: 3%;
  height: 0.02rem;
  background: #ccc;
  display: block;
}
#regItem > .regInput > .telNumber {
  background: url(https://m.lecuntao.com/resource/images/login/icon_login.png?lv=0604d8cffe)
    no-repeat 0.2rem #ffffff;
  background-size: 0.48rem;
}
#regItem > .regInput > .verify {
  position: relative;
}
#regItem > .regInput > .verify > .getCode {
  width: 1.54rem;
  height: 0.5rem;
  border-radius: 0.25rem;
  border: 0.02rem solid #f81234;
  text-align: center;
  line-height: 0.5rem;
  position: absolute;
  font-size: 0.24rem;
  right: 0.2rem;
  top: 0.24rem;
}
#regItem > .regInput > .verify > .telCode {
  background: url(https://m.lecuntao.com/resource/images/login/icon_validate.png?lv=5d32cca734)
    no-repeat 0.2rem #ffffff;
  background-size: 0.48rem;
}
#regItem > .regInput > .password,
#regItem > .regInput > .repsw {
  background: url(https://m.lecuntao.com/resource/images/login/icon_lock.png?lv=3f0f2d60c4)
    no-repeat 0.2rem #ffffff;
  background-size: 0.48rem;
}

#regItem > p {
  width: 7.14rem;
  height: 1rem;
  font-size: 0.24rem;
  line-height: 1rem;
  color: #b2b2b2;
}
#regItem > .regBtn {
  width: 100%;
  color: #fff;
  background: #f81234;
  height: 0.9rem;
  font-size: 0.32rem;
  text-align: center;
  line-height: 0.9rem;
  display: block;
  border-radius: 0.08rem;
}
</style>