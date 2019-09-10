<template>
  <div class="app-container">
    <h2>建造阶段</h2>
    <el-card v-for="item in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header">
        <span class="number">3.1.{{item.id}}.</span>&nbsp;
        <span>{{item.aspect}}</span>
      </div>
      <el-radio-group v-model="item.satisfy">
        <el-radio :label="true" :disabled="item.locked">达标</el-radio>
        <el-radio :label="false" :disabled="item.locked">不达标</el-radio>
      </el-radio-group>
      <div class="options">
        <el-button
          type="primary"
          circle
          icon="el-icon-document"
          size="mini"
          @click="item.dialogVisible=true"
        ></el-button>
        <!-- 弹出框，提示具体的评价指标 -->
        <el-dialog
          :title="item.aspect+'--评价指标及要求'"
          :visible.sync="item.dialogVisible"
          width="30%"
          :before-close="handleClose"
          center
        >
          <span>{{item.evaluation_index}}</span>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="item.dialogVisible=false">确定</el-button>
          </span>
        </el-dialog>

        <el-popover
          v-if="!item.locked"
          placement="bottom"
          width="25"
          trigger="manual"
          content="已解锁"
          v-model="item.popOverShow"
        >
          <el-button
            type="primary"
            circle
            icon="el-icon-unlock"
            size="mini"
            slot="reference"
            @click="handleLock(item)"
          ></el-button>
        </el-popover>
        <el-popover
          v-else
          placement="bottom"
          width="25"
          trigger="manual"
          content="已锁定"
          v-model="item.popOverShow"
        >
          <el-button
            type="warning"
            circle
            icon="el-icon-lock"
            size="mini"
            slot="reference"
            @click="handleLock(item)"
          ></el-button>
        </el-popover>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ConstructBasic",
  data() {
    return {
      items: [
        {
          id: 1,
          aspect:
            "参评项目应按工业化建造方式编制施工组织计划，并满足建筑设计、生产运输、装配施工、装饰装修等环节的协调配合与组织管理要求",
          satisfy: true,
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 2,
          aspect:
            "参评项目室内装修工程应与建筑设计、构建制作、主体施工和机电设备安装实现一体化",
          satisfy: true,
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 3,
          aspect: "参评项目应具备专业化的施工队伍，并应建立员工培训和考核制度",
          satisfy: true,
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 4,
          aspect: "参评项目应建立项目质量终身责任信息档案",
          satisfy: true,
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 5,
          aspect:
            "参评项目建造过程建立节能、节水、节材和建筑物废弃管理制度，并具有相应的数据记录和节约效果分析",
          satisfy: true,
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 6,
          aspect:
            "参评项目设计、建造全过程应采用信息化管理技术，并应实现设计、生产、运输、施工、监理、运营等环节的协调工作",
          satisfy: true,
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        }
      ]
    };
  },
  methods: {
    handleClose() {
      this.$confirm("确认关闭?")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleLock(item) {
      item.popOverShow = !item.popOverShow;
      item.locked = !item.locked;
      setTimeout(() => {
        item.popOverShow = !item.popOverShow;
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.app-container {
  h2 {
    text-align: center;
  }

  .evaluation-item {
    width: 60%;
    margin: 10px auto;

    .number {
      font-weight: bold;
    }
    .options {
      margin: 20px 5px 10px 0;
      float: right;
    }
  }
}
</style>