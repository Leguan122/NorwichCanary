import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/historia-chovu',
      name: 'history',
      component: () => import('../views/HistoryView.vue')
    },
    {
      path: '/sucasnost-chovu',
      name: 'present',
      component: () => import('../views/PresentView.vue')
    }
  ]
})

export default router
