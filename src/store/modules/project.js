import {
  stat
} from "fs";
import {
  ifError
} from "assert";

const state = {
  evaluate: false,
  eId: '',
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
  RWState: null, //1，对所有人可见；0，对内部人员可见
  sendTo: [],
}

const mutations = {
  SET_EVALUATE: (state, evaluate) => {
    state.evaluate = evaluate
  },
  SET_EID: (state, eId) => {
    state.eId = eId
  },
  SET_PROJECTINFO: (state, projectInfo) => {
    Object.keys(state.info).forEach(function (key) {
      if (projectInfo[key] !== '') {
        state.info[key] = projectInfo[key]
      }
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
  },

}

const actions = {
  updateProject({
    commit
  }, newProject) {
    // if (newProject.evaluate !== '') {
    commit('SET_EVALUATE', newProject.evaluate)
    // }
    // if (newProject.info !== '') {
    commit('SET_PROJECTINFO', newProject.info)
    // }

    // if (newProject.createTime !== '') {
    commit('SET_CREATETIME', newProject.createTime)
    // }
    // if (newProject.endTime !== '') {
    commit('SET_ENDTIME', newProject.endTime)
    // }
    // if (newProject.creator !== '') {
    commit('SET_CREATOR', newProject.creator)
    // }
    // if (newProject.RWState !== "") {
    commit('SET_RWSTATE', newProject.RWState)
    // }
    // if (newProject.sendTo !== '') {
    commit('SET_SENDTO', newProject.sendTo)
    // }
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
