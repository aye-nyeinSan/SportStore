
<script setup lang="ts">
import Card from '@/components/card.vue';
import Footer from '@/components/footer.vue';
import Filter from '@/components/filter.vue';
import PeopleNav from '@/components/people.vue';

const components = {
  Card,
};

const data = () => ({
  products: [
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/shoes.jpg',
      name: 'Name',
      desc: 'desc',
      price: 80,
      discountPrice: 50,
      discount: 20,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/shoes.jpg',
      name: 'Name',
      desc: 'desc',
      price: 80,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/shoes-2.jpg',
      name: 'Name',
      desc: 'desc',
      price: 80,
      discountPrice: 50,
      discount: 20,
    },
    {
      image: 'https://cdn.vuetifyjs.com/images/cards/shoes.jpg',
      name: 'Name',
      desc: 'desc',
      price: 80,
    },
  ],
});


</script>
<template>
  <v-container fluid>
    <div class="text-center mb-8">
      <h1 class="category-title">{{MEN}}</h1>
      <div class="category-options">
        <span>shoes</span> | <span>Shirt</span> | <span>Shorts</span>
      </div>
    </div>

    <v-row>
    

      <!-- Product Grid Section -->
      <v-col cols="12" md="9">
        <v-row>
          <v-col
            v-for="(product, index) in products"
            :key="index"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            class="d-flex justify-center"
          >
            <Card
              :imageSrc="product.image"
              :title="product.name"
              :description="product.desc"
              :price="product.price"
              :discountPrice="product.discountPrice"
              :discount="product.discount"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>
.category-title {
  font-size: 48px;
  font-weight: bold;
  text-transform: uppercase;
}

.category-options {
  font-size: 18px;
  color: gray;
  margin-top: 8px;
}

.filter-section {
  border-right: 1px solid #e0e0e0;
  padding-right: 16px;
}

.v-row {
  margin-bottom: 16px;
}

.filter-category h4 {
  margin-bottom: 8px;
}

.v-col {
  margin-bottom: 24px;
}
</style>
