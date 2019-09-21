const tokens = {
  '18717710887': {
    token: 'admin-token'
  },
  '18916093813': {
    token: 'inner-token'
  },
  '123456': {
    token: 'outer-token'
  },

}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    userId: 1,
    username: '管理员',
    realname: '张三',
    mobile: '18717710887',
    password: 'admin',
    role: 0
  },
  'inner-token': {
    roles: ['inner'],
    introduction: 'I am an inner worker for the company',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    userId: 2,
    username: '会飞的兔子',
    realname: '李四',
    mobile: '18916093813',
    password: 'inner',
    role: 1
  },
  'outer-token': {
    roles: ['outer'],
    introduction: 'I am an outer user',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    userId: 3,
    username: '小犀牛',
    realname: '王五',
    mobile: '123456',
    password: 'outer',
    role: 2
  },
  // 'editor-token': {
  //   roles: ['editor'],
  //   introduction: 'I am an editor',
  //   avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  //   username: 'Normal Editor'
  // }
}

export default [
  // user register
  // {
  //   url: '/user',
  //   type: 'post',
  //   response: config => {
  //     const {
  //       username,
  //       realname,
  //       mobile,
  //       password
  //     } = config.body


  //     tokens[mobile] = 'outer-token'
  //     users[mobile] = {
  //       'outer-token': {
  //         roles: ['outer'],
  //         introduction: 'I am an outer user',
  //         avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  //         userId: 3,
  //         username: username,
  //         realname: realname,
  //         mobile: mobile,
  //         password: password,
  //         role: 2
  //       }
  //     }

  //     return {
  //       code: 20000,
  //       data: {
  //         status: 200,
  //         message: 'success',
  //         value: {
  //           userId: '2333',
  //           username: username,
  //           realname: realname,
  //           mobile: mobile,
  //           role: 2
  //         }
  //       }
  //     }
  //   }
  // },
  // user login
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const {
        // username
        mobile,
        password
      } = config.body
      const token = tokens[mobile]

      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: token
      }
    }
  },

  // get user info
  {
    url: '/user/info\.*',
    type: 'get',
    response: config => {
      const {
        token
      } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // get user info by id

  // get users
  {
    url: '/v1/users',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          status: 200,
          message: 'success',
          value: users
        }
      }
    }
  },
  // user logout
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
