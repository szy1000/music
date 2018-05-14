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
    <div class="recommend-list">
      <h1 class="list-title">热门歌单推荐</h1>
      <ul>
        <li v-for="item in discList" class="item">
          <div class="icon">
            <img width="60" height="60" :src="item.imgurl">
          </div>
          <div class="text">
            <h2 class="name" v-html="item.creator.name"></h2>
            <p class="desc" v-html="item.dissname"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getRecommendReq, getDiscReq} from '../../api/recommendReq.js';
  import iSlider from '../../Base/slider/slider';

  export default {
    data() {
      return {
        recommends: [],
        discList: []
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
            this.discList = res.data.list
            console.log(res.data.list);
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
    .recommend-list{
      .list-title{
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-theme;
      }
      .item{
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;
      }
      .icon{
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;
      }
      .text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
        font-size: $font-size-medium;
        .name{
          margin-bottom: 10px;
          color: $color-text;
        }
        .desc{
          color: $color-text-d
        }

      }
    }
  }
</style>
