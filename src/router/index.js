import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import por_micro_red from '../views/Por_micro_red.vue'
import por_micro_red_eess from '../views/Por_micro_red_eess.vue'
import por_eess from '../views/Por_eess.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/por_micro_red',
      name: 'por_micro_red',
      //component: () => import('../views/AboutView.vue')
      component: por_micro_red
    },
    {
      path: '/por_micro_red_eess',
      name: 'por_micro_red_eess',
      //component: () => import('../views/AboutView.vue')
      component: por_micro_red_eess
    },
    {
      path: '/por_eess',
      name: 'por_eess',
      //component: () => import('../views/AboutView.vue')
      component: por_eess
    }
  ]
})

export default router
