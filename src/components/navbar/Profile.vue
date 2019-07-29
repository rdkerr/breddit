<template>
  <div class="user-dropdown">
    <button v-on:click="$emit('clicked')" :class="profileOpen ? 'container-open' : 'container-close'">
      <i class="fa fa-ghost icon"></i>
      <div class="text-container">
        <h4 class="user-name">username</h4>
        <h5 class="user-name cheerz-text"><span><i class="fa fa-glass-cheers whiskey"></i></span>123 cheerz</h5>
      </div>
      <i class="fa fa-sort-down sort"></i>
    </button>
    <div v-if="profileOpen" v-clickaway="() => $emit('clicked')" class="content">
      <div v-for="key in keys" :key="key">
        <div class="category">{{ key }}</div>
        <a
          class="text"
          v-for="(value,index) in feed[key]"
          :key="index"
          href="#"
        >
          <i class="fa item-icon" :class="icons[value]"></i>
          <p class='item-text'>{{value}}</p>
          <i v-if="value == 'Night Mode'" class="fa item-icon right" :class="night ? icons['off'] : icons['on']" v-on:click="night = !night"></i>
        </a>
      </div>
      <hr>
      <div class="text">
        <i class="fa item-icon" :class="icons['Log Out']"></i>
        <p class='item-text'>Log Out</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: ['profileOpen'],
  data() {
    return {
      night: false,
      keys: [
        'MY STUFF',
        'VIEW OPTIONS',
        'MORE STUFF'
      ],
      icons: {
        'My Profile': 'fa-user-circle', 'User Settings': 'fa-cog', 'Night Mode': 'fa-cloud-moon', 'Breddit Sipz': 'fa-glass-whiskey', 'Breddit Bro': 'fa-user-ninja', 'Help Center': 'fa-question-circle', 'Visit Old Breddit': 'fa-external-link-alt', 'Log Out': 'fa-sign-out-alt', 'off': 'fa-toggle-off', 'on': 'fa-toggle-on'
      },
      feed: {
        'MY STUFF': ['My Profile', 'User Settings'],
        'VIEW OPTIONS': ['Night Mode'],
        'MORE STUFF': ['Breddit Sipz', 'Breddit Bro', 'Help Center', 'Visit Old Breddit']
      }
    }
  }
}
</script>

<style scoped>
button {
  outline: none;
  background: white;
  cursor: pointer;
}
.right {
  float: right;
}
hr {
  width: 85%;
  border-color: rgb(220, 222, 223);
  border-style: solid;
  background-color: rgb(220, 222, 223);
}
.item-text {
  padding: 5px 0 0 5px;
  display: inline-block;
  height: 100%;
  width: 100%;
  margin: 0;
}
.text {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: rgb(28, 28, 28);
  padding: 0 10px;
  margin-top: 0;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  margin-bottom: 2px;
}
.text:hover, .log-out:hover {
  background-color: rgb(246, 247, 248);
  cursor: pointer;
}
.category {
  padding: 10px 24px 8px 24px;
  color: rgb(135, 138, 140);
  display: block;
  font-size: 10px;
}
.corners {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.content {
  cursor: default;
  position: fixed;
  width: 198px;
  height: 52vh;
  background-color: #fff;
  top: 41px;
  right: 20px;
  z-index: 2;
  border-left: 1px solid rgb(237, 239, 241);
  border-right: 1px solid rgb(237, 239, 241);
  border-bottom: 1px solid rgb(237, 239, 241);
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  overflow-x: hidden;
}
.whiskey {
  color: rgb(255, 69, 0);
  padding-right: 2px;
}
.user-name {
  font-size: 14px;
  margin: 0;
  float: left;
}
.cheerz-text {
  color: #A8AAAB;
}
.sort {
  margin: 5px 10px 0 0;
  width: 26px;
  height: 36px;
  float: left;
  text-align: right;
  display: none;
}
.text-container {
  float: left;
  width: 118px;
  height: 36px;
  display: none;
}
.user-dropdown{
  float: right;
  height: 36px;
  cursor: pointer;
}
.container-open {
  border: 1px solid rgb(237, 239, 241);
  height: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.container-close {
  height: 100%;
  border: 1px solid white;
}
.container-close:hover {
  border-color: rgb(237, 239, 241);
  border-radius: 4px;
}
.icon {
  float: left;

  width: 32px;
  height: 36px;
  color: rgb(135, 138, 140);
  font-size: 22px;
  align-items: center;
  padding-top: 5px;
}
.item-icon {
  color: rgb(135, 138, 140);
  font-size: 20px;
  padding: 5px;
}
@media screen and (min-width: 1200px) {
  .text-container {
    display: block;
  }
}
@media screen and (min-width: 450px) {
  .sort {
    display: block;
  }
}
</style>
