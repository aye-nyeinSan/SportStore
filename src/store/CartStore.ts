import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as any[],
  }),
  getters: {
    cartItemCount: state => state.cart.length,
  },
  actions: {
    addToCart(item: any) {
      const existingItem = this.cart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        existingItem.quantity += item.quantity
      } else {
        this.cart.push({ ...item, quantity: item.quantity })
      }
    },
    incrementItemQuantity(id: number) {
      const item = this.cart.find(cartItem => cartItem.id === id)
      if (item) item.quantity++
    },
    decrementItemQuantity(id: number) {
      const item = this.cart.find(cartItem => cartItem.id === id)
      if (item && item.quantity > 1) item.quantity--
    },
    removeFromCart(id: number) {
      this.cart = this.cart.filter(item => item.id !== id)
    },
    clearCart() {
      this.cart = [] // Clear all items from the cart
    },
  },
})
