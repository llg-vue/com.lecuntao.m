<template>
    <div id="wrap_address" class="wrap_address">
        <div class="top_tit_bar">
            <div @click="handleBack()" class="back_btn"><i><img src="../../../../static/img/bot-icons/btn_back.png"></i></div>
            <span>选择所在地区</span>
        </div>
        <div id="iscroll">
            <ul class="address_list">
                <li @click="handle({cn:item.city_name,pi:item.province_id,ci:item.city_id})" v-for="(item, index) in addressCityList" :key="index"><span :id="item.city_id">{{item.city_name}}</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
import Vuex from "vuex"
export default {
    computed: {
        ...Vuex.mapState({
            addressCityList:state=>state.home.addressCityList
        })
    },
    methods: {
        handleBack(){
            this.$router.back();
        },
        ...Vuex.mapActions({
        handleHotData: "home/handleHotData"
        }),
        ...Vuex.mapMutations({
            handleCityName:"home/handleCityName"
        }),
        handle(msg){
            this.handleCityName(msg.cn)
            this.$router.push({
              name:"home",
          });
            this.handleHotData(msg)
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