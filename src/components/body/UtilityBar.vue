<template>
  <div class="utilityBar">
    <div class="text">VIEW</div>
    <div class="button-container">
      <div class="button" v-on:click="getView('Card')" :class="getActive('Card') ? 'inactive' : ''">
        <div class="half"></div>
        <div class="half"></div>
      </div>
      <div class="button" v-on:click="getView('Classic')" :class="getActive('Classic') ? 'inactive' : ''">
        <div class="third"></div>
        <div class="third"></div>
        <div class="third"></div>
      </div>
      <div class="button" v-on:click="getView('Compact')" :class="getActive('Compact') ? 'inactive' : ''">
        <div class="fourth"></div>
        <div class="fourth"></div>
        <div class="fourth"></div>
        <div class="fourth"></div>
      </div>
    </div>
    <div class="separator"></div>
    <div class="text">SORT</div>
  </div>
</template>

<script>
export default {
  name: 'UtilityBar',
  data() {
    return {
      active: 'Classic'
    }
  },
  methods: {
    getView: function(newActive) {
      this.active = newActive
    },
    getActive: function(current) {
      return current !== this.active
    }
  }
}
</script>

<style scoped>
.separator {
  height: 22px;
  width: 1px;
  background: rgb(135, 138, 140);
  float: left;
  margin: 7px 15px 0 10px;
}
.utilityBar {
  height: 40px;
  width: 100%;
  background: white;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
}
.text {
  font-size: 16px;
  color: rgb(124, 124, 124);

  margin-top: 10px;
  margin-right: 12px;
  font-weight: 700
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
</style>
