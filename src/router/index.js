/*
 * @Author: your name
 * @Date: 2020-11-21 15:32:46
 * @LastEditTime: 2020-11-22 14:43:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /clean-plant/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import index from '../views/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/index',
    name: 'index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 优先加载
    component: index
  },
  {
    path: '/push-card',
    name: 'PushCard',
    component: () => import('../views/PushCard')
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../views/activity')
  },
  {
    path: '/review',
    name: 'review',
    component: () => import('../views/Review')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
