<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <base-tag
          @click="
            toggleIngredient(
              { idIngredient: '399', strIngredient: 'Tomato Sauce' },
              0
            )
          "
          >Tomato Sauce</base-tag
        >
      </div>
      <div class="col">
        <base-tag
          @click="
            toggleIngredient({ idIngredient: '17', strIngredient: 'Basil' }, 1)
          "
          >Basil</base-tag
        >
      </div>
    </div>
    <div class="row">
      <div class="col">
        <base-tag
          @click="
            toggleIngredient(
              { idIngredient: '236', strIngredient: 'Parmigiano-reggiano' },
              2
            )
          "
          >Parmigiano reggiano</base-tag
        >
      </div>
      <div class="col">
        <base-tag
          @click="
            toggleIngredient(
              { idIngredient: '243', strIngredient: 'Penne Rigate' },
              3
            )
          "
          >Penne Rigate</base-tag
        >
      </div>
      <div class="col">
        <base-tag
          @click="
            toggleIngredient({ idIngredient: '364', strIngredient: 'Onion' }, 4)
          "
          >Onion</base-tag
        >
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

function toggleIngredient(input: object, index: number) {
  isChecked.value[index] = !isChecked.value[index];
  if (!isChecked.value[index]) {
    ingredient.value = input;
    isChecked.value[index];
  } else if (isChecked.value[index] && input != ingredient.value) {
    ingredient.value = input;
  }
  emit("emit-ingredient", {
    isChecked: isChecked.value[index],
    ingredient: ingredient.value,
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
