import http from '../utils/http';

const listList = ()=>http("post","/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1550983523304&act=mobile_cate&op=index");

export default {
    listList
}