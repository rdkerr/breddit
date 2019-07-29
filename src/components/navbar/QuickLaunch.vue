<template>
  <div class="launch">
    <a href="#">
      <i class="fa fa-pepper-hot icon"></i>
    </a>
    <a href="#">
      <i class="fa fa-shopping-cart icon"></i>
    </a>
    <a href="#">
      <i class="fa fa-hamburger icon"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'QuickLaunch'
}
</script>

<style scoped>
.launch {
  max-width: 112px;
  border-right: 1px solid rgb(230, 230, 230);
  display: none;
  padding: 0 5px;
}
.icon {
  font-size: 16px;
  vertical-align: middle;
  line-height: 36px;
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  text-align: center;
  color: black;
}
.icon:hover {
  background-color: rgba(26, 26, 27, 0.1);
}
@media screen and (min-width: 800px) {
  .launch {
    display: block;
  }
}
</style>
