<template>
    <div id="dashboard" class="container mt-3">
        <div class="row h-100" data-wow-duration="3s">
            <div class="col-6">
                <div class="card h-100 p-3 rounded-5">
                    <h1 class="text-center mt-auto fw-bold">爱猫血统鉴定</h1>
                    <p class="text-center text-muted ">请上传您的爱宠照片</p>

                    <div class="d-flex flex-column my-auto align-items-center justify-content-center">
                        <img :src="uploadImgPreview" class="img-fluid rounded-circle border border-2 rounded-circle p-1" style="height: 150px; width: 150px; "/>

                        <el-upload
                            class="mt-3"
                            :before-upload="beforeUpload"
                            :show-file-list="false"
                            limit="1"
                        >
                            <el-button slot="trigger" size="small" type="primary">上传文件</el-button>
                        </el-upload>
                    </div>




                    <p class="text-center text-muted my-auto">建议上传正脸照，鉴定会更精确哟~</p>
                </div>

            </div>
            <div class="col-6 ">
                <div class="card h-100 p-5 rounded-5 text-center d-flex align-items-center">
                    <h1 class="fw-bold">KITTY CERTIFICATION</h1>
                    <h1>爱猫血统鉴定证书</h1>

                    <div class="row">
                        <div class="col-6"></div>
                        <div class="col-6">

                        </div>
                    </div>

                    <div class="row my-5">
                        <div class="col-2">
                            <img :src="uploadImgPreview" class="img-fluid border border-2 p-1" />
                        </div>
                        <div class="col-10 d-flex align-items-center">
                            <h3 class="fw-bold">英国短毛猫</h3>
                        </div>

                    </div>

                    <div class="row">
                        <PieChart />
                    </div>


                    <p class="mt-5 text-start">英国短毛猫是食肉目猫科猫属的哺乳动物。 [4]其显著特征可精炼为“五短”：短毛、短身、短尾、短四肢及短耳。身体中等到大型，胸、肩、臀均宽，肌肉发达；头宽、圆而大，满月脸颊，鼻子短，下巴坚固，和鼻子构成垂线；耳朵大小中等，眼睛大而圆，间距大；尾巴长度为身长的2/3，毛型短而密，质地暗。英国短毛猫是最善于捕猎的猫类之一，被英国人公认为是“捕鼠能手”。</p>
                </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import PieChart from '@/components/PieChart.vue'


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

    // 返回 false，阻止上传（因为我们这里只处理预览）
    return false;
};
</script>
<style scoped lang="css">
#dashboard{
    min-height: 50vw;
}

</style>
