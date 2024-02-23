<template>
  <div class="main">
    <div class="error-container">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <p>Sorry, the page you are looking for might have been removed or does not exist.</p>
      <router-link to="/">Go back to homepage</router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.error-container {
  text-align: center;
}

h1 {
  font-size: 6rem;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>