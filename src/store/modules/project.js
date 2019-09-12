// import router, {resetRouter} from '@/router'

const state = {
  evaluate: false,
  pId: null,
  pName: ''

}

const mutations = {
  SET_EVALUATE: (state, evaluate) => {
    state.evaluate = evaluate
  },
  SET_pId: (state, pId) => {
    state.pId = pId
  },
  SET_pName: (state, pName) => {
    state.pName = pName
  }
}

const actions = {
  // getProjectInfo({commit, state}){
  //     return new Promise((resolve, reject)=>{

  //     })
  // }
}
export default {
  namespaces: true,
  state,
  mutations,
  actions
}
