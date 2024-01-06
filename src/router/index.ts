import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '../views/Home-view.vue'
import AboutViewVue from '../views/About-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    }
  ]
})

export default router
