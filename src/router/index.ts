import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/sign',
    name: 'sign',
    component: () => import('../views/sign.vue')
  },
  {
    path: '/home/pageOne',
    name: 'pageOne',
    component: () => import('../views/pageOne.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
