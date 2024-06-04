const store = {
    namespaced: true,
    state: {
        chartData: [],
        error: false,
    },
    getters: {
        getChartData: (state) => state.chartData,
        getCharErrors: (state) => state.error,
    },
    mutations: {
        setChartData: (state, data) => {
            state.chartData = data;
        },
    },
    actions: {
        setChartDataAction({ commit }, data) {
            commit("setChartData", data);
        },
    },
};

export default store;
