<template>
  <div id="recommend">
    <h1>recommend</h1>
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
  }
</style>
