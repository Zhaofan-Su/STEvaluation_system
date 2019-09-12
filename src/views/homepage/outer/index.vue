<template>
  <div class="main">
    <!-- <h1>欢迎使用装配式钢结构体系建筑一体化集成建造评价体系</h1> -->
    <h2 style="text-align:center;margin:50px auto;">您当前的身份是：外部使用人员</h2>
    <div class="options" style="width:80%;margin:0 auto;">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card :body-style="{padding:'0px'}" shadow="hover" class="card">
            <img src="../../../assets/homepage/newProject.jpg" class="image" />
            <div class="card-footer">
              <el-button type="text" class="e-button" @click="dialogVisible=true">新建项目</el-button>
              <newProject :dialogVisible="dialogVisible" />
            </div>
          </el-card>
          <el-col :span="6" class="card">
            <el-card :body-style="{padding:'0px'}" shadow="hover">
              <img src="../../../assets/homepage/myProject.png" class="image" />
              <div class="card-footer">
                <el-button type="text" class="e-button" @click="toMyProjects">我的项目</el-button>
              </div>
            </el-card>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import newProject from "../component/newProject";

export default {
  name: "OuterHomepage",
  components: { newProject },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {}
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