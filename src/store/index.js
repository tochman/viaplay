import Vue from "vue";
import Vuex from "vuex";

import viaplayService from "@/services/viaplayService.js";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {}
  },
  mutations: {
    SET_PRODUCTS(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    fetchData({ commit }) {
      viaplayService.getData()
      .then((response)=> response.json())
      .then((data)=>commit("SET_PRODUCTS", data));
    }
  },
  getters:{
    getProducts: function(state){
      if (state.data._embedded){
        return state.data._embedded["viaplay:blocks"][0]._embedded["viaplay:products"];
      }
      else{
        return [];
      }
    }
  }
});
