<template>
  <div class="player">
    <div class="normal-player">播放器</div>
    <div class="mini-player">迷你播放器</div>
  </div>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        ratings: [],
      }
    },
    components: {
    },
    created() {
    },
    events: {},
    methods: {
      needShow(type, text) {
      },
    }
  }
</script>

<style lang="scss" scoped>
   @import '~common/scss/variable.scss';

   .player{
     .normal-player{
       position: fixed;
       left: 0;
       right: 0;
       top: 0;
       bottom: 0;
       z-index: 150;
       background: $color-background;
     }

   }
</style>
