<script setup lang="ts">
  import logo from '@/assets/logo.png';
  import search from '@/assets/search.png';
  import SvgIcon from '@jamescoyle/vue-icon'
  import { mdiAccount, mdiShoppingOutline } from '@mdi/js'  

</script>

<template>
  <div class="navigation">
    <!-- First navigation: Logo, search box, and icons -->
    <nav class="nav-top">
      <RouterLink :to="{name:'home'}" class="nav-left">
        <img :src="logo" alt="Logo" class="logo" />
      </RouterLink>
      <div class="nav-center">
        <div class="search-box">
          <input type="text" placeholder="Search" />
          <button class="search-btn">
            <img :src="search" alt="Search" />
          </button>
        </div>
      </div>
      <div class="nav-right">
        <RouterLink :to="{ name: 'home' }" class="icon">
          <SvgIcon type="mdi" :path="mdiShoppingOutline" class="text-white"/>
        </RouterLink>
        <RouterLink :to="{ name: 'home' }" class="icon">
          <SvgIcon type="mdi" :path="mdiAccount" class="text-white"/>
        </RouterLink>
      </div>
    </nav>

    <!-- Second navigation: Category links -->
    <nav class="nav-bottom">
      <RouterLink :to="{ name: 'home' }" class="nav-link">MEN</RouterLink>
      <RouterLink :to="{ name: 'home' }" class="nav-link">WOMEN</RouterLink>
      <RouterLink :to="{ name: 'home' }" class="nav-link">KIDS</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
/* General container styling */
.navigation {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* First nav: Logo, search box, icons */
.nav-top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #373539;
  border-bottom: 1px solid #e0e0e0;
}

.nav-left img.logo {
  max-width: 150px;
}

.nav-center .search-box {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 5px;
  width: 500px;
}

.search-box input {
  border: none;
  outline: none;
  padding: 8px;
  flex-grow: 1;
}

.search-box .search-btn img{
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.nav-right {
  display: flex;
  gap: 20px;
}

.nav-right .icon img {
  width: 30px;
  height: 30px;
}

/* Second nav: Category links */
.nav-bottom {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
  background-color: #ffffff;
  padding: 15px 0;
}

.nav-bottom .nav-link {
  font-size: 16px;
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  transition: color 0.3s ease, border-bottom 0.3s ease;
}

.nav-bottom .nav-link:hover {
  color: #007bff;
  border-bottom: 2px solid #007bff;
}
</style>
