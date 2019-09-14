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
    _2_2_1: [],
    _2_2_2: [],
    _2_2_3: [],
    _2_2_4: [],
    _2_2_5: [],
    _2_2_6: [],
    _2_2_7: [],
    _2_2_8: [],
    _2_2_9: []
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
    _3_2_1: [],
    _3_2_2: [],
    _3_2_3: [],
    _3_2_4: [],
    _3_2_5: [],
    _3_2_6: [],
    _3_2_7: [],
    _3_2_8: [],
    _3_2_9: [],
    _3_2_10: [],
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
