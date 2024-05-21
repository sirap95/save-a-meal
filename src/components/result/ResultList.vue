<template>
  <div v-show="resultMeal.length > 0 && imageLoaded" class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="col-md-12 mt-4 px-5">
          <h1 class="text-start">{{ resultMeal[0].title }}</h1>
        </div>
        <div class="col-md-12 text-start p-5">
          <h2>Description</h2>
          <p>{{ resultMeal[0].description }}</p>
        </div>
        <div class="col-md-12 text-start px-5">
          <div class="col-md-6">
            <h2>Ingredients</h2>
          </div>
          <ul>
            <li
              v-for="(ingredient, index) in resultMeal[0].ingredients"
              :key="index"
            >
              {{ ingredient.strIngredient }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 text-center py-4">
        <img
          :src="resultMeal[0].img"
          class="img-fluid rounded"
          :alt="resultMeal[0].title"
          @load="onImageLoad"
        />
      </div>
    </div>

    <!-- Guide Section -->
    <div class="col-md-12">
      <div class="col-md-12 text-start px-5 pt-5 pb-3">
        <h2>Guide</h2>
        <p>{{ resultMeal[0].guide }}</p>
      </div>
    </div>
  </div>
  <div v-if="!imageLoaded" class="container">
    <p>Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const { resultMeal } = defineProps<{ resultMeal: any }>();

const imageLoaded = ref(false);

const onImageLoad = () => {
  imageLoaded.value = true;
};

watch(
  () => resultMeal,
  (newVal) => {
    if (newVal && newVal.length > 0) {
      console.log("Data loaded: ", resultMeal);
    }
  }
);

console.log("This is props resultMeal: ", resultMeal);
</script>

<style scoped>
.container {
  background-color: white;
  border-radius: 15px;
  max-width: 80%;
  margin-bottom: 30px;
}
.img-fluid {
  max-width: 600px;
  width: 500px;
}
</style>
