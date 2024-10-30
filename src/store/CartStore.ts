import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as any[], // Declare the cart state as an array
  }),
  getters: {
    cartItems: state => state.cart, // Reactive getter for cart items
  },
  actions: {
    addToCart(item: any) {
      const existingItem = this.cart.find(i => i.id === item.id)
      if (existingItem) {
        existingItem.quantity += item.quantity
      } else {
        this.cart.push({ ...item }) // Add a new item reactively
      }
    },
    removeFromCart(id: number) {
      this.cart = this.cart.filter(item => item.id !== id) // Use filter to create a new array
    },
    incrementItemQuantity(id: number) {
      const item = this.cart.find(i => i.id === id)
      if (item) item.quantity++
    },
    decrementItemQuantity(id: number) {
      const item = this.cart.find(i => i.id === id)
      if (item && item.quantity > 1) item.quantity--
    },
  },
})
