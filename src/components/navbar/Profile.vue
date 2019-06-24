<template>
  <div class="user-dropdown">
    <div v-on:click="$emit('clicked')" :class="profileOpen ? 'container-open' : 'container-close'">
      <div class="icon-container">
        <i class="fa fa-ghost icon"></i>
      </div>
      <div class="text-container">
        <p class="user-name">username</p>
        <p class="user-name cookies-text"><span><i class="fa fa-glass-cheers whiskey"></i></span>123 cheerz</p>
      </div>
      <div class="sort-container">
        <i class="fa fa-sort-down sort"></i>
      </div>
    </div>
    <div v-if="profileOpen" v-clickaway="() => $emit('clicked')" class="content">
      <div v-for="key in keys" :key="key">
      <div class="category">{{ key }}</div>
        <div
          class="text"
          v-for="(value,index) in feed[key]"
          :key="index"
        >
          <div class="icon-container">
            <i class="fa item-icon" :class="icons[value]"></i>
          </div>
          <div class='item-text'>{{value}}</div>
          <i v-if="value == 'Night Mode'" class="fa item-icon right" :class="night ? icons['off'] : icons['on']" v-on:click="night = !night"></i>
        </div>
      </div>
      <hr>
      <div class="log-out">
      <div class="icon-container pad">
        <i class="fa item-icon" :class="icons['Log Out']"></i>
      </div>
      <div class='item-text'>Log Out</div></div>
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
.right {
  float: right;
}
.log-out {
  height: 40px;
}
hr {
  width: 85%;
  border-color: rgb(220, 222, 223);
  border-style: solid;
}
.pad {
  padding-left: 8px;
}
.item-text {
  padding: 5px 0 0 5px;
  display: inline-block;
  height: 100%;
}
.icon-container {
  width: 40px;
  display: inline-block;
  text-align: center;
}
.text {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: rgb(28, 28, 28);
  padding: 0 10px;
  margin-top: 0;
  height: 40px;
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
  height: 58vh;
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
  margin: 0 0 0 0;
}
.cookies-text {
  color: #A8AAAB;
}
.icon-container {
  float: left;
  width: 32px;
  height: 36px;
}
.sort {
  margin: 5px 10px 0 0;
}
.sort-container {
  width: 26px;
  height: 36px;
  float: left;
  text-align: right;
  display: none;
}
.text-container {
  float: left;
  justify-content: center;
  width: 140px;
  height: 36px;
  display: none;
}
.user-dropdown{
  float: right;
  height: 36px;
  margin-right: 20px;
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
  .sort-container {
    display: block;
  }
}
</style>
