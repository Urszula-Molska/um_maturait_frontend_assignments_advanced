<script lang="ts">
import ShoppingCartIcon from '../components/Shopping-cart-icon.vue'
import { mapState } from 'vuex'
import { defineComponent } from 'vue'
import type { Product } from '../interfaces'

export default defineComponent({
  name: 'SelectedProduct',

  components: {
    ShoppingCartIcon
  },
  computed: mapState(['productsInCart']),
  methods: {
    addToCart(selectedProduct: Product) {
      this.$store.dispatch('addToCart', selectedProduct)
    },
    orderQuantity() {
      const quantity = this.productsInCart.length
      return quantity
    },
    orderTotal() {
      let total = 0
      this.productsInCart.forEach((item) => {
        total += item.price
      })
      return total.toFixed(2)
    }
  }
})
</script>
<template>
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <router-link to="/" className="btn btn-ghost text-xl active:bg-green-200"
        >MaturaIT Shop</router-link
      >
    </div>
    <router-link to="/" className="btn btn-ghost text-xl active:bg-green-200 ">Home</router-link>
    <div className="flex justify-center items-center">
      <div className="dropdown dropdown-end">
        <div
          tabIndex="{0}"
          role="button"
          className="btn btn-ghost btn-circle h-[50px] relative active:bg-green-200"
        >
          <div className="indicator flex items-center justify-center">
            <ShoppingCartIcon class="relative h-8 w-8 fill-current text-black mr-[4px]" />
            <span className="absolute top-[12px] badge badge-xs left-[20px]">{{
              orderQuantity()
            }}</span>
          </div>
        </div>
        <div
          tabIndex="{0}"
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body">
            <span className="font-bold text-lg">items: {{ orderQuantity() }}</span>
            <span className="text-info">Subtotal: ${{ orderTotal() }}</span>
            <div className="card-actions">
              <router-link :to="`/checkout`">
                <button className="btn btn-primary btn-block">Checkout</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
