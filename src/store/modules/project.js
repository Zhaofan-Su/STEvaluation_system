import {
  createProject
} from '@/api/projects'


const state = {
  evaluate: true,
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
  RWState: 0, //1，对所有人可见；0，对内部人员可见
  sendTo: [],
  status: ''
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
  SET_STATUS: (state, status) => {
    state.status = status
  }
}

const actions = {
  updateProject({
    commit
  }, newProject) {
    // if (newProject.evaluate !== '') {
    // commit('SET_EVALUATE', newProject.evaluate)
    // }
    // if (newProject.info !== '') {
    commit('SET_PROJECTINFO', newProject.info)
    // }

    // if (newProject.createTime !== '') {
    // commit('SET_CREATETIME', newProject.createTime)
    // }
    // if (newProject.endTime !== '') {
    commit('SET_ENDTIME', newProject.endTime)
    // }
    // if (newProject.creator !== '') {
    // commit('SET_CREATOR', newProject.creator)
    // }
    // if (newProject.RWState !== "") {
    commit('SET_RWSTATE', newProject.RWState)
    // }
    // if (newProject.sendTo !== '') {
    commit('SET_SENDTO', newProject.sendTo)
    // }

  },

  // evaluate({
  //   commit
  // }, evaluateState) {
  //   commit('SET_EVALUATE', evaluateState)
  // },

  createProject({
    dispatch,
    commit
  }, newProject) {
    const {
      info,
      createTime,
      endTime,
      creator,
      RWState,
      sendTo
    } = newProject
    return new Promise((resolve, reject) => {
      createProject({
        info: info,
        createTime: createTime,
        endTime: endTime,
        creator: creator,
        RWState: RWState,
        sendTo: sendTo
      }).then(response => {
        const {
          value
        } = response
        console.log(value)
        commit('SET_EID', value)
        commit('SET_EVALUATE', true)
        commit('SET_CREATETIME', newProject.createTime)
        commit('SET_CREATOR', newProject.creator)
        dispatch('updateProject', newProject)
        commit('SET_STATUS', 'pending')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })

  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
