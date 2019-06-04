<template>
  <div class="nav-dropdown" v-bind:class="{corners: open }">
    <div v-on:click="open= !open">
      <div class="main-icon-container">
        <i class="fa fa-couch main-icon"></i>
      </div>
      <div class="current-text-container">
        <p class="current-text">{{ current }}</p>
      </div>
      <div class="sort-container">
        <i class="fa fa-sort-down sort"></i>
      </div>
    </div>
    <div v-if="open" class="content">
      <input
        v-bind:value="filter"
        v-on:input="filter = $event.target.value" placeholder="Filter"
        class ="filter"
      >
      <p>{{ filter }}</p>
      <div v-for="key in keys" :key="key">
        <div class="category">{{ key }}</div>
          <div
            class="text"
            v-for="(value,index) in feed[key]"
            :key="index"
            v-on:click="current = value"
          >
            <i class="fa icon" :class="icons[value]"></i>
            {{value}}
            <i class="fa fa-bread-slice icon right"></i>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data() {
    return {
      open: false,
      current: 'Home',
      filter: '',
      keys: [
        'BREDDIT FEEDS',
        'FAVORITES',
        'MY BAKERIES',
        'OTHER'
      ],
      icons: {
        'Home': 'fa-couch', 'Popular': 'fa-pepper-hot', 'All': 'fa-shopping-cart', 'Fresh Bread': 'fa-hamburger', 'User Settings': 'fa-ghost', 'Messages': 'fa-envelope', 'Create Toast': 'fa-scroll',
        'Create Bakery': 'fa-scroll', 'Crumbz': 'fa-fire-alt', 'Toastie': 'fa-dragon'

      },
      feed: {
        'BREDDIT FEEDS': ['Home', 'Popular', 'All', 'Fresh Bread'],
        'FAVORITES': ['b/bred', 'b/JudgeBredd', 'b/Sourdough', 'b/wholeWheat'],
        'MY BAKERIES': ['b/bred', 'b/catBread', 'b/JudgeBredd', 'b/HoneyOat', 'b/raisinBread', 'b/Sourdough', 'b/wholeWheat'],
        'OTHER': ['User Settings', 'Messages', 'Create Toast', 'Create Bakery', 'Crumbz', 'Toastie']
      }
    }
  }
}
</script>

<style scoped>
.right {
  float: right;
}
.text {
  font-family: IBMPlexSans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: rgb(28, 28, 28);
}
.category {
  padding: 0 24px 8px 24px;
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
  position: absolute;
  width: 268px;
  height: 482px;
  background-color: #fff;
  top: 41px;
  left: 60px;
  z-index: 1;
  overflow: show;
  border-left: 1px solid rgb(237, 239, 241);
  border-right: 1px solid rgb(237, 239, 241);
  border-bottom: 1px solid rgb(237, 239, 241);
  overflow: scroll;
  overflow-x: hidden;
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
  padding: 6px;
}
.sub-icon {
  color: #0079d3;
  font-size: 20px;
  padding-right: 8px;
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
