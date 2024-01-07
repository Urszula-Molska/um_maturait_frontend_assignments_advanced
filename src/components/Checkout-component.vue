<!-- <template v-if="this.productsInCart.length">
  <div class="container max-w-[200px]">
    <h2
      className="text-center font-roboto_slab text-[36px] font-medium text-green800 tab&2xl:text-[64px]"
    >
      Cart
    </h2>
    <div v-for="(product, index) in this.productsInCart" :key="index">
      <div @click="this.store.dispatch('removeFromCart', product.id)">Remove item</div>
      <div>
        <img :src="product.image" alt="{{product.title}}" />
      </div>
      <div>
        {{ product.title }}
      </div>
      <div class="price">
        <span>
          <button :disabled="product.quantity <= 1" @click="product.quantity--">-</button>
          <span>{{ product.quantity }}</span>
          <button @click="product.quantity++">+</button>
        </span>
        <span>US$ {{ (product.price * product.quantity).toFixed(2) }}</span>
      </div>
    </div>
    <div>Grand Total: US$ {{ orderTotal() }}</div>
    <div>
      <h4>No items in Cart yet</h4>
    </div>
  </div>
</template> -->

<template>
  <div
    className="mx-auto flex w-full flex-col products-center justify-center bg-white px-[10px] pb-[99px] pt-20
    2xl:pt-[114px] max-w-screen-lg"
  >
    <h2
      className="text-center font-roboto_slab text-[36px] font-medium text-green800 tab&2xl:text-[64px] mb-10 "
    >
      Your Cart
    </h2>
    <!-- <div v-if="isLoading">Loading...</div> -->
    <div v-if="this.productsInCart" class="">
      <ul class="mb-20 flex flex-wrap justify-center gap-[50px]">
        <li
          v-for="product in this.productsInCart"
          :id="product.id"
          :key="product.id"
          class="max-w-[200px] flex w-full flex-col items-center justify-center border-gray-100 border-solid border-2 p-5"
        >
          <div class="mb-3 w-full tab&2xl:mb-[51px] tab&2xl:h-[566px] tab&2xl:w-[430px]">
            <img
              v-if="!isLoading"
              class="block w-full bg-white object-contain tab&2xl:h-[566px] tab&2xl:w-[430px]"
              :src="product.image"
              :alt="product.title"
            />
          </div>
          <p class="text-center">${{ product.price }}</p>
          <button
            className="btn btn-square btn-outline mt-3 ml-12"
            @click="this.$store.dispatch('removeFromCart', product.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      </ul>
      <div class="text-lg text-center">
        Quantity of Products:
        <span class="font-bold"> {{ orderQuantity() }}</span>
      </div>
      <div class="text-lg text-center">
        Grand Total: <span class="font-bold">US$ {{ orderTotal() }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ShoppingCart',

  methods: {
    orderTotal() {
      let total = 0
      this.productsInCart.forEach((item) => {
        total += item.price
      })
      return total.toFixed(2)
    },
    orderQuantity() {
      const quantity = this.productsInCart.length
      return quantity
    }
  },

  computed: mapState(['productsInCart'])
})
</script>
