<template>
  <v-container fluid class="pa-8">
    <v-row>
      <!-- Cart Items Section -->
      <v-col cols="12" md="8">
        <CartItem v-for="n in 3" :key="n" />
      </v-col>

      <!-- Order Summary Section -->
      <v-col cols="12" md="4">
        <OrderSummary />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import CartItem from "@/components/basketCard.vue";
import OrderSummary from "@/components/orderSummary.vue";

export default {
  name: "Check-out",
  components: {
    CartItem,
    OrderSummary,
  },
};
</script>
