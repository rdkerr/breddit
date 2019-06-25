<template>
  <div class="container">
    <div class="text">VIEW</div>
    <div class="button-container">
      <div class="button" v-on:click="updateView('Card')" :class="getActive('Card')">
        <div class="half"></div>
        <div class="half"></div>
      </div>
      <div class="button" v-on:click="updateView('Classic')" :class="getActive('Classic')">
        <div class="third"></div>
        <div class="third"></div>
        <div class="third"></div>
      </div>
      <div class="button" v-on:click="updateView('Compact')" :class="getActive('Compact')">
        <div class="fourth"></div>
        <div class="fourth"></div>
        <div class="fourth"></div>
        <div class="fourth"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewSelector',
  computed: {

  },
  methods: {
    updateView: function(newView) {
      this.$store.state.view = newView;
    },
    getActive: function(current) {
      return current !== this.$store.state.view ? 'inactive' : '';
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
.text {
  font-size: 14px;
  color: rgb(124, 124, 124);
  margin-top: 10px;
  margin-right: 12px;
  font-weight: 700;
  display: none;
}
.button-container {
  margin: 7px;
  display: flex;
  background: white;
}
.button {
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.half {
  height: 9px;
  width: 100%;
  background: #0079d3;
}
.third {
  height: 6px;
  width: 100%;
  background: #0079d3;
}
.fourth {
  height: 4px;
  width: 100%;
  background: #0079d3;
}
.inactive {
  opacity: 0.5;
}

@media screen and (min-width: 800px) {
  .text {
    display: block;
  }
}
</style>
