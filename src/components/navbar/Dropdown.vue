<template>
  <div class="nav-dropdown" v-on:click="open= !open" v-bind:class="{corners: open }">
    <div class="main-icon-container">
      <i class="fa fa-couch main-icon"></i>
    </div>
    <div class="text-container">
      <p class="text">Home</p>
    </div>
    <div class="sort-container">
      <i class="fa fa-sort-down sort"></i>
    </div>
    <div v-if="open" class="content">
      <input v-model:="filter" placeholder="Filter">
      <p>{{ filter }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  data() {
    return {
      open: false,
      filter: '',
      feed: {
        'REDDIT FEEDS': ['Home', 'Popular', 'All', 'Fresh Bread'],
        'FAVORITES': ['b/bred', 'b/HoneyOat', 'b/Sourdough', 'b/wholeWheat'],
        'MY BAKERIES': ['b/bred', 'b/catBread', 'b/crumz', 'b/HoneyOat', 'b/raisinBread', 'b/Sourdough', 'b/wholeWheat'],
        'OTHER': ['User Settings', 'Messages', 'Create Toast', 'Create Bakery', 'Crumbz', 'Toastie']
      }
    }
  }
}
</script>

<style scoped>
.corners {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.content {
  cursor: crosshair;
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
.text-container {
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
.text {
  font-family: IBMPlexSans, Arial, sans-serif;
  font-size: 14px;
  margin: 10px 0 0 0;
}
.main-icon {
  color: #0079d3;
  font-size: 22px;
  padding: 6px;
}
@media screen and (min-width: 1070px) {
  .content {
    left: 146px;
  }
}
@media screen and (min-width: 996px) {
  .text-container {
    display: block;
  }
}
@media screen and (min-width: 450px) {
  .sort-container {
    display: block;
  }
}
</style>
