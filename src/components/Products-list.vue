<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useQuery } from 'vue-query'
import { Notify } from 'notiflix/build/notiflix-notify-aio'
// import axios from 'axios';

type Product = {
  id: number
  title: string
  image: string
  price: number
  rating: { rate: number }
}
// let data: Promise<Product[]>
let isLoading: boolean

const fetchPictures = async (limit: number): Promise<Product[]> => {
  const URL = `https://fakestoreapi.com/products?limit=${limit}`
  try {
    // if (limit.value < 21) {
    isLoading = true
    const response = await fetch(`${URL}`).then((response) => response.json())
    console.log('response', response)

    if (response) {
      isLoading = false
      return response
    }
    //   pictures.value = response.data
    //
    // } else {
    //   Notify.info('There are no more records to display!')
    // }
  } catch (error) {
    console.error(error)
  }
}

export default defineComponent({
  name: 'Products-list',
  setup() {
    const { isLoading, isError, isFetching, data, error, refetch } = useQuery(
      'products',
      async () => fetchPictures(10)
    )
    console.log(useQuery)
    return { isLoading, isError, isFetching, data, error, refetch }
  }
})
</script>

<template>
  <div
    className="flex w-full flex-col items-center justify-center bg-white px-[10px] pb-[99px] pt-20
    2xl:pt-[114px]"
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
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="isError">An error has occurred: {{ error }}</div>
    <div v-else-if="data">
      <ul class="mb-20 flex flex-wrap justify-center gap-[43px]">
        <li
          v-for="item in data"
          :key="item.id"
          class="flex w-full max-w-[430px] flex-col items-center"
        >
          <div class="mb-3 w-full tab&2xl:mb-[51px] tab&2xl:h-[566px] tab&2xl:w-[430px]">
            <img
              v-if="!isLoading"
              class="block w-full bg-white object-contain tab&2xl:h-[566px] tab&2xl:w-[430px]"
              :src="item.image"
              :alt="item.title"
            />
            <!-- <Loader v-else /> -->
          </div>
          <p class="mb-2 w-[303px] text-center font-poppins text-[22px] font-semibold text-gray400">
            {{ item.title }}
          </p>
          <div
            class="flex items-center justify-center font-poppins text-[22px] font-medium text-gray200"
          >
            <p class="mr-[39px]">${{ item.price }}</p>
            <div class="mr-[48px] h-[27px] border-[1px] text-[22px] font-medium text-gray200"></div>
            <p class="mr-[9px]">{{ item.rating.rate }}</p>

            <!-- <svg class="h-6 w-6">
            <use href="${sprite}#icon-star"></use>
          </svg> -->
          </div>
        </li>
      </ul>
    </div>
    <!-- <<button 
      v-if="limit < 21"
      id="fetch"
      @click="limit + 6" -->
    <!-- class="relative flex h-[65px] w-[224px] items-center rounded-[3px] border-[2px] border-green800
    pl-[55px] font-poppins text-[22px] font-medium text-green800" > See all -->
    <!-- <svg
        class="absolute right-[55px] top-[20px] z-10 h-[23px] w-[23px] animate-pulse fill-green800"
      >
        <use href="${sprite}#icon-arrow-right"></use> -->
    <!-- </svg> -->
    <!-- </button>  -->
  </div>
</template>
