<template>
  <div id="loading">
    <img width="24" height="24" src="./loading.gif" alt="">
    <p class="desc">{{title}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '正在加载...'
      }
    }
  };
</script>

<style lang="scss">
  @import "../../common/scss/variable.scss";
  #loading {
    width: 100%;
    text-align: center;
    .desc{
      line-height: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
    }
  }
</style>
