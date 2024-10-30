<script>
import ig from '@/assets/instagram.png'
import fb from '@/assets/facebook.png'
import twitter from '@/assets/twitter.png'
export default {
  data: () => ({
    quickLinks: [
      { text: 'FAQS', route: { name: 'home' } },
      { text: 'Promotions', route: { name: 'home' } },
    ],
    helpLinks: [
      { text: 'Return & Refund', route: { name: 'home' } },
      { text: 'How to track the order', route: { name: 'home' } },
    ],
    aboutLinks: [
      { text: 'Contact Us', route: { name: 'home' } },
      { text: 'Email: @gmail.com', route: { name: 'home' } },
      { text: 'Tel: 1111-222-333', route: { name: 'home' } },
    ],ig,fb,twitter
  }),
}
</script>


<template>
    <v-footer class="bg-brown-darken-4">
     <v-container>
      <v-row no-gutters>
      <v-col cols="12" md="3">
        <router-link
          v-for="link in quickLinks"
          :key="link.text"
          :to="link.route"
          class="mx-2 text-decoration-none text-white"
        >
          {{ link.text }} <br>
        </router-link>
      </v-col>

      <v-col cols="12" md="3">
        <h3 class="mb-2">Get Help</h3>
        <router-link
          v-for="link in helpLinks"
          :key="link.text"
          :to="link.route"
          class="mx-2 text-decoration-none text-white"
        >
          {{ link.text }} <br>
        </router-link>
      </v-col>

      <v-col cols="12" md="3">
        <h3 class="mb-2">About Us</h3>
        <router-link
          v-for="link in aboutLinks"
          :key="link.text"
          :to="link.route"
          class="mx-2 text-decoration-none text-white"
        >
          {{ link.text }} <br>
        </router-link>
      </v-col>

      
      <v-col cols="12" md="3">
        <div class="d-flex">
          <v-img :src="ig" alt="Instagram" width="40" height="40" class="mx-1"/>
          <v-img :src="fb" alt="Facebook" width="40" height="40"class="mx-1"/>
          <v-img :src="twitter" alt="Twitter" width="40" height="40" class="mx-1"/>
        </div>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <p>@LevelUpSport , Inc. All Right Reserved</p>
    </v-row>
     </v-container>

  </v-footer>

</template>



<style>
    footer{
       width: 100%;
        background: #373539;
        color: #E4D2B2;

    }

    .links{
        display: flex;
        flex-direction:row;
        justify-content: space-between;
    }

    .copyright{
        text-align: center;
    }
</style>