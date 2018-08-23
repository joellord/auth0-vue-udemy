import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import { isLoggedIn } from "./utils/auth";

Vue.use(Router)

function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: "/notauthorized"
    });
  } else {
    next();
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/secret',
      name: 'secret',
      beforeEnter: requireAuth,
      component: () => import('./views/Secret.vue')
    },
    {
      path: '/callback',
      name: 'callback',
      component: () => import('./views/Callback.vue')
    },
    {
      path: '/notauthorized',
      name: 'notauthorized',
      component: () => import('./views/NotAuthorized.vue')
    }
  ]
})
