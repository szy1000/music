<template>
  <div id="recommend">
    <ul>
      <li v-for="(item,index) in recommends" :key="index">
        <img :src="item.picUrl">
      </li>
    </ul>
  </div>
</template>

<script>
  import {getRecommendReq} from '../../api/recommendReq.js';

  export default {
    data() {
      return {
        recommends: []
      }
    },
    created: function() {
      this._getRecommendReq();
    },
    methods: {
      _getRecommendReq() {
        const res = getRecommendReq();
        res.then((res) => {
          if (res.code === 0) {
            this.recommends = res.data.slider
          }
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../common/scss/variable.scss";
  @import "../../common/scss/mixin.scss";

  #recommend {
    img{
      width: 100%;
    }
  }
</style>
