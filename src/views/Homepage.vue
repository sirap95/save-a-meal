<template>
  <div class="container-flex mt-4">
    <tag-layout
      v-if="!haveResult"
      @emit-ingredient="handleIngredient"
    ></tag-layout>
    <search-bar
      v-if="!haveResult"
      style="margin-top: 15px"
      :active-tags="clickedIngredients"
      @search-result="handleResult"
      @open-error="handleError"
      @open-noresult="handleNoResult"
    ></search-bar>
    <result-list v-if="haveResult" :result-meal="result"> </result-list>
    <base-modal
      @input="handleError"
      :value="modalVisible"
      :header="headerModal"
      :content="contentModal"
    ></base-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TagLayout from "../components/layout/TagLayout.vue";
import SearchBar from "../components/search/SearchBar.vue";
import ResultList from "../components/result/ResultList.vue";
import { Meal } from "../interfaces";

const clickedIngredients = ref<string[]>([]);
const modalVisible = ref<boolean>(false);
const haveResult = ref<boolean>(false);
const result = ref<Meal | null>();
const headerModal = ref<string>("");
const contentModal = ref<string>("");

function handleError(value: boolean) {
  modalVisible.value = value;
  headerModal.value = 'Error!';
  contentModal.value = 'Please insert at least one ingredient or a meal name';
}

function handleNoResult(value: boolean) {
  modalVisible.value = value;
  headerModal.value = 'No Meal Found!';
  contentModal.value = 'If you know a meal with those ingredients or name you can add it clicking on add recipe tab!';
}

function handleIngredient(tag: { isChecked: boolean; ingredient: any }) {
  if (tag.isChecked) {
    clickedIngredients.value.push(tag.ingredient);
  } else if (!tag.isChecked) {
    let index = clickedIngredients.value.indexOf(tag.ingredient);
    console.log(index);
    if (index == -1) {
      clickedIngredients.value.splice(index, 1);
      console.log(clickedIngredients.value);
    }
  }
}
async function handleResult(resultMeal: Meal) {
  haveResult.value = true;
  console.log("this is result: ", resultMeal);
  result.value = resultMeal;
}
</script>
