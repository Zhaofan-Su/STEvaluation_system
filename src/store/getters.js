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
  userId: state => state.user.id,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  evaluate: state => state.project.evaluate,
  projectInfo: state => state.project.info,
  createTime: state => state.project.createTime,
  endTime: state => state.project.endTime,
  creator: state => state.project.creator,
  RWState: state => state.project.RWState,
  sendTo: state => state.project.sendTo

}
export default getters
