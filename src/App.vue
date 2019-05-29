<template>
  <div>
    <Navbar></Navbar>
    <div class="a">
      <div class="b">A</div>
      <div class="c">B</div>
      <div class="d">C</div>
    </div>
    <div id="app">
      <h1>{{ msg }}</h1>
      <img src="./assets/breddit_logo.png">
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/navbar/Navbar"
export default {
  name: 'app',
  components: {
    Navbar
  },
  data () {
    return {
      msg: 'Welcome to Breddit!'
    }
  }
}
</script>

<style>
.a {
  height: 200px;
  width: 100%;
}
.a > div {
  float: left;
  height: 100%;
}
.b {
  width: 200px;
  background-color: red;
  float: left;
}
.c {
  width: 100%;
  background-color: blue;
  float: left;
}
.d {
  width: 200px;
  background-color: green;
  float: left;
}
@import "https://use.fontawesome.com/releases/v5.7.0/css/all.css";
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
body {
  margin: 0;
  min-width: 320px;
}

#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #2c3e50;
}

</style>
