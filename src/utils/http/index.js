import axios from 'axios'
import { getMessage } from './status'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL,
  timeout: 15000,
  withCredentials: true
})

// axios实例拦截请求
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// axios实例拦截响应
service.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response
    }
    getMessage(response.status)
    return response
  },
  // 请求失败
  (error) => {
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      ElMessage({
        message: getMessage(response.status),
        type: 'error'
      })
      return Promise.reject(response.data)
    }
    ElMessage({
      message: '网络连接异常,请稍后再试!',
      type: 'error'
    })
  }
)

// T 为 res.data.data 的类型
// BaseResponse 为 res.data 的类型
// 此处相当于响应拦截
// 为响应数据进行定制化处理
const msgRequest = (config) => {
  const conf = config
  return new Promise((resolve, reject) => {
    service.request(conf).then((res) => {
      const data = res.data
      // 如果data.code为错误代码返回message信息
      if (data.code != 0) {
        ElMessage({
          message: data.message,
          type: 'error'
        })
        reject(data.message)
      } else {
        ElMessage({
          message: data.message,
          type: 'success'
        })
        // 此处返回data信息 也就是 api 中配置好的 Response类型
        resolve(data.data)
      }
    })
  })
}

export function get(url, params, config) {
  return msgRequest({ ...config, url, method: 'GET', params: params })
}

export function post(url, data, config) {
  return msgRequest({ ...config, url, method: 'POST', data: data })
}
