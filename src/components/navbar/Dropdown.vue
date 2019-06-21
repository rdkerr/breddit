<template>
  <div class="nav-dropdown" :class="dropdownOpen ? 'corners' : ''">
    <div v-on:click="$emit('clicked')">
      <div class="main-icon-container">
        <i class="fa main-icon" :class=icons[currentBakery]></i>
      </div>
      <div class="current-text-container">
        <p class="current-text">{{ currentBakery }}</p>
      </div>
      <div class="sort-container">
        <i class="fa fa-sort-down sort"></i>
      </div>
    </div>
    <div v-if="dropdownOpen" v-clickaway="() => $emit('clicked')" class="content">
      <input
        v-bind:value="filterString"
        v-on:input="filterString = $event.target.value" placeholder="Filter"
        class ="filter"
      >
      <div v-for="key in keys" :key="key">
        <div class="category" v-if="filterFeeds(key).length > 0">{{ key }}</div>
          <div
            class="text"
            v-for="(value,index) in filterFeeds(key)"
            :key="index"
            v-on:click="$emit('updateBakery', value)"
          >
            <div class="icon-container">
              <i class="fa icon" :class="icons[value]"></i>
            </div>
            {{value}}
            <i v-if="key == keys[1]" class="fa fa-flag icon right" v-on:click.stop="feed[keys[1]].splice(index,1)"></i>
            <i v-else-if="key == keys[2] && feed[keys[1]].includes(value)" class="fa fa-flag icon right" v-on:click.stop="feed[keys[1]].splice(feed[keys[1]].indexOf(value),1)"></i>
            <i v-else-if="key == keys[2]" class="fa fa-flag icon right disabled" v-on:click.stop="feed[keys[1]].push(value)"></i>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: ['dropdownOpen', 'currentBakery'],
  data() {
    return {
      current: 'Home',
      filterString: '',
      keys: [
        'BREDDIT FEEDS',
        'FAVORITES',
        'MY BAKERIES',
        'OTHER'
      ],
      icons: {
        'Home': 'fa-couch', 'Popular': 'fa-pepper-hot', 'All': 'fa-shopping-cart', 'Fresh Bread': 'fa-hamburger', 'User Settings': 'fa-ghost', 'Messages': 'fa-envelope', 'Create Toast': 'fa-scroll', 'Create Bakery': 'fa-scroll', 'Sipz': 'fa-glass-whiskey', 'Bro': 'fa-user-ninja', 'b/bred': 'fa-air-freshener', 'b/catBread': 'fa-burn', 'b/JudgeBredd': 'fa-biohazard', 'b/HoneyOat': 'fa-bone', 'b/Sourdough': 'fa-bomb', 'b/wholeWheat': 'fa-bolt'
      },
      feed: {
        'BREDDIT FEEDS': ['Home', 'Popular', 'All', 'Fresh Bread'],
        'FAVORITES': ['b/JudgeBredd', 'b/Sourdough', 'b/wholeWheat'],
        'MY BAKERIES': ['b/bred', 'b/catBread', 'b/JudgeBredd', 'b/HoneyOat', 'b/Sourdough', 'b/wholeWheat'],
        'OTHER': ['User Settings', 'Messages', 'Create Toast', 'Create Bakery', 'Sipz', 'Bro']
      }
    }
  },
  methods: {
    filterFeeds: function(key) {
      let that = this;
      return that.feed[key].filter(function(bread) {
        return that.filterString === '' ? true : bread.toLowerCase().includes(that.filterString.toLowerCase());
      })
    },
    print: function() {
      console.log('hi')
    }
  }
}
</script>

<style scoped>
.icon-container {
  width: 40px;
  display: inline-block;
  text-align: center;
}
.right {
  float: right;
}
.text {
  font-family: IBMPlexSans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: rgb(28, 28, 28);
  padding: 0 10px;
}
.text:hover{
  background-color: rgb(246, 247, 248);
  cursor: pointer;
}
.category {
  padding: 10px 24px 8px 24px;
  color: rgb(135, 138, 140);
  display: block;
  font-family: IBMPlexSans, Arial, sans-serif;
  font-size: 10px;
}
.filter {
  margin: 16px 16px 0 16px;
  width: calc(100% - 40px);
}
input {
  border: 1px solid rgb(237, 239, 241);
  background-color: rgb(246, 247, 248);
  height: 32px;
  margin-top: 0px;
  padding-left: 5px;
  padding-bottom: 0px;
}
input:focus {
  border: 1px solid #0079d3;
  outline-width: 0;
  background-color: white;
}
.corners {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.content {
  cursor: default;
  position: fixed;
  width: 268px;
  max-height: 482px;
  background-color: #fff;
  top: 41px;
  left: 60px;
  overflow: show;
  border-left: 1px solid rgb(237, 239, 241);
  border-right: 1px solid rgb(237, 239, 241);
  border-bottom: 1px solid rgb(237, 239, 241);
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  overflow: scroll;
  overflow-x: hidden;
  padding-bottom: 15px;
}
.main-icon-container {
  float: left;
  width: 40px;
  height: 36px;
}
.sort {
  margin: 5px 10px 0 0;
}
.sort-container {
  width: 56px;
  height: 36px;
  float: left;
  text-align: right;
  display: none;
}
.current-text-container {
  float: left;
  justify-content: center;
  width: 172px;
  height: 36px;
  display: none;
}
.nav-dropdown{
  height: 35px;
  margin: 0 10px 0 0;
  cursor: pointer;
  border: 1px solid white;
}
.nav-dropdown:hover {
  border-radius: 4px;
  border: 1px solid rgb(237, 239, 241);
}
.current-text {
  font-family: IBMPlexSans, Arial, sans-serif;
  font-size: 14px;
  margin: 10px 0 0 0;
}
.main-icon {
  color: #0079d3;
  font-size: 22px;
  padding: 6px;
}
.icon {
  color: #0079d3;
  font-size: 20px;
  padding: 5px;
}
.sub-icon {
  color: #0079d3;
  font-size: 20px;
  padding-right: 8px;
}
.disabled {
  color: rgb(223, 222, 222);
}
@media screen and (min-width: 1070px) {
  .content {
    left: 146px;
  }
}
@media screen and (min-width: 996px) {
  .current-text-container {
    display: block;
  }
}
@media screen and (min-width: 450px) {
  .sort-container {
    display: block;
  }
}
</style>
