<template>
    <div>
        <div class="container">
            <div class="wrapper">
                <div class="chose_container">
                    <div class="left_column">
                        <h1>Оберіть дані для візуалізації</h1>
                        <div class="first_row">
                            <div class="select_container">
                                <h2>Оберіть масив даних</h2>
                                <div class="enrtypoint_data_container">
                                    <drop-down-menu
                                        class="select"
                                        :propsTitle="'Оберіть масив даних'"
                                        :items="entryKeys"
                                        @dropDownItemSelected="entryKeySelected"
                                    />

                                    <p>Назва графіку</p>
                                    <input
                                        type="text"
                                        maxlength="20"
                                        v-model="graphicName"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="second_row">
                            <div class="selects_data_container">
                                <p>
                                    Оберіть поле для "Періоди" (День, місяць,
                                    рік і тд.)
                                </p>
                                <drop-down-menu
                                    class="select"
                                    :propsTitle="'Оберіть поле'"
                                    :items="periodsKeys"
                                    @dropDownItemSelected="periodsKeySelected"
                                />
                            </div>
                            <div class="selects_data_container">
                                <p>
                                    Оберіть поле для "Кількість" (числовий тип)
                                </p>
                                <drop-down-menu
                                    class="select"
                                    :propsTitle="'Оберіть поле'"
                                    :items="countKeys"
                                    @dropDownItemSelected="countKeySelected"
                                />
                            </div>
                            <div class="button_container">
                                <button
                                    class="apply_button"
                                    @click="normilizeChartData"
                                >
                                    Застосувати
                                </button>
                                <button class="save_button" @click="saveReport">
                                    Зберегти звіт
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="right_column">
                        <div class="header">Створення графіку</div>
                        <div class="graphic_container" v-if="showExampleChart">
                            <canvas
                                id="myChartExample"
                                width="800"
                                height="600"
                            ></canvas>
                        </div>
                        <div class="graphic_container" v-else>
                            <canvas
                                id="myMainChart"
                                width="800"
                                height="600"
                            ></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from "chart.js/auto";
import { isEmpty } from "lodash";
import DropDownMenu from "@/components/dropdownMenu";
import { mapGetters } from "vuex";

export default {
    name: "linearDiagram",
    components: {
        DropDownMenu,
    },
    data() {
        return {
            showExampleChart: true,
            graphicName: "",
            entryKeys: [],
            countKeys: [],
            periodsKeys: [],
            userSelectedKeys: {
                entryKey: "",
                countsKey: "",
                periodsKey: "",
            },
            normilizedChartData: [],
        };
    },
    computed: {
        ...mapGetters("charts", ["getChartData"]),
        chartData() {
            return this.getChartData || {};
        },
    },
    methods: {
        initializeEntryKeys() {
            console.log("here");
            const keys = Object.keys(this.chartData);
            for (let i of keys) {
                this.entryKeys.push(i);
            }
        },
        entryKeySelected(key) {
            this.userSelectedKeys.entryKey = key;
            const keys = Object.keys(this.chartData[key]);
            for (let i of keys) {
                this.countKeys.push(i);
                this.periodsKeys.push(i);
            }
            this.chartData[key];
        },
        normilizeChartData() {
            const chartDataNormalized =
                this.chartData[this.userSelectedKeys.entryKey];
            const periods =
                chartDataNormalized[this.userSelectedKeys.periodsKey];

            periods.forEach((element) => {
                this.normilizedChartData.push(
                    chartDataNormalized[this.userSelectedKeys.countsKey][
                        element
                    ]
                );
            });
            this.showExampleChart = false;
            setTimeout(() => {
                this.initChart();
            }, 100);
        },
        countKeySelected(key) {
            this.userSelectedKeys.countsKey = key;
        },
        periodsKeySelected(key) {
            this.userSelectedKeys.periodsKey = key;
        },
        initChart() {
            const chartDataNormalized =
                this.chartData[this.userSelectedKeys.entryKey];
            const labels =
                chartDataNormalized[this.userSelectedKeys.periodsKey];
            const ctx = document.getElementById("myMainChart");
            new Chart(ctx, {
                type: "line",
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label:
                                this.graphicName && this.graphicName.length
                                    ? this.graphicName
                                    : "Graphic",
                            data: [...this.normilizedChartData],
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                        },
                        title: {
                            display: true,
                            text: "Лінійна діаграма",
                        },
                    },
                },
            });

            // this.showExampleChart = false;
        },
        saveReport() {},
    },
    mounted() {
        if (!isEmpty(this.chartData)) {
            this.initializeEntryKeys();
        }
        const ctx = document.getElementById("myChartExample");
        new Chart(ctx, {
            type: "line",
            data: {
                labels: [
                    "Понеділок",
                    "Вівторок",
                    "Середа",
                    "Четвер",
                    "П'ятниця",
                    "Неділя",
                ],
                datasets: [
                    {
                        label: "Example",
                        // data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: "Лінійна діаграма",
                    },
                },
            },
        });
    },
};
</script>

<style lang="scss" scoped>
.container {
    font-family: Lato, "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #c4c4c4;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
}

.wrapper {
    max-width: 1240px;
    margin-top: 50px;
}

.header {
    font-size: 24px;
}
.chose_container {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}
.left_column {
    // background-color: #ffff;
    // padding: 40px 50px;
    // max-width: 300px;
    width: 100%;
    h1 {
        color: #ffff;
        font-size: 18px;
        font-weight: bold;
        padding: 18px 8px;
        background-color: #004976;
    }
}
.first_row {
    padding: 20px 10px;
    background-color: #ffff;
}
.second_row {
    margin-top: 15px;
    padding: 10px 10px;
    background-color: #ffff;
}

.right_column {
    margin-left: 20px;
    padding: 40px 30px;
    background-color: #ffff;
    max-height: 900px;
}

.select_container {
    color: #5a5b59;
    h2 {
        font-weight: bold;
        font-size: 24px;
    }
    p {
        font-weight: bold;
        font-size: 18px;
    }
}
.select {
    margin-top: 15px;
}

.selects_data_container {
    margin-top: 20px;
    font-size: 18px;
}
.button_container {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 10px;

    button {
        padding: 10px 30px;
        font-size: 20px;
        font-weight: bold;
        display: block;
    }

    .apply_button {
        margin: 0 auto;
        // button {
        color: #166ba0;
        background-color: transparent;
        border: solid 2px #166ba0;
        transition: all 0.3s ease-in-out;
        border-radius: 10px;
        &:hover {
            color: #ffff;
            background-color: #166ba0;
        }
        // }
    }

    .save_button {
        margin: 0 auto;
        margin-top: 20px;
        background-color: transparent;
        color: #12b65c;
        border: solid 2px #12b65c;
        transition: all 0.3s ease-in-out;
        border-radius: 10px;
        &:hover {
            color: #ffff;
            background-color: #12b65c;
        }
    }
}

.enrtypoint_data_container {
    p {
        margin-top: 20px;
    }

    input {
        margin-top: 10px;
        margin-bottom: 20px;
        border: 2px solid #e4e4e4;
        padding: 8px 5px;
        font-size: 16px;
        width: 100%;

        &:focus {
            border: 2px solid #c4c0c0;
            transition: 0.3s ease;
        }
    }
}
</style>
