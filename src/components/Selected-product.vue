<script lang="ts">
import type { Product } from '../interfaces'
import { mapState } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
  computed: mapState(['selectedProduct']),

  methods: {
    addToCart(selectedProduct: Product) {
      this.$store.dispatch('addToCart', selectedProduct)
    }
  }
})
</script>

<template>
  <div
    className="mx-auto max-w-[1280px] flex w-full flex-col products-center justify-center items-center bg-white px-[10px] pb-[50px] 2xl:pt-[50px] pt-10"
  >
    <h2 className="text-center font-roboto_slab text-[36px] font-medium text-green800">
      {{ selectedProduct.title }}
    </h2>
    <p
      className="pb-10 pt-[37px] text-center font-poppins text-[22px] font-medium text-green800 2xl:pb-10"
    >
      {{ selectedProduct.description }}
    </p>
    <div class="mb-3 w-full max-h-[566px] max-w-[430px]">
      <img
        v-if="!isLoading"
        class="block w-full bg-white object-contain"
        :src="selectedProduct.image"
        :alt="selectedProduct.title"
      />
    </div>
    <div class="flex justify-center font-poppins text-[22px] font-medium text-gray200 mt-10">
      <p class="mr-[39px]">price: ${{ selectedProduct.price }}</p>
      <div class="mr-[20px] h-[27px] border-[1px] text-[22px] font-medium text-gray200"></div>
      <p class="mr-[20px]">rating: {{ selectedProduct.rating.rate }}</p>
    </div>
    <button
      @click="addToCart(selectedProduct)"
      className="mt-5 btn btn-wide bg-primary text-white hover:text-black"
    >
      Add to Cart
    </button>
  </div>
</template>
