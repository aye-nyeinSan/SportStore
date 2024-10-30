<template>
    <v-card outlined class="p-4 max-width" style="padding: 25px">
        <v-card-title class="font-weight-bold text-h6">ORDER SUMMARY</v-card-title>

        <v-divider class="my-2"></v-divider>

        <!-- Order Details -->
        <div class="d-flex justify-space-between mb-2">
            <span>2 Items</span>
            <span>$1000.00</span>
        </div>
        <div class="d-flex justify-space-between mb-4">
            <span>Delivery</span>
            <span>Free</span>
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
            <span>$1000.00</span>
        </div>
        <span class="text-caption text--secondary">VAT (7% Included)</span>

        <!-- Checkout Button -->
        <v-btn color="black" dark block class="mt-4">Checkout</v-btn>
    </v-card>
</template>

<script lang="ts">
export default {
    name: "OrderSummary",
};
</script>
