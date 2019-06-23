<template>
  <div class="footer">
    <div class="link-container">
      <div class="text-container">
        <div class="footer-text">About</div>
        <div class="footer-text">Careers</div>
        <div class="footer-text">Press</div>
      </div>
      <div class="text-container">
        <div class="footer-text">Advertise</div>
        <div class="footer-text">Blog</div>
        <div class="footer-text">Help</div>
      </div>
      <div class="text-container">
        <div class="footer-text">The Breddit App</div>
        <div class="footer-text">Breddit Sipz</div>
        <div class="footer-text">Breddit Bro</div>
        <div class="footer-text">Breddit Gifts</div>
      </div>
    </div>
    <div class="policy-container">
      <div class="policy">
        <div class="footer-text">Content Policy</div>
        <div class="separator"> | </div>
        <div class="footer-text">Privacy Policy</div>
      </div>
      <div class="policy">
        <div class="footer-text">User Policy</div>
        <div class="separator"> | </div>
        <div class="footer-text">Mod Policy</div>
      </div>
      <div class="policy">
        <div>© 2019 Breddit, Inc. All rights reserved</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.policy-container {
  margin-top: 30px;
  width: 100%;
  align-items: center;
}
.blue {
  background-color: red;
}
.separator {
  padding-left: 5px;
  padding-right: 5px;
}
.text-container, .policy-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.link-container, .policy {
  display: flex;
  flex-direction: row;
}
.footer {
  background: white;
  border-radius: 4px;
  padding: 12px;
}
</style>
