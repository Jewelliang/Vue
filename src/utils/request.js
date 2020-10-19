import axios from 'axios' //引入axios
import baseUrl from '../api/baseUrl' //使用环境变量+模式的方式定义基础URL


//创建axios 实例
const service = axios.create({
    baseURL: baseUrl, //api的base_url
    timeout: 15000, //请求超时时间
})

console.log("request.js---------------------------"+baseUrl);    //"http://localhost:8088/"

export default service
