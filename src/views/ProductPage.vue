<script setup lang="ts">
import { type Product } from '@/types';
import CardSlider from '@/components/cardSlider.vue';
import { VNumberInput } from 'vuetify/labs/VNumberInput';
import { onMounted, ref } from 'vue';
import ProductService from '@/services/ProductService';
import { useCartStore } from '@/store/CartStore.ts';

// Colors and sizes data
const colors = [
  { name: 'Red', value: '#ff0000' },
  { name: 'Blue', value: '#0000ff' },
  { name: 'Green', value: '#00ff00' },
];

const sizes = ['S', 'M', 'L', 'XL'];

const selectedSize = ref('S'); // Selected size
const selectedColor = ref(colors[0].value); // Selected color
const quantity = ref(1); // Quantity

// Define props
const props = defineProps<{ id: number }>();

const product = ref<Product | null>(null); // Product data

// Fetch product data on mount
onMounted(() => {
  console.log('Product ID:', props.id);
  ProductService.getProduct(props.id)
    .then((response) => {
      product.value = response.data;
      console.log('Product fetched:', product.value);
    })
    .catch((error) => {
      console.error('Error fetching product:', error.message);
    });
});

// Initialize the cart store
const cartStore = useCartStore();

// Add product to cart
const addToCart = () => {
  if (product.value) {
    const cartItem = {
      ...product.value,
      quantity: quantity.value,
      selectedColor: selectedColor.value,
      selectedSize: selectedSize.value,
    };

    cartStore.addToCart(cartItem);
    alert('Item added to cart!');
    console.log('Added to cart:', cartItem);
  }
};
</script>

<template>

  <div v-if="product" class="d-flex flex-row mb-6 justify-center align-center">
    <v-sheet class="ma-2 pa-2">
      <v-img :src="product.image" width="300" />
    </v-sheet>
    <v-sheet class="ma-2 pa-2">
      <h2>{{ product.name }}</h2>
                  <p>{{product.category.categoryName}} {{ product.category.kind }}</p>
      <p>${{ product.price }}</p>
      <p>---------------------------------------------------------------</p>

      <p>Color</p>
      <div class="d-flex mb-5">
        <v-btn
          v-for="color in colors"
          :key="color.name"
          :style="{ backgroundColor: color.value, color: '#fff', margin: '0 4px' }"
          @click="selectedColor.value = color.value"
        ></v-btn>
      </div>

      <p>Select Size</p>
      <v-select v-model="selectedSize" :items="sizes" outlined class="mt-2" />

      <p>Quantity</p>
      <v-number-input v-model="quantity" controlVariant="split" outlined />

      <v-btn class="mt-4" @click="addToCart">Add To Cart</v-btn>
    </v-sheet>
  </div>

  <v-container>
    <h3 class="mb-4">Related Products</h3>
    <CardSlider class="mb-5" />
  </v-container>

</template>

<style scoped>
.v-number-input .v-icon {
  color: #1976d2 !important;
}
</style>