<template>
  <div id="recommend">
    <div v-if="recommends.length" class="slider-wrapper">
      <i-slider>
        <div v-for="(item,index) in recommends" :key="index">
          <a :href="item.linkUrl">
            <img :src="item.picUrl">
          </a>
        </div>
      </i-slider>
    </div>
  </div>
</template>

<script>
  import {getRecommendReq, getDiscReq} from '../../api/recommendReq.js';
  import iSlider from '../../Base/slider/slider';

  export default {
    data() {
      return {
        recommends: []
      };
    },
    components: {
      iSlider
    },
    created: function() {
      this._getRecommendReq();
      this._getDiscReq();
    },
    methods: {
      _getRecommendReq() {
        const res = getRecommendReq();
        res.then((res) => {
          if (res.code === 0) {
            this.recommends = res.data.slider;
          }
        });
      },
      _getDiscReq() {
        const res = getDiscReq();
        res.then((res) => {
          if (res.code === 0) {
            console.log(res.data);
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
    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
  }
</style>
