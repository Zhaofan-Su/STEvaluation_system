<template>
  <div class="main">
    <!-- <h1>欢迎使用装配式钢结构体系建筑一体化集成建造评价体系</h1> -->
    <h2 style="text-align:center;margin:50px auto;">您当前的身份是：管理员</h2>
    <div class="options" style="width:80%;margin:0 auto;">
      <el-row :gutter="30" type="flex" justify="space-around">
        <el-col :span="6" class="card">
          <el-card :body-style="{padding:'0px'}" shadow="hover">
            <img src="../../../assets/homepage/users.jpg" class="image" />
            <div class="card-footer">
              <el-button type="text" class="e-button" @click="toPeoples">用户管理</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" class="card">
          <el-card :body-style="{padding:'0px'}" shadow="hover">
            <img src="../../../assets/homepage/projects.jpg" class="image" />
            <div class="card-footer">
              <el-button type="text" class="e-button" @click="toProjects">项目管理</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" class="card">
          <el-card :body-style="{padding:'0px'}" shadow="hover">
            <img src="../../../assets/homepage/newProject.jpg" class="image" />
            <div class="card-footer">
              <el-button type="text" class="e-button" @click="createProject">新建项目</el-button>
              <newProject :dialogVisible="dialogVisible" />
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" class="card">
          <el-card :body-style="{padding:'0px'}" shadow="hover">
            <img src="../../../assets/homepage/myProject.png" class="image" />
            <div class="card-footer">
              <el-button type="text" class="e-button" @click="toMyProjects">我的项目</el-button>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import newProject from "../component/newProject";

export default {
  name: "AdminHomepage",
  components: { newProject },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    createProject() {
      this.dialogVisible = true;
    },
    toProjects() {
      this.$router.push("/projects");
    },
    toPeoples() {
      this.$router.push("/peoples");
    },
    toMyProjects() {
      this.$router.push("/myprojects");
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  .card {
    border-radius: 10px;
    .image {
      width: 100%;
      height: 100%;
      padding: 0;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }

    .card-footer {
      text-align: center;
      padding: 10px auto;

      >>> .el-button--medium {
        font-size: 16px;
        font-weight: 700;
        padding: 20px;
      }
    }
  }
}
</style>