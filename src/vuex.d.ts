//vuex.d.ts
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare your own store states

  interface Product {
    id: string
    title: string
    image: string
    price: number
    description: string
    rating: { rate: number }
    $vue: any
  }

  interface State {
    products: Product[]
    productsInCart: Product[]
    selectedProduct: {}
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
