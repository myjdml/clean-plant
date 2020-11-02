import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/push-card',
    name: 'PushCard',
    component: () => import('../views/PushCard')
  },
  {
    path: '/text',
    name: 'Text',
    component: () => import('../components/Text')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
