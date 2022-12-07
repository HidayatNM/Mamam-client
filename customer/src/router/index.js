import { createRouter, createWebHistory } from "vue-router";
import Merchant from "../views/Merchant.vue";
import Menus from "../views/MenusView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:merchant",
      name: "Merchant",
      component: Merchant,
    },
    {
      path: "/:merchant/menu-list",
      name: "Menus",
      component: Menus,
    },
  ],
});

export default router;
