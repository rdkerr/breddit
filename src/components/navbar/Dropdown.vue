<template>
  <div class="nav-dropdown">
    <button @click="$emit('clicked')" :class="dropdownOpen ? 'container-open' : 'container-close'">
      <i class="fa main-icon" :class=icons[current]></i>
      <p class="current-text">{{ current }}</p>
      <i class="fa fa-sort-down sort"></i>
    </button>
    <div  v-if="dropdownOpen" v-clickaway="() => $emit('clicked')" class="content">
      <input
        v-bind:value="filterString"
        @input="filterString = $event.target.value" placeholder="Filter"
        class ="filter"
      >
      <div v-for="key in keys" :key="key">
        <div class="category" v-if="filterFeeds(key).length > 0">{{ key }}</div>
        <a class="text"
          v-for="(value,index) in filterFeeds(key)"
          :key="index"
          href="/" + value
          @click="updateCurrent(value)"
        >
          <i class="fa icon" :class="icons[value]"></i>
          <p class="bakery-name">{{value}}</p>
          <i v-if="key == keys[1]" class="fa fa-flag icon" @click.stop="feed[keys[1]].splice(index,1)"></i>
          <i v-else-if="key == keys[2] && feed[keys[1]].includes(value)" class="fa fa-flag icon" @click.stop="feed[keys[1]].splice(feed[keys[1]].indexOf(value),1)"></i>
          <i v-else-if="key == keys[2]" class="fa fa-flag icon disabled" @click.stop="feed[keys[1]].push(value)"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: ['dropdownOpen'],
  computed: {
    current() {
      return this.$store.state.current;
    },
    icons() {
      return this.$store.state.icons;
    }
  },
  data() {
    return {
      filterString: '',
      keys: [
        'BREDDIT FEEDS',
        'FAVORITES',
        'MY BAKERIES',
        'OTHER'
      ],
      feed: {
        'BREDDIT FEEDS': ['Home', 'Popular', 'All', 'Fresh Bread'],
        'FAVORITES': ['b/JudgeBredd', 'b/Sourdough', 'b/wholeWheat'],
        'MY BAKERIES': ['b/bred', 'b/catBread', 'b/JudgeBredd', 'b/HoneyOat', 'b/Sourdough', 'b/wholeWheat'],
        'OTHER': ['User Settings', 'Messages', 'Create Toast', 'Create Bakery', 'Sipz', 'Bro']
      }
    }
  },
  methods: {
    filterFeeds: function(key) {
      let that = this;
      return that.feed[key].filter(function(bread) {
        return that.filterString === '' ? true : bread.toLowerCase().includes(that.filterString.toLowerCase());
      })
    },
    updateCurrent: function(newCurrent) {
      this.$store.state.current = newCurrent;
      this.$emit('clicked')
    }
  }
}
</script>

<style scoped>
.nav-dropdown{
  height: 35px;
  margin: 0 10px 0 0;
}
.bakery-name {
  margin: 0;
  padding-top: 6px;
  width: 100%;
}
button {
  outline: none;
  background: white;
  cursor: pointer;
}
.text {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: rgb(28, 28, 28);
  padding: 0 10px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
}
.text:hover{
  background-color: rgb(246, 247, 248);
}
.category {
  padding: 10px 24px 8px 24px;
  color: rgb(135, 138, 140);
  display: block;
  font-size: 10px;
}
.filter {
  margin: 16px 16px 0 16px;
  width: calc(100% - 40px);
}
input {
  border: 1px solid rgb(237, 239, 241);
  background-color: rgb(246, 247, 248);
  height: 32px;
  margin-top: 0px;
  padding-left: 5px;
  padding-bottom: 0px;
}
input:focus {
  border: 1px solid #0079d3;
  outline-width: 0;
  background-color: white;
}
.content {
  margin-left: 1px;
  position: fixed;
  width: 269px;
  max-height: 75vh;
  background-color: #fff;
  top: 41px;
  box-shadow: 0px 1px 0px 1px rgb(237, 239, 241);
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  overflow-x: hidden;
  padding-bottom: 15px;
}
.main-icon {
  float: left;
  width: 40px;
  height: 36px;
  color: #0079d3;
  font-size: 22px;
  padding-top: 6px;
}
.sort {
  margin: 5px 10px 0 0;
  width: 45px;
  height: 36px;
  float: left;
  text-align: right;
  display: none;
}
.current-text {
  float: left;
  text-align: left;
  width: 162px;
  height: 36px;
  line-height: 18px;
  display: none;
  font-size: 14px;
  margin: 10px 0 0 0;
}
.icon {
  color: #0079d3;
  font-size: 20px;
  padding: 5px;
  width: 40px;
  display: inline-block;
  text-align: center;
}
.sub-icon {
  color: #0079d3;
  font-size: 20px;
  padding-right: 8px;
}
.disabled {
  color: rgb(223, 222, 222);
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
@media screen and (min-width: 1070px) {
  .content {
    left: 146px;
  }
}
@media screen and (min-width: 996px) {
  .current-text {
    display: block;
  }
}
@media screen and (min-width: 450px) {
  .sort {
    display: block;
  }
}
</style>
