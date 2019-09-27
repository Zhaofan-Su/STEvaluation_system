import {
  stat
} from "fs"
import {
  getHistory
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

  SET_SCORE: (state, score, phase, aspect) => {
    state[phase][aspect] = score
    // state[phase].sum = sum
  },

  SET_DETAIL: (state, score, sum, phase, aspect) => {
    state[phase][aspect] = score
    state[phase].sum = sum
  },
  SET_SCORE_DB: (state, score) => {
    Object.keys(score).forEach(key => {
      state[key] = score[key]
    })
  }
}

const actions = {

  updateScore({
    commit
  }, score, sum, phase, aspect) {
    commit('SET_SCORE', score, sum, phase, aspect)
  },

  updateScore({
    commit
  }, score, phase, aspect) {
    commit('SET_SCORE', score, phase, aspect)
  },


  getHistory({
    commit,
    state
  }, eId) {
    return new Promise((resolve, reject) => {
      getHistory({
        userId: state.userId,
        eId: eId
      }).then(response => {
        console.log(response)
        if (response.value !== null) {
          commit('SET_SCORE_DB', response.value)
        }
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
