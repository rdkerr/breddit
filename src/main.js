/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
import Vue from 'Vue'
import VueClickaway from 'vue-clickaway2'
import App from './App.vue'
import { store } from './store/store'

Vue.directive('clickaway', VueClickaway.directive)
Vue.use(require('vue-moment'))

new Vue({
  store: store,
  el: '#app',
  render: (h) => h(App),
})
