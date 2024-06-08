const store = {
    namespaced: true,
    state: {
        chartData: [],
        fileType: "",
        error: false,
    },
    getters: {
        getChartData: (state) => state.chartData,
        getFileType: (state) => state.fileType,
        getCharErrors: (state) => state.error,
    },
    mutations: {
        setChartData: (state, data) => {
            state.chartData = data;
        },
        setFileType: (state, data) => {
            state.fileType = data;
        },
    },
    actions: {
        setChartDataAction({ commit }, data) {
            commit("setChartData", data);
        },
        setFileTypeAction({ commit }, fileType = "") {
            commit("setFileType", fileType);
        },
    },
};

export default store;
