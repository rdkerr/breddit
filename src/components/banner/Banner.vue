<template>
  <div class="banner">
    <div class="icon-container">
      <i class="fa icon" :class="icon"></i>
    </div>
    <div class="text-container">
      <div class="text">{{ current }}</div>
    </div>
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
}
.text-container {
  display: block;
  margin: auto 0;
}
.icon-container {
  display: block;
  width: 60px;
  margin: auto 0;
  padding-left: 20px;
  padding-right: 5px;
}
.icon {
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
