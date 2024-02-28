<template>
  <div class="container-flex">
    <tag-layout @emit-ingredient="handleIngredient"></tag-layout>
    <search-bar :active-tags="clickedIngredients"></search-bar>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TagLayout from "../components/layout/TagLayout.vue";
import SearchBar from "../components/search/SearchBar.vue";

const clickedIngredients = ref<string[]>([]);

function handleIngredient(tag: { isChecked: boolean; ingredient: string }) {
  if (tag.isChecked) {
    clickedIngredients.value.push(tag.ingredient);
  } else if (!tag.isChecked) {
    let index = clickedIngredients.value.indexOf(tag.ingredient);
    if (index !== -1) {
      clickedIngredients.value.splice(index, 1);
    }
  }
}
</script>
