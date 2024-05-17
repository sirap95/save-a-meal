<template>
  <div class="custom-width">
    <div class="input-container">
      <input
        v-model="searchQuery"
        class="form-control custom-searchbar"
        type="text"
        name="food"
        id="food"
        :style="{ width: inputWidth + 'px' }"
        placeholder="Insert a recipe name or some ingredients"
      />
      <button class="tag-icon btn" @click="searchRecipe(searchQuery)">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { selectMeal } from "../../api/mealApi.ts";

const emit = defineEmits(["search-result"]);
const { activeTags } = defineProps(["activeTags"]);
const searchQuery = ref<string>("");
const inputWidth = ref(window.innerWidth / 2);
const searchTags = ref<any>([]);
const searchResult = ref({});

window.addEventListener("resize", () => {
  inputWidth.value = window.innerWidth / 2;
});

watch(activeTags, (newValue) => {
  if (newValue && newValue.length > 0) {
    const newSearchQuery =
      newValue.length === 1
        ? newValue[0].strIngredient // Single element: use strIngredient directly
        : newValue
            .map((item: { strIngredient: any }) => item.strIngredient)
            .join(", "); // Multiple elements: map and join
    searchTags.value = newValue;
    if (searchQuery.value !== newSearchQuery) {
      searchQuery.value = newSearchQuery;
    }
  } else {
    searchTags.value = [];
    searchQuery.value = "";
  }
});

async function searchRecipe(query: any) {
  if (query) {
    const useQuery = query.includes(",") ? searchTags.value : query;

    searchResult.value = await selectMeal(useQuery);
    if (searchResult.value) {
      emit("search-result", searchResult.value);
    }
  } else {
    alert("no value");
  }
}
</script>

<style scoped>
.custom-width {
  width: 60%;
  margin: 0 auto;
  padding-bottom: 2rem;
}

.input-container {
  position: relative;
  display: inline-block;
}

.custom-searchbar {
  padding: 20px 40px; /* Adjust padding to your liking */
  border-radius: 30px;
}

.tag-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px; /* Adjust the distance of the icon from the right */
  background: transparent;
  border: none;
  cursor: pointer;
}

/* Media queries for different screen sizes */
@media screen and (max-width: 768px) {
  .custom-width {
    width: 80%;
  }
}

@media screen and (max-width: 480px) {
  .custom-width {
    width: 90%;
  }
}
</style>
