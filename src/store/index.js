import { createStore } from "vuex";

// import products from "./products";
import auth from "./auth";

const store = createStore({
    modules: {
        auth,
        // message,
        // orders,
    },
});

export default store;
