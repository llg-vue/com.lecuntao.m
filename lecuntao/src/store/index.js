import Vue from "vue";
import Vuex from "vuex";
import home from "./home"
Vue.use(Vuex);

let state = {}
let actions = {}
let mutations = {}
let getters = {}

//创建公共的仓库
const store = new Vuex.Store({
      state,
      actions,
      mutations,
      getters,
      modules: {
        home
      }
})



export default store;
