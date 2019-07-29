<template>
  <div class="compose">
    <a href="#">
      <i class="fa fa-comment-dots icon"></i>
    </a>
    <a href="#">
      <i class="fa fa-envelope icon"></i>
    </a>
    <a href="#">
      <i class="fa fa-scroll blue icon"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Compose'
}
</script>

<style scoped>
.compose {
  max-width: 112px;
  display: none;
  padding: 0 5px;
}
.icon {
  font-size: 16px;
  vertical-align: middle;
  line-height: 36px;
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  text-align: center;
  color: black;
}
.icon:hover {
  background-color: rgba(26, 26, 27, 0.1);
}
.blue {
  color: #0079d3;
}
@media screen and (min-width: 600px) {
  .compose {
    display: block;
  }
}
</style>
