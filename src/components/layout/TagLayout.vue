<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <base-tag @click="toggleIngredient('tomato', 0)">Tomato</base-tag>
      </div>
      <div class="col">
        <base-tag @click="toggleIngredient('chicken', 1)">Chicken</base-tag>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <base-tag @click="toggleIngredient('cheese', 2)">Cheese</base-tag>
      </div>
      <div class="col">
        <base-tag @click="toggleIngredient('pasta', 3)">Pasta</base-tag>
      </div>
      <div class="col">
        <base-tag @click="toggleIngredient('carrots', 4)">Carrot</base-tag>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <base-tag @click="toggleIngredient('rice', 5)">Rice</base-tag>
      </div>
      <div class="col">
        <base-tag @click="toggleIngredient('potatoes', 6)">Potatoes</base-tag>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["emit-ingredient"]);
const ingredient = ref<string>();
//const ingredientArray = ref<string[]>([]);
const isChecked = ref<boolean[]>(new Array(7).fill(false));

function toggleIngredient(input: string, index: number) {
  isChecked.value[index] = !isChecked.value[index];
  if (!isChecked.value[index]) {
    ingredient.value = input;
    isChecked.value[index];
  } else if (isChecked.value[index] && input != ingredient.value) {
    ingredient.value = input;
  }
  emit("emit-ingredient", {
    isChecked: isChecked.value[index],
    ingredient: ingredient.value
  });
}
</script>

<style scoped>
.container {
  padding-top: 1rem;
  padding-bottom: 3rem;
}

.row {
  margin-top: 2rem;
}
</style>
