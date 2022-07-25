import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/views/login/IndexLogin.vue"),
  },
  {
    path: "/main",
    component: () => import("@/views/main/IndexMain.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
