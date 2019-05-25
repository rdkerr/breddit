<template>
  <div class="nav-dropdown">
    <div class="main-icon-container">
      <i class="fa fa-rocket main-icon"></i>
    </div>
    <div class="text-container">
      <p class="text">Home</p>
    </div>
    <div class="sort-container">
      <i class="fa fa-sort-down sort"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown'
}
</script>

<style scoped>
.main-icon-container {
  float: left;
  width: 40px;
  height: 34px;
}
.sort {
  margin: 5px 10px 0 0;
}
.sort-container {
  width: 56px;
  height: 34px;
  float: left;
  text-align: right;
}
.text-container {
  float: left;
  justify-content: center;
  width: 172px;
  height: 34px;
  display: none;
}
.nav-dropdown{
  float: left;
  height: 34px;
  margin: 7px 0;
  cursor: pointer;
}
.nav-dropdown:hover {
  border-radius: 4px;
  border: 1px solid rgb(237, 239, 241);
}
.text {
  font-family: IBMPlexSans, Arial, sans-serif;
  font-size: 14px;
  margin: 10px 0 0 0;
}
.main-icon {
  color: #0079d3;
  font-size: 22px;
  padding: 6px 0 6px 10px;
}
@media screen and (min-width: 996px) {
  .text-container {
    display: block;
  }
}

</style>
