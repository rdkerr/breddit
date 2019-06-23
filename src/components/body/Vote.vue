<template>
  <div>
    <div class="fill">
      <div class="vote-container">
        <div class="bread-container">
          <i class="fa fa-bread-slice bread" :class="getVote('up')" :click="state='on'"></i>
        </div>
        <div class="voting">
          {{sipzCount}}
        </div>
        <div class="bread-container">
          <i class="fa fa-bread-slice bot bread fa-rotate-180" :class="getVote('down')"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vote',
  props: {
    sipzCount: Number
  },
  data() {
    return {
      state: 'off'
    }
  },
  methods: {
    getVote: function(current) {
      if (current === this.state) {
        return this.state === 'up' ? 'bread-up' : 'bread-down';
      }
      return '';
    }
  }
}
</script>

<style scoped>
.fill {
  height: 100%;
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
  vertical-align: bottom;
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
}
.voting {
  width: 40px;
  margin: auto auto;
  text-align: center;
}
</style>
