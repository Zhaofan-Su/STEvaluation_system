import {
  stat
} from "fs";

const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,

  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,

  token: state => state.user.token,
  avatar: state => state.user.avatar,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  userId: state => state.user.userId,
  username: state => state.user.username,
  realname: state => state.user.realname,
  mobile: state => state.user.mobile,
  role: state => state.user.role,


  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,

  eId: state => state.project.eId,
  evaluate: state => state.project.evaluate,
  projectInfo: state => state.project.info,
  createTime: state => state.project.createTime,
  endTime: state => state.project.endTime,
  creator: state => state.project.creator,
  RWState: state => state.project.RWState,
  sendTo: state => state.project.sendTo,
  // score: state => state.project.score
  design: state => state.score.design,
  construct: state => state.score.construct,
  usage: state => state.score.usage

}
export default getters
