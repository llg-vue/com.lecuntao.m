import { MessageBox } from 'mint-ui';
export default {
  mutateGetCode(state, params) {
    if (params.state == 1 && state.disbaled == true) {
      state.disbaled = false;
      let second = 60;
      let time = setInterval(function () {
        if (second === -1) {
          state.getCodeText = "重新获取";
          state.disabled = true;
          clearInterval(time);
        } else {
          state.getCodeText = second + "秒"
            --second;
        }
      }, 1000)
    };
  },
  mutateRegister(state, params) {
    if (params.state = 1) {
      MessageBox.alert(params.info,"提示");
    } else {
      MessageBox.alert(params.info,"提示");
    }
  },
  mutateLogin(state, params) {
    if (params.state = 1) {
      state.loginState=true;
      MessageBox.alert(params.info,"提示");
    } else {
      MessageBox.alert(params.info,"提示");
    }
  }
}
