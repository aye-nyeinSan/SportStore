<template>
  <!-- Category Links Navbar -->
  <nav class="nav-bottom">
    <RouterLink to="/" class="nav-link">Shoes</RouterLink>
    <RouterLink to="/" class="nav-link">Shirt</RouterLink>
    <RouterLink to="/" class="nav-link">Shorts</RouterLink>
  </nav>
</template>

<style scoped>
/* Navbar styling */
.nav-bottom {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 40px;
  background-color: #ffffff;
  padding: 15px 0;
}

/* Individual link styling */
.nav-bottom .nav-link {
  font-size: 16px;
  text-decoration: none;
  color: #333;
  padding: 10px 15px;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  position: relative;
}

/* Add separator using ::after pseudo-element */
.nav-bottom .nav-link::after {
  content: "|";
  position: absolute;
  right: -20px;
  color: #ccc;
}

/* Remove separator from the last link */
.nav-bottom .nav-link:last-child::after {
  content: "";
}

/* Hover effect */
.nav-bottom .nav-link:hover {
  color: #007bff;
  border-bottom: 2px solid #007bff;
}

/* Active route link styling */
.router-link-active {
  font-weight: bold;
  color: #007bff;
  border-bottom: 2px solid #007bff;
}
</style>