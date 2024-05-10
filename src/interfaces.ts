export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
}
export interface Meal {
  id: string;
  title: string;
  ingredients: Array<Ingredient>;
  description: string;
  guide: string;
  img: string;
}