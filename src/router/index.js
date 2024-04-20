import RegisterPage from "@/pages/RegisterPage";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import NewReportPage from "@/pages/NewReport";
import MyReportsPage from "@/pages/MyReports";
import SettingsPage from "@/pages/Settings";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    { path: "/login", component: LoginPage, name: "loginPage" },
    { path: "/signup", component: RegisterPage, name: "registerPage" },
    { path: "/home", component: HomePage, name: "homePage" },
    { path: "/newReport", component: NewReportPage, name: "newReportPage" },
    { path: "/myReports", component: MyReportsPage, name: "myReportsPage" },
    { path: "/settings", component: SettingsPage, name: "settingsPage" },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
