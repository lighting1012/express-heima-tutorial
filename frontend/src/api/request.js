import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: false
})

const request = (options) => {
  return instance(options)
}

export default request