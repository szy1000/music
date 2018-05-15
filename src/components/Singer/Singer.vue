<template>
  <div id="singer">
    <h1>singer</h1>
  </div>
</template>

<script>
  import {getSingerListReq} from '../../api/singerReq';
  import Singer from '../../common/js/singer';

  export default {
    data() {
      return {
        singer: []
      }
    },
    mounted() {
      this._getSingerFn();
    },
    methods: {
      _getSingerFn() {
        const result = getSingerListReq();
        result.then((res) => {
          this._normalizeSinger(res.data.list)
        })
      },
      _normalizeSinger(list) {
        console.log(list)

        let map = {
          hot: {
            title: '热门',
            items: []
          }
        }

        list.forEach((item, index) => {
          if (index < 10) {
            map.hot.items.push(new Singer({
              id: item.Fsinger_id,
              name: item.Fsinger_name
            }))
          }
        })
      }
    }

  };
</script>

<style lang="scss">
  @import "../../common/scss/variable.scss";
  @import "../../common/scss/mixin.scss";

  #singer {
    background-color: red;
  }
</style>
