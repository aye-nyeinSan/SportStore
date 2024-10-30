<script setup lang="ts">
import CardSlider from '@/components/cardSlider.vue';
import img1 from '@/assets/men/shirt/shm1_bl.png'
import { VNumberInput } from 'vuetify/labs/VNumberInput'
import { ref } from 'vue';
   // Colors and sizes data
const colors = [
  { name: 'Red', value: '#ff0000' },
  { name: 'Blue', value: '#0000ff' },
  { name: 'Green', value: '#00ff00' }
];
const sizes = ['S', 'M', 'L', 'XL']; 

const selectedSize = ref('S')

</script>

<template>
    <div class="d-flex flex-row mb-6 justify-center align-center">
        <v-sheet class="ma-2 pa-2">
            <v-img :src="img1" width="300">
                
            </v-img>
        </v-sheet>
        <v-sheet class="ma-2 pa-2">
            <h2>Name</h2>
            <p>Men's shirt</p>
            <p>$ 1000</p>
            <p>------------------</p>

            <p>Color</p>
            <div class="d-flex mb-5">
                <v-btn
                v-for="color in colors"
                :key="color.name"
                :style="{ backgroundColor: color.value, color: '#fff', margin: '0 4px' }"
                @click="selectedColor = color.value"
                >
                </v-btn>
            </div>

            <p>Select Size</p>
            <v-select
                v-model="selectedSize"
                :items="sizes"
                outlined
                class="mt-2"
            ></v-select>


            <v-number-input
            :reverse="false"
            controlVariant="split"
            :hideInput="false"
            :inset="false"
                >
            </v-number-input>

            <v-btn class="mt-4">Add To Cart</v-btn>
        </v-sheet>
    </div>

    <v-container>
        <h3 class="mb-4">Related Products</h3>
        <CardSlider class="mb-5"></CardSlider>
    </v-container>
       



</template>


<style scoped>
.v-number-input .v-icon {
  color: #1976d2 !important; /* or any visible color */
}
</style>