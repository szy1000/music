<template>
  <div id="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommends.length" class="slider-wrapper">
          <i-slider>
            <div v-for="(item,index) in recommends" :key="index">
              <a :href="item.linkUrl">
                <img class="needsclick" @load="loadImage" :src="item.picUrl">
              </a>
            </div>
          </i-slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="(item,index) in discList" class="item" :key="index">
              <div class="icon">
                <img width="60" height="60" v-lazy="item.imgurl">
              </div>
              <div class="text">
                <h2 class="name" v-html="item.creator.name"></h2>
                <p class="desc" v-html="item.dissname"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="loading-container" v-show="!discList.length">
        <loading/>
      </div>
    </scroll>
  </div>
</template>

<script>
  import {getRecommendReq, getDiscReq} from '../../api/recommendReq.js';
  import iSlider from '../../Base/slider/slider';
  import scroll from '../../Base/scroll/scroll';
  import loading from '../../Base/loading/loading';

  export default {
    data() {
      return {
        recommends: [],
        discList: []
      };
    },
    components: {
      iSlider,
      scroll,
      loading
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
            this.discList = res.data.list;
          }
        });
      },
      loadImage() {
        if (!this.checkedLoad) {
          this.checkedLoad = true;
          this.$refs.scroll.refresh();
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../common/scss/variable.scss";
  @import "../../common/scss/mixin.scss";

  #recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .recommend-content {
      height: 100%;
      overflow: hidden;
      .slider-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
      }
      .recommend-list {
        .list-title {
          height: 65px;
          line-height: 65px;
          text-align: center;
          font-size: $font-size-medium;
          color: $color-theme;
        }
        .item {
          display: flex;
          box-sizing: border-box;
          align-items: center;
          padding: 0 20px 20px 20px;
        }
        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
        }
        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: $font-size-medium;
          .name {
            margin-bottom: 10px;
            color: $color-text;
          }
          .desc {
            color: $color-text-d
          }

        }
      }
    }
    .loading-container{
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%)
    }
  }
</style>
