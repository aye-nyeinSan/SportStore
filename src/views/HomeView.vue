<script setup lang="ts">
import HeroSlider from '@/components/heroSlider.vue';
  import Why from '@/components/whyShop.vue'
  import promo from '@/assets/4.png'
</script>

<template>
  <main>
    <v-container>
      <HeroSlider/>
      <div class="promotion">
        <img :src="promo" alt="" 
        :width="100"
        width="100%"
        aspect-ratio="16/9">
      </div>
      
      <Why/>
     
     <div class="links">

     </div>
    </v-container>
  </main>
</template>
