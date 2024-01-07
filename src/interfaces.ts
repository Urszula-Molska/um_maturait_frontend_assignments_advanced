export interface Product {
  id: string | null
  title: string
  image: string
  price: number
  description: string
  rating: { rate: number }
  $vue: any
}

export type ProductId = string | null
