import Vue from 'Vue'
import VueClickaway from 'vue-clickaway'
import App from './App.vue'

Vue.directive('clickaway', VueClickaway.directive)

new Vue({
  el: '#app',
  render: h => h(App)
})
