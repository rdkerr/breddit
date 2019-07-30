<template>
  <div class="ad">
    <p>ADVERTISEMENT</p>
    <img :src=url>
  </div>
</template>

<script>
export default {
  name: 'Ad',
  props: ['num'],
  computed: {
    url() {
      return `dist/ad (${this.num}).jpg`
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
.ad {
  background: white;
  border-radius: 4px;
  padding: 6px;
  margin-top: 20px;
  margin-bottom: 20px;
}
p {
  margin: 0;
}
</style>
