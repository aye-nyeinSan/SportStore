<template>

    <!-- Second navigation: Category links -->
    <nav class="nav-bottom">
      <RouterLink :to="{ name: 'home' }" class="nav-link">MEN</RouterLink>
      <RouterLink :to="{ name: 'home' }" class="nav-link">WOMEN</RouterLink>
      <RouterLink :to="{ name: 'home' }" class="nav-link">KIDS</RouterLink>
    </nav>
</template>
<style scoped>
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