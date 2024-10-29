<template>
  <v-app>
    <v-container>
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
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
          cover
        ></v-carousel-item>

        <v-carousel-item
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          cover
        ></v-carousel-item>
      </v-carousel>
    </v-container>
  </v-app>
</template>
