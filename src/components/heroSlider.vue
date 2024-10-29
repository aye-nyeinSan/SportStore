<script setup lang="ts">
import png1 from '@/assets/1.png';
import png2 from '@/assets/2.png';
import png3 from '@/assets/3.png';
</script>
<template>
 
   
      <v-carousel show-arrows>
        <template v-slot:prev="{ props }">
          <v-btn
            variant="elevated"
            @click="props.onClick"
            :style="{ backgroundColor: 'transparent', boxShadow: 'none',color: 'white'  }"
          >
            <
          </v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn
            variant="elevated"
            @click="props.onClick"
            :style="{ backgroundColor: 'transparent', boxShadow: 'none',color: 'white' }"
          >
            >
          </v-btn>
        </template>
        <v-carousel-item
          :src=png1
          cover
        ></v-carousel-item>

        <v-carousel-item
          :src=png2
          cover
        ></v-carousel-item>

        <v-carousel-item
          :src=png3
          cover
        ></v-carousel-item>
      </v-carousel>
  
 
</template>
