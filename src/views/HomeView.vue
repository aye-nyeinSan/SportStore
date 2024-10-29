<script setup lang="ts">
  import Why from '@/components/whyShop.vue'
  import Promotion from '@/components/promotion.vue';
import Trending from '@/components/trending.vue';
import Links from '@/components/Links.vue';
</script>

<template>
  <main>
    <v-container>
      <Trending/>
      <Promotion/>
      <Why/>
      <Links/>

    </v-container>
  </main>
</template>
