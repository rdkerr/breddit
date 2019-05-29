<template>
  <div id="navbar">
    <Brand></Brand>
    <Dropdown></Dropdown>

    <Profile></Profile>
    <QuickLaunch></QuickLaunch>
    <Search></Search>
  </div>
</template>

<script>
import Dropdown from './Dropdown'
import Brand from './Brand'
import Search from './Search'
import QuickLaunch from './QuickLaunch'
import Profile from './Profile'

export default {
  name: 'Navbar',
  components: {
    Dropdown,
    Brand,
    Search,
    QuickLaunch,
    Profile
  }
}
</script>

<style scoped>
#navbar {
  height: 48px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-color: rgb(237, 239, 241);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  align-items: center;
}
</style>
