<template>
  <div class="container">
    <div class="text">SORT</div>
    <div class="sort-selector" v-on:click="sortOpen = !sortOpen" v-clickaway="() => $emit('clicked')">
      <div class="sort-icon">
        <i class="fa fa-otter"></i>
      </div>
      <div class="current-sort-text">
        {{ active }}
      </div>
      <div class="sort-down">
        <i class="fa fa-sort-down carot"></i>
      </div>
    </div>
    <div v-if="sortOpen" v-clickaway="() => $emit('clicked')" class="sort-content">
      <div v-for="key in selector" :key="key" class="content-item" v-on:click="active = key">
        <div class="icon-container">
              <i class="fa icon" :class="icons[key]"></i>
            </div>
        <div>{{key}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortSelector',
  data() {
    return {
      active: 'Fresh',
      sortOpen: false,
      icons: {
        'Best': 'fa-otter', 'Toasted': 'fa-fire-alt', 'Fresh': 'fa-bacon', 'Rising': 'fa-rocket'
      },
      selector: [
        'Fresh', 'Best', 'Toasted', 'Rising'
      ]
    }
  }
}
</script>

<style scoped>
.content-item {
  padding: 5px;
  border-top: 1px rgb(237, 239, 241) solid;
  font-size: 16px;
  color: rgb(124, 124, 124);
}
.content-item:hover {
  background: rgb(229, 241, 250);
}
.icon-container {
  float: left;
  padding-right: 5px;
  width: 20px;
}
.sort-selector {
  float: left;
  display: flex;
  height: 100%;
  color: #0079d3;
}
.sort-content {
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  border: 1px rgb(237, 239, 241) solid;
  box-shadow: rgba(28, 28, 28, 0.2) 0px 2px 4px 0px;
  z-index: 3;
  clear: both;
  position: relative;
  left: 50px;
  width: 100px;
}
.text {
  font-size: 16px;
  color: rgb(124, 124, 124);
  margin-top: 10px;
  margin-right: 12px;
  font-weight: 700;
  float: left;
}
.sort-icon {
  padding-right: 5px;
  margin: auto 0;
}
.current-sort-text {
  padding-right: 5px;
  margin: auto 0;
  text-transform: uppercase;
}
.sort-down {
  margin: auto 0;
}
.carot {
  vertical-align: 9px;
}
</style>
