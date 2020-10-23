import axios from 'axios' //引入axios 
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

//创建axios 实例
const service = axios.create({
    baseURL: baseUrl, //api的base_url
    timeout: 15000, //请求超时时间
})

export default service
