export default {
    user: {
        login: `${process.env.VUE_APP_API_URL}/users/login`,
        signup: `${process.env.VUE_APP_API_URL}/users/signup`,
        saveImage: `${process.env.VUE_APP_API_URL}/users/saveImage`,
        deleteImage: `${process.env.VUE_APP_API_URL}/users/deleteImage`,
        // usersList: `${process.env.VUE_APP_API_URL}/users`,
    },
};
