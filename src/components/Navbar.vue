<template>
  <div id="navbar">
    <div class="home">
      <img src="../assets/breddit_logo.png" class="logo">
      <div class="logo-text">
        <p class="text">bredd<span class="i">i</span>t</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
@import "https://use.fontawesome.com/releases/v5.7.0/css/all.css";
.home {
  display: inline-block;
}
#navbar {
  height: 48px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-color: rgb(237, 239, 241);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  align-items: center;
}
.logo {
  height: 32px;
  width: 32px;
  padding: 8px 8px 8px 0;
  float: left;
}
.logo-text {
  float: left;
}
.text {
  font-size: 24px;
  font-weight: 525;
  letter-spacing: -1px;
  font-family: IBMPlexSans, Arial, sans-serif;
  margin: 12px 20px 8px 0;
  display: none;
}
@media screen and (min-width: 1070px) {
  .text {
    display: block;
  }
}
.i {
  color: rgb(255, 69, 0);
  position: relative;
}
.i:before {
  content: "ı";
  position: absolute;
  color: black;
}
</style>
