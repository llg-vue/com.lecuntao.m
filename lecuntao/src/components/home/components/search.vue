<template>
    <div id="mask">
        <div class="search-wrap">
            <i @click="handleClose()" class="search-close"><img src="../../../../static/img/bot-icons/iclose.png"></i>
            <div class="inp-wrap">
                <div class="inp-left">
                    <span>商品</span>
                    <i class="inp-down"><img src="../../../../static/img/bot-icons/icon_shaixuan_arrowdown.png"></i>
                </div>
                <div class="inp-center">
                    <input class="search-ipt" type="text" placeholder="输入商品名称">
                    <i class="inp-close"><img src="../../../../static/img/bot-icons/icon_sousuo_close.png"></i>
                </div>
            </div>
            <span class="search-btn">搜索</span>
        </div>
        <div class="hotkey">
            <h2>
                <i>Hot</i><span>热门搜索</span>
            </h2>
            <div class="inp_mask_txt">
                <a href="javascript:;">年货</a>
                <a href="javascript:;">乐6集</a>
                <a href="javascript:;">米面</a>
                <a href="javascript:;">可乐</a>
                <a href="javascript:;">手机</a>
                <a href="javascript:;">洗衣粉</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        handleClose(){
            this.$router.back();
        }
    },
}
</script>
<style lang="" scoped>
    #mask{
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .search-wrap {
        background-color: #fff;
        width: 100%;
        height: 0.8rem;
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
    }
    .inp-center{
        padding-top: 5px;
    }
    .search-close {
        width: 10%;
        float: left;
        height: 0.8rem;
    }
    .search-close>img{
        width: 0.24rem;
        height: 0.24rem;
        display: block;
        margin-left: 0.25rem;
        margin-top: 0.42rem;
    }
    .inp-wrap {
        width: 76%;
        background-color: #f2f2f2;
        position: relative;
        float: left;
        background: #f2f2f2;
        margin-top: 0.2rem;
        border-radius: 0.7rem;
    }
    .inp-down {
        width: 0.3rem;
        height: 0.3rem;
        float: left;
        background-size: contain;
        margin-top: 0.06rem;
        margin-left: 6%;
    }
    .inp-down>img{
        width: 100%;
        height: 100%;
    }
    .search-ipt {
        width: 58%;
        padding-left: 4%;
        height: 0.4rem;
        background-color: #f2f2f2;
        font-size: 0.3rem;
        vertical-align: top;
        border: none;
        float: left;
    }
    .inp-close {
        float: right;
        width: 0.2rem;
        height: 0.2rem;
        background-size: contain;
        margin-top: 0.12rem;
        margin-right: 0.2rem;
    }
    .inp-close>img{
        width: 100%;
        height: 100%;
    }
    .search-btn {
        font-size: 0.28rem;
        line-height: 0.8rem;
        float: left;
        margin-left: 3%;
        margin-top: 0.12rem;
        margin-right: 3%;
    }
    .inp-left{
        display: flex;
        justify-content: space-between;
        width: 30%;
        float: left;
        line-height: 0.4rem;
        font-size: 0.32rem;
        color: #808080;
        overflow: hidden;
        float: left;
        padding-left: 6%;
        margin-top: 1.9%;
        padding-right: 1.5%;
        border-right: 0.02rem solid #ccc;
        margin-bottom: 0.12rem;
    }
    .hotkey {
        padding-top: 1rem;
        padding-bottom: 0.2rem;
    }
    .hotkey h2 {
        font-size: 0.3rem;
        padding-left: 0.22rem;
        padding-bottom: 0.1rem;
        font-weight: normal;
    }
    .hotkey h2 i {
        font-size: 0.26rem;
        color: #f81234;
        font-weight: 600;
        font-family: "微软雅黑";
    }
    .inp_mask_txt {
        padding-left: 0.2rem;
    }
    .inp_mask_txt a {
        padding: 0.1rem 0.3rem;
        border-radius: 0.45rem;
        display: inline-block;
        float: left;
        font-size: 0.28rem;
        border: 0.02rem solid #959595;
        margin-right: 0.2rem;
        margin-bottom: 0.2rem;
    }
</style>