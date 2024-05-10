<template>
  <div class="container">
    <h2 class="mb-4 mt-3">Add Recipe</h2>
    <form @submit.prevent="addRecipe" class="row g-3">
      <div class="col-md-6">
        <label for="image" class="form-label">Image:</label>
        <input
          type="file"
          id="image"
          class="form-control"
          accept="image/*"
          @change="handleImageUpload"
        />
        <div class="invalid-feedback">Please choose an image.</div>
        <img
          :src="imageUrl"
          v-if="imageUrl"
          class="img-fluid mt-2"
          alt="Uploaded Image"
        />
      </div>
      <div class="col-md-6">
        <label for="ingredients" class="form-label">Ingredients:</label>
        <input
          id="ingredients"
          class="form-control"
          v-model="ingredientQuery"
          required
        />
        <div v-if="showAutocomplete" class="autocomplete">
          <div
            v-for="ingredient in matchedIngredients"
            class="autocomplete-item text-start my-2"
            @click="addIngredient(ingredient)"
          >
            <base-tag>{{ ingredient.strIngredient }} </base-tag>
          </div>
        </div>
        <div class="invalid-feedback">Please provide the ingredients.</div>
      </div>
      <div class="col-md-12">
        <label for="name" class="form-label">Name:</label>
        <input
          id="name"
          placeholder="Name of your meal"
          class="form-control"
          v-model="meal.title"
          rows="4"
          required
        />
        <div class="invalid-feedback">Please provide a Name.</div>
      </div>
      <div class="col-md-12">
        <label for="description" class="form-label">Description:</label>
        <textarea
          id="description"
          placeholder="Describe your meal"
          class="form-control"
          v-model="meal.description"
          rows="4"
          required
        ></textarea>
        <div class="invalid-feedback">Please provide a description.</div>
      </div>
      <div class="col-md-12">
        <label for="steps" class="form-label">Step by Step Guide:</label>
        <textarea
          id="steps"
          placeholder="Guide us to create your meal"
          class="form-control"
          v-model="meal.guide"
          rows="6"
          required
        ></textarea>
        <div class="invalid-feedback">
          Please provide the step-by-step guide.
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Add Recipe</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { Ingredient, Meal } from "../interfaces";
import { computed, ref, watch } from "vue";
import { createMeal, uploadImage, fetchIngredients } from "../api/mealApi";
import { v4 as uuidv4 } from "uuid";
import BaseTag from "../components/ui/BaseTag.vue";

const meal = ref<Meal>({
  id: uuidv4(),
  ingredients: [],
  title: "",
  description: "",
  guide: "",
  img: "",
});
const imageUrl = ref<string>("");
const matchedIngredients = ref<Ingredient[]>([]);
const showAutocomplete = ref<boolean>(true);
const selectedFile = ref();
const ingredientQuery = ref<string>("");

const debouncedQuery = computed(() => {
  let timer: any;
  return {
    set(value: string) {
      ingredientQuery.value = value;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        if (value.length >= 2) {
          fetchIngredients(value)
            .then((ingredients) => {
              console.log("Fetched ingredients:", ingredients);
              matchedIngredients.value = ingredients;
            })
            .catch(() => (matchedIngredients.value = []));
        }
      }, 250);
    },
  };
});

const addIngredient = (ingredient: Ingredient) => {
  meal.value.ingredients.push(ingredient);
  ingredientQuery.value = ""; // Clear the input field
  matchedIngredients.value = []; // Clear suggestions
};

watch(
  ingredientQuery,
  () => {
    debouncedQuery.value.set(ingredientQuery.value);
  },
  { immediate: true }
);

//TODO: ADD A VARIABLE TO SHOW OR HIDE THE FORM AFTER RECEIPT CREATED
const addRecipe = async () => {
  try {
    let imgUrl;
    const file = selectedFile.value;
    if (file) {
      console.log("file exist!: ", file);
      imgUrl = await uploadImage(file);
      if (imgUrl) {
        meal.value.img = imgUrl;
      } else {
        console.error("Error uploading image");
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 0));
    createMeal(meal.value);
    meal.value = {
      id: uuidv4(),
      title: "",
      ingredients: [],
      description: "",
      guide: "",
      img: "",
    };
  } catch (error) {
    console.error("Error adding recipe:", error);
  }
};

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imageUrl.value = reader.result as string;
      console.log(meal.value.img);
    };
    reader.readAsDataURL(file);
    selectedFile.value = file;
  }
};
</script>

<style scoped>
/* Additional custom styles */
.form-label {
  font-weight: bold;
}
.display-block {
  display: block;
  max-width: 10rem;
}
</style>
