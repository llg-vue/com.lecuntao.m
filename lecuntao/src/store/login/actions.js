import { MessageBox } from 'mint-ui';
import Login from "../../apis/login"
export default {

  async actionGetCode({commit,state}, params) {
    if (!(/^1[34578]\d{9}$/.test(params))) {
      alert("手机号码有误，请重填");
      return false;
    }
    // console.log(state.disbaled)
    // if (state.disbaled) {
    //   let code = await Login.RegCode({telNumber: params})
    //   console.log(code);
    //   commit("mutateGetCode", code)
    // }

    commit("mutateGetCode", code)
  },

  async actionRegister({commit},params){
    // console.log(params)
    if (!(/^[a-z0-9_-]{8,20}$/.test(params.pswData))) {
      // alert("密码输入错误");
      MessageBox.alert("密码输入错误","提示");
      return false;
    }
    if(params.pswData!==params.repswData){
      MessageBox.alert("密码不一致","提示");
      return false;
    }
    let regData=await Login.Register({params})
    // console.log(regData);
    commit("mutateRegister",regData)
  },

  async actionLogin({commit},params){
    let loginData=await Login.LoginBtn(params);
    commit("mutateLogin",loginData)
  }
}
