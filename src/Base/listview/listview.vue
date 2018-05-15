<template>
  <scroll class="listview" :data="data">
    <ul>
      <li v-for="(group,index) in data" class="list-group" :key="index">
        <h2 class="list-group-tittle">{{group.title}}</h2>
        <ul>
          <li v-for="(item,index) in group.items" class="list-group-item" :key="index">
            <img :src="item.avatar">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</template>

<script>
  import scroll from '../../Base/scroll/scroll';

  export default {
    props: {
      data() {
        return {
          type: Array,
          default: []
        }
      }
    },
    components: {
      scroll
    }
  }
</script>

<style lang="scss">
  // @import '../../common/scss/mixin.scss';

</style>
