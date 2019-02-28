<template>
    <div class="box">
        <div class="header">
            <a href="##">
                <img src="https://m.lecuntao.com/resource/images/details/detail-back.png?lv=6a69a719d0" alt="">
            </a>
            <ul>
                <li v-for="(item,index) in head" :key="index"
                    @click="liHandler(index)"
                    :class="index === active?'active':''"
                >{{item}}</li>
            </ul>
        </div>
        <div class="wrapper" ref="wrapper">
            <div class="content">
                
            </div> 
        </div>
        <div class="footer">

        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import http from '../../apis/details.js';
import qs from 'qs';
export default {
    data(){
        return{
            itemInfo :null,
            head:['商品','详情','推荐','营业执照'],
            active:0,
        }
    },
    created() {
        this.itemInfo = this.$route.query.info;
        // console.log(this.itemInfo);
        let params = qs.stringify({
            city_id: '140100000000',
            province_id: '140',
            goods_id: this.itemInfo.goods_id,
            key: ''
        })
        http.getProData(params)
        .then((data)=>{
            console.log(data.data.datas);
        })
    },
    methods:{
        liHandler(index){
            this.active = index
        }
    },
    mounted(){
        let that = this;
        this.$nextTick(() => {
            let that = this;
            this.scroll = new BScroll(this.$refs.wrapper, {
                probeType:2,
            })
            // this.scroll.on('scroll',function(){
            //     if(that.scroll.y < -200){
            //         console.log(11);
            //     }
            // })
        })
    }
}
</script>


<style  scoped>
    .box{
        width: 7.5rem;
    }
    .header{
        width: 7.5rem;
        height: .92rem;
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
    }
    .header>a{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        width: .8rem;
        height: 1rem;
    }
    .header>a>img{
        width: .6rem;
        height: .6rem;
    }
    .header>ul{
        width: 5.25rem;
        height: .9rem;
        margin: 0 auto;
        display: flex;
    }
    .header>ul>li{
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: .9rem;
        border-bottom: .02rem solid #fff;
        font-size: 0.28rem;
    }
    .header>ul>.active{
        border-bottom-color: #333;   
    }
    .footer{
        width: 7.5rem;
        height: 1.02rem;
        background-color: #333;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 5;
    }
    .wrapper{
        width: 7.5rem;
        height: 11.4rem;
        position: fixed;
        top: .92rem;
        left: 0;
        bottom: 1.02rem;
    }
    .content{
        width: 100%;
    }
</style>