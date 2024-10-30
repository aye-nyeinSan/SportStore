<script setup lang="ts">
import { useCartStore } from "@/store/CartStore";
import CartItem from "@/components/basketCard.vue";
import OrderSummary from "@/components/orderSummary.vue";
import { computed } from "vue";
const cartStore = useCartStore();
const cartItems = computed(() => cartStore.cartItems); 
</script>

<template>
  <v-container fluid class="pa-8">
    <v-row>
      <!-- Cart Items Section -->
      <v-col cols="12" md="8">
        <div v-if="cartItems.length === 0">Your cart is empty!</div>
        <CartItem 
          v-for="(item, index) in cartItems" 
          :key="item.id" 
          :item="item" 
        />
      </v-col>

      <!-- Order Summary Section -->
      <v-col cols="12" md="4">
        <OrderSummary :items="cartItems" />
      </v-col>
    </v-row>
  </v-container>
</template>
