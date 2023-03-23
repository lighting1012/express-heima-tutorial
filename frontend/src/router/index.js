import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
  scrollBehavior : () => ( { left : 0, top : 0 } ),
})

export default router