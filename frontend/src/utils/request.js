import axios from 'axios'
import router from '@/router'
import { getToken } from '@/utils/auth'
import toasts from '@/components/toasts'

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
})


// 请求拦截
instance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'Bearer ' + getToken()
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
// 响应拦截
instance.interceptors.response.use(
  (res) => {
    console.log('response::', res);
    toasts.success(res?.data?.message || '成功')
    const result = res.data
    return result
  },
  (error) => {
    console.log('error::', error);
    if (error.response.status === 401) {
      console.log('401');
      router.push('/login')
    }
    return Promise.reject(error)
  }
)


export default instance