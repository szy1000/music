<template>
  <transition name="slide">
    <div class="singer-detail">
      <h1>singer-detail</h1>
      <p>{{$route.params.id}}</p>
    </div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    props: {},
    data() {
      return {
        ratings: []
      }
    },
    computed: {
      ...mapGetters([
        'singer'
      ])
    },
    components: {},
    created() {
      console.log(this.singer)
    },
    events: {},
    methods: {
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
