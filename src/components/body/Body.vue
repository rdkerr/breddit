<template>
  <div class="body">
    <Banner></Banner>
    <UtilityBar></UtilityBar>
    <PostList></PostList>
  </div>
</template>

<script>
import Banner from './Banner'
import UtilityBar from './UtilityBar'
import PostList from './PostList'
export default {
  name: 'Body',
  components: {
    Banner,
    UtilityBar,
    PostList
  }
}
</script>

<style scoped>
.container {
  height: 100%;
  background: yellow;
  width: 100%;
  display: flex;
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
