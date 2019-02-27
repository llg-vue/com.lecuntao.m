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

        </div>
    </div>
</template>

<script>
import qs from 'qs';
export default {
    data(){
        return {
            title:"",
            gcid:""
        }
    },
    created(){
        this.title = this.$route.query.title;
        this.gcid = this.$route.query.id;
        
    },
    methods:{
        goBack(){
            this.$router.back()
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
    .top{
        width: 7.5rem;
        height: .96rem;
        font-size: 0.36rem;
        line-height: 0.96rem;
        text-align: center;
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
</style>
