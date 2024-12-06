import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Loginv2.vue";
import RequestPasswordReset from "../views/PasswordRequest.vue";
import PasswordReset from "../views/PasswordReset.vue";
import AppLayout from "../components/AppLayout.vue";

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        children: [
            {
                path: 'dashboard',
                name: 'app.dashboard',
                component: Dashboard
            }
        ]
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
    },
    {
        path: '/reset-password',
        name: 'passwordReset',
        component: PasswordReset
    }
];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router;