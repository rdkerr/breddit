<template>
  <div class="search">
    <input type='text' placeholder='Search Breddit' id='search-text-input' />
    <i class="mag fa fa-search"></i>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
.search {
  width: 50%;
  float: left;
  background-color: red;
}
input {
  border-radius: 4px;
  width: 70%;
  border: 1px solid rgb(237, 239, 241);
  background-color: rgb(246, 247, 248);
  height: 24px;
  margin-top: 7px;
  padding-left: 35px;
  padding-right: 16px;
}
input:focus {
  border: 1px solid #0079d3;
  outline-width: 0;
  background-color: white;
}
.mag {
  position: relative;
  left: -570px;
  color: rgb(135, 138, 140);
  font-size: 16px;
}
</style>
