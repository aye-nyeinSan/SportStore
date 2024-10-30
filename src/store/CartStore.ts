import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as any[], // Define state explicitly
  }),
  actions: {
    addToCart(item: any) {
      this.cart.push(item)
    },
    getCartItems() {
      return this.cart
    },
  },
})
