<template>
  <div id="app">
    <i-header/>
    <i-tab/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <i-player></i-player>
  </div>
</template>

<script>
  import iHeader from './components/Header/header';
  import iTab from './components/Tab/Tab';
  import iPlayer from './components/Player/Player';

  export default {
    name: 'App',
    components: {
      iHeader,
      iTab,
      iPlayer
    }
  }
</script>

<style lang="scss" scoped>
  #app {

  }
</style>
