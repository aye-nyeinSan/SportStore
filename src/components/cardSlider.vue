<script setup lang="ts">
import Card from './card.vue';
import { type Product } from '@/types';
import ProductService from '@/services/ProductService';
import { onMounted, watchEffect,ref} from 'vue';

const products=ref<Product[] | null>(null)


onMounted(()=>{
    ProductService.getProducts()
    .then((response)=>{
      products.value=response.data
      console.log(products.value)
    })
    .catch((err)=>{
      console.log(err)
    })
  })

</script>
<template>
  <v-sheet class="mx-auto">
    <v-slide-group
      v-model="model"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="(product, index) in products"
        :key="index"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-scale-transition>
          <div @click="toggle">
            <Card :product="product" :id="product.id"/>
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon
                  v-if="isSelected"
                  color="white"
                  icon="mdi-check-circle-outline"
                  size="36"
                ></v-icon>
              </v-scale-transition>
            </div>
          </div>
        </v-scale-transition>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>



<style scoped>
/* Apply flexbox to the slide group to manage spacing */
.slide-group {
  display: flex;
   background:none;
   border: none;
   box-shadow: none;
  overflow-x: auto; /* Allow horizontal scrolling if needed */
  padding: 0 16px; /* Optional: Adjust padding for aesthetics */
}

/* Ensure each card item scales nicely on hover */
.v-slide-group-item {
    gap:190px;
  transition: transform 0.3s ease-in-out;
}

.v-slide-group-item:hover {
  transform: scale(1.05);
}

/* Transparent background for arrow buttons */
.v-btn {
  background-color: transparent !important;
}

/* Icon color */
.v-icon {
  color: #000;
}

/* Keep the slide group buttons transparent */
.v-slide-group .v-btn {
  background-color: transparent;
}
</style>
