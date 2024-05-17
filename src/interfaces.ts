export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
}
export interface Meal {
  id: string;
  title: string;
  ingredients: Ingredient[];
  description: string;
  guide: string;
  img: string;
}