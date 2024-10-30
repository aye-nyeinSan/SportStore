<template>
    <v-card outlined class="mb-4">
        <v-row no-gutters class="align-center">
        <v-col cols="2">
            <v-img src="\src\assets\shoesImg.png" alt="Product Image" class="rounded" max-width="100"></v-img>
        </v-col>

        <!-- Product Details -->
        <v-col cols="6">
            <div class="d-flex flex-column">
                <span class="font-weight-bold text-body-1">Name</span>
                <span class="text-caption text--secondary">In stock and ready to ship</span>
                <span class="text-caption text--secondary">Size: 7 US</span>
            </div>
        </v-col>

        <!-- Quantity Controls -->
        <v-col cols="2" class="d-flex align-center justify-center">
            <v-btn icon small @click="decrementQuantity">
                <SvgIcon type="mdi" :path="mdiMinus" class="text-white" />
            </v-btn>
            <span class="mx-2">1</span>
            <v-btn icon small @click="incrementQuantity">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-col>

        <!-- Price and Delete -->
        <v-col cols="2" class="text-right">
            <span class="font-weight-bold text-body-1">$500.00</span>
            <v-btn icon small class="ml-2" color="error">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-col>
    </v-row>
    </v-card>
</template>

<script lang="ts">
  import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMinus } from '@mdi/js';
export default {
    name: "CartItem",
    methods: {
        incrementQuantity() {
        // Increment quantity logic
        },
        decrementQuantity() {
        // Decrement quantity logic
        },
    },
};
</script>