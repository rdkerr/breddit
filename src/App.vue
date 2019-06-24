<template>
  <div>
    <Navbar></Navbar>
    <div class="body">
      <Banner v-if="isBakery"></Banner>
      <UtilityBar></UtilityBar>
      <PostList></PostList>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar"
import Banner from './components/body/Banner'
import UtilityBar from './components/utilitybar/UtilityBar'
import PostList from './components/body/PostList'

export default {
  name: 'app',
  components: {
    Navbar,
    Banner,
    UtilityBar,
    PostList
  },
  computed: {
    isBakery: function() {
      return this.$store.state.current.slice(0,2) === 'b/';
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style>
@import "https://use.fontawesome.com/releases/v5.7.0/css/all.css";
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
body {
  margin: 0;
  min-width: 320px;
  font-family: IBMPlexSans, Arial, sans-serif;
}
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
