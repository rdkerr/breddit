<template>
  <div class="user-dropdown">
    <div class="icon-container">
      <i class="fa fa-ghost icon"></i>
    </div>
    <div class="text-container">
      <p class="user-name">username</p>
      <p class="user-name cookies-text"><span><i class="fa fa-cookie-bite cookie"></i></span>123 cookies</p>
    </div>
    <div class="sort-container">
      <i class="fa fa-sort-down sort"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
.cookie {
  color: rgb(255, 69, 0);
  padding-right: 2px;
}
.user-name {
  font-size: 14px;
  font-family: IBMPlexSans, Arial, sans-serif;
  margin: 0 0 0 0;
}
.cookies-text {
  color: #A8AAAB;
}
.icon-container {
  float: left;
  width: 32px;
  height: 36px;
}
.sort {
  margin: 5px 10px 0 0;
}
.sort-container {
  width: 26px;
  height: 36px;
  float: left;
  text-align: right;
  display: none;
}
.text-container {
  float: left;
  justify-content: center;
  width: 140px;
  height: 36px;
  display: none;
}
.user-dropdown{
  float: right;
  height: 36px;
  margin: 7px 10px 0 0;
  cursor: pointer;
  border: 1px solid white;
}
.user-dropdown:hover {
  border-radius: 4px;
  border: 1px solid rgb(237, 239, 241);
}
.text {
  font-family: IBMPlexSans, Arial, sans-serif;
  font-size: 14px;
  margin: 10px 0 0 0;
}
.icon {
  color: rgb(135, 138, 140);
  font-size: 22px;
  padding: 6px 0 6px 10px;
}
@media screen and (min-width: 1200px) {
  .text-container {
    display: block;
  }
}
@media screen and (min-width: 450px) {
  .sort-container {
    display: block;
  }
}
</style>
