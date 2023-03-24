import request from "@/utils/request"

// 注册
export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}

// 登录
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

// 获取用户信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}