<template>
  <div class="container">
    <div class="postList">
      <div v-for="post in posts" :key="post.timePosted" class="post-container">
        <div class="fill">
          <div class="vote-container">
            <div class="bread-container">
              <i class="fa fa-bread-slice bread"></i>
            </div>
            <div class="voting">
              {{post.sipzCount}}
            </div>
            <div class="bread-container">
              <i class="fa fa-bread-slice bot bread fa-rotate-180"></i>
            </div>
          </div>
        </div>
        <div v-if="post.postType === 'image'" class="image">
          <img :src="post.imageURL" alt="iamge">
        </div>
        <div v-else class="placeholder">
          <i class="fa fa-newspaper paper"></i>
        </div>
        <div class="post-body">
          <h3 class="title">
            {{post.postTitle}}
          </h3>
          <div class="details">
            <span class="bakery">{{post.bakeryName}}</span>
            <span> •</span>
            <span>Posted by</span>
            <span>{{post.userName}}</span>
            <span>{{ post.timePosted | moment("from", "now") }}</span>
          </div>
          <ActionBar :commentsCount="post.commentsCount"></ActionBar>
        </div>
      </div>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import samplePosts from '../../post'
import ActionBar from './ActionBar'
import Sidebar from './Sidebar'

export default {
  name: 'PostList',
  components: {
    ActionBar,
    Sidebar
  },
  data() {
    return {
      posts: samplePosts,
      up: false,
      down: false,
    }
  }
}
</script>

<style scoped>
.bakery {
  font-weight: 700;
  cursor: pointer;
}
.bakery:hover {
  text-decoration: underline;
}
.details {
  color: rgb(135, 138, 140);
}
.fill {
  height: auto;
  background-color: rgb(246, 247, 248);
}
.title {
  fill: rgb(135, 138, 140);
  font-family: IBMPlexSans, Arial, sans-serif;
  font-size: 16px;
  margin: 0;
  padding-bottom: 5px;
}
img {
  width: 100%;
}
.bread {
  color: rgb(135, 138, 140);
  padding-top: 3px;
}
.bot {
  padding: 0 0 3px 0;
}
.bread-container {
  border-radius: 4px;
  width: 24px;
  height: 24px;
  margin: auto auto;
  text-align: center;
  vertical-align: bottom;
  cursor: pointer;
}
.bread-container:hover {
  background-color: rgba(26, 26, 27, 0.1);
}
.vote-container {
  display: flex;
  height: 100%;
  width: 40px;
  height: 80px;
  flex-direction: column;
  padding: 8px 4px;
}
.image {
  width: 96px;
  height: 58px;
  margin: 8px 8px auto 8px;
  border-radius: 4px;
  border: 1px solid rgb(237, 239, 241);;
  overflow: hidden;
}
.placeholder {
  width: 96px;
  height: 58px;
  margin: 8px 8px auto 8px;
  border-radius: 4px;
  border: 1px solid rgb(237, 239, 241);
  overflow: hidden;
  background: rgb(246, 247, 248);
}
.paper {
  padding: 15px 20px;
  font-size: 30px;
  color: rgb(135, 138, 140);
}
.ad {
  width: 312px;
  background: white;
}
.post-body {
  width: 100%;
  margin: 8px 8px 8px 0;
}
.voting {
  width: 40px;
  margin: auto auto;
  text-align: center;
}
.post-container {
  width: 100%;
  min-height: 80px;
  background: white;
  border: 1px rgb(204, 204, 204) solid;
  border-bottom-color: white;
  display: flex;
}
.post-container:hover {
  border-color: rgb(135, 138, 140);
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
  padding: 0;
}
.sidebar {
  float: left;
  height: 100vh;
  width: 312px;
  display: none;
  padding: 20px 24px 20px 0px;
  overflow: hidden;
}
@media screen and (min-width: 950px) {
  .sidebar {
    display: block;
  }
}
@media screen and (min-width: 650px) {
  .postList {
    padding: 20px 24px;
  }
}
</style>
