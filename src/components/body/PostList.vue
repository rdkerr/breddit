<template>
  <div class="container">
    <div class="postList">
      <div v-for="post in posts" :key="post.timePosted">
        <div class="post-container">
          <div class="voting">
            {{post.sipzCount}}
          </div>
          <div class="image">
            <img v-bind:src="post.imageURL" alt="iamge">
          </div>
          <div class="post-body">
            {{post.postTitle}}
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <div class="ad">SIDEBAR</div>

    </div>
  </div>
</template>

<script>
import samplePosts from '../../post'
export default {
  name: 'PostList',
  data() {
    return {
      posts: samplePosts
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
.image {
  width: 96px;
  height: 60px;
  margin: 8px 8px auto 8px;
  border-radius: 4px;
  border: 1px solid blue;
  overflow: hidden;
}
.ad {
  width: 312px;
}
.post-body {
  width: 100%;
  margin: 8px 8px 8px 0;
}
.voting {
  width: 40px;
  height: 100%;
}
.post-container {
  width: 100%;
  min-height: 80px;
  background: white;
  border: 1px rgb(135, 138, 140) solid;
  border-bottom-width: 0px;
  display: flex;
}
.container {
  height: 100%;
  background: #DAE0E6;
  width: 100%;
  display: flex;
}
.postList {
  flex-grow: 1;
  height: 100%;
  float: left;
  padding: 20px 24px;

}
.sidebar {
  float: left;
  height: 100%;
  width: 312px;
  display: none;
  padding: 20px 24px 20px 0px;
  background: blue;
}
@media screen and (min-width: 950px) {
  .sidebar {
    display: block;
  }
}

</style>
