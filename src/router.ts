import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./views/Homepage.vue";
import IngredientDetail from "./views/IngredientDetail.vue";
import NotFound from "./views/NotFound.vue";
import AddReceipt from "./views/AddReceipt.vue";
import HelpUs from "./views/HelpUs.vue";

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
    {
      path: "/help-us",
      name: "HelpUs",
      component: HelpUs,
    },
    {
      path: "/add",
      name: "AddReceipt",
      props: true,
      component: AddReceipt,
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
