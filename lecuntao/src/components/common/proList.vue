<template>
    <div class="box">
        <div class="loading" style="display:none">
            <div></div>
        </div>
        <div class="top">
            <span @click="goBack()"></span>
            {{title}}
        </div>
        <div class="tabbar">
            <ul>
                <li v-for="(item,index) in navBar" :key="index"
                    @click="clickNav(item,index)"
                    :class="index===num&&num!==2?'active':''"
                >
                    {{item.title}}
                </li>
            </ul>
            <div class="sanjiao">
                <span :id="flag===0?'bottomhongse':''"></span>
                <span :id="flag===1?'tophongse':''"></span>
            </div>
        </div>
        <div class="wrapper bsBox" ref="wrapper">
            <ul class="content">
                <li v-for="(item,index) in proList" :key="index" @click="goDetails(item)">
                    <img :src="item.goods_image" alt="">
                    <span>{{item.goods_name}}</span>
                    <a href="##">
                        <div class="msg_price">
                            <i>￥</i>
                            <span>{{item.goods_price}}</span>
                        </div>
                        <div class="msg_amount">{{item.goods_salenum}}人付款</div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="upBtn" @click="upScroll()" v-show="upBool">
            <img src="https://m.lecuntao.com/resource/images/return_top.png?lv=d6780f6c45" alt="">
        </div>
    </div>
</template>

<script>
import qs from 'qs';
import http from '../../apis/prolist.js';
import BScroll from 'better-scroll';
export default {
    data(){
        return {
            title:"",
            gcid:"",
            sorted:4,
            sequence:0,
            page:1,
            num:0,
            state:true,
            flag:-1,
            proList:[],
            params:{},
            upBool:false,
            navBar:[
                {title:"全部",sorted:4,sequence:0},
                {title:"销量优先",sorted:1,sequence:0},
                {title:"价格",sorted:3,sequence0:1,sequence1:0},
                {title:"人气",sorted:2,sequence:0}
            ],
        }
    },
    
    created(){
        this.title = this.$route.query.title;
        this.gcid = this.$route.query.id;
        this.getData();
    },
    mounted() {
        this.$nextTick(() => {
            let that = this;
            this.scroll = new BScroll(this.$refs.wrapper, {
                bounce: true,
                momentumLimitDistance: 5,
                scrollY: true,
                click:true,
                probeType:2,
                scrollbar: {
                    fade: true,
                    interactive: true // 1.8.0 新增
                },
                pullUpLoad: {
                    threshold: -120 // 当上拉距离超过30px时触发 pullingUp 事件
                }
                // mouseWheel: true,
            }),
            this.scroll.on('scroll',function(){
                if(that.scroll.y < -300){
                    that.upBool = true;
                }
            }),
            this.scroll.on("pullingUp",function(){
                that.page+=1;
                that.getData();
                this.finishPullUp();
            });
            this.scroll.refresh();
        })
    },
    watch: {
        page:function(val,oldVal){
            if(val === 1){
                this.upBool = false
            }else{
                this.upBool = true;
            }
        }
    },
    methods:{
        goDetails(item){
            this.$router.push({name:'Details',params:{info:JSON.stringify(item)},query:{goodId:item.goods_id,gcId:item.gc_id}});
        },
        upScroll(){
            this.upBool = false;
            this.scroll.scrollTo(0,0,1000)
        },
        goBack(){
            this.$router.back()
        },
        clickNav(item,index){
            this.num = index;
            if(item.sorted!==3){
                this.flag = -1;
                this.sorted = item.sorted;
                this.sequence = item.sequence;
                this.page = 1;
            }else{
                if(this.state){
                    this.flag = 0
                    this.sorted = 3;
                    this.sequence = item.sequence0;
                    this.page = 1;
                }else{
                    this.flag = 1
                    this.sorted = 3;
                    this.sequence = item.sequence1; 
                    this.page = 1;
                }
                this.state = !this.state
            }
            this.getnewData();
        },
        getparams(){
            this.params = {
                provinc: 140,
                city: 140100000000,
                keyword: "",
                page: this.page,
                sorted: this.sorted,
                sequence: this.sequence,
                gcId: this.gcid,
                workshop: ""
            }
        },
        getnewData(){
            this.getparams();
            http.proList(this.params)
            .then((data)=>{
                console.log(data);
                this.proList = data.datas.list;
            })
        },
        getData(){
            this.getparams();
            http.proList(this.params)
            .then((data)=>{
                // console.log(data);
                if(data.datas.list.length === 0) return;
                this.proList = this.proList.concat(data.datas.list)
            })
        }
    }
}
</script>

