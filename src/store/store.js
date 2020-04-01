import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    url: '',
    urlFormShow: true,
    loadingBtn: false,
  },
  mutations:{
    setURL: (state,url) => {
      state.url = url
    }
  }
});
