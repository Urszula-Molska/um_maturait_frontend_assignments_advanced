import { createRouter, createWebHistory } from 'vue-router'
import HomeViewVue from '../views/Home-view.vue'
import ProductViewVue from '../views/Product-view.vue'
import CheckoutViewVue from '../views/Checkout-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewVue
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductViewVue
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutViewVue
    }
  ]
})

export default router
