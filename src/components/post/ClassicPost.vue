<template>
  <div class="post-container">
    <Vote :sipzCount=post.sipzCount></Vote>
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
</template>

<script>
import ActionBar from './ActionBar'
import Vote from './Vote'

export default {
  name: 'ClassicPost',
  props: {
    post: Object
  },
  components: {
    ActionBar,
    Vote
  }
}
</script>

<style scoped>
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
.bakery {
  font-weight: 700;
  cursor: pointer;
}
.bakery:hover {
  text-decoration: underline;
}
.details {
  color: rgb(135, 138, 140);
  font-size: 14px;
}
.title {
  fill: rgb(135, 138, 140);
  font-size: 16px;
  margin: 0;
  padding-bottom: 5px;
}
img {
  width: 100%;
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
  margin: 8px 8px 0 0;
}
@media screen and (min-width: 650px) {

}
</style>
