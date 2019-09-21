import {
  register,
  login,
  logout,
  getInfo,
  getUserById
} from '@/api/user'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import router, {
  resetRouter
} from '@/router'
// import {
//   getUserById
// } from '../../api/user'

const state = {
  token: getToken(),
  userId: '',
  avatar: '',
  introduction: '',
  roles: [],
  username: '',
  realname: '',
  mobile: '',
  password: '',
  role: 2
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_USERID: (state, userId) => {
    state.userId = userId
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_REALNAME: (state, realname) => {
    state.realname = realname
  },
  SET_MOBILE: (state, mobile) => {
    state.mobile = mobile
  },
  SET_PASSWORD: (state, password) => {
    state.password = password
  },
  SET_ROLE: (state, role) => {
    state.role = role
  }
}

const actions = {
  // user login
  login({
    commit
  }, userInfo) {
    const {
      // username,
      mobile,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
        // username: username.trim(),
        mobile: mobile,
        password: password
      }).then(response => {
        const {
          value
        } = response

        // 用id代替token
        commit('SET_TOKEN', value.id)
        setToken(value.id)
        commit('SET_MOBILE', value.mobile)
        commit('SET_USERNAME', value.username)
        commit('SET_REALNAME', value.realname)
        commit('SET_ROLE', value.role)
        if (value.role == 0) {
          commit('SET_ROLES', ['admin'])
        } else if (value.role == 1) {
          commit('SET_ROLES', ['inner'])
        } else if (value.role == 2) {
          commit('SET_ROLES', ['outer'])
        }

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const {
          value
        } = response

        if (!value) {
          reject('Verification failed, please Login again.')
        }

        const {
          roles,
          // avatar,
          // introduction,
          id,
          username,
          realname,
          mobile,
          role
        } = value

        // commit('SET_ROLES', roles)
        if (role == 0) {
          commit('SET_ROLES', ['admin'])
          value.roles = ['admin']
        } else if (role == 1) {
          commit('SET_ROLES', ['inner'])
          value.roles = ['inner']
        } else if (role == 2) {
          commit('SET_ROLES', ['outer'])
          value.roles = ['outer']
        }
        // commit('SET_AVATAR', avatar)
        // commit('SET_INTRODUCTION', introduction)
        commit('SET_USERNAME', username)
        commit('SET_USERID', id)
        commit('SET_REALNAME', realname)
        commit('SET_MOBILE', mobile)
        commit('SET_ROLE', role)
        resolve(value)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({
    commit,
    state
  }) {

    commit('SET_TOKEN', '')
    commit('SET_ROLES', [])
    removeToken()
    resetRouter()

  },

  // remove token
  resetToken({
    commit
  }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // dynamically modify permissions
  changeRoles({
    commit,
    dispatch
  }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const {
        roles
      } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, {
        root: true
      })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      // reset visited views and cached views
      dispatch('tagsView/delAllViews', null, {
        root: true
      })

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
