import request from '@/utils/request'

export function createProject(data) {
  return request({
    url: '/evaluation',
    method: 'POST',
    data
  })
}
