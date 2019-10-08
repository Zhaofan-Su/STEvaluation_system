import {
  stat
} from "fs"
import {
  getHistory,
  updateScore
} from '@/api/projects'

const state = {
  design: {
    basic: [{
        satisfy: "",
        locked: false
      },
      {
        satisfy: "",
        locked: false
      }, {
        satisfy: "",
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
            discription: ''
          },
          {
            satisfy: null,
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
        satisfy: "",
        subscore: 0
      }, {
        satisfy: "",
        subscore: 0
      }, {
        satisfy: '',
        subscore: 0
      }],
      score: null,
      description: '',
      locked: false
    }, {
      satisfy: "",
      score: 0,
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      score: 0,
      locked: false
    }],
    _2_2_6: [{
      satisfy: "",
      description: '',
      locked: false,
      score: 0
    }, {
      satisfy: "",
      description: '',
      locked: false,
      score: 0
    }, {
      satisfy: "",
      description: '',
      locked: false,
      score: 0
    }, {
      satisfy: "",
      description: '',
      locked: false,
      score: 0
    }, {
      satisfy: "",
      description: '',
      locked: false,
      score: 0
    }, {
      satisfy: "",
      description: '',
      locked: false,
      score: 0
    }, {
      satisfy: "",
      description: '',
      locked: false,
      score: 0
    }, {
      satisfy: "",
      description: '',
      locked: false,
      score: 0
    }, {
      satisfy: "",
      description: '',
      locked: false,
      score: 0
    }],
    _2_2_7: [{
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }],
    _2_2_8: [{
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }],
    _2_2_9: [{
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }],
    sum: 0
  },
  construct: {
    basic: [{
        satisfy: "",
        locked: false
      },
      {
        satisfy: "",
        locked: false
      }, {
        satisfy: "",
        locked: false
      }, {
        satisfy: "",
        locked: false
      },
      {
        satisfy: "",
        locked: false
      }, {
        satisfy: "",
        locked: false
      }
    ],
    _3_2_0: [{
        satisfy: "",
        description: '',
        locked: false
      },
      {
        satisfy: "",
        description: '',
        locked: false
      }, {
        satisfy: "",
        description: '',
        locked: false
      }, {
        satisfy: "",
        description: '',
        locked: false
      }, {
        satisfy: "",
        description: '',
        locked: false
      }, {
        satisfy: "",
        description: '',
        locked: false
      }, {
        satisfy: "",
        description: '',
        locked: false
      }
    ],
    _3_2_1: [{
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }],
    _3_2_2: [{
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }],
    _3_2_3: [{
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }],
    _3_2_4: [{
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }],
    _3_2_5: [{
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }],
    _3_2_6: [{
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }],
    _3_2_7: [{
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }],
    _3_2_8: [{
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }, {
      satisfy: "",
      description: '',
      locked: false
    }],
    _3_2_9: [{
      children_question: [{
        satisfy: "",
        description: ''
      }],
      locked: false
    }, {
      children_question: [{
        satisfy: "",
        description: ''
      }],
      locked: false
    }, {
      children_question: [{
        satisfy: "",
        description: ''
      }, {
        satisfy: "",
        description: ''
      }, {
        satisfy: "",
        description: ''
      }],
      locked: false
    }, {
      children_question: [{
        satisfy: "",
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
        satisfy: "",
        locked: false
      },
      {
        satisfy: "",
        locked: false
      }, {
        satisfy: "",
        locked: false
      }, {
        satisfy: "",
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

const mutations = {

  SET_SCORE: (state, obj) => {
    state[obj.phase][obj.aspect] = obj.score
    if (obj.sum !== null) {
      state[obj.phase].sum = obj.sum
    }
  },

  SET_SCORE_DB: (state, score) => {
    Object.keys(score).forEach(key => {
      state[key] = score[key]
    })
  }
}

const actions = {

  updateScore({
    commit,
    state,
    rootState
  }, obj) {
    commit('SET_SCORE', obj)
    return new Promise((resolve, reject) => {
      updateScore({
        userId: rootState.user.userId,
        eId: rootState.project.eId,
        score: state
      }).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })

  },

  // updateScore({
  //   commit
  // }, score, phase, aspect, sum) {
  //   commit('SET_SCORE', score, phase, aspect)
  // },


  getHistory({
    commit,
    rootState
  }, eId) {
    return new Promise((resolve, reject) => {
      getHistory({
        userId: rootState.user.userId,
        eId: eId
      }).then(response => {
        if (response.value !== null) {
          commit('SET_SCORE_DB', response.value)
          commit('project/SET_EID', eId)
        }
        resolve()
      }).catch(error => {
        // !!!!此处要进行处理
        // this.$router.push('/myprojects')
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
