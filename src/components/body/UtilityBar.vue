<template>
  <div class="utilityBar">
    <div class="text">VIEW</div>
    <div class="button-container">
      <div class="button">
        <div class="half"></div>
        <div class="half"></div>
      </div>
      <div class="button">
        <div class="third"></div>
        <div class="third"></div>
        <div class="third"></div>
      </div>
      <div class="button">
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
  name: 'UtilityBar'
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
}
.text {
  font-size: 16px;
  color: rgb(124, 124, 124);
  float: left;
  margin-top: 10px;
  margin-right: 12px;
  font-weight: 700
}
.button-container {
  margin-top: 7px;
  float: left;
  background: white;
}
.button {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  float: left;
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
</style>
