<template>
    <div class="p-1">
        <Pie :data="data" :options="options" />
    </div>

</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

// 注册 chart.js 的元素和插件
ChartJS.register(ArcElement, Tooltip, Legend)

export default defineComponent({
    name: 'App',
    components: {
        Pie
    },
    setup() {
        // 使用 reactive 来定义响应式数据
        const chartConfig = reactive({
            data: {
                labels: ['异国短毛猫', '英国短毛猫', '短毛猫', '欧洲短毛猫'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [48, 28, 11, 2]
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
                                return context.raw + '%'
                            }
                        }
                    }
                }
            }
        })

        return {
            data: chartConfig.data,
            options: chartConfig.options
        }
    }
})
</script>
