<script setup lang="ts">
import img1 from '@/assets/diversity.png'
import img2 from '@/assets/best-price.png'
import img3 from '@/assets/target.png'
import img4 from '@/assets/quality.png' 
</script>

<template>
     <div class="why">
      <v-row>
    <v-col cols="12" md="3">
      <v-img
          :width="300"
          aspect-ratio="16/9"
          center
          :src=img1
        ></v-img>
      <v-card
        text="We offer varied, high-quality sports gear"
        title="Diverse Product Range"
      ></v-card>
    </v-col>

    <v-col cols="12" md="3">
      <v-img
          :width="300"
          aspect-ratio="16/9"
          center
          :src=img2
        ></v-img>
      <v-card
        text="Providing affordability with competitive pricing"
        title="Competitive Prices"
      ></v-card>
    </v-col>

    <v-col cols="12" md="3">
      <v-img
          :width="300"
          aspect-ratio="16/9"
          center
          :src=img3
        ></v-img>
      <v-card
        text="Prioritizing user satisfaction with responsive service"
        title="Customer-Centric Experience"
      ></v-card>
    </v-col>

    <v-col cols="12" md="3">
      <v-img
          :width="300"
          aspect-ratio="16/9"
          center
          :src=img4
        ></v-img>
      <v-card
        text="Emphasizing renowned brands and durable products"
        title="Trusted Quality and Brands"
      ></v-card>
    </v-col>
      </v-row>
     </div>
</template>