<style lang="" scoped>
    .loading{
        width: 7.5rem;
        height: 13.34rem;
        z-index: 1999;
        background-color: #fff;
    }
    .loading>div{
        width: 750px;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        background: url("https://m.lecuntao.com/resource/images/loading02.gif?lv=9a1f77e4e0") no-repeat scroll 50% 50%;
        height: 600px;
    }
    .box{
        background-color: #ccc;
    }
    .upBtn{
        width: 0.79rem;
        height: 0.79rem;
        position: fixed;
        bottom: 1.5rem;
        right: 0.3rem;
        background-size: contain;
        transition: 1s all ease;
        z-index: 100;
    }
    .upBtn>img{
        width: 100%;
        height: 100%;
    }
    .top{
        width: 7.5rem;
        height: .96rem;
        font-size: 0.36rem;
        line-height: 0.96rem;
        text-align: center;
        background: #fff;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 999;
    }
    .top>span{
        background: url("https://m.lecuntao.com/resource/images/btn_back.png?lv=09b14befba") no-repeat;
        width: 0.4rem;
        height: 0.4rem;
        background-size: 100%;
        float: left;
        margin-top: 0.35rem;
        margin-left: 0.2rem;
        display: block;
    }
    .tabbar{
        width: 100%;
        position: fixed;
        left: 0;
        top: 0.96rem;
        background: #fff;
        z-index: 999;
        border-bottom: .04rem solid #aaa;
    }
    .tabbar>ul{
        width: 7.5rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
    }
    .tabbar>ul>li{
        width: 100%;
        height: 100%;
        line-height: 0.6rem;
        font-size: 0.3rem;
        text-align: center;
    }
    .tabbar>ul>.active{
        color: red;
    }
    .sanjiao{
        position: absolute;
        width: .16rem;
        height:.35rem;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        top: .12rem;
        right: 2.3rem;
    }
    .sanjiao>span:first-child{
        display: block;
        width: 0;
        height: 0;
        border-bottom: .13rem solid #ccc;
        border-left: .12rem solid transparent;
        border-right: .12rem solid transparent;
    }
    .sanjiao>span:last-child{
        display: block;
        width: 0;
        height: 0;
        border-top: .13rem solid #ccc;
        border-left: .12rem solid transparent;
        border-right: .12rem solid transparent;
    }
    .sanjiao>#tophongse{
        border-top: .13rem solid red;
    }
    .sanjiao>#bottomhongse{
        border-bottom: .13rem solid red;
    }
    .bsBox{
        width: 100%;
        height:11.84rem;
        overflow: hidden;
        background-color: #ccc;
        position: fixed;
        top: 1.5rem;
        left: 0;
    }
    .bsBox>.content{
        width: 7.5rem;
        overflow: hidden;
    }
    .bsBox>.content>li{
        width: 49.3%;
        float: left;
        background: #fff;
        margin-top: 0.08rem;
        height: 4.9rem;
    }
    .bsBox>.content>li:nth-child(odd){
        margin-right: 1.4%;
    }
    .content>li>img{
            width: 100%;
            height: 3.2rem;
            background-size: contain;
            display: block;
    }
    .content>li>span{
        color: #333;
        font-size: 0.28rem;
        width: 90%;
        padding-left: 5%;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        display: -webkit-box;
        height: 0.72rem;
        line-height: 0.36rem;
        margin-top: 0.12rem;
    }
    .content>li>a{
        padding-bottom: 0.4rem;
        overflow: hidden;
        display: block;
        padding-top: 0.06rem;

    }
    .msg_price {
        padding-left: 0.14rem;
        float: left;
        overflow: hidden;
    }
   .msg_price i {
        width: 0.3rem;
        height: 0.3rem;
        background-size: contain;
        display: block;
        float: left;
        margin-top: 0.04rem;
    }
    .msg_price>span {
    color: #f81234;
    font-size: 0.3rem;
    float: left;
    margin-left: 0.08rem;
}
    .msg_amount {
        padding-right: 0.24rem;
        font-size: 0.24rem;
        color: #999;
        float: right;
        margin-top: 0.04rem;
    }
</style>
