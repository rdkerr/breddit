<template>
  <div id="navbar">
    <Brand></Brand>
    <Dropdown></Dropdown>
    <Search></Search>
    <QuickLaunch></QuickLaunch>
    <Compose></Compose>
    <Profile></Profile>
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
  display: flex;

}
</style>
