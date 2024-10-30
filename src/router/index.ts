import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterForm.vue'
import LoginView from '@/views/LoginForm.vue'
import ProductPage from '@/views/ProductPage.vue'
import BasketView from '@/views/BasketView.vue'
import MenView from '@/views/People/MenView.vue'; 


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/register',
      name:'register',
      component:RegisterView
    },
    {
      path:'/login',
      name:'login',
      component:LoginView
    },
    {
      path: '/products/:id',
      name: 'ProductDetails',
      component: ProductPage,
      props: (route) => ({
        id: route.params.id
      }),
    },
    {
      path:'/basket',
      name:'basket',
      component:BasketView
    },
    {
      path:'/Men',
      name:'Men',
      component:MenView
    }
  ],
})

export default router
