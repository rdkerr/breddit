/* eslint-disable linebreak-style */
/* eslint-disable semi */
import Vue from 'vue'
import VueClickaway from 'vue-clickaway2'
import VueRouter from 'vue-router'
import App from './App.vue'
import {store} from './store/store'

Vue.directive('clickaway', VueClickaway.directive)
Vue.use(require('vue-moment'))
Vue.use(VueRouter)

const routes = [

];

const router = new VueRouter({
  routes,
});

new Vue({
  store,
  router,
  el: '#app',
  render: (h) => h(App),
})
