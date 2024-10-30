import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createVuetify } from 'vuetify'
import 'vuetify/styles';
import * as components from 'vuetify/components'
import * as labs from 'vuetify/labs/components';
import * as directives from 'vuetify/directives'

const vuetify=createVuetify({
    components:{
        ...components,
        ...labs
    },
    directives,
    theme: {
        defaultTheme: 'light', // Set the default theme to light
    }
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
