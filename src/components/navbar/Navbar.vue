<template>
  <div id="navbar">
    <Brand></Brand>
    <Dropdown v-on:clicked="toggleDropdown()" :dropdownOpen="dropdownOpen"></Dropdown>
    <Search></Search>
    <QuickLaunch></QuickLaunch>
    <Compose></Compose>
    <Profile v-on:clicked="toggleProfile()" :profileOpen="profileOpen"></Profile>
  </div>
</template>

<script>
import Dropdown from './Dropdown'
import Brand from './Brand'
import Search from './Search'
import QuickLaunch from './QuickLaunch'
import Compose from './Compose'
import Profile from './Profile'

export default {
  name: 'Navbar',
  components: {
    Dropdown,
    Brand,
    Search,
    QuickLaunch,
    Compose,
    Profile
  },
  data() {
    return {
      'profileOpen': false,
      'dropdownOpen': false
    }
  },
  methods: {
    toggleProfile: function() {
      if(!this.profileOpen) {
        this.dropdownOpen = false
      }
      this.profileOpen = !this.profileOpen
    },
    toggleDropdown: function() {
      if(!this.dropdownOpen) {
        this.profileOpen = false
      }
      this.dropdownOpen = !this.dropdownOpen
    }
  }
}
</script>

<style scoped>
#navbar {
  top: 0;
  height: 48px;
  position: fixed;
  border-bottom-color: rgb(237, 239, 241);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  align-items: center;
  display: flex;
  width: 100%;
  overflow: hidden;
  z-index: 20;
}
</style>
