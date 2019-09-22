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
            <i class="el-icon-upload" @click="submitProject" />
          </div>
        </el-tooltip>
        <el-tooltip effect="dark" content="新建项目" placement="bottom">
          <div id="newProject" class="right-menu-item hover-effect" @click="handleNewProject">
            <i class="el-icon-document-add" />
          </div>
        </el-tooltip>
      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </el-dropdown-item>
          <router-link to="/profile/index">
            <el-dropdown-item>用户中心</el-dropdown-item>
          </router-link>
          <!-- <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>-->
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">注销</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <el-dialog
      title="新建项目"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
      center
    >
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="项目名称" prop="projectName">
          <el-input v-model="form.projectName" />
        </el-form-item>
        <el-form-item label="所在省份">
          <el-input v-model="form.province" placeholder="请输入省份" />
        </el-form-item>
        <el-form-item label="所在城市">
          <el-input v-model="form.city" placeholder="请输入城市" />
        </el-form-item>
        <el-form-item label="建筑类型" prop="type">
          <el-radio-group v-model="form.type">
            <el-radio label="居住建筑" />
            <el-radio label="公共建筑" />
            <el-radio label="厂房" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否公开" prop="RWState">
          <el-radio-group v-model="RWState">
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
import { mapGetters } from "vuex";
import Hamburger from "@/components/Hamburger";
import Screenfull from "@/components/Screenfull";
import SizeSelect from "@/components/SizeSelect";
import Search from "@/components/HeaderSearch";
export default {
  components: {
    // Breadcrumb,
    Hamburger,
    // ErrorLog,
    Screenfull,
    SizeSelect,
    Search
  },
  data () {
    return {
      dialogVisible: false,
      form: {
        projectName: '',
        province: '',
        city: '',
        type: ''
      },
      RWState: null,
    }
  },
  computed: {
    ...mapGetters(["sidebar", "avatar", "device", "roles", "evaluate", "userId", "projectInfo"])
  },
  methods: {
    toggleSideBar () {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout () {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
    submitProject () {

    },
    handleNewProject () {
      this.dialogVisible = true
    },


    handleClose () {
      let _this = this
      this.$confirm("是否创建项目？")
        .then(_ => {
          this.dialogVisible = false;
          this.createProject();
        })
        .catch(_ => {
          this.dialogVisible = false;
        });
    },
    handleCancle () {
      this.dialogVisible = false;
    },
    createProject () {
      // 用户进入评估状态
      this.$store.dispatch('project/evaluate', true);
      this.$router.push("/projectInfo");
      // 对话框消失
      // this.dialogVisible = false;
      // 成功创建提示
      // this.$message({
      //   message: "成功创建项目",
      //   type: "success"
      // });
      // let newCase = {
      //   evaluate: true,
      //   info: this.form,
      //   createTime: new Date().toJSON(),
      //   // endTime: endTime.toJSON(),
      //   creator: this.userId,
      //   RWState: this.RWState,
      // };

      // this.$store.dispatch('project/updateProject', newCase);
      // this.$router.push("/projectInfo");
    },
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

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 35px;
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
