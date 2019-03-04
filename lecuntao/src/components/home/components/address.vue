<template>
    <div id="wrap_address" class="wrap_address">
        <div class="top_tit_bar">
            <div @click="handleBack()" class="back_btn"><i><img src="../../../../static/img/bot-icons/btn_back.png"></i></div>
            <span>选择所在地区</span>
        </div>
        <div id="iscroll">
            <h5 class="specific_location">
                <span>当前定位：{{LocationCity}}</span>
            </h5>
            <div class="ads_location" @click="handlelocation(LocationCity)">
                <i class="icon_loc"><img src="../../../../static/img/bot-icons/location.png"></i>
                <span class="loc_txt">点击定位当前位置</span>
            </div>
            <div class="sel_address">
                <span>选择请</span><a href="javascript:;">省市/地区</a>
            </div>
            <ul class="address_list">
                <li @click="handlereq(item.province_id)" v-for="(item, index) in addressList" :key="index"><span :id="item.province_id">{{item.province_name}}</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex"
import BMap from 'BMap'
export default {
    data(){
        return{
            LocationCity:"正在定位"    //给渲染层定义一个初始值
        }
    },
    mounted(){
        this.city()    //触发获取城市方法
    },
    created () {
        this.handleAddressDate()
        this.handleAddressCityDate()
    },
    computed: {
        ...Vuex.mapState({
            addressList:state=>state.home.addressList
        })
    },
    methods: {
        ...Vuex.mapActions({
        handleAddressDate:"home/handleAddressDate"
        }),
        ...Vuex.mapActions({
        handleAddressCityDate:"home/handleAddressCityDate"
        }),
        ...Vuex.mapMutations({
            handleCityName:"home/handleCityName"
        }),
        handleBack(){
            this.$router.back({
          })
        },
        handlereq(id){
            this.$router.push({
                name:"addressCity"
            });
            this.handleAddressCityDate(id)
        },
        city(){    //定义获取城市方法
            const geolocation = new BMap.Geolocation();
            var _this = this
            geolocation.getCurrentPosition(function getinfo(position){
                let city = position.address.city;             //获取城市信息
                let province = position.address.province;    //获取省份信息
                _this.LocationCity = city
            }, function(e) {
                _this.LocationCity = "定位失败"
            }, {provider: 'baidu'});		
        },
        handlelocation(location){
            this.$router.push({
                name:"home"
            })
            this.handleCityName(location)
        }
    },
}
</script>
<style lang="" scoped>
    #wrap_address{
        background: #fff;
    }
    .wrap_address {
        width: 100%;
        margin: 0 auto;
        max-width: 720px;
    }
    .top_tit_bar {
        width: 100%;
        height: 0.96rem;
        line-height: 0.96rem;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        z-index: 10;
        background: #fff;
    }
    .top_tit_bar .back_btn {
        padding-left: 0.19rem;
        font-size: 0.34rem;
        flex: 0.5;
        -ms-flex: 0.5;
        -webkit-box-flex: 0.5;
    }
    .top_tit_bar .back_btn i {
        width: 0.4rem;
        margin-right: 0.2rem;
        background-size: 100%;
        display: inline-block;
        vertical-align: middle;
    }
    .top_tit_bar>.back_btn>i>img{
        width: 100%;
        height: 100%;
    }
    .top_tit_bar span{
        text-align: center;
        font-size: 0.38rem;
        color: #282828;
    }
    .specific_location {
        padding-left: 0.24rem;
        color: #333;
        font-size: 0.32rem;
        background: #F0F0F0;
        line-height: 0.92rem;
    }
    .ads_location {
        width: 100%;
        overflow: hidden;
        height: 0.8rem;
    }
    #iscroll{
        margin-top: 0.96rem;
        height: 619px;
    }
    .ads_location .loc_txt {
        font-size: 0.32rem;
        line-height: 0.8rem;
        color: #999;
        float: left;
        margin-left: 0.1rem;
    }
    .icon_loc {
        width: 0.3rem;
        height: 0.3rem;
        float: left;
        margin-left: 2.27rem;
        margin-top: 0.25rem;
    }
    .icon_loc>img{
        width: 100%;
        height: 100%;
    }
    .sel_address {
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.32rem;
        color: #999;
        border-top: 0.01rem solid #f0f0f0;
    }
    .sel_address>span {
        padding-left: 0.21rem;
        padding-right: 0.32rem;
    }
    .address_list {
        width: 100%;
        padding-left: 0.21rem;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
    }
    .address_list li {
        width: 100%;
        height: 1rem;
        border-top: 0.01rem solid #F0F0F0;
        line-height: 1rem;
        font-size: 0.32rem;
        color: #333;
    }
</style>