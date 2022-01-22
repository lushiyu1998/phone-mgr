import { createRouter, createWebHashHistory } from 'vue-router';
import store from '@/store';

const routes = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
  },
  {
    path: '/',
    name: 'BasicLayout',
    component: () => import(/* webpackChunkName: "BasicLayout" */ '../layout/BasicLayout/index.vue'),
    children: [
      {
        path: 'phones',
        name: 'Phones',
        component: () => import(/* webpackChunkName: "Phones" */ '../views/Phones/index.vue'),
      },
      {
        path: 'phones/:id',
        name: 'PhoneDetail',
        component: () => import(/* webpackChunkName: "PhoneDetail" */ '../views/PhoneDetail/index.vue'),
      },
      {
        path: 'user',
        name: 'User',
        component: () => import(/* webpackChunkName: "User" */ '../views/Users/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to ,from, next) => {
  if (!store.state.characterInfo.length) {
    store.dispatch('getCharacterInfo');
  }

  store.dispatch('getUserInfo');

  next();
});

export default router;
