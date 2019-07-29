<template>
  <div class="banner">
    <i class="fa icon" :class="icon"></i>
    <h1 class="text">{{ current }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  computed: {
    current() {
      return this.$store.state.current
    },
    icon() {
      return this.$store.state.icons[this.$store.state.current]
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 3rem;
  display: block;
  margin: auto 0;
}
.icon {
  display: block;
  width: 60px;
  margin: auto 0;
  padding-left: 20px;
  padding-right: 5px;
  color: #000;
  font-size: 40px;
}
.banner {
  height: 200px;
  width: 100%;
  background: gray;
  display: flex;
}
</style>
