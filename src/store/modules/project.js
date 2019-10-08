import {
  createProject,
  submitProject,
} from '@/api/projects'


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
  },

  updateProject({
    commit
  }, newProject) {
    commit('SET_PROJECTINFO', newProject.info)
    commit('SET_RWSTATE', newProject.RWState)
    commit('SET_SENDTO', newProject.sendTo)
  },

  changeProject({
    commit,
    state
  }, newProject) {
    Object.keys(newProject).forEach(key => {
      state[key] = newProject[key]
    })
    commit('SET_EVALUATE', true)
  },
  submitProject({
    commit
  }, project) {
    const {
      userId,
      eId,
      score,
      endTime
    } = project
    return new Promise((resolve, reject) => {
      submitProject({
        userId: userId,
        eId: eId,
        score: score,
        endTime: endTime
      }).then(response => {
        this.$message({
          message: '评估单提交成功',
          type: 'success'
        })

        // 是否更新状态还不确定
        commit('SET_STATUS', 'finished')
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },


  evaluate({
    commit
  }, evaluateState) {
    commit('SET_EVALUATE', evaluateState)
  },


}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
