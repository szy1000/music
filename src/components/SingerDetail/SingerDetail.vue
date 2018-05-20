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
  import {getSingerDetailReq, getSongKeyReq} from '../../api/singerReq';
  import {CreateSong} from '../../common/js/song';

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
      this._getSongKeyFn();
      this._getSingerDetailFn();
    },
    events: {},
    methods: {
      _getSongKeyFn() {
        let id = this.singer.id || this.$route.params.id
        getSongKeyReq(id).then((res) => {
          if (res.code === 0) {
            this._normalizeSongs(res.data.list);
          }
        })
      },
      _getSingerDetailFn() {
        let id = this.singer.id || this.$route.params.id
        getSingerDetailReq(id).then((res) => {
          if (res.code === 0) {
            this._normalizeSongs(res.data.list);
          }
        })
      },
      _normalizeSongs(list) {
        let ret = [];
        list.forEach((item) => {
          let {musicData} = item;
          if (musicData.songid && musicData.albummid) {
            ret.push(new CreateSong(musicData));
          }
        })
        console.log(ret)
        return ret
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
