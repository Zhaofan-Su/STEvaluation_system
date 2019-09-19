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
  // user register
  register({
    commit
  }, userInfo) {
    const {
      username,
      realname,
      mobile,
      password
    } = userInfo
    return new Promise

  },
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
          data
        } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
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
          data
        } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const {
          roles,
          avatar,
          introduction,
          userId,
          username,
          realname,
          mobile,
          role
        } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        // commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        commit('SET_USERNAME', username)
        commit('SET_USERID', userId)
        commit('SET_REALNAME', realname)
        commit('SET_MOBILE', mobile)
        commit('SET_ROLE', role)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info by id
  getUerById({
    commit,
    state
  }) {
    return new Promise((resolve, reject) => {
      getUserById(state.userId).then(response => {
        const {
          data
        } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const {
          roles,
          avatar,
          introduction,
          userId,
          username,
          realname,
          mobile,
          role
        } = data

        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        commit('SET_ROLES', roles)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        commit('SET_USERNAME', username)
        commit('SET_USERID', userId)
        commit('SET_REALNAME', realname)
        commit('SET_MOBILE', mobile)
        commit('SET_ROLE', role)
        resolve(data)
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
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
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
