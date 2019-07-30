<template>
  <div class="sidebar">
    <div class="bakery-container">
      <i class="fa icon" :class=icon></i>
      <h1 class="bakery">{{text}}</h1>
      <p class="text">{{description}}</p>
      <button class="button post">CREATE POST</button>
      <button class="button community">CREATE COMMUNITY</button>
    </div>
    <!-- TODO: Refactor out -->
    <Ad num=1></Ad>
    <div class="bro-container">
      <i class="fa fa-user-ninja bro-icon"></i>
      <div class="bro-text">
        <div class="title">Breddit Bro</div>
        <div class="bro-text">The brest Breddit experience, with monthly Sipz</div>
      </div>
      <div class="try">Try Now</div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// TODO: Sticky button and footer
import Footer from './Footer'
import Ad from './Ad'
export default {
  name: 'Sidebar',
  components: {
    Footer, Ad
  },
  computed: {
    icon() {
      return this.$store.state.icons[this.$store.state.current];
    },
    text() {
      return this.$store.state.current;
    },
    description() {
      return this.$store.state.descriptions[this.$store.state.current];
    },
  }
}
</script>

<style scoped>
.top {
  position: sticky;
  bottom: 1rem;
  align-self: flex-start;
  display: none;
}
button {
  outline: none;
  background: white;
  cursor: pointer;
}
.title {
  font-weight: 600;
  font-size: 14px;
}
.title-text {
  font-size: 14px;
}
.try {
  background-color: rgb(255, 69, 0);
  font-size: 14px;
  border-radius: 4px;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  margin: auto 0;
  padding: 6px 5px;
  white-space: nowrap;
}
p {
  margin: 0 0 5px 0;
}
.bakery {
  margin: 0 5px;
  float: left;
}
.icon {
  color: #0079d3;
  font-size: 36px;
  float: left;
}
.bro-text {
  font-size: 14px;
}
.bro-icon {
  color: rgb(255, 69, 0);
  font-size: 28px;
  margin: auto 0;
  margin-right: 12px;
}
.text {
  padding-top: 5px;
  padding-bottom: 5px;
  clear: both;
}
.button {
  border-radius: 4px;
  width: 100%;
  background-color: #0079d3;
  color: white;
  font-size: 14px;
  font-weight: 700;
  padding:10px 0;
  text-align: center;
  margin-top: 12px;
}
.post {
  background-color: #0079d3;
  color: white;
}
.community {
  background-color: white;
  color: #0079d3;
  border: 1px #0079d3 solid;
}
.bakery-container, .bro-container {
  background: white;
  border-radius: 4px;
  padding: 12px;
}
.bro-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
.sidebar {
  float: left;
  min-width: 312px;
  padding: 20px 24px 20px 0px;
  display: none;
  height: 2000px;
}
@media screen and (min-width: 980px) {
  .sidebar {
    display: block;
  }
}
</style>
