import http from '../utils/http';

const proList = (params)=>http('post','/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551264742915&act=goods&op=goodsList',params)


export default {
    proList
}

