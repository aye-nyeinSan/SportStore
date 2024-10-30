<template>
  <v-card outlined class="p-4 max-width" style="padding: 25px">
    <v-card-title class="font-weight-bold text-h6">ORDER SUMMARY</v-card-title>

    <v-divider class="my-2"></v-divider>

    <!-- Order Details -->
    <div class="d-flex justify-space-between mb-2">
      <span>{{ itemCount }} Items</span>
      <span>${{ totalPrice.toFixed(2) }}</span>
    </div>
    <div class="d-flex justify-space-between mb-4">
      <span>Delivery</span>
      <span>{{ deliveryFee }}</span>
    </div>

    <!-- Voucher Selection -->
    <v-select
      label="Use gift card or voucher"
      :items="['No Voucher']"
      outlined
      dense
      class="mb-4"
    ></v-select>

    <!-- Total Price -->
    <div class="d-flex justify-space-between font-weight-bold text-h6 mb-2">
      <span>Total</span>
      <span>${{ totalPrice.toFixed(2) }}</span>
    </div>
    <span class="text-caption text--secondary">VAT (7% Included)</span>

    <!-- Checkout Button -->
    <v-btn color="black" dark block class="mt-4" @click="handleCheckout">
      Checkout
    </v-btn>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useCartStore } from "@/store/CartStore";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "OrderSummary",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const cartStore = useCartStore();
    const router = useRouter(); // Call useRouter at the top of setup()

    // Computed properties
    const totalPrice = computed(() =>
      props.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );

    const itemCount = computed(() =>
      props.items.reduce((acc, item) => acc + item.quantity, 0)
    );

    const deliveryFee = computed(() => (itemCount.value > 0 ? "Free" : "$0.00"));

    // Handle checkout action
    const handleCheckout = () => {
      if (itemCount.value > 0) {
        alert("Order successfully placed!");

        cartStore.clearCart(); // Clear the cart
        console.log("Cleared cart:", cartStore.cart);

        router.push({ name: "home" }); // Redirect to home page
      } else {
        alert("Your cart is empty. Please add items to checkout.");
      }
    };

    return { totalPrice, itemCount, deliveryFee, handleCheckout };
  },
});
</script>
