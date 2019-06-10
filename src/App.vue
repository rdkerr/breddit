<template>
  <div>
    <Navbar></Navbar>
    <Body></Body>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar"
import Body from "./components/body/Body"
export default {
  name: 'app',
  components: {
    Navbar,
    Body
  },
  data () {
    return {
      msg: 'Welcome to Breddit!'
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
}
</style>
