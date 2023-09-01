// http/index.js
import axios from 'axios'
// import { useLoading } from 'vue-loading-overlay'
// 创建axios的一个实例
import router from '../routes'
// import aes from '@/utils/aes'
let BaseUrl = ''
let message = ''
// let Apitoken = store.getters["user/LToken"]

if (process.env.NODE_ENV == 'development') {
  BaseUrl = '/api'
} else {
  BaseUrl = '/api'
}



const instance = axios.create({
  baseURL: BaseUrl, // 接口统一域名
  timeout: 6000, // 设置超时
  withCredentials: true,
//   headers: { 'Content-Type': 'application/json;charset=UTF-8'
// }
})

instance.interceptors.request.use((config) => {
  //const token = window.localStorage.getItem('tttt')

  //token && (config.headers.Authorization = `Bearer ${token}`)


  return config

}, (error) => {
  Promise.reject(error)
}
)


// 响应拦截器
instance.interceptors.response.use((response) => {
  return response

}, (error) => {
  console.log(error, "errrrrrrrrrrrrrrrrrrrrrrrrrrrrr");
  // 响应错误 Authorization token expired
  if (error?.response?.status == 401 || error.response.data.message == '登录Token已过期, 请重新登录') {
    window.localStorage.clear();
    setTimeout(() => {
      window.location.reload()
      router.push('/')
    }, 500);
  }
  console.log(error.response.data.statusCode, "response code")
  if (error?.response && error?.response?.status) {
    const status = error.response.status
    switch (status) {
      case 400:
        message = '请求错误'
        break
      // case 401:
      //   message = '请求错误'
      //   break
      case 403:
        console.log("403 ---------->", status);
        break
      case 404:
        message = '请求地址出错'
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器内部错误!'
        break
      case 501:
        message = '服务未实现!'
        break
      case 502:
        message = '网关错误!'
        break
      case 503:
        message = '服务不可用!'
        break
      case 504:
        message = '网关超时!'
        break
      case 505:
        message = 'HTTP版本不受支持'
        break
      default:
        message = '请求失败'
    }
    return Promise.reject(error)
  }
  return Promise.reject(error)
})
export default instance
