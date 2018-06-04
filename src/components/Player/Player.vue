<template>
  <div class="player" v-show="playlist.length > 0">
    <div class="normal-player" v-show="fullScreen">播放器</div>
    <div class="mini-player" v-show="!fullScreen">迷你播放器</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'fullScreen',
        'playlist'
      ])
    },
    props: {},
    data() {
      return {
      }
    },
    components: {
    },
    created() {
    }
  }
</script>

<style lang="scss" scoped>
   @import 'common/scss/mixin.scss';
   @import 'common/scss/variable.scss';

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
     .mini-player{
       display: flex;
       align-items: center;
       position: fixed;
       left: 0;
       bottom: 0;
       z-index: 180;
       width: 100%;
       height: 60px;
       background: $color-highlight-background;
       &.mini-enter-active, &.mini-leave-active{
         transition: all 0.4s
       }
       &.mini-enter, &.mini-leave-to{
         opacity: 0
       }
       .icon{
         flex: 0 0 40px;
         width: 40px;
         padding: 0 10px 0 20px;
         img{
           border-radius: 50%;
           &.play{
             animation: rotate 10s linear infinite
           }
           &.pause{
             animation-play-state: paused
           }
         }
       }
       .text{
         display: flex;
         flex-direction: column;
         justify-content: center;
         flex: 1;
         line-height: 20px;
         overflow: hidden;
         .name{
           margin-bottom: 2px;
           @include no-wrap();
           font-size: $font-size-medium;
           color: $color-text;
         }
         .desc{
           @include no-wrap();
           font-size: $font-size-small;
           color: $color-text-d;
         }
       }
       .control{
         flex: 0 0 30px;
         width: 30px;
         padding: 0 10px;
         .icon-play-mini, .icon-pause-mini, .icon-playlist{
           font-size: 30px;
           color: $color-theme-d;
         }
         .icon-mini{
           font-size: 32px;
           position: absolute;
           left: 0;
           top: 0;
         }
       }
     }
   }
</style>
