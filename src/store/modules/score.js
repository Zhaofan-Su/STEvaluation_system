import {
  stat
} from "fs"

const state = {
  design: {
    basic: [{
        satisfy: true,
        locked: false
      },
      {
        satisfy: true,
        locked: false
      }, {
        satisfy: true,
        locked: false
      }
    ],
    _2_2_1: [{
        children_question: [{
          satisfy: true,
          discription: '',
        }],
        locked: false
      },
      {
        children_question: [{
          satisfy: true,
          discription: '',
        }],
        locked: false
      },
      {
        children_question: [{
          satisfy: true,
          discription: '',
        }],
        locked: false
      },
      {
        children_question: [{
          satisfy: true,
          discription: '',
        }],
        locked: false
      },
      {
        children_question: [{
          satisfy: true,
          discription: ''
        }, {
          satisfy: true,
          discription: ''
        }, {
          satisfy: true,
          discription: ''
        }, {
          satisfy: true,
          discription: ''
        }, {
          satisfy: true,
          discription: ''
        }],
        locked: false
      },
      {
        children_question: [{
            satisfy: true,
            discription: ''
          },
          {
            satisfy: true,
            discription: ''
          }
        ],
        locked: false
      }
    ],
    _2_2_2: [{
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
        satisfy: true,
        description: ''
      }, {
        satisfy: true,
        description: ''
      }],
      locked: false
    }, {
      children_question: [{
        satisfy: true,
        description: ''
      }],
      locked: false
    }, {
      children_question: [{
        satisfy: true,
        description: ''
      }],
      locked: false
    }],
    _2_2_6: [{
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }],
    _2_2_7: [{
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }],
    _2_2_8: [{
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }],
    _2_2_9: [{
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }]
  },
  construct: {
    basic: [{
        satisfy: true,
        locked: false
      },
      {
        satisfy: true,
        locked: false
      }, {
        satisfy: true,
        locked: false
      }, {
        satisfy: true,
        locked: false
      },
      {
        satisfy: true,
        locked: false
      }, {
        satisfy: true,
        locked: false
      }
    ],
    _3_2_0: [],
    _3_2_1: [{
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }],
    _3_2_2: [{
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }],
    _3_2_3: [{
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }],
    _3_2_4: [{
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }],
    _3_2_5: [{
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }],
    _3_2_6: [{
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }],
    _3_2_7: [{
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }],
    _3_2_8: [{
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }, {
      satisfy: true,
      description: '',
      locked: false
    }],
    _3_2_9: [{
      children_question: [{
        satisfy: true,
        description: ''
      }],
      locked: false
    }, {
      children_question: [{
        satisfy: true,
        description: ''
      }],
      locked: false
    }, {
      children_question: [{
        satisfy: true,
        description: ''
      }, {
        satisfy: true,
        description: ''
      }, {
        satisfy: true,
        description: ''
      }],
      locked: false
    }, {
      children_question: [{
        satisfy: true,
        description: ''
      }],
      locked: false
    }],
    _3_2_10: [{
      indicator: '',
      description: '',
      locked: false
    }],
  },
  usage: {
    basic: [{
        satisfy: true,
        locked: false
      },
      {
        satisfy: true,
        locked: false
      }, {
        satisfy: true,
        locked: false
      }, {
        satisfy: true,
        locked: false
      }
    ],
    _4_2_1: [],
    _4_2_2: [],
    _4_2_3: [],
    _4_2_4: [],
    _4_2_5: []
  }

}

const mutations = {

  SET_SCORE: (state, score, phase, aspect) => {
    state[phase][aspect] = score
  }

}

const actions = {

  updateScore({
    commit
  }, score, phase, aspect) {
    commit('SET_SCORE', score, phase, aspect)
  },

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
