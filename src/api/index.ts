import { get } from '@/utils/http'

// 默认类型，可自定义参数引入
interface Params {
  // 定义参数对象
  [propName: string]: any
}

const apis = {
  userInfo: (params?: Params) => get('get', '/##', params)
}

export default apis
