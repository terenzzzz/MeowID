<template>
    <div class="p-1">
        <Pie :key="chartKey" :data="chartData" />
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watch, ref } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels'

// Register chart.js elements and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

export default defineComponent({
    name: 'PieChart',
    components: {
        Pie
    },
    props: {
        // Explicitly type labels and data as arrays of specific types
        labels: {
            type: Array as () => string[],
            required: true
        },
        data: {
            type: Array as () => number[],
            required: true
        }
    },
    setup(props) {
        const chartKey = ref(0)

        // Use proper typing for chartData
        const chartConfig = reactive({
            chartData: {
                labels: props.labels,
                datasets: [
                    {
                        backgroundColor: [
                            '#6a1b9a', '#f44336', '#ff9800', '#4caf50', '#2196f3',
                            '#9c27b0', '#03a9f4', '#8bc34a', '#ffeb3b', '#00bcd4'
                        ],
                        data: props.data
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            label: (context: any) => {
                                return (context.raw as number).toFixed(2) + '%'
                            }
                        }
                    },
                    datalabels: {
                        color: '#fff',
                        formatter: (value: number) => {
                            return value.toFixed(2) + '%'
                        },
                        font: {
                            weight: 'bold',
                            size: 14
                        },
                        align: 'center',
                        anchor: 'center'
                    }
                }
            }
        })

        // Watch for prop changes
        watch(
            () => [props.labels, props.data],
            ([newLabels, newData]) => {
                chartConfig.chartData.labels = newLabels as string[]
                chartConfig.chartData.datasets[0].data = newData as number[]
                chartKey.value += 1
            },
            { immediate: true }
        )

        return {
            ...toRefs(chartConfig),
            chartKey
        }
    }
})
</script>