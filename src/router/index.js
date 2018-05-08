import Vue from 'vue';
import Router from 'vue-router';

import Rank from '../../src/components/Rank/Rank';
import Recommend from '../../src/components/Recommend/Recommend';
import Singer from '../../src/components/Singer/Singer';
import Search from '../../src/components/Search/Search';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/Search',
      component: Search
    }
  ]
})
