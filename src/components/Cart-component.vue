<!-- <script lang="ts">
export default {
  name: 'Cart-component'
}
</script>

<template v-if="productsInCart.length">
  <h2
    className="text-center font-roboto_slab text-[36px] font-medium text-green800 tab&2xl:text-[64px]"
  >
    Cart
  </h2>
  <div v-for="(product, index) in productsInCart" :key="index" class="item">
    <div class="remove" @click="this.$store.dispatch('removeFromCart', product.id)">
      Remove item
    </div>
    <div class="photo">
      <img :src="product.image" alt="" />
    </div>
    <div class="description">
      {{ product.title }}
    </div>
    <div class="price">
      <span class="quantity-area">
        <button :disabled="product.quantity <= 1" @click="product.quantity--">-</button>
        <span class="quantity">{{ product.quantity }}</span>
        <button @click="product.quantity++">+</button>
      </span>
      <span class="amount">US$ {{ (product.price * product.quantity).toFixed(2) }}</span>
    </div>
  </div>
  <div class="grand-total">Grand Total: US$ {{ orderTotal() }}</div>
  <div>
    <h4>No items in Cart yet</h4>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ShoppingBasket',

  methods: {
    orderTotal() {
      var total = 0
      this.productsInBag.forEach((item) => {
        total += item.price * item.quantity
      })
      return total.toFixed(2)
    }
  },
  computed: mapState(['productsInBag'])
}
</script> -->
