<script setup lang="ts">
import { type Product } from '@/types';
import { defineComponent, ref, onMounted } from 'vue';
import ProductService from '@/services/ProductService'; // Adjust path if necessary
import ItemCategory from '@/components/ItemCategory.vue';

const products=ref<Product[] | null>(null)

// Define props
const props = defineProps<{ id: number }>();



onMounted(()=>{
  ProductService.getProductsByCategory('men')
  .then((response)=>{
    products.value=response.data;
  })
  .catch((err)=>{
    console.log(err)
  })
})


</script>


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
      <RouterLink 
      class="link"
     :to="{
        name: 'ProductDetails',
        params: {
          id: product.id
        }
      }">
<v-card>
          <v-img :src="product.image" height="200" />
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>${{ product.price }}</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>
        </v-card>

      </RouterLink>
        
      </v-col>
    </v-row>
  </v-container>
</template>

