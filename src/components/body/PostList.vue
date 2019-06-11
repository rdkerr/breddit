<template>
  <div class="container">
    <div class="postList">
      POSTS
    </div>
    <div class="sidebar">
      SIDEBAR
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList'
}
</script>

<style scoped>
.container {
  height: 100%;
  background: yellow;
  width: 100%;
  display: flex;
}
.postList {
  flex-grow: 1;
  height: 100%;
  float: left;
  opacity: 0.5;
  background: green;
}
.sidebar {
  float: left;
  height: 100%;
  width: 312px;
  opacity: 0.5;
  background: brown;
  display: none;
}
@media screen and (min-width: 950px) {
  .sidebar {
    display: block;
  }
}

</style>
