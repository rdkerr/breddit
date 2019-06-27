<template>
  <div class="fill">
      <div :class="align == 'horizontal' ? 'horizontal-container' : 'vote-container'">
        <div class="bread-container" v-on:click="setState(1)">
          <i class="fa fa-bread-slice bread" :class="getVote(1)"></i>
        </div>
        <div class="voting">
          {{sipz}}
        </div>
        <div class="bread-container" v-on:click="setState(-1)">
          <i class="fa fa-bread-slice bot bread fa-rotate-180" :class="getVote(-1)"></i>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Vote',
  props: {
    sipzCount: Number,
    align: String
  },
  data() {
    return {
      state: 0
    }
  },
  computed: {
    sipz: function() {
      return this.$props.sipzCount + this.state === 0 ? '•' : this.$props.sipzCount + this.state
    }
  },
  methods: {
    getVote: function(current) {
      if (current === this.state) {
        return this.state === 1 ? 'bread-up' : 'bread-down';
      }
      return '';
    },
    setState: function(newState) {
      this.state = newState === this.state ? 0 : newState;
    }
  }
}
</script>

<style scoped>
.fill {
  background-color: rgb(246, 247, 248);
}
.bread {
  color: rgb(135, 138, 140);
  padding-top: 3px;
}
.bread-up {
  color: rgb(255, 69, 0);
}
.bread-down {
  color: #0079d3;
}
.bot {
  padding: 0 0 3px 0;
}
.bread-container {
  border-radius: 4px;
  width: 24px;
  height: 24px;
  margin: auto auto;
  text-align: center;
  align-items: center;
  cursor: pointer;
}
.bread-container:hover {
  background-color: rgba(26, 26, 27, 0.1);
}
.vote-container {
  display: flex;
  height: 100%;
  width: 40px;
  height: 80px;
  flex-direction: column;
  padding: 8px 4px;
  font-size: 14px;
}
.horizontal-container {
  display: flex;
  flex-direction: row;
  padding: 8px 4px;
  font-size: 12px;
}
.voting {
  min-width: 40px;
  margin: auto auto;
  text-align: center;
}
</style>
