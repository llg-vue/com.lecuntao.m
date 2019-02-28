import http from '../utils/http';

const getProData = (params)=>http("post",'/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551344040920&act=mobile_goods_detail&op=getGoodsInfo',params);

const getRecommend = (params)=>http('post','/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551344238716&act=mobile_goods_detail&op=getRecommentDetail',params);

const getGoodsDetail = (params)=>http('post','/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551344238716&act=mobile_goods_detail&op=getDetailData',params);

export default {
    getProData,
    getRecommend,
    getGoodsDetail
}