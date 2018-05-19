import Vue from 'vue';
import Router from 'vue-router';

import Rank from '../../src/components/Rank/Rank';
import Recommend from '../../src/components/Recommend/Recommend';
import Singer from '../../src/components/Singer/Singer';
import SingerDetail from '../../src/components/SingerDetail/SingerDetail';
import Search from '../../src/components/Search/Search';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'recommend'
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
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/Search',
      component: Search
    }
  ]
})
