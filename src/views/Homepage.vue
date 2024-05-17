<template>
  <div class="container-flex">
    <tag-layout
      v-if="!haveResult"
      @emit-ingredient="handleIngredient"
    ></tag-layout>
    <search-bar
      style="margin-top: 15px"
      :active-tags="clickedIngredients"
      @search-result="handleResult"
    ></search-bar>
    <result-list v-if="haveResult" :result-meal="result"> </result-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TagLayout from "../components/layout/TagLayout.vue";
import SearchBar from "../components/search/SearchBar.vue";
import ResultList from "../components/result/ResultList.vue";
import { Meal } from "../interfaces";

const clickedIngredients = ref<string[]>([]);
const haveResult = ref(false);
const result = ref<Meal | null>();

function handleIngredient(tag: { isChecked: boolean; ingredient: any }) {
  if (tag.isChecked) {
    clickedIngredients.value.push(tag.ingredient);
  } else if (!tag.isChecked) {
    let index = clickedIngredients.value.indexOf(tag.ingredient);
    if (index !== -1) {
      clickedIngredients.value.splice(index, 1);
    }
  }
}
async function handleResult(resultMeal: Meal) {
  haveResult.value = true;
  console.log("this is result: ", resultMeal);
  result.value = resultMeal;
}
</script>
