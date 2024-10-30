<script>
    export default {
    data: () => ({
        quickLinks: [
        { text: 'All Men\'s', route: { name: 'home' } },
        { text: 'Shoes', route: { name: 'home' } },
        { text: 'Shirt', route: { name: 'home' } },
        { text: 'Shorts', route: { name: 'home' } },
        ],
        helpLinks: [
        { text: 'All Women\'s', route: { name: 'home' } },
        { text: 'Shoes', route: { name: 'home' } },
        { text: 'Shirt', route: { name: 'home' } },
        { text: 'Shorts', route: { name: 'home' } },
        ],
        aboutLinks: [
        { text: 'All Kid\'s', route: { name: 'home' } },
        { text: 'Clothing', route: { name: 'home' } },
        { text: 'Shoes', route: { name: 'home' } },
        { text: 'Accessory', route: { name: 'home' } },
        ]
    }),
    }
</script>

<template>
    <v-container :w="100" class="text-center">
        <v-row no-gutters class="mb-4 justify-center align-center">
            <v-col cols="12" md="3">
                <h3 class="mb-2">Men</h3>
                <router-link
                v-for="link in quickLinks"
                :key="link.text"
                :to="link.route"
                class="mx-2 text-decoration-none text-black"
                >
                {{ link.text }} <br>
                </router-link>
            </v-col>

            <v-col cols="12" md="3">
                <h3 class="mb-2">Women</h3>
                <router-link
                v-for="link in helpLinks"
                :key="link.text"
                :to="link.route"
                class="mx-2 text-decoration-none text-black"
                >
                {{ link.text }} <br>
                </router-link>
            </v-col>

            <v-col cols="12" md="3">
                <h3 class="mb-2">Kids</h3>
                <router-link
                v-for="link in aboutLinks"
                :key="link.text"
                :to="link.route"
                class="mx-2 text-decoration-none text-black"
                >
                {{ link.text }} <br>
                </router-link>
            </v-col>
        </v-row>
    </v-container>

</template>


<style scoped>

</style>