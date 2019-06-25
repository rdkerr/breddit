<template>
  <div>
    <div class="action-bar">
      <div class="action-container">
        <div class="action">
          <i class="icon fa fa-comment-alt"></i>
          {{commentsCount}} <span v-if="type != 'Compact'">Comments</span>
        </div>
      </div>
      <div v-if="type != 'Compact'" v-for="key in keys" class="action-container" :key=key>
        <div class="action">
          <i class="icon fa " :class=icons[key]></i>
          {{key}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActionBar',
  computed: {
    icons() {
      return this.$store.state.icons;
    }
  },
  props: {
    commentsCount: Number,
    type: String
  },
  data() {
    return {
      keys: ['Give Sip', 'Share', 'Save', 'Hide', 'Report'
      ]
    }
  }
}
</script>

<style scoped>
.action {
  padding: 4px;
}
.action-bar {
  display: flex;
  flex-direction: row;
  font-weight: 700;
  font-size: 12px;
  color: rgb(135, 138, 140);
  margin-left: 5px;
}
.action-container{
  height: 24px;
  border-radius: 4px;
  margin: 4px 5px 4px 0;
  cursor: pointer;
}
.action-container:hover {
  background-color: rgba(26, 26, 27, 0.1);
}
</style>
