<script lang="ts">
import { mapState } from 'vuex'
import { defineComponent } from 'vue'

interface Product {
  id: string
  title: string
  image: string
  price: number
  description: string
  rating: { rate: number }
}

export default defineComponent({
  name: 'ProductsList',
  methods: {
    selectProduct(product: Product) {
      this.$store.dispatch('selectProduct', product)
    }
  },

  computed: mapState(['products', 'productsInCart', 'selectedProduct', 'isLoading'])
})
</script>

<template>
  <div
    className="mx-auto flex w-full flex-col products-center justify-center bg-white px-[10px] pb-[99px] pt-20 lg:px-[50px]"
  >
    <h2
      className="text-center font-roboto_slab text-[36px] font-medium text-green800 tab&2xl:text-[64px]"
    >
      Products
    </h2>
    <p
      className="pb-10 pt-[37px] text-center font-poppins text-[22px] font-medium text-green800 2xl:pb-20"
    >
      Get in on the trend with our curated selection of best-selling styles.
    </p>
    <div v-if="!products">Loading...</div>
    <div v-else-if="products">
      <ul class="mb-20 flex flex-wrap justify-center gap-[100px]">
        <li
          v-for="product in this.products"
          :id="product.id"
          :key="product.id"
          @click="selectProduct(product)"
          class="flex w-full max-w-[300px] flex-col products-center border-gray-100 border-solid border-2 p-5 h-auto"
        >
          <div>
            <router-link :to="`/product/${product.id}`">
              <div class="mb-3 w-full">
                <img
                  v-if="!isLoading"
                  class="block w-full bg-white object-contain"
                  :src="product.image"
                  :alt="product.title"
                />
              </div>
              <p class="mb-2 text-center font-poppins text-[18px] font-semibold text-gray-400">
                {{ product.title }}
              </p>
              <div
                class="flex products-center justify-center font-poppins text-[22px] font-medium text-gray200"
              >
                <p class="mr-[39px]">${{ product.price }}</p>
                <div
                  class="mr-[48px] h-[27px] border-[1px] text-[22px] font-medium text-gray200"
                ></div>
                <p class="mr-[9px]">{{ product.rating.rate }}</p>
              </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
