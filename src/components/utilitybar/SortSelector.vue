<template>
  <div class="container">
    <div class="text">SORT</div>
    <div class="sort-selector" v-on:click="sortOpen = !sortOpen" v-clickaway="() => $emit('clicked')">
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
    <div v-if="check()" class="time-selector" v-on:click="timeOpen = !timeOpen" v-clickaway="() => $emit('clicked')">
      <div class="current-sort-text">
        {{ activeTime }}
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
    <div v-if="timeOpen && check()" v-clickaway="() => $emit('clicked')" class="time-content">
      <div v-for="key in times" :key="key" class="content-item" v-on:click="active = key">
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
      active: 'Best',
      sortOpen: false,
      timeOpen: false,
      activeTime: 'Past Hour',
      icons: {
        'Best': 'fa-bacon', 'Toasted': 'fa-fire-alt', 'Fresh': 'fa-mug-hot', 'Rising': 'fa-rocket'
      },
      selector: [
        'Best', 'Fresh', 'Toasted', 'Rising'
      ],
      times: [
        'Past Hour', 'Past 24 Hours', 'Past Week', 'Past Month', 'Past Year', 'Dawn of Time'
      ]
    }
  },
  methods: {
    check: function() {
      return this.active === 'Toasted' || this.active === 'Rising'
    }
  }
}
</script>

<style scoped>
.time-content {
  padding-left: 15px;
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
}
.time-selector {
  float: left;
  display: flex;
  height: 100%;
  color: #0079d3;
  padding-left: 10px;
}
.sort-content {
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  border: 1px rgb(237, 239, 241) solid;
  box-shadow: rgba(28, 28, 28, 0.2) 0px 2px 4px 0px;
  z-index: 3;
  clear: both;
  position: relative;
  width: 100px;
}
.text {
  font-size: 16px;
  color: rgb(124, 124, 124);
  margin-top: 10px;
  margin-right: 12px;
  font-weight: 700;
  float: left;
  display: none;
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
}
.sort-down {
  margin: auto 0;
}
.carot {
  vertical-align: 9px;
}
@media screen and (min-width: 600px) {
  .text {
    display: block;
  }
  .sort-content {
    left: 50px;
  }
}
</style>
