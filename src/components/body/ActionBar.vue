<template>
  <div>
    <div class="action-bar">
      <div class="action-container">
        <div class="action">
          <i class="icon fa fa-comment-alt"></i>
          {{commentsCount}} Comments
        </div>
      </div>
      <div class="action-container">
        <div class="action">
          <i class="icon fa fa-glass-whiskey"></i>
          Give Sip
        </div>
      </div>
      <div class="action-container">
        <div class="action">
          <i class="icon fa fa-share"></i>
          Share
        </div>
      </div>
      <div class="action-container">
        <div class="action">
          <i class="icon fa fa-bookmark"></i>
          Save
        </div>
      </div>
      <div class="action-container">
        <div class="action">
          <i class="icon fa fa-eye-slash"></i>
          Hide
        </div>
      </div>
      <div class="action-container">
        <div class="action">
          <i class="icon fa fa-angry"></i>
          Report
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActionBar',
  props: {
    commentsCount: Number
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
