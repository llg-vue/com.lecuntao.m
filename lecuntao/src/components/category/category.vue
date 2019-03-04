<template>
    <div class="cate">
        <div class="top">
            <input type="text" placeholder="输入商品名称">
            <span>取消</span>
        </div>
        <div class="main">
            <div class="mainNav">
                <ul>
                    <li v-for="(item,index) in leftList" :key="index" 
                        :id='item.gc_id'
                        @click="clickLi(item.gc_id)"
                        :class="item.gc_id === gc_id ?'active':''"
                    ><a href="##">{{item.gc_name}}</a></li>
                </ul>
            </div>
            <div class="rightPro">
                <ul>
                    <li v-for="(item,index) in proList" :key="index" @click="clickPro(item)">
                        <img :src="item.cate_img" alt="">
                        <h2>
                            <a href="#" :id="item.gc_id">{{item.gc_name}}</a>
                        </h2>
                    </li>
                </ul>
            </div>
        </div>
        <Footer-com/>
    </div>
</template>
<script>
import qs from 'qs';
import http from '../../apis/category.js';
import Footer from '../common/footer';
export default {
    components: {
        "Footer-com":Footer
    },
    data(){
        return{
            leftList:[],
            gc_id:"256",
            proList:[]
        }
    },
    created(){
        http.listList()
        .then((data)=>{
            console.log(data);
            this.leftList = data.datas;
        })
        this.getPro();
    },
    methods:{
        clickPro(item){
            this.$router.push({path:"/ProList",query:{id:item.gc_id,title:item.gc_name}})
        },
        clickLi(id){
            this.gc_id = id;
            this.getPro();
        },
        getPro(){
            http.rightPro({gc_id:this.gc_id})
            .then((data)=>{
                // console.log(data);
                this.proList = data.datas;
            })
        }
    }
}
</script>
<style lang="" scoped>
    a,abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video{
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        word-wrap: break-word;
    }
    .top{
        width: 7.5rem;
        height: 1.2rem;
        position: fixed;
        border-bottom: 0.02rem solid #cccccc;
        background-color: #fff;
        width: 100%;
        padding-left: 5%;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
    }
    .top>input{
        width: 85%;
        height: 0.6rem;
        line-height: 0.6rem;
        background-color: #f2f2f2;
        border-radius: 0.3rem;
        font-size: 0.3rem;
        vertical-align: top;
        border: none;
        padding-left: 5%;
        margin-top: 0.3rem;
        float: left;
        outline:0;
    }
    .top>span{
        font-size: 0.3rem;
        float: left;
        line-height: 1.2rem;
        margin-left: 0.2rem;
    }
    .main{
        width: 7.5rem;
        /* margin-top: 1.2rem; */
        background: #cccccc;
        
    }
    .mainNav{
        width: 1.75rem;
        position: fixed;
        bottom: 1rem;
        top: 1.2rem;
        overflow: scroll;
    }
    .mainNav>ul{
        width: 100%;
        background-color: #f0f0f0;
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        word-wrap: break-word;
        overflow-y: scroll;
    }
    .mainNav>ul>li{
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.3rem;
        text-align: center;
        color: #4c4c4c;
        overflow: hidden;
    }
     .mainNav>ul>li>a{
        color: #333;
        text-decoration: none;
        outline: none;
     }
     .mainNav>ul>.active{
        background-color: #fff;
     }
     .mainNav>ul>.active a{
         color: red;
         -webkit-tap-highlight-color: transparent;
     }
    .rightPro{
        position: fixed;
        margin-left: 1.75rem;
        bottom: 1rem;
        top: 1.2rem;
        height: 100%;
        background-color: #fff;
        width: 5.75rem;
    }
    .rightPro>ul{
        overflow: hidden;
    }
    .rightPro>ul>li{
        width: 1.81rem;
        font-size: 0.26rem;
        text-align: center;
        float: left;
    }
    .rightPro>ul>li>img{
        width: 1.81rem;
        height: 1.81rem;
    }
    a{
        color: #333;
        text-decoration: none;
        outline: none; 
    }
    .rightPro>ul>li>h2{
            line-height: 0.8rem;
            height: 0.8rem;
            color: #4c4c4c;
    }
</style>