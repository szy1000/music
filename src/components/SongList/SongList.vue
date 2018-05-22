<template>
  <div class="song-list">
    <ul>
      <li v-for="(song,index) in songs" :key="index">
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      songs: {
        type: Array,
        default: null
      }
    },
    data() {
      return {
        ratings: []
      }
    },
    components: {
      // star,
    },
    created() {
    },
    events: {},
    methods: {
      getDesc(song) {

      }
    }
  }
</script>

<style lang="scss" scoped>
  // @import '../../common/scss/mixin.scss';
  .song-list{

  }
</style>
