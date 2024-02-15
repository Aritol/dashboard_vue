import RegisterPage from "@/pages/RegisterPage";
import LoginPage from "@/pages/LoginPage";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: "/login", component: LoginPage, name: "loginPage" },
    { path: "/signup", component: RegisterPage, name: "registerPage" },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
