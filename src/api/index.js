import { get } from '@/utils/http'

const apis = {
  userInfo: (params) => get('get', '/##', params)
}

export default apis
