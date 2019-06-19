<template>
  <div class="container">
    <div v-if="show" class="time-selector" v-on:click="$emit('clicked')">
      <div class="current-time-text">
        {{ activeTime }}
      </div>
      <div class="sort-down">
        <i class="fa fa-sort-down carot"></i>
      </div>
    </div>
    <div v-if="isOpen && show" v-clickaway="() => $emit('clicked')" class="time-content">
      <div v-for="key in times" :key="key" class="content-item" v-on:click="activeTime = key">
        <div>{{key}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeSelector',
  data() {
    return {
      activeTime: 'Past Hour',
      times: [
        'Past Hour', 'Past 24 Hours', 'Past Week', 'Past Month', 'Past Year', 'Dawn of Time'
      ]
    }
  },
  props: [
    'isOpen', 'show'
  ],
  methods: {
    check: function() {
      return this.active === 'Toasted' || this.active === 'Rising'
    }
  }
}
</script>

<style scoped>
.time-content {
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  border: 1px rgb(237, 239, 241) solid;
  box-shadow: rgba(28, 28, 28, 0.2) 0px 2px 4px 0px;
  z-index: 3;
  position: absolute;
  width: 100px;
  transform: translateY(35px) translateX(10px);
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
.time-selector {
  float: left;
  display: flex;
  height: 100%;
  color: #0079d3;
  padding-left: 10px;
}

.current-time-text {
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

}
</style>
