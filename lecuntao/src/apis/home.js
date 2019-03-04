import http from '../utils/http'

export const HomeDate = (params)=>http("post","/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551247606755&act=index&op=index&key=",params)

export const HotDate = (params)=>http("post","/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551326241865&act=goods&op=goodsRecom_new",params)

export const AddressDate = (params)=>http("post","/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551500343453&act=Address&op=get_region",params)

export const AddressCityDate = (params)=>http("post","/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551500343453&act=Address&op=get_region",params)