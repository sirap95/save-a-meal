<template>
  <div class="header">
    <h1 class="title mb-4">Save a Meal!</h1>
    <div class="row mx-5">
      <div class="col-md-4"> <router-link class="menu" to="/">Home</router-link></div>
      <div class="col-md-4"> <router-link class="menu" to="/about">About</router-link></div>
      <div class="col-md-4"><router-link class="menu" to="/help-us">Help us!</router-link></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 500;
  text-align: center;
  background-color: #c68484;
  width: 100%;
  padding: 3rem;
}

.title {
  color: #fff;
  font-size: 4.5em;
}

.menu {
  font-weight: bold;
  font-size: larger;
  color: #fff;
  text-decoration: none;
}

.menu:hover {
  color: #fff;
  text-decoration: underline;
}
</style>
