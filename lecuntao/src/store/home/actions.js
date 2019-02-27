import {HomeDate} from "../../apis/home"
export default {
    async handleHomeData(){
        let data = await HomeDate({
            provinc: 140,
            city: 140100000000,
            page: 1,
            pageSize: 10
        })
        // console.log(data)
    }
}