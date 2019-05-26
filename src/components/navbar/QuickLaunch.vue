<template>
  <div class="launch">
    <div class="icon-container">
      <i class="fa fa-pepper-hot icon"></i>
    </div>
    <div class="icon-container">
      <i class="fa fa-pepper-hot icon"></i>
    </div>
    <div class="icon-container">
      <i class="fa fa-pepper-hot icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuickLaunch'
}
</script>

<style scoped>
.launch {
  float: left;
  max-width: 225px;
  margin-top: 6px;
}
.icon {
  font-size: 16px;
  padding: 8px;
}
.icon-container {
  float: left;
  width: 40px;
  height: 36px;
  margin-right: 8px;
  background-color: blue;
}
.icon-container:hover {
  background-color: aquamarine;
}

</style>
