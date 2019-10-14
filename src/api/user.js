import request from '@/utils/request'

export function register(data) {
  return request({
    url: '/user',
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    transformRequest: [
      data => {
        let params = ''
        for (var index in data) {
          params += index + '=' + data[index] + '&'
        }
        return params
      }
    ]

  })
}

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    transformRequest: [
      data => {
        let params = ''
        for (var index in data) {
          params += index + '=' + data[index] + '&'
        }
        return params
      }
    ]

  })
}

export function getInfo(userId) {
  return request({
    url: `/user/${userId}`,
    method: 'get',

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
    url: '/users',
    method: 'get'
  })
}

export function changeRole(data) {
  return request({
    url: 'user/priority',
    method: 'put',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    transformRequest: [
      data => {
        let params = ''
        for (var index in data) {
          params += index + '=' + data[index] + '&'
        }
        return params
      }
    ]
  })
}

export function addUser(data) {
  return request({
    url: 'user/admin',
    method: 'post',
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    transformRequest: [
      data => {
        let params = ''
        for (var index in data) {
          params += index + '=' + data[index] + '&'
        }
        return params
      }
    ]
  })
}

export function deleteUser(userId) {
  return request({
    url: `user/${userId}`,
    method: 'delete',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    transformRequest: [
      data => {
        let params = ''
        for (var index in data) {
          params += index + '=' + data[index] + '&'
        }
        return params
      }
    ]
  })
}
