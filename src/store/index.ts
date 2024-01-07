import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import axios from 'axios'
import type { Commit } from 'vuex/types/index.js'
import { nanoid } from 'nanoid'

interface Product {
  id: string | null
  title: string
  image: string
  price: number
  description: string
  rating: { rate: number }
  $vue: any
}

type ProductId = string | null

export interface State {
  products: Product[]
  productsInCart: Product[]
  selectedProduct: {}
  isLoading: false
}
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    products: [],
    productsInCart: [],
    selectedProduct: {}
  },
  mutations: {
    loadProducts(state: State, products: Product[]) {
      state.products = products
    },
    loadCart(state: State, products: Product[]) {
      state.productsInCart = products
    },
    loadSelectedProduct(state: State, product: Product) {
      state.selectedProduct = product
    },
    selectProduct(state: State, product: Product) {
      state.selectedProduct = product
      localStorage.setItem('selectedProduct', JSON.stringify(state.selectedProduct))
    },
    addToCart(state: State, product: Product) {
      product.id = nanoid()
      state.productsInCart.push(product)
      localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart))
    },
    removeFromCart(state: State, productId: ProductId) {
      const updatedCart = state.productsInCart.filter((item) => productId != item.id)
      state.productsInCart = updatedCart
      localStorage.setItem('productsInCart', JSON.stringify(state.productsInCart))
    }
  },
  actions: {
    loadProducts({ commit }: { commit: Commit }) {
      axios.get('https://fakestoreapi.com/products').then((response) => {
        const data: Product[] = response.data
        commit('loadProducts', data)
      })
    },
    loadCart({ commit }: { commit: Commit }) {
      if (localStorage.getItem('productsInCart')) {
        commit('loadCart', JSON.parse(localStorage.getItem('productsInCart')))
      }
    },
    loadSelectedProduct({ commit }: { commit: Commit }) {
      if (localStorage.getItem('selectedProduct')) {
        commit('loadSelectedProduct', JSON.parse(localStorage.getItem('selectedProduct')))
      }
    },
    selectProduct({ commit }: { commit: Commit }, product: Product) {
      commit('selectProduct', product)
    },

    addToCart({ commit }: { commit: Commit }, product: Product) {
      commit('addToCart', product)
    },

    removeFromCart({ commit }: { commit: Commit }, productId: ProductId) {
      if (confirm('Are you sure you want to remove the item from Cart?')) {
        commit('removeFromCart', productId)
      }
    }
  },
  modules: {}
})
