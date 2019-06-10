<template>
  <div class="body">
    <div class="banner">
      THIS IS THE BANNER
    </div>
    <div class="utilityBar">
      VIEW: STUFF
    </div>
    <div class="container">
      <div class="postList">
        POSTS
      </div>
      <div class="sidebar">
        SIDEBAR
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Body'
}
</script>

<style scoped>
.container {
  height: 100%;
  background: yellow;
  width: 100%;
  display: inline-block;
}
.body {
  height: calc(100vh - 49px);
  background: #DAE0E6;
  overflow: scroll;
  overflow-x: hidden;
  top: 48px;
  position: absolute;
  width: 100%;
}
.banner {
  height: 100px;
  width: 100%;
  background: red;
  opacity: 0.5;
}
.utilityBar {
  height: 30px;
  width: 100%;
  background: blue;
  opacity: 0.5;
}
.postList {
  width: 60%;
  height: 100%;
  float: left;
  opacity: 0.5;
  background: green;
}
.sidebar {
  float: left;
  height: 100%;
  width: 40%;
  opacity: 0.5;
  background: brown;
}

</style>
