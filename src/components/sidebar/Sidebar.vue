<template>
  <div>
    <div class="sidebar">
      <div class="bakery-container">
        <i class="fa icon" :class=icon></i>
        <span class="bakery">{{text}}</span>
        <div class="text">{{description}}</div>
        <div class="button post">CREATE POST</div>
        <div class="button community">CREATE COMMUNITY</div>
      </div>
      <div class="ad">
        <p>ADVERTISEMENT</p>
        <img src="../../assets/ads/ad (1).jpg" alt="ad 1">
      </div>
      <div class="bro-container">
        <i class="fa fa-user-ninja bro-icon"></i>
        <div class="bro-text">
          <div class="title">Breddit Bro</div>
          <div class="bro-text">The brest Breddit experience, with monthly Sipz</div>
        </div>
        <div class="try">Try Now</div>
      </div>
      <div class="ad">
        <p>ADVERTISEMENT</p>
        <img src="../../assets/ads/ad (2).jpg" alt="ad 2">
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
// TODO: Sticky button and footer
import Footer from './Footer'
export default {
  name: 'Sidebar',
  components: {
    Footer
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
    }
  }
}
</script>

<style scoped>
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
  font-weight: 600;
  font-size: 18px;
}
img {
  width: 100%;
}
.icon {
  color: #0079d3;
  font-size: 36px;
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
}
.ad {
  background: white;
  border-radius: 4px;
  padding: 6px;
  margin-top: 20px;
  margin-bottom: 20px;
}
.sidebar {
  float: left;
  width: 312px;
  padding: 20px 24px 20px 0px;
  overflow: hidden;
}
.sidebar {
  display: none;
}
@media screen and (min-width: 980px) {
  .sidebar {
    display: block;
  }
}
</style>
