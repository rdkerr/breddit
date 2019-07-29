<template>
  <a href="#">
    <img src="../../assets/breddit_logo.png" class="brand-logo">
    <h1 class="text">bredd<span class="brand-i">i</span>t</h1>
  </a>
</template>

<script>
export default {
  name: 'Brand'
}
</script>

<style scoped>
.brand-logo {
  height: 32px;
  width: 32px;
  padding: 8px 8px 8px 0;
  float: left;
}
.text {
  float: left;
  font-size: 24px;
  font-weight: 525;
  letter-spacing: -1px;
  margin: 12px 20px 8px 0;
  display: none;
  color: #000;
}
.brand-i {
  color: rgb(255, 69, 0);
  position: relative;
}
.brand-i:before {
  content: "ı";
  position: absolute;
  color: black;
  left: -1px;
}
@media screen and (min-width: 1070px) {
  .text {
    display: block;
  }
}
</style>
