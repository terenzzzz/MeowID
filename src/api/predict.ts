// 导入 axios配置
import request from "@/utils/request"



export const predictBreed = data => request({
    url: '/predictBreed',
    method: 'post',
    data
});