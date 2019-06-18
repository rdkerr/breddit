<template>
  <div class="utilityBar">
    <ViewSelector></ViewSelector>
    <div class="separator"></div>
    <SortSelector></SortSelector>
  </div>
</template>

<script>
import ViewSelector from './ViewSelector'
import SortSelector from './SortSelector'
export default {
  name: 'UtilityBar',
  components: {
    ViewSelector,
    SortSelector
  }
}
</script>

<style scoped>
.sort-selctor {
  display: flex;
  flex-direction: row;
}
.separator {
  height: 22px;
  width: 1px;
  background: rgb(135, 138, 140);
  float: left;
  margin: 7px 10px 0 0px;
}
.utilityBar {
  height: 40px;
  width: 100%;
  background: white;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
}

</style>
