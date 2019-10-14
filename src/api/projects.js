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

export function submitProject(data) {
  return request({
    url: '/evaluation/questionnaire',
    method: 'PUT',
    data
  })
}

export function getAllProjects() {
  return request({
    url: 'evaluation',
    method: 'GET'
  })
}

export function getHistory(data) {
  return request({
    url: 'evaluation/history',
    method: 'GET',
    params: data
  })
}

export function updateScore(data) {
  return request({
    url: 'evaluation/questionnaire',
    method: 'PUT',
    data
  })
}

export function updateProjectInfo(data) {
  return request({
    url: 'evaluationInfo',
    method: 'POST',
    data
  })
}

export function deleteProject(eId) {
  return request({
    url: `evaluation/${eId}`,
    method: 'GET'
  })
}
