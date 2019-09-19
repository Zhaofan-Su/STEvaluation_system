import request from '@/utils/request'

export function register(data) {
  return request({
    url: '/user',
    method: 'POST',
    data
  })
}

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: {
      token
    }
  })
}

export function getUserById(userId) {
  return request({
    url: `/v1/user/${userId}`,
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getUsers() {
  return request({
    url: '/v1/users',
    method: 'get'
  })
}
