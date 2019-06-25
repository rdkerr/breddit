/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
import Vue from 'Vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    current: 'Home',
    icons: {
      'Home': 'fa-couch', 'Popular': 'fa-pepper-hot', 'All': 'fa-shopping-cart', 'Fresh Bread': 'fa-hamburger', 'User Settings': 'fa-ghost', 'Messages': 'fa-envelope', 'Create Toast': 'fa-scroll', 'Create Bakery': 'fa-scroll', 'Sipz': 'fa-glass-whiskey', 'Bro': 'fa-user-ninja', 'b/bred': 'fa-air-freshener', 'b/catBread': 'fa-burn', 'b/JudgeBredd': 'fa-biohazard', 'b/HoneyOat': 'fa-bone', 'b/Sourdough': 'fa-bomb', 'b/wholeWheat': 'fa-bolt', 'Give Sip': 'fa-glass-whiskey', 'Share': 'fa-share', 'Save': 'fa-bookmark', 'Hide': 'fa-eye-slash', 'Report': 'fa-angry',
    },
    view: 'Classic',
  },
})
