import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: DashboardView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  let isAuthentication = localStorage.getItem("access_token");
  if (!isAuthentication && to.name === "Dashboard") next({ name: "Login" });
  if (isAuthentication && to.name === "Login") next({ name: "Dashboard" });
  if (isAuthentication && to.name === "Register") next({ name: "Dashboard" });
  if (isAuthentication && to.name === "Home") next({ name: "Dashboard" });
  else next();
});

export default router;
