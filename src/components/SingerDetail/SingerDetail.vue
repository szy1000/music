<template>
  <transition name="slide">
    <div class="singer-detail">
      <h1>singer-detail</h1>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {},
    data() {
      return {
        ratings: []
      }
    },
    components: {},
    created() {
    },
    events: {},
    methods: {
      needShow(type, text) {
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/scss/mixin.scss';
  @import '../../common/scss/variable.scss';

  .singer-detail {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $color-background;
  }

  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0)

  }
</style>
