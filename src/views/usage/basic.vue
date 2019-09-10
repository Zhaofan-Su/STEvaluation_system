<template>
  <div class="app-container">
    <h2>使用阶段</h2>
    <el-card v-for="item in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header">
        <span class="number">4.1.{{item.id}}.</span>&nbsp;
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
  name: "UsageBasic",
  data() {
    return {
      items: [
        {
          id: 1,
          aspect:
            "建筑设计应符合国家现行相关建筑节能设计标准中强制性条文的规定",
          satisfy: true,
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 2,
          aspect:
            "不应采用电直接加热设备作为供暖空调系统的供暖热源和空气加湿热源",
          satisfy: true,
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 3,
          aspect: "冷热源、输配系统和照明等各部分能耗应进行独立分项计量",
          satisfy: true,
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 4,
          aspect:
            "各房间或场所的照明功率密度值不应高于现行国家标准《建筑照明设计标准》GB50034中规定的现行指",
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