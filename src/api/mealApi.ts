// mealApi.ts

import {
  collection,
  where,
  query,
  getDocs,
  doc,
  setDoc
} from "firebase/firestore";
import { db } from "../firebase/firebase";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  StorageReference,
} from "firebase/storage";
import { Ingredient, Meal } from "../interfaces";

const storage = getStorage();

async function uploadImage(file: File): Promise<string | null> {
  try {
    const storageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(storageRef, file);
    const imageUrl = await getDownloadURL(storageRef as StorageReference); // Type assertion for clarity
    console.log("Image uploaded successfully:", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
}
// Function to get all meals TODO: NOT PLANNED AT THE MOMENT
/* async function getMeals(): Promise<Meal[]> {
  const meals: Meal[] = [];
  const querySnapshot = await getDocs(collection(db, 'meals'));
  querySnapshot.forEach((doc) => {
    meals.push(doc.data() as Meal);
  });
  return meals;
} */

// Function to select a meal by ID
async function selectMeal(mealQuery: string | Ingredient[]) {
  const mealRef = collection(db, "meals");

  let searchQuery;
  if (typeof mealQuery === "string") {
    searchQuery = query(mealRef, where("title", "==", mealQuery));
  } else {
    const ingredientNames = mealQuery.map((ingredient) => ingredient);
    searchQuery = query(
      mealRef,
      where("ingredients", "array-contains-any", ingredientNames)
    );
  }

  const querySnapshot = await getDocs(searchQuery);
  const results: Meal[] = [];

  querySnapshot.forEach((mealDoc) => {
    const mealData = mealDoc.data() as Meal;

    if (typeof mealQuery === "string") {
      results.push(mealData);
    } else {
      const ingredients = mealData.ingredients;
      if (arraysEqual(ingredients, mealQuery)) {
        results.push(mealData);
      }
    }
  });
  console.log(results);
  return results;
}

// Helper function to compare two arrays for equality
function arraysEqual(a: Ingredient[], b: Ingredient[]): boolean {
  if (a.length !== b.length) return false;

  a.sort((x, y) => x.strIngredient.localeCompare(y.strIngredient));
  b.sort((x, y) => x.strIngredient.localeCompare(y.strIngredient));

  for (let i = 0; i < a.length; i++) {
    if (a[i].strIngredient !== b[i].strIngredient) return false;
  }
  return true;
}
// Function to create a new meal
async function createMeal(newMeal: Meal): Promise<void> {
  try {
    await setDoc(doc(db, "meals", newMeal.id), newMeal);
    console.log("Meal created successfully:", newMeal);
  } catch (error) {
    console.error("Error creating meal:", error);
  }
}

//FUNCTION TO FETCH INGREDIENTS ON DB
async function fetchIngredients(strIngredient: string): Promise<Ingredient[]> {
  strIngredient =
    strIngredient.charAt(0).toUpperCase() + strIngredient.slice(1);
  const ingredientsRef = collection(db, "ingredients");
  const queryDoc = query(
    ingredientsRef,
    where("strIngredient", ">=", strIngredient),
    where("strIngredient", "<=", strIngredient + "\uf8ff")
  );
  const snapshot = await getDocs(queryDoc);

  const ingredients: Ingredient[] = [];
  snapshot.forEach((doc) => {
    ingredients.push(doc.data() as Ingredient);
  });

  return ingredients;
}

export { selectMeal, createMeal, uploadImage, fetchIngredients };
