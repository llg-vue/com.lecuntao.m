<template>
<div id="louti-wrap">
    <div class="louti" v-for="(item, index) in goods" :key="index">
        <div class="lou_line">
            <i class="icon_l"></i>
            <span class="fl">{{item.cate_info.cate_name}}</span>
            <span>
                <i class="icon_more"><img src="../../../../static/img/index/icon_more.png"></i>
                <span class="fr">更多</span>
            </span>
        </div>
        <ul class="data-list">
            <li v-for="(item, index) in item.goods_list" :key="index">
                <a href="javascript:;">
                    <img class="pd-img" :src="item.goods_image">
                </a>
                <p class="pd-name">{{item.goods_name}}</p>
                <div class="pd-flow">
                    <span class="pd-price">{{item.goods_price}}</span>
                    <span class="pd-sold">已售{{item.goods_salenum}}件</span>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import Vuex from "vuex"
export default {
    computed: {
        ...Vuex.mapState({
            goods:state=>state.home.categoryGoods
        })
    }
}
</script>
<style lang="">
    .lou_line {
        width: 100%;
        overflow: hidden;
        height: .7rem;
        line-height: .7rem;
        display: block;
    }
    .icon_l {
        width: .06rem;
        height: .26rem;
        background: #ff4e67;
        float: left;
        margin-top: .2rem;
        margin-right: .2rem;
    }
    .lou_line .fl {
        font-size: .24rem;
        color: #333;
        line-height: .7rem;
    }
    .fl {
        float: left;
    }
    .icon_more {
        width: .24rem;
        height: .24rem;
        background-size: contain;
        float: right;
        margin-top: .22rem;
        margin-right: .2rem;
        margin-left: .2rem;
    }
    .icon_more>img{
        width: 100%;
        height: 100%;
    }
    .lou_line .fr {
        font-size: .24rem;
        color: #999;
        line-height: .7rem;
    }
        .fr {
        float: right;
    }
    .data-list {
        width: 100%;
        overflow: hidden;
    }
    .data-list li:nth-child(odd) {
        border-right: 0.01rem solid #f0f0f0;
    }
    .data-list li {
        float: left;
        width: 50%;
        overflow: hidden;
        background: #fff;
        height: 5.15rem;
        border-bottom: 0.01rem solid #f0f0f0;
        box-sizing: border-box;
    }
    .data-list .pd-img {
        width: 3rem;
        display: block;
        margin: .3rem auto .4rem;
    }
    .data-list .pd-name {
        font-size: .26rem;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        display: -webkit-box;
        height: 0.72rem;
        line-height: 0.36rem;
        margin-left: .2rem;
        margin-right: .2rem;
    }
    .pd-flow {
        padding-left: .2rem;
        padding-right: .2rem;
        overflow: hidden;
    }
    .data-list .pd-price {
        margin-top: .13rem;
        color: rgb(242,48,48);
        font-size: .3rem;
        float: left;
    }
    .data-list .pd-sold {
        font-size: .22rem;
        margin-top: .13rem;
        color: rgb(153,153,153);
        float: right;
    }
</style>