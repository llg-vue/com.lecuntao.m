import {
  HomeDate,
  HotDate
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
    //console.log(data)
  },
  async handleHotData({
    commit
  }, params) {
    let data = await HotDate({
      provinc: 140,
      city: 140100000000,
      page: params,
      pageSize: 10,
    })
    commit("handleHotData", data.datas)
    // console.log(data)
  }
}
