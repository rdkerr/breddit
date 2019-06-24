<template>
  <div class="body">
    <Banner v-if="isBakery" bakeryName='b/JudgeBredd' bakeryIcon='fa-biohazard'></Banner>
    <UtilityBar></UtilityBar>
    <PostList></PostList>
  </div>
</template>

<script>
import Banner from './Banner'
import UtilityBar from '../utilitybar/UtilityBar'
import PostList from './PostList'

export default {
  name: 'Body',
  components: {
    Banner,
    UtilityBar,
    PostList
  },
  data() {
    return {
      isBakery: true
    }
  }
}
</script>

<style scoped>
.body {
  height: calc(100vh - 48px);
  background: #DAE0E6;
  overflow: scroll;
  overflow-x: hidden;
  top: 48px;
  position: absolute;
  width: 100%;
}
</style>
