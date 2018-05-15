<template>
  <div id="singer">
    <list-view :data="singer"></list-view>
    <h1>singer</h1>
  </div>
</template>

<script>
  import {getSingerListReq} from '../../api/singerReq';
  import Singer from '../../common/js/singer';
  import listView from '../../Base/listview/listview';

  export default {
    data() {
      return {
        singer: []
      }
    },
    created() {
      this._getSingerFn();
    },
    methods: {
      _getSingerFn() {
        const result = getSingerListReq();
        result.then((res) => {
          this.singer = this._normalizeSinger(res.data.list);
          console.log(this.singer);
        })
      },
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: '热门',
            items: []
          }
        }

        list.forEach((item, index) => {
          if (index < 10) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_mid,
              name: item.Fsinger_name
            }))
          }
          const key = item.Findex;

          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }

          map[key].items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        })

        let hot = []
        let ret = []
        for (let key in map) {
          let val = map[key];
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val);
          } else if (val.title === '热门') {
            hot.push(val)
          }
        }
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0);
        })

        return hot.concat(ret)
      }
    },
    components: {
      listView
    }
  };
</script>

<style lang="scss">
  @import "../../common/scss/variable.scss";
  @import "../../common/scss/mixin.scss";

  #singer {
    position: fixed;
    top: 88px;
    bottom: 0;
    width: 100%;
  }
</style>
