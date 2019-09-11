<template>
  <div class="app-container">
    <h2>2.2.6&nbsp;设计深度相关</h2>
    <el-card v-for="item in items" :key="item.id" class="evaluation-item" shadow="hover">
      <div slot="header" class="clearfix">
        <span class="number">{{ item.id }}.&nbsp;{{ item.title }}</span>
        <div class="options">
          <el-button
            type="primary"
            circle
            icon="el-icon-document"
            size="mini"
            @click="item.dialogVisible=true"
          />
          <!-- 弹出框，提示具体的评价指标 -->
          <el-dialog
            :title="item.title+'--评价指标及要求'"
            :visible.sync="item.dialogVisible"
            width="30%"
            :before-close="handleClose"
            center
          >
            <span>{{ item.evaluation_index }}</span>
            <span slot="footer" class="dialog-footer">
              <el-button type="primary" @click="item.dialogVisible=false">确定</el-button>
            </span>
          </el-dialog>

          <el-popover
            v-if="!item.locked"
            v-model="item.popOverShow"
            placement="bottom"
            width="25"
            trigger="manual"
            content="已解锁"
          >
            <el-button
              slot="reference"
              type="primary"
              circle
              icon="el-icon-unlock"
              size="mini"
              @click="handleLock(item)"
            />
          </el-popover>
          <el-popover
            v-else
            v-model="item.popOverShow"
            placement="bottom"
            width="25"
            trigger="manual"
            content="已锁定"
          >
            <el-button
              slot="reference"
              type="warning"
              circle
              icon="el-icon-lock"
              size="mini"
              @click="handleLock(item)"
            />
          </el-popover>
        </div>
      </div>
      <el-card class="children-question" shadow="never">
        <div slot="header" class="children-header">
          <div>{{ item.aspect }}.（{{ item.max_score }}分）</div>
        </div>
        <el-form ref="form" :model="item" label-width="100px">
          <el-form-item label="是否满足">
            <el-radio-group v-model="item.satisfy">
              <el-radio :label="true" :disabled="item.locked">是</el-radio>
              <el-radio :label="false" :disabled="item.locked">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="!item.satisfy" label="不满足简述">
            <el-input v-model="item.description" label="不满足简述" type="textarea" />
          </el-form-item>
        </el-form>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "DesignDepth",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "",
          aspect:
            "具有完整的构件深化图，主要包括：设计说明、构件统计表、连接节点详图、构件加工详图、预埋件详图",
          satisfy: true,
          max_score: "2",
          score: "0",

          description: "",

          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 2,
          title: "",
          aspect:
            "构件深化图要满足工厂生产、施工装配等相关环节承接工序的技术和安全要求，各种埋件、连接件设计准确、清晰、合理",
          satisfy: true,
          max_score: "4",
          score: "0",
          description: "",

          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 3,
          title: "",
          aspect:
            "构件设计与构件生产工业结合良好，与构件生产工厂建立有协同工作机制",
          satisfy: true,
          max_score: "2",
          score: "0",
          description: "",

          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 4,
          title: "",
          aspect: "项目设计与施工组织紧密结合，与施工企业建立有协同工作机制",
          satisfy: true,
          max_score: "2",
          score: "0",
          dialogVisible: false,

          evaluation_index: "",
          description: "",
          locked: false,
          popOverShow: false
        },
        {
          id: 5,
          title: "",
          aspect:
            "构件设计合理、规格尺寸优化、便于生产制作，有利于提高工效，降低成本",
          satisfy: true,
          max_score: "4",
          score: "0",
          dialogVisible: false,

          evaluation_index: "",
          description: "",
          locked: false,
          popOverShow: false
        },
        {
          id: 6,
          title: "",
          aspect: "构件连接技术安全可靠、构造合理、施工简便",
          satisfy: true,
          max_score: "2",
          score: "0",
          dialogVisible: false,
          evaluation_index: "",
          description: "",
          locked: false,
          popOverShow: false
        },
        {
          id: 7,
          title: "",
          aspect: "构件设计满足构件运输和吊装能力要求，便于安装施工",
          satisfy: true,
          max_score: "2",
          score: "0",
          dialogVisible: false,
          evaluation_index: "",
          description: "",
          locked: false,
          popOverShow: false
        },
        {
          id: 8,
          title: "",
          aspect: "满足不同施工外架条件的影响以及模板和支撑系统的采用",
          satisfy: true,
          max_score: "4",
          score: "0",
          dialogVisible: false,
          evaluation_index: "",
          description: "",
          locked: false,
          popOverShow: false
        },
        {
          id: 9,
          title: "",
          aspect: "构件设计综合考虑了装配化施工的安装调节和公差配合要求",
          satisfy: true,
          max_score: "2",
          score: "0",
          dialogVisible: false,
          evaluation_index: "",
          description: "",
          locked: false,
          popOverShow: false
        }
      ]
    };
  },
  methods: {
    // 计算分数的时候，第一项可能要先获取项目资料
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

    >>> .el-card__header {
      padding: 10px 20px;
    }
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both;
    }
    .clearfix {
      overflow: hidden;
      position: relative;
      .number {
        font-weight: bold;
        position: absolute;
        bottom: 0;
      }
      .options {
        float: right;
        bottom: 0;
      }
    }

    .children-question {
      width: 100%;
      border: none;

      >>> .el-card__header {
        border-bottom: 0px;
        padding: 0px 20px;
      }
      >>> .el-card__body {
        padding: 10px 20px;
      }
    }
  }
}
</style>