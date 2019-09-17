import {
  stat
} from "fs"

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
          satisfy: "",
          discription: '',
          score: 0
        }],
        locked: false
      },
      {
        children_question: [{
          satisfy: "",
          discription: '',
          score: 0
        }],
        locked: false
      },
      {
        children_question: [{
          satisfy: "",
          discription: '',
          score: 0
        }],
        locked: false
      },
      {
        children_question: [{
          satisfy: "",
          discription: '',
          score: 0
        }],
        locked: false
      },
      {
        children_question: [{
          satisfy: "",
          discription: '',
          score: 0
        }, {
          satisfy: "",
          discription: '',
          score: 0
        }, {
          satisfy: "",
          discription: '',
          score: 0
        }, {
          satisfy: "",
          discription: '',
          score: 0
        }, {
          satisfy: "",
          discription: '',
          score: 0
        }],
        locked: false
      },
      {
        children_question: [{
            satisfy: "",
            discription: ''
          },
          {
            satisfy: "",
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
    _2_2_3: [],
    _2_2_4: [{
      indicator: null,
      description: "",
      locked: false
    }, {
      indicator: null,
      description: "",
      locked: false
    }, {
      indicator: null,
      description: "",
      locked: false
    }, {
      indicator: null,
      description: "",
      locked: false
    }, {
      indicator: null,
      description: "",
      locked: false
    }, {
      indicator: null,
      description: "",
      locked: false
    }],
    _2_2_5: [{
      children_question: [{
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
    }, {
      children_question: [{
        satisfy: "",
        description: ''
      }],
      locked: false
    }],
    _2_2_6: [{
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
    }, {
      satisfy: "",
      description: '',
      locked: false
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
    _3_2_0: [],
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

  SET_SCORE: (state, score, sum, phase, aspect) => {
    state[phase][aspect] = score
    state[phase].sum = sum
  }

}

const actions = {

  updateScore({
    commit
  }, score, sum, phase, aspect) {
    commit('SET_SCORE', score, sum, phase, aspect)
  },

}
export default {
  namespaced: "",
  state,
  mutations,
  actions
}
