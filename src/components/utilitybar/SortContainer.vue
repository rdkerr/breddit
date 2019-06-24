<template>
  <div class="container">
    <div class="text">SORT</div>
    <SortSelector :active="active" :isOpen="sortOpen" v-on:clicked="toggleSort()" v-on:updateSort="updateSort"></SortSelector>
    <TimeSelector :isOpen="timeOpen" :show="show" v-on:clicked="toggleTime()"></TimeSelector>
  </div>
</template>

<script>
import SortSelector from './SortSelector'
import TimeSelector from './TimeSelector'
export default {
  name: 'SortContainer',
  components: {
    SortSelector,
    TimeSelector
  },
  data() {
    return {
      active: 'Best',
      sortOpen: false,
      timeOpen: false,
      show: false,
      activeTime: 'Past Hour',
      icons: {
        'Best': 'fa-bacon', 'Toasted': 'fa-fire-alt', 'Fresh': 'fa-mug-hot', 'Rising': 'fa-rocket'
      },
      selector: [
        'Best', 'Fresh', 'Toasted', 'Rising'
      ]
    }
  },
  methods: {
    toggleSort: function() {
      if(!this.sortOpen) {
        this.timeOpen = false
      }
      this.sortOpen = !this.sortOpen
    },
    toggleTime: function() {
      if(!this.timeOpen) {
        this.sortOpen = false
      }
      this.timeOpen = !this.timeOpen
    },
    updateSort: function(newActive) {
      this.active = newActive
      this.show = this.active === 'Toasted' || this.active === 'Rising'
      this.sortOpen = false
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
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
@media screen and (min-width: 600px) {
  .text {
    display: block;
    font-size: 14px;
  }
  .sort-content {
    left: 50px;
  }
}
</style>
