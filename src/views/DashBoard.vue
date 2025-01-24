<template>
    <div id="dashboard" class="container mt-3 py-5">
        <div class="row h-100" data-wow-duration="3s" style="min-height: 30vw">
            <div :class="uploadedImg? 'col-6 animate__animated animate__fadeInLeft' : 'col-12 animate__animated animate__fadeIn'">
                <div class="card h-100 p-3 rounded-5 card-bg" data-wow-duration="3s">
                    <h1 class="text-center mt-auto fw-bold">爱猫血统鉴定</h1>
                    <p class="text-center text-muted ">请上传您的爱宠照片</p>

                    <div class="d-flex flex-column my-auto align-items-center justify-content-center">
                        <img :src="uploadImgPreview" class="img-fluid rounded-circle border border-2 rounded-circle p-1 object-fit-cover" style="height: 150px; width: 150px; "/>

                        <el-upload
                            class="mt-3"
                            :before-upload="beforeUpload"
                            :show-file-list="false"
                            limit="1"
                        >
                            <el-button slot="trigger" size="large" type="primary" class="fs-4">上传文件</el-button>
                        </el-upload>
                    </div>




                    <p class="text-center text-muted my-auto">建议上传正脸照，鉴定会更精确哟~</p>
                </div>

            </div>
            <div class="col-6 animate__animated animate__fadeInRight" v-if="uploadedImg">
                <div class="card h-100 p-5 rounded-5 text-center d-flex align-items-center card-bg">
                    <h1 class="fw-bold">KITTY CERTIFICATION</h1>
                    <h1>爱猫血统鉴定证书</h1>

                    <div class="row my-5 w-100">
                        <div class="col-12 col-md-4 col-lg-3 col-xl-2  p-0 d-flex justify-content-start">
                            <img :src="uploadImgPreview" class="img-fluid border border-2 p-1 w-100 object-fit-cover" />
                        </div>
                        <div class="col-12 col-md-8 col-lg-9 col-xl-10 d-flex flex-column justify-content-center align-items-start">
                            <h3 class="fw-bold">{{ pieChartZhLabels[0] }}</h3>
                            <h3>{{pieChartEnLabels[0]}}</h3>
                        </div>

                    </div>

                    <PieChart :labels="pieChartZhLabels" :data="pieChartData"/>


                    <p class="mt-5 text-start">{{breedInfo}}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PieChart from '@/components/PieChart.vue'
import {predictBreed, getBreedInfo} from "@/api/predict.ts";

async function fetchPredict() {
    try {
        if (!uploadedImg.value) return;

        const formData = new FormData();
        formData.append('file', uploadedImg.value);

        const response = await predictBreed(formData);

        // 提取英文和中文标签，以及概率（转为百分比）
        const en_labels = response.data.prediction.map(item => item.en);
        const zh_labels = response.data.prediction.map(item => item.zh);
        const data = response.data.prediction.map(item => item.probability * 100); // 转换为百分比

        // 更新图表数据
        pieChartEnLabels.value = en_labels;
        pieChartZhLabels.value = zh_labels;
        pieChartData.value = data;

        // 获取第一个预测品种的额外信息
        const breedResponse = await getBreedInfo(pieChartEnLabels.value[0]);
        if (breedResponse) {
            breedInfo.value = breedResponse;
        } else {
            breedInfo.value = '';
        }

    } catch (error) {
        console.error('Failed to fetch breed:', error);
    }
}

const pieChartEnLabels = ref([])
const pieChartZhLabels = ref([])
const pieChartData = ref([])
const breedInfo = ref(null)

const uploadedImg = ref(null)

const uploadImgPreview = ref(new URL('@/assets/logo.png', import.meta.url).href);

const beforeUpload = (file) => {
    // 检查文件类型是否是图片
    if (!file.type.startsWith('image/')) {
        this.$message.error('只能上传图片文件');
        return false;
    }

    const reader = new FileReader();

    // 文件读取成功后回调
    reader.onload = (e) => {
        uploadImgPreview.value = e.target.result; // 将读取的图片内容设置为图片的 Data URL
    };

    // 开始读取文件
    reader.readAsDataURL(file);

    uploadedImg.value = file

    fetchPredict()

    // 返回 false，阻止上传（因为我们这里只处理预览）
    return false;
};
</script>
<style scoped lang="css">
#dashboard{
    min-height: 30vw;
}

.card-bg{
    background-color: #fef4ea;
}


</style>
