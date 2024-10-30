<template>
  <v-container>
    <h1 class="text-center">MEN</h1>
    <ItemCategory/>
    <v-row>
      <v-col
        v-for="(product, index) in products"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-img :src="product.image" height="200" />
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import ProductService from '@/services/ProductService'; // Adjust path if necessary
import ItemCategory from '@/components/ItemCategory';

export default defineComponent({
  name: 'MenView',
  setup() {
    const products = ref([]);

    onMounted(() => {
      ProductService.getProductsByCategory('men')
        .then((response) => {
          products.value = response.data;
        })
        .catch((error) => {
          console.error('Failed to fetch men products:', error);
        });
    });

    return { products };
  },
});
</script>

