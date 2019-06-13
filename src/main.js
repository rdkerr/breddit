/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
import Vue from 'Vue'
import VueClickaway from 'vue-clickaway2'
import App from './App.vue'

Vue.directive('clickaway', VueClickaway.directive)

new Vue({
  el: '#app',
  render: (h) => h(App),
})
