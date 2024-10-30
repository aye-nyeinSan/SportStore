<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { type Product } from '@/types';
defineProps<{
  product: Product
}>()



</script>

<template>
  <RouterLink 
    class="link"
     :to="{
        name: 'ProductDetails',
        params: {
          id: product.id
        }
      }">
    <v-card class="mx-2" max-width="400">
      <v-img class="align-end" height="200" :src="product.image" cover></v-img>

      <v-card-title class="pt-6">{{ product.name }}</v-card-title>
      <v-card-subtitle>{{ product.description }}</v-card-subtitle>

      <v-card-text>
        <div>${{ product.price }}</div>
      </v-card-text>
    </v-card>
  </RouterLink>
</template>


<style>
.link {
  text-decoration: none;
  color: #2c3e50;
}</style>