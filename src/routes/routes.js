import middleware from "@/services/middleware.service";
import LoginView from "@/views/auth/LoginView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        alias: '/home',
        name: 'home',
        component: HomeView
    }, {
        path: '/login',
        name: 'login',
        component: LoginView
    }, {
        path: '/register',
        name: 'register',
        component: RegisterView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem("token");

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({ name: 'login' });
        } else {
            const token = localStorage.getItem("token");
            middleware.authorization(token)
                .then(resp => { if (resp.status === 200) next(); })
                .catch(() => next({ name: 'login' }));
        }
    } else {
        if (!isAuthenticated) next();
    }
});

export default router;