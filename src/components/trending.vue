<script setup lang="ts">
    import img1 from '@/assets/image 1.png'
     import img2 from '@/assets/image 2.png'
      import img3 from '@/assets/image 4.png'
</script>


<template>
    <v-container class="px-5 justify-center">
        <h1 class="text-center mb-8">Trending</h1>

<v-row class="mb-4" >
  <v-col cols="12" md="4">
    <v-img
        :width="300"
        aspect-ratio="16/9"
        center
        :src=img1
      >
      <p class="text-body text-white caption">
        Step into Strength: Women's Exercise Shoes for Every Journey <br>
        <v-btn color="red-accent-4" rounded="xl">Shop</v-btn>
       </p>
    </v-img>
    
  </v-col>

  <v-col cols="12" md="4">
    <v-img
       :width="300"
        aspect-ratio="16/9"
        center
        :src=img2
      >
      <p class="text-body text-white caption">
        Join the movement! Feel, look, perform your best in clothes designed to move with you. <br>
        <v-btn color="red-accent-4" rounded="xl">Shop</v-btn>
    </p>
</v-img>
  </v-col>

  <v-col cols="12" md="4">
    <v-img
        :width="300"
        aspect-ratio="16/9"
        center
        :src=img3 
      >
      <p class="text-body text-white caption">
        Join the movement! Feel, look, perform your best in clothes designed to move with you. <br>
        <v-btn color="red-accent-4" rounded="xl">Shop</v-btn>
      </p>
    </v-img>
  </v-col>
</v-row>
    </v-container>
      
  
</template>



<style>
 .caption{
    position: absolute;
    bottom: 10px;
    background:rgba(103, 101, 101, 0.5);
    padding: 15px;
 }
</style>