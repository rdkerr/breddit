<template>
  <div>
    <div class="launch">
      <div class="icon-container">
        <i class="fa fa-pepper-hot icon"></i>
      </div>
      <div class="icon-container">
        <i class="fa fa-hamburger icon"></i>
      </div>
      <div class="icon-container">
        <i class="fa fa-shopping-cart icon"></i>
      </div>
    </div>
    <div class="compose">
      <div class="icon-container">
        <i class="fa fa-envelope icon"></i>
      </div>
      <div class="icon-container">
        <i class="fa fa-comment-dots icon"></i>
      </div>
      <div class="icon-container">
        <i class="fa fa-scroll blue icon"></i>
      </div>
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
  max-width: 112px;
  margin-top: 6px;
  border-right: 1px solid rgb(230, 230, 230);
  display: none;
  padding: 0 5px;
}
.compose {
  float: left;
  max-width: 112px;
  margin-top: 6px;
  display: none;
  padding: 0 5px;
}
.icon {
  font-size: 16px;
  vertical-align: middle;
  line-height: 36px;
}
.icon-container {
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  text-align: center;
}
.icon-container:hover {
  background-color: rgba(26, 26, 27, 0.1);
}
.blue {
  color: #0079d3;
}
@media screen and (min-width: 800px) {
  .launch {
    display: block;
  }
}
@media screen and (min-width: 600px) {
  .compose {
    display: block;
  }
}
</style>
