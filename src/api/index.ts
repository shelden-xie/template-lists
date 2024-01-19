/*
 * @Description:
 * @Author: xieyadong
 * @Date: 2024-01-18 11:50:29
 * @LastEditTime: 2024-01-18 14:12:29
 * @LastEditors: xieyadong
 */
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
