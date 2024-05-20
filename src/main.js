import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers["Access-Control-Request-Method"] = "*";
// axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
    const isAuthenticated = store.getters["auth/authorized"];
    console.log("isAuthenticated");
    console.log(isAuthenticated);
    if (isAuthenticated) {
        config.headers["Authorization"] =
            "Bearer " + store.getters["auth/getAccessToken"]();
        const userId = store.getters["auth/getUserId"];
        console.log("userId");
        console.log(userId);
        config.headers["user_id"] = userId;
        // const expiresAt = store.getters["auth/getExpiresAt"];
        // config.withCredentials = true;
    } else {
        config.headers["Authorization"] = null;
    }
    return config;
});
// axios.interceptors.response.use(
//     (response) => {
//         console.log(response);
//         return response;
//     },
//     (error) => {
//         console.log("error");
//         console.log(error);
//         if (error.response) {
//             // Обработка ошибок с сервера
//             return Promise.reject(error.response);
//         } else if (error.request) {
//             // Обработка ошибок запроса (например, отсутствие ответа от сервера)
//             return Promise.reject(error.request);
//         } else {
//             // Обработка остальных ошибок
//             return Promise.reject(error);
//         }
//     }
// );

// router.beforeEach((to, from, next) => {
//     let requireAuth = to.matched.some((element) => element.meta.auth);

//     let check =
//         (requireAuth && !store.getters["auth/isAuthenticated"]()) ||
//         (!store.getters["auth/isAuthenticated"]() &&
//             !["/signup", "/login", "/home", "/"].includes(to.path));
//     if (check) {
//         // Недопускаємо до захищених роутів, якщо немає токена
//         // next({ path: "/forbidden" });
//         return;
//     } else {
//         next();
//     }
// });

createApp(App).use(store).use(router).mount("#app");
