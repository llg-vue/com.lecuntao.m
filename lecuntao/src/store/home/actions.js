import {
  HomeDate,
  HotDate,
  AddressDate,
  AddressCityDate
} from "../../apis/home"
import state from "./state";
export default {
  async handleHomeData({
    commit
  }) {
    let data = await HomeDate({
      province_id: 140,
      city_id: 140100000000,
      qiang_zhi_geng_xin: ""
    })
    commit("handleHomeData", data.datas);
  },
  async handleHotData({
    commit
  }, params) {
    let data = await HotDate({
      provinc: 110,
      city: 110100000000,
      page: params,
      pageSize: 10
    })
    commit("handleHotData", data.datas)
  },
  //根据省市渲染不同数据
  /* async handleloaclData({
    commit
  }, params) {
    console.log(params)
    let data = await HotDate({
      provinc: params.pi,
      city: params.ci,
      page: params,
      pageSize: 10,
    })
    commit("handleloaclData", data.datas)
  }, */
  async handleAddressDate({
    commit
  }) {
    let data = await AddressDate({
      region:  "province_name"
    })
    commit("handleAddressDate", data.datas);
  },
  async handleAddressCityDate({
    commit
  },params) {
    let data = await AddressCityDate({
      region:  "city_name",
      parent_id: params
    })
    commit("handleAddressCityDate", data.datas);
  },
}
