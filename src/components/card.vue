<template>
  <v-card class="mx-2" max-width="400">
    <v-img class="align-end" height="200" :src="imageSrc" cover></v-img>

    <v-card-title class="pt-6">{{ title }}</v-card-title>
    <v-card-subtitle>{{ description }}</v-card-subtitle>

    <v-card-text>
      <div>${{ price }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>
