import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import RequestPasswordReset from "../views/RequestPasswordReset.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/request-passwordreset',
        name: 'requestPasswordReset',
        component: RequestPasswordReset
    }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router;