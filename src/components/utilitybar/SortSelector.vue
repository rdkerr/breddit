<template>
  <div class="container">
    <div class="sort-selector" v-on:click="$emit('clicked')">
      <div class="sort-icon">
        <i class="fa" :class="icons[active]"></i>
      </div>
      <div class="current-sort-text">
        {{ active }}
      </div>
      <div class="sort-down">
        <i class="fa fa-sort-down carot"></i>
      </div>
    </div>
    <div v-if="isOpen" v-clickaway="() => $emit('clicked')" class="sort-content">
      <div v-for="key in selector" :key="key" class="content-item" v-on:click="$emit('updateSort', key)">
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
      icons: {
        'Best': 'fa-bacon', 'Toasted': 'fa-fire-alt', 'Fresh': 'fa-mug-hot', 'Rising': 'fa-rocket'
      },
      selector: [
        'Best', 'Fresh', 'Toasted', 'Rising'
      ]
    }
  },
  props: [
    'isOpen', 'active'
  ]
}
</script>

<style scoped>
.container {
  height: 100%;
}
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
  margin: auto;
}
.sort-content {
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  border: 1px rgb(237, 239, 241) solid;
  box-shadow: rgba(28, 28, 28, 0.2) 0px 2px 4px 0px;
  z-index: 3;
  position: absolute;
  width: 100px;
  transform: translateY(35px) translateX(-10px);
}
.sort-icon {
  padding-right: 5px;
  margin: auto 0;
}
.current-sort-text {
  padding-right: 5px;
  margin: auto 0;
  font-weight: 600;
  text-transform: uppercase;
  display: none;
}
.sort-down {
  margin: auto 0;
}
.carot {
  vertical-align: 9px;
}
@media screen and (min-width: 400px) {
  .current-sort-text {
    display: block;
  }
}
</style>
