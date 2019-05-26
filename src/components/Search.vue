<template>
  <div>
    <input placeholder='Search Reddit' id='search-text-input' />
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped>
input {
  border-radius: 4px;
  border: 1px solid;
}
input:focus {
  border: 1px solid #0079d3;
  outline-width: 0;
}
</style>
