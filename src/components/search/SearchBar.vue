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
        placeholder="Insert a recipe name or an ingredient"
      />
      <button class="tag-icon btn">
        <i class="fas fa-search"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const emit = defineEmits(["update-search-query"]);
const { activeTags } = defineProps(["activeTags"]);
const searchQuery = ref<string>("");
const inputWidth = ref(window.innerWidth / 2);

window.addEventListener("resize", () => {
  inputWidth.value = window.innerWidth / 2;
});
watch(activeTags, (newValue) => {
  if (newValue && newValue.length > 0) {
    // Convert the activeTags array to a comma-separated string
    const newSearchQuery = newValue.join(", ");
    
    // Check if the new searchQuery is different from the current one
    if (searchQuery.value !== newSearchQuery) {
      searchQuery.value = newSearchQuery;
    }
  } else {
    searchQuery.value = "";
  }
});
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
