import http from '../utils/http';

const getProData = (data)=>http("post",'/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551413524343&act=mobile_goods_detail&op=getGoodsInfo',data);

const getRecommend = (data)=>http('post','/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551344238716&act=mobile_goods_detail&op=getRecommentDetail',data);

const getGoodsDetail = (data)=>http('post','/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551499787275&act=mobile_goods_detail&op=getDetailData',data);

export default {
    getProData,
    getRecommend,
    getGoodsDetail
}