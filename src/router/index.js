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
      path: '/about',
      name: 'about',
      component: () => import('../views/HistoryView.vue')
    },
    {
      path: '/norwich',
      name: 'norwich',
      component: () => import('../views/NorwichView.vue')
    },
    {
      path: '/fife-fancy',
      name: 'fifefancy',
      component: () => import('../views/FifeFancyView.vue')
    }
  ]
})

export default router
