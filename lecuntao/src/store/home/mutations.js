export default {
    handleHomeData(state,data){
        state.banners = data.adv;
        state.navList = data.platform.list;
        state.le6jiBg = data.le6ji.le6ji_img;
        state.teseguanBg = data.feature.feature_img
        state.le6ji = data.le6ji.recommend_goods;
        state.teseguan = data.feature.recommend_goods;
        state.tabBar = data.category;
        state.categoryGoods = data.category_goods
    },
    handleHotData(state,params){
        state.hotList = [...state.hotList,...params.list]
        state.page++;
        // console.log(state.hotList)
    }
}