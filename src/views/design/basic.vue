<template>
  <div class="app-container">
    <h2>设计阶段</h2>
    <el-card v-for="item in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header">
        <span class="number">2.1.{{item.id}}.</span>&nbsp;
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
  name: "DesignBasic",
  data() {
    return {
      items: [
        {
          id: 1,
          aspect: "参评项目的预制率不低于50%， 装配率不低于70%",
          satisfy: true,
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 2,
          aspect: "参评项目应进行建筑、结构、机电设备、室内装修一体化设计",
          satisfy: true,
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 3,
          aspect: "参评项目应具备完整的设计、施工和验收文件资料",
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