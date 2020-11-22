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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
