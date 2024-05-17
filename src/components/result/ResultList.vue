<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 mt-4 px-5">
        <h1 class="text-start">{{ resultMeal[0].title }}</h1>
      </div>
      <div class="col-md-6 text-start py-4">
        <img
          :src="resultMeal[0].img"
          class="img-fluid rounded"
          :alt="resultMeal[0].title"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-start px-5">
        <div class="col-md-6"><h2>Description</h2></div>
        <p>
          {{ resultMeal[0].description }}
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-start px-5">
        <div class="col-md-6"><h2>Ingredients</h2></div>
        <ul
          v-for="(ingredient, index) in resultMeal[0].ingredients"
          :key="index"
        >
          <li>{{ ingredient.strIngredient }}</li>
        </ul>
      </div>
    </div>

    <!-- Guide Section -->
    <div class="row">
      <div class="col-md-12 text-start px-5">
        <h2>Guide</h2>
        <p>{{ resultMeal[0].guide }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { resultMeal } = defineProps(["result-meal"]);

console.log("this is props resultMeal: ", resultMeal);
</script>

<style scoped>
.container {
  background-color: white;
  border-radius: 15px;
  max-width: 80%;
  margin-bottom: 30px;
}
.img-fluid {
  width: 360px;
}
</style>
