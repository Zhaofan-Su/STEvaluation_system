import {
  stat
} from "fs"

// import router, {resetRouter} from '@/router'

const state = {
  evaluate: false,
  info: {
    projectName: '',
    province: '',
    city: '',
    type: '',
    area: '',
    height: '',
    construct: '',
    design: '',
    build: '',
    structType: ''
  },
  createTime: '',
  endTime: '',
  creator: '',
  RWState: 0, //1，对所有人可见；0，对内部人员可见
  sendTo: []

}

const mutations = {
  SET_EVALUATE: (state, evaluate) => {
    state.evaluate = evaluate
  },
  SET_PROJECTINFO: (state, projectInfo) => {
    Object.keys(state.info).forEach(function (key) {
      state.info[key] = projectInfo[key]
    })

  },
  SET_CREATETIME: (state, createTime) => {
    state.createTime = createTime
  },
  SET_ENDTIME: (state, endTime) => {
    state.endTime = endTime
  },
  SET_CREATOR: (state, creator) => {
    state.creator = creator
  },
  SET_RWSTATE: (state, RWState) => {
    state.RWState = RWState
  },
  SET_SENDTO: (state, sendTo) => {
    state.sendTo = sendTo
  }

}

const actions = {
  updateProject({
    commit
  }, newProject) {
    commit('SET_EVALUATE', newProject.evaluate)
    commit('SET_PROJECTINFO', newProject.info)
    commit('SET_CREATETIME', newProject.createTime)
    commit('SET_ENDTIME', newProject.endTime)
    commit('SET_CREATOR', newProject.creator)
    commit('SET_RWSTATE', newProject.RWState)
    commit('SET_SENDTO', newProject.sendTo)
  },
  evaluate({
    commit
  }, evaluateState) {
    commit('SET_EVALUATE', evaluateState)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
