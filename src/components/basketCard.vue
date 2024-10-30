
<script lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMinus } from "@mdi/js";
import { defineComponent, PropType } from "vue";
import { useCartStore } from "@/store/CartStore";

export default defineComponent({
  name: "CartItem",
  props: {
    item: {
      type: Object as PropType<{
        id: number;
        name: string;
        image: string;
        price: number;
        quantity: number;
        selectedSize: string;
      }>,
      required: true,
    },
  },
  setup(props) {
    const cartStore = useCartStore();

    const incrementQuantity = () => {
      cartStore.incrementItemQuantity(props.item.id);
    };

    const decrementQuantity = () => {
      cartStore.decrementItemQuantity(props.item.id);
    };

    const removeItem = () => {
      cartStore.removeFromCart(props.item.id);
    };

    return { incrementQuantity, decrementQuantity, removeItem };
  },
});
</script>
<template>
    <v-card outlined class="mb-4">
        <v-row no-gutters class="align-center">
        <v-col cols="2">
            <v-img :src="item.image" alt="Product Image" class="rounded" max-width="100"></v-img>
        </v-col>

        <!-- Product Details -->
        <v-col cols="6">
            <div class="d-flex flex-column">
                <span class="font-weight-bold text-body-1">{{ item.name }}</span>
                <span class="text-caption text--secondary">In stock and ready to ship</span>
                <span class="text-caption text--secondary">Size: {{ item.selectedSize }}</span>
            </div>
        </v-col>

        <!-- Quantity Controls -->
        <v-col cols="2" class="d-flex align-center justify-center">
            <v-btn icon small @click="decrementQuantity">
                <SvgIcon type="mdi" :path="mdiMinus"  />
            </v-btn>
            <span class="mx-2">{{ item.quantity }}</span>
            <v-btn icon small @click="incrementQuantity">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-col>

        <!-- Price and Delete -->
        <v-col cols="2" class="text-right">
            <span class="font-weight-bold text-body-1">${{ item.price * item.quantity }}</span>
            <v-btn icon small class="ml-2" color="error">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-col>
    </v-row>
    </v-card>
</template>

