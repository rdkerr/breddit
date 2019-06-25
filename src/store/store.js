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
    descriptions: {
      'Home': 'Your personal Breddit frontpage. Come here to check in with your favorite communities.', 'Popular': 'The best posts on Breddit for you, pulled from the most active communities on Breddit. Check here to see the most shared, upvoted, and commented content on the internet.', 'All': 'The most active posts from all of Breddit. Come here to see new posts rising and be a part of the conversation.', 'Fresh Bread': 'Did you make a video recently? Take a picture of some delicious bread? Try a new recipe? Find a relevant community and share it with them.', 'b/bred': 'For those who love bread but not spelling', 'b/catBread': 'Take a cat. Shove him in some bread....CATBREAD', 'b/JudgeBredd': 'Prepare your bread to be judged', 'b/HoneyOat': 'Declious. That is all', 'b/Sourdough': 'Keep your avocado toast away from here', 'b/wholeWheat': 'We don\'t half-ass our wheat here',
    },
  },
})
