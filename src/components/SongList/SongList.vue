<template>
  <div class="song-list">
    <ul>
      <li v-for="(song,index) in songs" :key="index" class="item">
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
    created() {
    },
    methods: {
      getDesc(song) {
        return `${song.singer} . ${song.album}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../common/scss/variable.scss';
  @import '../../common/scss/mixin.scss';

  .song-list {
    .item {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      height: 64px;
      font-size: $font-size-medium;
      .rank {
        flex: 0 0 25px;
        width: 25px;
        margin-right: 30px;
        text-align: center;
      }
      .content {
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        .name {
          @include no-wrap();
          color: $color-text;
        }
        .desc {
          @include no-wrap();
          margin-top: 4px;
          color: $color-text-d;
        }
      }
    }
  }
</style>
