<template>
    <div class="line-chart-container">
        <Line :data="data" :options="options" />
    </div>
</template>

<script>
import { Line } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

// Register the necessary chart.js components
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale
);

export default {
    name: "LineChart",
    props: {
        chartData: {
            type: Object,
            required: true,
        },
        chartOptions: {
            type: Object,
            default: () => ({
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                    },
                    title: {
                        display: true,
                        text: "Line Chart",
                    },
                },
            }),
        },
    },
    data() {
        return {
            chartInstance: null,
        };
    },
    mounted() {
        this.renderChart();
    },
    watch: {
        chartData: {
            handler() {
                this.renderChart();
            },
            deep: true,
        },
        chartOptions: {
            handler() {
                this.renderChart();
            },
            deep: true,
        },
    },
    methods: {
        renderChart() {
            if (this.chartInstance) {
                this.chartInstance.destroy();
            }

            const ctx = this.$refs.canvas.getContext("2d");
            this.chartInstance = new ChartJS(ctx, {
                type: "line",
                data: this.chartData,
                options: this.chartOptions,
            });
        },
    },
};
</script>

<style scoped>
.line-chart-container {
    width: 100%;
    height: 400px;
}
</style>
