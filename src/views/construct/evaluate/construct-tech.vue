<template>
  <div class="app-container">
    <h2>3.2.4&nbsp;装配化施工技术与工艺</h2>
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
  name: "OrgManage",
  data() {
    return {
      items: [
        {
          id: 1,
          title: "",
          aspect:
            "参评项目具备构建安装专项技术方案，内容包括构件成品保护、存放、翻转、起吊、定位、稳固、连接等技术措施和质量、安全控制措施",
          satisfy: true,
          max_score: "3",
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
            "构件连接技术施工方便、安全可靠，连接技术系统性强、经济适用，符合国家现行有关标准规定",
          satisfy: true,
          max_score: "3",
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
          aspect: "外墙、内墙、顶棚基本实现无抹灰",
          satisfy: true,
          max_score: "3",
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
          aspect: "外墙减少外脚手架施工，室内采用工具式、定型化安全支撑措施",
          satisfy: true,
          max_score: "3",
          score: "0",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
          popOverShow: false
        },
        {
          id: 5,
          title: "",
          aspect: "采用工具式、定型化模板及支撑系统，可重复使用30次以上",
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
          id: 6,
          title: "",
          aspect: "采用吊车满足100mm以下微动性的要求，有分配梁或分配桁架的吊具",
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
          id: 7,
          title: "",
          aspect: "项目所用成型钢筋、钢筋网片、钢筋桁架等由工厂加工制作",
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
          id: 8,
          title: "",
          aspect: "各机电设备管线预埋到位、采用机械连接方式",
          satisfy: true,
          max_score: "2",
          score: "0",
          description: "",
          evaluation_index: "",
          locked: false,
          dialogVisible: false,
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