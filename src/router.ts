import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./views/Homepage.vue";
import IngredientDetail from "./views/IngredientDetail.vue";
import NotFound from "./views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/welcome" },
    {
      path: "/welcome",
      component: Homepage,
    },
    {
      path: "/ingredients/:id",
      name: "ingredientDetail",
      props: true,
      component: IngredientDetail,
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
