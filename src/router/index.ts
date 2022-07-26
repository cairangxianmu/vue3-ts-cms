import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import localCache from "@/utils/cache";

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

router.beforeEach((to) => {
    if (to.path !== "/login") {
        const token = localCache.getCache("token");
        if (!token) {
            return "/login";
        }
    }
});

export default router;
