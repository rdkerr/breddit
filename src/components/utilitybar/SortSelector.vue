<template>
  <div class="container">
    <div class="text">SORT</div>
    <div class="sort-selector">
      <div class="sort-icon">
        <i class="fa fa-rocket"></i>
      </div>
      <div class="current-sort-text">
        BEST
      </div>
      <div class="sort-down">
        <i class="fa fa-sort-down"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SortSelector',
  data() {
    return {
      active: 'Classic'
    }
  },
  methods: {
    getView: function(newActive) {
      this.active = newActive
    },
    getActive: function(current) {
      return current !== this.active
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
.sort-selctor {
  display: flex;
  flex-direction: row;
}
.text {
  font-size: 16px;
  color: rgb(124, 124, 124);
  margin-top: 10px;
  margin-right: 12px;
  font-weight: 700
}
</style>
