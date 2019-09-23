import request from '@/utils/request'

export function createProject(data) {
  return request({
    url: '/evaluation',
    method: 'POST',
    data
  })
}

export function getProjectsByUser(userId) {
  return request({
    url: `/evaluation/user/${userId}`,
    method: 'GET'
  })
}
