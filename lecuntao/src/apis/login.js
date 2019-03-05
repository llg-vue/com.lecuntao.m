import http from "../utils/http"

const RegCode = (arg) => http("post","/node/user/getCode", arg)
// const Register=(arg)=>http("post","/node/user/register",arg)
const LoginBtn=(arg)=>http("post","/node/user/login",arg)
let Login={
  RegCode,
  // Register,
  LoginBtn
}
export default Login
