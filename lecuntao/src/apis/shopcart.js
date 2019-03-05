import http from "../utils/http"

export const ShopCart = (params) => http("post", "/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551775332341", params)
export const GoodReduce = (params) => http("post", "/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551626669551", params)
export const GoodAdd = (params) => http("post", "/api/lct?api_version=2.3.0&platType=2&client=wap&isEncry=0&time=1551689082680", params)
