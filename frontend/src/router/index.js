import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../views/Landing.vue'),
    },
    {
      path: '/auta',
      name: 'cars',
      component: () => import('../views/Cars.vue'),
    },
    {
      path: '/diely',
      name: 'parts',
      component: () => import('../views/Parts.vue'),
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => import('../views/Filter.vue'),
    },
  ],
})

export default router
