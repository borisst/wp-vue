import Vue from 'vue'
import VueRouter from 'vue-router';
import moment from 'moment';

import App from './App.vue'
import { routes } from "./routes";
import { store } from './store/store';

Vue.use(VueRouter);
const router = new VueRouter({
  mode:'history',
  routes
});

Vue.filter("created_at", function(date) {
  return moment(date).fromNow();
});



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
