<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <div v-if="!evaluate">
      <router-link to="/">
        <div id="project-name" class="project-name">装配式钢结构体系建筑一体化集成建造评价体系</div>
      </router-link>
    </div>
    <div v-else>
      <router-link to="/projectInfo">
        <div id="project-name" class="project-name">{{projectInfo.projectName}}</div>
      </router-link>
    </div>

    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <el-tooltip effect="dark" content="提交项目" placement="bottom">
          <div id="submit" class="right-menu-item hover-effect">
            <svg-icon icon-class="upload" @click="submitProject" />
          </div>
        </el-tooltip>
        <el-tooltip effect="dark" content="新建项目" placement="bottom">
          <div id="newProject" class="right-menu-item hover-effect" @click="handleNewProject">
            <!-- <i class="el-icon-document-add" /> -->

            <svg-icon icon-class="newProject" />
          </div>
        </el-tooltip>

        <el-tooltip effect="dark" content="注销" placement="bottom">
          <div id="logout" class="right-menu-item hover-effect" @click="logout">
            <!-- <i class="el-icon-document-add" /> -->

            <svg-icon icon-class="logout" />
          </div>
        </el-tooltip>
      </template>

      <!-- <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click"> -->
      <!-- <div class="avatar-wrapper"> -->
      <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar" /> -->
      <!-- <i class="user-avatar el-icon-user" /> -->
      <!-- <svg-icon icon-class="myself" /> -->
      <!-- <i class="el-icon-caret-bottom" /> -->
      <!-- <svg-icon icon-class="dropdown" /> -->
      <!-- </div> -->
      <!-- <el-dropdown-menu slot="dropdown"> -->
      <!-- <el-dropdown-item to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </el-dropdown-item>
          <router-link to="/profile/index">
            <el-dropdown-item>用户中心</el-dropdown-item>
      </router-link>-->
      <!-- <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
      </a>-->
      <!-- <el-dropdown-item> -->
      <!-- <span style="display:block;" @click="logout">注销</span> -->
      <!-- </el-dropdown-item> -->
      <!-- <el-dropdown-item divided>
            <span style="display:block;" @click="logout">注销</span>
      </el-dropdown-item>-->
      <!-- </el-dropdown-menu> -->
      <!-- </el-dropdown> -->
    </div>

    <el-dialog
      title="新建项目"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
      center
    >
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="项目名称" prop="projectName">
          <el-input v-model="form.projectName" />
        </el-form-item>
        <el-form-item label="项目建筑面积" prop="area">
          <el-input v-model.number="form.area" style="width: 200px">
            <template slot="suffix">m^2</template>
          </el-input>
        </el-form-item>
        <el-form-item label="建筑主题高度" prop="height">
          <el-input v-model.number="form.height" type="text" style="width: 200px">
            <template slot="suffix">m</template>
          </el-input>
        </el-form-item>
        <el-form-item label="建筑类型" prop="type">
          <el-radio-group v-model="form.type">
            <el-radio label="居住建筑" />
            <el-radio label="公共建筑" />
            <el-radio label="厂房" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否公开">
          <el-radio-group v-model="form.RWState">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createProject">新建项目</el-button>
        <el-button type="primary" @click="dialogVisible=false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Hamburger from "@/components/Hamburger";
import Screenfull from "@/components/Screenfull";
import SizeSelect from "@/components/SizeSelect";
import Search from "@/components/HeaderSearch";
import { createProject, submitProject } from "@/api/projects";
import getters from "@/store/getters";
export default {
  components: {
    // Breadcrumb,
    Hamburger,
    // ErrorLog,
    Screenfull,
    SizeSelect,
    Search
  },
  data() {
    return {
      dialogVisible: false,
      form: {
        projectName: "",
        province: "",
        area: "",
        height: "",
        RWState: 0
      },
      rules: {
        projectName: [
          { required: true, message: "请输入项目名称", trigger: "blur" }
        ],
        area: [
          { required: true, message: "请输入建筑面积", trigger: "blur" },
          { type: "number", message: "必须输入数字" }
        ],
        height: [
          { required: true, message: "请输入建筑面积", trigger: "blur" },
          { type: "number", message: "必须输入数字" }
        ],
        type: [{ required: true, message: "请选择建筑类型", trigger: "change" }]
      }
    };
  },
  computed: {
    ...mapGetters([
      "sidebar",
      "avatar",
      "device",
      "roles",
      "evaluate",
      "userId",
      "projectInfo",
      "score"
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    handleNewProject() {
      this.dialogVisible = true;
    },
    handleClose() {
      let _this = this;
      this.$confirm("是否创建项目？")
        .then(_ => {
          this.dialogVisible = false;
          this.createProject();
        })
        .catch(_ => {
          this.dialogVisible = false;
        });
    },
    handleCancle() {
      this.dialogVisible = false;
    },
    createProject() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 用户进入评估状态
          let newCase = {
            evaluate: true,
            info: this.form,
            createTime: new Date().toJSON(),
            creator: this.userId,
            RWState: this.RWState,
            sendTo: []
          };
          this.$store
            .dispatch("project/createProject", newCase)
            .then(() => {
              //成功创建提示
              this.$message({
                message: "成功创建项目",
                type: "success"
              });
              this.$router.push("/projectInfo");
            })
            .catch(error => {
              this.$message({
                message: error.message,
                type: "wrong"
              });
            });

          // 对话框消失
          this.dialogVisible = false;
          // 信息拿到本地
          this.$store.dispatch("project/updateProjectInfo", newCase);
        }
      });
    },
    submitProject() {
      if (this.$store.getters.project.eId !== "") {
        this.$confirm(
          "项目提交之后不可再进行更改！\n确定提交评估单？",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }
        )
          .then(() => {
            console.log(this.score);
            let project = {
              userId: this.userId,
              eId: this.$store.getters.project.eId,
              info: this.$store.getters.project.info,
              score: this.score,
              endTime: new Date().toJSON()
            };
            submitProject(project)
              .then(response => {
                this.$message({
                  message: "评估单提交成功",
                  type: "success"
                });
                this.$router.push("/");
              })
              .catch(error => {
                this.$message({
                  message: "评估单提交失败",
                  type: "warning"
                });
              });
          })
          .catch(error => {
            this.$message({
              message: "提交已取消",
              type: "info"
            });
          });
      } else {
        this.$message({
          message: "您当前还未选择项目",
          type: "error"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }
  .project-name {
    float: left;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
    cursor: pointer;
    color: #97a8be;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    margin-right: 8px;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 20px;
      color: #5a5e66;
      vertical-align: text-bottom;

      .el-icon-upload,
      .el-icon-document-add {
        vertical-align: middle;
      }
      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
