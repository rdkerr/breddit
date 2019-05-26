<template>
  <div class="home">
    <img src="../assets/breddit_logo.png" class="logo">
    <div class="logo-text">
      <p class="text">bredd<span class="i">i</span>t</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Brand'
}
</script>

<style scoped>
.home {
  float: left;
  cursor: pointer;
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
