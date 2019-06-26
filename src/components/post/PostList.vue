<template>
  <div class="container">
    <div class="postList">
      <div v-for="post in posts" :key="post.timePosted">
        <ClassicPost v-if="view == 'Classic'" :post=post></ClassicPost>
        <CompactPost v-else-if="view == 'Compact'" :post=post></CompactPost>
        <CardPost v-else-if="view == 'Card'" :post=post></CardPost>
      </div>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import samplePosts from '../../post'
import Sidebar from '../sidebar/Sidebar'
import CardPost from './CardPost'
import ClassicPost from './ClassicPost'
import CompactPost from './CompactPost'

export default {
  name: 'PostList',
  components: {
    Sidebar,
    CardPost,
    ClassicPost,
    CompactPost
  },
  computed: {
    view() {
      return this.$store.state.view;
    }
  },
  data() {
    return {
      posts: samplePosts,
    }
  }
}
</script>

<style scoped>
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
@media screen and (min-width: 650px) {
  .postList {
    padding: 20px 24px;
  }
}
</style>
