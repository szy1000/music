<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex';
  import {getSingerDetailReq} from '../../api/singerReq';
  import {CreateSong} from '../../common/js/song';
  import MusicList from '../../components/MusicList/MusicList'

  export default {
    data() {
      return {
        songs: []
      }
    },
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    components: {
      MusicList
    },
    created() {
      this._getSingerDetailFn();
    },
    methods: {
      _getSingerDetailFn() {
        let id = this.singer.id;
        if (!id) {
          this.$router.push('/singer')
          return
        }
        getSingerDetailReq(id).then((res) => {
          if (res.code === 0) {
            this.songs = this._normalizeSongs(res.data.list);
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
        return ret
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s
  }

  .slide-enter, .slide-leave-to {
    transform: translate3d(100%, 0, 0)
  }
</style>
