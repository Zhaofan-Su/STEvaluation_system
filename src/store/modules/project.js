import {
  createProject,
  submitProject,
  updateProjectInfo,
  getHistory,
  updateScore
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
  status: '',
  score: {
    design: {
      basic: [{
          satisfy: null,
          locked: false
        },
        {
          satisfy: null,
          locked: false
        }, {
          satisfy: null,
          locked: false
        }
      ],
      _2_2_1: [{
          children_question: [{
            satisfy: null,
            discription: '',
            score: 0
          }],
          locked: false
        },
        {
          children_question: [{
            satisfy: null,
            discription: '',
            score: 0
          }],
          locked: false
        },
        {
          children_question: [{
            satisfy: null,
            discription: '',
            score: 0
          }],
          locked: false
        },
        {
          children_question: [{
            satisfy: null,
            discription: '',
            score: 0
          }],
          locked: false
        },
        {
          children_question: [{
            satisfy: null,
            discription: '',
            score: 0
          }, {
            satisfy: null,
            discription: '',
            score: 0
          }, {
            satisfy: null,
            discription: '',
            score: 0
          }, {
            satisfy: null,
            discription: '',
            score: 0
          }, {
            satisfy: null,
            discription: '',
            score: 0
          }],
          locked: false
        },
        {
          children_question: [{
              satisfy: null,
              score: 0,
              discription: ''
            },
            {
              satisfy: null,
              score: 0,
              discription: ''
            }
          ],
          locked: false
        }
      ],
      _2_2_2: [{
        indicator: null,
        description: "",
        locked: false,
        score: 0
      }, {
        indicator: null,
        description: "",
        locked: false,
        score: 0
      }, {
        indicator: null,
        description: "",
        locked: false,
        score: 0
      }],
      _2_2_3: [{
        indicator: null,
        description: "",
        locked: false,
        score: 0
      }, {
        indicator: null,
        description: "",
        locked: false,
        score: 0
      }, {
        indicator: null,
        description: "",
        locked: false,
        score: 0
      }],
      _2_2_4: [{
        indicator: null,
        description: "",
        locked: false,
        score: 0
      }, {
        indicator: null,
        description: "",
        locked: false,
        score: 0
      }, {
        indicator: null,
        description: "",
        locked: false,
        score: 0
      }, {
        indicator: null,
        description: "",
        locked: false,
        score: 0
      }, {
        indicator: null,
        description: "",
        locked: false,
        score: 0
      }, {
        indicator: null,
        description: "",
        locked: false,
        score: 0
      }],
      _2_2_5: [{
        options: [{
          satisfy: null,
          subscore: 0
        }, {
          satisfy: null,
          subscore: 0
        }, {
          satisfy: null,
          subscore: 0
        }],
        score: 0,
        description: '',
        locked: false
      }, {
        satisfy: null,
        score: 0,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        score: 0,
        locked: false
      }],
      _2_2_6: [{
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        },
        {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        },
        {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        },
        {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }
      ],
      _2_2_7: [{
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }],
      _2_2_8: [{
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }],
      _2_2_9: [{
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }],
      sum: 0
    },
    construct: {
      basic: [{
          satisfy: null,
          locked: false
        },
        {
          satisfy: null,
          locked: false
        }, {
          satisfy: null,
          locked: false
        }, {
          satisfy: null,
          locked: false
        },
        {
          satisfy: null,
          locked: false
        }, {
          satisfy: null,
          locked: false
        }
      ],
      _3_2_0: [{
          satisfy: null,
          description: '',
          locked: false
        },
        {
          satisfy: null,
          description: '',
          locked: false
        }, {
          satisfy: null,
          description: '',
          locked: false
        }, {
          satisfy: null,
          description: '',
          locked: false
        }, {
          satisfy: null,
          description: '',
          locked: false
        }, {
          satisfy: null,
          description: '',
          locked: false
        }, {
          satisfy: null,
          description: '',
          locked: false
        }
      ],
      _3_2_1: [{
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }],
      _3_2_2: [{
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }],
      _3_2_3: [{
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }],
      _3_2_4: [{
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }],
      _3_2_5: [{
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }],
      _3_2_6: [{
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }],
      _3_2_7: [{
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }],
      _3_2_8: [{
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }, {
        satisfy: null,
        description: '',
        locked: false
      }],
      _3_2_9: [{
        children_question: [{
          satisfy: null,
          description: ''
        }],
        locked: false
      }, {
        children_question: [{
          satisfy: null,
          description: ''
        }],
        locked: false
      }, {
        children_question: [{
          satisfy: null,
          description: ''
        }, {
          satisfy: null,
          description: ''
        }, {
          satisfy: null,
          description: ''
        }],
        locked: false
      }, {
        children_question: [{
          satisfy: null,
          description: ''
        }],
        locked: false
      }],
      _3_2_10: [{
        indicator: '',
        description: '',
        locked: false
      }],
      sum: 0
    },
    usage: {
      basic: [{
          satisfy: null,
          locked: false
        },
        {
          satisfy: null,
          locked: false
        }, {
          satisfy: null,
          locked: false
        }, {
          satisfy: null,
          locked: false
        }
      ],
      _4_2_1: [],
      _4_2_2: [],
      _4_2_3: [],
      _4_2_4: [],
      _4_2_5: [],
      sum: 0
    }

  }
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
  },
  SET_SCORE: (state, obj) => {
    state.score[obj.phase][obj.aspect] = obj.score
    if (obj.sum !== null) {
      state.score[obj.phase].sum = obj.sum
    }
  },

  SET_SCORE_DB: (state, score) => {
    if (score !== null) {
      Object.keys(score).forEach(key => {
        state.score[key] = score[key]
      })
    } else {
      state.score = null
    }
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
    dispatch('clearScore')
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
        // dispatch('updateProjectInfo', newProject)
        commit('SET_PROJECTINFO', newProject.info)
        commit('SET_RWSTATE', newProject.RWState)
        commit('SET_SENDTO', newProject.sendTo)
        commit('SET_STATUS', 'pending')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  updateProjectInfo({
    commit,
    state
  }, updatingProject) {
    const {
      info,
      RWState,
      sendTo
    } = updatingProject
    return new Promise((resolve, reject) => {
      updateProjectInfo({
        eId: state.eId,
        info: info,
        rwState: RWState,
        sendTo: sendTo
      }).then(response => {
        commit('SET_PROJECTINFO', updatingProject.info)
        commit('SET_RWSTATE', updatingProject.RWState)
        commit('SET_SENDTO', updatingProject.sendTo)
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })

  },

  changeProject({
    commit,
    state,
    dispatch
  }, newProject) {
    dispatch('clearScore')
    Object.keys(newProject).forEach(key => {
      state[key] = newProject[key]
    })
    commit('SET_EVALUATE', true)
  },

  submitProject({
    commit,
    dispatch
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
        dispatch('clearDetail')
        this.$message({
          message: '评估单提交成功',
          type: 'success'
        })

        // 是否更新状态还不确定
        commit('SET_STATUS', 'finished')
        this.$router.push('/')
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

  clearDetail({
    commit,
    dispatch
  }) {
    commit('SET_EVALUATE', false)
    commit('SET_EID', '')
    dispatch('clearScore')
  },

  evaluate({
    commit
  }, evaluateState) {
    commit('SET_EVALUATE', evaluateState)
  },

  updateScore({
    commit,
    state,
    rootState,
    dispatch
  }, obj) {
    dispatch('clearScore')
    commit('SET_SCORE', obj)
    return new Promise((resolve, reject) => {
      updateScore({
        userId: rootState.user.userId,
        eId: state.eId,
        score: state.score
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })

  },


  getHistory({
    commit,
    rootState,
    dispatch
  }, eId) {
    return new Promise((resolve, reject) => {
      getHistory({
        userId: rootState.user.userId,
        eId: eId
      }).then(response => {
        if (response.value !== null) {
          commit('SET_EID', eId)
          dispatch('clearScore')
          commit('SET_SCORE_DB', response.value.score)
        }
        resolve()
      }).catch(error => {
        // !!!!此处要进行处理
        this.$router.push('/')
        reject(error)
      })
    })
  },

  clearScore({
    state
  }) {
    const newState = {
      design: {
        basic: [{
            satisfy: null,
            locked: false
          },
          {
            satisfy: null,
            locked: false
          }, {
            satisfy: null,
            locked: false
          }
        ],
        _2_2_1: [{
            children_question: [{
              satisfy: null,
              discription: '',
              score: 0
            }],
            locked: false
          },
          {
            children_question: [{
              satisfy: null,
              discription: '',
              score: 0
            }],
            locked: false
          },
          {
            children_question: [{
              satisfy: null,
              discription: '',
              score: 0
            }],
            locked: false
          },
          {
            children_question: [{
              satisfy: null,
              discription: '',
              score: 0
            }],
            locked: false
          },
          {
            children_question: [{
              satisfy: null,
              discription: '',
              score: 0
            }, {
              satisfy: null,
              discription: '',
              score: 0
            }, {
              satisfy: null,
              discription: '',
              score: 0
            }, {
              satisfy: null,
              discription: '',
              score: 0
            }, {
              satisfy: null,
              discription: '',
              score: 0
            }],
            locked: false
          },
          {
            children_question: [{
                satisfy: null,
                discription: '',
                score: 0
              },
              {
                satisfy: null,
                discription: '',
                score: 0
              }
            ],
            locked: false
          }
        ],
        _2_2_2: [{
          indicator: '',
          description: "",
          locked: false,
          score: 0
        }, {
          indicator: '',
          description: "",
          locked: false,
          score: 0
        }, {
          indicator: '',
          description: "",
          locked: false,
          score: 0
        }],
        _2_2_3: [{
          indicator: null,
          description: "",
          locked: false,
          score: 0
        }, {
          indicator: null,
          description: "",
          locked: false,
          score: 0
        }, {
          indicator: null,
          description: "",
          locked: false,
          score: 0
        }],
        _2_2_4: [{
          indicator: null,
          description: "",
          locked: false,
          score: 0
        }, {
          indicator: null,
          description: "",
          locked: false,
          score: 0
        }, {
          indicator: null,
          description: "",
          locked: false,
          score: 0
        }, {
          indicator: null,
          description: "",
          locked: false,
          score: 0
        }, {
          indicator: null,
          description: "",
          locked: false,
          score: 0
        }, {
          indicator: null,
          description: "",
          locked: false,
          score: 0
        }],
        _2_2_5: [{
          options: [{
            satisfy: null,
            subscore: 0
          }, {
            satisfy: null,
            subscore: 0
          }, {
            satisfy: '',
            subscore: 0
          }],
          score: 0,
          description: '',
          locked: false
        }, {
          satisfy: null,
          score: 0,
          description: '',
          locked: false
        }, {
          satisfy: null,
          description: '',
          score: 0,
          locked: false
        }],
        _2_2_6: [{
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }],
        _2_2_7: [{
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }],
        _2_2_8: [{
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }],
        sum: 0
      },
      construct: {
        basic: [{
            satisfy: null,
            locked: false
          },
          {
            satisfy: null,
            locked: false
          }, {
            satisfy: null,
            locked: false
          }, {
            satisfy: null,
            locked: false
          },
          {
            satisfy: null,
            locked: false
          }, {
            satisfy: null,
            locked: false
          }
        ],
        _3_2_0: [{
            satisfy: null,
            description: '',
            locked: false,
            score: 0
          },
          {
            satisfy: null,
            description: '',
            locked: false,
            score: 0
          }, {
            satisfy: null,
            description: '',
            locked: false,
            score: 0
          }, {
            satisfy: null,
            description: '',
            locked: false,
            score: 0
          }, {
            satisfy: null,
            description: '',
            locked: false,
            score: 0
          }, {
            satisfy: null,
            description: '',
            locked: false,
            score: 0
          }, {
            satisfy: null,
            description: '',
            locked: false,
            score: 0
          }
        ],
        _3_2_1: [{
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }],
        _3_2_2: [{
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }],
        _3_2_3: [{
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }],
        _3_2_4: [{
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }],
        _3_2_5: [{
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }],
        _3_2_6: [{
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }],
        _3_2_7: [{
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }],
        _3_2_8: [{
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }, {
          satisfy: null,
          description: '',
          locked: false,
          score: 0
        }],
        _3_2_9: [{
          children_question: [{
            satisfy: null,
            description: '',
            score: 0
          }],
          locked: false
        }, {
          children_question: [{
            satisfy: null,
            description: '',
            score: 0
          }],
          locked: false
        }, {
          children_question: [{
            satisfy: null,
            description: '',
            score: 0
          }, {
            satisfy: null,
            description: '',
            score: 0
          }, {
            satisfy: null,
            description: '',
            score: 0
          }],
          locked: false
        }, {
          children_question: [{
            satisfy: null,
            description: '',
            score: 0
          }],
          locked: false
        }],
        _3_2_10: [{
          indicator: '',
          description: '',
          locked: false,
          score: 0
        }],
        sum: 0
      },
      usage: {
        basic: [{
            satisfy: null,
            locked: false
          },
          {
            satisfy: null,
            locked: false
          }, {
            satisfy: null,
            locked: false
          }, {
            satisfy: null,
            locked: false
          }
        ],
        _4_2_1: [],
        _4_2_2: [],
        _4_2_3: [],
        _4_2_4: [],
        _4_2_5: [],
        sum: 0
      }
    }
    state.design = newState.design
    state.construct = newState.construct
    state.usage = newState.usage
  }

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
