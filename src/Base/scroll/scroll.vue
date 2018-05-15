<template>
  <div class="" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import Bscroll from 'Better-scroll';

  export default {
    props: {
      probeType: {
        type: Number,
        default: 1
      },
      click: {
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default: null
      }
    },
    mounted() {
      setTimeout(() => {
        this._initSroll();
      }, 20)
    },
    methods: {
      _initSroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this.scroll = new Bscroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: this.click
        })
      },
      enable() {
        this.scroll && this.scroll.enable();
      },
      disable() {
        this.scroll && this.scroll.disable();
      },
      refresh() {
        this.scroll && this.scroll.refresh();
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.refresh()
        }, 20)
      }
    }
  }
</script>

<style lang="scss">
</style>
