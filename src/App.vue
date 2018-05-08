<template>
  <div id="app">
    <i-header/>
    <i-tab/>
    <router-view></router-view>
  </div>
</template>

<script>
  import iHeader from './components/Header/header';
  import iTab from './components/Tab/Tab';

  export default {
    name: 'App',
    components: {
      iHeader,
      iTab
    }
  }
</script>

<style lang="scss" scoped>
  #app {

  }
</style>
